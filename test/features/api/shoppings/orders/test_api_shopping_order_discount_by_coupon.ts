import { TestValidator } from "@nestia/e2e";
import typia from "typia";

import ShoppingApi from "@samchon/shopping-api/lib/index";
import { IShoppingCoupon } from "@samchon/shopping-api/lib/structures/shoppings/coupons/IShoppingCoupon";
import { IShoppingCartCommodity } from "@samchon/shopping-api/lib/structures/shoppings/orders/IShoppingCartCommodity";
import { IShoppingOrder } from "@samchon/shopping-api/lib/structures/shoppings/orders/IShoppingOrder";
import { IShoppingOrderPrice } from "@samchon/shopping-api/lib/structures/shoppings/orders/IShoppingOrderPrice";
import { IShoppingSale } from "@samchon/shopping-api/lib/structures/shoppings/sales/IShoppingSale";

import { ConnectionPool } from "../../../../ConnectionPool";
import { test_api_shopping_actor_admin_login } from "../actors/test_api_shopping_actor_admin_login";
import { test_api_shopping_actor_customer_create } from "../actors/test_api_shopping_actor_customer_create";
import { test_api_shopping_actor_seller_join } from "../actors/test_api_shopping_actor_seller_join";
import { generate_random_cart_commodity } from "../carts/internal/generate_random_cart_commodity";
import { generate_random_coupon } from "../coupons/internal/generate_random_coupon";
import { prepare_random_coupon } from "../coupons/internal/prepare_random_coupon";
import { generate_random_sale } from "../sales/internal/generate_random_sale";
import { generate_random_order } from "./internal/generate_random_order";

export const test_api_shopping_order_discount_by_copuon = async (
  pool: ConnectionPool,
): Promise<void> => {
  await test_api_shopping_actor_admin_login(pool);
  await test_api_shopping_actor_customer_create(pool);
  await test_api_shopping_actor_seller_join(pool);

  const sale: IShoppingSale = await generate_random_sale(pool);
  const commodity: IShoppingCartCommodity =
    await generate_random_cart_commodity(pool, sale);
  const order: IShoppingOrder = await generate_random_order(pool, [commodity]);

  const coupon: IShoppingCoupon = await generate_random_coupon({
    types: [],
    direction: "include",
    customer: null,
    sale,
    prepare: (criterias) =>
      prepare_random_coupon({
        criterias,
        discount: {
          unit: "percent",
          value: 50,
          limit: null,
          threshold: null,
        },
      }),
    create: (input) =>
      ShoppingApi.functional.shoppings.admins.coupons.create(pool.admin, input),
  });

  const error: Error | null = await TestValidator.proceed(async () => {
    const price: IShoppingOrderPrice =
      await ShoppingApi.functional.shoppings.customers.orders.discount(
        pool.customer,
        order.id,
        {
          deposit: 0,
          mileage: 0,
          coupon_ids: [coupon.id],
        },
      );
    typia.assertEquals(price);
    TestValidator.equals("order.price.cash")(price.real)(price.cash * 2);
    TestValidator.equals("order.price.ticket")(price.real)(price.deposit * 2);

    for (const good of order.goods) {
      TestValidator.equals("good.price.cash")(good.price.real)(
        good.price.cash * 2,
      );
      TestValidator.equals("good.price.ticket")(good.price.real)(
        good.price.deposit * 2,
      );
    }
  });
  await ShoppingApi.functional.shoppings.admins.coupons.destroy(
    pool.admin,
    coupon.id,
  );
  if (error) throw error;
};

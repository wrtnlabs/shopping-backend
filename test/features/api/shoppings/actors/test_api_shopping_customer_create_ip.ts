import { TestValidator } from "@nestia/e2e";
import typia from "typia";

import ShoppingApi from "@samchon/shopping-api/lib/index";
import { IShoppingCustomer } from "@samchon/shopping-api/lib/structures/shoppings/actors/IShoppingCustomer";

import { ConnectionPool } from "../../../../ConnectionPool";
import { TestGlobal } from "../../../../TestGlobal";

export const test_api_shopping_customer_create = async (
  pool: ConnectionPool,
): Promise<void> => {
  const automatic = await create(pool.customer, undefined);
  const manual = await create(pool.customer, PSEUDO);

  TestValidator.predicate("automatic")(() => automatic.ip !== PSEUDO);
  TestValidator.equals("manual")(manual.ip)(PSEUDO);
};

const create = async (connection: ShoppingApi.IConnection, ip?: string) => {
  const customer: IShoppingCustomer.IAuthorized =
    await ShoppingApi.functional.shoppings.customers.authenticate.create(
      connection,
      {
        href: TestGlobal.HREF,
        referrer: TestGlobal.REFERRER,
        channel_code: TestGlobal.CHANNEL,
        external_user: null,
        ip,
      },
    );
  return typia.assertEquals(customer);
};

const PSEUDO = "192.168.0.100";

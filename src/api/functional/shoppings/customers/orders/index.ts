/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingOrder } from "../../../../structures/shoppings/orders/IShoppingOrder";
import type { IShoppingOrderDiscountable } from "../../../../structures/shoppings/orders/IShoppingOrderDiscountable";
import type { IShoppingOrderPrice } from "../../../../structures/shoppings/orders/IShoppingOrderPrice";

export * as goods from "./goods";
export * as publish from "./publish";

/**
 * Create a new order application.
 *
 * Create a new {@link IShoppingOrder order application} from a
 * {@link IShoppingCartCommodity shopping cart} that has been composed by the
 * {@link IShoppingCustomer }. Of course, do not need to put every commodities
 * to the order, but possible to select some of them by the customer.
 *
 * By the way, this function does not mean completion the order, but means
 * just customer is appling the order. The order be completed only when customer
 * {@link IShoppingOrderPublish.paid_at pays} the order.
 *
 * @param input Creation info of the order
 * @returns Newly created order
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.create
 * @path POST /shoppings/customers/orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: IShoppingOrder.ICreate,
): Promise<create.Output> {
  return !!connection.simulate
    ? create.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...create.METADATA,
          template: create.METADATA.path,
          path: create.path(),
        },
        input,
      );
}
export namespace create {
  export type Input = IShoppingOrder.ICreate;
  export type Output = IShoppingOrder;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/orders",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/customers/orders";
  export const random = (g?: Partial<typia.IRandomGenerator>): IShoppingOrder =>
    typia.random<IShoppingOrder>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingOrder.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Erase an order application.
 *
 * Erase an order application that has been applied by the
 * {@link IShoppingCustomer }.
 *
 * If the order has been {@link IShoppingOrderPublish published}, then it is
 * not possible to erase the order. In that case, you've to cancel the
 * payment by calling the {@link publish.cancel } function.
 *
 * @param id Target order's {@link IShoppingOrder.id}
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.erase
 * @path DELETE /shoppings/customers/orders/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return !!connection.simulate
    ? erase.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...erase.METADATA,
        template: erase.METADATA.path,
        path: erase.path(id),
      });
}
export namespace erase {
  export const METADATA = {
    method: "DELETE",
    path: "/shoppings/customers/orders/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get price of the order.
 *
 * Get detailed price information of the {@link IShoppingOrder order}.
 *
 * Returned price info contains not only the amount of the order, but also
 * contains the discount amount by {@link IShoppingCoupono coupons},
 * {@link IShoppingDepositHistory deposits} and
 * {@link IShoppingMileageHistory mileages}.
 *
 * @param id Target order's {@link IShoppingOrder.id}
 * @returns Detailed price info with discount
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.price
 * @path GET /shoppings/customers/orders/:id/price
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function price(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<price.Output> {
  return !!connection.simulate
    ? price.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...price.METADATA,
        template: price.METADATA.path,
        path: price.path(id),
      });
}
export namespace price {
  export type Output = IShoppingOrderPrice;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/orders/:id/price",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/price`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingOrderPrice => typia.random<IShoppingOrderPrice>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get discountable info.
 *
 * Compute discountable features about the {@link IShoppingOrder }.
 *
 * Retured {@link IShoppingOrderDiscountable } contains including
 * combinations of adjustable {@link IShoppingCoupon coupons},
 * withdrawable {@link IShoppingDepositHistory deposits}
 * and {@link IShoppingMileageHistory mileages}.
 *
 * Of course, returned features are valid only when the order has not
 * been {@link IShoppingOrderPublish published} yet. If the order has
 * already been published, then no way to discount the price more.
 *
 * @param id Target order's {@link IShoppingOrder.id}
 * @param input Request info for discountable
 * @returns Discountable info
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.discountable
 * @path PATCH /shoppings/customers/orders/:id/discountable
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function discountable(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: IShoppingOrderDiscountable.IRequest,
): Promise<discountable.Output> {
  return !!connection.simulate
    ? discountable.simulate(connection, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...discountable.METADATA,
          template: discountable.METADATA.path,
          path: discountable.path(id),
        },
        input,
      );
}
export namespace discountable {
  export type Input = IShoppingOrderDiscountable.IRequest;
  export type Output = IShoppingOrderDiscountable;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/orders/:id/discountable",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/discountable`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingOrderDiscountable => typia.random<IShoppingOrderDiscountable>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
    input: IShoppingOrderDiscountable.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Discount the order.
 *
 * Discount total price of the {@link IShoppingOrder } by adjusting
 * {@link IShoppingCoupon coupons}, {@link IShoppingDepositHistory deposits}
 * and {@link IShoppingMileageHistory mileages}. If amount of discount
 * features are equal to the total price of the order, it is possible to
 * {@link IShoppingOrderPublish publish} it without any cash.
 *
 * By the way, the discounting features must be valid. If not, 428
 * unprocessable entity error would be thrown. To know which features are
 * adjustable or withdrawable, call the {@link discountable } function
 * before.
 *
 * @param id Target order's {@link IShoppingOrder.id}
 * @param input Discount info
 * @returns Detailed price info with discount
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.discount
 * @path PUT /shoppings/customers/orders/:id/discount
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function discount(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: IShoppingOrderPrice.ICreate,
): Promise<discount.Output> {
  return !!connection.simulate
    ? discount.simulate(connection, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...discount.METADATA,
          template: discount.METADATA.path,
          path: discount.path(id),
        },
        input,
      );
}
export namespace discount {
  export type Input = IShoppingOrderPrice.ICreate;
  export type Output = IShoppingOrderPrice;

  export const METADATA = {
    method: "PUT",
    path: "/shoppings/customers/orders/:id/discount",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}/discount`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingOrderPrice => typia.random<IShoppingOrderPrice>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
    input: IShoppingOrderPrice.ICreate,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every orders.
 *
 * List up every {@link IShoppingOrder orders} with pagination.
 *
 * If you want, you can limit the result by configuring
 * {@link IShoppingOrder.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingOrder.IRequest.sort sort condition}.
 *
 * For reference, if you are a {@link IShoppingCustomer customer}, then
 * you can list up your own orders, and it is not a matter whether the
 * order has been {@link IShoppingOrderPublish.paid_at paid} or not.
 *
 * Otherwise you are a {@link IShoppingSeller seller} or
 * {@link IShoppingAdministrator administrator}, then you can list up
 * only paid orders. Also, in the seller case, only related
 * {@link IShoppingOrder.goods goods} would be listed up in the order.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated orders
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.index
 * @path PATCH /shoppings/customers/orders
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: IShoppingOrder.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...index.METADATA,
          template: index.METADATA.path,
          path: index.path(),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingOrder.IRequest;
  export type Output = IPage<IShoppingOrder>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/orders",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/shoppings/customers/orders";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingOrder> => typia.random<IPage<IShoppingOrder>>(g);
  export const simulate = (
    connection: IConnection,
    input: IShoppingOrder.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get an order info.
 *
 * Get a detailed {@link IShoppingOrder order} information.
 *
 * If you are not a {@link IShoppingCustomer customer}, then you can't
 * access to the order which has not been
 * {@link IShoppingOrderPublish.paid_at paid} yet. In that case,
 * 404 not found error would be thrown.
 *
 * @param id Target order's {@link IShoppingOrder.id}
 * @returns Order info
 * @tag Order
 * @author Samchon
 *
 * @controller ShoppingCustomerOrderController.at
 * @path GET /shoppings/customers/orders/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(id),
      });
}
export namespace at {
  export type Output = IShoppingOrder;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/orders/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/orders/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): IShoppingOrder =>
    typia.random<IShoppingOrder>(g);
  export const simulate = (
    connection: IConnection,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

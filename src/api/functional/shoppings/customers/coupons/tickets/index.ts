/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.coupons.tickets
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingCouponTicket } from "../../../../../structures/shoppings/coupons/IShoppingCouponTicket";

/**
 * List up every coupon tickets.
 *
 * List up every {@link IShoppingCouponTicket coupon tickets} of the
 * {@link IShoppingCustomer customer} with {@link IPage pagination}.
 *
 * For reference, coupon ticket means that a {@link IShoppingCoupon coupon}
 * has been taken by a customer. If the target coupon has expiration day or
 * date, the coupon ticket also has
 * {@link IShoppingCouponTicket.expired_at expiration time}, and such expired
 * tickets would not be listed up. Likewise, tickets used to
 * {@link IShoppingCouponTicketPayment pay} for the {@link IShoppingOrder order}
 * would not be listed up, either.
 *
 * Additionally, you can limit the result by configuring
 * {@link IShoppingCouponTicket.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingCouponTicket.IRequest.sort sort condition}.
 *
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated coupon tickets
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingCustomerCouponTicketController.index
 * @path PATCH /shoppings/customers/coupons/tickets
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  input: index.Input,
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
          path: index.path(),
        },
        input,
      );
}
export namespace index {
  export type Input = Primitive<IShoppingCouponTicket.IRequest>;
  export type Output = Primitive<IPage<IShoppingCouponTicket>>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/customers/coupons/tickets",
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

  export const path = () => "/shoppings/customers/coupons/tickets";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IPage<IShoppingCouponTicket>>>(g);
  export const simulate = (
    connection: IConnection,
    input: index.Input,
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
 * Get a coupon ticket.
 *
 * Get a {@link IShoppingCouponTicket coupon ticket} information with its ID.
 *
 * By the way, if the target coupon ticket has been
 * {@link IShoppingCouponTicket.expired_at expired} or used to
 * {@link IShoppingCouponTicketPayment pay} for the {@link IShoppingOrder order},
 * 410 gone exception would be thrown.
 *
 * @param id Target coupon ticket's {@link IShoppingCouponTicket.id}
 * @returns Coupon ticket info
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingCustomerCouponTicketController.at
 * @path GET /shoppings/customers/coupons/tickets/:id
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
        path: at.path(id),
      });
}
export namespace at {
  export type Output = Primitive<IShoppingCouponTicket>;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/customers/coupons/tickets/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/shoppings/customers/coupons/tickets/${encodeURIComponent(id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingCouponTicket>>(g);
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
 * Create a new coupon ticket.
 *
 * Create a new {@link IShoppingCouponTicket coupon ticket} of a specific
 * {@link IShoppingCoupon coupon} for the {@link IShoppingCustomer customer}.
 *
 * By the way, if the target coupon has been
 * {@link IShoppingCoupon.expired_at expired} or
 * {@link IShoppingCoupon.IInventory.volume out of stock} or
 * {@link IShoppingCoupon.IInventory.volume_per_citizen exhausted for him/her},
 * 410 gone exception would be thrown.
 *
 * Also, even though succeeded to create a new coupon ticket from the target
 * coupon, if the coupon has expiration day or date, the newly created ticket
 * also has {@link IShoppingCouponTicket.expired_at expiration time}, and it
 * would be disabled after the expiration time.
 *
 * @param input Creation info of coupon ticket
 * @returns Newly created coupon ticket
 * @tag Discount
 * @author Samchon
 *
 * @controller ShoppingCustomerCouponTicketController.create
 * @path POST /shoppings/customers/coupons/tickets
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: create.Input,
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
          path: create.path(),
        },
        input,
      );
}
export namespace create {
  export type Input = Primitive<IShoppingCouponTicket.ICreate>;
  export type Output = Primitive<IShoppingCouponTicket>;

  export const METADATA = {
    method: "POST",
    path: "/shoppings/customers/coupons/tickets",
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

  export const path = () => "/shoppings/customers/coupons/tickets";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<IShoppingCouponTicket>>(g);
  export const simulate = (
    connection: IConnection,
    input: create.Input,
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

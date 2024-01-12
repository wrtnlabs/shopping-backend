/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.deliveries
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingDelivery } from "../../../../structures/shoppings/orders/IShoppingDelivery";
import type { IShoppingDeliveryPiece } from "../../../../structures/shoppings/orders/IShoppingDeliveryPiece";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

export * as journeys from "./journeys";
export * as shippers from "./shippers";

/**
 * Get list of deliveries.
 * 
 * Get list of {@link IShoppingDelivery.IInvert deliveries} of current
 * {@link IShoppingSeller seller} with {@link IPage pagination}.
 * 
 * For reference, returned deliveries are containing the target
 * {@link IShoppingOrder.IInvertFromDelivery order} informations. Of course,
 * only related {@link IShoppingOrderGood goods} are contained in the orders.
 * 
 * Additionally, you can limit the result by configuring
 * {@link IShoppingDelivery.IRequest.search search condition} in the request
 * body. Also, it is possible to customize sequence order of records by
 * configuring {@link IShoppingDelivery.IRequest.sort sort condition}.
 * 
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated deliveries
 * @tag Order
 * @author Samchon
 * 
 * @controller ShoppingSellerDeliveryController.index
 * @path PATCH /shoppings/sellers/deliveries
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...index.METADATA,
                  path: index.path(),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingDelivery.IRequest>;
    export type Output = Primitive<IPage<IShoppingDelivery.IInvert>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/sellers/deliveries",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/shoppings/sellers/deliveries`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingDelivery.IInvert>> =>
        typia.random<Primitive<IPage<IShoppingDelivery.IInvert>>>(g);
    export const simulate = async (
        connection: IConnection,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Get a delivery.
 * 
 * Get a {@link IShoppingDelivery.IInvert delivery} information with its ID.
 * 
 * For reference, returned delivery is containing the target
 * {@link IShoppingOrder.IInvertFromDelivery order} informations. Of course,
 * only related {@link IShoppingOrderGood goods} are contained in the orders.
 * 
 * @param id Target delivery's {@link IShoppingDelivery.id}
 * @returns Delivery info with target orders
 * @tag Order
 * @author Samchon
 * 
 * @controller ShoppingSellerDeliveryController.at
 * @path GET /shoppings/sellers/deliveries/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingDelivery.IInvert>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/sellers/deliveries/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/deliveries/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDelivery.IInvert> =>
        typia.random<Primitive<IShoppingDelivery.IInvert>>(g);
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Create a delivery.
 * 
 * Create a {@link IShoppingDelivery delivery} record targetting
 * {@link IShoppingOrder orders}, their {@link IShoppingOrderGood goods} and
 * {@link IShoppingSaleUnitStock stocks} ({@link IShoppingDeliveryPiece }) with
 * {@link IShoppingDeliveryJourney journeys} and
 * {@link IShoppingDeliveryShipper shippers} info.
 * 
 * Note that, composition of the {@link IShoppingDeliveryPiece } must not over
 * the required. To identify which pieces are required, recommend to call
 * the {@link incompletes } function with target orders'
 * {@link IShoppingOrderPublish.id }s before calling this one.
 * 
 * @param input Creation info of delivery
 * @returns Newly created delivery
 * @tag Order
 * @author Samchon
 * 
 * @controller ShoppingSellerDeliveryController.create
 * @path POST /shoppings/sellers/deliveries
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...create.METADATA,
                  path: create.path(),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingDelivery.ICreate>;
    export type Output = Primitive<IShoppingDelivery>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/sellers/deliveries",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/shoppings/sellers/deliveries`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDelivery> =>
        typia.random<Primitive<IShoppingDelivery>>(g);
    export const simulate = async (
        connection: IConnection,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Get list of incomplete pieces.
 * 
 * Get list of {@link IShoppingDeliveryPiece incomplete pieces} of target
 * orders' {@link IShoppingOrderPublish.id }s.
 * 
 * If you specify target orders' publish IDs, then this function returns
 * incompleted pieces of the orders with computation as an Array of
 * {@link IShoppingDeliveryPiece.ICreate } type.
 * 
 * You can utillize the result to make a huge {@link IShoppingDelivery delivery}
 * for integrated delivering, and also possible to make multiple deliveries for
 * splitted delivering.
 * 
 * @param input List of target orders' {@link IShoppingOrderPublish.id }s
 * @returns List of incomplete pieces
 * @tag Order
 * @author Samchon
 * 
 * @controller ShoppingSellerDeliveryController.incompletes
 * @path PATCH /shoppings/sellers/deliveries/incompletes
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function incompletes(
    connection: IConnection,
    input: incompletes.Input,
): Promise<incompletes.Output> {
    return !!connection.simulate
        ? incompletes.simulate(
              connection,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...incompletes.METADATA,
                  path: incompletes.path(),
              } as const,
              input,
          );
}
export namespace incompletes {
    export type Input = Primitive<IShoppingDeliveryPiece.IRequest>;
    export type Output = Primitive<Array<IShoppingDeliveryPiece.ICreate>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/sellers/deliveries/incompletes",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/shoppings/sellers/deliveries/incompletes`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<Array<IShoppingDeliveryPiece.ICreate>> =>
        typia.random<Primitive<Array<IShoppingDeliveryPiece.ICreate>>>(g);
    export const simulate = async (
        connection: IConnection,
        input: incompletes.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
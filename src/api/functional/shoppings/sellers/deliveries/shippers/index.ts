/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.deliveries.shippers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IShoppingDeliveryShipper } from "../../../../../structures/shoppings/orders/IShoppingDeliveryShipper";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

/**
 * Create a new shipper.
 * 
 * Create a new {@link IShoppingDeliveryShipper shipper} of the
 * {@link IShoppingDelivery delivery}.
 * 
 * This action does not affect to the related {@link IShoppingOrder orders} or
 * {@link IShoppingOrderGood goods} like {@link IShoppingDeliveryJourney }
 * or {@link IShoppingDeliveryPiece } case, but just informs to the
 * {@link IShoppingCustomer customer}.
 * 
 * @param deliveryId Belonged delivery's {@link IShoppingDelivery.id }
 * @param input Creation info of the shipper
 * @returns Newly created shipper
 * @tag Order
 * @author Samchon
 * 
 * @controller ShoppingSellerDeliveryShipperController.create
 * @path POST /shoppings/sellers/deliveries/:deliveryId/shippers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    deliveryId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              deliveryId,
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
                  path: create.path(deliveryId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingDeliveryShipper.ICreate>;
    export type Output = Primitive<IShoppingDeliveryShipper>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/sellers/deliveries/:deliveryId/shippers",
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

    export const path = (deliveryId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/deliveries/${encodeURIComponent(deliveryId ?? "null")}/shippers`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDeliveryShipper> =>
        typia.random<Primitive<IShoppingDeliveryShipper>>(g);
    export const simulate = async (
        connection: IConnection,
        deliveryId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(deliveryId),
            contentType: "application/json",
        });
        assert.param("deliveryId")(() => typia.assert(deliveryId));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
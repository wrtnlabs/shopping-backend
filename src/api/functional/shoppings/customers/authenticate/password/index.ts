/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.authenticate.password
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingMember } from "../../../../../structures/shoppings/actors/IShoppingMember";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

/**
 * Change password.
 * 
 * Change password of {@link IShoppingMember member} with the current password.
 * 
 * The reason why the current password is required is for security.
 * 
 * @param input New password and current password
 * @tag Authenticate
 * @author Samchon
 * 
 * @controller ShoppingCustomerAuthenticatePasswordController.change
 * @path PUT /shoppings/customers/authenticate/password/change
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function change(
    connection: IConnection,
    input: change.Input,
): Promise<void> {
    return !!connection.simulate
        ? change.simulate(
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
                  ...change.METADATA,
                  path: change.path(),
              } as const,
              input,
          );
}
export namespace change {
    export type Input = Primitive<IShoppingMember.IPasswordChange>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/authenticate/password/change",
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
        return `/shoppings/customers/authenticate/password/change`;
    }
    export const simulate = async (
        connection: IConnection,
        input: change.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
    }
}
/**
 * @packageDocumentation
 * @module api.functional.shoppings.admins.deposits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../structures/common/IPage";
import type { IShoppingDeposit } from "../../../../structures/shoppings/deposits/IShoppingDeposit";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

/**
 * Get deposit metadata list.
 * 
 * List up every {@link IShoppingDeposit deposit} metadata informations
 * with {@link IPage pagination}.
 * 
 * If you want, you can limit the result by configuring
 * {@link IShoppingDeposit.IRequest.search search condition} in the request body.
 * Also, it is possible to customize sequence order of records by configuring
 * {@link IShoppingDeposit.IRequest.sort sort condition}.
 * 
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated deposit metadata list
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingAdminDepositController.index
 * @path PATCH /shoppings/admins/deposits
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
    export type Input = Primitive<IShoppingDeposit.IRequest>;
    export type Output = Primitive<IPage<IShoppingDeposit>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/admins/deposits",
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
        return `/shoppings/admins/deposits`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingDeposit>> =>
        typia.random<Primitive<IPage<IShoppingDeposit>>>(g);
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
 * Get a deposit metadata.
 * 
 * Get a {@link IShoppingDeposit deposit} metadata information with its ID.
 * 
 * @param id Target deposit's {@link IShoppingDeposit.id}
 * @returns Deposit metadata
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingAdminDepositController.at
 * @path GET /shoppings/admins/deposits/:id
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
    export type Output = Primitive<IShoppingDeposit>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/deposits/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/admins/deposits/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDeposit> =>
        typia.random<Primitive<IShoppingDeposit>>(g);
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
 * Get a deposit metadata by its code.
 * 
 * Get a {@link IShoppingDeposit deposit} metadata information with its code.
 * 
 * @returns Deposit metadata
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingAdminDepositController.get
 * @path GET /shoppings/admins/deposits/:code/get
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
    code: string,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
              code,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...get.METADATA,
                  path: get.path(code),
              } as const,
          );
}
export namespace get {
    export type Output = Primitive<IShoppingDeposit>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/admins/deposits/:code/get",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (code: string): string => {
        return `/shoppings/admins/deposits/${encodeURIComponent(code ?? "null")}/get`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDeposit> =>
        typia.random<Primitive<IShoppingDeposit>>(g);
    export const simulate = async (
        connection: IConnection,
        code: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(code),
            contentType: "application/json",
        });
        assert.param("code")(() => typia.assert(code));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Create a new deposit metadata.
 * 
 * Create a new {@link IShoppingDeposit deposit} metadata.
 * 
 * This action means that adding a new origin reason of deposit's income/outcome.
 * Of course, creating a new deposit record does not mean that automatically
 * increase or decrease the {@link IShoppingCustomer customer}'s balance
 * following the record's reason why. The logic must be developed manually
 * in the backend side.
 * 
 * @param input Create information of deposit metadata
 * @returns Newly created deposit metadata
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingAdminDepositController.create
 * @path POST /shoppings/admins/deposits
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
    export type Input = Primitive<IShoppingDeposit.ICreate>;
    export type Output = Primitive<IShoppingDeposit>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/admins/deposits",
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
        return `/shoppings/admins/deposits`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingDeposit> =>
        typia.random<Primitive<IShoppingDeposit>>(g);
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
 * Erase a deposit metadata.
 * 
 * Erase a {@link IShoppingDeposit deposit} metadata, so that no more
 * {@link IShoppingCustomer customer}'s balance does not be increased or
 * decreased by the deposit's reason why.
 * 
 * @param id Target deposit's {@link IShoppingDeposit.id}
 * @tag Discount
 * @author Samchon
 * 
 * @controller ShoppingAdminDepositController.erase
 * @path DELETE /shoppings/admins/deposits/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? erase.simulate(
              connection,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...erase.METADATA,
                  path: erase.path(id),
              } as const,
          );
}
export namespace erase {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/admins/deposits/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: string & Format<"uuid">): string => {
        return `/shoppings/admins/deposits/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        id: string & Format<"uuid">,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        assert.param("id")(() => typia.assert(id));
    }
}
/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IShoppingCitizen } from "../../../../structures/shoppings/actors/IShoppingCitizen";
import type { IShoppingCustomer } from "../../../../structures/shoppings/actors/IShoppingCustomer";
import type { IShoppingExternalUser } from "../../../../structures/shoppings/actors/IShoppingExternalUser";
import type { IShoppingMember } from "../../../../structures/shoppings/actors/IShoppingMember";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

export * as password from "./password";

/**
 * 
 * @param input
 * @returns
 * @assignHeaders setHeaders
 * 
 * @controller ShoppingCustomerAuthenticateController.refresh
 * @path PATCH /shoppings/customers/authenticate/refresh
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function refresh(
    connection: IConnection,
    input: refresh.Input,
): Promise<refresh.Output> {
    const output: refresh.Output = !!connection.simulate
        ? await refresh.simulate(
              connection,
              input,
          )
        : await PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...refresh.METADATA,
                  path: refresh.path(),
              } as const,
              input,
          );

    // configure header(s)
    connection.headers ??= {};
    Object.assign(connection.headers, output.setHeaders);

    return output;
}
export namespace refresh {
    export type Input = Primitive<IShoppingCustomer.IRefresh>;
    export type Output = Primitive<IShoppingCustomer.IAuthorized>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/customers/authenticate/refresh",
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
        return `/shoppings/customers/authenticate/refresh`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer.IAuthorized> =>
        typia.random<Primitive<IShoppingCustomer.IAuthorized>>(g);
    export const simulate = async (
        connection: IConnection,
        input: refresh.Input,
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
 * @controller ShoppingCustomerAuthenticateController.get
 * @path GET /shoppings/customers/authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...get.METADATA,
                  path: get.path(),
              } as const,
          );
}
export namespace get {
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/authenticate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/shoppings/customers/authenticate`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * 
 * @param input
 * @returns
 * @assignHeaders setHeaders
 * 
 * @controller ShoppingCustomerAuthenticateController.create
 * @path POST /shoppings/customers/authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    input: create.Input,
): Promise<create.Output> {
    const output: create.Output = !!connection.simulate
        ? await create.simulate(
              connection,
              input,
          )
        : await PlainFetcher.fetch(
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

    // configure header(s)
    connection.headers ??= {};
    Object.assign(connection.headers, output.setHeaders);

    return output;
}
export namespace create {
    export type Input = Primitive<IShoppingCustomer.ICreate>;
    export type Output = Primitive<IShoppingCustomer.IAuthorized>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate",
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
        return `/shoppings/customers/authenticate`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer.IAuthorized> =>
        typia.random<Primitive<IShoppingCustomer.IAuthorized>>(g);
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
 * @controller ShoppingCustomerAuthenticateController.join
 * @path POST /shoppings/customers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
    connection: IConnection,
    input: join.Input,
): Promise<join.Output> {
    return !!connection.simulate
        ? join.simulate(
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
                  ...join.METADATA,
                  path: join.path(),
              } as const,
              input,
          );
}
export namespace join {
    export type Input = Primitive<IShoppingMember.IJoin>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate/join",
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
        return `/shoppings/customers/authenticate/join`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: join.Input,
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
 * @controller ShoppingCustomerAuthenticateController.login
 * @path PUT /shoppings/customers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
    connection: IConnection,
    input: login.Input,
): Promise<login.Output> {
    return !!connection.simulate
        ? login.simulate(
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
                  ...login.METADATA,
                  path: login.path(),
              } as const,
              input,
          );
}
export namespace login {
    export type Input = Primitive<IShoppingMember.ILogin>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/customers/authenticate/login",
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
        return `/shoppings/customers/authenticate/login`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: login.Input,
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
 * @controller ShoppingCustomerAuthenticateController.activate
 * @path POST /shoppings/customers/authenticate/activate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function activate(
    connection: IConnection,
    input: activate.Input,
): Promise<activate.Output> {
    return !!connection.simulate
        ? activate.simulate(
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
                  ...activate.METADATA,
                  path: activate.path(),
              } as const,
              input,
          );
}
export namespace activate {
    export type Input = Primitive<IShoppingCitizen.ICreate>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate/activate",
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
        return `/shoppings/customers/authenticate/activate`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: activate.Input,
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
 * @controller ShoppingCustomerAuthenticateController.external
 * @path POST /shoppings/customers/authenticate/external
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function external(
    connection: IConnection,
    input: external.Input,
): Promise<external.Output> {
    return !!connection.simulate
        ? external.simulate(
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
                  ...external.METADATA,
                  path: external.path(),
              } as const,
              input,
          );
}
export namespace external {
    export type Input = Primitive<IShoppingExternalUser.ICreate>;
    export type Output = Primitive<IShoppingCustomer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/authenticate/external",
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
        return `/shoppings/customers/authenticate/external`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingCustomer> =>
        typia.random<Primitive<IShoppingCustomer>>(g);
    export const simulate = async (
        connection: IConnection,
        input: external.Input,
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
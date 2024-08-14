/**
 * @packageDocumentation
 * @module api.functional.monitors.system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ISystem } from "../../../structures/monitors/ISystem";

/**
 * Get system information.
 *
 * Get system information with commit and package information.
 *
 * As such information is a type of sensitive, response be encrypted.
 *
 * @returns System info
 * @tag Monitor
 * @author Samchon
 *
 * @controller MonitorSystemController.get
 * @path GET /monitors/system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(),
      });
}
export namespace get {
  export type Output = ISystem;

  export const METADATA = {
    method: "GET",
    path: "/monitors/system",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/monitors/system";
  export const random = (g?: Partial<typia.IRandomGenerator>): ISystem =>
    typia.random<ISystem>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * @internal
 * @controller MonitorSystemController.internal_server_error
 * @path GET /monitors/system/internal_server_error
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function internal_server_error(
  connection: IConnection,
): Promise<void> {
  return !!connection.simulate
    ? internal_server_error.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...internal_server_error.METADATA,
        template: internal_server_error.METADATA.path,
        path: internal_server_error.path(),
      });
}
export namespace internal_server_error {
  export const METADATA = {
    method: "GET",
    path: "/monitors/system/internal_server_error",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/monitors/system/internal_server_error";
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (connection: IConnection): void => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * @internal
 * @controller MonitorSystemController.uncaught_exception
 * @path GET /monitors/system/uncaught_exception
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function uncaught_exception(
  connection: IConnection,
): Promise<void> {
  return !!connection.simulate
    ? uncaught_exception.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...uncaught_exception.METADATA,
        template: uncaught_exception.METADATA.path,
        path: uncaught_exception.path(),
      });
}
export namespace uncaught_exception {
  export const METADATA = {
    method: "GET",
    path: "/monitors/system/uncaught_exception",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/monitors/system/uncaught_exception";
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (connection: IConnection): void => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

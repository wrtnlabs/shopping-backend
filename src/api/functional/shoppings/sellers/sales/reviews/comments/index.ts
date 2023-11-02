/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.reviews.comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../../structures/common/IPage";
import type { IShoppingSaleInquiryComment } from "../../../../../../structures/shoppings/sales/inquiries/IShoppingSaleInquiryComment";
import { NestiaSimulator } from "../../../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingSellerSaleReviewCommentsController.index
 * @path PATCH /shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              saleId,
              inquiryId,
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
                  path: index.path(saleId, inquiryId),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingSaleInquiryComment.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleInquiryComment>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments",
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

    export const path = (saleId: string & Format<"uuid">, inquiryId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleInquiryComment>> =>
        typia.random<Primitive<IPage<IShoppingSaleInquiryComment>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        inquiryId: string & Format<"uuid">,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, inquiryId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("inquiryId")(() => typia.assert(inquiryId));
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
 * @controller ShoppingSellerSaleReviewCommentsController.at
 * @path GET /shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              saleId,
              inquiryId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(saleId, inquiryId, id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingSaleInquiryComment>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (saleId: string & Format<"uuid">, inquiryId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleInquiryComment> =>
        typia.random<Primitive<IShoppingSaleInquiryComment>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        inquiryId: string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, inquiryId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("inquiryId")(() => typia.assert(inquiryId));
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
 * @controller ShoppingSellerSaleReviewCommentsController.create
 * @path POST /shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              saleId,
              inquiryId,
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
                  path: create.path(saleId, inquiryId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingSaleInquiryComment.ICreate>;
    export type Output = Primitive<IShoppingSaleInquiryComment>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments",
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

    export const path = (saleId: string & Format<"uuid">, inquiryId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleInquiryComment> =>
        typia.random<Primitive<IShoppingSaleInquiryComment>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        inquiryId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, inquiryId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("inquiryId")(() => typia.assert(inquiryId));
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
 * @controller ShoppingSellerSaleReviewCommentsController.update
 * @path PUT /shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<update.Output> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              saleId,
              inquiryId,
              id,
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
                  ...update.METADATA,
                  path: update.path(saleId, inquiryId, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IShoppingSaleInquiryComment.ICreate>;
    export type Output = Primitive<IShoppingSaleInquiryComment.ISnapshot>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id",
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

    export const path = (saleId: string & Format<"uuid">, inquiryId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleInquiryComment.ISnapshot> =>
        typia.random<Primitive<IShoppingSaleInquiryComment.ISnapshot>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        inquiryId: string & Format<"uuid">,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, inquiryId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("inquiryId")(() => typia.assert(inquiryId));
        assert.param("id")(() => typia.assert(id));
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
 * @controller ShoppingSellerSaleReviewCommentsController.erase
 * @path DELETE /shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    inquiryId: string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<void> {
    return !!connection.simulate
        ? erase.simulate(
              connection,
              saleId,
              inquiryId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...erase.METADATA,
                  path: erase.path(saleId, inquiryId, id),
              } as const,
          );
}
export namespace erase {

    export const METADATA = {
        method: "DELETE",
        path: "/shoppings/sellers/sales/:saleId/reviews/:inquiryId/comments/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (saleId: string & Format<"uuid">, inquiryId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(inquiryId ?? "null")}/comments/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        inquiryId: string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, inquiryId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("inquiryId")(() => typia.assert(inquiryId));
        assert.param("id")(() => typia.assert(id));
    }
}
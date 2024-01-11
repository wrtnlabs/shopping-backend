/**
 * @packageDocumentation
 * @module api.functional.shoppings.customers.sales.reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingSaleReview } from "../../../../../structures/shoppings/sales/inquiries/IShoppingSaleReview";
import { NestiaSimulator } from "../../../../../utils/NestiaSimulator";

export * as comments from "./comments";

/**
 * Write a review article.
 * 
 * When a {@link IShoppingCustomer customer} has purchased a specific
 * {@link IShoppingSale sale} and get {@link IShoppingDelivery delivered} it,
 * he/she can write a {@link IShoppingSaleReview review} article about the sale.
 * 
 * If try to write a review article without purchasing or the delivery has not
 * been completed, 428 unprocessable entity error would be thrown. Also, the
 * customer can write multiple review articles per an order, but the next
 * article can be written after 2 weeks from the previous article. If not,
 * 428 unprocessable entity error would be thrown, either.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param input Create info of the review
 * @returns Newly created review
 * @tag Inquiry
 * @author Samchon
 * 
 * @controller ShoppingCustomerSaleReviewController.create
 * @path POST /shoppings/customers/sales/:saleId/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              saleId,
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
                  path: create.path(saleId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IShoppingSaleReview.ICreate>;
    export type Output = Primitive<IShoppingSaleReview>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/sales/:saleId/reviews",
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

    export const path = (saleId: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleReview> =>
        typia.random<Primitive<IShoppingSaleReview>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * Update a review.
 * 
 * Updadte a {@link IShoppingSaleReview review}'s content and score.
 * 
 * By the way, as is the general policy of this shopping mall regarding
 * articles, modifying a question articles does not actually change the
 * existing content. Modified content is accumulated and recorded in the
 * existing article record as a new
 * {@link IShoppingSaleReview.ISnapshot snapshot}. And this is made public
 * to everyone, including the {@link IShoppingCustomer customer} and the
 * {@link IShoppingSeller seller}, and anyone who can view the article can
 * also view the entire editing histories.
 * 
 * This is to prevent customers or sellers from modifying their articles and
 * manipulating the circumstances due to the nature of e-commerce, where
 * disputes easily arise. That is, to preserve evidence.
 * 
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param id Target review's {@link IShoppingSaleReview.id}
 * @param input Update info of the review
 * @returns Newly created snapshot record of the review
 * @tag Inquiry
 * @author Samchon
 * 
 * @controller ShoppingCustomerSaleReviewController.update
 * @path POST /shoppings/customers/sales/:saleId/reviews/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<update.Output> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              saleId,
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
                  path: update.path(saleId, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IShoppingSaleReview.IUpdate>;
    export type Output = Primitive<IShoppingSaleReview.ISnapshot>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/customers/sales/:saleId/reviews/:id",
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

    export const path = (saleId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleReview.ISnapshot> =>
        typia.random<Primitive<IShoppingSaleReview.ISnapshot>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * @controller ShoppingCustomerSaleReviewController.index
 * @path PATCH /shoppings/customers/sales/:saleId/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              saleId,
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
                  path: index.path(saleId),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IShoppingSaleReview.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleReview.ISummary>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/customers/sales/:saleId/reviews",
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

    export const path = (saleId: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleReview.ISummary>> =>
        typia.random<Primitive<IPage<IShoppingSaleReview.ISummary>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * @controller ShoppingCustomerSaleReviewController.abridges
 * @path PATCH /shoppings/customers/sales/:saleId/reviews/abridges
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function abridges(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: abridges.Input,
): Promise<abridges.Output> {
    return !!connection.simulate
        ? abridges.simulate(
              connection,
              saleId,
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
                  ...abridges.METADATA,
                  path: abridges.path(saleId),
              } as const,
              input,
          );
}
export namespace abridges {
    export type Input = Primitive<IShoppingSaleReview.IRequest>;
    export type Output = Primitive<IPage<IShoppingSaleReview.IAbridge>>;

    export const METADATA = {
        method: "PATCH",
        path: "/shoppings/customers/sales/:saleId/reviews/abridges",
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

    export const path = (saleId: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/abridges`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IShoppingSaleReview.IAbridge>> =>
        typia.random<Primitive<IPage<IShoppingSaleReview.IAbridge>>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        input: abridges.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
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
 * @controller ShoppingCustomerSaleReviewController.at
 * @path GET /shoppings/customers/sales/:saleId/reviews/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              saleId,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(saleId, id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IShoppingSaleReview>;

    export const METADATA = {
        method: "GET",
        path: "/shoppings/customers/sales/:saleId/reviews/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (saleId: string & Format<"uuid">, id: string & Format<"uuid">): string => {
        return `/shoppings/customers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleReview> =>
        typia.random<Primitive<IShoppingSaleReview>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        id: string & Format<"uuid">,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, id),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
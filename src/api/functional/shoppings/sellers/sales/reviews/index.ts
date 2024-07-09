/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IPage } from "../../../../../structures/common/IPage";
import type { IShoppingSaleReview } from "../../../../../structures/shoppings/sales/inquiries/IShoppingSaleReview";

export * as answer from "./answer";
export * as comments from "./comments";

/**
 * List up every summarized reviews.
 *
 * List up every {@link IShoppingSaleReview.ISummary summarized reviews} of a
 * {@link IShoppingSale sale}.
 *
 * As you can see, returned reviews are summarized, not detailed. If you want
 * to get the detailed information of a review, use {@link adridges} function
 * or {@link at} function for each article.
 *
 * Also, returned review has {@link IShoppingSaleReview.ISummary.answer}
 * property which means the formal answer from the {@link IShoppingSeller}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s reviews. Otherwise,
 * you can access to every reviews of the sales.
 *
 * By the way, if you want, you can limit the result by configuring
 * {@link IShoppingSaleReview.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingSaleReview.IRequest.sort sort condition}.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated reviews with summarized information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleReviewController.index
 * @path PATCH /shoppings/sellers/sales/:saleId/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  input: IShoppingSaleReview.IRequest,
): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection, saleId, input)
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
          path: index.path(saleId),
        },
        input,
      );
}
export namespace index {
  export type Input = IShoppingSaleReview.IRequest;
  export type Output = IPage<IShoppingSaleReview.ISummary>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales/:saleId/reviews",
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

  export const path = (saleId: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleReview.ISummary> =>
    typia.random<IPage<IShoppingSaleReview.ISummary>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: IShoppingSaleReview.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * List up every abridged reviews.
 *
 * List up every {@link IShoppingSaleReview.IAbridge abridged reviews} of
 * a {@link IShoppingSale sale}.
 *
 * As you can see, returned reviews are abridged, not detailed. If you want
 * to get the detailed information of a review, use {@link at} function
 * for each article.
 *
 * Also, returned review has {@link IShoppingSaleReview.IAridge.answer}
 * property which means the formal answer from the {@link IShoppingSeller}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s reviews. Otherwise,
 * you can access to every reviews of the sales.
 *
 * By the way, if you want, you can limit the result by configuring
 * {@link IShoppingSaleReview.IRequest.search search condition} in the
 * request body. Also, it is possible to customize sequence order of records
 * by configuring {@link IShoppingSaleReview.IRequest.sort sort condition}.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param input Request info of pagination, searching and sorting
 * @returns Paginated reviews with abridged information
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleReviewController.abridges
 * @path PATCH /shoppings/sellers/sales/:saleId/reviews/abridges
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function abridges(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  input: IShoppingSaleReview.IRequest,
): Promise<abridges.Output> {
  return !!connection.simulate
    ? abridges.simulate(connection, saleId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...abridges.METADATA,
          template: abridges.METADATA.path,
          path: abridges.path(saleId),
        },
        input,
      );
}
export namespace abridges {
  export type Input = IShoppingSaleReview.IRequest;
  export type Output = IPage<IShoppingSaleReview.IAbridge>;

  export const METADATA = {
    method: "PATCH",
    path: "/shoppings/sellers/sales/:saleId/reviews/abridges",
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

  export const path = (saleId: string & Format<"uuid">) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/abridges`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IPage<IShoppingSaleReview.IAbridge> =>
    typia.random<IPage<IShoppingSaleReview.IAbridge>>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    input: IShoppingSaleReview.IRequest,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * Get a review info.
 *
 * Get a detailed {@link IShoppingSaleReview review} information of a
 * {@link IShoppingSale sale}.
 *
 * For reference, if you're a {@link IShoppingSeller seller}, you can only
 * access to the your own {@link IShoppingSale sale}'s review. Otherwise
 * you are a {@link IShoppingCustomer customer}, you can access to every
 * reviews of the sales.
 *
 * @param saleId Belonged sale's {@link IShoppingSale.id }
 * @param id Target review's {@link IShoppingSaleReview.id}
 * @returns Detailed review info
 * @tag Sale
 * @author Samchon
 *
 * @controller ShoppingSellerSaleReviewController.at
 * @path GET /shoppings/sellers/sales/:saleId/reviews/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  saleId: string & Format<"uuid">,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, saleId, id)
    : PlainFetcher.fetch(connection, {
        ...at.METADATA,
        template: at.METADATA.path,
        path: at.path(saleId, id),
      });
}
export namespace at {
  export type Output = IShoppingSaleReview;

  export const METADATA = {
    method: "GET",
    path: "/shoppings/sellers/sales/:saleId/reviews/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/reviews/${encodeURIComponent(id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): IShoppingSaleReview => typia.random<IShoppingSaleReview>(g);
  export const simulate = (
    connection: IConnection,
    saleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(saleId, id),
      contentType: "application/json",
    });
    assert.param("saleId")(() => typia.assert(saleId));
    assert.param("id")(() => typia.assert(id));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

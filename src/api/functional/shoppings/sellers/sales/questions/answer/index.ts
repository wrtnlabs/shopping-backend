/**
 * @packageDocumentation
 * @module api.functional.shoppings.sellers.sales.questions.answer
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../../../../structures/common/IBbsArticle";
import type { IShoppingSaleInquiryAnswer } from "../../../../../../structures/shoppings/sales/inquiries/IShoppingSaleInquiryAnswer";
import { NestiaSimulator } from "../../../../../../utils/NestiaSimulator";

/**
 * @controller ShoppingSellerSaleQuestionAnswerController.create
 * @path POST /shoppings/sellers/sales/:saleId/questions/:questionId/answer
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    questionId: string & Format<"uuid">,
    input: create.Input,
): Promise<create.Output> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              saleId,
              questionId,
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
                  path: create.path(saleId, questionId),
              } as const,
              input,
          );
}
export namespace create {
    export type Input = Primitive<IBbsArticle.ICreate>;
    export type Output = Primitive<IShoppingSaleInquiryAnswer>;

    export const METADATA = {
        method: "POST",
        path: "/shoppings/sellers/sales/:saleId/questions/:questionId/answer",
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

    export const path = (saleId: string & Format<"uuid">, questionId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/questions/${encodeURIComponent(questionId ?? "null")}/answer`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleInquiryAnswer> =>
        typia.random<Primitive<IShoppingSaleInquiryAnswer>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        questionId: string & Format<"uuid">,
        input: create.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, questionId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("questionId")(() => typia.assert(questionId));
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
 * @controller ShoppingSellerSaleQuestionAnswerController.update
 * @path PUT /shoppings/sellers/sales/:saleId/questions/:questionId/answer
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    saleId: string & Format<"uuid">,
    questionId: string & Format<"uuid">,
    input: update.Input,
): Promise<update.Output> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              saleId,
              questionId,
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
                  path: update.path(saleId, questionId),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.ICreate>;
    export type Output = Primitive<IShoppingSaleInquiryAnswer.ISnapshot>;

    export const METADATA = {
        method: "PUT",
        path: "/shoppings/sellers/sales/:saleId/questions/:questionId/answer",
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

    export const path = (saleId: string & Format<"uuid">, questionId: string & Format<"uuid">): string => {
        return `/shoppings/sellers/sales/${encodeURIComponent(saleId ?? "null")}/questions/${encodeURIComponent(questionId ?? "null")}/answer`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IShoppingSaleInquiryAnswer.ISnapshot> =>
        typia.random<Primitive<IShoppingSaleInquiryAnswer.ISnapshot>>(g);
    export const simulate = async (
        connection: IConnection,
        saleId: string & Format<"uuid">,
        questionId: string & Format<"uuid">,
        input: update.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(saleId, questionId),
            contentType: "application/json",
        });
        assert.param("saleId")(() => typia.assert(saleId));
        assert.param("questionId")(() => typia.assert(questionId));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
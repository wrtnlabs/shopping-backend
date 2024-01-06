import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { tags } from "typia";

import { IPage } from "@samchon/shopping-api/lib/structures/common/IPage";
import { IShoppingActorEntity } from "@samchon/shopping-api/lib/structures/shoppings/actors/IShoppingActorEntity";
import { IShoppingSaleReview } from "@samchon/shopping-api/lib/structures/shoppings/sales/inquiries/IShoppingSaleReview";

import { ShoppingSaleReviewProvider } from "../../../../providers/shoppings/sales/inquiries/ShoppingSaleSnapshotReviewProvider";

import { IShoppingControllerProps } from "../IShoppingControllerProps";

export function ShoppingSaleReviewsController<
  Actor extends IShoppingActorEntity,
>(props: IShoppingControllerProps) {
  @Controller(`shoppings/${props.path}/sales/:saleId/reviews`)
  abstract class ShoppingSaleReviewsController {
    @core.TypedRoute.Patch()
    public async index(
      @props.AuthGuard() actor: Actor,
      @core.TypedParam("saleId") saleId: string & tags.Format<"uuid">,
      @core.TypedBody() input: IShoppingSaleReview.IRequest,
    ): Promise<IPage<IShoppingSaleReview.ISummary>> {
      return ShoppingSaleReviewProvider.index(actor)({ id: saleId })(input);
    }

    @core.TypedRoute.Patch("abridges")
    public async abridges(
      @props.AuthGuard() actor: Actor,
      @core.TypedParam("saleId") saleId: string & tags.Format<"uuid">,
      @core.TypedBody() input: IShoppingSaleReview.IRequest,
    ): Promise<IPage<IShoppingSaleReview.IAbridge>> {
      return ShoppingSaleReviewProvider.abridges(actor)({ id: saleId })(input);
    }

    @core.TypedRoute.Get(":id")
    public async at(
      @props.AuthGuard() actor: Actor,
      @core.TypedParam("saleId") saleId: string & tags.Format<"uuid">,
      @core.TypedParam("id") id: string & tags.Format<"uuid">,
    ): Promise<IShoppingSaleReview> {
      return ShoppingSaleReviewProvider.at(actor)({ id: saleId })(id);
    }
  }
  return ShoppingSaleReviewsController;
}

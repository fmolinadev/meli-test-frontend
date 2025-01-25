/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Router } from "express";
import getSearchItemsController from "../controller/items-result.controller";
import getProductByIdController from "../controller/items-by-id.controller";

const itemRouter = Router();

itemRouter.get("/", getSearchItemsController);
itemRouter.get("/:id", getProductByIdController);

export default itemRouter;

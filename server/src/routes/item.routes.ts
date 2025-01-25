/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Router } from "express";
import {
  getProductByIdController,
  getSearchItemsController,
} from "../controller";
import { loggerMiddleware } from "../middleware";

const itemRouter = Router();

itemRouter.get("/", loggerMiddleware, getSearchItemsController);
itemRouter.get("/:id", loggerMiddleware, getProductByIdController);

export default itemRouter;

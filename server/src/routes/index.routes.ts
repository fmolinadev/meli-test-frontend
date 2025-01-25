/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Router } from "express";
import itemRouter from "./item.routes";

const router = Router();

router.use("/api/items", itemRouter);

export default router;

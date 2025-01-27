/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { AxiosAdapter } from "../http";
import dotenv from "dotenv";
dotenv.config();

const CategoriesResults = process.env.VIEW_ITEM_CATEGORIES_API;

export const categoriesFetcher = new AxiosAdapter(`${CategoriesResults}`);

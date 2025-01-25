/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { AxiosAdapter } from "../http";
import dotenv from "dotenv";
dotenv.config();

const UrlItemDetails = process.env.VIEW_ITEM_API;

export const itemFetcher = new AxiosAdapter(`${UrlItemDetails}`);

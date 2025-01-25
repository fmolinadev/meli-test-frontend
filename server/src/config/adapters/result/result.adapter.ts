/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { AxiosAdapter } from "../http";
import dotenv from "dotenv";
dotenv.config();

const UrlResults = process.env.SEARCH_ITEM_API;

export const resultFetcher = new AxiosAdapter(`${UrlResults}`);

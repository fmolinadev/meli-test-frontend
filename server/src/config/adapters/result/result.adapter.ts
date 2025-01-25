import { AxiosAdapter } from "../http";

const UrlResults = process.env.SEARCH_ITEM_API;

export const resultFetcher = new AxiosAdapter(`${UrlResults}`);

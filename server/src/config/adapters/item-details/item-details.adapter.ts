import { AxiosAdapter } from "../http";

const UrlItemDetails = process.env.SEARCH_ITEM_API;

export const itemFetcher = new AxiosAdapter(`${UrlItemDetails}`);

export interface Items {
  id: string;
  title: string;
  store: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
    original_price: number | undefined;
    discount: number | undefined;
  };
  thumbnail: string;
  cover: string;
  condition: string;
  free_shipping: boolean;
  location: {
    city: string;
    state: string;
  };
}

export interface SearchResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Items[];
}

interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ItemDetails {
  id: string;
  title: string;
  price: Price;
  cover: string;
  pictures: string[];
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  atributes: AtributesCollects[];
}

export interface ItemViewDetails {
  author: Author;
  item: ItemDetails;
}

export interface AtributesCollects {
  name: string;
  value_name?: string;
}

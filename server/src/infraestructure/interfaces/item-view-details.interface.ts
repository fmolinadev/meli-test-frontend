interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  pictures: string[];
  cover: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  atributes: AtributesCollects[];
}

export interface ItemViewDetails {
  author: Author;
  item: Item;
}

export interface AtributesCollects {
  name: string;
  value_name?: string;
}

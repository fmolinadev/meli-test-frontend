export interface Category {
  id: string;
  name: string;
  picture?: string;
  permalink?: string;
  total_items_in_this_category: number;
  path_from_root: Category[];
  children_categories?: Category[];
  attribute_types: string;
  settings: CategorySettings;
  meta_categ_id?: string;
  attributable: boolean;
  date_created: string;
}

interface CategorySettings {
  adult_content: boolean;
  buying_allowed: boolean;
  buying_modes: string[];
  catalog_domain?: string; // Optional catalog domain
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  maximum_price?: number; // Optional maximum price
  minimum_price?: number; // Optional minimum price
  mirror_category?: string; // Optional mirror category ID
  mirror_master_category?: string; // Optional mirror master category ID
  mirror_slave_categories?: string[]; // Optional array of mirror slave category IDs
  price: string;
  reservation_allowed: string;
  restrictions: any[]; // Can be an array of various types depending on the data
  rounded_address: boolean;
  seller_contact: string;
  shipping_modes: string[];
  shipping_options: any[]; // Can be an array of various types depending on the data
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  stock: string;
  sub_vertical?: string; // Optional sub vertical
  subscribable: boolean;
  tags: string[];
  vertical: string;
  vip_subdomain: string;
  buyer_protection_programs: string[];
  status: string;
}

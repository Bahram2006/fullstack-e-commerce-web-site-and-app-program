export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  is_recommended?: boolean;
  is_new?: boolean;
  is_popular?: boolean;
}

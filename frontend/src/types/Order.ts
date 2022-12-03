interface Product {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  };
}

export interface Order {
  _id: string;
  table: string;
  status: 'DONE' | 'WAITING' | 'IN_PRODUCTION';
  products: Product[];
}

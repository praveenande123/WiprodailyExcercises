export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  role: 'ADMIN' | 'CUSTOMER';
  name?: string;
  address?: string;
}

export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id?: number;
  userId: number;
  productId: number;
  quantity: number;
  product?: Product;
}

export interface OrderSummary {
  id: number;
  userId: number;
  status: 'CREATED' | 'CANCELLED';
  createdAt?: string;
  items?: Array<{ productId: number; quantity: number; price?: number }>;
}


export interface CartItem {
  id?: number;
  product: { id: number; name: string; price: number; };
  quantity: number;
}

export interface Order {
  id?: number;
  userId?: number;
  status?: 'CREATED' | 'CANCELLED' | 'COMPLETED';
  items: CartItem[];
  createdAt?: string;
}

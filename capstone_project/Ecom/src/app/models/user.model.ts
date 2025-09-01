
export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  role: 'ADMIN' | 'CUSTOMER';
  name?: string;
  address?: string;
  token?: string;
}

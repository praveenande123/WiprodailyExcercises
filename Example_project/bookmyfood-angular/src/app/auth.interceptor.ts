import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  return next(req.clone({ setHeaders: token ? { Authorization: `Bearer ${token}` } : {} }));
};

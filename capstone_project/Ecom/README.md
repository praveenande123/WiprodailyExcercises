
# Mini E-Commerce Frontend (Angular)

This is a ready-to-run Angular frontend for the Mini E-Commerce app described in your PDF.
It includes:
- Login / Register
- Product Catalog (customer)
- Cart & Checkout
- Orders list & details
- Admin Product Management
- Role-based routing guards
- Bootstrap styling

## Quick Start
1) Install Node.js LTS and Angular CLI globally:
   npm i -g @angular/cli

2) Install dependencies:
   npm install

3) Configure backend URLs in: `src/environments/environment.ts`

4) Run:
   npm start

## Notes
- Services are wired to the REST endpoints from the document.
- Auth interceptor reads token from localStorage (set by backend on /user/login response).
- Adjust data shapes to match your backend responses as needed.

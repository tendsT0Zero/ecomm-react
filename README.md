# ecom-react

A minimal React e-commerce frontend built with Vite, Tailwind CSS and React Router. Includes simple local-storage backed `CartContext` and `AuthContext`, and lightweight hooks for fetching and local storage.

**Getting Started**

- **Requirements:** Node.js 18+ and npm.
- **Install:**

```bash
npm install
```

- **Dev:**

```bash
npm run dev
```

- **Build:**

```bash
npm run build
```

- **Preview:**

```bash
npm run preview
```

**Project Scripts**

- **dev:** Runs the Vite dev server (`npm run dev`).
- **build:** Creates a production build (`npm run build`).
- **preview:** Serves the production build locally (`npm run preview`).

**Important Files**

- `src/main.jsx` — App bootstrap and context providers.
- `src/App.jsx` — Routes and layout.
- `src/components/` — UI components (e.g. `Navbar.jsx`, `ProductCard.jsx`).
- `src/pages/` — Page views (`Home.jsx`, `Cart.jsx`, `Login.jsx`).
- `src/context/` — React contexts: `CartContext.jsx`, `AuthContext.jsx`.
- `src/hooks/` — Reusable hooks: `useFetch.js`, `useLocalStorage.js`.

**How it works (brief)**

- The app fetches product data from `https://fakestoreapi.com/products` using `useFetch` and renders cards on the `Home` page.
- `CartContext` stores cart items in localStorage and exposes `addToCart`, `removeFromCart`, `updateQuantity`, and `clearCart`.
- `AuthContext` stores a simple `user` object in localStorage with `login` and `logout` helpers.

**Development Notes & Gotchas**

- Ensure components using `useCart()` or `useAuth()` are rendered inside their respective providers in `src/main.jsx`.
- If components render `undefined` from a hook, restart the dev server to clear HMR state.
- Tailwind is configured; check `index.css` for `@tailwind` directives if styles don't apply.

**Future Expansion (Roadmap & Ideas)**

- Product features
  - Product details page with full description, reviews, and related items.
  - Filtering, sorting and search (category filters, price range, text search).
  - Pagination or infinite scroll for large catalogs.
- User & Orders
  - Real authentication (JWT or OAuth) with backend integration.
  - Persistent user carts synced with server.
  - Order checkout flow and order history.
- Payments & Integrations
  - Payment provider integration (Stripe/PayPal).
  - Email notifications for order confirmation.
- UX & Accessibility
  - Responsive refinements and keyboard accessibility improvements.
  - Internationalization (i18n) and currency formatting.
- Reliability & Performance
  - Add unit and integration tests (Jest + React Testing Library).
  - Add CI/CD (GitHub Actions) with linting and tests on PRs.
  - Implement caching/rehydration for product data, and optimize images.
- Platform & Ops
  - Deploy to Vercel/Netlify with environment-specific configs.
  - Add analytics and error reporting.

**Contributing**

- Feel free to open issues or PRs. Keep changes focused and include tests for non-trivial logic.

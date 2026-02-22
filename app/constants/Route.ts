export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCT: "/product",
  DASHBOARD: "/dashboard",
  PROFILE: (userId: string | number) => `/profile/${userId}`,
};

interface ROUTES {
  readonly HOME: string;
  readonly ABOUT: string;
  readonly CONTACT: string;
  readonly PRODUCT: string;
  readonly LOGIN: string;
  readonly DASHBOARD: string;
  readonly PROFILE: (userId: string | number) => string;
}
export const ROUTES: ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCT: "/product",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PROFILE: (userId) => `/profile/${userId}`,
};

interface ROUTES {
  readonly HOME: string;
  readonly ABOUT: string;
  readonly CONTACT: string;
  readonly PRODUCTFILTER: string;
  readonly LOGIN: string;
  readonly DASHBOARD: string;
  readonly PROFILE: (userId: string | number) => string;
}
export const ROUTES: ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCTFILTER: "/ProductFilter",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PROFILE: (userId) => `/profile/${userId}`,
};

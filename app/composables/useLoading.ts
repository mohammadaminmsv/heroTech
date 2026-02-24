import { LoadingStore } from "~~/stores/Loading";

export const showLoading = () => {
  const store = LoadingStore();
  store.show();
};

export const hideLoading = () => {
  const store = LoadingStore();
  store.hide();
};

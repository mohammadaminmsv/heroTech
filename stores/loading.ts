import { defineStore } from "pinia";
interface storeState {
  isLoading: Boolean;
}
interface storeAction {
  show: () => void;
  hide: () => void;
}

export const LoadingStore = defineStore<"loading", storeState, {}, storeAction>(
  "loading",
  {
    state: (): storeState => ({
      isLoading: false,
    }),
    actions: {
      show() {
        this.isLoading = true;
      },
      hide() {
        this.isLoading = false;
      },
    },
  },
);

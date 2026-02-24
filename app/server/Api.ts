import { LoadingStore } from "~~/stores/Loading";

type ApiType = "fetch" | "async" | "regular";
type methodType = "GET" | "POST";

interface CallApiOptions {
  url: string;
  type?: ApiType;
  payload?: any;
  method?: methodType;
}

export const CallApi = async <T>({
  url,
  type = "fetch",
  payload = null,
  method = "GET",
}: CallApiOptions): Promise<T | null> => {
  const config = useRuntimeConfig();
  let pendingAsync;
  const apiBase = config.public.apiBase;
  let success;
  try {
    if (type === "fetch") {
      const { data, pending, error } = await useFetch<T>(`${apiBase}/${url}`, {
        method,
        body: payload,
      });

      return {
        data: data.value,
        success: error.value ? false : true,
        error: error.value,
        pending: pending.value,
      };
    } else if (type === "async") {
      const { data, error } = await useAsyncData<T>(
        url,
        () => $fetch<T>(`${apiBase}/${url}`, { method, body: payload }),
        {
          onRequest() {
            pendingAsync = true;
          },
          onResponse() {
            pendingAsync = false;
          },
          onResponseError() {
            pendingAsync = false;
          },
        },
      );
      return {
        data: data.value,
        success: error.value ? false : true,
        error: error.value,
        pending: pendingAsync,
      };
    } else if (type === "regular") {
      return await $fetch<T>(`${apiBase}/${url}`, {
        method,
        body: payload,
      });
    }

    return null;
  } catch (err) {
    console.error("[CallApi Error]", err);
    return null;
  }
};

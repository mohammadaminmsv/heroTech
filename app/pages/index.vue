<template>
  <div class="flex flex-col bg-htmain">{{ product }}</div>
</template>
<script setup lang="ts">
import { CallApi } from "~/server/Api";

const product = useState<any[]>("product", () => []);

const useApi = async () => {
  showLoading();
  try {
    const product = await CallApi({
      url: "products",
      type: "fetch",
      method: "GET",
    });
    if (product) {
      console.log(product);
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
  }
};

onMounted(() => {
  useApi();
});
</script>

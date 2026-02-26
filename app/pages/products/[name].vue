<template>
  <div
    dir="rtl"
    class="my-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 flex flex-col gap-6"
  >
    <div class="bg-htwhite rounded-2xl p-4 flex flex-col gap-4 w-full">
      <h1>{{ singleProduct?.title }}</h1>
      <div class="flex">
        <img
          :src="singleProduct?.image"
          :alt="singleProduct?.title"
          class="w-full h-[414px] rounded-[16px] object-contain"
        />
      </div>
    </div>
    <div class="bg-htwhite rounded-2xl gap-[16px] p-4 grid grid-cols-7 w-full">
      <h1 class="text-[#0A2A51] text-[20px] font-semibold col-span-7">
        مشخصات فنی
      </h1>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-2 rounded-l-[4px] rounded-r-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        قیمت
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-5 rounded-r-[4px] rounded-l-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        {{ singleProduct?.price }}
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-2 rounded-l-[4px] rounded-r-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        توضیحات
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-5 rounded-r-[4px] rounded-l-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        {{ singleProduct?.description }}
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-2 rounded-l-[4px] rounded-r-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        دسته بندی
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-5 rounded-r-[4px] rounded-l-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        {{ singleProduct?.category }}
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-2 rounded-l-[4px] rounded-r-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        رتبه
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-5 rounded-r-[4px] rounded-l-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        {{ singleProduct?.rating?.rate }}
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-2 rounded-l-[4px] rounded-r-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        تعداد
      </div>
      <div
        class="bg-[#F5F7FA] text-[#57728E] text-[14px] col-span-5 rounded-r-[4px] rounded-l-[16px] h-[48px] pr-[13px] flex justify-start items-center"
      >
        {{ singleProduct?.rating?.count }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { CallApi } from "~/server/Api";
import mediumZoom from "medium-zoom";
const route = useRoute();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const singleProduct = ref<Product>({
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
});
interface ResultApi<T> {
  data: T;
  success: boolean;
  error: string | null;
}

const id = computed(() => route.query.id as string);
const getProduct = async () => {
  showLoading();
  console.log(id);
  try {
    const result = await CallApi<ResultApi<Product>>({
      url: `products/${id.value}`,
      type: "async",
      method: "GET",
    });
    if (result?.success) {
      singleProduct.value = result?.data;
    } else {
      console.log(result?.error);
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
  }
};
onMounted(() => {
  getProduct();
  mediumZoom("img");
});
</script>

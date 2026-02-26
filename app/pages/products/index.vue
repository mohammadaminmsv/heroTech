<template>
  <div
    dir="rtl"
    class="my-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 flex flex-col lg:flex-row gap-6"
  >
    <div class="flex flex-col gap-4 w-full lg:w-[280px]">
      <div class="bg-htwhite rounded-2xl p-4 flex flex-col gap-4 w-full">
        <h1 class="text-[#445A74] text-sm font-semibold">فیلتر و جستجو</h1>

        <div class="relative">
          <svg
            class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-htred pointer-events-none"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            v-model="search"
            type="text"
            placeholder="جستجو محصول..."
            class="w-full h-11 pr-10 pl-10 rounded-xl border border-[#E9EDF5] focus:border-htred focus:outline-none text-sm transition-all"
          />

          <button
            v-if="search"
            @click="search = ''"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <HButton
          label="جستجو"
          class="w-full rounded-xl bg-htred text-white text-sm font-bold"
          :func="filterProduct"
        />
      </div>

      <div class="bg-htwhite rounded-2xl p-4 flex flex-col gap-4 w-full">
        <HButton
          label="مرتب سازی"
          class="justify-between text-[#445A74] text-sm"
          iconLeft="arrow-left"
          :iconclass="sortOpen ? 'rotate-90' : '-rotate-90'"
          :func="OpenModalSort"
        />

        <div v-show="sortOpen" class="flex flex-col gap-2">
          <label
            v-for="option in sortOptions"
            :key="option.value"
            class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg text-sm"
          >
            <input type="radio" :value="option.value" v-model="sortValue" />
            {{ option.label }}
          </label>
        </div>
      </div>

      <div class="bg-htwhite rounded-2xl p-4 flex flex-col gap-4 w-full">
        <HButton
          label="دسته بندی"
          class="justify-between text-[#445A74] text-sm"
          iconLeft="arrow-left"
          :iconclass="categoryOpen ? 'rotate-90' : '-rotate-90'"
          :func="OpenModalCategory"
        />

        <div v-show="categoryOpen" class="flex flex-col gap-2">
          <label
            v-for="cat in categories"
            :key="cat.value"
            class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg text-sm"
          >
            <input
              type="checkbox"
              :value="cat.value"
              v-model="selectedCategories"
            />
            {{ cat.label }}
          </label>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <div
        class="bg-htwhite rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-4"
      >
        <h1 class="text-[#253343] text-sm font-semibold">
          فیلتر های اعمال شده
        </h1>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="(item, index) in selectedCategoryLabels"
            :key="index"
            class="bg-[#FCE5EE] px-3 py-2 rounded-xl flex items-center text-sm"
          >
            {{ item }}
            <IconHT
              class="cursor-pointer pr-2"
              name="close"
              @click="removeCategory(selectedCategories[index])"
            />
          </div>

          <div
            v-if="selectedSortLabel"
            class="bg-[#FCE5EE] px-3 py-2 rounded-xl flex items-center text-sm"
          >
            {{ selectedSortLabel }}
            <IconHT
              class="cursor-pointer pr-2"
              name="close"
              @click="removeSort"
            />
          </div>

          <div
            v-if="searchLabel"
            class="bg-[#FCE5EE] px-3 py-2 rounded-xl flex items-center text-sm"
          >
            {{ searchLabel }}
            <IconHT
              class="cursor-pointer pr-2"
              name="close"
              @click="searchLabel = ''"
            />
          </div>
        </div>
      </div>

      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center"
      >
        <SampleProduct
          v-for="item in filteredProducts"
          :key="item.id"
          :name="item.title"
          :iSrc="item.image"
          :url="item.title"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CallApi } from "~/server/Api";


onMounted(() => {
  getProductList();
});

type SortType = "nLowToHigh" | "nHighToLow" | "gLowToHigh" | "gHighToLow";

type CategoryType =
  | "men's clothing"
  | "jewelery"
  | "electronics"
  | "women's clothing";

const search = ref("");
const sortOpen = ref(true);
const categoryOpen = ref(true);
const categories: { label: string; value: CategoryType }[] = [
  { label: "لباس مردانه", value: "men's clothing" },
  { label: "جواهرات", value: "jewelery" },
  { label: "الکترونیک", value: "electronics" },
  { label: "لباس زنانه", value: "women's clothing" },
];
const sortOptions: { label: string; value: SortType }[] = [
  { label: "تعداد کم به زیاد", value: "nLowToHigh" },
  { label: "تعداد زیاد به کم", value: "nHighToLow" },
  { label: "رتبه کم به زیاد", value: "gLowToHigh" },
  { label: "رتبه زیاد به کم", value: "gHighToLow" },
];

const sortValue = ref<SortType | "">("");

const selectedCategories = ref<CategoryType[]>([]);

const selectedCategoryLabels = computed(() => {
  return selectedCategories.value.map((val) => {
    const found = categories.find((c) => c.value === val);
    return found?.label ?? val;
  });
});
const selectedSortLabel = computed(() => {
  const found = sortOptions.find((o) => o.value === sortValue.value);
  return found?.label ?? "";
});
const OpenModalSort = () => {
  sortOpen.value = !sortOpen.value;
};
const OpenModalCategory = () => {
  categoryOpen.value = !categoryOpen.value;
};
const removeCategory = (catValue: CategoryType) => {
  selectedCategories.value = selectedCategories.value.filter(
    (c) => c !== catValue,
  );
};

const removeSort = () => {
  sortValue.value = "";
};
interface ResultApi<T> {
  data: T[];
  success: boolean;
  error: string | null;
}
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
const products = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([]);
const getProductList = async () => {
  showLoading();
  try {
    const result = await CallApi<ResultApi<Product>>({
      url: "products",
      type: "fetch",
      method: "GET",
    });
    if (result?.success) {
      products.value = result?.data;
      filteredProducts.value = result?.data;
    } else {
      console.log(result?.error);
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
  }
};
const searchLabel = ref<string>("");

const filterProduct: () => void = () => {
  if (!search.value.trim()) {
    filteredProducts.value = products.value;
    searchLabel.value = "";
    if (!products.value) {
      getProductList();
    }
    return;
  }
  searchLabel.value = search.value;

  filteredProducts.value = products.value.filter((item) =>
    item.title.toLowerCase().includes(search.value.toLowerCase()),
  );
};

watch(searchLabel, async () => {
  if (!searchLabel.value.trim()) {
    filteredProducts.value = products.value;
    searchLabel.value = "";
    if (!products.value) {
      getProductList();
    }
  }
});
watch(sortValue, () => {
  if (!sortValue.value) {
    filteredProducts.value = [...products.value];
    return;
  }

  const sorted = [...filteredProducts.value];

  switch (sortValue.value) {
    case "nLowToHigh":
      sorted.sort((a, b) => a.rating.count - b.rating.count);
      break;

    case "nHighToLow":
      sorted.sort((a, b) => b.rating.count - a.rating.count);
      break;

    case "gLowToHigh":
      sorted.sort((a, b) => a.rating.rate - b.rating.rate);
      break;

    case "gHighToLow":
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
  }

  filteredProducts.value = sorted;
});

watch(selectedCategories, () => {
  if (selectedCategories.value.length === 0) {
    filteredProducts.value = [...products.value];
    return;
  }

  filteredProducts.value = products.value.filter((item) =>
    selectedCategories.value.includes(item.category as CategoryType),
  );
});
</script>

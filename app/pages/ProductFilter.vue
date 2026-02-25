<template>
  <div class="my-[24px] mx-[164px] flex flex-row gap-[24px]" dir="rtl">
    <div class="flex flex-col gap-[16px]">
      <div
        class="bg-htwhite flex flex-col rounded-[24px] w-[266px] p-[16px] gap-[16px]"
      >
        <h1 class="text-[#445A74] text-[13px]">فیلتر و جستجو</h1>
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
            class="w-full h-[42px] pr-10 pl-10 rounded-[12px] border border-[#E9EDF5] focus:border-htred focus:outline-none text-[14px] transition-all"
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
          class="rounded-[16px] border-[1.5px] border-[#E9EDF5] w-[239px] gap-[8px] bg-htred text-htwhite text-[14px] font-bold"
        />
      </div>
      <div
        class="bg-htwhite flex flex-col rounded-[24px] w-[266px] p-[16px] gap-[16px]"
      >
        <HButton
          label="مرتب سازی"
          class="justify-between text-[#445A74] text-[13px]"
          iconLeft="arrow-left"
          :iconclass="sortOpen ? 'rotate-90' : '-rotate-90'"
          :func="OpenModalSort"
        />
        <div v-show="sortOpen">
          <label
            v-for="option in sortOptions"
            :key="option.value"
            class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-lg"
          >
            <input type="radio" :value="option.value" v-model="sortValue" />
            {{ option.label }}
          </label>
        </div>
      </div>
      <div
        class="bg-htwhite flex flex-col rounded-[24px] w-[266px] p-[16px] gap-[16px]"
      >
        <HButton
          label="دسته بندی"
          class="justify-between text-[#445A74] text-[13px]"
          iconLeft="arrow-left"
          :iconclass="categoryOpen ? 'rotate-90' : '-rotate-90'"
          :func="OpenModalCategory"
        />
        <div v-show="categoryOpen">
          <label
            v-for="cat in categories"
            :key="cat.value"
            class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-lg"
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
    <div class="flex flex-col gap-[16px]">
      <div
        class="bg-htwhite w-full flex flex-row rounded-[24px] h-[64px] px-[16px] justify-between items-center"
      >
        <h1 class="text-[#253343] text-[14px]">فیلتر های اعمال شده</h1>
        <div class="flex gap-[12px]">
          <div v-for="(item, index) in selectedCategoryLabels" :key="index">
            <div
              class="bg-[#FCE5EE] p-[8px] rounded-[16px] flex flex-row justify-center items-center"
            >
              {{ item }}
              <IconHT
                class="cursor-pointer px-2"
                :name="`close`"
                @click="
                  () => {
                    const cat = selectedCategories[index];
                    removeCategory(cat);
                  }
                "
              />
            </div>
          </div>
          <div v-if="selectedSortLabel">
            <div
              class="bg-[#FCE5EE] p-[8px] rounded-[16px] flex flex-row justify-center items-center"
            >
              {{ selectedSortLabel }}
              <IconHT
                class="cursor-pointer px-2"
                :name="`close`"
                @click="removeSort"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-[24px]">
        <SampleProduct name="شسیشسیشیشسیشسیشسیشسیشسیسیشس" iSrc="asdsdas" />
        <SampleProduct name="sdasd" iSrc="asdsdas" />
        <SampleProduct name="sdasd" iSrc="asdsdas" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
type SortType = "nLowToHigh" | "nHighToLow" | "gLowToHigh" | "gHighToLow";

type CategoryType = "electronics" | "clothing" | "books" | "sports";

const search = ref("");
const sortOpen = ref(true);
const categoryOpen = ref(true);
const categories: { label: string; value: CategoryType }[] = [
  { label: "الکترونیک", value: "electronics" },
  { label: "پوشاک", value: "clothing" },
  { label: "کتاب", value: "books" },
  { label: "ورزشی", value: "sports" },
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
</script>

<template>
  <div
    class="bg-htwhite flex flex-col items-center justify-around w-[263.33331298828125px] h-[286px] rounded-[24px] border-[1px] border-[#E9EDF5]"
  >
    <img
      :src="`${props.iSrc}`"
      :alt="`${props.name}`"
      class="w-[247px] h-[170px] rounded-[16px] px-[8px] truncate "
    />
    <h1 class="w-[180px] text-[14px] font-bold text-right truncate" dir="rtl">{{ props.name }}</h1>
    <HButton
      label="مشاهده جزئیات"
      iconLeft="arrow-left"
      class="rounded-[16px] border-[1.5px] border-[#E9EDF5] w-[239px] gap-[8px] text-htred text-[14px] font-bold"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  name: String,
  iSrc: String,
  url: String,
});
</script>

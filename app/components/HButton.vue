<template>
  <button
    :class="`${props.class} rounded-[16px] px-[16px] py-[12px] flex justify-center items-center`"
    @click="func"
  >
    <IconHT :class="`${props.iconclass}`" :name="`${props.iconRight}`" />
    <h1 class="text-[14px]">
      {{ props.label }}
    </h1>
    <IconHT :class="`${props.iconclass}`" :name="`${props.iconLeft}`" />
  </button>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
const props = defineProps({
  label: String,
  iconRight: String,
  iconLeft: String,
  class: String,
  iconclass: String,
  func: Function as PropType<((...args: any[]) => any) | undefined>,
});
</script>

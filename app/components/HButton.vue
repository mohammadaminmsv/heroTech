<template>
  <button
    :class="`${props.class} rounded-[16px] px-[16px] py-[12px] flex justify-center items-center`"
    @click="handleClick($event)"
  >
    <IconHT :name="`${props.iconRight}`" />
    <span class="text-[14px]">
      {{ props.label }}
    </span>
    <IconHT :name="`${props.iconLeft}`" />
  </button>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
const props = defineProps({
  label: String,
  iconRight: String,
  iconLeft: String,
  class: String,
  func: Function as PropType<((...args: any[]) => any) | undefined>,
});
const handleClick = (event: MouseEvent) => {
  if (props.func) {
    props.func(event); 
  }
};
</script>

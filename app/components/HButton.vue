<template>
  <button
    :class="`${props.class} rounded-[12px] px-[16px] py-[12px] flex-row justify-center items-center`"
  >
    <Icon class="size-[16px]" :name="`mdi:${props.icon}`" />
    <span>
      {{ props.label }}
    </span>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
  class: String,
});
</script>

<template>
  <img :src="`/icons/${props.name}.svg`" :class="class" :alt="alt" />
</template>
<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: "" },
  alt: { type: String, default: "" },
});
</script>

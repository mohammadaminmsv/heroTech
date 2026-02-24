<template>
  <Teleport to="body">
    <div
      v-if="loadingStore.isLoading"
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div
        class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { LoadingStore } from "~~/stores/Loading";
const loadingStore = LoadingStore();
</script>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4"
  >
    <div class="text-center max-w-md w-full">
      <h1 class="text-7xl font-bold text-red-500">
        {{ error.status }}
      </h1>

      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {{ error.message || "Something went wrong" }}
      </p>

      <div class="my-6 h-px bg-gray-200 dark:bg-zinc-700"></div>

      <NuxtLink
        to="/"
        class="inline-flex items-center justify-center h-10 px-6 rounded-2xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors duration-200"
      >
        بازگشت به صفحه اصلی
      </NuxtLink>
    </div>
  </div>
</template>

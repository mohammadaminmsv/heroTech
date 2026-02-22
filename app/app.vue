<template>
  <div class="min-h-screen flex flex-col bg-gray-100 font-sans" dir="rtl">
    <header>
      <Header />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer></footer>
  </div>
</template>
<script setup lang="ts">
import Header from "./layouts/Header.vue";
</script>

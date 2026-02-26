<template>
  <header
    class="bg-htwhite rounded-2xl px-4 sm:px-6 min-930:px-12 py-4 sticky top-0 z-50"
  >
    <div class="flex flex-row-reverse items-center justify-between">
      <NuxtLink to="/" class="text-lg font-bold"> HeroTeckLogo </NuxtLink>

      <div class="hidden min-930:flex">
        <NavBar />
      </div>

      <div class="hidden min-930:block">
        <HButton
          class="bg-htred text-white h-10 px-4"
          label="تماس"
          iconRight="call"
        />
      </div>

      <button class="min-930:hidden text-2xl" @click="toggleMenu">☰</button>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        @click="closeMenu"
      />
    </transition>

    <transition name="slide">
      <aside
        v-if="isOpen"
        class="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col"
        dir="rtl"
      >
        <button class="text-2xl mb-6 self-end" @click="closeMenu">×</button>

        <nav class="flex flex-col gap-6 text-lg">
          <NavBar />
        </nav>

        <div class="mt-auto">
          <HButton
            class="bg-htred text-white w-full h-10"
            label="تماس"
            iconRight="call"
          />
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

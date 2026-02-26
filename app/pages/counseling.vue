<template>
  <div dir="rtl" class="my-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
    <div
      class="bg-htwhite rounded-2xl p-6 shadow-sm flex flex-col gap-6 max-w-xl mx-auto"
    >
      <h1 class="text-[#445A74] text-base font-bold">دریافت مشاوره</h1>

      <div class="flex flex-col gap-2">
        <label class="text-[#445A74] text-sm font-medium"> شماره تماس </label>

        <input
          type="tel"
          placeholder="مثلاً 09123456789"
          class="h-11 px-4 rounded-xl border border-[#E9EDF5] focus:border-htred focus:ring-2 focus:ring-htred/20 outline-none transition-all text-sm"
        />
      </div>

      <button
        class="h-11 bg-htred text-white rounded-xl text-sm font-bold hover:opacity-90 transition"
      >
        ثبت درخواست
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

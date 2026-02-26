<template>
  <footer class="bg-htwhite flex flex-col gap-6">
    <div
      class="flex flex-col max-930:justify-around max-930:gap-24  sm:flex-row gap-8 sm:gap-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6"
      dir="rtl"
    >
      <div class="flex flex-col gap-2 w-full">
        <div class="text-xl font-bold">HeroTeckLogo</div>
        <div class="text-[#30445B] text-sm">
          هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
        </div>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <h1 class="font-bold text-lg">دسترسی سریع</h1>
        <NuxtLink to="/" class="text-htred text-sm">درباره ما</NuxtLink>
        <NuxtLink to="/" class="text-[#30445B] text-sm">بلاگ</NuxtLink>
        <NuxtLink to="/" class="text-[#30445B] text-sm">تماس با ما</NuxtLink>
        <NuxtLink to="/" class="text-[#30445B] text-sm"
          >خدمات پس از فروش</NuxtLink
        >
      </div>

      <div class="flex flex-col gap-2 w-full">
        <h1 class="font-bold text-lg">راهنمای سایت</h1>
        <NuxtLink to="/" class="text-[#30445B] text-sm"
          >قوانین و مقررات</NuxtLink
        >
        <NuxtLink to="/" class="text-[#30445B] text-sm">دریافت مشاوره</NuxtLink>
        <NuxtLink to="/" class="text-[#30445B] text-sm"
          >انتقادات و پیشنهادات</NuxtLink
        >
      </div>

      <div class="flex flex-col gap-2 w-full">
        <h1 class="font-bold text-lg">شبکه های اجتماعی</h1>
        <a href="#" class="flex items-center gap-2 text-htred text-sm">
          <IconHT name="telegram" class="w-5 h-5" /> تلگرام
        </a>
        <a href="#" class="flex items-center gap-2 text-htred text-sm">
          <IconHT name="instagram" class="w-5 h-5" /> اینستاگرام
        </a>
        <a href="#" class="flex items-center gap-2 text-htred text-sm">
          <IconHT name="linkedin" class="w-5 h-5" /> لینکدین
        </a>
      </div>
    </div>

    <div
      class="bg-[#F8F9FC] py-6 flex flex-col md:flex-row md:justify-around items-center gap-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32"
    >
      <div class="flex gap-4 justify-center">
        <img
          src="/picFooter1.svg"
          alt="enamad"
          class="h-16 w-16 object-contain"
        />
        <img
          src="/picFooter2.svg"
          alt="standard"
          class="h-16 w-16 object-contain"
        />
      </div>

      <div class="flex flex-col items-center text-center gap-4">
        <span class="text-gray-600 text-sm"> </span>
        <div class="flex gap-4 flex-wrap justify-center">
          <IconHT name="telegram" class="w-6 h-6 text-pink-400" />
          <IconHT name="instagram" class="w-6 h-6 text-pink-400" />
          <IconHT name="twitter" class="w-6 h-6 text-pink-400" />
          <IconHT name="youtube" class="w-6 h-6 text-pink-400" />
          <IconHT name="linkedin" class="w-6 h-6 text-pink-400" />
        </div>
      </div>

      <div class="hidden md:block w-36"></div>
    </div>
  </footer>
</template>

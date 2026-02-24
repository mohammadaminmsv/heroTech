<template>
  <div class="flex flex-col h-[421px] overflow-hidden">
    <div class="flex flex-row gap-20 justify-around w-full my-[40px]" dir="rtl">
      <div>
        <div class="w-24 h-40">HeroTeckLogo</div>
        <div class="text-[#30445B] text-[13px]">
          هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="font-bold text-[20px]">دسترسی سریع</h1>
        <NuxtLink to="/" class="text-htred">درباره ما</NuxtLink>
        <NuxtLink class="text-[#30445B] text-[13px]" to="/">بلاگ</NuxtLink>
        <NuxtLink class="text-[#30445B] text-[13px]" to="/"
          >تماس با ما</NuxtLink
        >
        <NuxtLink class="text-[#30445B] text-[13px]" to="/"
          >خدمات پس از فروش</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="font-bold text-[20px]">راهنمای سایت</h1>
        <NuxtLink class="text-[#30445B] text-[13px]" to="/"
          >قوانین و مقررات</NuxtLink
        >
        <NuxtLink class="text-[#30445B] text-[13px]" to="/"
          >دریافت مشاوره</NuxtLink
        >
        <NuxtLink class="text-[#30445B] text-[13px]" to="/"
          >انتقادات و پیشنهادات</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="font-bold text-[20px]">شبکه های اجتماعی</h1>
        <a href="#" class="flex text-htred gap-[16px]">
          <IconHT name="telegram" class="w-[24px] h-[24px] text-htred" />
          <span>تلگرام</span>
        </a>
        <a href="#" class="flex text-htred gap-[16px]">
          <IconHT name="instagram" class="w-[24px] h-[24px] text-htred" />
          <span>اینستاگرام</span>
        </a>
        <a href="#" class="flex text-htred gap-[16px]">
          <IconHT name="linkedin" class="w-[24px] h-[24px] text-htred" />
          <span>لینکدین</span>
        </a>
      </div>
    </div>
    <div
      class="bg-[#F8F9FC] h-[149px] gap-24 flex items-center justify-center px-16"
    >
      <div class="flex gap-4">
        <img src="/picFooter1.svg" alt="enamad" class="h-[60px]" />
        <img src="/picFooter2.svg" alt="standard" class="h-[60px]" />
      </div>

      <div
        class="flex flex-col items-center justify-center mx-8 text-center gap-4"
      >
        <span class="text-sm text-gray-600">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی
          برداری پیگرد قانونی دارد
        </span>
        <div class="flex gap-4">
          <IconHT name="telegram" class="w-6 h-6 text-pink-400" />
          <IconHT name="instagram" class="w-6 h-6 text-pink-400" />
          <IconHT name="twitter" class="w-6 h-6 text-pink-400" />
          <IconHT name="youtube" class="w-6 h-6 text-pink-400" />
          <IconHT name="linkedin" class="w-6 h-6 text-pink-400" />
        </div>
      </div>

      <div class="w-[140px]"></div>
    </div>
  </div>
</template>

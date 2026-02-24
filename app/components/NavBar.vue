<template>
  <div>
    <nav>
      <ul class="flex gap-[24px] flex-row-reverse">
        <li class="flex justify-center gap-[8px] items-center">
          <NuxtLink to="/Product">لیست محصولات</NuxtLink>

          <IconHT name="category-2" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center">
          <NuxtLink>دریافت مشاوره</NuxtLink>
          <IconHT name="book" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center">
          <NuxtLink>سوالات متداول</NuxtLink>
          <IconHT name="message-question" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center">
          <NuxtLink class="text-htred">تماس با ما</NuxtLink>
          <IconHT name="phonecall" class="w-4 h-4" />
        </li>
      </ul>
    </nav>
  </div>
</template>

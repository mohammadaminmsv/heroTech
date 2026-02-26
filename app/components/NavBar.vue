<template>
  <div>
    <nav>
      <ul class="flex gap-[24px] flex-row-reverse max-930:flex-col">
        <li class="flex justify-center gap-[8px] items-center  max-930:justify-end max-930:flex-row-reverse">
          <NuxtLink to="/products">لیست محصولات</NuxtLink>

          <IconHT name="category-2" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center  max-930:justify-end max-930:flex-row-reverse">
          <NuxtLink to="/counseling">دریافت مشاوره</NuxtLink>
          <IconHT name="book" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center  max-930:justify-end max-930:flex-row-reverse">
          <NuxtLink to="/questions">سوالات متداول</NuxtLink>
          <IconHT name="message-question" class="w-4 h-4" />
        </li>
        <li class="flex justify-center gap-[8px] items-center  max-930:justify-end max-930:flex-row-reverse">
          <NuxtLink class="text-htred">تماس با ما</NuxtLink>
          <IconHT name="phonecall" class="w-4 h-4" />
        </li>
      </ul>
    </nav>
  </div>
</template>

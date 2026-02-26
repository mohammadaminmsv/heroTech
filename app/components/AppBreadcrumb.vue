<template>
  <nav
    dir="rtl"
    class="flex flex-wrap items-center gap-2 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mt-4 text-sm text-[#6783A0]"
  >
    <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
      <NuxtLink
        v-if="index !== breadcrumbs.length - 1"
        :to="crumb.path"
        class="hover:text-htred transition"
      >
        {{ crumb.label }}
      </NuxtLink>

      <span v-else class="text-[#253343] font-semibold">
        {{ crumb.label }}
      </span>

      <span v-if="index < breadcrumbs.length - 1">/</span>
    </template>
  </nav>
</template>
<script setup lang="ts">
const route = useRoute();

interface Crumb {
  label: string;
  path: string;
}

const routeNameMap: Record<string, string> = {
  products: "محصولات",
  counseling: "دریافت مشاوره",
  contact: "تماس با ما",
  questions: "سوالات متداول",
};

const breadcrumbs = computed<Crumb[]>(() => {
  const pathArray = route.path.split("/").filter(Boolean);

  const crumbs: Crumb[] = [{ label: "خانه", path: "/" }];

  let currentPath = "";

  if(pathArray.length == 0) return null
  pathArray.forEach((segment) => {
    currentPath += `/${segment}`;

    crumbs.push({
      label: routeNameMap[segment] || segment.replace(/-/g, " "),
      path: currentPath,
    });
  });

  return crumbs;
});
</script>

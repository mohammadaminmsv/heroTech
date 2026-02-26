<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-1 flex flex-col bg-htmain">
      <AppBreadcrumb />
      <slot />
    </main>

    <Footer />
  </div>
</template>

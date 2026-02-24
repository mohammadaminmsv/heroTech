<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-1 flex bg-htmain">
      <slot />
    </main>

    <Footer />
  </div>
</template>

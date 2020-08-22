<template>
  <main class="main">
    <v-brands />
    <v-news />
  </main>
</template>
<script>
export default {
  components: {
    "v-brands": () => import("./VBrands"),
    "v-news": () => import("./VNews"),
  },
};
</script>


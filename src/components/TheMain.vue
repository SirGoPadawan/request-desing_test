<template>
  <main class="main">
    <v-brands />
  </main>
</template>
<script>
export default {
  components: {
    "v-brands": () => import("./VBrands"),
  },
};
</script>


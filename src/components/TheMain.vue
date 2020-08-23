<template>
  <main class="main">
    <v-brands />
    <v-news />
    <v-recommend />
    <v-ceo />
  </main>
</template>
<script>
export default {
  components: {
    "v-brands": () => import("./VBrands"),
    "v-news": () => import("./VNews"),
    "v-recommend": () => import("./VRecommend"),
    "v-ceo": () => import("./VCEO"),
  },
};
</script>


<template>
  <header class="header">
    <!-- <v-header-top />
    <v-header-middle />
    <v-header-bottom /> -->
  </header>
</template>
<script>
export default {
  components: {
    "v-header-top": () => import("./VHeaderTop"),
    "v-header-middle": () => import("./VHeaderMiddle"),
    "v-header-bottom": () => import("./VHeaderBottom"),
  },
};
</script>

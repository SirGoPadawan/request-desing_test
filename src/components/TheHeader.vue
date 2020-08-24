<template>
  <header class="header">
    <v-header-top />
    <v-header-middle />
  </header>
</template>
<script>
export default {
  components: {
    "v-header-top": () => import("./VHeaderTop"),
    "v-header-middle": () => import("./VHeaderMiddle"),
  },
};
</script>

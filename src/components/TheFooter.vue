<template>
  <footer class="footer">
    <v-nav-footer />
    <v-address-footer />
  </footer>
</template>
<script>
export default {
  components: {
    "v-nav-footer": () => import("./VNavFooter"),
    "v-address-footer": () => import("./VAddressFooter"),
  },
};
</script>

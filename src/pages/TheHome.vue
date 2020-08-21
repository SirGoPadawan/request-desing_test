<template>
  <div>
    <the-header />
    <the-main />
    <the-footer />
  </div>
</template>
<script>
export default {
  components: {
    "the-header": () => import("../components/TheHeader"),
    "the-main": () => import("../components/TheMain"),
    "the-footer": () => import("../components/TheFooter"),
  },
};
</script>

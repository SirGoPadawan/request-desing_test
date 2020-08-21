<template>
  <div class="v-email-header">
    <button class="v-email-header__btn btn-email" @click="openCopy()">info@stolovay.ru</button>
    <button v-if="isOpenCopy" class="v-email-header__btn-copy_active" @click="copyMail()">Копировать</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenCopy: false,
    };
  },
  methods: {
    openCopy() {
      this.isOpenCopy = !this.isOpenCopy;
    },
    copyMail() {
      this.isOpenCopy = false;
    },
  },
};
</script>
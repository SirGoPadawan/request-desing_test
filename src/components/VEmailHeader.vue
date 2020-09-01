<template>
  <div class="v-email-header">
    <img src="../static/email.png" alt="значок почты" />
    <button class="v-email-header__btn" @click="openCopy()">
      info@stolovay.ru
    </button>
    <button
      v-if="isOpenCopy"
      class="v-email-header__btn-copy_active"
      @click="copyMail()"
    >
      Копировать
    </button>
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

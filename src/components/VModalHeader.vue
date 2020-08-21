<template>
  <div class="v-modal-header">
    <button class="v-modal-header__btn btn-telephone" @click="openFeedback()">8 800 333-88-31</button>
    <div v-if="isOpenFeedback" class="v-modal-header_active"></div>
    <div v-if="isOpenFeedback" class="v-modal-header__feedback_active">
      <div>
        <button class="v-modal-header__btn-close" @click="closeFeedback()"></button>
        <a href="tel:+7495 790-72-05" class="v-modal-header__call-phone">8495 790-72-05</a>
        <p class="v-modal-header__text">Мы принимаем звонки без выходных</p>
        <p>Выберите способ связи:</p>
        <span class="v-modal-header__inputs">
          <input type="radio" name="feedback" class="v-modal-header__radio" id="telephone" />
          <label for="telephone" class="v-modal-header__telephone-handler checked">Мобильный</label>
          <input type="radio" name="feedback" class="v-modal-header__radio" id="viber" />
          <label for="viber" class="v-modal-header__viber checked">Viber</label>
          <input type="radio" name="feedback" class="v-modal-header__radio" id="telegram" />
          <label for="telegram" class="v-modal-header__telegram checked">Telegram</label>
          <input type="radio" name="feedback" class="v-modal-header__radio" id="whatsapp" />
          <label for="whatsapp" class="v-modal-header__whatsapp checked">Whatsapp</label>
        </span>
      </div>
      <div>
        <span class="v-modal-header__feedback-title">Обратный звонок:</span>
        <p class="v-modal-header__text">Мы перезвоним в течении часа</p>
        <span class="v-modal-header__inputs">
          <label for="name" class="v-modal-header__label">Имя:</label>
          <input type="text" id="name" class="v-modal-header__input" />
          <label for="phone" class="v-modal-header__label">Телефон:</label>
          <input type="text" id="phone" class="v-modal-header__input" />
        </span>
        <button class="v-modal-header__send-btn">Отправить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenFeedback: false,
    };
  },
  methods: {
    openFeedback() {
      this.isOpenFeedback = !this.isOpenFeedback;
    },
    closeFeedback() {
      this.isOpenFeedback = !this.isOpenFeedback;
    },
  },
};
</script>
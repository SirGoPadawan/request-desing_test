<template>
  <div class="v-modal-header">
    <img src="../static/telephone.png" alt="значок почты" />
    <button class="v-modal-header__btn" @click="openFeedback()">
      8 800 333-88-31
    </button>
    <div v-if="isOpenFeedback" class="v-modal-header_active"></div>
    <div v-if="isOpenFeedback" class="v-modal-header__feedback_active">
      <div>
        <button
          class="v-modal-header__btn-close"
          @click="closeFeedback()"
        ></button>
        <a href="tel:+7495 790-72-05" class="v-modal-header__call-phone"
          >8495 790-72-05</a
        >
        <p class="v-modal-header__text">Мы принимаем звонки без выходных</p>
        <p>Выберите способ связи:</p>
        <span class="v-modal-header__inputs">
          <span class="v-modal-header__inputs-span">
            <img
              src="../static/telephone-handle.png"
              alt="иконка телефона"
              class="v-modal-header__comm-logo"
            />
            <label class="v-modal-header__communication">
              <input
                type="radio"
                name="feedback"
                class="v-modal-header__radio"
              />

              <span class="communication">Мобильный</span>
            </label>
          </span>
          <span class="v-modal-header__inputs-span">
            <img
              src="../static/viber.png"
              alt="иконка viber"
              class="v-modal-header__comm-logo"
            />
            <label class="v-modal-header__communication">
              <input
                type="radio"
                name="feedback"
                class="v-modal-header__radio"
              />
              <span class="communication">Viber</span>
            </label>
          </span>
          <span class="v-modal-header__inputs-span">
            <img
              src="../static/telegram.png"
              alt="иконка telegram"
              class="v-modal-header__comm-logo"
            />
            <label class="v-modal-header__communication">
              <input
                type="radio"
                name="feedback"
                class="v-modal-header__radio"
              />
              <span class="communication">Telegram</span>
            </label>
          </span>
          <span class="v-modal-header__inputs-span">
            <img
              src="../static/whatsapp.png"
              alt="иконка whatsapp"
              class="v-modal-header__comm-logo"
            />
            <label class="v-modal-header__communication">
              <input
                type="radio"
                name="feedback"
                class="v-modal-header__radio"
              />
              <span class="communication">Whatsapp</span>
            </label>
          </span>
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

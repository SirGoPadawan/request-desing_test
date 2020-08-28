<template>
  <section class="search">
    <span class="search__select" @blur="isActive = false" tabindex="0">
      <div class="search__select-btn" @click="openSelect()">
        {{ placeholder }}
      </div>
      <span v-show="isActive" role="listbox" class="search__select-list">
        <div class="search__select-title">Выберите категорию:</div>
        <div
          role="option"
          v-for="(item, index) in list"
          :key="index"
          class="search__select-option"
          @click="changePlaceholder({ value: item.value })"
        >
          {{ item.text }}
        </div>
      </span>
    </span>
    <div
      class="search__form"
      @click="isActiveModal = !isActiveModal"
      tabindex="0"
    >
      <input class="search__input" @blur="isActiveModal = false" />
      <div v-if="isActiveModal" class="search__modal-list" tabindex="0">
        <div class="search__modal-item">
          Lorem ipsum dolor sit amet.
          <div class="search__modal-subitem">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="search__modal-item">
          Lorem ipsum dolor sit amet.
          <div class="search__modal-subitem">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="search__modal-item">
          Lorem ipsum dolor sit amet.
          <div class="search__modal-subitem">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
    <div v-if="isActiveModal" class="search__modal" tabindex="0"></div>
    <button class="search__button">
      <img src="../img/search.png" alt="" class="search__img" />
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      isActiveModal: false,
      placeholder: "Все",
      list: [
        { value: "Тепловое", text: "Тепловое" },
        { value: "Холодильное", text: "Холодильное" },
        { value: "Электромеханическое", text: "Электромеханическое" },
        { value: "Посудомоечное", text: "Посудомоечное" },
        { value: "Барное", text: "Барное" },
        { value: "Хлебопекарное", text: "Хлебопекарное" },
      ],
    };
  },
  methods: {
    openModal() {
      this.isActiveModal = !this.isActiveModal;
    },
    openSelect() {
      this.isActive = !this.isActive;
    },
    changePlaceholder(value) {
      this.placeholder = value.value;
      this.isActive = false;
    },
  },
};
</script>

<template>
  <section class="search">
    <span class="search__select" @click="openSelect()">
      <input
        type="text"
        :placeholder="placeholder"
        class="search__select__input"
        :size="countSymbols"
      />
      <span v-if="isOpen"></span>
    </span>
    <input class="search__input" />
    <button class="search__button">
      <img src="../img/search.png" alt="" class="search__img" />
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      placeholder: "Все",
      countSymbols: 3,
    };
  },
  watch: {
    placeholder: function() {
      this.countSymbols = this.placeholder.length;
      console.log(this.countSymbols);
    },
  },
  methods: {
    openSelect() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

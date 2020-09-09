<template>
  <section class="container-main offers">
    <nav class="offers-nav">
      <h2 class="offers-nav__title">Целевые предложение</h2>
      <ul class="offers-nav__list">
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Кафе, барам, ресторанам</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Детским садам и школам</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Таблет-питание</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Для столовых</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Для пищеблоков</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Государственным заказам</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Для магазинов</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Для воинских частей</a>
        </li>
        <li class="offers-nav__item">
          <a href="#" class="offers-nav__link">Все предложения</a>
        </li>
      </ul>
    </nav>
    <nav class="offers-nav-mobile">
      <ul class="offers-nav-mobile__list">
        <li class="offers-nav-mobile__item">Оборудование</li>
      </ul>
    </nav>
    <section class="offers-slider">
      <v-swiper />
    </section>
    <section class="offers-sale">
      <img
        src="../img/giftbox.png"
        alt="подарок"
        class="offers-sale__present"
      />
      <span>Самые низкие цены</span>
      <h2 class="offers-sale__title">Распродажа</h2>
      <a class="offers-sale__link" href="#">Каталог распродаж</a>
    </section>
  </section>
</template>
<script>
export default {
  components: {
    "v-swiper": () => import("./VSwiper"),
  },
};
</script>

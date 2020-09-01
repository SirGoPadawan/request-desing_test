<template>
  <nav class="header-middle">
    <ul class="header-middle__list container-header">
      <li>
        <router-link to="#" class="header-middle__link-home">
          <div class="header-middle__logo-box">
            <img
              src="../img/logo.png"
              alt="Логотип"
              class="header-middle__logo"
            />
          </div>
          <span class="header-middle__link-main">Столовая.РУ</span>
        </router-link>
      </li>
      <li>
        <v-search-header />
      </li>
      <li>
        <a href="#" class="header-middle__providers">
          <div class="header-middle__providers-logo-box">
            <img
              src="../img/trades.png"
              alt="Поставщики"
              class="header-middle__providers-logo"
            />
          </div>

          <span class="header-middle__providers-span"
            >Мы на портале поставщиков</span
          >
        </a>
      </li>
      <li>
        <router-link to="#" class="header-middle__cart-link">
          <span class="header-middle__cart">
            <span class="header-middle__amount">0</span>
            <img src="../img/cart.png" alt="Корзина" />
          </span>
          <span class="header-middle__cart-summ"
            ><span class="header-middle__summ-text">Сумма</span
            ><span class="header-middle__summ-amount">0 руб.</span></span
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  components: {
    "v-search-header": () => import("./VHeaderSearch"),
  },
};
</script>

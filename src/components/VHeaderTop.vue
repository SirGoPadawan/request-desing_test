<template>
  <section class="header-top">
    <nav class="container-header header-top__nav">
      <ul class="header-top__list">
        <li>
          <router-link to="#" class="header-top__link">Компания</router-link>
        </li>
        <li>
          <router-link to="#" class="header-top__link">Портфолио</router-link>
        </li>
        <li>
          <router-link to="#" class="header-top__link"
            >Проектирование</router-link
          >
        </li>
      </ul>
      <ul class="header-top__list">
        <li>
          <router-link to="#" class="header-top__link">Ресторанам</router-link>
        </li>
        <li>
          <router-link to="#" class="header-top__link"
            >Застройщикам</router-link
          >
        </li>
        <li>
          <router-link to="#" class="header-top__link"
            >Гос. заказчикам</router-link
          >
        </li>
        <li>
          <router-link to="#" class="header-top__link"
            >Таблет-питание</router-link
          >
        </li>
      </ul>
      <ul class="header-top__list">
        <li>
          <router-link to="#" class="header-top__link">Сервис</router-link>
        </li>
        <li>
          <router-link to="#" class="header-top__link">Контакты</router-link>
        </li>
        <li>
          <v-email-header />
        </li>
        <li>
          <v-modal-header />
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
export default {
  components: {
    "v-email-header": () => import("./VEmailHeader"),
    "v-modal-header": () => import("./VModalHeader"),
  },
};
</script>

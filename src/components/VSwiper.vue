<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="swiper-slide__item">
        <span class="swiper-slide__portf">Портфолио</span>
        <h2 class="swiper-slide__title">
          НИИ скорой помощи им. Н.В. Склифосовского
        </h2>
        <span class="swiper-slide__subtitle"
          >Оборудование для скорой помощи</span
        >
        <router-link to="#" class="swiper-slide__details"
          >Подробнее</router-link
        >
      </div>

      <div>
        <img
          src="../img/slide1.png"
          alt="картинка 1"
          class="swiper-slide__img"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide__item">
        <span class="swiper-slide__portf">Портфолио</span>
        <h2 class="swiper-slide__title">
          НИИ скорой помощи им. Н.В. Склифосовского
        </h2>
        <span class="swiper-slide__subtitle"
          >Оборудование для скорой помощи</span
        >
        <router-link to="#" class="swiper-slide__details"
          >Подробнее</router-link
        >
      </div>

      <div>
        <img
          src="../img/slide1.png"
          alt="картинка 1"
          class="swiper-slide__img"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide__item">
        <span class="swiper-slide__portf">Портфолио</span>
        <h2 class="swiper-slide__title">
          НИИ скорой помощи им. Н.В. Склифосовского
        </h2>
        <span class="swiper-slide__subtitle"
          >Оборудование для скорой помощи</span
        >
        <router-link to="#" class="swiper-slide__details"
          >Подробнее</router-link
        >
      </div>

      <div>
        <img
          src="../img/slide1.png"
          alt="картинка 1"
          class="swiper-slide__img"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide__item">
        <span class="swiper-slide__portf">Портфолио</span>
        <h2 class="swiper-slide__title">
          НИИ скорой помощи им. Н.В. Склифосовского
        </h2>
        <span class="swiper-slide__subtitle"
          >Оборудование для скорой помощи</span
        >
        <router-link to="#" class="swiper-slide__details"
          >Подробнее</router-link
        >
      </div>

      <div>
        <img
          src="../img/slide1.png"
          alt="картинка 1"
          class="swiper-slide__img"
        />
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        /* autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }, */
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>
<style lang="scss">
.swiper {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 75px 20px 75px 55px;
  background-color: #232323;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__portf {
    margin-bottom: 40px;
    color: rgb(119, 119, 119);
  }
  &__title {
    margin: 0;
    font-size: 2.5em;
    width: 88%;
  }
  &__subtitle {
    margin-top: 10px;
    margin-bottom: 60px;
  }
  &__details {
    background: #faad3d;
    color: #ffffff;
    border-radius: 50px;
    padding: 10px 35px;
  }
  &__img {
    width: 285px;
    height: 350px;
    object-fit: contain;
  }
}
.swiper-pagination-bullet {
  border: 1px solid #ffffff !important;
  background: transparent !important;
  opacity: 1 !important;
  &-active {
    border: none;
    height: 7px !important;
    width: 7px !important;
    background: #ffffff !important;
  }
}
</style>

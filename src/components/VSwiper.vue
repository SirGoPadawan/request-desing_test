<template>
  <div>
    <div ref="mySlider" class="swiper-container">
      …
    </div>
    <button @click="next">Next Slide</button>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      slider: null,
      mySliderOptions: {
        loop: true,
      },
    };
  },
  methods: {
    next() {
      this.slider.slideNext();
    },
  },
  mounted() {
    this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions);
  },
};
</script>
<style lang="scss" scoped>
.slide {
  width: 100%;
  background: #000000;
  height: 100%;
  color: #ffffff;
}
.swiper-container {
  height: 100%;
}
</style>

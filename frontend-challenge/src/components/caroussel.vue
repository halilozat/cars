<template>
  <div>
    <Carousel :items-to-show="1" :wrap-around="true" class="carousel">
      <Slide v-for="(image, index) in images" :key="index" @click="showImage(index)">
        <img :src="image || defaultImage" :alt="'Image ' + (index + 1)" class="carousel-image" />
      </Slide>
    </Carousel>
    <vue-easy-lightbox
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
    />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import VueEasyLightbox from 'vue-easy-lightbox';
import defaultImage from '@/assets/default.png';

export default {
  name: 'ImageCarousel',
  components: {
    Carousel,
    Slide,
    VueEasyLightbox,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      index: 0,
      defaultImage,
    };
  },
  methods: {
    showImage(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 80%;
  margin: auto;
}
.carousel-image {
  width: 100%;
  height: auto;
  cursor: pointer;
}
</style>

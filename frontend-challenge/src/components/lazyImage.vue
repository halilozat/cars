<template>
  <img
      :src="src"
      :alt="alt"
      @error="setDefaultImage"
  />
</template>

<script>
import defaultImage from '@/assets/default.png'
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = defaultImage;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
  height: auto;
}
</style>

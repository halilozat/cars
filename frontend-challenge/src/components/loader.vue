<template>
  <div class="loader">
    <div class="loader-circle"></div>
    <div class="loader-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Yükleniyor...'
    }
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loader-circle {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #e40030;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loader-text {
  margin-top: 10px;
  font-size: 14px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

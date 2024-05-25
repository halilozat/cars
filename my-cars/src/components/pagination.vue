<template>
  <div class="pagination-container">
    <div class="info-message">
      Toplam {{ totalPages }} sayfa içerisinde {{ currentPage }}. sayfadasınız.
    </div>
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><</button>
      <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        >
      </button>
    </div>
    <div class="results-per-page">
      Her sayfada
      <button @click="changeResultsPerPage(20)">20</button>
      <button @click="changeResultsPerPage(50)">50</button>
      sonuç göster
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    resultsPerPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('update:currentPage', page);
      }
    },
    changeResultsPerPage(results) {
      this.$emit('update:resultsPerPage', results);
    },
  },
};
</script>

<style scoped>
.pagination-container {
  text-align: center;
  margin-top: 20px;
}
.info-message {
  margin-bottom: 10px;
  font-size: 14px;
}
.pagination {
  display: inline-block;
  color: #2c3e50;
}
.pagination button {
  margin: 0 5px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  color: #2c3e50;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 6px 7px 5px;
  box-shadow: 0 2px 10px 0 #ededed;
}
.pagination button.active {
  font-weight: bold;
  background-color: #e40030;
  color: white;
}
.results-per-page {
  margin-top: 10px;
}
.results-per-page button {
  box-shadow: 0 2px 10px 0 #ededed;
  margin: 0 5px;
  border: none;
  background-color: #fff;
  color: #1a1a1a;
  cursor: pointer;
  border-radius: 50px;
  height: 32px;
  width: 32px;
  padding: 6px 7px 5px;
}
.results-per-page button.active {
  margin: 0 5px;
  border: none;
  background-color: #e40030;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  height: 32px;
  width: 32px;
  padding: 6px 7px 5px;
}
</style>

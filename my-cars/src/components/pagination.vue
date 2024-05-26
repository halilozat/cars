<template>
  <div class="pagination-container">
    <div class="info-message">
      Toplam <b>{{ totalPages }}</b> sayfa içerisinde <b>{{ currentPage }}.</b> sayfadasınız.
    </div>
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :class="{ disabled: currentPage === 1 }"><</button>
      <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">
        >
      </button>
    </div>
    <div class="results-per-page">
      Her sayfada
      <button :class="{ active: resultsPerPage === 20 }" @click="changePerPage(20)">20</button>
      <button :class="{ active: resultsPerPage === 50 }" @click="changePerPage(50)">50</button>
      sonuç göster
    </div>
    <div class="info-message">
      Her sayfada <b>{{resultsPerPage}}</b> sonuç gösteriliyor.
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['currentPage', 'resultsPerPage']),
    ...mapGetters(['totalPages']),
  },
  methods: {
    ...mapActions(['changePage', 'changeResultsPerPage']),

    async changePerPage(results) {
      this.$store.dispatch('changeResultsPerPage', results);
      await this.$store.dispatch('fetchCars', results);
    },
  },
};
</script>

<style scoped>
.pagination-container {
  text-align: center;
  margin-top: 20px;
  cursor: default;
}
.info-message {
  margin-bottom: 10px;
  margin-top: 10px;
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
.pagination button.disabled {
  cursor: not-allowed;
}
.pagination button.active {
  font-weight: bold;
  background-color: #e40030;
  color: #e5e5e5;
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

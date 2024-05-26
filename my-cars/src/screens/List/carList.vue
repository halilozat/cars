<template>
  <div v-if="cars.length">
    <FilterComponent />

    <div v-for="item in cars" :key="item.id">
      <CarCard :item="item" />
    </div>
    <div class="card">
      <Pagination />
    </div>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import defaultImage from '@/assets/default.png'
import Pagination from '@/components/pagination.vue';
import FilterComponent from '@/components/filter.vue';
import Loader from "@/components/loader.vue";
import CarCard from "@/screens/List/carCard.vue";

export default {
  name: 'carList',
  components: {
    Pagination,
    FilterComponent,
    Loader,
    CarCard
  },
  computed: {
    ...mapState(['resultsPerPage']),
    ...mapGetters(['cars']),
  },
  async created() {
    await this.$store.dispatch('fetchCars', {take: this.resultsPerPage});
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'carDetails', params: { id } });
    }
  }
};
</script>

<style>
.card {
  cursor: pointer;
  border-top: 2px solid #ffdb4d;
  padding: 20px;
  margin: 10px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 #ededed;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .card {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 10px;
  }
}
</style>


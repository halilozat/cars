<template>
  <div v-if="cars.length">
<!--    <div class="filter">-->
<!--      <div>-->
<!--        <input type="text">-->
<!--        <input type="text">-->
<!--        <select name="" id=""></select>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button>Filtrele</button>-->
<!--      </div>-->
<!--    </div>-->
    <FilterComponent @update-filters="updateFilters" />

    <div v-for="item in cars" :key="item.id">
      <div @click="goToDetail(item.id)" class="card">
        <div class="content">
          <div class="image">
<!--                    <img-->
<!--                        v-lazy="item.photo"-->
<!--                        :alt="item.name"-->
<!--                        @error="setDefaultImage"-->
<!--                        v-if="item.photo"-->
<!--                    />-->
            <img
                :src="item.photo"
                :alt="item.name"
                v-if="item.photo"
            />
          </div>
          <div class="info">
            <div class="title">
              <div>
                <div class="item-title">
                  {{ item.title }}
                </div>
                <div class="item-modalName">
                  {{ item.modelName }}
                </div>
              </div>
              <div>
                <div class="city">
                  {{ item.location.cityName }}, {{ item.location.townName }}
                  <div class="date">
                    {{ item.dateFormatted }}
                  </div>
                </div>
              </div>
            </div>
            <div class="car-info">
              <div class="icon" >> </div> Kilometre: {{ item.properties.find(prop => prop.name === 'km').value }} km
            </div>
            <div class="car-info">
              <div class="icon" >> </div> Renk: {{ item.properties.find(prop => prop.name === 'color').value }}
            </div>
            <div class="car-info">
              <div class="icon" >> </div> Yil: {{ item.properties.find(prop => prop.name === 'year').value }}
            </div>
            <div class="price-container">
              <div></div>
              <div class="price">{{ item.priceFormatted }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <Pagination />
    </div>
  </div>
  <div v-else>
    <p>Yukleniyor...</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import defaultImage from '@/assets/default.png'
import Pagination from '@/components/pagination.vue';
import FilterComponent from '@/components/filter.vue';

export default {
  name: 'carList',
  components: {
    Pagination,
    FilterComponent
  },
  computed: {
    ...mapState(['resultsPerPage']),
    ...mapGetters(['cars']),
  },
  async created() {
    await this.$store.dispatch('fetchCars', this.resultsPerPage);
  },
  mounted() {
  console.log(this.cars)
    },
  methods: {
    setDefaultImage(event) {
      event.target.src = defaultImage;
    },
    goToDetail(id) {
      this.$router.push({ name: 'carDetails', params: { id } });
    }
  }
};
</script>

<style>
.filter {
  cursor: pointer;
  border-top: 2px solid #ffdb4d;
  padding: 20px;
  margin: 10px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 #ededed;
  display: flex;
  justify-content: space-between;
}
.card {
  cursor: pointer;
  border-top: 2px solid #ffdb4d;
  padding: 20px;
  margin: 10px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 #ededed;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .image {
      width: 100%;
      max-width: 337px;
      position: relative;
      margin-bottom: 10px;
    }
    .info {
      width: 100%;
      max-width: calc(100% - 357px);

      .title {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .item-title {
          margin-top: 3px;
          letter-spacing: -0.4px;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          align-items: start;
          display: flex;
          flex: 1 1 100%;
        }
        .item-modalName {
          margin-top: 3px;
          letter-spacing: -0.3px;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          align-items: start;
          display: flex;
          flex: 1 1 100%;
        }
        .city {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.3px;
          margin-right: 10px;
        }
        .date {
          font-size: 12px;
          font-weight: 400;
        }
      }
      .car-info {
        margin-top: 5px;
        display: flex;
        align-items: start;
        color: #7f90a8;
        font-size: 13px;
        line-height: 18px;

        .icon {
          color: red;
          font-weight: 700;
        }
      }
      .price-container {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-top: auto;

        .price {
          font-weight: 700;
          font-size: 20px;
          letter-spacing: -0.4px;
          line-height: 24px;
          color: #e40030;
        }
      }
    }
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .card {
    padding: 15px;
  }
  .content {
    flex-direction: column;

    .image {
      width: 100%;
      max-width: none;
    }
    .info {
      width: 100%;
      max-width: none;

      .title {
        flex-direction: column;
        .item-title,
        .item-modalName,
        .city,
        .date {
          font-size: 16px;
        }
        .city {
          margin-bottom: 5px;
        }
      }
      .car-info {
        flex-direction: column;
        .icon {
          margin-bottom: 5px;
        }
      }
      .price-container {
        flex-direction: column;
        align-items: flex-start;

        .price {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .card {
    padding: 10px;
  }
  .content {
    .info {
      .title {
        .item-title,
        .item-modalName,
        .city,
        .date {
          font-size: 14px;
        }
      }
      .car-info {
        font-size: 12px;
      }
      .price-container {
        .price {
          font-size: 16px;
        }
      }
    }
  }
}
</style>


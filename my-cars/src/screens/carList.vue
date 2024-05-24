<template>
  <div v-for="item in cars" :key="item.id">
    <div @click="goToDetail(item.id)" class="card">
      <div class="content">
        <div class="image">
          <!--        <img-->
          <!--            v-lazy="item.photo"-->
          <!--            :alt="item.name"-->
          <!--            @error="setDefaultImage"-->
          <!--            v-if="item.photo"-->
          <!--        />-->
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
            <div class="icon" >> </div> Kilometre: {{ item.properties.find(prop => prop.name == 'km').value }}
          </div>
          <div class="car-info">
            <div class="icon" >> </div> Renk: {{ item.properties.find(prop => prop.name == 'color').value }}
          </div>
          <div class="car-info">
            <div class="icon" >> </div> Yil: {{ item.properties.find(prop => prop.name == 'year').value }}
          </div>
          <div class="price-container">
            <div></div>
            <div class="price">{{ item.priceFormatted }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LazyImage from '../components/lazyImage.vue';
import defaultImage from '../assets/default.png'

export default {
  name: 'carList',
  components: {
    LazyImage,
  },
  computed: {
    ...mapGetters(['cars']),
  },
  async created() {
    await this.$store.dispatch('fetchCars');
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
    justify-content: space-between;

    .image {
      width: 337px;
      position: relative;
    }
    .info {
      width: calc(100% - 357px);
      .title {
        display: flex;
        justify-content: space-between;
        .item-title {
          margin-top: 3px;
          letter-spacing: -0.4px;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          align-items: start;
          display: flex;
        }
        .item-modalName {
          margin-top: 3px;
          letter-spacing: -0.3px;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          align-items: start;
          display: flex;
        }
        .city {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.3px;
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
          font-weight: 700
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
</style>

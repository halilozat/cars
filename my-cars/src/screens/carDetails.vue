<template>
  <div id="detail">
    <h1>Detail Page</h1>
    <div class="card" v-if="carDetails">
      <div class="header">
        <div class="product-title">
          <div class="title">
            {{carDetails.title}}
          </div>
          <div class="location">
            {{carDetails.location.cityName}}, {{carDetails.location.townName}}
          </div>
        </div>
        <div class="user">
          <div>
            {{carDetails.userInfo.nameSurname}}
          </div>
          <div>
            {{carDetails.userInfo.phoneFormatted}}
          </div>
        </div>
      </div>
      <div class="content">
        <div class="image">
          <ImageCarousel :images="carDetails.photos" />
        </div>
        <div class="info">
          <div class="column">
            <div>
              <div class="text">
                Fiyat
              </div>
            </div>
            <div>
              <div class="product-price">
                {{ carDetails.priceFormatted }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                İlan No
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.id }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                İlan Tarihi
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.dateFormatted }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Marka
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.modelName }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Yıl
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.properties.find(item => item.name === 'year').value }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Kilometre
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.properties.find(item => item.name === 'km').value }} km
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Vites Tipi
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.properties.find(item => item.name === 'gear').value }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Yakıt Tipi
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.properties.find(item => item.name === 'fuel').value }}
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <div class="text">
                Renk
              </div>
            </div>
            <div>
              <div class="product-info">
                {{ carDetails.properties.find(item => item.name === 'color').value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ImageCarousel from '@/components/caroussel.vue';

export default {
  name: 'Detail',
  props: ['id'],
  computed: {
    ...mapGetters(['carDetails']),
  },
  components: {
    ImageCarousel,
  },
  async created() {
    await this.$store.dispatch('fetchCarDetails', this.id);
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.$store.dispatch('fetchCarDetail', newId);
      }

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
  box-shadow: 0px 0px 18px rgba(0, 0, 0, .06);
  border-radius: 8px;

  .header {
    margin: 20px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .product-title {
      flex: 1;
      .title {
        display: flex;
        align-items: start;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      .location {
        display: flex;
        align-items: start;
        font-size: 14px;
      }
    }
    .user {
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #414141;
      font-size: 14px;
      margin-top: 10px;
    }
  }
  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f8f8f8;
    padding: 8px 0px;
    flex-wrap: wrap;

    .image {
      width: 100%;
      max-width: 337px;
      margin-bottom: 10px;
    }
    .info {
      width: 100%;
      max-width: calc(100% - 357px);
      .column {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f8f8f8;
        height: 32px;
        position: relative;
        align-items: center;
        flex-wrap: wrap;

        .text {
          font-size: 12px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
        }
        .product-info {
          font-size: 12px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #414141;
          align-items: end;
          display: flex;
          text-align: right;
        }
        .product-price {
          display: flex;
          font-size: 18px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
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
  .header {
    flex-direction: column;
    align-items: flex-start;

    .product-title {
      .title {
        font-size: 16px;
      }
      .location {
        font-size: 12px;
      }
    }
    .user {
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .content {
    flex-direction: column;
    align-items: flex-start;

    .image {
      width: 100%;
    }
    .info {
      width: 100%;

      .column {
        flex-direction: column;
        align-items: flex-start;

        .text, .product-info {
          font-size: 14px;
        }
        .product-price {
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .card {
    padding: 10px;
  }
  .header {
    .product-title {
      .title {
        font-size: 14px;
      }
      .location {
        font-size: 10px;
      }
    }
    .user {
      font-size: 10px;
    }
  }
  .content {
    .info {
      .column {
        .text, .product-info {
          font-size: 12px;
        }
        .product-price {
          font-size: 14px;
        }
      }
    }
  }
}
</style>


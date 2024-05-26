<template>
  <div class="filter-container">
    <div class="filter-inputs">
      <label>
        Min Yıl:
        <input placeholder="Min" type="number" v-model.number="minYear" @change="updateFilters" />
      </label>
      <label>
        Max Yıl:
        <input placeholder="Max" type="number" v-model.number="maxYear" @change="updateFilters" />
      </label>
      <label>
        Sırala:
        <select v-model="sort" @change="updateFilters">
          <option value="">Gelişmiş Arama</option>
          <option value="price-asc">Fiyat: Ucuzdan Pahalıya</option>
          <option value="price-desc">Fiyat: Pahalıdan Ucuza</option>
          <option value="year-asc">Yıl: Eskiden Yeniye</option>
          <option value="year-desc">Yıl: Yeniden Eskiye</option>
          <option value="date-asc">Tarih: Eskiden Yeniye</option>
          <option value="date-desc">Tarih: Yeniden Eskiye</option>
        </select>
      </label>
    </div>
    <div class="filter-inputs">
      <button>
        Filtrele
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minYear: null,
      maxYear: null,
      sort: '',
    };
  },
  methods: {
    updateFilters() {
      let sort = null;
      let sortDirection = null;
      if (this.sort === 'price-asc') {
        sort = 'price';
        sortDirection = 'asc';
      } else if (this.sort === 'price-desc') {
        sort = 'price';
        sortDirection = 'desc';
      }

      this.$emit('update-filters', {
        minYear: this.minYear,
        maxYear: this.maxYear,
        sort,
        sortDirection,
      });
    },
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  border-top: 2px solid #ffdb4d;
  padding: 20px;
  margin: 10px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 #ededed;
}

.filter-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-inputs label {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.filter-inputs label input,
.filter-inputs label select,
.filter-inputs label button {
  width: 100%;
  font-size: 14px;
  line-height: 1.42857143;
  color: #414141;
  background-image: none;
  height: 32px;
  padding: 5px 2px 5px 4px;
  outline: none;
  appearance: none;
  background-color: #f2f2f2;
  border-radius: 4px;
  border: 1px solid #ebebeb;
}

.filter-inputs label select {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 1.42857143;
  color: #414141;
  background-image: none;
  border: 1px solid #f2f2f2;
  height: 44px;
  padding: 5px 2px 5px 4px;
  outline: none;
  appearance: none;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.filter-inputs button {
  cursor: pointer;
  background-color: #e40030;
  border: none;
  width: 100%;
  display: block;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
}

/* Media Queries for Responsive Design */
@media (min-width: 600px) {
  .filter-container {
    flex-direction: row;
  }

  .filter-inputs {
    flex-direction: row;
  }

  .filter-inputs label {
    flex-direction: column;
    width: 100%;
  }

  .filter-inputs input,
  .filter-inputs select {
    width: auto;
    flex: 1;
  }
}
</style>

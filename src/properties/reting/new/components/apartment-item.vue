<script>
import { Apartments } from '../model/aparments.entity.js';
import ApartmentRent from './apartment-rent.vue';

export default {
  name: 'ApartmentItem',
  components: {
    ApartmentRent
  },
  props: {
    apartment: {
      type: Object,
      required: true,
      validator: value => value instanceof Apartments || (value && typeof value === 'object')
    },
    cities: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showRentModal: false
    };
  },
  watch: {
    showRentModal(newVal) {
      // Emit update when the local state changes
      this.$emit('update:rent-visible', newVal);
    }
  },
  computed: {
    cityName() {
      const city = this.cities.find(city => city.cityId === this.apartment.cityId);
      return city ? city.cityName : `City ID: ${this.apartment.cityId}`;
    },
    isAvailable() {
      return this.apartment.state === 'A';
    }
  },
  methods: {
    handleRent() {
      if (this.isAvailable) {
        this.showRentModal = true;
      }
    },
    handleRented(updatedApartment) {
      this.$emit('rented', updatedApartment);
      this.showRentModal = false;
    },
    closeRentModal() {
      this.showRentModal = false;
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<template>
  <div class="apartment-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <div class="p-6 flex-grow">
      <h1 class="text-lg font-semibold mb-2 text-gray-800">{{ $t('apartment.name') }}: {{ cityName }}</h1>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ $t('apartment.description') }}: {{ apartment.description }}</h3>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span class="text-sm text-gray-500">{{ $t('apartment.numberParking') }}: {{ apartment.numberGarage }}</span>
        </div>
        <div>
          <span class="text-sm text-gray-500">{{ $t('apartment.numberBedroom') }}: {{ apartment.numberBedrooms }}</span>
        </div>
      </div>
    </div>
    
    <div class="p-4 bg-gray-50 border-t border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">{{ $t('apartment.Price') }}: ${{ apartment.Price.toLocaleString() }}</p>
        </div>
        <div class="relative">
          <pv-button 
            @click="handleRent"
            :disabled="!isAvailable"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            style="z-index: 10;"
          >
            {{ $t('apartment.rent') }}
          </pv-button>
          <apartment-rent
            :visible="showRentModal"
            :apartment="apartment"
            @update:visible="showRentModal = $event"
            @rented="handleRented"
            @close="closeRentModal"
            style="z-index: 1000;"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.apartment-card {
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.apartment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
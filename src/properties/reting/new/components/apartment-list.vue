<script>
import { ApartmentsService } from '../../../services/aparments.service.js';
import { CitiesService } from '../../../services/cities.service.js';
import ApartmentItem from './apartment-item.vue';
import { Apartments } from '../model/aparments.entity.js';

export default {
  name: 'ApartmentList',
  components: { ApartmentItem },
  data() {
    return {
      apartments: [],
      cities: [],
      loading: false,
      error: null,
      apartmentsService: new ApartmentsService(),
      citiesService: new CitiesService()
    };
  },
  async created() {
    await Promise.all([
      this.fetchApartments(),
      this.fetchCities()
    ]);
  },
  methods: {
    async fetchApartments() {
      this.loading = true;
      this.error = null;
      try {
        const response = await this.apartmentsService.getAll();
        // Map the response data to Apartments instances
        this.apartments = response.data.map(apt => new Apartments(apt));
      } catch (error) {
        console.error('Error fetching apartments:', error);
        this.error = 'Failed to load apartments. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    async fetchCities() {
      try {
        const response = await this.citiesService.getAll();
        this.cities = response.data;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
    onRentApartment(apartment) {
      console.log('Renting apartment:', apartment);
      this.$emit('rent', apartment);
    }
  }
};
</script>
<template>
  <div class="apartment-list">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <apartment-item 
        v-for="apartment in apartments" 
        :key="apartment.apartmentId" 
        :apartment="apartment"
        :cities="cities"
        @rent="onRentApartment"
      />
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { Cities } from '../model/cities.entity';
import { CitiesService } from '../services/cities.service';
import { ApartmentsService } from '../services/aparments.service';
import UkioCitiesList from '../components/ukio-cities-list.vue';

export default {
  name: 'ukio-cities',
  components: { UkioCitiesList },
  data() {
    return {
      cities: [],
      loading: false,
      error: null,
      citiesService: new CitiesService(),
      apartmentsService: new ApartmentsService()
    };
  },
  async created() {
    await this.fetchCities();
  },
  methods: {
    async fetchCities() {
      this.loading = true;
      this.error = null;
      
      try {
        // Fetch cities and apartments in parallel
        const [citiesResponse, apartmentsResponse] = await Promise.all([
          this.citiesService.getAll(),
          this.apartmentsService.getAll()
        ]);

        // Process the data
        const apartmentsByCity = apartmentsResponse.data.reduce((acc, apartment) => {
          if (!acc[apartment.cityId]) {
            acc[apartment.cityId] = [];
          }
          acc[apartment.cityId].push(apartment);
          return acc;
        }, {});

        // Create Cities instances with their apartments
        this.cities = citiesResponse.data.map(cityData => {
          return new Cities({
            ...cityData,
            apartments: apartmentsByCity[cityData.cityId] || []
          });
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        this.error = 'Failed to load cities. Please try again later.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<template>
  <div class="ukio-cities-container">
      <ukio-cities-list :cities="cities" />
  </div>
</template>

<style scoped>
.ukio-cities-container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
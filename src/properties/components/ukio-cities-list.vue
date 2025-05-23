<script>
import { Cities } from '../model/cities.entity';
import UkioCitiesItem from "./ukio-cities-item.vue";

export default {
    name: "ukio-cities-list",
    components: { UkioCitiesItem },
    props: {
        cities: {
            type: Array,
            required: true,
            default: () => [],
            validator: (value) => {
                return value.every(item => item instanceof Cities);
            }
        }
    },
    computed: {
        sortedCities() {
            return [...this.cities].sort((a, b) => {
                return b.apartments.length - a.apartments.length;
            });
        }
    }
}
</script>

<template>
  <div class="ukio-cities-container">   
    <div class="flex space-x-6 pb-4 overflow-x-auto">
      <div v-for="city in sortedCities" 
           :key="city.cityId" 
           class="flex-shrink-0 w-72">
        <ukio-cities-item 
          :city="city"
          class="h-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ukio-cities-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
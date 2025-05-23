<script>
import { Cities } from '../model/cities.entity';

export default {
    name: "ukio-cities-item",
    props: {
        city: {
            type: Cities,
            required: true,
            validator: value => value instanceof Cities || value === null
        }
    },
    computed: {
        cityData() {
            return this.city || new Cities({});
        }
    }
}
</script>

<template>
  <div class="p-4">
    <pv-card class="h-full">
      <template #header>
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ $t('cities.cityName') }}:{{ cityData.cityName }}</h3>
        </div>
      </template>
      <template #content>
        <div class="p-4">
          <p class="text-gray-600 mb-2">{{ $t('cities.description') }}:{{ cityData.description }}</p>
          <p class="text-gray-700">{{ $t('cities.population') }}: {{ cityData.population.toLocaleString() }}</p>
        </div>
      </template>
      <template #footer>
        <div class="p-4 border-t border-gray-200">
          <p class="text-sm text-gray-500">
            {{ $t('cities.quantityOfApartments') }}: {{ city.apartments ? city.apartments.length : 0 }}
          </p>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.pv-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pv-card :deep(.p-card-content) {
  flex: 1;
}
</style>
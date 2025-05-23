<script>
import UkioCities from '../../properties/pages/ukio-cities.vue';

export default {
  name: 'home',
  components: { UkioCities }
};
</script>

<template>
  <div class="home-page w-full max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ $t('home.title') }}</h1>
    <p class="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">{{ $t('home.text') }}</p>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-8 text-left">{{ $t('home.title') }}</h2>
      <ukio-cities />
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: calc(100vh - 80px);
  padding-top: 2rem;
  padding-bottom: 4rem;
}
</style>
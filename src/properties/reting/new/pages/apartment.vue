
<script>
  import ApartmentList from '../components/apartment-list.vue';
  
  export default {
    name: "ApartmentPage",
    components: {
      ApartmentList
    }
  }
  </script>
  <template>
    <div class="apartment-page">
      <h1 class="text-3xl font-bold mb-8">{{ $t('apartment.title') }}</h1>
      <apartment-list />
    </div>
  </template>
  <style scoped>
  .apartment-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  </style>
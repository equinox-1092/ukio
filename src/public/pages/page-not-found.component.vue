<script>
export default {
  name: "page-not-found",
  data() {
    return {
      unavailableRoute: null,
    }
  },
  /**
   * When this component appears, saves the path in the unavailableRoute data
   */
  created() {
    this.unavailableRoute = this.$route.path;
  }
}
</script>

<template>
  <div class="w-full">
    <h1> {{ $t('page-not-found.title') }} </h1>
    <p> {{ $t('page-not-found.unavailable-path1') }} <b>{{ unavailableRoute }}</b> {{ $t('page-not-found.unavailable-path2') }} </p>
    <p> {{ $t('page-not-found.go-home-phrase') }} </p>
    <router-link to="/home"> {{ $t('page-not-found.go-home-btn') }} </router-link>
  </div>
</template>

<style scoped>

</style>
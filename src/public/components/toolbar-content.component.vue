<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: {LanguageSwitcher},
  data() {
    return {
      drawer: false,
      items: [
        {label: 'option.home',          to: '/home'},
        {label: 'option.apartment',   to: '/properties/renting/new/apartment'}
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <pv-toolbar class="bg-primary">
    <template #start>
      <language-switcher/>
      
    </template>
    <template #center>
      <div class="flex-column">
        <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
          <router-link :to="item.to" :class="slotProps['class']">{{ $t(item.label) }}</router-link>
        </pv-button>
      </div>
    </template>
    <template #end>
      <h3>Find your Home</h3>
    </template>
  </pv-toolbar>
  <pv-drawer v-model:visible="drawer"/>
</template>

<style scoped>

</style>
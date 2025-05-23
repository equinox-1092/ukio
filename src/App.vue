<script>
import {defineComponent} from "vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";

export default defineComponent({
  components: {ToolbarContent}
})
</script>

<template>
  <header>
    <toolbar-content/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
header {
  flex: 0 0 auto;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

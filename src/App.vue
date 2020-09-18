<template>
  <div class="container">
    <side class="components-layout-size"></side>
    <projects class="components-layout-projects"></projects>
  </div>
</template>
<script>
import side from './components/AppSideBar.vue';
import projects from './components/AppProjects.vue';
export default {
  components: { side, projects },
};
</script>
<style lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  .components-layout-size {
    flex-basis: 200px;
  }
  .components-layout-projects {
    width: calc(100% - 200px);
    flex: 1;
  }
}
</style>

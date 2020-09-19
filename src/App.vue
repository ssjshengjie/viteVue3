<template>
  <div class="container">
    <side class="components-layout-size"></side>
    <projects class="components-layout-projects"></projects>
    <!--  <mousebackground></mousebackground> -->
  </div>
</template>
<script>
import side from './components/AppSideBar.vue';
import projects from './components/AppProjects.vue';
import mousebackground from './components/MouseBackground.vue'
export default {
  components: { side, projects, mousebackground },
}
</script>
<style lang="scss">
@media screen and (min-width: 540px) {
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    .components-layout-size {
      width: 200px;
    }
    .components-layout-projects {
      width: calc(100% - 200px);
      flex: 1;
    }
  }
}
@media screen and (max-width: 540px) {
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border: 0;
    padding: 0;
    .components-layout-size {
      flex: 1;
      width: 100%;
      height: 100px;
    }
    .components-layout-projects {
      height: calc(100vh - 100px);
      flex: 1;
    }
  }
}
</style>

<template> 
    <blog-nav-bar></blog-nav-bar>
    <router-view/>
    <blog-footer></blog-footer>
</template>
<script>
import BlogNavBar from './components/BlogNavBar.vue'
import BlogFooter from './components/BlogFooter.vue'
export default {
   components: { BlogNavBar, BlogFooter},
}
</script>

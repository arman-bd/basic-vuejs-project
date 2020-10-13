<template>
  <div id="app">
    <HeaderLayout/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterLayout/>
  </div>
</template>

<script>
import HeaderLayout from './inc/Header.vue'
import FooterLayout from './inc/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style scoped>

</style>

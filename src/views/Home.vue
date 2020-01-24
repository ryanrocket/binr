<template>
  <div class="home">
    <HomePage lmfao msg="[ Vue v4.7.1 ]"/>
  </div>
</template>

<style lang="scss" scoped>
[lmfao] {
  padding-left: 8%;
  padding-right: 8%;
  text-align: left;
}
</style>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'home',
  components: {
    HomePage
  }
}
</script>

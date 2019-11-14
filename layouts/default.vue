<template>
  <div class="app-page">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-main">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
.app-page {
  padding-top: 50px;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>

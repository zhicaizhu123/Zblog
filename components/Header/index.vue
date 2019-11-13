<template>
  <header class="header-container">
    <Logo />
    <right-list />
  </header>
</template>

<script>
import Logo from './components/Logo'
import RightList from './components/RightList'

export default {
  components: {
    Logo,
    RightList
  }
}
</script>

<style lang="scss">
.header-container {
  background-color: #fff;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>

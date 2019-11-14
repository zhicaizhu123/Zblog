<template>
  <div class="not-found">
    <p class="status">
      <img
        src="~assets/images/icon-404.png"
        alt=""
      >
    </p>
    <div class="desc">
      很遗憾，您访问的页面挖不到了...
    </div>
    <nuxt-link
      to="/"
      replace
    >
      返回首页
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style lang="scss">
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  background-color: #c9f5fe;
  .status {
    font-size: 40px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    margin: 20px 0;
    color: #999;
    font-size: 18px;
  }
}
</style>

<template>
  <div class="index-container">
    <div>
      <img src="~assets/images/banner.png" alt="">
    </div>
    <div class="index-desc">
      每一次记录，都是比其他人优秀最好的佐证
    </div>
    <nuxt-link to="/article">
      <el-button type="primary">
        进入博客列表
      </el-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ZCoder'
    };
  }
};
</script>

<style lang="scss" scoped>
.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  img {
    max-width: 100%;
    height: auto;
  }
  .index-desc {
    color: #999;
    font-size: 16px;
    margin: 20px 0;
  }
}
</style>

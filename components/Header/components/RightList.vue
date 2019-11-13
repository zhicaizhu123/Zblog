<template>
  <ul class="right-list">
    <li>
      <nuxt-link to="/">
        首页
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/article">
        文章
      </nuxt-link>
    </li>
    <li>
      <a
        href="https://github.com/zhicaizhu123"
        target="_blank"
      >
        Github<i class="el-icon-collection" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.right-list {
  display: flex;
  align-items: center;
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>

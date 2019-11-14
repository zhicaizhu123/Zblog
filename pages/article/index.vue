<template>
  <div class="article-container">
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        class="article-item pointer"
        @click="navTo(item.id)"
      >
        <div class="article-item__main">
          <h3 class="title line-clamp-1">
            <nuxt-link
              :to="`/article/${item.id}`"
              target="_blank"
            >
              {{ item.title || '暂无标题' }}
            </nuxt-link>
          </h3>
          <p class="desc line-clamp-2">
            {{ item.desc || '暂无简介' }}
          </p>
          <div class="other">
            <span class="create-time">{{ item.time }}</span>
          </div>
        </div>
        <div class="article-item__cover">
          <img
            :src="item.cover"
            alt="图片"
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Mock from 'mockjs'

const createList = () => {
  return Mock.mock({
    'list|20': [
      {
        id: '@integer(1,99999)',
        title: '@ctitle()',
        desc: '@cparagraph()',
        time: '@date("yyyy-MM-dd")',
        cover: '@image(60x60)'
      }
    ]
  })
}

export default {
  data () {
    return {
      list: createList().list
    }
  },

  created () {},

  methods: {
    navTo (id) {
      window.open(`/article/${id}`, '_blank')
    }
  }
}
</script>

<style lang="scss">
.article-container {
  max-width: 700px;
  margin: 10px auto;
  background-color: #fff;
  .article-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    transition: all 0.15s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.01);
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    }
    &__main {
      .title {
        font-size: 18px;
        line-height: 24px;
        &-link {
          &:visited {
            color: #909090;
          }
        }
      }
      .desc {
        margin-top: 10px;
        line-height: 24px;
      }
      .other {
        margin-top: 10px;
      }
      .create-time {
        color: #999;
        font-size: 12px;
      }
    }
    &__cover {
      margin-left: 20px;
      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
  }
}
</style>

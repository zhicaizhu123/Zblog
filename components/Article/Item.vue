<template>
  <div
    :key="data._id"
    class="article-item pointer"
    @click="navTo(data._id)"
  >
    <div class="article-item__main">
      <h3 class="title line-clamp-1">
        <nuxt-link
          :to="`/${type}/${data._id}`"
          target="_blank"
        >
          {{ data.title || "暂无标题" }}
        </nuxt-link>
      </h3>
      <p
        v-if="data.description"
        class="desc line-clamp-2"
      >
        {{ data.description }}
      </p>
      <div class="other">
        <span class="create-time">{{
          data.createdAt | formatDate("YYYY-MM-DD HH:mm")
        }}</span>
      </div>
    </div>
    <div
      v-if="data.cover"
      class="article-item__cover"
    >
      <img
        :src="data.cover"
        alt="图片"
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    formatDate (val, format = 'YYYY-MM-DD') {
      return moment(val).format(format)
    }
  },

  props: {
    type: {
      type: String,
      default: 'article'
    },
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    navTo (id) {
      window.open(`/article/${id}`, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  transition: all 0.15s;
  &:hover {
    background-color: #f3f4f5;
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
</style>

<template>
  <div class="article-container">
    <aside class="left-types">
      <h2 class="highlight-label">
        分类
      </h2>
      <types
        type="article"
        :list="lifeTypes"
        @update="changeType"
      />
    </aside>
    <section class="right-main">
      <ul>
        <li
          v-for="item in list"
          :key="item._id"
          class="article-item pointer"
          @click="navTo(item._id)"
        >
          <div class="article-item__main">
            <h3 class="title line-clamp-1">
              <nuxt-link
                :to="`/article/${item._id}`"
                target="_blank"
              >
                {{ item.title || "暂无标题" }}
              </nuxt-link>
            </h3>
            <p class="desc line-clamp-2">
              {{ item.content || "暂无内容" }}
            </p>
            <div class="other">
              <span class="create-time">{{
                item.createdAt | formatDate("YYYY-MM-DD HH:mm")
              }}</span>
            </div>
          </div>
          <div
            v-if="item.cover"
            class="article-item__cover"
          >
            <img
              :src="item.cover"
              alt="图片"
            >
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import Types from '@/components/Types'

export default {
  components: {
    Types
  },

  filters: {
    formatDate (val, format = 'YYYY-MM-DD') {
      return moment(val).format(format)
    }
  },
  data () {
    return {
      type: '',
      list: [],
      lifeTypes: [],
      page: {
        index: 1,
        size: 10,
        cont: 0,
        total: 0
      }
    }
  },

  created () {
    this.getLifeList()
    this.getLifeTypes()
  },

  methods: {
    navTo (id) {
      window.open(`/life/${id}`, '_blank')
    },

    async getLifeList () {
      const { index, size } = this.page
      const [err, res] = await this.$to(
        this.$axios.$get('/api/lifes', {
          type: this.type,
          pageIndex: index,
          pageSize: size
        })
      )
      if (!err) {
        this.list = res.data.list
      }
    },

    async getLifeTypes () {
      const [err, res] = await this.$to(
        this.$axios.$get('/api/dictionary/life')
      )
      if (!err) {
        this.lifeTypes = res.data
      }
    },

    changeType (id) {
      this.page = { ...this.page, index: 1, size: 10 }
      this.type = id
      this.getLifeList()
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  .left-types {
    background-color: #fff;
    width: 300px;
    flex: 0 0 300px;
    margin-right: 10px;
  }
  .right-main {
    background-color: #fff;
    flex: 1;
  }
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

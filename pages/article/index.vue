<template>
  <div class="article-container">
    <aside
      v-loading="loading.article"
      class="left-types"
    >
      <box-item title="文章分类">
        <types
          type="article"
          :list="articleTypes"
          @update="changeType"
        />
      </box-item>
    </aside>
    <section
      v-loading="loading.article"
      class="right-main"
    >
      <article-item
        v-for="item in list"
        :key="item._id"
        :data="item"
        type="article"
      />
    </section>
  </div>
</template>

<script>
import Types from '@/components/Types'
import BoxItem from '@/components/BoxItem'
import ArticleItem from '@/components/Article/Item'

export default {
  components: {
    Types,
    BoxItem,
    ArticleItem
  },

  data () {
    return {
      type: '',
      list: [],
      articleTypes: [],
      page: {
        index: 1,
        size: 10,
        cont: 0,
        total: 0
      },
      loading: {
        article: false,
        type: false
      }
    }
  },

  created () {
    this.getArticleList()
    this.getArticleTypes()
  },

  methods: {
    async getArticleList () {
      const { index, size } = this.page
      this.loading.article = true
      const [err, res] = await this.$to(
        this.$axios.$get('/api/articles', {
          type: this.type,
          pageIndex: index,
          pageSize: size
        })
      )
      this.loading.article = false
      if (!err) {
        this.list = res.data.list
      }
    },

    async getArticleTypes () {
      this.loading.type = true
      const [err, res] = await this.$to(
        this.$axios.$get('/api/dictionary/article')
      )
      this.loading.type = false
      if (!err) {
        this.articleTypes = res.data
      }
    },

    changeType (id) {
      this.page = { ...this.page, index: 1, size: 10 }
      this.type = id
      this.getArticleList()
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  min-height: calc(100vh - 80px);
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
}
</style>

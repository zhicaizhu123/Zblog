<template>
  <div class="article-detail prevent-default">
    <h2>{{ data.title }}</h2>
    <div
      v-if="data.cover"
      class="article-detail__cover"
    >
      <el-image
        :src="data.cover"
        style="width: 100%; height: 240px"
        fit="contain"
        :preview-src-list="[data.cover]"
      />
    </div>
    <div v-html="compiledMarkdown"/>
  </div>
</template>

<script>
import marked from 'marked'
import { to } from '@/utils'
const rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  data () {
    return {
      data: {},
      isFocus: false
    }
  },

  computed: {
    compiledMarkdown () {
      return marked(this.data.content || '', { sanitize: true })
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData () {
      const [err, res] = await to(
        this.$axios.$get(`/api/articles/${this.$route.params.id}`)
      )
      if (!err) {
        this.data = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  background-color: #fff;
  padding: 10px;
  min-height: calc(100vh - 80px);
}
</style>

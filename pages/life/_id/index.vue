<template>
  <div>
    <h2>{{ data.title }}</h2>
    <div v-html="compiledMarkdown"/>
  </div>
</template>

<script>
import marked from 'marked'
import { to } from '@/utils'
marked.setOptions({
  renderer: new marked.Renderer(),
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
      return marked(this.data.content, { sanitize: true })
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

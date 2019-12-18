<template>
  <div class="editor">
    <div>
      <el-input
        v-model="form.title"
        placeholder="请输入文章标题"
      />
    </div>
    <client-only>
      <mavon-editor
        v-model="form.content"
        class="editor-area"
      />
    </client-only>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  components: {
    mavonEditor
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      form: {
        title: this.title,
        content: this.content
      }
    }
  },

  watch: {
    title (val) {
      this.form.title = val
    },

    content (val) {
      this.form.content = val
    }
  },

  methods: {
    getData () {
      return { ...this.form }
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100%;
  min-height: 400px;
  /deep/ .el-input__inner {
    border: none;
    box-shadow: none;
    background-color: #fff;
    border-radius: 0;
    font-size: 16px;
    font-weight: bold;
  }
  &-area {
    height: calc(100% - 40px);
    min-height: 360px;
    overflow: auto;
    box-shadow: none !important;
  }
}
</style>

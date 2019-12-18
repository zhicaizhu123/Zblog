<template>
  <div class="article-create">
    <div class="article-create__main">
      <z-editor
        ref="$zEditor"
        :title="form.title"
        :content="form.content"
      />
    </div>
    <div class="article-create__options">
      <config-detail
        ref="$configDetail"
        :data="form"
      />
      <div class="submit-btns">
        <el-button
          type="success"
          size="small"
        >
          保存为草稿
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="onSubmit"
        >
          发布
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ZEditor from '@/components/Article/Editor'
import ConfigDetail from '@/components/Article/ConfigDetail'

export default {
  components: {
    ZEditor,
    ConfigDetail
  },

  data () {
    return {
      form: {
        type: [],
        cover: [],
        title: '',
        description: '',
        content: ''
      }
    }
  },

  methods: {
    async onSubmit () {
      const { title, content } = this.$refs.$zEditor.getData()
      const { cover, ...rest } = this.$refs.$configDetail.getData()
      const [err, res] = await this.$to(
        this.$axios.$post('/api/articles', {
          ...rest,
          title,
          content,
          cover: cover.length ? cover[0].url : ''
        })
      )
      if (!err) {
        this.$message.success(res.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-create {
  display: flex;
  height: calc(100vh - 80px);
  &__main {
    flex: 1;
    height: 100%;
    background-color: #fff;
  }
  &__options {
    width: 200px;
    flex: 0 0 200px;
    margin-left: 10px;
    background-color: #fff;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
  .submit-btns {
    text-align: right;
    margin-top: 40px;
  }
}
</style>

<template>
  <el-form
    ref="form"
    :model="form"
    label-width="auto"
    label-suffix="："
  >
    <el-form-item label="类型">
      <el-select
        v-model="form.type"
        placeholder="请选择类型"
        multiple
      >
        <el-option
          v-for="item in typeOptions"
          :key="item._id"
          :label="item.label"
          :value="item._id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="封面">
      <el-upload
        class="upload-demo"
        action="http://localhost:9004/api/upload"
        :on-success="handleSuccess"
        :file-list="form.cover"
        :show-file-list="false"
      >
        <div
          v-if="form.cover.length"
          class="article-cover"
        >
          <img
            class="cover"
            :src="form.cover[0].url"
          >
          <div class="btns">
            <span @click.stop.prevent="onRemoveCover">
              <i class="el-icon-delete"/>
            </span>
            <span>
              <i class="el-icon-upload"/>
            </span>
          </div>
        </div>
        <el-button
          v-else
          type="text"
          size="mini"
        >
          上传<i class="el-icon-upload el-icon--right"/>
        </el-button>
      </el-upload>
    </el-form-item>
    <el-form-item label="文章描述">
      <el-input
        v-model="form.description"
        type="textarea"
        placeholder="请填写文章描述"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      form: JSON.parse(JSON.stringify(this.data)),
      typeOptions: []
    }
  },

  watch: {
    data (val) {
      this.form = JSON.parse(JSON.stringify(this.data))
    }
  },

  methods: {
    getData () {
      return { ...this.form }
    },

    async getTypes () {
      const [err, res] = await this.$to(
        this.$axios.$get('/api/dictionary/article')
      )
      if (!err) {
        this.typeOptions = res.data
      }
    },

    handleSuccess (response, file, fileList) {
      if (response.status === 200) {
        this.form.cover = [
          {
            name: file.name,
            url: response.data.url
          }
        ]
      }
    },

    onRemoveCover () {
      this.$confirm('确定删除封面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.form.cover = []
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-cover {
  position: relative;
  &:hover {
    .btns {
      display: flex;
    }
  }
  img {
    width: 100%;
    height: 80px;
    object-fit: contain;
    position: relative;
    z-index: 0;
  }
  .btns {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    > span {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      border: 1px solid #f3f4f5;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      i {
        color: #fff;
      }
      &:hover {
        border-color: #fff;
      }
    }
  }
}
</style>

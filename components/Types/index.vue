<template>
  <div class="types-container">
    <ul class="prevent-default">
      <li>
        <a
          :class="!currentId ? 'is-active' : ''"
          href="javascript: void(0)"
          @click="selectType('')"
        >全部</a>
      </li>
      <li
        v-for="item in list"
        :key="item._id"
      >
        <a
          :class="item._id === currentId ? 'is-active' : ''"
          href="javascript: void(0)"
          @click="selectType(item._id)"
        >{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
    type: { type: String, required: true }
  },

  data () {
    return {
      currentId: ''
    }
  },

  methods: {
    selectType (id) {
      this.currentId = id
      this.$emit('update', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.types-container {
  li {
    a {
      padding: 16px;
      display: block;
      transition: all 0.2s;
      &.is-active {
        color: #409eff;
        background-color: #f3f4f5;
      }
    }
  }
}
</style>

<template>
  <div class="box-item">
    <h2 class="highlight-label">
      {{ title }}
    </h2>
    <div class="box-item-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.highlight-label {
  margin-bottom: 6px;
}
</style>

<template>
  <div class="gl-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlForm',
  props: {
    value: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style></style>

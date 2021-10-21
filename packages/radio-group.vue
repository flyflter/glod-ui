<template>
  <div class="gl-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlRadioGroup',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style></style>

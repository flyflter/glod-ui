<template>
  <div class='checkbox-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    value: {
      type: Array,
      default: null
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style></style>

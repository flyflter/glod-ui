<template>
  <div class="cs-form-item">
    <label :style="{width: labelStyle}" class="cs-form-item__label">
      {{ label }}
    </label>
    <div class="cs-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelStyle () {
      return this.Form.labelWidth
    }
  },
  data () {
    return {
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss" scoped>
.cs-form-item {
  margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>

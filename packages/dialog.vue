<template>
  <transition name="dialog-fade">
    <div class="gl-dialog__wrapper" @click.self="handleClose" v-show="visible">
      <!-- real content -->
      <div class="gl-dialog" :style="{ width, 'margin-top': top }">
        <!-- header -->
        <div class="gl-dialog__header">
          <slot name="title">
            <!-- default title content -->
            <span class="gl-dialog__title">
              {{ title }}
            </span>
          </slot>
          <span class="gl-dialog__headerbtn" @click="handleClose">x</span>
        </div>
        <!-- body -->
        <div class="gl-dialog__body">
          <slot></slot>
        </div>
        <!-- footer -->
        <div class="gl-dialog__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GlDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '50%'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
// scoped 会给当前组件中的所有元素和样式添加一个随机的属性
.gl-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .gl-dialog {
    margin: 0 auto;
    position: relative;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    &__header {
      padding: 20px 20px 10px;
      .gl-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .gl-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* 深度选择器 scss ::v-deep  less /deep/  */
      ::v-deep .gl-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

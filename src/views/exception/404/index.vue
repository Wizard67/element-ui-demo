<template>
  <div class="nofind">
    <div class="nofind__main">
      <p class="font--focus">404</p>
      <p class="font--helper">抱歉，你访问的页面不存在</p>
      <el-button type="primary" @click="onclick">返回首页</el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NotFind extends Vue {
  onclick () {
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
@import '~@nn-yy/css-flex/flex';

.nofind {
  @include flex-column(center, middle);
  height: 80vh;
}

.font {
  &--focus {
    margin: 10px 0;
    color: #606266;
    font-size: 72px;
    font-weight: 600;
  }

  &--helper {
    margin: 20px 0;
    color: #909399;
    font-size: 18px;
  }
}
</style>

<template lang="pug">
  .nofind
    .nofind__main
      p.font--focus 404
      p.font--helper 抱歉，你访问的页面不存在
      el-button(type="primary" @click="onclick") 返回首页

</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NoFind extends Vue {
  onclick() {
    this.$router.push('/');
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

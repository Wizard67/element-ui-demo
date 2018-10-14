<template>
  <el-form class="fix-form">
    <i class="el-icon-success fix-icon"></i>
    <p class="font-tips">操作成功</p>
    <p class="font-helper">预计两小时内到账</p>

    <el-form-item class="fix-form-item">
      <el-button type="primary" @click="again">继续转账</el-button>
      <el-button plain>查看账单</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class StepFormResult extends Vue {
  again () {
    this.$router.push({ name: 'step-form-info' })
  }
}
</script>

<style lang="scss" scoped>
@import "~@nn-yy/css-flex/flex";

.font-tips {
  font-size: 26px;
  font-weight: 600;
}

.font-helper {
  margin: 10px 0;
  font-size: 14px;
}

.fix-form {
  @include flex-column(center);
  width: 100%;
  margin: 40px 0 0 0;
}

.fix-form-item {
  /deep/ {
    .el-form-item__content {
      @include flex(center);
      margin-top: 80px;
    }
  }
}

.fix-icon {
  color: #67c23a;
  font-size: 68px;
}
</style>

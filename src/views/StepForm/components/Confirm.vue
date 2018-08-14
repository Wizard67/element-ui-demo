<template>
  <el-form class="fix-form" label-width="80px">
    <el-alert
      class="fix-alert"
      title="确认转账后，资金将直接打入对方账户，无法退回。"
      type="warning"
      show-icon>
    </el-alert>

    <el-form-item label="收款人">
      {{form.name}}
    </el-form-item>

    <el-form-item label="收款账户">
      {{form.account}}
    </el-form-item>

    <el-form-item label="支付金额">
      {{form.money | toThousands}}
    </el-form-item>

    <el-form-item label="备注" prop="remark">
      {{form.remark || '无'}}
    </el-form-item>

    <el-form-item class="fix-form-item">
      <el-button type="primary"
        @click="submit"
        :loading="isSubmit">
        提交
      </el-button>
      <el-button @click="previous" plain>上一步</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { toThousands } from '@/utils/filter'

const moduleAssets = namespace('assets')

@Component({
  filters: { toThousands }
})
export default class StepFormConfirm extends Vue {
  isSubmit = false

  @Prop({type: Object}) form

  @moduleAssets.Action submitForm

  previous () {
    this.$router.push({name: 'step-form-info'})
  }

  submit () {
    this.isSubmit = true
    this.submitForm(this.form).then(res => {
      setTimeout(() => {
        this.isSubmit = false
        this.$emit('onFormSumbit')
        this.$router.push({name: 'step-form-result'})
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@nn-yy/css-flex/flex";

.fix-form {
  width: 100%;
  margin: 40px 0 0 0;
}

.fix-alert {
  margin: 20px 0;
  line-height: 1;

  /deep/ {
    .el-alert__closebtn {
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.fix-form-item {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px #e4e7ed solid;

  @media screen and (max-width: 769px) {
    @include flex(center);

    /deep/ {
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}
</style>

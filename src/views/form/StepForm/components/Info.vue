<template>
  <el-form class="fix-form" ref="form"
    label-width="80px"
    :model="form">

    <el-form-item label="收款人" prop="name"
      :rules="{
        required: true,
        message: '请输入收款人姓名',
        trigger: 'change'
      }">
      <el-input v-model="form.name"/>
    </el-form-item>

    <el-form-item label="收款账户" prop="account"
      :rules="{
        required: true,
        message: '请输入收款账户',
        trigger: 'change'
      }">
      <el-input class="fix-input" v-model="form.account">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="银行账户" value="bank"/>
          <el-option label="支付宝" value="alipay"/>
        </el-select>
      </el-input>
    </el-form-item>

    <el-form-item label="支付金额" prop="money"
      :rules="{
        required: true,
        type: 'number',
        message: '请输入支付金额',
        trigger: 'change'
      }">
      <el-input v-model.number="form.money" prefix-icon="el-icon-icon-YUAN"/>
    </el-form-item>

    <el-form-item label="备注" prop="remark">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        v-model="form.remark">
      </el-input>
    </el-form-item>

    <el-form-item class="fix-form-item">
      <el-button type="primary" @click="next">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class StepForm extends Vue {
  select= 'alipay'

  @Prop({ type: Object }) form

  next () {
    this.$refs.form.validate(valid => {
      if (!valid) return false
      this.$router.push({ name: 'step-form-confirm' })
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

.fix-input {
  /deep/ {
    .el-input-group__prepend {
      width: 70px;
      background-color: #fff;
    }
  }
}

.fix-form-item {
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

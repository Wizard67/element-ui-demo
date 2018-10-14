<template>
  <article>
    <Card>
      <template slot="head">
        <div>
          <h1>分步表单</h1>
          <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
        </div>
      </template>
    </Card>

    <Card class="fix-card">
      <template slot="content">
        <el-row class="fix-row">
          <el-col :xs="24" :sm="16" :md="16" :lg="14" :xl="14">
            <el-steps class="fix-steps" :active="active" finish-status="success">
              <el-step title="填写表单"/>
              <el-step title="确认表单"/>
              <el-step title="完成"/>
            </el-steps>
          </el-col>

          <el-col :xs="24" :sm="15" :md="14" :lg="11" :xl="8">
            <component :is="currentComponent" :form="form" @onFormSumbit="resetFields"/>
          </el-col>
        </el-row>
      </template>
    </Card>
  </article>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import Card from '@/components/Card'
const Info = () => import(/* webpackChunkName: 'step-form' */ './components/Info')
const Confirm = () => import(/* webpackChunkName: 'step-form' */ './components/Confirm')
const Result = () => import(/* webpackChunkName: 'step-form' */ './components/Result')

const moduleActivity = namespace('activity')

@Component({
  components: { Card, Info, Confirm, Result }
})
export default class StepForm extends Vue {
  currentComponent = 'Confirm'
  active = 0
  form = {
    name: '',
    account: '',
    money: null,
    remark: ''
  }

  @moduleActivity.Action submitForm

  resetFields () {
    this.form = {
      name: '',
      account: '',
      money: null,
      remark: ''
    }
  }

  @Watch('$route', { immediate: true })
  onRouterChange (route) {
    switch (route.name) {
      case 'step-form-info':
        this.active = 0
        this.currentComponent = 'Info'
        break
      case 'step-form-confirm':
        this.active = 1
        this.currentComponent = 'Confirm'
        break
      case 'step-form-result':
        this.active = 2
        this.currentComponent = 'Result'
        break
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@nn-yy/css-flex/flex";

.fix-card {
  @include flex(center);
  padding: 40px 0;

  /deep/ {
    .el-card__body {
      width: 100%;
    }
    .card__content {
      @include flex-column(center);
    }
  }
}

.fix-steps {
  /deep/ {
    .el-step__head {
      line-height: 1;
    }
    .el-step__head.is-process {
      .el-step__icon.is-text {
        border-color: currentColor;
        color: #67c23a;
      }
    }
    .el-step__head.is-success {
      .el-step__line {
        background-color: #67c23a;
      }
    }
  }
}

.fix-row {
  @include flex-column(center);
  width: 100%;
}
</style>

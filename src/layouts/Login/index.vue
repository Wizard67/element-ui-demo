<template>
  <el-container class="fix-container">
    <article class="fix-article">
      <LogoWrap size="large" :logo="logo">ElementUI Demo</LogoWrap>

      <el-tabs class="fix-tabs" v-model="tabsActive" :before-leave="() => !this.isLogin">
        <el-tab-pane label="账户密码登录" name="password">

          <el-form ref="password" :model="form.password">
            <el-form-item prop="username" :rules="{ required: true, message: '请输入用户名', trigger: 'change' }">
              <el-input
                type="text" placeholder="admin"
                v-model="form.password.username"
                clearable>
                <i class="el-input__icon el-icon-icon-user" slot="prefix"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="password" :rules="{ required: true, message: '请输入密码', trigger: 'change' }">
              <el-input
                type="password" placeholder="admin"
                v-model="form.password.password"
                clearable>
                <i class="el-input__icon el-icon-icon-lock" slot="prefix"></i>
              </el-input>
            </el-form-item>

          </el-form>
        </el-tab-pane>

        <el-tab-pane label="手机号登录" name="captcha">
          <el-form ref="captcha" :model="form.captcha">

            <el-form-item prop="phone" :rules="{ validator: validatePhone, message: '请输入手机号', trigger: 'change' }">
              <el-input
                type="text" placeholder="mobile number"
                v-model="form.captcha.phone"
                clearable>
                <i class="el-input__icon el-icon-icon-mobile" slot="prefix"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="captcha" :rules="{ required: true, message: '请输入验证码', trigger: 'change' }">
              <el-row :gutter="10">
                <el-col :span="16" :xs="14" :sm="16">
                  <el-input
                    type="text" placeholder="captcha"
                    v-model="form.captcha.captcha" clearable>
                    <i class="el-input__icon el-icon-icon-mail" slot="prefix"></i>
                  </el-input>
                </el-col>
                <el-col :span="8" :xs="10" :sm="8">
                  <el-button class="fix-button" v-countDown="sendCaptcha" plain>获取验证码</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

      <el-form>
        <el-form-item class="fix-form-item">
          <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
          <el-button type="text">忘记密码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="fix-button" type="primary"
            :loading="isLogin" @click="onSubmit" :disabled="checkFieldValue">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </article>
  </el-container>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'

import LogoWrap from '@/components/LogoWrap'

import countDown from '@directives/countDown'

const moduleUser = namespace('user')

const phoneRegExp = /^1(3|4|5|6|7|8|9)\d{9}$/

@Component({
  components: { LogoWrap },
  directives: { countDown }
})
export default class Login extends Vue {
  logo = require('@/assets/images/logo.png')
  autoLogin = false
  isLogin = false
  tabsActive = 'password'
  form = {
    password: {
      username: 'admin',
      password: 'admin'
    },
    captcha: {
      phone: '',
      captcha: ''
    }
  }

  @moduleUser.Action login
  @moduleUser.Action getCaptcha

  get checkFieldValue () {
    let field = this.form[this.tabsActive]
    let status = false
    for (const key in field) {
      if (field[key] === '') {
        status = true
        break
      }
    }
    return status
  }

  validatePhone = (rule, value, callback) => {
    if (phoneRegExp.test(value)) {
      callback()
    } else {
      callback(new Error(rule.message))
    }
  }

  onSubmit () {
    this.$refs[this.tabsActive].validate(valid => {
      if (!valid) return false
      this.isLogin = true

      this.login({ ...this.form[this.tabsActive], autoLogin: this.autoLogin })
        .then(res => {
          this.$message.success(res.message)
          setTimeout(() => this.$router.push({ path: '/' }), 500)
        })
        .catch(res => this.$message.warning(res.message))
        .finally(() => { this.isLogin = false })
    })
  }

  sendCaptcha () {
    // element 中验证方法并不能返回验证结果
    // 所以此处仅作为样式展示
    this.$refs[this.tabsActive].validateField('phone')

    return new Promise((resolve, reject) => {
      if (phoneRegExp.test(this.form.captcha.phone)) {
        this.getCaptcha().then(res => {
          this.$message({
            showClose: true,
            message: '验证码已发送',
            type: 'success'
          })
        })
        resolve()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@nn-yy/css-flex/flex';

.fix-container {
  @include flex(center);
  height: 100%;
}

.fix-article {
  width: 360px;
  padding: 100px 26px 0 26px;
}

.fix-form-item {
  &::before {
    all: initial;
  }

  /deep/ {
    .el-form-item__content {
      @include flex(between);
      font-size: 400;

      &::before,
      &::after {
        all: initial;
      }
    }
  }
}

.fix-tabs {
  /deep/ {
    .el-tabs__header {
      padding-bottom: 20px;
    }
    .el-tabs__nav-wrap {
      @include flex(center, middle);
    }
    .el-tabs__item {
      font-size: 16px;
    }
  }
}

.fix-button {
  width: 100%;
}
</style>

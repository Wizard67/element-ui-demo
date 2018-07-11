<template>
  <el-container class="fix-container">
    <article class="fix-article">
      <LogoWrap :logo="logo" size="large">
        ElementUI Demo
      </LogoWrap>

      <el-tabs class="fix-tabs"
        v-model="tabsActive"
        :before-leave="() => !this.isLogin"
      >
        <el-tab-pane label="账户密码登录" name="password">
          <el-form :model="form.password" :rules="rules" ref="password">

            <el-form-item prop="username">
              <el-input type="text"
                placeholder="admin"
                v-model="form.password.username"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input type="password"
                placeholder="admin"
                v-model="form.password.password"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-icon-lock"></i>
              </el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="手机号登录" name="captcha">
          <el-form :model="form.captcha" :rules="rules" ref="captcha">
            <el-form-item prop="phone">
              <el-input type="text"
                placeholder="mobile number"
                v-model="form.captcha.phone"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-icon-mobile"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="captcha">
              <el-row :gutter="10">
                <el-col :span="16">
                  <el-input type="text"
                    placeholder="captcha"
                    v-model="form.captcha.captcha"
                    clearable
                  >
                    <i slot="prefix" class="el-input__icon el-icon-icon-mail"></i>
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-button class="fix-botton"
                    v-countDown="getCaptcha"
                    plain
                  >
                    获取验证码
                  </el-button>
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
          <el-button type="primary"
            class="fix-botton"
            :loading="isLogin"
            @click="onSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </article>
  </el-container>
</template>

<script>
import LogoWrap from '@/components/LogoWrap';
import { directiveCountDown as countDown } from '@/utils/vue';

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
  phone: [{ required: true, message: '请输入手机号', trigger: 'change' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'change' }]
};

export default {
  name: 'Login',
  directives: {
    countDown
  },
  components: {
    LogoWrap
  },
  data() {
    return {
      logo: require('@/assets/images/logo.png'),
      rules,
      autoLogin: true,
      isLogin: false,
      tabsActive: 'password',
      form: {
        password: {
          username: 'admin',
          password: 'admin'
        },
        captcha: {
          phone: '',
          captcha: ''
        }
      }
    };
  },
  methods: {
    onSubmit() {
      // 表单验证
      this.$refs[this.tabsActive].validate(valid => {
        if (valid) {
          this.isLogin = true;
          // 进行登录操作
          this.$store
            .dispatch('login', this.form[this.tabsActive])
            .then(() => this.$router.push({ path: '/' }))
            .finally(() => (this.isLogin = false));
        } else {
          return false;
        }
      });
    },
    getCaptcha() {
      this.$store.dispatch('getCaptcha');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@nn-yy/css-flex/flex';

.fix-container {
  @include flex(center);
  height: 100%;
}

.fix-article {
  width: 360px;
  padding: 120px;
}

.fix-form-item {
  &::before {
    all: initial;
  }

  /deep/ {
    .el-form-item__content {
      @include flex(between);

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

.fix-botton {
  width: 100%;
}
</style>

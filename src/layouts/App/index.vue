<template>
  <el-container class="fix-container" :class="{ 'overlay': isFixedAsideShow }">
    <el-aside class="fix-aside" ref="aside"
      :class="{
        'isFixed': fixedAside,
        'isFixedAsideShow': isFixedAsideShow
      }">
      <SideBar title="ElementUI Demo"
        :logo="logo"
        :nav="nav"
        :active="currentActive"
        :collapse="isCollapse">
      </SideBar>
    </el-aside>

    <el-container>
      <el-header class="fix-header">
        <NavBar :collapse="isCollapse" @onCollapse="handleCollapse">
          <SearchFiled class="hidden-xs-only" :suggestions="suggestions" @onSearch="handleSearch"/>

          <MessageBox class="hidden-xs-only" :messages="messages"/>

          <el-dropdown class="fix-dropdown">
            <UserCard :userName="userName" :avatar="avatar"/>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>个人中心</el-dropdown-item>
              <el-dropdown-item disabled>设置</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </NavBar>
      </el-header>

      <el-main class="fix-main">
        <router-view/>
        <FooterInfo/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import UserCard from '@/components/UserCard'
import FooterInfo from '@/components/FooterInfo'

import SideBar from './components/SideBar/'
import NavBar from './components/NavBar'
import SearchFiled from './components/SearchFlied'
import MessageBox from './components/MessageBox'

import layoutMixin from '@/vue/mixins/layout'

const moduleUser = namespace('user')
const moduleMessages = namespace('messages')

@Component({
  components: { SideBar, NavBar, SearchFiled, UserCard, MessageBox, FooterInfo },
  mixins: [ layoutMixin ]
})
export default class App extends Vue {
  logo = require('@/assets/images/logo.png')
  currentActive = ''
  isCollapse = false
  preSideBarStatus = ''
  fixedAside = false
  isFixedAsideShow = false

  @moduleUser.Getter userName
  @moduleUser.Getter avatar
  @moduleUser.Getter nav

  @moduleMessages.State suggestions
  @moduleMessages.State messages

  @moduleUser.Action logout
  @moduleMessages.Action getMessage

  handleCollapse () {
    if (this.preSideBarStatus === 'xs') {
      this.isCollapse = false
      this.isFixedAsideShow = !this.isFixedAsideShow
    } else {
      this.isCollapse = !this.isCollapse
    }
  }

  handleSearch (value) {
    alert(value)
  }

  handleLogout () {
    this.logout().then(() => {
      this.$message.success('退出登录成功')
      setTimeout(() => {
        this.$router.push({ name: 'login' })
        window.location.reload()
      }, 500)
    })
  }

  @Watch('$route', {immediate: true})
  onRouterChange (route) {
    if (route.meta && route.meta.menu) {
      this.currentActive = route.meta.menu
    }
  }
}
</script>

<style lang="scss" scoped>
.fix-container {
  height: 100%;

  &.overlay {
    &::before {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #5253534b;
      z-index: 998;
    }
  }
}

.fix-aside {
  width: unset !important;
  border-right: solid 1px #e6e6e6;
  z-index: 6666;

  &.isFixed {
    position: fixed;
    width: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 999;
    transition: transform 0.25s ease-in-out;

    &.isFixedAsideShow {
      transform: translateX(0);
      transition: transform 0.25s ease-in-out;
    }
  }
}

.fix-header {
  padding: 0;
  border-bottom: 1px #ebeef5 solid;
}

.fix-dropdown {
  margin-left: 25px;
}

.fix-main {
  min-height: calc(100vh - 60px);
  -webkit-overflow-scrolling: touch;
}
</style>

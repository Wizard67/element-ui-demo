<template>
  <el-container class="fix-container" :class="{ 'overlay': isFixedAsideShow }">
    <el-aside class="fix-aside" ref="aside"
      :class="{
        'isFixed': fixedAside,
        'isFixedAsideShow': isFixedAsideShow
      }"
    >
      <SideBar title="ElementUI Demo" :logo="logo" :nav="nav" :collapse="isCollapse"/>
    </el-aside>

    <el-container>
      <el-header class="fix-header">
        <NavBar :collapse="isCollapse" @onCollapse="handleCollapse">
          <SearchFiled class="hidden-xs-only" :suggestions="suggestions" @onSearch="handleSearch"/>

          <MessageBox class="hidden-xs-only" :messages="messages"/>

          <el-dropdown class="fix-dropdown">
            <UserCard :userName="userInfo.userName" :avatar="userInfo.avatar"/>

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
import UserCard from '@/components/UserCard'
import FooterInfo from '@/components/FooterInfo'

import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import SearchFiled from './components/SearchFlied'
import MessageBox from './components/MessageBox'

import { layoutMixin } from '@/utils/mixin'

import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const layoutModule = namespace('layout')

@Component({
  components: { SideBar, NavBar, SearchFiled, UserCard, MessageBox, FooterInfo },
  mixins: [ layoutMixin ]
})
export default class App extends Vue {
  logo = require('@/assets/images/logo.png')
  isCollapse = false
  preSideBarStatus = ''
  fixedAside = false
  isFixedAsideShow = false

  @layoutModule.State userInfo
  @layoutModule.State nav
  @layoutModule.State suggestions
  @layoutModule.State messages

  @layoutModule.Action initApp
  @layoutModule.Action logout

  created () {
    this.initApp()
  }

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
      setTimeout(() => this.$router.push({ name: 'login' }), 500)
    })
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
}

.fix-dropdown {
  margin-left: 25px;
}

.fix-main {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

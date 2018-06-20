<template>
  <el-container class="fix-container">

    <el-aside class="fix-aside" style="width: unset">

      <SideBar :logo="logo"
        title="ElementUI Demo"
        :nav="nav"
        :collapse="isCollapse"
      />

    </el-aside>

    <el-container>
      <el-header class="fix-header">

        <NavBar @onCollapse="handleCollapse"
          :collapse="isCollapse"
        >

          <SearchFiled :suggestions="suggestions"
            @onSearch="handleSearch"
          />

          <MessageBox :messages="messages" />

          <UserDropdown :userName="userInfo.userName"
            :avatar="userInfo.avatar"  
          />

        </NavBar>

      </el-header>

      <el-main>
        <router-view/>
        <FooterInfo/>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'
import SearchFiled from '@/components/NavBar/SearchFlied'
import UserDropdown from '@/components/NavBar/UserDropdown'
import MessageBox from '@/components/NavBar/MessageBox'
import FooterInfo from '@/components/FooterInfo'

import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      logo: require('@/assets/images/logo.png'),
      isCollapse: false
    }
  },
  computed: {
    ...mapState([
      'userInfo',
      'nav',
      'suggestions',
      'messages'
    ])
  },
  methods: {
    handleCollapse(value) {
      this.isCollapse = !this.isCollapse
    },
    handleSearch(value) {
      alert(value)
    }
  },
  created() {
    this.$store.dispatch('initApp')
  },
  components: {
    SideBar,
    NavBar,
    SearchFiled,
    UserDropdown,
    MessageBox,
    FooterInfo
  }
}
</script>

<style src="@/assets/style/base.scss" lang="scss"></style>
<style lang="scss" scoped>
.fix-container {
  height: 100%;
}

.fix-aside {
  width: unset;
  border-right: solid 1px #e6e6e6;
  background-color: #545c64;
}

.fix-header {
  padding: 0;
}
</style>

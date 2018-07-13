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

          <el-dropdown class="fix-dropdown">
            <UserCard :userName="userInfo.userName" :avatar="userInfo.avatar" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item disabled>
                设置
              </el-dropdown-item>
              <el-dropdown-item divided>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import SearchFiled from '@/components/NavBar/SearchFlied';
import UserCard from '@/components/UserCard';
import MessageBox from '@/components/NavBar/MessageBox';
import FooterInfo from '@/components/FooterInfo';

import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
    SearchFiled,
    UserCard,
    MessageBox,
    FooterInfo
  },
  data() {
    return {
      logo: require('@/assets/images/logo.png'),
      isCollapse: false
    };
  },
  computed: {
    ...mapState(['userInfo', 'nav', 'suggestions', 'messages'])
  },
  created() {
    this.$store.dispatch('initApp');
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleSearch(value) {
      alert(value);
    }
  }
};
</script>

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

.fix-dropdown {
  margin-left: 25px;
}
</style>

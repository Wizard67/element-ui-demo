<template lang="pug">
  el-container.fix-container
    el-aside.fix-aside
      SideBar(title="ElementUI Demo" :logo="logo" :nav="nav" :collapse="isCollapse")

    el-container
      el-header.fix-header
        NavBar(:collapse="isCollapse" @onCollapse="handleCollapse")
          SearchFiled(:suggestions="suggestions" @onSearch="handleSearch") 

          MessageBox(:messages="messages")

          el-dropdown.fix-dropdown
            UserCard(:userName="userInfo.userName" :avatar="userInfo.avatar")

            el-dropdown-menu(slot="dropdown")
              el-dropdown-item(disabled) 个人中心
              el-dropdown-item(disabled) 设置
              el-dropdown-item(@click.native="handleLogout" divided) 退出登录

      el-main
        router-view
        FooterInfo

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
    },
    handleLogout() {
      this.$store.dispatch('logout').then(() => {
        this.$message.success('退出登录成功');
        setTimeout(() => this.$router.push({ name: 'login' }), 500);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fix-container {
  height: 100%;
}

.fix-aside {
  width: unset !important;
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

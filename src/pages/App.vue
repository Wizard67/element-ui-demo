<template>
  <div id="app">
    <side-bar :user="user" :list="navList"></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '@/containers/side-bar'

export default {
  name: 'app',
  data() {
    return {
      navList: [
        {
          title: '数据统计',
          icon: 'fa-area-chart',
          index: 'dashboard'
        },
        {
          title: '用户管理',
          icon: 'fa-users',
          index: '2',
          child: [
            {
              index: '2-1',
              icon: '',
              title: '选项1'
            },
            {
              index: '2-2',
              icon: '',
              title: '选项2'
            }
          ]
        },{
          title: '内容管理',
          icon: 'fa-television',
          index: '3'
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  components: {
    SideBar
  }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>

<template>
  <div id="app">
    <side-bar :user="user" :list="navList"></side-bar>
    <main>
      <router-view></router-view>
    </main>
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
          index: '1',
          child: [
            {
              index: '1-1',
              icon: '',
              title: '选项2'
            },
            {
              index: '1-2',
              icon: '',
              title: '选项3'
            }
          ]
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

<style src="@/assets/css/_reset.scss" lang="scss"></style>

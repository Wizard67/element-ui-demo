<template>
  <el-container class="fix-container">

    <el-aside class="fix-aside" style="width: unset">

      <SideBar logo="/logo.png"
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

export default {
  name: 'App',
  data() {
    return {
      isCollapse: false,
      userInfo: {
        userName: 'Wizrad67',
        avatar: '/avatar.jpg',
      },
      nav: [
        {
          title: 'dashboard',
          icon: 'icon-dashboard',
          childs: [
            {
              title: '分析页',
              index: '1-1',
            },
            {
              title: '监控页',
              index: '1-2',
            },
            {
              title: '工作台',
              index: '1-3',
            },
          ]
        },
        {
          title: '表单页',
          icon: 'icon-edit-square-o',
          childs: [
            {
              title: '基础表单',
              index: '2-1',
            },
            {
              title: '分步表单',
              index: '2-2',
            },
            {
              title: '高级表单',
              index: '2-3',
            },
          ]
        },
        {
          title: '列表页',
          icon: 'icon-table',
          childs: [
            {
              title: '查询表格',
              index: '3-1',
            },
            {
              title: '标准列表',
              index: '3-2',
            },
            {
              title: '卡片列表',
              index: '3-3',
            },
            {
              title: '搜索列表',
              index: '3-4',
            },
          ]
        },
        {
          title: '详情页',
          icon: 'icon-unorderedlist',
          childs: [
            {
              title: '基础详情页',
              index: '4-1',
            },
            {
              title: '高级详情页',
              index: '4-2',
            },
          ]
        },
        {
          title: '结果页',
          icon: 'icon-check-close-circle-o',
          childs: [
            {
              title: '成功',
              index: '5-1',
            },
            {
              title: '失败',
              index: '5-2',
            },
          ]
        },
        {
          title: '异常页',
          icon: 'icon-error',
          childs: [
            {
              title: '403',
              index: '6-1',
            },
            {
              title: '404',
              index: '6-2',
            },
            {
              title: '500',
              index: '6-3',
            },
          ]
        },
      ],
      suggestions: [
        { message: '搜索提示一'},
        { message: '搜索提示二'},
        { message: '搜索提示三'},
      ],
      messages: {
        notify: [
            {
              main: '通知1',
            },
            {
              main: '通知2',
            },
        ],
        messages: [
            {
              main: '消息',
            },
        ],
        schedule: [
        ],
      },
    }
  },
  methods: {
    handleCollapse(value) {
      this.isCollapse = !this.isCollapse
    },
    handleSearch(value) {
      alert(value)
    }
  },
  components: {
    SideBar,
    NavBar,
    SearchFiled,
    UserDropdown,
    MessageBox,
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

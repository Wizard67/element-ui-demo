<template>
  <el-container class="fix-container">

    <el-aside class="fix-aside">
      <logo-wrap logo="@/assets/logo.png">ElementUI Demo</logo-wrap>
      <side-bar :nav="nav"></side-bar>
    </el-aside>

    <el-container>
      <el-header>Header</el-header>

      <el-main>
        <router-view/>
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
import LogoWrap from '@/components/logo-wrap'
import SideBar from '@/components/side-bar'

export default {
  name: 'App',
  data() {
    return {
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
      ]
    }
  },
  components: {
    LogoWrap,
    SideBar
  }
}
</script>

<style src="@/assets/style/base.scss" lang="scss"></style>
<style lang="scss" scoped>
.fix-container {
  height: 100%;
}

.fix-aside {
  border-right: solid 1px #e6e6e6;
  background-color: #545c64;
}
</style>

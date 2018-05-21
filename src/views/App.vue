<template>
  <el-container>

    <el-aside>
      <logo-wrap logo="@/assets/logo.png">ElementUI Demo</logo-wrap>
      <side-bar></side-bar>
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
  components: {
    LogoWrap,
    SideBar
  }
}
</script>

<style src="@/assets/style/base.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>
<style lang="scss">
/* fix el-container's height */
.el-container {
    height: 100%;
}

/* add border-right */
.el-aside {
    border-right: solid 1px #e6e6e6;
}
</style>


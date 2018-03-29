<template>
  <el-container>

    <el-aside>
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
import SideBar from '@/components/side-bar'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style src="@/assets/style/reset.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>

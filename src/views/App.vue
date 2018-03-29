<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style src="@/assets/style/reset.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>

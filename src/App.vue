<template>
  <div id="app">
    <side-bar></side-bar>
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

    }
  },
  mounted(){

  },
  components: {
    SideBar
  }
}

</script>

<style src="@/assets/css/_reset.scss" lang="scss"></style>

<style lang="scss">
  // use font-awesome instead of element-icon-font
  // https://github.com/ElemeFE/element/issues/1054 
  [class^="el-icon-fa"], [class*=" el-icon-fa"] {
    font-family:"FontAwesome" !important;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  $fa-font-path: "../node_modules/font-awesome/fonts";
  $fa-css-prefix: "el-icon-fa";

  @import "../node_modules/font-awesome/scss/font-awesome.scss";
</style>

<style lang="scss">
#app {
  display: flex;
  height: inherit;
  
  background-color: #f2f2f2;
  
  main {
    padding: 10px 20px;
  }
}
</style>

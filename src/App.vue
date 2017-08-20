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
* {
  // outline: 1px red solid;
}
html {
  height: 100%;
  font-size: 16px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

body {
  margin: 0;
  height: inherit;

  #app {
    display: flex;
    height: inherit;
    
    background-color: #f2f2f2;
    
    main {
      padding: 10px 20px;
    }
  }
}

p {
  margin: 0;
}
</style>

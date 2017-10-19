<template>
  <nav class="side-bar"
       :class="this.isCollapse?'-collapse':''">

    <avatar-box :avatar="user.avatar" :name="user.name"
                @click.native="collapseToggle">
    </avatar-box>
    
    <el-menu :theme="'dark'" :collapse="isCollapse" unique-opened router>
      <template v-for="(item, index) in list">

        <template v-if="item.hasOwnProperty('child') && item.child.length > 0">
          <el-submenu :index="item.index" :key="index">
            <template :slot="'title'">
              <el-icon :name="item.icon"></el-icon>
              <span :slot="'title'">{{ item.title }}</span>
            </template>

            <template v-for="(citem, cindex) in item.child">
              <el-menu-item :index="citem.index" :key="cindex">
                <template v-if="citem.hasOwnProperty('icon') && citem.icon">
                  <el-icon :name="citem.icon"></el-icon>
                </template>
                {{ citem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.index"  :key="index">
            <el-icon :name="item.icon"></el-icon>
            <span :slot="'title'">{{ item.title }}</span>
          </el-menu-item>
        </template>

        <el-menu-item class="-bottom"
                      :index="'4'" :key="index">
          <el-icon :name="'fa-power-off'"></el-icon>
          <span :slot="'title'">退出系统</span>
        </el-menu-item>
      </template>
    </el-menu>

  </nav>
</template>

<script>
import AvatarBox from './avatar-box'

export default {
  name: 'side-bar',
  props: [
    'user',
    'list',
  ],
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    collapseToggle() {
      this.isCollapse = this.isCollapse? false: true
    }
  },
  components: {
    AvatarBox
  }
}

</script>

<style lang="scss" scoped>

$nav-width: 280px;
$nav-width-collapse: 64px;

.side-bar {
  flex: none;
  width: $nav-width;
  height: 100%;
  background-color: #324157;
  transition: width .2s ease-in-out;
  will-change: transform;

  &>.el-menu {
    margin-top: 30px;
    border-top: 2px #1f2d3d solid;

    &:not(.el-menu--collapse) {
      width: $nav-width;
    }

    & /deep/ .is-active {
      color: #ffffff;
    }

    & .-bottom {
      position: fixed;
      bottom: 0;
      width: $nav-width;
    }
  }
  /* -collapse */
  &.-collapse {
  width: $nav-width-collapse;
  transition: width .4s ease-in-out;
  will-change: transform;

    &>.el-menu {
      & .-bottom {
        width: $nav-width-collapse;
      }
    }
  }
}
</style>
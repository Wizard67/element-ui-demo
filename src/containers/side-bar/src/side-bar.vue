<template>
  <nav class="side-bar">

    <div class="avatar-box">
      <img class="avatar el-dropdown-link" :src="avatar">
      <div class="text">
        <p class="greeting">Welcome.</p>
        <p class="name">Wizard67</p>
      </div>
    </div>

    <el-menu :theme="'dark'" unique-opened>

      <el-sub-menu :index="'1'">
        <template :slot="'title'">
          <el-icon :name="'message'"></el-icon>
          <span slot="title">导航一</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu :index="'2'">
        <template :slot="'title'">
          <el-icon :name="'setting'"></el-icon>
          <span slot="title">导航二</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item :index="'3'">
        <el-icon :name="'menu'"></el-icon>
        <span slot="title">导航三</span>
      </el-menu-item>

    </el-menu>

    <el-menu class="bottom-bar el-menu-demo"
             :theme="'dark'"
             :mode="'horizontal'">
      <el-menu-item index="1">
        <el-icon :name="'message'"></el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon :name="'message'"></el-icon>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon :name="'message'"></el-icon>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon :name="'message'"></el-icon>
      </el-menu-item>
    </el-menu>

  </nav>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import { Icon } from 'element-ui'
import { Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'
import { ButtonGroup, Button } from 'element-ui'

export default {
  name: 'side-bar',
  data() {
    return {
      avatar: '/static/images/avatar.jpg'
    }
  },
  components: {
    elDropdown: Dropdown,
    elDropdownMenu: DropdownMenu,
    elDropdownItem: DropdownItem,
    elIcon: Icon,
    elMenu: Menu,
    elSubMenu: Submenu,
    elMenuItemGroup: MenuItemGroup,
    elMenuItem: MenuItem,
    elButtonGroup: ButtonGroup,
    elButton: Button
  }
}

</script>

<style lang="scss" scoped>
$nav-width: 280px;
.side-bar {
  flex: none;
  width: $nav-width;
  height: 100%;
  background-color: #324157;

  .avatar-box {
    display: flex;
    position: relative;

    padding: 30px 20px 0 20px;
    width: 100%;
    color: white;

    &>.avatar {
      width: 56px;
      height: 56px;

      border-radius: 50%;
      border: 4px white solid;
    }

    &>.text {
      padding: 0 20px;

      &>.greeting {
        font-size: 14px;
        line-height: 2;
        color: #BAB8B8;
      }
      &>.name {}
    }
  }

  &>.el-menu {
    margin-top: 30px;
    border-top: 2px #1f2d3d solid;
    
    /* reset menu-item-group's title style */
     /deep/.el-menu-item-group__title {
      padding: 0;
    }
  }

  &>.bottom-bar {
    position: fixed;
    bottom: 0;
    width: $nav-width;



    &>>>.el-menu-item {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 25%;

      i {
        margin: 0;
      }
    }
  }
}
</style>
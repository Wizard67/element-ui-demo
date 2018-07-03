<template>
  <el-menu
    class="fix-menu"
    :collapse="collapse"
    :collapse-transition="true"
    router
    unique-opened>
    
    <LogoWrap :logo="logo">
      {{title}}
    </LogoWrap>

    <template v-for="(item, index) in nav">

      <template v-if="item.childs && item.childs.length > 0">
        <el-submenu :index="item.index ?item.index :`${index}`" :key="index">
          <template :slot="'title'">
            <el-icon :name="item.icon"></el-icon>
            <span :slot="'title'">{{ item.title }}</span>
          </template>

          <template v-for="(citem, cindex) in item.childs">
            <el-menu-item :index="citem.index" :key="cindex">
              <template v-if="citem.icon && citem.icon">
                <el-icon :name="citem.icon"></el-icon>
              </template>
              {{ citem.title }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.index" :key="index">
          <el-icon :name="item.icon"></el-icon>
          <span :slot="'title'">{{ item.title }}</span>
        </el-menu-item>
      </template>

    </template>
  </el-menu>
</template>

<script>
import LogoWrap from '@/components/LogoWrap';

export default {
  name: 'SideBar',
  components: {
    LogoWrap
  },
  props: {
    logo: {
      type: String
    },
    title: {
      type: String
    },
    collapse: {
      default: false,
      type: Boolean
    },
    nav: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.fix-menu {
  border-right: unset;
  background-color: #545c64;
  overflow: hidden;

  &:not(.el-menu--collapse) {
    width: 300px;
  }

  /deep/ {
    .el-menu--inline {
      background-color: #394147;
    }

    .el-submenu__title {
      color: #a6aaae;

      &:hover {
        color: white;
        background-color: unset;
      }
      i {
        color: inherit;
      }
    }

    .el-menu-item {
      color: #a6aaae;

      &:focus,
      &:hover,
      &.is-active {
        color: white;
        background-color: #909090;
      }
    }
  }
}
</style>

<template lang="pug">
  el-menu.fix-menu(:collapse="collapse" :collapse-transition="true" router unique-opened)
    
    LogoWrap(type="dark" :logo="logo") {{title}}

    template(v-for="(item, index) in nav")

      template(v-if="item.childs && item.childs.length > 0")
        el-submenu(:index="item.index ?item.index :`${index}`" :key="index")
          template(:slot="'title'")
            el-icon(:name="item.icon")
            span(:slot="'title'") {{ item.title }}

          template(v-for="(citem, cindex) in item.childs")
            el-menu-item(:index="citem.index" :key="cindex")
              template(v-if="citem.icon && citem.icon")
                el-icon(:name="citem.icon")
              | {{ citem.title }}

      template(v-else)
        el-menu-item(:index="item.index" :key="index")
          el-icon(:name="item.icon")
          span(:slot="'title'") {{ item.title }}

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
  height: 100%;
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

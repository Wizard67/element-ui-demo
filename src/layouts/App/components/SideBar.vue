<template>
  <el-menu class="fix-menu"
    :default-active="active"
    :collapse="collapse"
    :collapse-transition="true"
    router
    unique-opened>
    <LogoWrap type="dark" :logo="logo">{{ title }}</LogoWrap>
    <template v-for="(item, index) in nav">

      <template v-if="item.children && item.children.length > 0">
        <el-submenu :index="item.index ?item.index :`${index}`" :key="index">
          <template :slot="'title'">
            <el-icon :name="item.icon"/>
            <span :slot="'title'">{{ item.title }}</span>
          </template>
          <template v-for="(citem, cindex) in item.children">
            <el-menu-item :index="citem.index" :key="cindex">
              <template v-if="citem.icon && citem.icon">
                <el-icon :name="citem.icon"/>
              </template>
              {{ citem.title }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.index" :key="index">
          <el-icon :name="item.icon"/>
          <span :slot="'title'">{{ item.title }}</span>
        </el-menu-item>
      </template>

    </template>
  </el-menu>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import LogoWrap from '@/components/LogoWrap'

@Component({
  components: { LogoWrap }
})
export default class SideBar extends Vue {
  @Prop({ type: String }) logo
  @Prop({ type: String }) title
  @Prop({ type: String }) active
  @Prop({ default: false, type: Boolean }) collapse
  @Prop({ type: Array }) nav
}
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

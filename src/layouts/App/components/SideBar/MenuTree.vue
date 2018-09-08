<template>
  <div>
    <template v-for="(item, index) in nav">

      <template v-if="item.children && item.children.length > 0">
        <el-submenu :index="item.index ?item.index :`${index}`" :key="index">
          <template :slot="'title'">
            <el-icon v-if="item.icon" :name="item.icon"/>
            <span :slot="'title'">{{ item.title }}</span>
          </template>
          <MenuTree :nav="item.children"/>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.index" :key="index">
          <el-icon v-if="item.icon" :name="item.icon"/>
          <span :slot="'title'">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class MenuTree extends Vue {
  @Prop({ type: Array }) nav
}
</script>

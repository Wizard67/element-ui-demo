<template>
  <el-menu unique-opened router>
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

    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '数据统计',
          icon: 'fa-area-chart',
          index: 'dashboard'
        },
        {
          title: '用户管理',
          icon: 'fa-users',
          index: '2',
          child: [
            {
              index: '2-1',
              icon: '',
              title: '选项1'
            },
            {
              index: '2-2',
              icon: '',
              title: '选项2'
            }
          ]
        },{
          title: '内容管理',
          icon: 'fa-television',
          index: '3'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.el-menu {
    height: 100%;
}
</style>

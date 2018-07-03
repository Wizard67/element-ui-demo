<template>
  <el-dropdown class="fix-dropdown" style="margin-left: 25px;">
    <div class="user-card">
      <img class="user-card__avatar" :src="avatar" alt="avatar">
      <span class="user-card__name">{{userName}}</span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled>
        个人中心
      </el-dropdown-item>
      <el-dropdown-item disabled>
        设置
      </el-dropdown-item>
      <el-dropdown-item divided>
        退出登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
  }
}
</script>

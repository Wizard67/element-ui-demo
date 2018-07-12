<template functional>
  <div class="footerInfo">
    <slot>
      <div class="font--light">
        Copyright <i class="el-icon-icon-copyright"></i> 2018 ElementUI Demo
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo'
};
</script>

<style lang="scss" scoped>
.font--light {
  color: #909399;
  text-align: center;
}
</style>

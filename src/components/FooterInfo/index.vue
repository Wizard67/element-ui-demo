<template functional>
  <div class="footerInfo">
    <div class="footerInfo__main">
      <slot>
        Copyright <i class="el-icon-icon-copyright"></i> 2018 ElementUI Demo
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo'
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>

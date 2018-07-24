<template lang="pug" functional>
  .footerInfo
    .footerInfo__main
      slot Copyright #[i.el-icon-icon-copyright] 2018 ElementUI Demo

</template>

<script>
export default {
  name: 'FooterInfo'
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

<template lang="pug" functional>
  .footerInfo
    .footerInfo__main
      slot Copyright #[i.el-icon-icon-copyright] 2018 ElementUI Demo

</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FooterInfo extends Vue {

}
</script>

<style src="./style.scss" lang="scss" scoped></style>

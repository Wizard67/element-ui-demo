<template lang="pug">
  .nav-bar
    .nav-bar__helper
      i(:class="helperClass" @click="handleCollapse")
    .nav-bar__main
      slot

</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  @Prop({ type: Boolean })
  collapse

  get helperClass () {
    return {
      'el-icon-icon-outdent': !this.collapse,
      'el-icon-icon-indent': this.collapse
    }
  }

  handleCollapse (event) {
    event.stopPropagation()
    this.$emit('onCollapse')
  }
}
</script>

<style src="./style.scss" lang="scss"></style>

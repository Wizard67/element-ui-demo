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

<style lang="scss">
@import '~@nn-yy/css-flex/flex';

.nav-bar {
  @include flex( between, middle );
  height: 100%;
  padding: 0 20px;
  background-color: white;
  font-size: 18px;

  &__helper {
    @include flex( center, middle );
    @include flex-self( keep );
    width: unset;

    i {
      cursor: pointer;
    }
  }

  &__main {
    @include flex( start, middle );
  }
}

</style>

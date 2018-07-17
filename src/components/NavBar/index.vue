<template lang="pug">
  .nav-bar
    .nav-bar__helper
      i(:class="helperClass" @click="handleCollapse")
    .nav-bar__main
      slot

</template>

<script>
export default {
  name: 'NavBar',
  props: {
    collapse: {
      type: Boolean
    }
  },
  computed: {
    helperClass() {
      return {
        'el-icon-icon-outdent': !this.collapse,
        'el-icon-icon-indent': this.collapse
      };
    }
  },
  methods: {
    handleCollapse(event) {
      event.stopPropagation();
      this.$emit('onCollapse');
    }
  }
};
</script>

<style src="./style.scss" lang="scss">
</style>

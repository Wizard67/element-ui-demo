<template>
  <div class="logo-wrap">
    <img class="logo__image" :src="logo">
    <div class="logo__text" v-if="!collapse">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoWrap',
  props: {
    logo: {
      required: true,
      type: String
    },
    collapse: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style src="./style.scss" lang="scss">
</style>

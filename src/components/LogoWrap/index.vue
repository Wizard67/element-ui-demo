<template functional>
  <div class="logo-wrap">
    <img class="logo__image" :src="props.logo">
    <div class="logo__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoWrap'
}
</script>

<style src="./style.scss" lang="scss"></style>

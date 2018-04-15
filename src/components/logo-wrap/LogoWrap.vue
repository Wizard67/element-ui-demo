<template functional>
  <div class="logo-wrap">
    <img class="logo__image" src="@/assets/logo.png">
    <div class="logo__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>

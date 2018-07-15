<template lang="pug" functional>
  div(:class="[props.size === 'large'? 'logo--large': 'logo', props.type === 'dark'? 'is-dark': '']")
    img(:src="props.logo" :class="props.size === 'large'? 'logo__image--large': 'logo__image'")
    div(v-if="!props.collapse" :class="props.size === 'large'? 'logo__text--large': 'logo__text'")
      slot

</template>

<script>
export default {
  name: 'LogoWrap',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
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

<style src="./style.scss" lang="scss" scoped>
</style>

<template functional>
  <div
    :class="[
      props.size === 'large'? 'logo--large': 'logo',
      props.type === 'dark'? 'is-dark': ''
    ]">
    <img :src="props.logo" :class="props.size === 'large'? 'logo__image--large': 'logo__image'">
    <div v-show="!props.collapse" :class="props.size === 'large'? 'logo__text--large': 'logo__text'">
      <slot/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class LogoWrap extends Vue {
  @Prop({ type: String, default: '' }) type
  @Prop({ type: String, default: '' }) size
  @Prop({ required: true, type: String }) logo
  @Prop({ default: false, type: Boolean }) collapse
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

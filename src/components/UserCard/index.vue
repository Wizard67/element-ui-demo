<template lang="pug" functional>
  .user-card
    img.user-card__avatar(:src="props.avatar" alt="avatar")
    span.user-card__name {{props.userName}}

</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserCard extends Vue {
  @Prop({ type: String, required: true })
  userName
  @Prop({ type: String, required: true })
  avatar
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

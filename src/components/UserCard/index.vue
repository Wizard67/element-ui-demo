<template functional>
  <div class="user-card">
    <img class="user-card__avatar" :src="props.avatar" alt="avatar">
    <span class="user-card__name">{{ props.userName }}</span>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserCard extends Vue {
  @Prop({ type: String, required: true }) userName
  @Prop({ type: String, required: true }) avatar
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

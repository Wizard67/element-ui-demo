<template functional>
  <div class="user-card">
    <img class="user-card__avatar"
      :src="props.avatar"
      alt="avatar"
    >
    <span class="user-card__name">
      {{props.userName}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    userName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>

<template lang="pug" functional>
  .user-card
    img.user-card__avatar(:src="props.avatar" alt="avatar")
    span.user-card__name {{props.userName}}

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
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

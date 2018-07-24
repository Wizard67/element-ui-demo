<template lang="pug" functional>
  el-card(shadow="never")
    .card
      template(v-if="slots().head")
      .card__head
        slot(name="head")

      template(v-if="slots().content")
      .card__content(:style="{ height: props.height? props.height: 'auto'}")
        slot(name="content")

      template(v-if="slots().foot")
        .card__foot
          slot(name="foot")

</template>

<script>
export default {
  name: 'Card'
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

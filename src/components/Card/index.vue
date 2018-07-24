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
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Card extends Vue {

}
</script>

<style src="./style.scss" lang="scss" scoped></style>

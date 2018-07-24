<template lang="pug" functional>
  ul.list-group
    template(v-for="(item, index) in props.data")
      li.list(:key="item.name + index")

        template(v-if="props.orderMark > 0")
          span(:class="index > props.orderMark - 1? 'list__order': 'list__order--mark'") {{index + 1}}
        span.list__main {{ item.name }}
        span.list__helper {{ item.value }}

</template>

<script>
export default {
  name: 'List',
  props: {
    orderMark: {
      default: 0,
      type: Number
    },
    data: {
      type: Array
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

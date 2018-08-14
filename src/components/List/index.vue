<template functional>
  <ul class="list-group">
    <template v-for="(item, index) in props.data">
      <li class="list" :key="item.name + index">
        <template v-if="props.orderMark > 0">
          <span :class="index > props.orderMark - 1? 'list__order': 'list__order--mark'">
            {{ index + 1 }}
          </span>
        </template>
        <span class="list__main">{{ item.name }}</span>
        <span class="list__helper">{{ item.value }}</span>
      </li>
    </template>
  </ul>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  @Prop({ default: 0, type: Number }) orderMark
  @Prop({ type: Array }) data
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

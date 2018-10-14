<template>
  <div v-if="content && content.length">
    <template v-for="(item, index) in content">
      <p :key="index">{{ item.main }}</p>
    </template>
  </div>
  <div v-else>暂无数据</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class MessageBoxItem extends Vue {
  @Prop({ type: Array })
  content
}
</script>

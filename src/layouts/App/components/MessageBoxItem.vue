<template lang="pug">
  div(v-if="content && content.length")
    template(v-for="(item, index) in content")
      p(:key="index") {{item.main}}
  div(v-else) 暂无数据

</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MessageBoxItem extends Vue {
  @Prop({type: Array})
  content
}
</script>

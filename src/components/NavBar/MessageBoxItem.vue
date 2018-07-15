<template lang="pug">
  div(v-if="content && content.length")
    template(v-for="(item, index) in content")
      p(:key="index") {{item.main}}
  div(v-else) 暂无数据

</template>

<script>
export default {
  props: {
    content: {
      type: Array
    }
  }
};
</script>

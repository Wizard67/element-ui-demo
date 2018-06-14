<template>
  <div v-if="content && content.length">
    <template v-for="(item, index) in content">
      <p :key="index">
        {{item.main}}
      </p>
    </template>
  </div>
  <div v-else>
      暂无数据
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
    }
  }
}
</script>

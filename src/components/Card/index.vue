<template functional>
  <el-card shadow="never">
    <div class="card">
      <template v-if="slots().head">
      <div class="card__head">
        <slot name="head"></slot>
      </div>
      </template>
      <template v-if="slots().content">
      <div class="card__content" :style="{ height: props.height? props.height: 'auto'}">
        <slot name="content"></slot>
      </div>
      </template>
      <template v-if="slots().foot">
        <div class="card__foot">
          <slot name="foot"></slot>
        </div>
      </template>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style src="./style.scss" lang="scss">
</style>

<template functional>
  <el-card shadow="never">
    <div class="card">
      <template v-if="slots().head">
        <div class="card__head"><slot name="head"></slot></div>
      </template>

      <template v-if="slots().content">
        <div class="card__content" :style="{ height: props.height? props.height: 'auto' }">
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
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Card extends Vue {

}
</script>

<style src="./style.scss" lang="scss" scoped></style>

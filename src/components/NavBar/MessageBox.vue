<template lang="pug">
  el-popover.fix-popover(placement="bottom-end" width="280" trigger="click")

    el-badge.fix-badge(slot="reference" is-dot)
      i.el-icon-icon-bell

    el-tabs.fix-tabs
      el-tab-pane(name="notify" :label="`通知${getMessageLength(messages.notify)}`")
        MessageBoxItem(:content="messages.notify")

      el-tab-pane(name="messages" :label="`消息${getMessageLength(messages.messages)}`")
        MessageBoxItem(:content="messages.messages")

      el-tab-pane(name="schedule" :label="`待办${getMessageLength(messages.schedule)}`")
        MessageBoxItem(:content="messages.schedule")

</template>

<script>
import MessageBoxItem from '@/components/NavBar/MessageBoxItem'

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: { MessageBoxItem }
})
export default class MessageBox extends Vue {
  @Prop({ type: Object, required: true })
  messages

  getMessageLength (arr) {
    return arr && arr.length > 0 ? `(${arr.length})` : ''
  }
}
</script>

<style lang="scss" scoped>
@import '~@nn-yy/css-flex/flex';
.fix-popover {
  margin-left: 25px;
}

.fix-badge {
  display: block;
  cursor: pointer;
  i {
    display: block;
  }
}

.fix-tabs {
  /deep/ {
    .el-tabs__nav-wrap {
      @include flex(center, middle);
    }
  }
}
</style>

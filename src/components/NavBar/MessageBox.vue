<template>
  <el-popover style="margin-left: 25px;"
    placement="bottom-end"
    width="280"
    trigger="click">

    <el-badge class="fix-badge"
      is-dot
      slot="reference"
    >
      <i class="el-icon-icon-bell"></i>
    </el-badge>

    <el-tabs class="fix-tabs">

      <el-tab-pane :label="`通知${getMessageLength(messages.notify)}`" name="notify">
        <MessageBoxItem :content="messages.notify" />
      </el-tab-pane>
      <el-tab-pane :label="`消息${getMessageLength(messages.messages)}`" name="messages">
        <MessageBoxItem :content="messages.messages" />
      </el-tab-pane>
      <el-tab-pane :label="`待办${getMessageLength(messages.schedule)}`" name="schedule">
        <MessageBoxItem :content="messages.schedule" />
      </el-tab-pane>

    </el-tabs>
  </el-popover>
</template>

<script>
import MessageBoxItem from '@/components/NavBar/MessageBoxItem'

export default {
  props: {
    messages: {
      type: Object,
      required: true
    }
  },
  methods: {
    getMessageLength(arr) {
      return arr && arr.length > 0 ? `(${arr.length})` : ''
    }
  },
  components: {
    MessageBoxItem,
  }
}
</script>

<style lang="scss" scoped>
@import "~@nn-yy/css-flex/flex";

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
      @include flex( center, middle );
    }
  }
}
</style>



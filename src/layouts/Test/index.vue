<template lang="pug">
  el-upload(
    ref="upload"
    action="no"
    :multiple='true'
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false")
    el-button(slot="trigger" size="small" type="primary") 选取文件
    el-button(style="margin-left: 10px;" size="small" type="success" @click="submitUpload") 上传到服务器
    .el-upload__tip(slot="tip") 只能上传jpg/png文件，且不超过500kb
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
@Component
export default class Test extends Vue {
  files = []
  fileList = []

  @Action update

  submitUpload () {
    // this.$refs.upload.submit()
    var el = this.$refs.upload.$el.getElementsByClassName('el-upload__input')[0].files
    this.update(el)
  }
  handleRemove (file, fileList) {
    console.log(file, fileList[0] instanceof File)
  }
  handlePreview (file) {
    console.log(file)
  }
}
</script>

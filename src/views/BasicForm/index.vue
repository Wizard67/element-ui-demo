<template>
  <article>
    <Card>
      <template slot="head">
        <div>
          <h1>基础表单</h1>
          <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
      </template>
    </Card>

    <Card class="fix-card">
      <template slot="content">
        <el-row :gutter="10">
          <el-col :span="24">
            <el-form class="fix-form" ref="form"
              label-width="70px"
              :model="form"
            >

              <el-form-item label="活动名称">
                <el-input v-model="form.name"/>
              </el-form-item>

              <el-form-item label="活动封面">
                <el-upload
                  class="fix-upload"
                  ref="upload"
                  action="noused"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="handleCoverChange"
                >
                  <img v-if="cover" :src="cover">
                  <i v-else class="el-icon-plus"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="活动区域">
                <el-row>
                  <el-col :xs="16" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-cascader
                      class="fix-cascader"
                      :options="cascaderOptions"
                      v-model="form.region">
                    </el-cascader>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="活动时间">
                <el-row class="fix-row">
                  <el-col :xs="16" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-date-picker
                      class="fix-datepicker"
                      type="date"
                      placeholder="选择日期"
                      value-format="timestamp"
                      v-model="form.date">
                    </el-date-picker>
                  </el-col>
                  <el-col :xs="16" :sm="11" :md="11" :lg="11" :xl="11">
                    <el-time-picker
                      class="fix-timepicker"
                      :picker-options="{
                        selectableRange: '09:30:00 - 20:30:00'
                      }"
                      placeholder="选择时间"
                      value-format="timestamp"
                      v-model="form.time">
                    </el-time-picker>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"/>
              </el-form-item>

              <el-form-item label="活动性质">
                <el-checkbox-group class="fix-checkbox" v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"/>
                  <el-checkbox label="地推活动" name="type"/>
                  <el-checkbox label="线下主题活动" name="type"/>
                  <el-checkbox label="单纯品牌曝光" name="type"/>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="特殊资源">
                <el-radio-group class="fix-radio" v-model="form.resource">
                  <el-radio label="线上品牌商赞助"/>
                  <el-radio label="线下场地免费"/>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="优先级">
                <el-slider
                  class="fix-slider"
                  :min="1"
                  :max="5"
                  v-model="form.rank"
                  show-input>
                </el-slider>
              </el-form-item>

              <el-form-item label="活动形式">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 6}"
                  v-model="form.desc"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary"
                  :loading="isSubmit"
                  @click="onSubmit">
                  立即创建
                </el-button>
                <el-button>保存</el-button>
              </el-form-item>

            </el-form>
          </el-col>
        </el-row>
      </template>
    </Card>
  </article>
</template>

<script>
import cascaderOptions from './cascaderOptions'

import Card from '@/components/Card'
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const moduleActivity = namespace('activity')

const checkFileStatus = file => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2
  let message = ''

  if (!isLt2M) message = '上传封面图片大小不能超过 2MB!'
  if (!isJPG) message = '上传封面图片只能是 JPG 格式!'

  return isJPG && isLt2M ? '' : message
}

@Component({
  components: { Card }
})
export default class BasicForm extends Vue {
  isSubmit = false
  cover = ''
  cascaderOptions = cascaderOptions
  form = {
    name: '',
    cover: '',
    region: [],
    date: '',
    time: '',
    delivery: false,
    type: [],
    resource: '',
    rank: 1,
    desc: ''
  }

  @moduleActivity.Action submitForm

  handleCoverChange (file) {
    const fileStatus = checkFileStatus(file.raw)
    if (fileStatus) {
      this.$message.error(fileStatus)
      return false
    }

    this.cover = file.url
    this.form.cover = file.raw
  }

  onSubmit () {
    this.isSubmit = true
    this.submitForm(this.form).then(res => {
      this.$message.success('表单上传成功')
      this.isSubmit = false
    })
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

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
              label-width="80px"
              :model="form">

              <el-form-item label="活动名称" prop="name"
                :rules="{
                  required: true,
                  message: '请输入活动名称',
                  trigger: 'change'
                }">
                <el-input v-model="form.name"/>
              </el-form-item>

              <el-form-item label="活动封面" prop="cover"
                :rules="{
                  validator: validatCover,
                  required: true,
                  trigger: 'change'
                }">
                <el-upload
                  class="fix-upload"
                  ref="upload"
                  action="noused"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="handleCoverChange">
                  <img v-if="cover" :src="cover">
                  <i v-else class="el-icon-plus"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="活动区域" prop="region"
                :rules="{
                  required: true,
                  message: '请选择活动区域',
                  trigger: 'change'
                }">
                <el-row>
                  <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                    <el-cascader
                      class="fix-cascader"
                      :options="cascaderOptions"
                      v-model="form.region">
                    </el-cascader>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-row class="fix-row">
                <el-col :xs="24" :sm="13" :md="13" :lg="13" :xl="13">
                  <el-form-item label="活动时间" prop="date"
                    :rules="{
                      required: true,
                      message: '请选择活动日期',
                      trigger: 'change'
                    }">
                    <el-date-picker
                      class="fix-datepicker"
                      type="date"
                      placeholder="选择日期"
                      value-format="timestamp"
                      v-model="form.date">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10" class="fix-col">
                  <el-form-item prop="time"
                    :rules="{
                      required: true,
                      message: '请选择活动时间',
                      trigger: 'change'
                    }">
                    <el-time-picker
                      class="fix-timepicker"
                      placeholder="选择时间"
                      value-format="timestamp"
                      v-model="form.time">
                    </el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="form.delivery"/>
              </el-form-item>

              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group class="fix-checkbox" v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"/>
                  <el-checkbox label="地推活动" name="type"/>
                  <el-checkbox label="线下主题活动" name="type"/>
                  <el-checkbox label="单纯品牌曝光" name="type"/>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group class="fix-radio" v-model="form.resource">
                  <el-radio label="线上品牌商赞助"/>
                  <el-radio label="线下场地免费"/>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="优先级" prop="rank">
                <el-slider
                  class="fix-slider"
                  :min="1"
                  :max="5"
                  v-model="form.rank"
                  show-input>
                </el-slider>
              </el-form-item>

              <el-form-item label="活动形式" prop="desc">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 6}"
                  v-model="form.desc">
                </el-input>
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

  validatCover = (rule, value, callback) => {
    if (value instanceof File) {
      const isJPG = value.type === 'image/jpeg'
      const isLt2M = value.size / 1024 / 1024 < 2

      if (!isJPG) {
        return callback(new Error('上传封面图片只能是 JPG 格式!'))
      }
      if (!isLt2M) {
        return callback(new Error('上传封面图片大小不能超过 2MB!'))
      }
      callback()
    } else {
      callback(new Error('请选择活动封面'))
    }
  }

  @moduleActivity.Action submitForm

  handleCoverChange (file) {
    this.cover = file.url
    this.form.cover = file.raw

    // 触发表单验证
    this.$refs.form.validateField('cover')
  }

  onSubmit () {
    this.$refs.form.validate((valid) => {
      if (!valid) return false

      this.isSubmit = true
      this.submitForm(this.form).then(res => {
        this.$message.success('表单上传成功')
        this.isSubmit = false
        // reset form
        this.cover = ''
        this.$refs.form.resetFields()
      })
    })
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>

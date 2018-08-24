<template>
  <article class="fix-article">
    <Card>
      <template slot="head">
        <div>
          <h1>高级表单</h1>
          <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
        </div>
      </template>
    </Card>

    <Card>
      <template slot="head">仓库管理</template>
      <template slot="content">
        <el-row :gutter="10">
          <el-form class="fix-form" ref="form" label-position="top" label-width="80px" :model="form">
            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                label="仓库名"
                prop="name"
                :rules="{
                  required: true,
                  message: '请输入仓库名称',
                  trigger: 'change'
                }">
                <el-input v-model="form.name" placeholder="请输入仓库名称"/>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                class="fix-form-item"
                label="仓库域名"
                prop="url"
                :rules="{
                  required: true,
                  message: '请输入仓库域名',
                  trigger: 'change'
                }">
                <el-input v-model="form.url" placeholder="请输入仓库域名">
                  <template slot="prepend">http://</template>
                  <template slot="append">.com</template>
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                label="仓库管理员"
                prop="manager"
                :rules="{
                  required: true,
                  message: '请选择管理员',
                  trigger: 'change'
                }">
                <el-select
                  class="fix-select"
                  v-model="form.manager"
                  placeholder="请选择管理员">
                  <el-option
                    v-for="item in selectOptions.manager"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                label="审批人"
                prop="reviewer"
                :rules="{
                  required: true,
                  message: '请选择审批人',
                  trigger: 'change'
                }">
                <el-select
                  class="fix-select"
                  v-model="form.reviewer"
                  placeholder="请选择审批人">
                  <el-option
                    v-for="item in selectOptions.reviewer"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                label="生效日期"
                prop="date"
                :rules="{
                  required: true,
                  message: '请选择生效日期范围',
                  trigger: 'change'
                }">
                <el-date-picker
                  class="fix-date-picker"
                  v-model="form.date"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="11" :md="11" :lg="7" :xl="7">
              <el-form-item
                label="仓库类型"
                prop="type"
                :rules="{
                  required: true,
                  message: '请选择仓库类型',
                  trigger: 'change'
                }">
                <el-select
                  class="fix-select"
                  v-model="form.type"
                  placeholder="请选择仓库类型">
                  <el-option
                    v-for="item in selectOptions.type"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </template>
    </Card>

    <Card>
      <template slot="head">成员管理</template>
      <template slot="content">
        <el-table
          :data="member"
          style="width: 100%">
          <el-table-column label="成员姓名">
            <template slot-scope="scope">
              <el-input v-if="scope.row.isEdit" v-model="scope.row.name" size="mini"></el-input>
              <span v-else>{{scope.row.name}}</span>
            </template>
          </el-table-column>

          <el-table-column label="工号">
            <template slot-scope="scope">
              <el-input v-if="scope.row.isEdit" v-model="scope.row.id" size="mini"></el-input>
              <span v-else>{{scope.row.id}}</span>
            </template>
          </el-table-column>

          <el-table-column label="所属部门">
            <template slot-scope="scope">
              <el-input v-if="scope.row.isEdit" v-model="scope.row.department" size="mini"></el-input>
              <span v-else>{{scope.row.department}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                v-if="!scope.row.isEdit"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                v-else
                @click="handleSave(scope.$index, scope.row)">保存</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template slot="foot">
        <div class="table-add" @click="addMember"><i class="el-icon-icon-plus"></i>&emsp;新增成员</div>
      </template>
    </Card>

    <div class="fixed-bar">
      <el-button type="primary"
        :loading="isSubmit"
        @click="onSubmit">
        立即创建
      </el-button>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'

import Card from '@/components/Card'

const moduleRepository = namespace('repository')

@Component({
  components: { Card }
})
export default class BasicForm extends Vue {
  isSubmit = false
  selectOptions = {
    manager: [
      {value: 'Zhangsan', label: '张三'},
      {value: 'Lisi', label: '李四'}
    ],
    reviewer: [
      {value: 'Zhangsan', label: '张三'},
      {value: 'Lisi', label: '李四'}
    ],
    type: [
      {value: 'private', label: '私密'},
      {value: 'public', label: '公开'}
    ]
  }
  form = {
    name: '',
    url: '',
    manager: '',
    reviewer: '',
    date: [],
    type: '',
    member: [
      { name: '王小虎', id: '0001', department: '技术部 C 组' }
    ]
  }

  @moduleRepository.Action submitForm

  get member () {
    const member = this.form.member.map(item => {
      if (!item.hasOwnProperty('isEdit')) {
        this.$set(item, 'isEdit', Object.values(item).includes(''))
      }
      return item
    })
    return member
  }

  handleEdit (index, row) {
    row.isEdit = true
  }

  handleSave (index, row) {
    const isValidate = !Object.values(row).includes('')
    if (isValidate) {
      row.isEdit = false
    } else {
      this.$message.error('请补充完整成员信息')
    }
  }

  handleDelete (index, row) {
    this.form.member.splice(index, 1)
  }

  addMember () {
    this.form.member.push({
      name: '', id: '', department: ''
    })
  }

  onSubmit () {
    this.$refs.form.validate((valid) => {
      console.log(this.form)
      if (!valid) return false

      this.isSubmit = true
      this.submitForm(this.form).then(res => {
        this.$message.success(res.message)
        this.isSubmit = false
        // reset form
        this.$refs.form.resetFields()
        this.form.member = []
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@nn-yy/css-flex/flex';

.fixed-bar {
  @include flex(end);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  padding: 20px 40px;
  border-top: 1px #ebeef5 solid;
  background-color: white;
  z-index: 1111;
}

.table-add {
  display: block;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;
  line-height: 40px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: #545c64;
  }
}

.fix-article {
  margin-bottom: 40px;
  transform: transition3d(0,0,0);
}

.fix-form {
  @include flex(between);
  @include flex-wrap();
}

.fix-form-item {
  /deep/ {
    .el-form-item__content {
      line-height: unset;
    }
  }
}

.fix-select {
  width: 100%;
}

.fix-date-picker {
  width: 100%;
  /deep/ {
    .el-range-separator {
      color: #c0c4cc;
    }
  }
}
</style>

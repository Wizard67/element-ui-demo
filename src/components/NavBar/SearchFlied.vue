<template>
  <el-autocomplete
    ref="searchFiled"
    popper-class="my-autocomplete"
    v-model="searchInput"
    :fetch-suggestions="querySearch"
    placeholder="站内搜索"
    @select="handleSelect"
    @keyup.enter.native="handleSubmit"
  >
  
    <i
      class="el-icon-icon-search el-input__icon fix-icon"
      slot="prefix"
      @click="handleSubmit">
    </i>

    <template slot-scope="{ item }">
      <div class="message">{{ item.message }}</div>
    </template>

  </el-autocomplete>
</template>

<script>
const _createFilter = (queryString, flied) => restaurant => (restaurant[flied].toLowerCase().indexOf(queryString.toLowerCase()) > 0)

export default {
  name: 'SearchFiled',
  props: {
    suggestions: {
      type: Array,
    },
  },
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    querySearch(queryString, cb) {
      const restaurants = this.suggestions
      let results = queryString ? restaurants.filter(_createFilter(queryString, 'message')) : restaurants
      cb(results)
    },
    handleSelect(item) {
      this.searchInput = item.message
    },
    handleSubmit(event) {
      this.searchInput
        ? this.$emit('onSearch', this.searchInput)
        : this.$refs.searchFiled.focus()
    },
  },
}
</script>

<style lang="scss" scoped>
  .fix-icon {
    font-size: 18px;
    color: inherit;
    cursor: pointer;
  }
</style>

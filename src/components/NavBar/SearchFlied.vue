<template>
  <div>
    <i
      class="el-icon-icon-search fix-icon"
      @click="handleSubmit">
    </i>

    <transition name="slide-fade">
      <el-autocomplete
        style="margin-left: 12px;"
        ref="searchFiled"
        popper-class="my-autocomplete"
        v-if="isShow"
        v-model="searchInput"
        :fetch-suggestions="querySearch"
        placeholder="站内搜索"
        @select="handleSelect"
        @keyup.enter.native="handleSubmit"
      >
        <template slot-scope="{ item }">
          <div class="message">{{ item.message }}</div>
        </template>
      </el-autocomplete>
    </transition>
  </div>
</template>

<script>
const _createFilter = (queryString, flied) => restaurant =>
  restaurant[flied].toLowerCase().indexOf(queryString.toLowerCase()) > 0;

export default {
  name: 'SearchFiled',
  props: {
    suggestions: {
      type: Array
    }
  },
  data() {
    return {
      isShow: false,
      searchInput: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      const restaurants = this.suggestions;
      let results = queryString
        ? restaurants.filter(_createFilter(queryString, 'message'))
        : restaurants;
      cb(results);
    },
    handleSelect(item) {
      this.searchInput = item.message;
    },
    handleSubmit() {
      if (this.isShow) {
        this.searchInput
          ? this.$emit('onSearch', this.searchInput)
          : (this.isShow = !this.isShow);
      } else {
        this.isShow = !this.isShow;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fix-icon {
  font-size: 18px;
  color: inherit;
  cursor: pointer;
}
</style>

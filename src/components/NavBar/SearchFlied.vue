<template lang="pug">
  div
    i.el-icon-icon-search.fix-icon(@click="handleSubmit")

    transition(name="slide-fade")
      el-autocomplete.fix-autocomplete(ref="searchFiled"
        popper-class="my-autocomplete"
        v-if="isShow"
        v-model="searchInput"
        :fetch-suggestions="querySearch"
        placeholder="站内搜索"
        @select="handleSelect"
        @keyup.enter.native="handleSubmit")
        template(slot-scope="{ item }")
          .message {{ item.message }}

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
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(60px) position;
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.fix-autocomplete {
  margin-left: 12px;
}

.fix-icon {
  font-size: 18px;
  color: inherit;
  cursor: pointer;
}
</style>

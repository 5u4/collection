<template>
  <a-input-search
    placeholder="Search for an entry"
    v-model="searchInput"
    @search="onSearch"
    @keydown.enter="onSearch"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    onSearch() {
      this.searchInput = "";
    }
  }
});
</script>

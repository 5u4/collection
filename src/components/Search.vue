<template>
  <a-select
    showSearch
    :value="searchInput"
    @search="onSearch"
    @select="onSelect"
    :filterOption="false"
    style="width: 100%"
    :notFoundContent="null"
  >
    <a-icon slot="suffixIcon" type="smile"/>
    <a-select-option v-for="entry in entries" :key="entry.source">{{entry.name}}</a-select-option>
  </a-select>
</template>

<script lang="ts">
import Vue from "vue";
import { SEARCH_QUERY } from "@/queries/search";

export default Vue.extend({
  apollo: {
    entries: {
      query: SEARCH_QUERY,
      variables() {
        return {
          keyword: this.searchInput
        };
      },
      debounce: 300,
      update(data) {
        if (this.searchInput === "") {
          return [];
        }

        return data.entries;
      }
    }
  },
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    onSearch(value: string) {
      this.searchInput = value;
    },
    onSelect(url: string) {
      window.open(url, "_blank");
    }
  }
});
</script>

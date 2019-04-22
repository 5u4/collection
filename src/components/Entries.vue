<template>
  <a-list itemLayout="horizontal" :dataSource="entries" :pagination="pagination">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.source">{{item.name}}</a>
        <a-avatar slot="avatar" :src="getFavicon(item.source)"/>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import Vue from "vue";
import { parse } from "url";
import { ENTRIES_QUERY } from "@/queries/entries";

const faviconParseUrl = "https://api.faviconkit.com/";

export default Vue.extend({
  apollo: {
    entries: ENTRIES_QUERY
  },
  data() {
    return {
      pagination: {
        onChange: (page: number) => {
          console.log(page);
        },
        pageSize: 20
      }
    };
  },
  methods: {
    getFavicon(url: string) {
      const hostname = parse(url).hostname;
      return `${faviconParseUrl}${hostname}/144`;
    }
  }
});
</script>

<style scoped>
.ant-list-item-meta-title,
.ant-list-item-meta-description {
  text-align: left !important;
}
</style>

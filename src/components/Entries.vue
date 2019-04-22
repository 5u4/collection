<template>
  <div>
    <a-list itemLayout="horizontal" :dataSource="entries">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="item.description">
          <a slot="title" :href="item.source">{{item.name}}</a>
          <a-avatar slot="avatar" :src="getFavicon(item.source)"/>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-pagination :total="50" :pageSize="10" @change="onChange"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { parse } from "url";
import { ENTRIES_QUERY } from "@/queries/entries";

const faviconParseUrl = "https://api.faviconkit.com/";

export default Vue.extend({
  apollo: {
    entries: {
      query: ENTRIES_QUERY,
      variables() {
        return { page: this.page };
      },
      fetchPolicy: "cache-and-network"
    }
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    getFavicon(url: string) {
      const hostname = parse(url).hostname;
      return `${faviconParseUrl}${hostname}/144`;
    },
    onChange(page: number) {
      this.page = page;
      window.scrollTo(0, 0);
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

<template>
  <a-card>
    <a-layout v-if="ping">
      <a-layout-header>
        <search/>
      </a-layout-header>
      <a-layout-content>
        <entries/>
      </a-layout-content>
    </a-layout>
    <div v-else style="margin-top: 12px;">Sorry, server is currently unavailable.</div>
  </a-card>
</template>

<script lang="ts">
import Vue from "vue";
import { PING_QUERY } from "@/queries/ping";
import Search from "@/components/Search.vue";
import Entries from "@/components/Entries.vue";

export default Vue.extend({
  apollo: {
    ping: PING_QUERY
  },
  components: {
    Search,
    Entries
  }
});
</script>

<style>
body {
  padding: 10px;
  background-color: #fdfbfb !important;
}
.ant-card {
  max-width: 800px;
  margin: 0 auto 10px auto !important;
  background-color: #fdfbfb !important;
}
.ant-card-body {
  padding-top: 0px !important;
  padding-bottom: 15px !important;
}
.ant-layout-header,
.ant-layout-content {
  background-color: #fdfbfb !important;
  padding: 0px !important;
}
</style>

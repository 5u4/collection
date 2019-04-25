<template>
  <a-card>
    <a-layout v-if="ping">
      <a-layout-header>
        <search/>
      </a-layout-header>
      <a-layout-content>
        <entries/>
        <set-permit/>
        <div v-if="permit">
          <add/>
          <add-suggest/>
        </div>
      </a-layout-content>
    </a-layout>
    <div v-else style="margin-top: 12px;">Sorry, server is currently unavailable.</div>
  </a-card>
</template>

<script lang="ts">
import Vue from "vue";
import { PING_QUERY } from "@/queries/ping";
import { PERMIT_QUERY } from "@/queries/permit";
import Search from "@/components/Search.vue";
import Entries from "@/components/Entries.vue";
import Add from "@/components/Add.vue";
import AddSuggest from "@/components/AddSuggest.vue";
import SetPermit from "@/components/SetPermit.vue";

export default Vue.extend({
  apollo: {
    ping: { query: PING_QUERY, errorPolicy: "all" },
    permit: { query: PERMIT_QUERY, errorPolicy: "all" }
  },
  data() {
    return {
      ping: "umm",
      permit: false
    };
  },
  components: {
    Search,
    Entries,
    Add,
    AddSuggest,
    SetPermit
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

<template>
  <a-card>
    <a-layout>
      <a-layout-header>
        <search/>
      </a-layout-header>
      <a-layout-content>
        <entries/>
      </a-layout-content>
    </a-layout>
  </a-card>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";
import Entries from "@/components/Entries.vue";

export default Vue.extend({
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
  margin: auto !important;
  background-color: #fdfbfb !important;
}
.ant-card-body {
  padding-top: 0px !important;
  padding-bottom: 15px !important;
}
.ant-layout-header,
.ant-layout-content {
  text-align: center;
  background-color: #fdfbfb !important;
  padding: 0px !important;
}
</style>

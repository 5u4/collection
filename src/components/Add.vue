<template>
  <div>
    <a-modal v-model="visible" :footer="null" :closable="false">
      <a-input v-model="source" @keydown.enter="addEntry">
        <a-icon slot="suffix" type="plus-circle"/>
      </a-input>
    </a-modal>
    <a-button type="primary" shape="circle" icon="plus" size="large" @click="showModal"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ADD_ENTRY_QUERY } from "@/queries/addEntry";

export default Vue.extend({
  data() {
    return {
      visible: false,
      source: ""
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    addEntry() {
      this.$apollo.mutate({
        mutation: ADD_ENTRY_QUERY,
        variables: {
          source: this.source
        }
      });
      this.source = "";
    }
  }
});
</script>

<style scoped>
.ant-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>

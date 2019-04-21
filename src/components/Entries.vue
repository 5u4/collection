<template>
  <a-list itemLayout="horizontal" :dataSource="data" :pagination="pagination">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta description="Description">
        <a slot="title" href="localhost:8080">{{item.title}}</a>
        <a-avatar slot="avatar" src="favicon.ico"/>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import Vue from "vue";

const data = [{ title: "title1" }, { title: "title2" }];

export default Vue.extend({
  data() {
    return {
      data,
      pagination: {
        onChange: (page: number) => {
          console.log(page);
        },
        pageSize: 20
      }
    };
  }
});
</script>

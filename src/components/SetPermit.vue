<template></template>

<script lang="ts">
import Vue from "vue";
import { SET_PERMIT_QUERY } from "@/queries/setPermit";

export default Vue.extend({
  created() {
    const url = window.location.href.split("?");

    if (url.length < 2 || url[1] !== "permit") {
      return;
    }

    this.processClipBoard();
  },
  methods: {
    processClipBoard() {
      const clipboard = (navigator as any).clipboard;

      if (!clipboard) {
        return;
      }

      clipboard.readText().then((text: string) => {
        if (!/^secret:[\w-]*/.test(text)) {
          return;
        }

        const token = text.substr(7);
        this.setPermit(token);
        clipboard.writeText("");
      });
    },
    setPermit(token: string) {
      this.$apollo.mutate({
        mutation: SET_PERMIT_QUERY,
        variables: {
          token
        }
      });

      location.reload();
    }
  }
});
</script>

<template></template>

<script lang="ts">
import Vue from "vue";
import { ADD_ENTRY_QUERY } from "@/queries/addEntry";
import { isUrl } from "@/utils/isUrl";

export default Vue.extend({
  created() {
    addEventListener("focus", () => {
      this.processClipBoard();
    });

    this.processClipBoard();
  },
  methods: {
    processClipBoard() {
      const clipboard = (navigator as any).clipboard;

      if (!clipboard) {
        return;
      }

      clipboard.readText().then((text: string) => {
        if (!text || !isUrl(text)) {
          return;
        }

        this.openNotification(text);
      });
    },
    openNotification(url: string) {
      const urlDisplay = url.length > 45 ? `${url.substr(0, 45)}...` : url;
      const key = `open${Date.now()}`;
      this.$notification.open({
        placement: "bottomLeft",
        message: "Add url to dictionary",
        description: urlDisplay,
        key,
        btn: (h: any) => {
          return h(
            "a-button",
            {
              props: {
                type: "primary"
              },
              on: {
                click: () => {
                  this.addEntry(url);
                  this.$notification.close(key);
                }
              }
            },
            "Add"
          );
        }
      });
    },
    addEntry(source: string) {
      this.$apollo.mutate({
        mutation: ADD_ENTRY_QUERY,
        variables: {
          source
        }
      });
    }
  }
});
</script>

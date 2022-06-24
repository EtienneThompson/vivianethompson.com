<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Are you the Millionaire Next Door?
          </v-card-title>
        </v-row>

        <v-layout>
          <v-flex>
            <!-- Fixed image size (larger windows) -->
            <img align="left" width="400px" src="@/assets/services/millionaire_next_door/millionaire.jpg" class="pa-2" v-if="windowSize >= 500" />
            <!-- Dynamic image size (smaller windows) -->
            <img align="center" width="100%" src="@/assets/services/millionaire_next_door/millionaire.jpg" class="pa-2" v-else />
            <!-- Page text -->
            <page-text></page-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>

import page_text from "@/components/services/millionaire_next_door/page_text.vue";

export default {
  components: {
    "page-text": page_text,
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Are you the Millionaire Next Door?",
      meta: [
        { name: "description", content: "Are you the Millionaire Next Door? Formula to determine if you are wealthy." },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" },
      ]
    }
  },
  methods: {
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_smd");
  }
};
</script>
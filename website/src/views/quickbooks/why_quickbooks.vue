<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="dollarGreen--text text-h4 font-weight-bold">Why QuickBooks?</v-card-title>
        </v-row>

        <v-layout>
          <v-flex>
            <!-- Panels -->
            <panels></panels>
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

import panels from "@/components/quickbooks/why_quickbooks/panels.vue";

export default {
  components: {
    "panels": panels,
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Why QuickBooks?",
      meta: [
        { name: "description", content: "QuickBooks is the ideal accounting software for small businesses and families." },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" },
      ]
    }
  },
  data: function() {
    return {};
  },
  mounted: function() {
    this.$store.commit("visit_qwq");
  },
};
</script>
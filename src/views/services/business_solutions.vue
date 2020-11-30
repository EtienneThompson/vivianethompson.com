<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">Business Solutions</v-card-title>
        </v-row>

        <v-layout>
          <v-flex>
            <!-- Fixed image size (Larger windows) -->
            <img align="left" width="410px" src="@/assets/services/business_solutions/business_solutions.jpg" class="pa-2" v-if="windowSize >= 500" />
            <!-- Dynamic image size (Smaller windows) -->
            <img justify="center" width="100%" src="@/assets/services/business_solutions/business_solutions.jpg" class="pa-2" v-else />
            <!-- Page text that is always the same -->
            <page-text></page-text>

            <!-- Conditional text rendering -->
            <!-- Larger windows (horizontal alignment) -->
            <v-row v-if="windowSize >= 450">
              <v-col>
                <column1></column1>
              </v-col>
              <v-col>
                <column2></column2>
              </v-col>
            </v-row>

            <!-- Smaller windows (vertical alignment) -->
            <v-row class="pa-2" v-else>
              <column1></column1>
              <column2></column2>
            </v-row>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .tab {
    display:inline-block;
    margin-left: 2.5em;
  }
  .tab2 {
    display:inline-block;
    margin-left: 5em;
  }
  .center {
    margin: 0 auto;
  }
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>

import page_text from "@/components/services/business_solutions/page_text.vue";
import column1 from "@/components/services/business_solutions/column1.vue";
import column2 from "@/components/services/business_solutions/column2.vue";

export default {
  components: {
    "page-text": page_text,
    "column1": column1,
    "column2": column2,
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Business Solutions",
      meta: [
        { name: "description", content: "Expert advice for all your accounting needs. Troubleshoot accounting issues. Periodical controller: fulfill controller duties as needed. Personal accounting for busy families and professionals." },
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

    this.$store.commit("visit_sbs");
  },
};
</script>
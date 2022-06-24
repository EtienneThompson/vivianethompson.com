<template>
  <v-container>
    <v-flex>
      <v-row>
        <v-card outlined>
          <!-- Card title -->
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">Business Taxes</v-card-title>
          </v-row>

          <v-layout>
            <v-flex>
              <!-- Fixed image size (larger windows) -->
              <img align="left" width="400px" src="@/assets/services/income_taxes/income_taxes.jpg" class="pa-2" v-if="windowSize >= 500" />
              <!-- Dynamic image size (smaller windows) -->
              <img align="center" width="100%" src="@/assets/services/income_taxes/income_taxes.jpg" class="pa-2" v-else />
              <!-- Business Taxes card text -->
              <bt-page-text></bt-page-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>

      <v-row class="pt-2">
        <v-card outlined>
          <!-- Card title -->
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">Personal Taxes</v-card-title>
          </v-row>

          <v-layout>
            <v-flex>
              <!-- First paragraph text -->
              <pt-page-text-1></pt-page-text-1>
              <!-- Fixed image size (larger windows) -->
              <img align="right" width="410px" src="@/assets/services/income_taxes/personal_taxes.jpg" class="pa-2" v-if="windowSize >= 500" />
              <!-- Dynamic image size (smaller windows) -->
              <img align="center" width="100%" src="@/assets/services/income_taxes/personal_taxes.jpg" class="pa-2" v-else />
              <!-- Second paragraph text -->
              <pt-page-text-2></pt-page-text-2>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .centered {
    margin: 0 auto;
  }
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>

import bt_page_text from "@/components/services/income_taxes/bt_page_text.vue";
import pt_page_text_1 from "@/components/services/income_taxes/pt_page_text_1.vue";
import pt_page_text_2 from "@/components/services/income_taxes/pt_page_text_2.vue";

export default {
  components: {
    "bt-page-text": bt_page_text,
    "pt-page-text-1": pt_page_text_1,
    "pt-page-text-2": pt_page_text_2,
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Income taxes",
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

    this.$store.commit("visit_sit");
  },
};
</script>
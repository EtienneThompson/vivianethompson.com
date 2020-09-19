<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">Personal Finance & Accounting</v-card-title>
        </v-row>

        <v-layout>
          <v-flex>
            <!-- Fixed image size (larger windows) -->
            <img align="left" aspect-ratio="1.49" src="@/assets/services/personal_finance/personal_finance.jpg" width="410px" class="pa-2" v-if="windowSize >= 500" />
            <!-- Dynamic image size (smaller windows) -->
            <img justify="center" aspect-ratio="1.49" src="@/assets/services/personal_finance/personal_finance.jpg" width="100%" class="pa-2" v-else />
            <!-- Page text -->
            <page-text></page-text>
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
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>

import page_text from "@/components/services/personal_finance/page_text.vue";

export default {
  components: {
    "page-text": page_text,
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  methods: {
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_spf");
  },
};
</script>
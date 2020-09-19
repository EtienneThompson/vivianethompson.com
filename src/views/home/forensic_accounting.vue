<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Forensic Accounting
          </v-card-title>
        </v-row>

        <!-- Smaller window size images takes up entire row -->
        <v-row justify="center" v-if="windowSize < 800">
          <v-col>
            <v-img align="left" class="pa-2" src="@/assets/home/forensic_accounting/forensic_accounting_landscape.jpg" width="100%"></v-img>
          </v-col>
        </v-row>

        <v-layout>
          <v-flex>
            <v-row v-if="windowSize >= 450">
              <!-- Larger window size image is in a column -->
              <v-col v-if="windowSize >= 800">
                <img align="left" aspect-ratio="0.761" class="pl-10" height="400px" src="@/assets/home/forensic_accounting/forensic_accounting_portrait.jpg" />
              </v-col>
              <!-- Larger window size (horizontal alignment) -->
              <v-col>
                <column1></column1>
              </v-col>
              <v-col>
                <column2></column2>
              </v-col>
            </v-row>

            <!-- Smaller window size (vertical alignment) -->
            <v-row v-else>
              <v-col>
                <column1></column1>
                <column2></column2>
              </v-col>
            </v-row>
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

import column1 from "@/components/home/forensic_accounting/column1.vue";
import column2 from "@/components/home/forensic_accounting/column2.vue";

export default {
  components: {
    "column1": column1,
    "column2": column2,
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

    this.$store.commit("visit_foracc");
  }
};
</script>
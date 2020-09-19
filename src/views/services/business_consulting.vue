<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">Business Consulting</v-card-title>
        </v-row>

        <!-- Smaller windows have image take up entire row -->
        <v-row justify="center" v-if="windowSize < 800">
          <v-col>
            <v-img aspect-ratio="1.958" class="pa-1" src="@/assets/services/business_consulting/covid_business_consulting_landscape.jpg" width="100%"></v-img>
          </v-col>
        </v-row>

        <v-layout>
          <v-flex>
            <v-row>
              <!-- Larger windows have image be a single column -->
              <v-col cols="4" v-if="windowSize > 800">
                <v-row justify="center">
                  <img align="left" aspect-ratio="0.77" class="pa-2" height="376px" src="@/assets/services/business_consulting/covid_business_consulting_portrait.jpg" />
                </v-row>
              </v-col>

              <!-- Larger windows (horizontal alignment) -->
              <v-col v-if="windowSize > 490">
                <v-row>
                  <v-col>
                    <business-owner :breaker="false"></business-owner>
                    <turn-around></turn-around>
                  </v-col>
                  <v-col>
                    <expert-witness></expert-witness>
                    <budgets></budgets>
                  </v-col>
                </v-row>
              </v-col>

              <!-- Smaller windows (vertical alignment) -->
              <v-col v-if="windowSize <= 490">
                <business-owner :breaker="true"></business-owner>
                <turn-around></turn-around>
                <expert-witness></expert-witness>
                <budgets></budgets>
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

import business_owner from "@/components/services/business_consulting/business_owner.vue";
import turn_around from "@/components/services/business_consulting/turn_around.vue";
import budgets from "@/components/services/business_consulting/budgets.vue";
import expert_witness from "@/components/services/business_consulting/expert_witness.vue";

export default {
  components: {
    "business-owner": business_owner,
    "turn-around": turn_around,
    "budgets": budgets,
    "expert-witness": expert_witness,
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

    this.$store.commit("visit_sbc");
  },
};
</script>
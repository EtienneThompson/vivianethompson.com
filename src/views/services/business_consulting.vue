<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">Business Consulting</v-card-title>
        </v-row>
        <v-row justify="center" v-if="windowSize < 800">
          <img class="pa-2" src="@/assets/services/business_consulting/puzzle_dollar.jpg" />
        </v-row>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-if="windowSize > 800">
                <img align="left" class="pa-2" src="@/assets/services/business_consulting/puzzle_dollar.jpg" width="100%" />
              </v-col>
              <v-col>
                <p class="pa-2">
                  <span class="font-weight-bold">Soon to be Business Owner</span><br/>
                  - Preparation of business plan<br/>
                  - Setting up and "running a business" advice<br/>
                  - Assistance in preparing a business loan application <br/><br/>
                  <span class="font-weight-bold">Turn Around Services</span><br/>
                  - Analysis of current financial and cash flow situation<br/>
                  - Top down and bottom up analyses of management and processes<br/>
                  - Implementation of new strategies: sales, product mix, inventory, human resources<br/>
                  - Debt analysis and renegotiation<br/><br/>
                </p>
              </v-col>
              <v-col>
                <p class="pa-2">
                  <span class="font-weight-bold">Budgets</span><br/>
                  - Preparation of accurate, usable and measurable budgets<br/>
                  - Follow up and revisions of budgets<br/><br/><br/>
                  <span class="font-weight-bold">Expert Witness</span><br/>
                  - Analysis of issues<br/>
                  - Detailed report issues if necessary<br/>
                  - Deposition and court appearances
                </p>
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
export default {
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
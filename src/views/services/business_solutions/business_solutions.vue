<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">Business Solutions</v-card-title>
        </v-row>
        <v-layout>
          <v-flex>
            <img align="left" src="@/assets/services/business_solutions/pencil_writing.jpg" class="pa-2" />
            <p class="pa-2">
              A successful business can be defined in many ways, however in its
              simplest term it is a business that is profitable for its owners.
              Unfortunately, most small business owners don't know whether they
              are profitable. To many, the only indication of their profitability
              is the growing size of their balance.<br/><br/>
              Our firm helps small businesses build systems and procedures using
              the "bottom up" approach to answer fundamental business questions:
              is my business profitable? Am I doing better than last year? How
              can I grow my business? Am I in compliance with Uncle Sam?<br/><br/>
              Our mission is to make sure that our clients sleep at night.<br/><br/>
              How do we help you achieve these goals? First, we look at your accounting
              procedures and fix them. Then, we help you become a better
              businessperson or your people in becoming better associates. We
              constantly assess your needs and strive for better results.<br/><br/>
              We provide accounting and bookkeeping solutions to free you up to
              do what you do best: talk to your customers, sell your goods, negotiate
              with your vendors, or take your day off.<br/><br/>
              Last but not least, we provide you with business advice based on
              data analysis (budgets for example) so that you can implement
              improvement and make more money.<br/><br/>
              <span class="text-center font-weight-bold text-h4">
                Businesses that are well-organized and efficient:
              </span><br/>
              <span class="tab">
                - Maintain excellent records<br/>
                - Manage cash flow<br/>
                - Use financial budgets<br/>
                - Control payroll and employees<br/>
                - Use policies and procedures<br/><br/>
              </span><br/>
              <span class="font-weight-bold text-h4">Here are areas of business that we may become involved in:</span><br/>
            </p>
            <v-row v-if="windowSize >= 450">
              <v-col>
                <column1></column1>
              </v-col>
              <v-col>
                <column2></column2>
              </v-col>
            </v-row>
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

import column1 from "./column1.vue";
import column2 from "./column2.vue";

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

    this.$store.commit("visit_sbs");
  },
};
</script>
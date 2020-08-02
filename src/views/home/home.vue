<template>
  <v-container>
    <!-- Top Card -->
    <v-row>
      <v-flex>
        <v-card outlined>
          <v-img height="300px" src="@/assets/home/main_card.jpg" v-if="windowSize < 800"></v-img>
          <div class="d-flex flex-no-wrap">
            <div>
              <v-card-title class="dollarGreen--text text-h5">
                <v-flex>
                  Value Accounting and Taxes Done for YOU
                </v-flex>
              </v-card-title>
              <v-card-subtitle
                class="ocean--text text-h6"
              >Businesses and Families that have a Personal & Professional Account:</v-card-subtitle>
              <v-card-text class="text-body-1">
                -Save time and energy
                <br />-Are more organized
                <br />-Know exactly their financial situation
                <br />-Plan better for the future
                <br />-Are better prepared for tax time
                <br />-Concentrate on what they know best
                <br />-Leave the accounting to the professionals
              </v-card-text>
            </div>
            <v-img height="300px" src="@/assets/home/main_card.jpg" v-if="windowSize > 800"></v-img>
          </div>
        </v-card>
      </v-flex>
    </v-row>

    <!-- Bottom Left Card -->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-img height="150px" src="@/assets/home/business_solutions.jpg"></v-img>
          <v-card-title class="ocean--text">Business Solutions</v-card-title>
          <v-card-text>
            Our firm provides tools to organize, manage and control the accounting and finances of your small business. We become the periodic business manager or controller, and provide you with business and financial advice in all areas of your business.
            <br />
            <br />Would you like to know more about how we can help you with QuickBooks?
          </v-card-text>
          <v-card-actions>
            <v-btn color="dollarGreen" @click="route('/services/business_solutions');">
              Read More...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Bottom Center Card -->
      <v-col>
        <v-card outlined>
          <v-img height="150px" src="@/assets/home/taxes.jpg"></v-img>
          <v-card-title class="ocean--text">Taxes</v-card-title>
          <v-card-text>
            We prepare personal and business income taxes for you and your family paying attention to ways we can reduce your tax bill by making sure all the deductions and credits are applied.
            <br />
            <br />
            <br />We also take a long term view that a short term tax break is not necessarily in your best interest.
          </v-card-text>
          <v-card-actions>
            <v-btn color="dollarGreen" @click="route('/services/income_taxes');">
              Read More...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Bottom Right Card -->
      <v-col>
        <v-card outlined>
          <v-img height="150px" src="@/assets/home/forensic_accounting.jpg"></v-img>
          <v-card-title class="ocean--text">Forensic Accounting</v-card-title>
          <v-card-text>
            Forensic accounting is not just about financial crimes.
            <br />We reconstruct your financial documents using auditing and investigative skills to help you get resolution and closure. No matter how far back you need to look, we take your financial information and present it in a manner that you and others can understand.
          </v-card-text>
          <v-card-actions>
            <v-btn color="dollarGreen" @click="route('/forensic_accounting');">
              Read More...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
    route: function(path) {
      this.$router.push(path);
    },
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    // Increment traffic for analytics.
    this.$store.commit("visit_home");
  },
};
</script>
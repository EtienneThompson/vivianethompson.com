<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Forensic Accounting
          </v-card-title>
        </v-row>
        <v-row justify="center" v-if="windowSize < 800">
          <img align="left" class="pa-2" src="@/assets/home/forensic_accounting/pot_of_books.jpg" />
        </v-row>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-if="windowSize > 800">
                <img align="left" class="pl-10" src="@/assets/home/forensic_accounting/pot_of_books.jpg" width="100%" />
              </v-col>
              <v-col>
                <p>
                  <span class="font-weight-bold">
                    Financial and accounting fraud investigation
                  </span><br/>
                  - Employee theft and embezzlement<br/>
                  - Theft of firm's assets (cash, inventory, etc)<br/>
                  - Reconstruction of past records<br/>
                  - Kickback schemes<br/>
                  - Insurance fraud<br/>
                  - Billing schemes<br/>
                  - Money laundering<br/><br/>
                  <span class="font-weight-bold">
                    Marital dispute and dissolutions (divorce)
                  </span><br/>
                  - Evaluation and disclosure of assets<br/>
                  - Reconctruction of asset activity<br/>
                </p>
              </v-col>
              <v-col>
                <p>
                  <span class="font-weight-bold">
                    Probate matters
                  </span><br/>
                  - Fiduciary use of funds<br/>
                  - Intellectual property disputes<br/>
                  - Breach of contract<br/><br/>
                  <span class="font-weight-bold">
                    Financially related disputes
                  </span><br/>
                  - Litigation support<br/>
                  - Royalty payment disputes<br/><br/>
                  <span class="font-weight-bold">
                    Expert witness
                  </span><br/>
                  - Litigation support
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

    this.$store.commit("visit_foracc");
  }
};
</script>
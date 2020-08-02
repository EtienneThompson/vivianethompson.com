<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <v-row>
          <business-solutions :size="windowSize"></business-solutions>
        </v-row>
        <v-row v-if="windowSize >= 600">
          <v-col cols="6">
            <forensic-accounting></forensic-accounting>
          </v-col>
          <v-col cols="6">
            <personal-accounting></personal-accounting>
          </v-col>
        </v-row>
        <v-row v-else>
          <forensic-accounting></forensic-accounting>
          <personal-accounting></personal-accounting>
        </v-row>
        <v-row>
          <v-col>
            <v-expansion-panels accordion flat hover>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-row justify="starts">
                    I have other questions!
                  </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Feel free to
                  <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline dollarGreen--text">email</a>
                  or better yet, to
                  <a href="/contact" class="text-decoration-underline dollarGreen--text">call</a>
                  &nbsp; me. As long as I am not working with a client, I'll answer the
                  phone.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
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
import business_solutions from "@/components/faqs/business_solutions/business_solutions.vue";
import forensic_accounting from "@/components/faqs/forensic_accounting.vue";
import personal_accounting from "@/components/faqs/personal_accounting.vue";

export default {
  components: {
    "business-solutions": business_solutions,
    "forensic-accounting": forensic_accounting,
    "personal-accounting": personal_accounting,
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

    this.$store.commit("visit_faq");
  },
};
</script>
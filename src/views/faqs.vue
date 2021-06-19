<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Business Solutions FAQs -->
        <v-row>
          <business-solutions :size="windowSize"></business-solutions>
        </v-row>

        <v-row justify="center">
          <v-col cols="6">
            <v-img
              contain
              height="300px"
              src="@/assets/faqs/accounting_humor.jpg"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <v-img
              contain
              height="300px"
              src="@/assets/faqs/tax_preparation_joke.jpg"
            ></v-img>
          </v-col>
        </v-row>

        <!-- Larger windows (two columns) -->
        <v-row v-if="windowSize >= 600">
          <v-col cols="6">
            <forensic-accounting></forensic-accounting>
          </v-col>
          <v-col cols="6">
            <personal-accounting></personal-accounting>
          </v-col>
        </v-row>

        <!-- Smaller windows (one column) -->
        <v-row v-else>
          <forensic-accounting></forensic-accounting>
          <personal-accounting></personal-accounting>
        </v-row>

        <!-- Final contact panel -->
        <v-row>
          <contact></contact>
        </v-row>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
import business_solutions from "@/components/faqs/business_solutions/business_solutions.vue";
import forensic_accounting from "@/components/faqs/forensic_accounting.vue";
import personal_accounting from "@/components/faqs/personal_accounting.vue";
import contact from "@/components/faqs/contact.vue";

export default {
  components: {
    "business-solutions": business_solutions,
    "forensic-accounting": forensic_accounting,
    "personal-accounting": personal_accounting,
    "contact": contact
  },
  data: function() {
    return {
      windowSize: Number
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - FAQs",
      meta: [
        {
          name: "description",
          content:
            "Expert advice for all your accounting needs. Troubleshoot accounting issues. Periodical controller: fulfill controller duties as needed. Personal accounting for busy families and professionals."
        },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" }
      ]
    };
  },
  methods: {
    route: function(path) {
      this.$router.push(path).catch(error => {
        if (
          error.name !== "NavigationDuplicated" &&
          !error.mesage.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          console.log(error);
        }
      });
    },
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_faq");
  }
};
</script>

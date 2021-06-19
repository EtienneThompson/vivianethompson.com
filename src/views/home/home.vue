<template>
  <v-container>
    <!-- Top Card -->
    <v-row>
      <v-flex>
        <value-accounting :size="windowSize"></value-accounting>
      </v-flex>
    </v-row>

    <!-- Larger window size (horizontal alignment) -->
    <v-row v-if="windowSize >= 800">
      <!-- Bottom Left Card -->
      <business-solutions :size="windowSize"></business-solutions>

      <!-- Bottom Center Card -->
      <taxes :size="windowSize"></taxes>

      <!-- Bottom Right Card -->
      <forensic-accounting :size="windowSize"></forensic-accounting>
    </v-row>

    <!-- Smaller window size (vertical alignment) -->
    <div v-else>
      <v-row>
        <business-solutions :size="windowSize"></business-solutions>
      </v-row>
      <v-row>
        <taxes :size="windowSize"></taxes>
      </v-row>
      <v-row>
        <forensic-accounting :size="windowSize"></forensic-accounting>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
import value_accounting from "@/components/home/home/value_accounting.vue";
import business_solutions from "@/components/home/home/business_solutions.vue";
import taxes from "@/components/home/home/taxes.vue";
import forensic_accounting from "@/components/home/home/forensic_accounting.vue";

export default {
  components: {
    "value-accounting": value_accounting,
    "business-solutions": business_solutions,
    taxes: taxes,
    "forensic-accounting": forensic_accounting,
  },
  data: function() {
    return {
      windowSize: 0,
    };
  },
  methods: {
    route: function(path) {
      this.$router.push(path);
    },
    resize: function() {
      this.windowSize = window.innerWidth;
    },
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    // Increment traffic for analytics.
    this.$store.commit("visit_home");
  },
};
</script>

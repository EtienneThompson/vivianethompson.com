<template>
  <v-container>
    <v-row justify="center">
      <v-card-title class="dollarGreen--text text-h4 font-weight-bold">Frequently Asked Questions</v-card-title>
    </v-row>
    <v-row justify="center">
      <v-card-title class="ocean--text text-h5 font-weight-bold">Business Solutions</v-card-title>
    </v-row>
    <v-layout>
      <v-flex>
        <v-row v-if="size >= 600">
          <v-col cols="6">
            <column1></column1>
          </v-col>
          <v-col cols="6">
            <column2></column2>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col>
            <column1></column1>
            <column2></column2>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
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
    return {};
  },
  props: {
    size: Number,
  }
}
</script>
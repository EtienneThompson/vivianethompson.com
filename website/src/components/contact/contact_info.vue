<template>
  <v-container>
    <v-row class="ma-0" justify="center">
      <v-card-title class="dollarGreen--text text-h4 font-weight-bold text-center">Thompson Accounting Company, PLLC</v-card-title>
    </v-row>
    <v-card-subtitle class="darkGreen--text text-h5 font-weight-bold text-center">Viviane Thompson, CPA</v-card-subtitle>
    <v-card-text class="text-body-1 text-center">
      1643 N Alvernon, Suite 104<br/>
      Tucson, AZ 85712<br/><br/>
      Office: (520) 822-8208<br/>
      Cell: (520) 481-8015<br/><br/>
      <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline dollarGreen--text">vthompson@vivianethompson.com</a>
    </v-card-text>
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
    return {};
  }
};
</script>

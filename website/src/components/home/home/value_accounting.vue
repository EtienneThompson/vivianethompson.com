<template>
  <v-card outlined>
    <v-img aspect-ratio="1.5" height="300px" src="@/assets/home/tightrope.jpg" v-if="size < 800"></v-img>
    <div class="d-flex flex-no-wrap">
      <div>
        <v-card-title class="dollarGreen--text text-h4">
          <v-flex>
            <!--Value Accounting and Taxes Done for YOU -->
            Does your accounting ever feel like this?
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
      <v-img height="300px" width="450px" position="center 20%" src="@/assets/home/tightrope.jpg" v-if="size >= 800"></v-img>
    </div>
  </v-card>
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
  },
  props: {
    size: Number,
  },
};
</script>
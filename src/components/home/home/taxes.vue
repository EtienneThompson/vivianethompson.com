<template>
  <v-col :cols="size >= 800 ? '4' : '12'">
    <v-card outlined @click="route('/services/income_taxes');">
      <v-img height="150px" src="@/assets/home/receipts.jpg"></v-img>
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
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    route: function(path) {
      this.$router.push(path);
    }
  },
  props: {
    size: Number,
  }
};
</script>
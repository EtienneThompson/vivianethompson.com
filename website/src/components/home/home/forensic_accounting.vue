<template>
  <v-col :cols="size >= 800 ? '4' : '12'">
    <v-card outlined>
      <div @click="route('/forensic_accounting')">
        <v-img
          height="150px"
          src="@/assets/home/forensic_accounting.jpg"
        ></v-img>
      </div>
      <v-card-title class="ocean--text">Forensic Accounting</v-card-title>
      <v-card-text>
        Forensic accounting is not just about financial crimes.
        <br />
        We reconstruct your financial documents using auditing and
        investigative skills to help you get resolution and closure. No matter
        how far back you need to look, we take your financial information and
        present it in a manner that you and others can understand.
      </v-card-text>
      <v-card-actions>
        <v-btn color="dollarGreen" @click="route('/forensic_accounting')">
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
    }
  },
  props: {
    size: Number
  }
};
</script>

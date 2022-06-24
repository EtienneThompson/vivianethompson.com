<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn normal text v-bind="attrs" v-if="size > 800" v-on="on">
          Services
        </v-btn>
        <v-btn small text v-bind="attrs" v-else v-on="on">
          Services
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="route('/services/business_consulting')">
          <v-list-item-title>Business Consulting</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/services/business_solutions')">
          <v-list-item-title>Business Solutions</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/services/income_taxes')">
          <v-list-item-title>Income Taxes</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/services/personal_finance')">
          <v-list-item-title>Personal Finance</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
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

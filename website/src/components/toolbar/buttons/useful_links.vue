<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Useful Links
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="route('/links/general_info')">
          <v-list-item-title
            >General Tax and Business Information</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="route('/links/employee_related')">
          <v-list-item-title>Employee Related</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/required_posters')">
          <v-list-item-title>Required Posters</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/employer_tax_return')">
          <v-list-item-title>Employer Tax Return Forms</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/az_sales_tax')">
          <v-list-item-title>Sales Tax in Arizona</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/tucson_sales_tax')">
          <v-list-item-title>Sales Tax in Tucson, AZ</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/grow_your_business')">
          <v-list-item-title>Grow Your Business</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/retirement_plans')">
          <v-list-item-title>Retirement Plans</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/tax_forms')">
          <v-list-item-title>Important Tax Forms</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/useful_websites')">
          <v-list-item-title>Other Useful Websites</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/links/forms')">
          <v-list-item-title>Forms</v-list-item-title>
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
        } else {
          this.$emit("close_menu_modal");
        }
      });
    }
  }
};
</script>

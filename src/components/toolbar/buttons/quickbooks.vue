<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn normal text v-bind="attrs" v-if="size >= 800" v-on="on">
          QuickBooks
        </v-btn>
        <v-btn small text v-bind="attrs" v-else v-on="on">
          QuickBooks
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="route('/quickbooks/best_or_beast')">
          <v-list-item-title>Best or Beast?</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/quickbooks/why')">
          <v-list-item-title>Why QuickBooks?</v-list-item-title>
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

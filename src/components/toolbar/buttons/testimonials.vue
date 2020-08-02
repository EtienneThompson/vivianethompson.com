<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Testimonials
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="route('/testimonials/current');">
          <v-list-item-title>Current Testimonials</v-list-item-title>
        </v-list-item>
        <v-list-item @click="route('/testimonials/previous');">
          <v-list-item-title>Previous Testimonials</v-list-item-title>
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
      this.$router.push(path);
    }
  }
};
</script>
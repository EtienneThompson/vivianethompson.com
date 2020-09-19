<template>
  <v-container>
    <v-col>
      <v-expansion-panels accordion flat hover>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row justify="starts">
              I have other questions!
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Feel free to
            <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline dollarGreen--text">email</a>
            or better yet, to
            <a @click="route('/contact');" class="text-decoration-underline dollarGreen--text">call</a>
            &nbsp; me. As long as I am not working with a client, I'll answer the
            phone.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    route: function(path) {
      this.$router.push(path)
    }
  }
};
</script>

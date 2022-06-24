<template>
  <div v-if="main">
    <v-btn
      color="ocean"
      @click="route('/login')"
      dark
      normal
      v-if="size >= 800"
    >
      Client login
    </v-btn>
    <v-btn @click="route('/login')" color="ocean" dark small v-else>
      Client Login
    </v-btn>
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
    main: Boolean,
    size: Number
  }
};
</script>

<template>
  <div>
    <v-btn @click="route('/')" normal text v-if="size >= 800">
      Home
    </v-btn>
    <v-btn @click="route('/')" small text v-else>
      Home
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
    size: Number
  }
};
</script>

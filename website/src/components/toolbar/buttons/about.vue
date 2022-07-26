<template>
  <div>
    <v-btn @click="route('/about')" normal text v-if="size >= 800">
      About
    </v-btn>
    <v-btn @click="route('/about')" small text v-else>
      About
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
        } else {
          this.$emit("close_menu_modal");
        }
      });
    }
  },
  props: {
    size: Number
  }
};
</script>

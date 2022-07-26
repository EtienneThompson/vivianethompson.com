<template>
  <div>
    <v-btn @click="route('/contact')" normal text v-if="size >= 800">
      Contact Us
    </v-btn>
    <v-btn @click="route('/contact')" small text v-else>
      Contact
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

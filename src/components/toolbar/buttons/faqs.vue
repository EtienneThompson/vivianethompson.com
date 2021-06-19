<template>
  <div>
    <v-btn @click="route('/faqs')" normal text v-if="size >= 800">
      FAQs
    </v-btn>
    <v-btn @click="route('/faqs')" small text v-else>
      FAQs
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

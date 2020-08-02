<template>
  <div>
    <v-btn @click="route('/contact');" normal text v-if="size >= 800">
      Contact Us
    </v-btn>
    <v-btn @click="route('/contact');" small text v-else>
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
      this.$router.push(path);
    },
  },
  props: {
    size: Number,
  }
};
</script>
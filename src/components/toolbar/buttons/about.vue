<template>
  <div>
    <v-btn @click="route('/about');" normal text v-if="size >= 800">
      About
    </v-btn>
    <v-btn @click="route('/about');" small text v-else>
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
      this.$router.push(path);
    },
  },
  props: {
    size: Number,
  }
};
</script>
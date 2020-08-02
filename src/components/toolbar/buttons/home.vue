<template>
  <div>
    <v-btn @click="route('/');" normal text v-if="size >= 800">
      Home
    </v-btn>
    <v-btn @click="route('/');" small text v-else>
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
      this.$router.push(path);
    },
  },
  props: {
    size: Number,
  }
};
</script>
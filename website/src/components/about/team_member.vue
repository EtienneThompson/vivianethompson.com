<template>
  <v-tooltip top color="white" content-class="font-weight-black">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        class="team-member"
        height="300"
        max-width="250"
        position="center center"
        :src="getImageUrl(image)"
        cover
        v-bind="attrs"
        v-on="on"
      ></v-img>
    </template>
    <span>{{ name }}</span>
  </v-tooltip>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .v-responsive {
    max-width: 18% !important;
  }
}

.team-member {
  margin: 5px;
}
</style>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    getImageUrl(imgName) {
      return require("@/assets/about/" + imgName);
    }
  },
  props: {
    image: String,
    name: String
  }
};
</script>

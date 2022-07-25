<template>
  <v-tooltip bottom color="white" content-class="font-weight-black">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        class="team-member"
        contain
        position="center center"
        :src="getImageUrl(image)"
        v-bind="attrs"
        v-on="on"
      ></v-img>
    </template>
    <span>{{ blurb }}</span>
  </v-tooltip>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .v-responsive {
    max-width: 18% !important;
  }
}

.team-member {
  float: left;
  max-height: 300px;
  object-fit: cover;
  border-radius: 45%;
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
    blurb: String
  }
};
</script>

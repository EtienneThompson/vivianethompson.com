<template>
  <v-container>
    <GmapMap
      :center="{lat:32.2425361,lng:-110.910787}"
      class="pa-2"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 500px;"
    >
      <GmapMarker
        :position="{lat:32.2425361,lng:-110.910787}"
        :clickable="true"
        @click="center={lat:32.2425361,lng:-110.910787}"
      />
    </GmapMap>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

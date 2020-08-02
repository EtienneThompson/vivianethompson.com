<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Image -->
        <v-row class="d-flex flex-no-wrap">
          <v-col>
            <v-img
              max-height="300px"
              max-width="700px"
              src="@/assets/contact/contact.jpg"
            ></v-img>
          </v-col>
          <!-- Text Information -->
          <v-col>
            <v-card-title class="dollarGreen--text text-h4 font-weight-bold text-center">Thompson Accounting Company, PLLC</v-card-title>
            <v-card-subtitle class="darkGreen--text text-h5 font-weight-bold text-center">Viviane Thompson, CPA</v-card-subtitle>
            <v-card-text class="text-body-1 text-center">
              1643 N Alvernon, Suite 104<br/>
              Tucson, AZ 85712<br/><br/>
              Office: (520) 822-8208<br/>
              Cell: (520) 481-8015<br/><br/>
              <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline dollarGreen--text">vthompson@vivianethompson.com</a>
            </v-card-text>
          </v-col>
        </v-row>

        <!-- Google Maps Widget -->
        <v-row>
          <v-col align="center">
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
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>
export default {
  data: function() {
    return {};
  },
  mounted: function() {
    this.$store.commit("visit_contact");
  },
}
</script>
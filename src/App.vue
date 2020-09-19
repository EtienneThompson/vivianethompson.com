<template>
  <v-app>
    <!-- Title Image -->
    <v-row no-gutters v-show="mainPage" v-if="windowSize >= 450">
      <v-flex>
        <v-card>
          <!-- Background Image -->
          <v-img
            position="left"
            src="@/assets/title_background.png"
            style="height:200px;"
          >
            <v-row>
              <!-- Left side text -->
              <v-col>
                <v-row align="center" justify="center" class="pt-5 pb-0 mb-0" no-gutters>
                  <v-card-title class="text-h4" v-if="windowSize >= 800">
                    <div>Gain Control of Your <span class="ocean--text font-weight-bold">Finances</span></div>
                  </v-card-title>
                  <v-card-title class="text-h5" v-else>
                    <div>Gain Control of Your <span class="ocean--text font-weight-bold">Finances</span></div>
                  </v-card-title>
                </v-row>
                <v-row align="center" justify="center" class="pt-0 mt-0" no-gutters v-if="windowSize > 416">
                  <v-card-subtitle class="font-italic">
                    Professional Accountants with a Balanced Approach
                  </v-card-subtitle>
                </v-row>
              </v-col>

              <!-- Right side image and text -->
              <v-col>
                <v-row align="center" justify="end">
                  <v-col>
                    <v-row align="center" justify="center">
                      <v-card-title class="ocean--text text-h4 font-weight-bold" v-if="windowSize >= 800">
                        Taking Care of Your
                      </v-card-title>
                      <v-card-title class="ocean--text text-h5 font-weight-bold" v-else>
                        Taking Care of Your
                      </v-card-title>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-img align="center" aspect-ratio=2.94 max-height="100px" max-width="300px" src="@/assets/title_image.png" v-if="windowSize >= 800"></v-img>
                      <v-img align="center" aspect-ratio=2.94 max-height="50px" max-width="150px" src="@/assets/title_image.png" v-else></v-img>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>

    <!-- Header -->
    <v-row no-gutters v-show="mainPage">
      <navbar :clipped="clipped" :drawer="drawer" v-on:toggle="toggleNavbar()"></navbar>
      <!-- Desktop toolbar -->
      <v-toolbar color="dollarGreen" elevation="2" v-if="windowSize >= 450">
        <toolbar
          :main="true"
          :size="windowSize"
          v-on:toggle="toggleNavbar()"
        ></toolbar>
      </v-toolbar>

      <!-- Mobile toolbar -->
      <v-app-bar color="dollarGreen" elevation="2" fixed v-else>
        <toolbar
          :main="true"
          :size="windowSize"
          v-on:toggle="toggleNavbar()"
        ></toolbar>
      </v-app-bar>
    </v-row>

    <!-- Mobile needs some padding to make sure all content is visible -->
    <div class="padding" v-if="windowSize < 450"></div>

    <!-- Main View -->
    <router-view
      :key="$router.fullPath"
    >
    </router-view>

    <!-- Footer -->
    <v-footer dense v-show="mainPage">
      <v-row>
        <v-col>
          <footer-text :size="windowSize"></footer-text>
          <toolbar :main="false" :size="windowSize"></toolbar>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
  .padding {
    padding-top: 56px;
  }

  .v-card__text, .v-card__title {
    word-break: normal !important;
  }
</style>

<script>

import navbar from "@/components/toolbar/navbar.vue";
import toolbar from "@/components/toolbar/toolbar.vue";
import footer_text from "@/components/toolbar/footer_text.vue";

export default {
  components: {
    "navbar": navbar,
    "toolbar": toolbar,
    "footer-text": footer_text,
  },
  computed: {
    mainPage: function() {
      return !this.$route.path.startsWith("/analytics") ? true : false;
    }
  },
  data: function() {
    return {
      clipped: false,
      drawer: null,
      windowSize: Number,
    };
  },
  methods: {
    toggleNavbar: function() {
      this.drawer = !this.drawer;
    },
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
  }
}

</script>
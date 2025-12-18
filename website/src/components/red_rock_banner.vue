<template>
  <!-- Red Rock Redirect -->
  <v-row no-gutters justify="center" align="center">
    <v-card flat class="pa-3" width="100%" color="redrock">
      <v-container height="100%">
        <v-row justify="center" align="center">
          <v-col align="center">
            <v-img
              position="center"
              src="@/assets/red_rock_logo.png"
              max-width="300px"
            />
          </v-col>
          <v-col align="center" class="ma-1">
            <v-row justify="center">
              <span class="white--text font-weight-bold text-center">
                We are moving! You are being redirected to our new site.
              </span>
              <span class="white--text font-weight-bold text-center">
                {{ navigationText }}
              </span>
            </v-row>
            <v-row justify="center">
              <v-btn
                style="background-image:linear-gradient(190deg,#2b87da 0%,#29c4a9 100%);background-color: #0c71c3;border-width: 5px !important;
  border-color: #0c71c3;"
                class="white--text"
                @click="cancelNavigation"
                v-if="!redirectCanceled"
              >
                Cancel
              </v-btn>
              <v-btn
                style="background-image:linear-gradient(190deg,#2b87da 0%,#29c4a9 100%);background-color: #0c71c3;border-width: 5px !important;
  border-color: #0c71c3;"
                class="white--text"
                @click="navigateToRedrock"
                v-if="redirectCanceled"
              >
                Go to Red Rock Consulting &amp; Tax
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: function() {
    return {
      navigationText: "Redirecting in 5 seconds...",
      redirectUrl: "",
      redirectCanceled: false,
      intervalRef: null,
      redirectTimeoutRef: null,
      redirectMap: {
        "/": "https://redrocktax.com/thompson-accounting/",
        "/about": "https://redrocktax.com/",
        "/services/business_consulting": "https://redrocktax.com/virtual-cfo/",
        "/services/business_solutions": "https://redrocktax.com/virtual-cfo/",
        "/services/income_taxes":
          "https://redrocktax.com/tax-planning-and-preparation/",
        "/services/personal_finance": "https://redrocktax.com/virtual-cfo/",
        "/quickbooks/best_or_beast":
          "https://redrocktax.com/small-business-accounting-service/",
        "/quickbooks/why":
          "https://redrocktax.com/small-business-accounting-service/",
        "/faqs": "https://redrocktax.com/contact/",
        "/contact": "https://redrocktax.com/contact/",
        "*": "https://redrocktax.com/thompson-accounting/"
      }
    };
  },
  methods: {
    navigateToRedrock: function() {
      if (Object.keys(this.redirectMap).includes(window.location.pathname)) {
        this.redirectUrl = this.redirectMap[window.location.pathname];
      } else {
        this.redirectUrl = this.redirectMap["*"];
      }
      this.redirectCanceled = false;
      let seconds = 5;
      this.navigationText = `Redirecting in ${seconds} seconds...`;
      this.intervalRef = setInterval(
        function() {
          if (seconds === 0) {
            return;
          }

          seconds = seconds - 1;
          this.navigationText = `Redirecting in ${seconds} seconds...`;
        }.bind(this),
        1000
      );

      this.redirectTimeoutRef = setTimeout(
        function() {
          window.location.href = this.redirectUrl;
        }.bind(this),
        5000
      );
    },
    cancelNavigation: function() {
      this.redirectTimeoutRef && clearTimeout(this.redirectTimeoutRef);
      this.intervalRef && clearInterval(this.intervalRef);
      this.navigationText = "Redirect canceled!";
      this.redirectCanceled = true;
    }
  },
  mounted: function() {
    this.navigateToRedrock();
  },
  beforeDestroy: function() {
    this.cancelNavigation();
  }
};
</script>

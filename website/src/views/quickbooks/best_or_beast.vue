<template>
  <v-container>
    <v-flex>
      <v-card outlined class="pa-2">
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="dollarGreen--text text-h4 font-weight-bold"
            >QuickBooks? Best or Beast?</v-card-title
          >
        </v-row>

        <v-layout>
          <v-flex>
            <!-- Fixed image size (larger windows) -->
            <img
              align="left"
              width="410px"
              src="@/assets/quickbooks/best_or_beast/quickbooks.jpg"
              class="pa-2"
              v-if="windowSize >= 500"
            />
            <!-- Dynamic image size (smaller windows) -->
            <img
              justify="center"
              width="100%"
              src="@/assets/quickbooks/best_or_beast/quickbooks.jpg"
              class="pa-2"
              v-else
            />
            <!-- Page text -->
            <page-text></page-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
import page_text from "@/components/quickbooks/best_or_beast/page_text.vue";

export default {
  components: {
    "page-text": page_text
  },
  data: function() {
    return {
      windowSize: Number
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - QuickBooks",
      meta: [
        {
          name: "description",
          content:
            "QuickBooks (QB) is the number one software of small businesses providing a fantastic accounting solution to business owners or families with no or little bookkeeping experience or accounting training, yet helping provide financial structure and compliance. The software is truly multi-level, from the most basic checking account function to complex reports, queries and capabilities."
        },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" }
      ]
    };
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
    },
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_qbb");
  }
};
</script>

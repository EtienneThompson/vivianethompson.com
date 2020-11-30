<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Card titles -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Client Login
          </v-card-title>
        </v-row>
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Private and Secure
          </v-card-title>
        </v-row>

        <!-- Larger windows (horizontal alignment) -->
        <v-row v-if="windowSize >= 450">
          <v-col cols="4">
            <v-img width="90%" src="@/assets/client_login/locked_files.jpg" class="pa-2"></v-img>
          </v-col>
          <v-col cols="8">
            <login-form></login-form>
          </v-col>
        </v-row>

        <!-- Smaller windows (vertical alignment) -->
        <div class="pl-5 pr-5" v-else>
          <v-row>
            <v-flex>
              <login-form></login-form>
            </v-flex>
          </v-row>
          <v-row>
            <v-img src="@/assets/client_login/locked_files.jpg" class="pa-2"></v-img>
          </v-row>
        </div>
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

import login_form from "@/components/client_login/form.vue";

export default {
  components: {
    "login-form": login_form,
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Client Login",
      meta: [
        { name: "description", content: "Expert advice for all your accounting needs. Troubleshoot accounting issues. Periodical controller: fulfill controller duties as needed. Personal accounting for busy families and professionals." },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" },
      ]
    }
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  methods: {
    resize: function() {
      this.windowSize = innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_login");
  },
};
</script>
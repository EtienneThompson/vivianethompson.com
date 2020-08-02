<template>
  <v-container>
    <v-flex>
      <v-card outlined>
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
        <v-row>
          <v-flex>
            <v-row v-if="windowSize >= 450">
              <v-col cols="6">
                <v-img src="@/assets/client_login/unlock.jpg" class="pa-2"></v-img>
              </v-col>
              <v-col cols="6">
                <v-form
                  action="https://vivianethompson.sharefile.com"
                  class="pl-5 pr-5"
                  method="post"
                >
                  <v-text-field
                    label="Email"
                    name="username"
                    required
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    required
                    type="password"
                  ></v-text-field>
                  <v-btn color="dollarGreen" type="submit">
                    Login In
                  </v-btn>
                </v-form>
              </v-col>
            </v-row>
            <div class="pl-5 pr-5" v-else>
              <v-row>
                <v-flex>
                  <v-form
                    action="https://vivianethompson.sharefile.com"
                    class="pl-5 pr-5"
                    method="post"
                  >
                    <v-text-field
                      label="Email"
                      name="username"
                      required
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      name="password"
                      required
                      type="password"
                    ></v-text-field>
                    <v-btn color="dollarGreen" type="submit">
                      Login In
                    </v-btn>
                  </v-form>
                </v-flex>
              </v-row>
              <v-row>
                <v-img src="@/assets/client_login/unlock.jpg" class="pa-2"></v-img>
              </v-row>
            </div>
          </v-flex>
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
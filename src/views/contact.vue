<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <!-- Larger windows (horizontal alignment) -->
        <v-row align="center" class="d-flex flex-no-wrap" v-if="windowSize >= 800">
          <!-- Text Information -->
          <v-col>
            <contact-info></contact-info>
          </v-col>

          <!-- Google Maps Widget -->
          <v-col align="center">
            <google-maps></google-maps>
          </v-col>
        </v-row>

        <!-- Smaller windows (vertical alignment) -->
        <div v-else>
          <!-- Text Information -->
          <v-row align="center" justify="center">
            <contact-info></contact-info>
          </v-row>

          <!-- Google Maps Widget -->
          <v-row>
            <v-col>
              <google-maps></google-maps>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>

import google_maps from "@/components/contact/google_maps.vue";
import contact_info from "@/components/contact/contact_info.vue";

export default {
  components: {
    "google-maps": google_maps,
    "contact-info": contact_info,
  },
  data: function() {
    return {
      windowSize: Number,
    };
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - Contact Us",
      meta: [
        { name: "description", content: "Expert advice for all your accounting needs. Troubleshoot accounting issues. Periodical controller: fulfill controller duties as needed. Personal accounting for busy families and professionals." },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" },
      ]
    }
  },
  methods: {
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  mounted: function() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });

    this.$store.commit("visit_contact");
  },
}
</script>

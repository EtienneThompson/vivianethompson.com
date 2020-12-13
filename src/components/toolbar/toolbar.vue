<template>
  <v-container>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <v-row align="center" no-gutters v-if="size >= 630">
      <v-spacer></v-spacer>
      <home :size="size"></home>
      <about :size="size"></about>
      <services :size="size"></services>
      <quickbooks :size="size"></quickbooks>
      <faqs :size="size"></faqs>
      <contact :size="size"></contact>
      <v-spacer></v-spacer>
      <login :main="main" :size="size"></login>
    </v-row>

    <v-row align="center" no-gutters v-else>
      <v-btn @click="$emit('toggle');" icon text v-if="main">
        <v-icon>mdi-view-headline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <login :main="main" :size="size"></login>
    </v-row>
  </v-container>
</template>

<script>

import home from "./buttons/home.vue";
import about from "./buttons/about.vue";
import quickbooks from "./buttons/quickbooks.vue";
import services from "./buttons/services.vue";
import faqs from "./buttons/faqs.vue";
import contact from "./buttons/contact.vue";
import login from "./buttons/login.vue";

export default {
  components: {
    "home": home,
    "about": about,
    "quickbooks": quickbooks,
    "services": services,
    "faqs": faqs,
    "contact": contact,
    "login": login,
  },
  data: function() {
    return {};
  },
  props: {
    main: Boolean,
    size: Number,
  }
}

</script>
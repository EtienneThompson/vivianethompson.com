<template>
  <v-navigation-drawer
    app
    :clipped="clipped"
    color="dollarGreen"
    temporary
    v-model="open"
  >
    <v-list-item>
      <home></home>
    </v-list-item>

    <v-list-item>
      <about></about>
    </v-list-item>

    <v-list-item>
      <services></services>
    </v-list-item>

    <v-list-item>
      <quickbooks></quickbooks>
    </v-list-item>

    <v-list-item>
      <faqs></faqs>
    </v-list-item>

    <v-list-item>
      <contact></contact>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import home from "./buttons/home.vue";
import about from "./buttons/about.vue";
import quickbooks from "./buttons/quickbooks.vue";
import services from "./buttons/services.vue";
import faqs from "./buttons/faqs.vue";
import contact from "./buttons/contact.vue";

export default {
  components: {
    "home": home,
    "about": about,
    "quickbooks": quickbooks,
    "services": services,
    "faqs": faqs,
    "contact": contact
  },
  data: function() {
    return {
      previous: false,
      open: this.drawer
    };
  },
  props: {
    clipped: Boolean,
    drawer: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    drawer: function(newVal) {
      this.open = newVal;
    },
    open: function(newVal) {
      if (!newVal) {
        this.$emit("toggle");
      }
    }
  }
};
</script>

<template>
  <v-navigation-drawer
    app
    :clipped="clipped"
    color="dollarGreen"
    temporary
    v-model="open"
  >
    <v-list-item>
      <home v-on:close_menu_modal="toggle"></home>
    </v-list-item>

    <v-list-item>
      <about v-on:close_menu_modal="toggle"></about>
    </v-list-item>

    <v-list-item>
      <services v-on:close_menu_modal="toggle"></services>
    </v-list-item>

    <v-list-item>
      <quickbooks v-on:close_menu_modal="toggle"></quickbooks>
    </v-list-item>

    <v-list-item>
      <faqs v-on:close_menu_modal="toggle"></faqs>
    </v-list-item>

    <v-list-item>
      <contact v-on:close_menu_modal="toggle"></contact>
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
  methods: {
    toggle: function() {
      this.open = false;
    }
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

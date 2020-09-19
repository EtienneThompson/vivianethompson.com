<template>
  <v-col :cols="size >= 800 ? '4' : '12'">
    <v-card outlined>
      <v-img height="150px" src="@/assets/home/business_solutions.jpg"></v-img>
      <v-card-title class="ocean--text">Business Solutions</v-card-title>
      <v-card-text>
        Our firm provides tools to organize, manage and control the accounting and finances of your small business. We become the periodic business manager or controller, and provide you with business and financial advice in all areas of your business.
        <br />
        <br />Would you like to know more about how we can help you with QuickBooks?
      </v-card-text>
      <v-card-actions>
        <v-btn color="dollarGreen" @click="route('/services/business_solutions');">
          Read More...
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    route: function(path) {
      this.$router.push(path);
    }
  },
  props: {
    size: Number,
  }
}
</script>
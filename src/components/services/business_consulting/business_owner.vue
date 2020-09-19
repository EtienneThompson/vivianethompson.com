<template>
  <v-container>
    <p>
      <span class="font-weight-bold">Soon to be Business Owner</span><br/>
      - Preparation of business plan<br/>
      - Setting up and "running a business" advice<br/>
      - Assistance in preparing a business loan application<br/><br v-if="breaker" />
    </p>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    breaker: Boolean,
  }
};
</script>

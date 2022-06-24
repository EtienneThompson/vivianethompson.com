<template>
  <v-container>
    <v-card class="pl-2 pr-2" outlined>
      <v-row justify="center">
        <v-card-title class="ocean--text text-h4 font-weight-bold">
          Page Traffic
        </v-card-title>
      </v-row>
      <v-row>
        <v-col cols="4">
          <p>Home/Home Traffic: {{ home_traffic }}</p>
          <p>Home/Forensic Accounting: {{ forensic_traffic }}</p>
          <p>About Traffic: {{ about_traffic }}</p>
          <p>FAQs Traffic: {{ faq_traffic }}</p>
          <p>Contact Traffic: {{ contact_traffic }}</p>
        </v-col>
        <v-col cols="4">
          <p>Login Traffic: {{ login_traffic }}</p>
          <p>Services/Business Consulting: {{ sbc_traffic }}</p>
          <p>Services/Business Solutions: {{ sbs_traffic }}</p>
          <p>Services/Income Taxes: {{ sit_traffic }}</p>
        </v-col>
        <v-col cols="4">
          <p>Serivces/Personal Finance: {{ spf_traffic }}</p>
          <p>Services/Millionaire Next Door: {{ smd_traffic }}</p>
          <p>QuickBooks/Best or Beast: {{ qbb_traffic }}</p>
          <p>QuickBooks/Why Quickbooks: {{ qwq_traffic }}</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    home_traffic: function() { return this.$store.state.traffic.home.index; },
    forensic_traffic: function() { return this.$store.state.traffic.home.forensic_accounting; },
    about_traffic: function () { return this.$store.state.traffic.about; },
    faq_traffic: function() { return this.$store.state.traffic.faqs; },
    login_traffic: function() { return this.$store.state.traffic.client_login; },
    contact_traffic: function() { return this.$store.state.traffic.contact; },
    sbc_traffic: function() { return this.$store.state.traffic.services.business_consulting; },
    sbs_traffic: function() { return this.$store.state.traffic.services.business_solutions; },
    sit_traffic: function() { return this.$store.state.traffic.services.income_taxes; },
    smd_traffic: function() { return this.$store.state.traffic.services.millionaire_next_door; },
    spf_traffic: function() { return this.$store.state.traffic.services.personal_finance; },
    qbb_traffic: function() { return this.$store.state.traffic.quickbooks.best_or_beast; },
    qwq_traffic: function() { return this.$store.state.traffic.quickbooks.why_quickbooks; },
    tcurr_traffic: function() { return this.$store.state.traffic.testimonials.current; },
    tprev_traffic: function() { return this.$store.state.traffic.testimonials.previous; },
  },
  data: function() {
    return {};
  }
};
</script>
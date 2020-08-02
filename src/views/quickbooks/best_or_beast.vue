<template>
  <v-container>
    <v-flex>
      <v-card outlined class="pa-2">
        <v-row justify="center">
          <v-card-title class="dollarGreen--text text-h4 font-weight-bold">QuickBooks? Best or Beast?</v-card-title>
        </v-row>
        <v-layout>
          <v-flex>
            <img align="left" src="@/assets/quickbooks/quickbooks.jpg" class="pa-2">
            <p>
              QuickBooks (QB) is the number one software of small businesses, providing
              a fantastic accounting solution to business owners or families with no
              or little bookkeeping experience or accounting training, yet helping
              provide financial structure and compliance. The software is truly multi-level,
              from the most basic checking account function to complex reports, queries
              and capabilities.<br/><br/>
              For a first time user, the first thing to do is to listen to each of
              the tutorials found in the Help menu / Learning Center tutorials.
              The second thing is to try out the software with real data (your personal
              checking account for example) and see what the results are. Because
              the desktop license is user-based, an unlimited number of files can
              be created including a test company. After you have gained some experience,
              you can open a real file and start entering the data for your business.
              <br/><br/>
              <span class="font-weight-bold">
                Beware: On one hand, QB is deceptively easy. On the other hand,
                mistakes and using the software incorrectly will lead to serious
                problems that can be far reaching if not addressed quickly and
                correctly.
              </span><br/><br/>
              Whether you just want to learn how to download into QB or you believe
              your file has some issues, our firm is uniquely suited in helping you
              with your accounting and bookkeeping needs. First, we have intense
              knowledge of the software based on years of usage as well as attending
              multiple training sessions where we have learned tricks unknown to
              most users (including professionals). Second, we treat the software
              as a means to an end, that is the software must help you run your
              business better, give you reports that you need, and provide you with
              useful data, systems and procedures. Lastly, we understand what it
              takes to run a business and in our work with you will always keep
              that in mind.
            </p>
            <p class=" text-center text-h6 font-weight-bold">
              Are you overwhelmed by the software? Are you frustrated by the results?<br/>
              It's time to call a consultant who specifically addresses your issues
              and give you results you want and need.<br/>
              <span class="text-h5 font-weight-bold">
                Call us today for relief!
              </span>
            </p>
          </v-flex>
        </v-layout>
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
    return {};
  },
  mounted: function() {
    this.$store.commit("visit_qbb");
  },
};
</script>
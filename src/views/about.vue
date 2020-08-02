<template>
  <v-container>
    <v-flex>
      <v-row>
        <v-card outlined>
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">About Viviane Thompson</v-card-title>
          </v-row>
          <v-layout>
            <v-flex>
              <img align="left" src="@/assets/about/viviane.jpg" class="pa-2" />
              <p class="pa-2">
                When you meet Viviane, you will know one thing right away: you are finally in good hands
                because she loves what she does and she is ready to get to work, TODAY. "Viviane
                understands my harried life and provides such amazing support that I can actually relax
                and breathe!!"<br/><br/>
                Clients come to Viviane after being jerked around by countless so-called accountants that
                promised the moon when all they want is a solution for their accounting and bookkeeping
                issues. With gentle guidance and lots of questions, Viviane will get to know you and your
                business and will figure out a program that works for you. First, she'll work with you to
                take care of the backlog, then she'll give you training and direction about your business
                today, and lastly she will be available for questions and help in the future.<br/><br/>
                Viviane is different from other accountants because she has both a solid background in
                accounting and bookkeeping from working with many small and mid-sized businesses as well
                as a solid knowledge of QuickBooks, the bookkeeping software leader. Her specialization is
                what she calls "the other 11 months of the year, the months when you are not thinking about
                filing your tax return."<br/><br/>
                She will help you maneuver the maze of the payroll tax system, prepare accurate sales tax
                reports, calculate workers compensation premiums properly, and best of all develop a system
                that will provide you with timely and accurate statements, designed just for you! Imagine
                knowing exactly how your business is doing so that you can make decisions based on
                <span class="font-italic">real</span> facts.<br/><br/>
                Viviane's approach is bottom up: create a solid accounting and bookkeeping foundation along
                with efficient and competent systems and procedures so that you, the owners, can then build
                a robust and profitable company you are proud of.<br/><br/>
                Viviane's motto is "Gain Control of your Business Accounting and Finances." As long as you
                are ready to work and trust the process, you will gain the benefits of becoming organized,
                having your finances under control and see your vision become a reality.<br/><br/>
                <a href="/about" class="text-decoration-underline dollarGreen--text">Arizona CPA License #</a>
                14363-R<br/>
                <a href="/about" class="text-decoration-underline dollarGreen--text">California CPA License #</a>
                67056<br/>
                <a href="/about" class="text-decoration-underline dollarGreen--text">Certified Forensic Accountant</a>
                <br/>
                <a href="/about" class="text-decoration-underline dollarGreen--text">QuickBooks ProAdvisor</a>
                <br/><br/>
                Please check out
                <a href="/about" class="text-decoration-underline dollarGreen--text">Happy Life Suggestions</a>
                video to brighten your day!
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
      <v-row class="pt-2">
        <v-card outlined>
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">About Melissa</v-card-title>
          </v-row>
          <v-layout>
            <v-flex>
              <img align="right" src="@/assets/about/melissa.jpg" class="pa-2" width="172" />
              <p class="pa-2">
                Melissa Dojaquez is a Tucson native and a U of A graduate with
                over 10 years of bookkeeping experience. Melissa enjoys helping
                clients learn how to use QuickBooks more efficiently so they can
                spend less time bookkeeping and more time growing their business.
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
      <v-row class="pt-2">
        <v-card outlined>
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">
              About Cyndi
            </v-card-title>
          </v-row>
          <v-layout>
            <v-flex>
              <img align="left" src="@/assets/about/cyndi.png" class="pa-2" width="172" />
              <p class="pa-2">
                temp temp temp temp temp temp temp temp temp temp temp temp temp temp temp
                temp temp temp temp temp temp temp temp temp temp temp temp temp temp temp
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
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
    // Increment the traffic for analytics.
    this.$store.commit("visit_about");
  },
};
</script>
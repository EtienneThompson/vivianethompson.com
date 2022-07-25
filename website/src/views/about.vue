<template>
  <v-container>
    <v-flex>
      <!-- General Thompson Accounting card -->
      <v-card outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ml-4 mr-4 ocean--text text-h4 font-weight-bold">
            Thompson Accounting, PLLC
          </v-card-title>
        </v-row>

        <!-- Card image -->
        <v-row>
          <v-col>
            <v-img
              height="300px"
              position="top 15% center"
              src="@/assets/about/thompson_accounting.jpg"
            ></v-img>
          </v-col>
        </v-row>

        <!-- Thompson Accounting blurb -->
        <v-row>
          <v-col>
            <p class="pa-5">
              <b>Business Clients<br /></b>
              Our office has been serving the personal and business community
              since 2008. Over the years, we have grown to 4 champion
              accountants, Viviane, Melissa, Paula, and Cyndi (by joining
              order). When you meet one of us, you will right away know one
              thing: you are finally in good hands because we love what we do
              and we are ready to get to work, TODAY. “They understand my
              harried life and provides such amazing support that I can
              actually relax and breathe!!”<br /><br />
              Many business clients come to us after being jerked around by
              people that promised the moon when all they want is a solution
              for their accounting and bookkeeping issues. With gentle guidance
              and lots of questions, we will get to know you and your business
              and will figure out a program that works for you. First, we’ll
              work with you to take care of the backlog, then we’ll give you
              training and direction about your business today, and lastly, we
              will be available for questions and help in the future.<br /><br />
              We have solid backgrounds in accounting and bookkeeping, thorough
              knowledge of QuickBooks (the bookkeeping software leader), and
              extensive experience working with small and mid-sized businesses.
              Our specialization is what we call “the other 11 months of the
              year, the months when you are not thinking about filing your tax
              return.”<br /><br />
              We will help you maneuver the maze of the payroll tax system,
              prepare accurate sales tax reports, calculate worker's
              compensation premiums properly, and best of all, develop a system
              that will provide you with timely and accurate statements
              designed just for you! Imagine knowing exactly how your business
              is doing so that you can make decisions based on real facts.<br /><br />
              Our approach is bottom up: create a solid accounting and
              bookkeeping foundation along with efficient and competent systems
              and procedures so that you, the owners, can then build a robust
              and profitable company you are proud of.<br /><br />
              Our motto is “Gain Control of Your Business Accounting and
              Finances.” As long as you are ready to work and trust the
              process, you will gain the benefits of becoming organized, having
              your finances under control and see your vision finally become a
              reality.<br /><br />
              <b>Tax Clients</b><br />
              Filling out tax returns and dealing with the IRS is very
              stressful, especially in this day and age of the gig economy.
              Between the complexity of the tax laws, the numerous tax
              deadlines, and the unnerving "love letters" from the IRS that
              seem to never end once they start. We are there for our clients,
              who can rely on us to take on some of these burdens. We work
              towards satisfying our clients by providing a service that makes
              sure the return is as good as it can be: we get to know our
              clients, we ask a lot of questions about the previous year’s
              activities, we answer questions throughout the year to make sure
              clients do not make huge (expensive in taxes) mistakes, and we
              guide our clients with all the options available to fix their tax
              problems.<br /><br />
              We look at our clients’ financial picture holistically: for
              example, what is the point of saving taxes this year if it
              creates a worse tax burden next year? We create estimated tax
              scenarios for clients well in advance of the year-end to prepare
              them for upcoming bad news (how much they will owe) and give them
              time to make adjustments before the IRS comes calling. We analyze
              a family’s overall situation and advise on best tax practices
              that can affect them for years to come.<br /><br />
              We do not offer cutting-edge or aggressive tax results, but we
              are there to answer the IRS letters and fight back against unfair
              tax treatment by the IRS, fix mistakes, and throughout the whole
              process to explain what’s going on so that clients can sleep at
              night.
            </p>
          </v-col>
        </v-row>
      </v-card>

      <!-- Spacer -->
      <div class="pa-2"></div>

      <!-- Champion Team Card -->
      <v-card min-width="100%" outlined>
        <!-- Card title -->
        <v-row justify="center">
          <v-card-title class="ocean--text text-h4 font-weight-bold">
            Champion Team
          </v-card-title>
        </v-row>

        <!-- Images -->
        <v-row class="mt-0">
          <v-col>
            <!-- Desktop layout -->
            <v-row justify="center" v-if="windowSize > 800">
              <team-member
                image="viviane_team_2.jpg"
                :blurb="blurbs.viviane_blurb"
              />
              <team-member
                image="paula_team_2.jpg"
                :blurb="blurbs.paula_blurb"
              />
              <team-member
                image="michala_team_2.jpg"
                :blurb="blurbs.michala_blurb"
              />
              <team-member
                image="monique_team_2.jpg"
                :blurb="blurbs.monique_blurb"
              />
              <team-member
                image="leslie_team_2.jpg"
                :blurb="blurbs.leslie_blurb"
              />
            </v-row>
            <!-- Mobile layout -->
            <v-row v-else>
              <v-col>
                <v-row justify="center">
                  <v-col cols="4">
                    <team-member
                      image="viviane_team_2.jpg"
                      :blurb="blurbs.viviane_blurb"
                    />
                  </v-col>
                  <v-col cols="4">
                    <team-member
                      image="paula_team_2.jpg"
                      :blurb="blurbs.paula_blurb"
                    />
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="4">
                    <team-member
                      image="michala_team_2.jpg"
                      :blurb="blurbs.michala_blurb"
                    />
                  </v-col>
                  <v-col cols="4">
                    <team-member
                      image="monique_team_2.jpg"
                      :blurb="blurbs.monique_blurb"
                    />
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="4">
                    <team-member
                      image="leslie_team_2.jpg"
                      :blurb="blurbs.leslie_blurb"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
import team_member from "../components/about/team_member.vue";
import * as blurbs from "../components/about/strings";

export default {
  components: {
    "team-member": team_member
  },
  data: function() {
    return {
      hovered: "",
      blurbs: blurbs,
      windowSize: Number
    };
  },
  methods: {
    resize: function() {
      this.windowSize = window.innerWidth;
    }
  },
  metaInfo: function() {
    return {
      title: "Thompson Accounting - About Us",
      meta: [
        {
          name: "description",
          content:
            "Clients come to Viviane after being jerked around by countless accountants that promised the moon and back when all they want is a solution for their accounting and bookkeeping issues. With gentle guidance and lots of questions, Viviane will get to know you and your business and will figure out a program that works for you. First, she'll work with you to take care of the backlog, then she'll give you training and direction about your business tody, and lastly she will be available for questions and help in the future."
        },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" }
      ]
    };
  },
  mounted: function() {
    // Increment the traffic for analytics.
    this.$store.commit("visit_about");

    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
  }
};
</script>

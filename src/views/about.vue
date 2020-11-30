<template>
  <v-container>
    <v-flex>
      <v-row>
        <!-- General Thompson Accounting card -->
        <v-card outlined>
          <!-- Card title -->
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">
              Thompson Accounting, PLLC
            </v-card-title>
          </v-row>

          <!-- Card image -->
          <v-row>
            <v-col>
              <v-img height="300px" src="@/assets/about/thompson_accounting.jpg"></v-img>
            </v-col>
          </v-row>

          <!-- Thompson Accounting blurb -->
          <v-row>
            <v-col>
              <p class="pa-2">
                <b>Business Clients<br/></b>
                Our office has been serving the personal and business community
                since 2008. Over the years, we have grown to 4 champion accountants,
                Viviane, Melissa, Paula, and Cyndi (by joining order). When you
                meet one of us, you will right away know one thing: you are finally
                in good hands because we love what we do and we are ready to get
                to work, TODAY.  “They understand my harried life and provides
                such amazing support that I can actually relax and breathe!!”<br/><br/>
                Many business clients come to us after being jerked around by
                people that promised the moon when all they want is a solution
                for their accounting and bookkeeping issues. With gentle guidance
                and lots of questions, we will get to know you and your business
                and will figure out a program that works for you. First, we’ll
                work with you to take care of the backlog, then we’ll give you
                training and direction about your business today, and lastly, we
                will be available for questions and help in the future.<br/><br/>
                We have solid backgrounds in accounting and bookkeeping, thorough
                knowledge of QuickBooks (the bookkeeping software leader), and
                extensive experience working with small and mid-sized businesses.
                Our specialization is what we call “the other 11 months of the
                year, the months when you are not thinking about filing your tax
                return.”<br/><br/>
                We will help you maneuver the maze of the payroll tax system,
                prepare accurate sales tax reports, calculate worker's compensation
                premiums properly, and best of all, develop a system that will
                provide you with timely and accurate statements designed just
                for you! Imagine knowing exactly how your business is doing so
                that you can make decisions based on real facts.<br/><br/>
                Our approach is bottom up: create a solid accounting and bookkeeping
                foundation along with efficient and competent systems and procedures
                so that you, the owners, can then build a robust and profitable
                company you are proud of.<br/><br/>
                Our motto is “Gain Control of Your Business Accounting and Finances.”
                As long as you are ready to work and trust the process, you will
                gain the benefits of becoming organized, having your finances
                under control and see your vision finally become a reality.<br/><br/>
                <b>Tax Clients</b><br/>
                Filling out tax returns and dealing with the IRS is very stressful,
                especially in this day and age of the gig economy. Between the
                complexity of the tax laws, the numerous tax deadlines, and the
                unnerving "love letters" from the IRS that seem to never end once
                they start. We are there for our clients, who can rely on us to take on
                some of these burdens. We work towards satisfying our clients by
                providing a service that makes sure the return is as good as it
                can be: we get to know our clients, we ask a lot of questions
                about the previous year’s activities, we answer questions throughout
                the year to make sure clients do not make huge (expensive in taxes)
                mistakes, and we guide our clients with all the options available
                to fix their tax problems.<br/><br/>
                We look at our clients’ financial picture holistically: for example,
                what is the point of saving taxes this year if it creates a worse
                tax burden next year? We create estimated tax scenarios for clients
                well in advance of the year-end to prepare them for upcoming bad
                news (how much they will owe) and give them time to make adjustments
                before the IRS comes calling. We analyze a family’s overall situation
                and advise on best tax practices that can affect them for years
                to come.<br/><br/>
                We do not offer cutting-edge or aggressive tax results, but we
                are there to answer the IRS letters and fight back against unfair tax
                treatment by the IRS, fix mistakes, and throughout the whole
                process to explain what’s going on so that clients can sleep
                at night.
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
          <v-row>
            <v-col>
              <div @mouseover="hovered='cyndi'">
                <img class="image-row image--center-top" src="@/assets/about/cyndi_team_2.jpg" />
              </div>
              <div @mouseover="hovered='melissa'">
                <img class="image-row image--center-top" src="@/assets/about/melissa_team_2.jpg" />
              </div>
              <div @mouseover="hovered='paula'">
                <img class="image-row image--center-top" src="@/assets/about/paula_team_2.jpg" />
              </div>
              <div @mouseover="hovered='viviane'">
                <img class="image-row image--center-top" src="@/assets/about/viviane_team_2.jpg" />
              </div>
            </v-col>
          </v-row>

          <!-- Hover bio text -->
          <v-row>
            <v-col v-if="hovered === 'cyndi'">
              <v-row>
                <v-col>
                  <div class="cyndi">
                    Cyndi <div>Clements</div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="pa-2">
                    Cyndi received her CPA certificate in November 2015 after
                    graduating with a Masters of Accounting in December 2013
                    from the University of Arizona. She has been in Tucson since
                    2005 working as an auditor and accountant. She joined our
                    office in October 2019 specializing in the firm’s QuickBooks
                    online clients along with payroll, sales tax, and monthly
                    accounting. She lives with an extremly adorable cat, Kerfluffle.<br/>
                    Email:
                    <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline text-body-1 dollarGreen--text">cyndi@vivianethompson.com</a>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-else-if="hovered === 'melissa'">
              <v-row>
                <v-col>
                  <div class="melissa">
                    Melissa <div>Dojaquez</div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="pa-2">
                    Melissa Dojaquez is a Tucson native and a U of A graduate
                    with over 10 years of bookkeeping experience. Melissa enjoys
                    helping clients learn how to use QuickBooks more efficiently
                    so they can spend less time bookkeeping and more time growing
                    their business. Melissa has 3 teenagers at home and is busy
                    with them – enough said.
                    <br/>
                    Email:
                    <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline text-body-1 dollarGreen--text">melissa@vivianethompson.com</a>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-else-if="hovered === 'paula'">
              <v-row>
                <v-col>
                  <div class="paula">
                    Paula <div>Hartman</div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="pa-2">
                    Paula graduated from the University of Arizona in December
                    2013 with a bachelor’s degree in Accounting. Her plans in 2020
                    are to continue her education and pass the CPA exam within
                    the next two years. She has been in the bookkeeping and accounting
                    field since 2006 and has worked for Thompson Accounting for
                    the past 3 years wearing many different hats:  accountant,
                    tax preparer, and office manager. She is originally from
                    California, and has called Tucson home since 2003. Her black,
                    furry, needy and gift-giving cat is named JJ.<br/>
                    Email:
                    <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline text-body-1 dollarGreen--text">paula@vivianethompson.com</a>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-else-if="hovered === 'viviane'">
              <v-row>
                <v-col>
                  <div class="viviane-mobile" v-if="windowSize < 800">
                    Viviane <div>Thompson</div>
                  </div>
                  <div class="viviane-desktop" v-else>
                    Viviane <div>Thompson</div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="pa-2">
                    You will notice her accent right away, yes, it’s sounds German
                    but she is French. Viviane came to the US after high school and
                    worked while going to college. Upon taking an accounting class
                    she discovered her passion, and has fueled her carreer since
                    then. Viviane got her CPA certificate in 1994 and has been
                    working for and with small business owners since. After moving
                    to Tucson in 2005, she decided to open an accounting and tax
                    practice rather than work for a single employer. She is married
                    to Dave Thompson, an Astronomer working for the Large Binocular
                    Telescope (part of the University of Arizona) and has a 20
                    year old son (who made this website!) who is enjoying his
                    studies in computer science.<br/>
                    Email:
                    <a href="mailto:vthompson@vivianethompson.com" class="text-decoration-underline text-body-1 dollarGreen--text">vthompson@vivianethompson.com</a><br/>
                    <a href="http://www.azaccountancy.gov/" class="text-decoration-underline text-body-1 dollarGreen--text" target="_blank">Arizona CPA License #</a> 14363-R<br/>
                    <a href="http://www.dca.ca.gov/cba/" class="text-decoration-underline text-body-1 dollarGreen--text" target="_blank">California CPA License #</a> 67056
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-else>
              <p class="default-text pa-2">
                Hover over or click someone to learn more about them!
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .v-card__text, .v-card__title {
    word-break: normal !important;
  }

  .image-row {
    /* background-position: top; */
    float: left;
    max-height: 300px;
    object-fit: cover;
    width: 25%;
  }

  .image--center-top {
    object-position: 50% 10%;
  }

  .default-text {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .cyndi {
    font-size: 20px;
    font-weight: bold;
    text-indent: 7%;
  }

  .melissa {
    font-size: 20px;
    font-weight: bold;
    text-indent: 33%;
  }

  .paula {
    font-size: 20px;
    font-weight: bold;
    text-indent: 55%;
  }

  .viviane-mobile {
    font-size: 20px;
    font-weight: bold;
    text-indent: 70%;
  }

  .viviane-desktop {
    font-size: 20px;
    font-weight: bold;
    text-indent: 80%;
  }
</style>

<script>
export default {
  data: function() {
    return {
      hovered: "",
      windowSize: Number,
    }
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
        { name: "description", content: "Clients come to Viviane after being jerked around by countless accountants that promised the moon and back when all they want is a solution for their accounting and bookkeeping issues. With gentle guidance and lots of questions, Viviane will get to know you and your business and will figure out a program that works for you. First, she'll work with you to take care of the backlog, then she'll give you training and direction about your business tody, and lastly she will be available for questions and help in the future." },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "charset", content: "UTF-8" },
      ]
    }
  },
  mounted: function() {
    // Increment the traffic for analytics.
    this.$store.commit("visit_about");

    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
  },
};
</script>
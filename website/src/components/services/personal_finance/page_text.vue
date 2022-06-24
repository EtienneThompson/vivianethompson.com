<template>
  <v-container>
    <p class="pa-2">
      It is a reality that the more money a person or family has, the more
      complicated their financial situation is: multiple bank and savings
      accounts, multiple credit cards, multiple investment accounts for stock
      and bonds, multiple retirement accounts, several real estate ownerships
      directly owned or through real estate investment trusts, investments in
      friends and families' small businesses, life insurance.... The list can
      be very long and the longer it is, the more complicated the
      person/family's tax return is and the more difficult it is to keep track
      of everything.<br /><br />
      To make matters worse, when it comes to assets, it is imperative to keep
      many documents until the asset is sold (or disposed of) and that can be
      many years, if not decades. Not doing so can have serious tax
      consequences - as in paying too much in taxes.<br /><br />
      Keeping track of financial activity is time consuming. "Do-it-yourself"
      software such as Quicken and Mint.com are available, but these require a
      lot of personal "TLC" before the information becomes useful. A personal
      bookkeeper takes over those dreaded, boring, time-consuming tasks of
      filing and keeping track of your financial activity - we happen to love
      doing that. Each transaction is organized and analyzed to carefully
      assess whether that transaction has a tax impact or not under which "pot"
      it falls under.<br /><br />
      <span class="font-weight-bold">
        Families that use our personal accounting service have found that they
        have the following benefits: </span
      ><br />
      <span class="tab">
        - Receive a monthly report with their personal financial activity
        neatly organized by stream of income/expenses.<br />
        - Receive a filled-out tax organizer ready to be sent to their CPA or
        tax preparer.<br />
        - Save money on taces as every single deductible expense has been
        captured in the correct "bucket."<br />
        - Know that their statements are safely filed to be retrieved at any
        time and kept indefinitely.<br />
        - Receive personal and meaningful advice from professional accountants
        who know their situation personally.<br />
        - Sleep at night because their financial affairs are in order just in
        case there is an emergency. </span
      ><br /><br />
      If you are thinking, "gosh, I need this service," you are also probably
      thinking "sounds great but that must be expensive!" The reality is that
      the service costs often-time less than what you pay your cleaning lady.
      Any, in many cases (not guaranteed) the correct allocation of all the
      deductible expenses make your tax bite smaller and possibly small enough
      to pay for the service.<br /><br />
      Now, you are thinking "how do I start?" Give us a
      <a
        @click="route('/contact')"
        class="text-decoration-underline dollarGreen--text"
        >call</a
      >
      and we'll discuss what it will take to catch up this year's information
      and how we will get organized going forward.
    </p>
    <p class="text-center text-h6 pa-2">
      Are you the "Millionaire Next Door"?<br />
      Click
      <a
        @click="route('/services/millionaire_next_door')"
        class="text-decoration-underline dollarGreen--text"
        >here</a
      >
      to find out
    </p>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    route: function(path) {
      this.$router.push(path).catch(error => {
        if (
          error.name !== "NavigationDuplicated" &&
          !error.mesage.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          console.log(error);
        }
      });
    }
  }
};
</script>

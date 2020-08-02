<template>
  <v-container>
    <v-flex>
      <v-row>
        <v-card outlined>
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">Business Taxes</v-card-title>
          </v-row>
          <v-layout>
            <v-flex>
              <img align="left" src="@/assets/services/income_taxes/tax_forms.jpg" class="pa-2" />
              <p class="pa-2">
                <span class="font-weight-bold">Taxes come once a year, right?</span><br/>
                Wrong - taxes affect a business each time the business makes a purchase.
                Why? Because in business, purchases need to be both ordinary and necessary
                to be deductible. These need to be commonly accepted in your trade
                of business although they don't need to be indispensable to be considered
                necessary.<br/><br/>
                When you wait until the end of the year to create financial statements,
                you have no idea what your taxes will be. Being prepared is essential
                to minimizing taxes and penalties assessed by the tax authorities.<br/><br/>
                In addition, a business has many types of taxes to monitor, file returns,
                and pay on time. Trying to wade the arena alone can be foolish because
                there are so many deadlines that it's easy to miss them. Despite its
                nickname, the IRS is not your benevolent uncle!<br/><br/>
                Working with a knowledgeable professional can make all the difference
                between always trying to catch up and feeling in control.<br/><br/>
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
      <v-row class="pt-2">
        <v-card outlined>
          <v-row justify="center">
            <v-card-title class="ocean--text text-h4 font-weight-bold">Personal Taxes</v-card-title>
          </v-row>
          <v-layout>
            <v-flex>
              <p class="pa-2">
                They key to a smooth tax return is being organized: during the year
                and at tax time. Depending on your situation, you may also need to
                review your tax situation throughout the year to make sure that you
                don't miss important deadlines.
              </p>
              <img align="right" src="@/assets/services/income_taxes/receipts.jpg" class="pa-2" />
              <p class="pa-2">
                Keep important documents aside because sooner or later, you will need
                them, especially those that involved making money. Your filing system
                does not have to be fancy - just a box can be enough as long as it's
                not full of irrelevant stuff and not missing anything important.
              </p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>
    </v-flex>
  </v-container>
</template>

<style scoped>
  .centered {
    margin: 0 auto;
  }
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
    this.$store.commit("visit_sit");
  },
};
</script>
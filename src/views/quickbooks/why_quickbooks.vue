<template>
  <v-container>
    <v-flex>
      <v-card outlined>
        <v-row justify="center">
          <v-card-title class="dollarGreen--text text-h4 font-weight-bold">Why QuickBooks?</v-card-title>
        </v-row>
        <v-layout>
          <v-flex>
            <v-expansion-panels accordion flat hover>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  QuickBooks is very easy to learn and extremely forgiving.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  It is designed to be used by small business owners who are not
                  accountants but who want to have to do their bookkeeping. QuickBooks
                  wants to make it easy for you, from the set up to reporting. It
                  is also very powerful, which is great, however its power is only
                  revealed when useful accounting data is entered.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  There are very few parts of QuickBooks that can't be changed.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  No matter what the set up or how long you have been using the
                  software, you can continuously customize it to fit your business
                  needs better. However, retroactive changes may be time consuming
                  because each transaction may have to be adjusted individually.
                  Whether this is true for you will depend on what change you need
                  to make.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  Almost all mistakes can be corrected - But beware...
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Unlike tranditional accounting software, QuickBooks makes it easy
                  to do your daily tasks -- even if you know that you are not entering
                  the data correctly. At a later date, the entries can be fixed.
                  However, this amazing ability can also be the source of many
                  problems: that is when you make a change you did not mean to make.
                  Again, it can be fixed relatively easily.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  It is quick!
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  To most small business owners who do their own bookkeeping, saving
                  time is crucial. Quickbooks has many shortcuts that make the data
                  entry faster and more accurate.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  The search engine is wonderful.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  The software gives you great search capabilities. Once you know
                  how to use the "find" button, you'll agree it is your best friend
                  -- in the accounting world that is.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  It has great reporting capabilities.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Once the data is in QuickBooks, it can be used in multiple ways:
                  by the reports already in the system, by new reports you can create
                  yourself, and best of all, downloaded into excel. Most small
                  business owners never use the reports because they don't know
                  they exist.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  QuickBooks in inexpensive.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  There are several versions of the software (Basic, Pro, Premier,
                  Enterprise, and online), and versions that are industry specific.
                  Most businesses can function very well with the Pro ($200) or
                  Premier ($400) version. In addition, they can keep using the
                  same version for two or three years without any harm. After 3
                  or 4 years, it is wise to upgrade to a current version.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  QuickBooks has integrated payroll.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Intuit, QuickBooks manufacturer, offers several payroll services
                  from the do-it-yourself version to the all inclusive model which
                  are competitively priced and save the owner a lot of time and
                  energy. With the proper training and set up, the payroll can be
                  done fairly easily.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  QuickBooks is plugged in.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  The software can process credit card and has online payment capabilities
                  through Inuit (extra charges apply). It can upload many bank and
                  credit card statements. It can email invoices and client statements.
                  And it works great with Microsoft excel and word.<br/><br/>
                  Because the software has become so widely used by small businesses,
                  there are many applications that are compatible with it.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  Quickbooks is portable.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  The software can be installed on several computers (see license
                  restrictions) so that you can work at different locations. Other
                  QuickBooks users, such as your tax accountant, can upload your
                  file onto their computer which makes it very convenient.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
    this.$store.commit("visit_qwq");
  },
};
</script>
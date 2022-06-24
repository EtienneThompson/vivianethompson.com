<template>
  <v-container>
    <v-row justify="center">
      <v-card-title class="ocean--text text-h5 font-weight-bold">Personal Accounting</v-card-title>
    </v-row>
    <v-layout>
      <v-flex>
        <v-row>
          <v-col>
            <v-expansion-panels accordion flat hover>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  What are the benefits of having my personal accounting done?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  There are many benefits: outsource the task when you are busy; ensure
                  that it's done correctly; capture additional tax breaks; etc.<br/><br/>
                  These benefits will save you time (you don't have to do it yourself);
                  will take away a headache (most people do not enjoy these tasks); will
                  ensure that your tax organizer is properly filled out at the end of
                  the year.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  This sounds expensive.
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Actually, the service is not only very affordable, it will probably
                  pay for itself. How? By saving you taxes because it will capture often
                  forgotten deductions.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  Is it the same service that rich people get from their business manager?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Yes, it's very similar. Business managers also pay the bills. We can
                  pay your bills too.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  }
}
</script>
<template>
  <v-row v-if="size >= 835" class="pt-5">
    <v-spacer></v-spacer>
    <div class="text-body-1" v-if="size >= 835">
      Thompson Accounting Company, PLLC
    </div>
    <div class="text-body-2" v-else>Thompson Accounting Company, PLLC</div>
    <v-spacer></v-spacer>
    <a
      href="mailto:vthompson@vivianethompson.com"
      class="text-decoration-underline text-body-1 dollarGreen--text"
      v-if="size >= 835"
      >vthompson@vivianethompson.com</a
    >
    <a
      href="mailto:vthompson@vivianethompson.com"
      class="text-decoration-underline text-body-2 dollarGreen--text"
      v-else
      >vthompson@vivianethompson.com</a
    >
    <v-spacer></v-spacer>
    <div class="text-body-1" v-if="size >= 835">O: (520) 822-8208</div>
    <div class="text-body-2" v-else>O: (520) 822-8208</div>
    <v-spacer></v-spacer>
    <div class="text-body-1" v-if="size >= 835">C: (520) 481-8015</div>
    <div class="text-body-2" v-else>C: (520) 481-8015</div>
    <v-spacer></v-spacer>
  </v-row>
  <div v-else>
    <v-layout>
      <v-col cols="8">
        <v-row justify="center">
          <v-spacer></v-spacer>
          <div class="text-body-1" v-if="size >= 835">
            Thompson Accounting Company, PLLC
          </div>
          <div class="text-body-2" v-else-if="size >= 515">
            Thompson Accounting Company, PLLC
          </div>
          <div class="text-caption" v-else>
            Thompson Accounting Company, PLLC
          </div>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center">
          <v-spacer></v-spacer>
          <a
            href="mailto:vthompson@vivianethompson.com"
            class="text-decoration-underline text-body-1 dollarGreen--text"
            v-if="size >= 835"
            >vthompson@vivianethompson.com</a
          >
          <a
            href="mailto:vthompson@vivianethompson.com"
            class="text-decoration-underline text-body-2 dollarGreen--text"
            v-else-if="size >= 515"
            >vthompson@vivianethompson.com</a
          >
          <a
            href="mailto:vthompson@vivianethompson.com"
            class="text-decoration-underline text-body-2 dollarGreen--text"
            v-else-if="size > 375"
            >vthompson@vivianethompson.com</a
          >
          <a
            href="mailto:vthompson@vivianethompson.com"
            class="text-decoration-underline text-caption dollarGreen--text"
            v-else
            >vthompson<br />@vivianethompson.com</a
          >
          <v-spacer></v-spacer>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-row justify="center">
          <v-spacer></v-spacer>
          <div class="text-body-1" v-if="size >= 835">O: (520) 822-8208</div>
          <div class="text-body-2" v-if="size >= 515">O: (520) 822-8208</div>
          <div class="text-caption" v-else>O: (520) 822-8208</div>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center">
          <v-spacer></v-spacer>
          <div class="text-body-1" v-if="size >= 835">C: (520) 481-8015</div>
          <div class="text-body-2" v-if="size >= 515">C: (520) 481-8015</div>
          <div class="text-caption" v-else>C: (520) 481-8015</div>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    size: Number
  }
};
</script>

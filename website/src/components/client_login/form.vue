<template>
  <v-container class="pa-10">
    <form
      action="https://vivianethompson.sharefile.com"
      class="pl-5 pr-5"
      method="post"
    >
      <v-text-field
        label="Email"
        name="username"
        required
        type="text"
      ></v-text-field>
      <v-text-field
        label="Password"
        name="password"
        required
        type="password"
      ></v-text-field>
      <v-row>
        <v-btn color="dollarGreen" type="submit">
          Login In
        </v-btn>
        <v-spacer></v-spacer>
        <a
          href="https://vivianethompson.sharefile.com/Authentication/Login#ForgotPassword"
          class="text-decoration-underline text-body-1 dollarGreen--text"
          >Forgot your Password?</a
        >
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

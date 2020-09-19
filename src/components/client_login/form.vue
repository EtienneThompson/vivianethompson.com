<template>
  <v-container>
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
      <v-btn color="dollarGreen" type="submit">
        Login In
      </v-btn>
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

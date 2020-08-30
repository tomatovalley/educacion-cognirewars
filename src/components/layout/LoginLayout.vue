<template>
  <v-app>
    <v-content>
      <v-col align="center" justify="center">
        <div>
          <img src="@/assets/logo.png" />
          <h2>Cognirewars</h2>
        </div>
        <router-view />
      </v-col>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LoginLayout",
};
</script>

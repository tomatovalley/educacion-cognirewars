<template>
  <v-app>
    <v-appBar app color="white" absolute>
      <v-toolbar>
        <v-toolbar-title> Cognirewars </v-toolbar-title>
      </v-toolbar>
    </v-appBar>
    <v-content>
      <v-col align="center" justify="center" class="info--text">
        <router-view />
      </v-col>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "ActividadLayout",
};
</script>

<template>
  <v-app>
    <v-appBar app color="white" absolute>
      <v-container fluid>
        <h3 class="info--text">Cognirewars</h3>
      </v-container>
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
  name: 'ActividadLayout',
};
</script>

<template>
  <v-app>
    <v-appBar app color="white" dark absolute>
      <div>
        hola
      </div>
    </v-appBar>
    <v-content>
      <v-col align="center" justify="center">
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

<template>
  <v-app>
    <v-content>
      <v-col align="center" justify="center">
        <div>
          <img src="@/assets/logo.png" />
          <h2 class="mb-5">Cognirewars</h2>
          <v-row align="center" justify="center">
            <v-btn class="mr-3" small color="Primary">Estudiante</v-btn>
            <v-btn small color="Primary">Profesor</v-btn>
          </v-row>
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

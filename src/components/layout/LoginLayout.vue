<template>
  <v-app>
    <v-content>
      <v-col align="center" justify="center" class="login-container primary white--text">
        <div>
          <v-avatar color="teal" size="12rem">
            <img src="@/assets/cerebro.svg" />
          </v-avatar>
          <h1 class="mb-5">Cognirewars</h1>
          <v-row align="center" justify="center">
            <v-btn class="mr-3" small color="Primary">Soy Estudiante</v-btn>
            <v-btn small color="Primary">Soy Profesor</v-btn>
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

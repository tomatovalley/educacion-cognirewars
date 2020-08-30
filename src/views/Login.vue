<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="fill-height" fluid>
      <v-col cols="12" xs="6">
        <v-row justify="center" align="center">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="5" lg="4">
              <div class="mb-2">
                <h3 class="text-left">Inicia tu aventura</h3>
              </div>
              <v-text-field
                v-model="email"
                label="Email"
                placeholder="Email"
                single-line
                solo
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                class="input-group--focused white--text"
                @click:append="show3 = !show3"
                hint="Mínimo 8 caracteres"
                counter
                single-line
                solo
                required
              ></v-text-field>
              <div class="text-center mt-4">
                <v-btn color="secondary" block @click="submit">Iniciar Sesión</v-btn>
              </div>
              <v-row class="mt-2">
                <p class="mx-auto">
                  Aún sin cuenta? ·
                  <router-link to="/registro">
                    <span class="secondary--text">Regístrate</span>
                  </router-link>
                </p>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      show3: false,
    };
  },
  name: "Login",
  methods: {
    login() {
      this.error = "";
    },
  },
};
</script>

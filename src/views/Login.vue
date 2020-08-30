<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <div>
            <p>Inicia tu aventura</p>
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
            class="input-group--focused"
            @click:append="show3 = !show3"
            hint="Mínimo 8 caracteres"
            counter
            single-line
            solo
            required
          ></v-text-field>
          <div class="text-center">
            <v-btn class="mr-4" color="error" @click="submit">
              Iniciar Sesión
            </v-btn>
          </div>
          <div>
            <p>Aún sin cuenta?</p>
          </div>
        </v-col>
      </v-row>
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

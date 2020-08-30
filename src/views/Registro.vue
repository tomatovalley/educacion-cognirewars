<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <div class="mb-2">
            <h3 class="text-left">Inicia tu aventura</h3>
          </div>

          <v-text-field
            v-model="name"
            label="Nombre completo"
            placeholder="Nombre completo"
            single-line
            solo
            required
          ></v-text-field>
          <v-text-field
            v-model="place"
            label="Escuela"
            placeholder="Escuela"
            single-line
            solo
            required
          ></v-text-field>
          <v-text-field v-model="email" label="Email" placeholder="Email" single-line solo required></v-text-field>

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
            <v-btn class="mb-2" block color="secondary" @click="submit">Crear cuenta</v-btn>
          </div>
          <v-row class="mt-2">
            <p class="mx-auto">
              Ya tengo cuenta ·
              <router-link to="/login">
                <span class="secondary--text">Iniciar sesión</span>
              </router-link>
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "registro",
  components: {},
};
</script>

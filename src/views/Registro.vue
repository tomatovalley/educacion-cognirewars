<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <div class="mb-2">
            <h3 class="text-left">Inicia tu aventura</h3>
          </div>

          <v-text-field
            v-model="newRegistro.nombre"
            label="Nombre completo"
            placeholder="Nombre completo"
            single-line
            solo
            required
          ></v-text-field>
          <v-text-field
            v-model="newRegistro.escuela"
            label="Escuela"
            placeholder="Escuela"
            single-line
            solo
            required
          ></v-text-field>
          <v-text-field
            v-model="newRegistro.email"
            label="Email"
            placeholder="Email"
            single-line
            solo
            required
          ></v-text-field>

          <v-text-field
            v-model="newRegistro.password"
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
            <v-btn
              class="mb-2"
              color="secondary"
              block
              @click.prevent="addRegistro()"
            >
              Crear cuenta
            </v-btn>
          </div>
          <div>
            <router-link to="/login"> Ya tengo cuenta </router-link>
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
import Firebase from 'firebase';
import 'firebase';
import config from '../config';

let app = Firebase.initializeApp(config);
let db = app.database();
let registroRef = db.ref('registro');

export default {
  name: 'registro',
  firebase: {
    registro: registroRef,
  },
  data: () => ({
    newRegistro: {
      nombre: '',
      escuela: '',
      email: '',
      password: '',
    },
  }),
  methods: {
    addRegistro() {
      registroRef.push(this.newRegistro).then(() => {
        console.log('Enviado con éxito');
      });
      this.newRegistro.nombre = '';
      this.newRegistro.escuela = '';
      this.newRegistro.email = '';
      this.newRegistro.password = '';
    },
  },
};
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-row align="center">
          <v-container class="p-20">
            <v-row justify="center" align="center">
              <v-col cols="3" sm="2" class="self-center">
                <v-avatar size="4rem" color="accent" />
              </v-col>
              <v-col cols="9" sm="10">
                <div class="d-flex flex-column justify-start">
                  <h3 class="text-left">Curso de finanzas</h3>
                  <span class="accent--text text-left">Lic. Marta Maestre</span>
                  <span class="secondary--text mr-1 text-left">35 alumnos</span>
                  <span class="secondary--text text-left"
                    >15/20 actividades</span
                  >
                </div>
              </v-col>
            </v-row>
            <v-row>
              <p class="text-left">
                Se busca que el estudiante aprenda los conceptos básicos. Que
                pueda distinguir los distintos tipos de...
              </p>
            </v-row>
            <v-row>
              <h4>Actividades recientes</h4>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <v-card color="white" class="d-block mt-2">
                  <v-card-text>
                    <h4 class="info--text text-left">
                      Ejercicio de inversiones
                    </h4>
                    <p class="display secondary--text text-left">
                      Enviado
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-row>
                <router-link to="/actividad/ranking">
                  <h4 class="mt-4 secondary--text">
                    🔥🔥 Ver ranking de estudiantes
                  </h4>
                </router-link>
              </v-row>
              <v-row>
                <router-link to="/actividad/ranking">
                  <h4 class="mt-4 secondary--text">
                    Crear curso
                  </h4>
                </router-link>
              </v-row>
              <v-row>
                <router-link to="/actividad/ranking">
                  <h4 class="mt-4 secondary--text">
                    Crear actividades
                  </h4>
                </router-link>
              </v-row>
            </v-row>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  /*   data: () => ({
    newRegistro: {
      nombre: "",
      escuela: "",
      email: "",
      password: ""
    },
  }), */
};
</script>

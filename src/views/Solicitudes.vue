<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div>
          <h2 class="mb-12">Solicitude pendientes</h2>
          <v-card color="white" class="mt-n10 mx-auto" max-width="344">
            <img src="@/assets/maestra.png" class="mt-8" height="100.0" />
            <v-card-text>
              <h2 class="info--text">Curso de finanzas</h2>
              <p class="display accent--text">
                Lic. Martha Mestre
              </p>
              <p class="display text--primary">
                Los estudios de finanzas buscan educar finacieramente a los
                alumnos para que tengan una mejor administración de sus dinero.
              </p>
              <v-row align="baseline" justify="center">
                <span class="secondary--text"> Cancelar</span>
                <router-link to="/actividad/detalles-curso">
                  <v-btn class="mb-4 ml-4 " color="secondary">
                    Unirme
                  </v-btn>
                </router-link>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

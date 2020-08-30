<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div>
          <h2 class="mb-12">Solicitude pendientes</h2>
          <v-card color="#eaeaea" class="mt-n10 mx-auto" max-width="344">
            <img src="@/assets/maestra.png" class="mt-8" height="100.0" />
            <v-card-text>
              <h3>Curso de finanzas</h3>
              <p class="display text--primary">
                Lic. Martha Mestre
              </p>
              <p class="display text--primary">
                Los estudios de finanzas buscan educar finacieramente a los
                alumnos para que tengan una mejor administración de sus dinero.
              </p>
              <v-row lign="center" justify="center">
                <v-btn class="mr-4" color="error"> Cancelar </v-btn>
                <v-btn class="mb-4" color="teal accent-3"> Unirme </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

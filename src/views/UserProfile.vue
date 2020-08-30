<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div>
          <img src="@/assets/perfil.png" height="250.0" />
          <h2 class="mb-4">Gabriel Álvarez</h2>
          <h3 class="mr-4">Estudiante</h3>
          <p>Sobre mí:</p>
          <ul>
            - Aprender cada día
          </ul>
          <ul>
            - Me gusta la música
          </ul>
          <ul>
            - Campeona departamental olimpiadas de matématicas
          </ul>
        </div>
        <div>
          <h2 class="mt-4 mb-14">Actividad reciente</h2>
          <v-card color="#eaeaea" class="mt-n12 mx-auto" max-width="344">
            <v-card-text>
              <h3>Ejercicio de inversiones</h3>
              <p class="display text--primary">
                Enviado
              </p>
            </v-card-text>
          </v-card>
          <h2 class="mt-4">Badges</h2>
          <img src="@/assets/badges.png" height="95.0" />
          <img src="@/assets/badges.png" height="95.0" />
          <img src="@/assets/badges.png" height="95.0" />
          <h2>Cursos</h2>
          <v-card color="#eaeaea" class="my-8 mx-auto" max-width="344">
            <v-card-text>
              <h3>Cursos de Finanzas</h3>
              <p class="display text--primary">
                Lic. Martha Maestre
              </p>
              <h5>Temario</h5>
              <p class="display text--primary">
                Los estudios de finanzas buscan educar finacieramente a los
                alumnos para que tengan una mejor administración de sus
                finanzas.
              </p>
            </v-card-text>
          </v-card>
          <v-card color="#eaeaea" class="mx-auto" max-width="344">
            <v-card-text>
              <h3>Cursos de Historia</h3>
              <p class="display text--primary">
                Lic. Rodolfo Alvarado
              </p>
              <h5>Temario</h5>
              <p class="display text--primary">
                Los estudios de historia buscan crear conciencias en los
                individuos que conforman esta nación.
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

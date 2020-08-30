<template>
  <v-form>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <div>
            <h2 class="mb-6">Crear actividad</h2>
          </div>
          <v-text-field
            v-model="actividad"
            label="actividad"
            placeholder="Nombre de la actividad"
            single-line
            solo
            required
          ></v-text-field>

          <v-text-field
            v-model="descripcion"
            label="descripcion"
            placeholder="Descripcion de la actividad"
            single-line
            solo
            required
          ></v-text-field>
          <v-text-field
            v-model="fecha"
            label="fecha"
            placeholder="Disponible hasta"
            single-line
            solo
            required
          ></v-text-field>
          <div class="text-center">
            <v-btn class="mb-2" block color="secondary" @click="submit">Crear curso</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

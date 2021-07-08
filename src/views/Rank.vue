<template>
  <v-card
    class="mt-10 mx-auto text-center"
    color="accent"
    dark
    max-width="1000"
  >
    <v-card-text>
      <h1 class="mt-20 mb-6 info--text">Ranking</h1>
      <v-sheet color="primary">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> {{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin info--text">
        Top de los mejores grupos en Instituto Cumbres
      </div>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [1, 2, 9, 10, 13, 4, 6],
  }),
};
</script>

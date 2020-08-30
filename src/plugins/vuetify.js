import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#264653',
        secondary: '#2A9D8F',
        accent: '#BCB9B9',
        error: '#E75151',
        info: '##0A1317',
      },
    },
  },
});

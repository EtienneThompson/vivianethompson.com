import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        darkGreen: '#013220',
        dollarGreen: "#85bb65",
        ocean: '#016064',
      }
    }
  }
});

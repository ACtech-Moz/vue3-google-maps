const { createApp } = require("vue");
import App from "./App.vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "Chave_Google_Map",
      libraries: "places"
    },
    autobindAllEvents: true,
  })
  .mount("#app");

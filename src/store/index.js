import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
// import VuexPersistence from "vuex-persist";
import database from "./database";

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
//   key: "qr-app"
// });

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

export default store;

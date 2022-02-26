import Vue from "vue";

import App from "./app/App";

// make jw pagination component available in application
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
    el: "#app",
    render: h => h(App)
});

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify"; // Adjust the import path if necessary
import App from "./App.vue";
import Home from "./views/Home.vue";
import About from "./views/AboutUs.vue";
import Checkout from "./views/Checkout.vue";
import Contact from './views/Contact.vue';
import Member from './views/Membership.vue'
import SignUp from "./components/Membership/Sign-Up.vue";
import Forgot from "./components/Membership/Forgot_Pass.vue";
import Terms from "./views/Terms.vue";
import Privacy from "./views/PrivacyPolicyView.vue";
import Disclaimer from './views/Disclaimer.vue'
import Dashboard from './views/Dashboard.vue';
import DashboardAccount from './components/Dashboard/DashboardAccount.vue' 
import DashboardSupport from './components/Dashboard/DashboardSupport.vue'
// Vuetify CSS
import "vuetify/dist/vuetify.min.css";

// SCSS Imports
import "./assets/scss/main/_variables.scss";
import "./assets/scss/main/_normalize.scss";
import "./assets/scss/main/_global.scss";
import "./assets/scss/pages/index-html.scss";

// CSS Imports
import "./assets/css/normalize.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-5.10.2.min.css";
import "./assets/css/plugin/owl.carousel.min.css";
import "./assets/css/plugin/nice-select.css";
import "./assets/css/plugin/animate.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// jQuery and Other Scripts (consider alternatives)
import "./assets/js/jquery.min.js";
import "./assets/js/plugin/jquery.rcounter.js";
import "./assets/js/plugin/owl.carousel.min.js";
import "./assets/js/plugin/jquery.nice-select.min.js";
import "./assets/js/main.js";
import "./assets/js/plugin/jquery.rcounter"
// PrimeIcons CSS
import 'primeicons/primeicons.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/checkout", component: Checkout }, // Corrected path to lowercase
    { path: "/contact", component: Contact },
    { path: "/login", component: Member },
    { path: "/sign-up", component: SignUp },
    { path: "/forgot", component: Forgot },
    { path: "/terms", component: Terms },
    { path: "/privacy", component: Privacy },
    { path: "/disclaimer", component: Disclaimer },
    { path: "/dashboard/home", component: Dashboard },
    { path: "/dashboard/account", component: DashboardAccount },
    { path: "/dashboard/support", component: DashboardSupport },
  ],
});

const vuetify = createVuetify(); // Create Vuetify instance
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Member from '../views/Membership.vue'
import SignUp from '../components/Membership/Sign-Up.vue' // Corrected path
import Forgot from '../components/Membership/Forgot_Pass.vue' // Corrected path
import Terms from '../views/Terms.vue' 
import Privacy from '../views/PrivacyPolicyView.vue'
import Disclaimer from '../views/Disclaimer.vue'
import DashboardHome from '../views/Dashboard.vue'
import DashboardAccount from '../components/Dashboard/DashboardAccount.vue'
import DashboardSupport from '../components/Dashboard/DashboardSupport.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login', // Assuming this is for login, renamed it to 'login'
    name: 'Login',
    component: Member
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  },
  {
    path: '/dashboard/Home',
    name: 'DashboardHome',
    component: DashboardHome
  },
  {
    path: '/dashboard/account',
    name: 'DashboardAccount',
    component: DashboardAccount
  },
  {
    path: '/dashboard/support',
    name: 'DashboardSupport',
    component: DashboardSupport
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

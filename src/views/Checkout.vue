<template>
  <v-container fluid>
    <v-row>
      
        <Navbar />
        <Checkout />
        <CheckoutFeatures />
        <Footer />
    </v-row>
  </v-container>
</template>

<script>
// Import your components here
import Navbar from '@/components/Header/Navbar.vue'
import Checkout from '@/components/ViewSection/Checkout.vue';
import CheckoutFeatures from '@/components/ViewSection/Checkout-Features.vue'; 
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'YourPageName',
  components: {
    Navbar,
    Checkout,
    CheckoutFeatures,
    Footer,
  },
  mounted() {
    // Set the title for the page
    document.title = "Package Checkout";
  }
}
</script>

<style scoped>
.section-head {
  margin-top: -70% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h3, p {
  color: black;
}
.p {
  font-weight: 400;
  size: 16px;
  font-style: normal;
  color: #5d5779;
  line-height: 28px;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
}
</style>

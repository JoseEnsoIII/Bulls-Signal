<template>
    <div>
      <Navbar1 />
      <PrivacyPolicy />
      <Privacy />
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import Navbar1 from "@/components/Header/Navbar1.vue";
  import PrivacyPolicy from "../components/Banner/PrivacyPolicy.vue";
  import Privacy from "@/components/ViewSection/Privacy.vue";
  import Footer from "@/components/Footer/Footer.vue"
  
  // Set the title for the page
  document.title = "Privacy and Conditions";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      Navbar1,
      PrivacyPolicy,
      Privacy,
      Footer,
    },
  });
  </script>
  
  <style scoped>
  
  </style>
  
<template>
    <div>
      <Navbar1 />
      <TermsBanner />
      <Terms />
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import Navbar1 from "@/components/Header/Navbar1.vue";
  import TermsBanner from "../components/Banner/Terms-Banner.vue";
  import Terms from "@/components/ViewSection/Terms.vue";
  import Footer from "@/components/Footer/Footer.vue"
  
  // Set the title for the page
  document.title = "Terms and Conditions";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      Navbar1,
      TermsBanner,
      Terms,
      Footer,
    },
  });
  </script>
  
  <style scoped>
  
  </style>
  
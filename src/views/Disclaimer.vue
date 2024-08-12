<template>
    <div class="disc">
      <Navbar1 />
      <DisclaimerBanner />
      <Disclaimer />
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import Navbar1 from "@/components/Header/Navbar1.vue";
  import DisclaimerBanner from "../components/Banner/DisclaimerBanner.vue";
  import Disclaimer from "@/components/ViewSection/Disclaimer.vue";
  import Footer from "@/components/Footer/Footer.vue"
  
  // Set the title for the page
  document.title = "Disclaimer and Conditions";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      Navbar1,
      DisclaimerBanner,
      Disclaimer,
      Footer,
    },
  });
  </script>
  
  <style scoped>
.disc{
  background-color: #f0f5fc;
}
</style>

  
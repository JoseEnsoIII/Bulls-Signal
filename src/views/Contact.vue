<template>
  <div>
    <Navbar1 />
    <ContactBanner />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Navbar1 from "@/components/Header/Navbar1.vue";
import ContactBanner from "../components/Banner/ContactBanner.vue";
import Contact from "@/components/ViewSection/Contact1.vue";
import Footer from "@/components/Footer/Footer.vue"

// Set the title for the page
document.title = "Contact Us";
</script>

<script lang="ts">
export default defineComponent({
  name: "YourComponent",
  components: {
    Navbar1,
    ContactBanner,
    Contact,
    Footer,
  },
});
</script>

<style scoped>

</style>

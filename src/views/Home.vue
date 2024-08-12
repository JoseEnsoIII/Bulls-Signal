<template>
  <div>
    <Navbar />
    <Banner />
    <ScrollUp />
    <Counter />
    <Feature />
    <Portfolio />
    <Price />
    <Testimonials />
    <OpenAccount />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Navbar from "@/components/Header/Navbar.vue";
import Banner from "@/components/Banner/Banner.vue";
import ScrollUp from "@/components/ScrollUp/scrollup.vue";
import Counter from "@/components/ViewSection/Counter.vue";
import Feature from "@/components/ViewSection/Feature.vue";
import Portfolio from "@/components/ViewSection/Portfolio.vue";
import Price from "@/components/ViewSection/Price1.vue";
import Testimonials from "@/components/ViewSection/Testimonials.vue";
import OpenAccount from "@/components/ViewSection/OpenAccount.vue";
import Footer from "@/components/Footer/Footer.vue";

const scrollToTop = ref(false);

const scrollToTopMethod = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  scrollToTop.value = window.scrollY > 0;
});

onMounted(() => {
  // Set the title for the page
  document.title = "Bulls Signals";
});
</script>

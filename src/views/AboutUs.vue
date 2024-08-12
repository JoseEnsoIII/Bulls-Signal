<template>
  <div>
    <Navbar1 />
    <AboutBanner />
    <SectionBanner />
    <HistoryBanner />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Navbar1 from "../components/Header/Navbar1.vue"
import AboutBanner from "../components/Banner/AboutBanner.vue";
import SectionBanner from "../components/ViewSection/Section-Banner.vue";
import HistoryBanner from '../components/ViewSection/History-Banner.vue'
import Footer from '../components/Footer/Footer.vue'

export default defineComponent({
  name: "YourComponent",
  components: {
    Navbar1,
    AboutBanner,
    SectionBanner,
    HistoryBanner,
    Footer,
  },
  setup() {
    onMounted(() => {
      // Set the title for the page
      document.title = "About Us";
    });
  },
});
</script>
<style scoped>

</style>
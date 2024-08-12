<template>
  <div class="main-container">
    <v-btn
      v-if="showFab"
      color="blue darken-2"
      dark
      fab
      @click="scrollToTop"
      class="scroll-up-btn"
    >
      <i class="pi pi-arrow-up"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFab: false
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 700) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.scroll-up-btn {
  background: linear-gradient(45deg, #903eff 0%, #3e19ff 100%);
  position: fixed; /* Change position to fixed */
  bottom: 20px; /* Adjusted bottom to 20px */
  right: 20px; /* Adjusted right to 20px */
  z-index: 500;
  height: 20px; /* Adjusted height to 20px */
  width: 20px !important; /* Adjusted width to 20px */
  border-radius: 4px;
  color: white !important;
}


/* Add your media queries here if needed */
</style>

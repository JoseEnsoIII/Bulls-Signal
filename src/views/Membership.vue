<template>
    <div>
      <MemberBanner />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import MemberBanner from "../components/Banner/Member-Banner.vue";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      MemberBanner,
    },
  });

  // Set the title for the page
document.title = "Bulls Signals - Members Login";
  </script>
  <style scoped>
  
  </style>
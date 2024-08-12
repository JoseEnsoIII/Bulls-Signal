<template>
    <div>
      <DashboardNavbar />
      <Dashboard />
      <DashboardFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import DashboardNavbar from "@/components/Header/DashboardNav.vue";
  import Dashboard from "../components/Dashboard/Dashboard-Home.vue";
  import DashboardFooter from "@/components/Footer/Dashboard-Footer.vue"
  
  // Set the title for the page
  document.title = "Dashboard | Bulls Signal";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      DashboardNavbar,
      Dashboard,
      DashboardFooter,
    },
  });
  </script>
  
  <style scoped>
  
  </style>
  
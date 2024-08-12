<template>
    <div>
      <DashboardNavbar />
      <Account />
      <DashboardFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from "vue";
  import DashboardNavbar from "@/components/Header/DashboardNav.vue";
  import Account from "@/components/Dashboard/Account.vue";
  import DashboardFooter from "@/components/Footer/Dashboard-Footer.vue"
  
  // Set the title for the page
  document.title = "Account | Bulls Signal";
  </script>
  
  <script lang="ts">
  export default defineComponent({
    name: "YourComponent",
    components: {
      DashboardNavbar,
      Account,
      DashboardFooter,
    },
  });
  </script>
  
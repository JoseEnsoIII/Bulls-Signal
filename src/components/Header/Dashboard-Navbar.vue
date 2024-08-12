<template>
  <v-app>
    <div class="navbar-container">
      <v-app-bar
        app
        height="215"
        :style="appBarStyle"
        :color="appBarColor"
        elevation="0"
        class="navb"
      >
        <v-toolbar-title style="margin-left: 8%">
          <a href="/" style="text-decoration: none; color: inherit">
            <img src="/public/img/tran_logo.png" alt="Logo" height="100" />
          </a>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-col cols="auto" class="user">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon style="border: 2px solid ;border-radius: 50% ;height: 35px; width: 35px;">pi pi-user</v-icon>
            </v-col>
            <v-col cols="auto">
              <span>Welcome, <br><span id="client_name">Guest</span></span>
            </v-col>
          </v-row>
        </v-col>
      </v-app-bar>
    </div>

    <!-- Your main content here -->
  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appBarColor: "transparent",
      appBarStyle: {},
    };
  },
  computed: {
    // Computed property to dynamically calculate the background color based on scroll position
    scrollColor() {
      return window.pageYOffset > 0 ? "#391E60" : "transparent";
    },
  },
  methods: {
    handleScroll() {
      this.appBarColor = window.pageYOffset === 0 ? "transparent" : "#391E60";
      const navButtons = document.querySelectorAll(".navbutton2");
      if (navButtons) {
        navButtons.forEach((navButton) => {
          if (window.pageYOffset > 0) {
            navButton.classList.add("scrolled");
          } else {
            navButton.classList.remove("scrolled");
          }
        });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Listen for scroll event
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Remove scroll event listener
  },
};
</script>

<style scoped>
.user {
  position: absolute;
  top: 10;
  right: 5%;
}

.navbar-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1100;
  /* Adjust as needed */
}

.navbutton2.scrolled {
  border: 1px solid white;
}

.navbutton2 {
  margin-left: 10px;
  margin: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 50px !important;
  font-style: normal;
  color: #ffffff;
  line-height: 28px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;
  /* You need to add the font family correctly */
  letter-spacing: 0;
}

.navbutton {
  margin-left: 5px;
  margin: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 50px !important;
  font-style: normal;
  color: #ffffff;
  line-height: 28px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;
  /* You need to add the font family correctly */
  letter-spacing: 0;
}

.navbutton1 {
  margin-right: 5%;
  /* Adjusted margin-left */
}

.menu-icon {
  display: none !important;
}
</style>

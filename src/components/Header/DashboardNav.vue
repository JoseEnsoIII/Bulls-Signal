<template>
  <v-app>
    <div class="navbar-container" :style="{ backgroundColor: navBackgroundColor }">
      <v-app-bar app height="170" :style="appBarStyle" :color="appBarColor" elevation="0" class="navb">
        <v-toolbar-title style="margin-left: 8%">
          <a href="/" style="text-decoration: none; color: inherit;">
            <img class="navlogo" src="/public/img/tran_logo.png" alt="Logo" height="150" />
          </a>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="navbutton1">
          <v-row align="center">
            <div class="welcome">
              <v-col cols="auto" style="margin-left: -60%;">
                <v-icon style="border: 2px solid ;border-radius: 50% ;height: 35px; width: 35px; ">pi pi-user</v-icon>
              </v-col>
              <v-col cols="auto">
                <span>Welcome, <br><span id="client_name">Guest</span></span>
              </v-col>
            </div>
          </v-row>
          <v-btn v-if="isMobileMenuVisible" icon @click="toggleMenu" class="menu-icon">
            <i class="pi pi-bars" :style="{ color: menuIconColor }"></i>
          </v-btn>
        </div>

        <!-- Dropdown menu section -->
        <section v-if="menuOpen" class="dropdown-wrapper"
          :style="{ top: `${menuPositionY}px`, left: `${menuPositionX}px`, transformOrigin: 'top left' }">
          <button class="dropdown-trigger-button" @click="toggleMenu">
            <i class="pi pi-times" style="color: white;"></i>
          </button>
          <div class="dropdown-content">
            <!-- Place your dropdown menu items here -->
            <v-btn class="dropdown-text" href="/dashboard/home" text @click="handleMenuItemClick('')"> <v-icon
                style="border: 2px solid ;border-radius: 50% ;height: 35px; width: 35px;margin:0  5px 5px 0;">pi pi-user</v-icon>Welcome
              Guest</v-btn>
            <v-btn class="dropdown-text" href="/dashboard/home" text @click="handleMenuItemClick('')">Home</v-btn>
            <v-btn class="dropdown-text" href="/dashboard/account" text @click="handleMenuItemClick('')">Account</v-btn>
            <v-btn class="dropdown-text" href="/dashboard/support" text @click="handleMenuItemClick('')">Support</v-btn>
          </div>
        </section>
        <!-- End dropdown menu section -->
      </v-app-bar>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appBarColor: "transparent",
      appBarStyle: {},
      menuOpen: false,
      menuPositionX: null,
      menuPositionY: null,
      menuIconColor: "#fff",
      isMobileMenuVisible: false, // Add a new data property to control mobile menu visibility
    };
  },
  computed: {
    scrollColor() {
      return window.pageYOffset > 0 ? "#391E60" : "transparent";
    },
    navBackgroundColor() {
      return window.innerWidth <= 320 ? "#391E60" : "transparent";
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

      // Update menu icon color based on nav transparency
      this.menuIconColor = this.appBarColor === "transparent" ? "#391e60" : "#fff";

      // Toggle visibility of the mobile menu icon based on screen width
      this.isMobileMenuVisible = window.innerWidth <= 1024;
    },
    handleMenuItemClick(item) {
      console.log("Clicked on:", item);
      this.toggleMenu(); // Close the menu when a menu item is clicked
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.menuPositionX = 0; // Adjust as needed
        this.menuPositionY = 170; // Adjust as needed
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll); // Listen to window resize events
    this.handleScroll(); // Call handleScroll initially to set initial state
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll); // Remove resize event listener
  },
};

</script>


<style scoped>
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
  margin-right: 10%;
  /* Adjusted margin-left */
}

.menu-icon {
  display: none !important;

}

.v-list-item {
  font-size: 16px;
  font-weight: 500;
  background-color: #391E60;
  width: 100%;
}

.v-list-item:hover {
  background-color: #391E60;
}

.dropdown-wrapper {
  position: fixed;
  z-index: 1000;
  background-color: #391E60;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  margin-top: -3%;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0;
  line-height: 28px;
  text-decoration: none;
}

.dropdown-text {
  margin-left: 10% !important;
  margin: 5px;
  text-transform: none;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}

.dropdown-trigger-button {
  display: none;
}

.menu-open {
  max-height: 500px;
  /* Adjust the height as needed */
}
.navbutton1 {
  margin-right: 0%; /* Adjusted margin-right */
  display: flex; /* Add flex display */
  align-items: center; /* Align items vertically */
}

.welcome {
  margin-right: 10px; /* Adjust margin between icon and text */
  display: flex; /* Add flex display */
  align-items: center; /* Align items vertically */
}

.welcome span {
  margin-left: 5px; /* Adjust margin between icon and text */
}

@media (max-width: 999px) and (min-width: 320px) {
  .navbar-container {
    background-color: #391E60;
    /* Set background color within the specified range */
  }

  .welcome {
    display: none;
  }
}

@media only screen and (max-width: 999px) {
  .menu-icon {
    display: block !important;
    margin-left: 50% !important; /* Adjusted margin-left */
    margin-right: 50px !important; /* Added margin-right */
  }

  .navbutton2 {
    display: none;
  }

  .navbutton {
    display: none;
  }

  .navbutton1 {
    margin-left: 5% !important;
  }

  .dropdown-menu {
    left: 0 !important;
    top: 65px !important;
    border-radius: 0 !important;
    width: 100%;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5) !important;
  }

  .dropdown-menu-item {
    padding: 0 16px !important;
  }
}


@media only screen and (min-width: 998px) {
  .menu-icon {
    display: block !important;
    margin-right: 10% !important;
    /* Adjusted margin-right */
  }
}

@media only screen and (min-width: 320px) and (max-width: 998px) {
  .navb {
    height: 160px;
  }
}

@media only screen and (max-width: 480px) {
  .navlogo {
    height: 100px;
    /* Adjust as needed */
    width: auto;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .navlogo {
    height: 120px;
    /* Adjust as needed */
    width: auto;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .navlogo {
    height: 140px;
    /* Adjust as needed */
    width: auto;
  }
}
</style>

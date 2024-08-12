<template>
  <v-app>
    <div class="navbar-container">
      <v-app-bar
        app
        height="180"
        :style="appBarStyle"
        :color="appBarColor"
        elevation="0"
        class="navb"
      >
        <v-toolbar-title style="margin-left: 8%">
          <a href="/" style="text-decoration: none; color: inherit">
            <img src="/public/img/tran_logo.png" alt="Logo" height="150" />
          </a>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="navbutton1">
          <v-btn text href="/" class="navbutton">Home</v-btn>
          <v-btn href="#section-p" text class="navbutton">Packages</v-btn>
          <v-btn text href="/about" class="navbutton">About Us</v-btn>
          <v-btn href="/contact" text class="navbutton">Contacts</v-btn>
          <v-btn
            href="/login"
            text
            class="navbutton2"
            style="
              height: 50px;
              background: rgb(139, 60, 255);
              background: linear-gradient(
                90deg,
                rgba(139, 60, 255, 1) 0%,
                rgba(106, 45, 255, 1) 50%,
                rgba(66, 27, 255, 1) 100%
              );
              border-radius: 25px;
            "
          >
            Members Entry
          </v-btn>
          <v-btn
            href="#section-p"
            text
            class="navbutton2"
            style="
              height: 50px;
              background: rgb(139, 60, 255);
              background: linear-gradient(
                90deg,
                rgba(139, 60, 255, 1) 0%,
                rgba(106, 45, 255, 1) 50%,
                rgba(66, 27, 255, 1) 100%
              );
              border-radius: 25px;
            "
          >
            Buy Package
          </v-btn>
          <!-- Menu Icon with Image -->
          <v-btn icon @click="toggleMenu" class="menu-icon">
            <v-icon>mdi-menu</v-icon>
            <img
              src="/public/img/menu.png"
              alt="Menu"
              style="height: 15px; width: 15px"
            />
          </v-btn>
        </div>
      </v-app-bar>
    </div>

    <!-- Your main content here -->

    <v-menu
      offset-y="10%"
      v-model="menuOpen"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="menu-icon">
          <v-icon>mdi-menu</v-icon>
          <img
            src="/public/img/menu.png"
            alt="Menu"
            style="height: 20px; width: 20px"
          />
        </v-btn>
      </template>
      <!-- Dropdown menu content -->
      <v-list class="dropdown-menu">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleMenuItemClick(item)"
          class="dropdown-menu-item"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appBarColor: "transparent",
      appBarStyle: {},
      menuItems: [
        { text: "Home" },
        { text: "Packages" },
        { text: "About" },
        { text: "Contacts" },
        { text: "Members Entry" },
        { text: "Buy Package" },
      ],
      menuOpen: false, // Add menuOpen to control the dropdown
      menuPositionX: null,
      menuPositionY: null,
    };
  },
  computed: {
    // Computed property to dynamically calculate the background color based on scroll position
    scrollColor() {
      return window.pageYOffset > 0 ? "#66cc33" : "transparent";
    },
  },
  methods: {
    handleScroll() {
      this.appBarColor = window.pageYOffset === 0 ? "transparent" : "#8438ff";
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

    handleMenuItemClick(item) {
      // Handle menu item click event here
      console.log("Clicked on:", item.text);
    },
    toggleMenu() {
      // Toggle the menuOpen state
      this.menuOpen = !this.menuOpen;
      // If menu is open, set the position of the menu
      if (this.menuOpen) {
        this.menuPositionX = "left";
        this.menuPositionY = "top";
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

.v-list-item {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  background-color: #66cc33;
  width: 100%;
}

.v-list-item:hover {
  background-color: #66cc33;
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

@media only screen and (max-width: 999px) {
  .menu-icon {
    display: block !important;
    margin-left: 90%;
    /* Adjusted margin-left */
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
    display: block;
  }
}
</style>

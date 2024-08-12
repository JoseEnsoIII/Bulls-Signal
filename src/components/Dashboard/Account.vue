<template>
  <div class="dashboard-container">
      <div class="dashboard-main">
      <v-row>
        <!-- Dashboard Sidebar -->
        <v-col cols="12" md="2">
          <div class="dashboard-sidebar"  style="" >
            <div class="dashboard-nav">
              <v-list>
                <v-list-item
                  link
                  to="/dashboard/home"
                  :class="{ active: isActiveTab('home') }"
                >
                  <v-list-item-title
                    :style="{ color: isActiveTab('home') ? '#6221bd' : '' }"
                  >
                    <img
                      class="icon"
                      src="/public/images/home-icon.svg"
                      alt=""
                    />
                    Home
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/account">
                  <v-list-item-title>
                    <img
                      class="icon"
                      src="/public/images/info-icon.svg"
                      alt=""
                    />
                    Account
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/support">
                  <v-list-item-title>
                    <img
                      class="icon"
                      src="/public/images/info-icon.svg"
                      alt=""
                    />
                    Support
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>

        <!-- Dashboard Content -->
        <div class="dashboard-content" style="margin-left: 3%; ">
          <div class="dashboard-head">
            <div class="dashboard-head-left">
              <h1 style="color: rgb(181, 13, 128)">Personal Details</h1>
              <img
                class="edit_details"
                id="update_details"
                src="/public/images/edit-icon-png-3602.png"
                alt=""
                style="height: 50px"
              />
            </div>
            <v-divider style="width: 190%"></v-divider>
            <div class="dashboard-head-right" style="padding-top: 0px"></div>
          </div>
          <div class="dashboard-home-content">
            <v-row class="form-row-grid d-flex"
            style="margin-top: 5%;">
                    <v-col cols="6" class="form-grid-col">
                      <label>First Name</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <label>Last Name</label>
                      <v-select
                        v-model="lastName"
                        variant="outlined"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex"
                  style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                      <label>Postal</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <label>Email</label>
                      <v-text-field
                        v-model="lastName"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                       <label>Address</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                       <label>City</label>
                      <v-text-field
                        v-model="lastName"
                        label="City"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                       <label></label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        label="Phone"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                       <label></label>
                      <v-text-field
                        v-model="lastName"
                        label="Select Country"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn 
    style="border-radius: 25px;
           background-color: #391E60;
           color: white;
           height: 55px;"
           width="110px"
    class="custom-btn"
>Save</v-btn>

                    </v-col>
                  </v-row>
            
          </div>
        </div>
        <!-- Include your dashboard content here -->
      </v-row>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: '', // Initialize firstName
      lastName: ''   // Initialize lastName
    };
  },
  methods: {
    isActiveTab(tabName) {
      // Define method to check active tab here
    },
    // Define other methods for your component here
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
}

.dashboard-main {
  flex: 1; /* Allow the main content to grow and fill available space */
  display: flex;
  justify-content: space-between;
  margin-top: -50%;
  margin-left: 2%;
  margin-right: 2%;
  background-image: url("/public/images/about-top-right.png");
}
.dashboard-sidebar {
  width: 100%;
  margin-top: 100% !important;
}
.dashboard-content {
  margin-top: 15% !important;
}
h1 {
  font-weight: bolder;
font-size: 60px;
font-style: normal;
color: #b50d80;
line-height: 66px;
text-decoration: none;
transform: none;
font-family: "Open Sans", sans-serif;
letter-spacing: 0;
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
.custom-btn:hover {
    background-color: white;
    color: black;
}
@media only screen and (min-width: 320px) and (max-width: 1024px) {
  .dashboard-sidebar {
    display: none;
  }
}
@media only screen and (min-width: 320px) and (max-width: 350px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -80% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
 
}
@media only screen and (min-width: 350px) and (max-width: 400px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -60% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
 
}
@media only screen and (min-width: 400px) and (max-width: 450px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -50% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
 
}
@media only screen and (min-width: 450px) and (max-width: 500px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -40% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 500px) and (max-width: 550px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -30% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 550px) and (max-width: 600px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -20% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 650px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -10% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 650px) and (max-width: 700px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -10% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 700px) and (max-width: 750px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 0% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 750px) and (max-width: 800px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 0% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 800px) and (max-width: 900px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 10% !important; /* Remove negative margin */
    padding: 5%;
    margin-bottom: 20%;
  }
}
@media only screen and (min-width: 900px) and (max-width: 1024px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 10% !important; /* Remove negative margin */
    margin-left:-5% !important;
    margin-bottom: 20%;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  /* Small Tablets (1025px - 1280px) */
  .dashboard-main {
    flex-direction: row;
  }
  .dashboard-sidebar {
    margin-top: 130% !important;
    margin-right: 2%;
  }
  .dashboard-main{
    margin-top: -65%;
  }
  .dashboard-content {
    margin-top: 18% !important;
  }
  
}

@media only screen and (min-width: 1280px) and (max-width: 1366px) {
  /* Standard Tablets (1281px - 1366px) */
  .dashboard-main {
    flex-direction: row;
  }
  .dashboard-sidebar {
    margin-top: 120% !important;
    margin-right: 2%;
  }
  .dashboard-main{
    margin-top: -70%;
  }
  .dashboard-content {
    margin-top: 18% !important;
  }
  
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  /* Small Laptops (1367px - 1440px) */
  .dashboard-main {
    flex-direction: row;
  }
  .dashboard-sidebar {
    margin-top: 120% !important;
    margin-right: 2%;
  }
  .dashboard-main{
    margin-top: -85%;
  }
  .dashboard-content {
    margin-top: 18% !important;
  }
  
}



@media only screen and (min-width: 1600px) and (max-width: 1920px) {
  /* Large Laptops (1601px - 1920px) */
  .dashboard-main {
    flex-direction: row;
  }
  .dashboard-sidebar {
    margin-top: 120% !important;
    margin-right: 2%;
  }
  .dashboard-main{
    margin-top: -65%;
  }
  .dashboard-content {
    margin-top: 18% !important;
  }
  
}
</style>

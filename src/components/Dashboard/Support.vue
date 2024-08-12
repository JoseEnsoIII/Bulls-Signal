<template>
  <div class="dashboard-container">
    <div class="dashboard-main">
      <v-row>
        <!-- Dashboard Sidebar -->
        <v-col cols="12" md="2">
          <div class="dashboard-sidebar">
            <div class="dashboard-nav">
              <v-list>
                <v-list-item link to="/dashboard/home">
                  <v-list-item-title>
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
                <v-list-item
                  link
                  to="/dashboard/support"
                  :class="{ active: isActiveTab('home') }"
                >
                  <v-list-item-title
                    :style="{ color: isActiveTab('home') ? '#6221bd' : '' }"
                  >
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
        <v-col>
          <div class="dashboard-content" style="margin-left: 3%">
            <div class="dashboard-head">
              <div class="dashboard-head-left" style="width: 120%">
                <span>let us help you</span>
                <h1>Need help?</h1>
                <div class="wallets-text">
                  Leave us a comment below with your details
                </div>
                <v-divider style="width: 121%"></v-divider>
                <v-form id="contact_form">
                  <v-row class="form-row-grid d-flex">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="firstName"
                        label="First Name"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="email"
                        label="Email Address"
                        variant="outlined"
                        required
                        type="email"
                        style=""
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row class="form-row-grid d-flex" style="margin-top: -5%">
                    <v-col cols="12" class="form-grid-col">
                      <v-textarea
                        v-model="message"
                        variant="outlined"
                        required
                        rows="3"
                      >
                        <template v-slot:label>
                          <span style="color: black; font-size: 15px"
                            >Your Message</span
                          >
                        </template>
                      </v-textarea>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-checkbox" style="margin-top: -5%">
                    <v-col cols="12">
                      <div>
                        <input
                          type="checkbox"
                          id="agreeProm"
                          v-model="agreeProm"
                        />
                        <p class="p1" for="agreeProm">
                          I want to receive promotional and news from this
                          website to my email address
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="form-btn">
                    <v-col cols="12">
                      <v-btn
                        style="
                          border-radius: 25px;
                          background-color: #391e60;
                          color: white;
                          height: 55px;
                          width: 230px;
                        "
                        class="custom-btn"
                        @click.prevent="submitForm"
                        type="submit"
                      >
                        <v-icon style="margin: 5%">pi pi-truck</v-icon> Send
                        Message
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
              <div class="dashboard-home-content">
                <div class="dashboard-home-left" id="form_box"></div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="dashboard-head-right"
            style="margin-top: 27.9%; margin-left: 25%"
          >
            <h1>Contact Us</h1>
            <div class="wallets-text">Directly call or send us a message</div>

            <v-divider></v-divider>

            <div class="support-address">
              <p style="margin-top: 5%">
                <a href="mailto:support@MoonsSignals.com"
                  >support@bullsSignal.com</a
                >
              </p>
              <br />
              <p style="width: 40%">
                Address
                <br />
                Põhja-Tallinna linnaosa,Kopli tn 27, 10412, Estonia
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeProm: false, // Update property name
    activeTab: "home",
    currencyHeaders: [
      { text: "Name", value: "name" },
      { text: "Price", value: "price" },
      { text: "Change", value: "change" },
      { text: "Last Updated", value: "lastUpdated" },
      { text: "Action", value: "action" },
    ],
    currencyData: [],
    activityHeaders: [
      { text: "Event", value: "event" },
      { text: "Date", value: "date" },
      { text: "Summary", value: "summary" },
      { text: "Action", value: "action" },
    ],
    activityData: [],
  };
},
  methods: {
    submitForm() {
      // Handle form submission here
    },
    isActiveTab(tab) {
      return this.activeTab === tab;
    },
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
  margin-top: 55% !important;
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
v-col {
  width: 100%;
}
h6,
p,
a,
.wallets-text,
span {
  font-weight: 400;
  font-size: 24px;
  font-style: normal;
  color: #6221bd;
  line-height: 35px;
  text-decoration: none;
  text-transform: none;
  font-family: PoppinsRegular, sans-serif;
  letter-spacing: 0;
}
.p1 {
  font-weight: 400;
  font-size: 11px;
  font-style: normal;
  color: #5a5a5a;
  line-height: 17px;
  text-decoration: none;
  transform: none;
  font-family: "PoppinsRegular", sans-serif;
  letter-spacing: 0;
  margin-top: -5%;
  margin-left: 5%;
}
h1 {
  font-size: 60px;
  font-family: poppinsbold;
}

p,
a,
.wallets-text,
span {
  color: #ab8e8e;
}
.v-text-field {
  border-radius: 35px;
}
.dashboard-head-right{
  margin-top: 41.1% !important;
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
  }
  .p1{
    margin-top: -7%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 350px) and (max-width: 400px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -70% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -6%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 400px) and (max-width: 450px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -55% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -5.5%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
  }
  .p1{
    margin-top: -5.5%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
  }
  .p1{
    margin-top: -4%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
  }
  .p1{
    margin-top: -4%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 650px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -20% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -3.5%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
  }
  .p1{
    margin-top: -3.5%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 700px) and (max-width: 750px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: -10% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -3%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
  }
  .p1{
    margin-top: -3%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 800px) and (max-width: 900px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 0% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -3%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1024px) {
  /* Small Phones (320px - 350px) */
  .dashboard-main {
    flex-direction: column;
  }
  
  .dashboard-content {
    width: 80% !important; /* Adjust the width to fit inside the container */
    margin-top: 10% !important; /* Remove negative margin */
  }
  .p1{
    margin-top: -3%;
  }
  .dashboard-head-right{
    margin-top: 10% !important;
    width: 80%;
    margin-left: 5% !important;
    margin-bottom: 10%;
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
    margin-top: 60% !important;
  }
  .dashboard-head-right{
    margin-top: 46% !important;
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
    margin-top: 50% !important;
  }
  .dashboard-head-right{
    margin-top: 44.3% !important;
  }
  .p1{
    margin-top: -4%;
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
    margin-top: 50% !important;
  }
  .dashboard-head-right{
    margin-top: 38% !important;
  }
  .p1{
    margin-top: -4%;
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
    margin-top: 50% !important;
  }
  .dashboard-head-right{
    margin-top: 37.5% !important;
  }
  .p1{
    margin-top: -3.5%;
  }
}
</style>

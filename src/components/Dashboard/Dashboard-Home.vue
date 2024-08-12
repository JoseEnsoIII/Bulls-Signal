<template>
  <v-main>
    <v-container fluid class="dashboard-main">
      <v-row>
        <!-- Dashboard Sidebar -->
        <v-col cols="12" md="2">
          <div class="dashboard-sidebar">
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
        <v-col>
          <div class="dashboard-content" style="margin-left: 3%;margin-top: 15% !important;">
            <div class="dashboard-head">
              <h1>Package</h1>
              <h5 id="ver_status">No packages yet</h5>
              <p style="margin-top: 10px">
                Dear client, Stock and ETF signals will appear according to
                market hours and availability.
              </p>
            </div>
            <v-divider></v-divider>
            <div class="dashboard-home-content">
                            <div class="dashboard-home-left">
                                <div class="table_header">
                                    <h6 id="currencies_heading" class="active_choice" style="margin-left: 2%;">Trading Signals</h6>
                                     
                                </div>
                                <div  id="currencies_div"  class="dashboard-home-token" style="margin-top:3%;">
                                    <table class="table" style="width: 50%;">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th >Price</th>
                                                <th >Change</th>
                                                <th >Last Updated</th>
                                            
                                              
                                                <th >Action</th>
                                                
                                               
                                            </tr>
                                        </thead>
                                        <tbody id="currency_table">
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div  id="activity_div"  class="dashboard-home-token" style="display: none;">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Event</th>
                                                <th >Date</th>
                                                <th >Summary</th>
                                                <th >Action</th>
                                                 
                                               
                                            </tr>
                                        </thead>
                                        <tbody id="activity_table">
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            
                        </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreePromotional: false,
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
      products: [], // Initialize products as an empty array
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
  mounted() {
    // Sample data for default content
    const defaultData = [
      {
        name: "Signal 1",
        price: "$100.00",
        change: "+5.00%",
        lastUpdated: "2024-05-03 10:30 AM",
        action: "Action 1",
      },
      {
        name: "Signal 2",
        price: "$50.00",
        change: "-2.50%",
        lastUpdated: "2024-05-03 10:30 AM",
        action: "Action 2",
      },
      // Add more default data as needed
    ];

    // Assign defaultData to products
    this.products = defaultData;
  },
};
</script>



<style scoped>
.dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50%;
  margin-bottom: 5%;
  margin-left: 2%;
  background-image: url("/public/images/about-top-right.png");
}

.dashboard-sidebar {
  width: 100%;
  margin-top: 100% !important; 
  margin-left:-55% ;
}

.dashboard-content {
  width: 80%; /* Adjust content width as needed */
  margin-top: 25% !important;
}

.dashboard-head {
  margin-bottom: 20px;
}

.dashboard-home-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dashboard-home-left {
  width: 100%; /* Adjust as needed */
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
h1 {
  font-weight: bolder;
font-size: 60px;
font-style: normal;
line-height: 66px;
text-decoration: none;
transform: none;
font-family: "Open Sans", sans-serif;
letter-spacing: 0;
}
h5 {
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
  color: #000000;
  line-height: 33px;
  text-decoration: none;
  transform: none;
  font-family: PoppinsRegular;
  letter-spacing: 0;
}
p {
  font-weight: 400;
  font-size: 18px;
  font-style: normal;
  color: #8e8e8e;
  line-height: 26px;
  text-decoration: none;
  transform: none;
  font-family: "PoppinsRegular", sans-serif;
  letter-spacing: 0.36px;
}
h6 {
  font-weight: bold; /* Adjusted to 400 */
  font-size: 20px; /* Adjusted to 20px */
  font-style: normal;
  color: #428df5; /* Changed color */
  line-height: 22px; /* Adjusted line height */
  text-decoration: none;
  transform: none;
  font-family: "PoppinsBold", sans-serif; /* Changed font family to PoppinsBold */
  letter-spacing: 0; /* Changed letter spacing */
}
th{
  color: #AB8E9D;
  font-weight: 400;
font-size: 14px;
font-style: normal;
color: #8e8e8e;
line-height: 14px;
text-decoration: none;
transform: none;
font-family: PoppinsLight;
letter-spacing: 0.36px;
}
@media only screen and (min-width: 320px) and (max-width: 1024px) {
  .dashboard-sidebar {
    display: none;
  }
}

/* Small Phones: 320px - 480px */
@media only screen and (min-width: 320px) and (max-width: 350px) {
  h1 {
    font-size: 40px;
  }

  h5 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .dashboard-content {
    margin-top: -90%;
  }
}
@media only screen and (min-width: 350px) and (max-width: 400px) {
  h1 {
    font-size: 40px;
  }

  h5 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .dashboard-content {
    margin-top: -80%;
  }
}
@media only screen and (min-width: 400px) and (max-width: 450px) {
  h1 {
    font-size: 40px;
  }

  h5 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .dashboard-content {
    margin-top: -60%;
  }
}
@media only screen and (min-width: 450px) and (max-width: 500px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  .dashboard-content {
    margin-top: -50%;
  }
}

/* Standard Phones: 480px - 768px */
@media only screen and (min-width: 450px) and (max-width: 500px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  .dashboard-content {
    margin-top: -50%;
  }
}
@media only screen and (min-width: 500px) and (max-width: 550px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  .dashboard-content {
    margin-top: -35%;
  }
}
@media only screen and (min-width: 550px) and (max-width: 600px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  .dashboard-content {
    margin-top: -25%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 650px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  .dashboard-content {
    margin-top: -20%;
  }
}
@media only screen and (min-width: 650px) and (max-width: 700px) {
  h1 {
    font-size: 50px;
  }

  h5 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }
  
  .dashboard-content {
    margin-top: -10%;
  }
}
@media only screen and (min-width: 700px) and (max-width: 800px) {
  h1 {
    font-size: 55px;
  }

  h5 {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }

  .dashboard-content {
    margin-top: -10%;
  }
}
@media only screen and (min-width: 800px) and (max-width: 900px) {
  h1 {
    font-size: 55px;
  }

  h5 {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }
  
  .dashboard-content {
    margin-top: 5%;
  }
}
@media only screen and (min-width: 900px) and (max-width: 1024px) {
  h1 {
    font-size: 55px;
  }

  h5 {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }
  
  .dashboard-content {
    margin-top: 5%;
  }
}
/* Small Tablets: 1024px - 1280px */
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  h1 {
    font-size: 60px;
  }

  h5 {
    font-size: 30px;
  }

  p {
    font-size: 22px;
  }
  .dashboard-sidebar{
    margin-top: -10%;
  }
  .dashboard-content {
    margin-top: 0%;
  }
}

/* Standard Tablets: 1280px - 1366px */
@media only screen and (min-width: 1280px) and (max-width: 1366px) {
  h1 {
    font-size: 65px;
  }

  h5 {
    font-size: 32px;
  }

  p {
    font-size: 24px;
  }
  .dashboard-sidebar{
    margin-top: -5%;
  }
  .dashboard-content {
    margin-top: 0%;
  }
}

/* Large Tablets: 1366px - 1440px */
@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  h1 {
    font-size: 65px;
  }

  h5 {
    font-size: 32px;
  }

  p {
    font-size: 24px;
  }
  .dashboard-sidebar{
    margin-top: -5%;
  }
  .dashboard-content {
    margin-top: 0% !important;
  }
}

/* Small Laptops: 1440px - 1600px */
@media only screen and (min-width: 1440px) and (max-width: 1600px) {
  h1 {
    font-size: 75px;
  }

  h5 {
    font-size: 38px;
  }

  p {
    font-size: 28px;
  }
  .dashboard-sidebar{
    margin-top: -10%;
  }
  .dashboard-content {
    margin-top: 0% !important;
  }
}

/* Standard Laptops: 1600px - 1920px */
@media only screen and (min-width: 1600px) and (max-width: 1920px) {
  h1 {
    font-size: 80px;
  }

  h5 {
    font-size: 40px;
  }

  p {
    font-size: 30px;
  }
  .dashboard-sidebar{
    margin-top: -10%;
  }
  .dashboard-content {
    margin-top: 0% !important;
  }
}

/* Large Laptops: 1920px and above */
@media only screen and (min-width: 1920px) {
  h1 {
    font-size: 85px;
  }

  h5 {
    font-size: 42px;
  }

  p {
    font-size: 32px;
  }

  .dashboard-sidebar{
    margin-top: -35%;
  }
  .dashboard-content {
    margin-top:-5% !important;
  }
}
</style>

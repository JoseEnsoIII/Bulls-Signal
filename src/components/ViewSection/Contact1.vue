<template>
    
    <v-app class="custom-app" style="background-color: #f1f6fc;">
      <v-container fluid>
        <v-row justify="center" justify-lg="between" style="margin-top: 10%;">
          <v-col cols="12" lg="7">
            <v-card class="custom-contact-wrapper" elevation="2" outlined style="padding:10%; border-radius: 15px;">
              <h3 class="custom-subtitle">Send Us a Message</h3>
              <v-form @submit.prevent="submitForm" ref="form">
                <p>Your Name</p>
                <v-text-field class="custom-field" v-model="formData.name" label="Enter Your Full Name" required style=""></v-text-field>
                <p>Your Email</p>
                <v-text-field v-model="formData.email" label="Enter Your Email" required></v-text-field>
                <p>Your Message</p>
                <v-textarea v-model="formData.message" label="Enter Your Message" required></v-textarea>
                <v-checkbox v-model="formData.agree" label="I agree to receive emails, newsletters and promotional messages" required></v-checkbox>
                <v-btn class="custom-btn" type="submit" color="primary">Send Message</v-btn>
              </v-form>
            </v-card>
          </v-col>
  
          <v-col cols="12" lg="4">
            <v-card class="custom-contact-content" style="background-color: transparent; width: 100%;box-shadow: none;">
              <v-card-title>
                <h3 class="custom-subtitle">Have questions?</h3>
                <p>Have questions about payments or price plans?</p>
                <p> We have answers!</p>
              </v-card-title>
              <v-card-text>
                <div class="custom-contact-area">
                  <div class="custom-contact-item">
                    <v-img class="custom-img" src="/public/img/contact1.png" alt="contact" style="height: 80px;width: 100%;"></v-img>
                    <div class="custom-contact-contact">
                      <h4 class="custom-lasthead">Email Us</h4>
                      <a :href="'mailto:' + companyEmail" style="color: black;">{{ companyEmail }}</a>
                    </div>
                  </div>
                  <div class="custom-contact-item">
                    <v-img class="custom-img" src="/public/img/contact3.png" alt="contact" style="height: 80px;width: 100%;"></v-img>
                    <div class="custom-contact-contact">
                      <h4 class="custom-lasthead">Address</h4>
                      <span>{{ companyName }}</span><br>
                      <span>{{ companyNumber }}</span><br>
                      <span>{{ companyAddress }}</span>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
  
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
          agree: false
        },
        companyEmail: 'support@bullssignals.com',
        companyName: 'Company Name',
        companyNumber: '13879226',
        companyAddress: '27 Old Gloucester Street, London, UK, 3AX UK'
      }
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.formData);
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-app {
    margin-top: -28% !important;
  }
  
  .custom-subtitle {
  color: #33276a;
  text-align: center;
  padding-bottom: 2%; /* Reduce the padding to create more space */
}

.custom-field p {
  font-weight: 600;
  size: 23px !important;
  font-style: normal;
  color: #33276a;
  line-height: 28px;
  text-decoration: none;
  transform: none;
  text-align: center !important;
  font-family: "Josefin Sans";
  letter-spacing: 0;
  margin-bottom: 5px; /* Add margin bottom to create space between paragraphs */
}

  .custom-lasthead {
    color: #33276A;
  }
  .custom-field p {
    font-weight: 600;
    size: 23px !important;
    font-style: normal;
    color: #33276a;
    line-height: 28px;
    text-decoration: none;
    transform: none;
    font-family: "Josefin Sans";
    letter-spacing: 0;
  }
  .custom-btn {
  background-color: #5423FF !important;
  height: 50px !important;
  border-radius: 25px; /* Add border radius for rounded corners */
  font-family: "Josefin Sans"; /* Apply font family */
  font-size: 18px; /* Adjust font size */
  color: white; /* Text color */
  text-transform: uppercase; /* Uppercase text */
  letter-spacing: 1px; /* Adjust letter spacing */
  transition: background-color 0.3s ease; /* Add smooth transition effect */
  display: block; /* Ensure it's a block element */
  margin: 0 auto; /* Center horizontally */
}

.custom-btn:hover {
  background-color: #3f1ebc !important; /* Change background color on hover */
}

  .custom-field input::placeholder {
    font-weight: 600;
    size: 18px;
    font-style: normal;
    color: #33276a;
    line-height: 28px;
    text-decoration: none;
    transform: none;
    font-family: "Josefin Sans";
    letter-spacing: 0;
  }
  .custom-contact-item {
    padding: 5%;
  }
  .custom-contact-item .custom-img {
    margin: 0 auto; /* Center the image horizontally */
    display: block; /* Ensure it's a block element for margin auto to work */
    width: 80%; /* Adjust the width as needed */
    margin-left: -40%;
  }
  .custom-contact-contact {
    margin-top: -18%;
    margin-left: 23%;
  }
  @media screen and (max-width: 1280px) and (min-width: 320px) {
    .custom-contact-content {
      width: 100% !important;
      margin-top: 5% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      flex-direction: column !important;
    }
    .custom-contact-item {
      width: 80% !important;
      padding: 2% !important;
      text-align: center !important;
    }
    .custom-contact-item .custom-img {
    margin: 0 auto; /* Center the image horizontally */
    display: block; /* Ensure it's a block element for margin auto to work */
    width: 80%; /* Adjust the width as needed */
    margin-left: auto; /* Center the image using auto margin */
    margin-right: auto; /* Center the image using auto margin */
  }
  .custom-contact-contact {
    margin-top: 5%;
    margin-left: auto; /* Center the contact info using auto margin */
    margin-right: auto; /* Center the contact info using auto margin */
    text-align: center;
  }
  }
  @media screen and (max-width: 1920px) {
  .custom-app {
    margin-top: -50%;
  }
}

@media screen and (max-width: 1899px) {
  .custom-app {
    margin-top: -49%;
  }
}

@media screen and (max-width: 1849px) {
  .custom-app {
    margin-top: -48%;
  }
}

@media screen and (max-width: 1799px) {
  .custom-app {
    margin-top: -46%;
  }
}

@media screen and (max-width: 1749px) {
  .custom-app {
    margin-top: -45%;
  }
}

@media screen and (max-width: 1699px) {
  .custom-app {
    margin-top: -43%;
  }
}



@media screen and (max-width: 1299px) {
  .custom-app {
    margin-top: -36%;
  }
}



@media screen and (max-width: 1249px) {
 .custom-app {
    margin-top: -33%;
  }
}

@media screen and (max-width: 1199px) {
 .custom-app {
    margin-top: -32%;
  }
}

@media screen and (max-width: 1149px) {
 .custom-app {
    margin-top: -30%;
  }
}

@media screen and (max-width: 1099px) {
 .custom-app {
    margin-top: -29%;
  }
}

@media screen and (max-width: 1049px) {
 .custom-app {
    margin-top: -27%;
  }
}

@media screen and (max-width: 999px) {
 .custom-app {
    margin-top: -30%;
  }
}

@media screen and (max-width: 949px) {
 .custom-app {
    margin-top: -25%;
  }
}

@media screen and (max-width: 899px) {
 .custom-app {
    margin-top: -25%;
  }
}

@media screen and (max-width: 849px) {
 .custom-app {
    margin-top: -25%;
  }
}

@media screen and (max-width: 799px) {
 .custom-app {
    margin-top: -27%;
  }
}

@media screen and (max-width: 749px) {
 .custom-app {
    margin-top: -30%;
  }
}

@media screen and (max-width: 699px) {
 .custom-app {
    margin-top: -30%;
  }
}

@media screen and (max-width: 649px) {
 .custom-app {
    margin-top: -35%;
  }
}

@media screen and (max-width: 599px) {
 .custom-app {
    margin-top: -40%;
  }
}

@media screen and (max-width: 549px) {
 .custom-app {
    margin-top: -40%;
  }
}

@media screen and (max-width: 499px) {
 .custom-app {
    margin-top: -55%;
  }
}

@media screen and (max-width: 449px) {
    .custom-app {
    margin-top: -55%;
  }
}

@media screen and (max-width: 399px) {
 .custom-app {
    margin-top: -55%;
  }
}

@media screen and (max-width: 349px) {
  .custom-app {
    margin-top: -65%;
  }
}

  </style>
  
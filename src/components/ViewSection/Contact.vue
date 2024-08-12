<template>
  <v-app class="app" style="background-color: #f1f6fc;">
    <v-container fluid>
      <v-row justify="center" justify-lg="between" style="margin-top: 10%;">
        <v-col cols="12" lg="7">
          <v-card class="contact-wrapper" elevation="2" outlined style="padding:10%; border-radius: 15px;">
            <h3 class="subtitle">Send Us a Message</h3>
            <v-form @submit.prevent="submitForm" ref="form">
              <p>Your Name</p>
              <v-text-field class="field" v-model="formData.name" label="Enter Your Full Name" required style=""></v-text-field>
              <p>Your Email</p>
              <v-text-field v-model="formData.email" label=" Enter Your Email" required></v-text-field>
              <p>Your Message</p>
              <v-textarea v-model="formData.message" label="Enter Your Message" required></v-textarea>
              <v-checkbox v-model="formData.agree" label="I agree to receive emails, newsletters and promotional messages" required></v-checkbox>
              <v-btn class="btn1" type="submit" color="primary">Send Message</v-btn>
            </v-form>
          </v-card>
        </v-col>
       
        <v-col cols="12" lg="4">
  <v-card class="contact-content"   style="background-color: transparent; width: 100%;box-shadow: none;">
    <v-card-title>
      <h3 class="subtitle">Have questions?</h3>
      <p>Have questions about payments or price plans?</p>
      <p>We have answers!</p>
    </v-card-title>
    <v-card-text>
      <div class="contact-area">
        <div class="contact-item">
          <v-img class="img" src="/public/img/contact1.png" alt="contact" style="height: 80px;width: 100%;"></v-img>
          <div class="contact-contact">
            <h4 class="lasthead">Email Us</h4>
            <a :href="'mailto:' + companyEmail" style="color: black;">{{ companyEmail }}</a>
          </div>
        </div>
        <div class="contact-item">
          <v-img class="img" src="/public/img/contact3.png" alt="contact" style="height: 80px;width: 100%;"></v-img>
          <div class="contact-contact">
            <h4 class="lasthead">Address</h4>
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
.app{
  margin-top: -35%;
}
h3 {
  color: #33276a;
  text-align: center;
  padding-bottom: 5%;
}
h4{
  color: #33276A;
}
p {
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

.btn1 {
  background-color: #5423FF !important;
  height: 50px !important;
 margin-left: 40%;
  border-radius: 25px; /* Add border radius for rounded corners */
  font-family: "Josefin Sans"; /* Apply font family */
  font-size: 18px; /* Adjust font size */
  color: white; /* Text color */
  text-transform: uppercase; /* Uppercase text */
  letter-spacing: 1px; /* Adjust letter spacing */
  transition: background-color 0.3s ease; /* Add smooth transition effect */
}

.btn1:hover {
  background-color: #3f1ebc !important; /* Change background color on hover */
}

.v-text-field input::placeholder {
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
.contact-item{
  padding: 5%;
}
.contact-item .img {
  margin: 0 auto; /* Center the image horizontally */
  display: block; /* Ensure it's a block element for margin auto to work */
  width: 80%; /* Adjust the width as needed */
  margin-left: -40%;
}

.contact-contact{
  margin-top: -18%;
  margin-left: 23%;
}
@media screen and (max-width: 1290px) and (min-width: 320px) {
  .contact-content {
    width: 100% !important;
    margin-top: 5% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
  }

  .contact-item {
    width: 80% !important;
    padding: 2% !important;
    text-align: center !important;
  }

  .contact-item .img {
 left: 0%;
}


  .contact-contact {
    margin-top: 5% !important;
    text-align: center !important;
  }
}
@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .app {
    margin-top: -47% !important;
  }
}

/* Large Laptops: 1600px - 1920px */
@media screen and (min-width: 1600px) and (max-width: 1920px) {
  .app {
    margin-top: -43% !important;
  }
}

/* Standard Laptops: 1440px - 1600px */
@media screen and (min-width: 1440px) and (max-width: 1600px) {
  .app {
    margin-top: -37% !important;
  }
}

/* Small Laptops: 1366px - 1440px */
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .app {
    margin-top: -40% !important;
  }
}

/* Large Tablets: 1280px - 1366px */
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .app {
    margin-top: -40% !important;
    padding: 5%;
  }
  .contact-item .img{
    left: 45%;
  }
  .contact-contact{
    margin-top: 10% !important;
    margin-left: 10% !important;
  }
}

/* Standard Tablets: 1024px - 1280px */
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .app {
    margin-top: -39% !important;
    padding: 5%;
  }
  .contact-item .img{
    left: 45%;
  }
  .contact-contact{
    margin-top: 10% !important;
    margin-left: 10% !important;
  }
}


/* Large Phones: 768px - 1024px */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .app {
    position: relative;
    margin-top: -36% !important;
    padding: 5%;
  }
  .contact-item .img{
    left: 45%;
  }
  .contact-contact{
    margin-top: 10% !important;
    margin-left: 10% !important;
  }
}

/* Standard Phones: 480px - 768px */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .app {
    margin-top: -43% !important;
    padding: 5%;
  }
  .contact-item .img{
    left: 45%;
  }
  .contact-contact{
    margin-top: 0% !important;
    margin-left: 10% !important;
  }
}

/* Small Phones: 320px - 480px */
@media screen and (max-width: 480px) {
  .app {
    margin-top: -65% !important;
    padding: 5%;
  }
  .contact-item .img{
    left: 45%;
  }
  .btn1{
    margin-left: 12%;
  }
  .contact-contact{
    margin-top: 10% !important;
    margin-left: 10% !important;
  }
}


</style>

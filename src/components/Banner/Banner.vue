<template>
  <v-container fluid class="banner-container" style="margin-top: -50%">
    <v-row>
      <!-- Column containing the banner content -->
      <v-col cols="12" md="6" xl="7">
        <div class="banner-content">
          <h1 class="head wow fadeInUp" style="
              color: white;
              font-weight: 700;
              font-size: 90px;
              font-style: normal;
              line-height: 80px;
              text-decoration: none;
              transform: none;
              font-family: 'Josefin Sans', sans-serif;
              letter-spacing: 0;
            ">
            Welcome to
            <span span style="
  font-weight: 700;
  font-size: 90px;
  font-style: normal;
  line-height: 100px;
  text-decoration: none;
  transform: none;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0;
  margin-top: 5% !important;
  color: #ffffff;
  margin-top: 5% !important;
">
              BullSignals!</span>
          </h1>
          <p class="text wow fadeInUp" style="color: white; font-size: 23px;">
            A place where we empower beginners in the world of trading to
            unlock their full potential. Our mission is to provide
            the best signals and recommendations to help you profit from trading
            while ensuring transparency and discipline. Please note that
            our signals are recommendations; we encourage you to conduct your
            research and make informed decisions.
          </p>
          <div class="label-button" style="margin-top: 10%">
            <label style="
                background-color: white;
                color: black;
                padding: 10px;
                border-radius: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 650px;
                height: 80px;
              " for="inputField" class="label-input">
              <input type="text" id="inputField" style="width: 50%; padding: 0 5%; color: black;font-size: 18px; "
                placeholder="Unlock your Trading Potential!" />
              <button id="submitButton" style="
                  height: 60px;
                  background-color: #66cc33;
                  border-radius: 35px;
                  width: 200px;
                  padding: 5px;
                  color: white;
                  font-size: 23px;
                  font-weight: bold;
                ">
                Get Started
              </button>
            </label>
          </div>
        </div>
      </v-col>

      <!-- Column containing the image -->
      <v-col cols="12" md="6" xl="5">
        <div class="bg-shap" style="margin-right: -15px ">
          <img src="/img/city-man.png" alt="" class="city-man wow fadeInRight" style="height: 100%;width: 120%;" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      websiteName: "Your Website Name", // Set your website name here
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
    },
  },
};
</script>

<style scoped>
.banner-container {
  background-image: url("/public/img/banner.png");
  /* Background image applied here */
  background-size: cover;
  background-position: center;
  height: 1050px;
  margin-top: 5%;
}

.banner-content {
  background-color: transparent;
  /* Background color with opacity for content */
  padding: 20px;
  border-radius: 10px;
  margin-top: 30%;
  color: white;
  margin-left: 12%;
  margin-top: 20%; 
}

.head,
.text {
  color: #000;
  
}

.banner {
  background-color: #fff;
  background-image: url("../img/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 250px 0px 250px;
  position: relative;
}
.bg-shap{
  width: 1000px;
  height: auto;
  margin-left: -10%;
}
.banner .bg-shap .city-man {
  position: absolute;
  right: 0px;
  top: 0px;
}

.banner .hero-area {
  position: relative;
  z-index: 3;
}


.banner .hero-area .banner-content .form-group {
  margin: 37px 0px 20px;
  position: relative;
  width: 90%;
}

.banner .hero-area .banner-content .form-group input {
  width: 100%;
  border-radius: 50px;
  padding: 0px 180px 0px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 5px 70px 0px rgba(38, 82, 202, 0.1);
  box-shadow: 0px 5px 70px 0px rgba(38, 82, 202, 0.1);
  height: 70px;
  font-size: 18px;
  line-height: 28px;
  color: #9aa3b7;
}

.banner .hero-area .banner-content .form-group input::-webkit-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::-moz-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input:-ms-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::-ms-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group button.button-1 {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 50px;
  -webkit-box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
  box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
}

.banner .hero-area .banner-content .button-box a.link {
  margin-top: 20px;
}

.banner .hero-area .banner-content .button-box a.link.one {
  margin-right: 30px;
}

@media screen and (min-width: 1920px) {
  .banner-container {
    margin-top: -67% !important ;
    height: 1250px;
  }

  .banner-content {
    width: 800px;
    margin-top: 20%;
    margin-left: 25%;
  }

  .banner-content h1,
  .banner-content span {
    font-size: 90px !important;
    line-height: 28px;
  }

  .bg-shap {
    display: block;
    margin-top: -3%;
    height: 850px;
    width: 1300px;
    margin-left: -30%;
  }

  .banner-content p {
    font-size: 23px !important;
    margin-top: 5%;
    line-height: 2rem ;
  }

  .label-button {
    width: 100%;
    height: 70px !important;
    margin-top: 5% !important;
  }

  .label-input {
    width: 90% !important;
    justify-content: center;
    height: 80px !important;
  }

  .label-input input {
    width: 70%;
    padding: 0 5%;
    margin-right: 10px;
  }

  .label-input button {
    width: 100%;
    height: 60px !important;
    margin-top: 0px;
    font-size: 18px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 20px;
    width: 150% !important;
    color: #000;

  }

  .label-input input::-moz-placeholder {
    font-size: 20px;
    width: 150% !important;
    color: #000;

  }

  .label-input input:-ms-input-placeholder {
    font-size: 20px;
    width: 150% !important;
    color: #000;

  }

  .label-input input::-ms-input-placeholder {
    font-size: 20px;
    width: 150% !important;
    color: #000;

  }

  .label-input input::placeholder {
    font-size: 20px;
    width: 150% !important;
    color: #000;

  }
}

@media screen and (max-width: 999px) {
  .banner-container {
    margin-top: -80% !important;
    height: 900px;
  }
  .banner-content {
    width: 800px;
    margin-top: 20%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 70px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 18px !important;
    margin-top: 0%;
  }
  .label-button {
    width: 100%;
    height: 50px !important;
    margin-top: 5% !important; /* Adjust margin as needed */
  }
  
  .label-input {
    width: 100%;
    justify-content: center;
    height: 60px !important;
  }
  
  .label-input input {
    width: 70%; /* Adjust input width as needed */
    padding: 0 5%;
    margin-right: 10px; /* Adjust margin as needed */
  }
  
  .label-input button {
    width: 100%; 
    height: 45px !important;
    margin-top: 0px; /* Adjust margin as needed */
    font-size: 18px !important;
  }
}

@media screen and (max-width: 949px) {
  .banner-container {
    margin-top: -80% !important;
    height: 900px;
  }
  .banner-content {
    width: 800px;
    margin-top: 30%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 60px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 16px !important;
    margin-top: 0%;
  }
  .label-button {
    width: 650px;
    height: 50px !important;
    margin-top: 5% !important; /* Adjust margin as needed */
  }
  
  .label-input {
    width: 100%;
    justify-content: center;
    height: 60px !important;
  }
  
  .label-input input {
    width: 70%; /* Adjust input width as needed */
    padding: 0 5%;
    margin-right: 10px; /* Adjust margin as needed */
  }
  
  .label-input button {
    width: 100%; 
    height: 45px !important;
    margin-top: 0px; /* Adjust margin as needed */
    font-size: 18px !important;
  }
}

@media screen and (max-width: 899px) {
  .banner-container {
    margin-top: -80% !important;
    height: 800px;
  }
  .banner-content {
    width: 750px;
    margin-top: 25%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 60px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: 0%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 5% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 849px) {
  .banner-container {
    margin-top: -80% !important;
    height: 700px;
  }
  .banner-content {
    width: 600px;
    margin-top: 15%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 40px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: 0%;
  }
  .label-button {
    width: 400px !important;
    height: 50px !important;
    margin-top: 5% !important; /* Adjust margin as needed */
  }
  
  .label-input {
    width: 80%;
    justify-content: center;
    height: 60px !important; 
  }
  
  .label-input input {
    width: 70%; /* Adjust input width as needed */
    padding: 0 5%;
    margin-right: 10px; /* Adjust margin as needed */
    
  }
  
  .label-input button {
    width: 100%; 
    height: 45px !important;
    margin-top: 0px; /* Adjust margin as needed */
    font-size: 18px !important;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 799px) {
  .banner-container {
    margin-top: -85% !important;
  }
  .banner-content {
    width: 650px;
    margin-top: 20%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 40px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: 0%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: 50px !important;
    margin-top: 5% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 749px) {
  .banner-container {
    margin-top: -90% !important;
  }
  .banner-content {
    width: 600px;
    margin-top: 25%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 40px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: -5%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 40% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 699px) {
  .banner-container {
    margin-top: -98% !important;
  }
  .banner-content {
    width: 550px;
    margin-top: 20%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 40px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: -5%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: 40px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 649px) {
  .banner-container {
    margin-top: -105% !important;
  }
  .banner-content {
    width: 550px;
    margin-top: 20%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 40px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: 0%;
  }
  
  
  .label-input button {
    width: 100%; 
    height: 60% !important;
    margin-top: 0px; /* Adjust margin as needed */
    font-size: 18px !important;
  }.label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 40% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 599px) {
  .banner-container {
    margin-top: -120% !important;
  }
  .banner-content {
    width: 500px;
    margin-top: 30%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 30px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: -5%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 40% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 549px) {
  .banner-container {
    margin-top: -130% !important;
  }
  .banner-content {
    width: 450px;
    margin-top: 35%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 30px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: -5%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}
@media screen and (max-width: 499px) {
  .banner-container {
    margin-top: -140% !important;
  }
  .banner-content {
    width: 400px;
    margin-top: 33%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 30px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 20px !important;
    margin-top: -5%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 30% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (max-width: 449px) {
  .banner-container {
    margin-top: -160% !important;
  }
  .banner-content {
    width: 350px;
    margin-top: 40%;
    margin-left: 5%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 25px !important;
    
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 15px !important;
    margin-top: -10%;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 40% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-moz-placeholder {
    font-size: 14px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 14px;
  }

  .label-input input::placeholder {
    font-size: 14px;
  }
}

@media screen and (min-width: 350px) and (max-width: 399px) {
  .banner-container {
    margin-top: -163% !important;
  }
  .banner-content {
    width: 350px;
    margin-top: 25%;
    margin-left: 2%;
  }
  .banner-content h1,
  .banner-content span {
    font-size: 25px !important;
  }
  .bg-shap {
    display: none;
  }
  .banner-content p {
    font-size: 15px !important;
    margin-top: -5%;
  }
}

@media screen and (max-width: 349px) {
  .banner-container {
    margin-top: -190% !important;
  }
  .banner-content {
    width: 300px;
    margin-top: 40%;
    margin-left: 2%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 20px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    margin-top: -10%;
    font-size: 15px !important;
  }
  .label-button {
    width: 100% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 40% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 12px;
  }

  .label-input input::-moz-placeholder {
    font-size: 12px;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 12px;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 12px;
  }

  .label-input input::placeholder {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .banner-container {
    margin-top: -200% !important;
  }
  .banner-content {
    width: 280px;
    margin-top: 48%;
    margin-left: -2%;
  }
  .banner-content h1,
  .banner-content span{
    font-size: 20px !important;
  }
  .bg-shap{
    display: none;
  }
  .banner-content p {
    font-size: 12px !important;
  }
  .label-button {
    width: 110% !important;
    font-size: 14px !important;
    height: px !important;
    margin-top: 10% !important;
  }
  .label-input button {
    width: 50% !important; 
    height: 35px !important;
    font-size: 14px !important;
    font-weight: bold;
    background-color: #66cc33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .label-input {
    width: 100% !important;
    justify-content: center;
    height: 50px !important;
  }
  .label-input input::-webkit-input-placeholder {
    font-size: 12px !important;
  }

  .label-input input::-moz-placeholder {
    font-size: 12px !important;
  }

  .label-input input:-ms-input-placeholder {
    font-size: 12px !important;
  }

  .label-input input::-ms-input-placeholder {
    font-size: 12px !important;
  }

  .label-input input::placeholder {
    font-size: 12px !important;
  }
}


</style>

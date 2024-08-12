<template>
  <v-container fluid class="bg-section" ref="section">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-6 col-lg-8 text-center">
          <v-card class="account-box1 wow fadeInUp" style=" height: 350px; width: 600px; border-radius: 25px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h6 class="thrty-six" style="font-weight: 500; font-size: 43px; font-style: normal; color: #142645; line-height: 46px; text-decoration: none; text-transform: none; font-family: 'Josefin Sans'; letter-spacing: 0; margin-bottom: 20px;">
              Open an Account Now
            </h6>
            <p class="text" style="font-weight: 400; font-size: 18px; font-style: normal; color: #142645; line-height: 28px; text-decoration: none; text-transform: none; font-family: 'Open Sans'; letter-spacing: 0; margin-bottom: 20px;">Unlock Your Trading Potential: for Beginners in Crypto and Stock Trading</p>
            <div class="button-box" style="display: flex; justify-content: center;">
              <v-btn href="#section-p"  color="primary" class="button-1 start_btn" style="font-weight: 600; font-size: 25px !important; font-style: normal; color: #ffffff; line-height: 55px; text-decoration: none; text-transform: capitalize; font-family: 'Open Sans'; letter-spacing: 0; background-color: #66cc33 !important; height: 50px; display: flex; justify-content: center; align-items: center;">GET STARTED NOW</v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'YourComponentName'
};
</script>

<style>
.bg-section {
  background-image: url('/public/img/open-account.png');
  background-size: 100% 350px;
  background-position: center;
  background-repeat: no-repeat;
  height: unset;
}

.account-box1 {
  padding: 120px 40px 120px;
  border-radius: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 5px 49px 0px rgba(51, 42, 147, 0.54) !important;
          box-shadow: 0px 5px 49px 0px rgba(51, 42, 147, 0.54) !important;
  width: 610px !important;
  height: 400px !important;
}
.account-box1 h6{
  font-size: 36px !important;
  line-height: 46px;
  color: #142645;
}
.account-box1 p {
  margin: 0 auto 15px;
  width: 80%;
  font-size: 16px !important;
}
.text {
  color: #142645;
}

.button-box .button-1 {
  width: 450px;
  width: 400px;
  height: 60px !important;
  border-radius: 10px;
  box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
  border: 0;
  margin: 0 auto 0;
  padding: 20px 20px;
  text-align: center;
  line-height: 55px;
  font-size: 23px !important;
}

/* Define fade-up animation */
.bg-section.fadeInUp {
  animation: fadeInUp 0.5s ease forwards;
}

/* Define fade-up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 999px) {
  
  
  .account-box1 {
    padding: 80px 20px 80px;
    height: 400px !important;
    width: 700px !important;
    display: flex;
    margin-left: -35%;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
  }

  
}
@media (max-width: 980px) {
  .bg-section {
    background-size: 100% 100% !important;
    height: 500px;
  }
  
  .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 700px !important;
    display: flex;
    margin-top: 15%;
    margin-left: 0%;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
  }

  .button-box .button-1 {
    width: 500px;
    height: 50px !important;
    font-size: 16px;
    line-height: 45px;
  }
}
@media (max-width: 980px) {
  .bg-section {
    background-size: 100% 100% !important;
    height: 500px;
  }
  
  .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 700px !important;
    display: flex;
    margin-top: 15%;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
  }

  .button-box .button-1 {
    width: 500px;
    font-size: 16px;
    line-height: 45px;
  }
}

/* Additional Media Queries */
@media (max-width: 880px) {
  .button-box .button-1 {
    width: 450px;
    font-size: 14px;
    line-height: 40px;
  }
}

@media (max-width: 780px) {
  .button-box .button-1 {
    width: 350px;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: 1%;
 }

 .account-box1 p {
  margin-top: -2%;
 font-size: 16px !important;
}
    .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 700px !important;
    display: flex;
    margin-left: -18%;
    margin-top: 23%;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
  }
 
}

@media (max-width: 699px) and (min-width: 600px) {
  .button-box .button-1 {
    width: 350px;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 36px !important;
    margin-top: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 16px !important;
  }
  .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 600px !important;
    display: flex;
    margin-left: calc((100% - 600px) / 2); /* Center horizontally */
    margin-top: 15%;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally */
  }
}


@media (min-width: 501px) and (max-width: 599px) {
  .button-box .button-1 {
    width: 90%; /* Adjust width as a percentage */
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 24px !important; /* Reduce font size */
    margin-top: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 14px !important; /* Decrease font size */
  }
  .account-box1 {
    padding: 10% 5%; /* Adjust padding as a percentage */
    height: 80% !important; /* Allow height to adjust based on content */
    width: 100% !important; /* Adjust width as a percentage */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 18% auto; /* Center align */
  }
}



@media (min-width: 400px) and (max-width: 499px) {
  .button-box .button-1 {
    width: 100%;
    max-width: 350px;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 30px !important;
    margin-top: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 16px !important;
  }
  .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 100%;
    max-width: 400px !important;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25%;
  }
}
@media (min-width: 400px) and (max-width: 449px) {
  .button-box .button-1 {
    width: 100%;
    max-width: 350px;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 30px !important;
    margin-top: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 16px !important;
  }
  .account-box1 {
    padding: 80px 20px 80px;
    height: 250px !important;
    width: 100%;
    max-width: 400px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: -4%;
    margin-top: 30%;
  }
}



@media (max-width: 399px) and (min-width: 320px) {
  .button-box .button-1 {
    width: 100%;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 26px !important;
    margin-top: 5%;
    margin-left: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 16px !important;
  }
  .account-box1 {
    padding: 80px 20px 80px;
    height: 290px !important;
    width: 110% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: -3% !important;
    margin-top: 30%;
    margin-right: auto; /* Center horizontally */
    margin-left: auto; /* Center horizontally */
  }
}
@media (max-width: 319px) {
  .button-box .button-1 {
    width: 100%;
    font-size: 16px !important;
    line-height: 30px;
    height: 50px !important;
    margin-top: -5%;
  }
  .thrty-six {
    font-size: 26px !important;
    margin-top: 5%;
    margin-left: 5%;
  }
  .account-box1 p {
    margin-top: -5%;
    font-size: 16px !important;
  }
  .account-box1 {
    padding: 80px 20px 80px;
    height: 280px !important;
    width: 110% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: -2% !important;
    margin-top: 25%;
    margin-left: 5%; /* Center horizontally */
  }
}


</style>

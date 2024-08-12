<template>
  <v-container fluid class="about-section" style="margin-top: -15%; background-color: #f0f5fc;">
    <v-row align="center">
      <v-col cols="12" xl="5">
        <div class="about-thumb">
          <img src="/public/img/about.png" alt="about" class="about-img">
        </div>
      </v-col>
      <v-col cols="12" xl="7">
        <div class="about-content" style="width: 700px; margin-top: -47.8%; margin-left: 45%">
          <div class="upper-content">
            <h4 class="lasthead">A Few Words About Us</h4>
            <h2 class="title">At BullsSignal, we offer a range of signal services to cater to your trading needs.</h2>
            <p class="text">
              Our carefully curated signals are designed to help you identify profitable opportunities in the fast-paced world of trading. Choose the signal service that suits you best and start your journey to success today.
            </p>
          </div>
          <v-row class="counter-area-5">
            <v-col cols="12" md="4">
              <div class="page-counter">
                <div class="counter-thumb">
                  <img src="/public/img/counter1.png" alt="counter">
                </div>
                <div class="counter-item">
                  <h2 id="userCount" class="title1"><span class="count-num">45</span>k</h2>
                  <p class="text">Total User</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="page-counter">
                <div class="counter-thumb">
                  <img src="/public/img/counter2.png" alt="counter">
                </div>
                <div class="counter-item">
                  <h2 id="countryCount" class="title1"><span class="count-num">90</span>+</h2>
                  <p class="text">Countries</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="page-counter">
                <div class="counter-thumb">
                  <img src="/public/img/counter3.png" alt="counter">
                </div>
                <div class="counter-item">
                  <h2 id="satisfactionCount" class="title1"><span class="count-num">95</span>%</h2>
                  <p class="text">Satisfaction</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    // Get the h2 elements containing the count numbers
    const userCountH2 = document.getElementById('userCount');
    const countryCountH2 = document.getElementById('countryCount');
    const satisfactionCountH2 = document.getElementById('satisfactionCount');

    // Extract the target counts from the h2 elements
    const targetUserCount = parseInt(userCountH2.querySelector('.count-num').textContent);
    const targetCountryCount = parseInt(countryCountH2.querySelector('.count-num').textContent);
    const targetSatisfactionCount = parseInt(satisfactionCountH2.querySelector('.count-num').textContent);

    // Define the speed of counting (milliseconds per count)
    const countingSpeed = 50;

    // Function to animate the counting
    function animateCount(element, target) {
      let currentCount = 0;
      const increment = Math.ceil(target / (1000 / countingSpeed));

      const interval = setInterval(() => {
        currentCount += increment;
        element.textContent = currentCount;

        if (currentCount >= target) {
          clearInterval(interval);
          element.textContent = target;
        }
      }, countingSpeed);
    }

    // Animate each counter
    animateCount(userCountH2.querySelector('.count-num'), targetUserCount);
    animateCount(countryCountH2.querySelector('.count-num'), targetCountryCount);
    animateCount(satisfactionCountH2.querySelector('.count-num'), targetSatisfactionCount);
  }
};
</script>

  
  <style scoped>
  .about-img{
    height: 80%;
    margin-left: -35%;
  }
  h4{
  color: #6342ff;
}
h2{
  color: #33276a;
}
p{
  color: #3f276a;
  font-size: 16px;
}
.counter-thumb img{
  height: 50px;
  margin-top: 35%
}
.counter-item{
  margin-top: -30%;
  margin-left: 30%;
}
.count-num {
  font-weight: 600;
  font-size: 36px;
  font-style: normal;
  color: #33276a;
  line-height: 46px;
  text-decoration: none;
  transform: none;
  font-family: "Josefin Sans";
  letter-spacing: 0;
}

.title1 {
  font-weight: 600;
  font-size: 36px;
  font-style: normal;
  color: #33276a;
  line-height: 46px;
  text-decoration: none;
  transform: none;
  font-family: "Josefin Sans";
  letter-spacing: 0;
}
@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .about-section {
    position: absolute; 
    top: 12%;
    padding: 10%;
  }
  .about-img{
   margin-left: -10%;
   height: 100%;
   width: 100%;
  }
  .about-content{
    position: absolute;
   margin-top:-38% !important;
   left: 10%;
  }
}

@media screen and (min-width: 1600px) and (max-width: 1920px) {
  .about-section {
    position: absolute;
    top: 12%;
    padding: 10%;
  }
  .about-img{
   margin-left: -20%;
  }
  .about-content{
    position: absolute;
   top:110% !important;
   left: 5%;
  }
}
@media screen and (min-width: 1440px) and (max-width: 1600px) {
  .about-section {
    position: absolute;
    top: 12%;
    padding: 10%;
  }
  .about-img{
   margin-left: -20%;
  }
  .about-content{
    position: absolute;
   top:100% !important;
   left: 10%;
  }
}
@media screen and (min-width: 1366px) and (max-width: 1440px) {
  .about-section {
    position: absolute;
    top: 12% !important;
    padding: 10%;
  }
  .about-img{
   margin-left: -35%;
  }
  .about-content{
    position: absolute;
   top:100% !important;
   left: 2%;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .about-section {
    position: absolute;
    top: 14%;
    padding: 10%;
  }
  .about-img{
   margin-left: -45%;
  }
  .about-content{
    position: absolute;
   top:90% !important;
   left: 2%;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .about-section {
    position: absolute;
    top: 9% !important;
    padding: 10%;
  }
  .about-img{
   margin-left: -75%;
  }
  .about-content{
    position: absolute;
   top:85% !important;
   left: -14%;
  }
  .counter-area-5{
    margin-top: -10% !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .about-section {
    height: 1500px;
    position: absolute;
    top: 8%;
    padding: 10%;
  }
  .about-img {
    margin-left: 0%;
    margin-top: 0%;
  }
  .about-content {
    text-align: center;
    margin: 0 auto;
    position: relative; 
    margin-top: 5% !important;
    left: 5%; /* Add this */
    transform: translateX(-50%); /* Add this */
  }
  .counter-area-5 {
    position: absolute;
    left: 50%; /* Center horizontally */
    margin-top: 45% !important; /* Center vertically */
    transform: translate(-50%, -50%);
}
   .page-counter{
    margin-top: -15%;
   }
  .counter-thumb{
    margin-top: -10%;
  }
  .counter-item{
    margin-left: 0%;
    margin-top: 5% !important;
  }
}
@media screen and (min-width: 480px) and (max-width: 768px) {
  .about-section {
    height: 1550px !important;
    width: 100%;
    position: absolute;
    top: 7% !important;
    padding: 10%;
  }
  .about-img {
    margin-left: 0%;
    margin-top: 10%;
  }
  .about-content {
    width: 100% !important;
    text-align: center;
    margin: 0 auto;
    position: relative; 
    margin-top: 5% !important;
    left: 5%; /* Add this */
    transform: translateX(-50%); /* Add this */
  }
  .counter-area-5 {
    position: absolute;
    left: 50%; /* Center horizontally */
    top: 170% !important; /* Center vertically */
    transform: translate(-50%, -50%);
}

  .counter-thumb{
    margin-top: -10%;
  }
  .counter-item{
    margin-left: 0%;
    margin-top: 5% !important;
  }
  .counter-area-5 v-col{
    margin-top: 5%; /* Adjust as needed */
  }

}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .about-section {
    height: 1400px;
    width: 100%;
    position: absolute;
    top: 5.5%;
    padding: 10%;
  }
  .about-img {
    margin-left: 0%;
    margin-top: 10%;
  }
  .about-content {
    width: 100% !important;
    text-align: center;
    margin: 0 auto;
    position: relative; 
    margin-top: 5% !important;
    left: 5%; /* Add this */
    transform: translateX(-50%); /* Add this */
  }
  .counter-area-5 {
    position: absolute;
    left: 50%; /* Center horizontally */
    top: 150%; /* Center vertically */
    transform: translate(-50%, -50%);
}

  .counter-thumb{
    margin-top: -10%;
  }
  .counter-item{
    margin-left: 0%;
    margin-top: 5% !important;
  }
  .counter-area-5 v-col{
    margin-top: 5%; /* Adjust as needed */
  }

}
</style>
  
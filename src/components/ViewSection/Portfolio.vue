<template>
    <v-container fluid class="portfolio">
      <v-row justify="center">
        <v-col cols="12" xl="9" class="text-center">
          <div class="section-head">
            <h3 class="subtitle">Why Choose BullsSignals?</h3>
            <h2 class="title">We Make Navigating the Complex World of Trading Effortless</h2>
            <p class="text">We offer a variety of features that make us different</p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4" class="text-center" v-for="(item, index) in items" :key="index">
          <v-card class="item-box">
            <v-card-text>
              <v-img :src="item.image" alt="icon" style="height: 100px; width: 100%;"></v-img>
              <h3 class="subtitle" style="font-size: 35px;margin-top: 5%;">{{ item.title }}</h3>
              <p class="text" style="margin-top: 5%;font-size: 20px;">{{ item.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            title: "Excellence in Signal Analysis",
            description: "We excel at analyzing signals from multiple providers, ensuring you receive the most accurate and reliable trading opportunities. Our expertise guarantees a safe experience, even for beginners.",
            image: "/public/img/f-item-1.png"
          },
          {
            title: "Diverse Trading Opportunities",
            description: "Explore the world of trading with us, whether it's crypto, stocks, forex, or more. Our expertly crafted insights into indicators, charts, and strategies will guide you on an exciting trading journey.",
            image: "/public/img/f-item-2.png"
          },
          {
            title: "Join Our Supportive Community",
            description: "Join our ever-growing community of traders and benefit from our exceptional signal service. Becoming a member is as simple as 2 clicks, empowering you with collective knowledge for informed trading decisions.",
            image: "/public/img/f-item-3.png"
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .section-head {
      padding-bottom: 50px;
      padding-top: -10;
      width: 80%;
      border-radius: 15px;
      margin: 0 auto; 
      position: relative;
      top: -5%; 
      z-index: 1; 
  }
  
  .portfolio {
    margin-top: 10%; 
    padding: 60px 0px; 
    position: relative;
    z-index: 0; 
  }
  
  .portfolio:before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 75%;
    content: "";
    background: #dfe7fb;
    z-index: -1;
    border-radius: 20px;
  }
  
  .portfolio .item-box {
  height: 125% !important;
  width: 90% !important; /* Fixed width of 400px */
  padding: 30px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 5.606px 45.657px 38px 0px rgba(223, 231, 251, 0.6);
  position: relative;
  z-index: 2;
  margin: -10% auto !important; /* Add 10px margin (top, right, bottom, left) to each item box */
}

.item-box h3{
  font-size: 28px !important;
}
.item-box p{
  font-size: 15px !important;
}

  
.section-head h3.subtitle {
  color: #66cc33;
  padding: 36px 0px 16px;
  font-weight: 600;
  font-size: 28px !important;
  font-family: "Open Sans";
  line-height: 35px;
  text-decoration: none;
  transform: none;
  letter-spacing: 0;
  margin-top: -2%;
}

  
  .portfolio .item-box .content p.text { /* Change P.text to p.text */
    color: #142645;
    font-size: 18px !;
  }
  .section-head p.text {
  color: #142645;
  font-size: 16px;
  margin-top: -1%;
}

  .portfolio .item-box:hover .thumb .icon {
    transform: rotateY(360deg);
  }
  
  .portfolio .section-head h2.title {
    font-weight: 700;
    font-size: 50px;
    color: #142645;
    line-height: 60px;
    text-decoration: none;
    font-family: "Josefin Sans";
    letter-spacing: 0;
    padding-left:10%;
    padding-right:10%;
    margin-top: -2%;
  }

  /** */
  @media screen and (max-width: 999px) {
    .portfolio:before{
      height: 100% !important;
    }
  .portfolio .item-box {
    height: 110%;
    width: 80%;
    margin: 10px auto 10px; /* Centered items with top and bottom margins */
    margin-top: -10% !important;
  }
  .portfolio .item-box:nth-of-type(3) {
    margin-top: 20% !important;
  }
}
  @media screen and (max-width: 990px) {
    .portfolio:before{
      height: 100% !important;
    }
  .portfolio .item-box {
    height: 100%;
    width: 100%;
    margin: 10px auto 20px; /* Centered items with top and bottom margins */
    margin-top: -1% !important;
  }
  
  
}


 </style>
  
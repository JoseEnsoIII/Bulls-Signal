<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-carousel cycle hide-delimiters prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"
          prev-icon-color="#66cc33" next-icon-color="#66cc33" style="border-radius: none;">
          <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
            <v-row align="center">
              <v-col cols="12" md="5">
                <div class="thumb"></div>
              </v-col>
              <v-col cols="12" md="7" style="position: relative;">
                <div class="gradient-box"
                  style="margin-top:20px;margin-left:-60%;width:75%;background: linear-gradient(60deg, #d596f6 0%, #a09df8 60%, #6ba4f9 100%); padding: 20px; border-radius: 15px; color: white; height: 400px; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0;">
                </div>

                <div class="content"
                  style="height: 360px; position: relative; z-index: 1; margin-top: 4.6%; width: 80%; margin-top: 6% !important;">
                  <div class="star">
                    <img v-for="star in 5" :key="star" src="/public/img/star.png" alt="Star Rating" class="star-image">
                  </div>
                  <h3 class="subtitle" style="font-size: 33px;">{{ testimonial.name }} - {{ testimonial.title }}</h3>
                  <p class="text" style="font-size: 23px; color: #142645;">{{ testimonial.message }}</p>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Jane Lowe",
          title: "Trading Enthusiast",
          message: `"Bull Signal has been a game-changer for me! Their signals are spot on, and I've seen consistent profits across various markets. The support team is responsive and helpful. Highly recommended for anyone serious about trading!"`,
        },
        {
          name: "John Smith",
          title: "Crypto Investor",
          message: `"As a cryptocurrency investor, I rely on Bull Signal to guide my decisions. Their accurate signals have helped me navigate the volatile crypto market, resulting in impressive gains. Truly top-notch service!"`,
        },
        {
          name: "Emily Johnson",
          title: "Newbie Trader",
          message: `"I started my trading journey with Bull Signal, and I couldn't be happier. Their beginner-friendly tutorials and insightful signals made the learning process smooth and enjoyable. Thanks to them, I'm gaining confidence as a trader."`,
        },
        {
          name: "Michael Brown",
          title: "Seasoned Trader",
          message: `"I've tried various signal services, but Bull Signal stands out from the rest. Their in-depth analysis and timely signals have been invaluable in my trading strategy. Definitely a service I can trust."`,
        },
        {
          name: "Sophia Lee",
          title: "Forex Trader",
          message: `" Bull Signal is a treasure trove for forex traders like me. Their signals have helped me identify profitable opportunities, and their support team is always ready to assist. Great service!"`,
        },
        {
          name: "Robert Turner",
          title: "Stocks Enthusiast",
          message: `"I've been trading stocks for years, and Bull Signal has enhanced my performance significantly. Their signals complement my research, giving me the edge I need in the market."`,
        },
        {
          name: "Lily Martinez",
          title: "Commodity Investor",
          message: `"I'm delighted with the quality of signals from Bull Signal. They cover a wide range of commodities, making it easy for me to diversify my portfolio effectively."`,
        },
        {
          name: "Mark Wilson",
          title: "Long-Term Investor",
          message: `" Bull Signal has become an essential part of my long-term investment strategy. Their signals align with my goals, allowing me to make informed decisions for the future."`,
        },
        {
          name: "Rachel Clark",
          title: "Day Trader",
          message: `"As a day trader, I rely on real-time insights, and Bull Signal delivers just that. Their hourly updates and precise signals help me stay ahead of the game."`,
        },
        {
          name: "David Nguyen",
          title: "Options Trader",
          message: `" Bull Signal options signals are a lifesaver! They have simplified my options trading strategy and boosted my returns. Thank you for making options trading profitable for me."`,
        },
        {
          name: "Sarah Turner",
          title: "Swing Trader",
          message: `"I've tried several signal providers, and Bull Signal has been the most consistent by far. Their signals align perfectly with my swing trading approach, and I've seen great results."`,
        },
        {
          name: "Andrew Lee",
          title: "Algorithmic Trader",
          message: `"Accurate signals are crucial in algorithmic trading, and Bull Signal delivers. Their data is reliable, allowing me to optimize my trading algorithms effectively."`,
        },
        {
          name: "Lisa Baker",
          title: "Full-Time Trader",
          message: `"As a full-time trader, I need reliable signals, and Bull Signal never disappoints. Their service saves me time and effort, enabling me to focus on what matters most - trading!"`,
        },
        {
          name: "Eric Mitchell",
          title: "Risk Management Advocate",
          message: `" Bull Signal' emphasis on risk management is commendable. Their signals come with clear stop-loss and take-profit levels, giving me peace of mind in my trades."`,
        },
        {
          name: "Jessica Taylor",
          title: "Exceptional Support",
          message: `"Beyond the accurate signals, Bull Signal has a stellar support team. They've promptly addressed my inquiries and gone above and beyond to ensure I have a smooth experience."`,
        },
      ]
    };
  }
};
</script>

<style scoped>
.content {
  border-radius: 20px;
  background-color: white;
  box-shadow: 1.414px 1.414px 38px 0px rgba(173, 173, 229, 0.6);
  padding: 60px 40px 60px;
}

.star-image {
  color: #fd7e14 !important;
  height: 25px;
  width: 25px;
}

.subtitle {
  padding: 18px 0px 14px;
  color: #66cc33;
  margin-top: 2%;
}

.text {
  font-size: 18px;
  line-height: 30px;
  color: #000000;
}

.v-carousel .v-btn {
  background-color: #66cc33;
}

.v-carousel .v-btn:hover {
  background-color: rgba(102, 204, 51, 0.2);
}

.v-carousel .v-btn i {
  font-size: 24px;
}

.v-carousel .v-btn--prev {
  left: 20px;
  border: none;
  /* Remove the border */
}

.v-carousel .v-btn--next {
  right: 20px;
  border: none;
  /* Remove the border */
}

.v-carousel .v-btn--prev i,
.v-carousel .v-btn--next i {
  color: #66cc33 !important;
}

.v-carousel .v-btn--prev:hover i,
.v-carousel .v-btn--next:hover i {
  color: #ffffff;
}

@media screen and (min-width: 1301px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
    margin-top: 4.5% !important;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  

}
@media screen and (min-width: 1201px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
    margin-top: 4.5% !important;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  

}
@media screen and (max-width: 1200px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
    margin-top: 8% !important;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  

}
@media screen and (max-width: 1100px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
    margin-top: 8.5% !important;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  .gradient-box {
    margin-top: 20px;
    width: 85% !important;
   
  }

}
@media screen and (max-width: 999px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  
  
}
@media screen and (max-width: 949px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  
  .gradient-box {
    margin-top: 20px;
    width: 85% !important;
    margin-left: 8% !important;
    margin-top: 7% !important;
  }
}

@media screen and (max-width: 768px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
  }
  
  .subtitle {
    font-size: 24px;
    text-align: left;
  }
  
  .text {
    font-size: 12px;
    line-height: 26px;
    text-align: center;
  }
  
  .gradient-box {
    margin-top: 20px;
    width: 85% !important;
    margin-left: 8% !important;
  }
}
@media screen and (max-width: 768px) {
  .content {
    padding: 30px;
    margin-left: 10% !important;
    height: 350px;
  }
  
  .subtitle {
    font-size: 20px !important;
    text-align: left;
  }
  
  .text {
    font-size: 14px !important;
    line-height: 26px;
    text-align: center;
  }
  
  .gradient-box {
    margin-top: 20px;
    width: 85% !important;
    margin-left: 8% !important;
  }
}
@media screen and (max-width: 500px) {
  .content {
    padding: 20px;
    margin-left: 10% !important;
    height: auto;
  }
  
  .subtitle {
    font-size: 20px;
    text-align: left;
  }
  
  .text {
    font-size: 14px !important;
    line-height: 22px;
    text-align: center;
  }
  
  .gradient-box {
    margin-top: 15px;
    width: 90% !important;
    margin-left: 5% !important;
  }
}
@media screen and (max-width: 320px) {
  .content {
    padding: 20px;
    margin: 0 auto;
    height: auto;
  }
  
  .subtitle {
    font-size: 20px;
    text-align: left;
  }
  
  .text {
    font-size: 12px !important;
    line-height: 22px;
    text-align: center;
  }
  
  .gradient-box {
    margin-top: 15px;
    width: 90% !important;
    margin-left: 5% !important;
  }
}

</style>

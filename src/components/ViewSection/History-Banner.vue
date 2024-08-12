<template>
    <v-container fluid class="cont" style="background-color: #f0f5fc; ">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="upper-content">
            <h2 class="title" style="margin-bottom: 50px;">How we enhance your trading strategy</h2>
  
            <!-- Crypto Signals -->
           
            <h4 class="lasthead">Crypto Signals</h4>
            <p class="text about_services">
              Discover the potential of the cryptocurrency market with our crypto signals. Whether you're a beginner or an experienced trader, our signals will keep you informed about the latest trends and opportunities in the world of digital assets.
            </p>
  
            <!-- Stock Signals -->
           
            <h4 class="lasthead lasthead1">Stock Signals</h4>
            <p class="text about_services">
              Unlock the power of the stock market with our stock signals. Our team of experts thoroughly analyzes the stock market to provide you with accurate signals, enabling you to make well-informed decisions and capitalize on market movements.
            </p>
  
            <!-- Forex Signals -->
           
            <h4 class="lasthead lasthead1">Forex Signals</h4>
            <p class="text about_services">
              Trade the world's largest and most liquid market with confidence. Our forex signals offer timely and accurate information, allowing you to navigate the forex market with ease and precision.
            </p>
  
            <!-- Commodity Signals -->
           
            <h4 class="lasthead lasthead1">Commodity Signals</h4>
            <p class="text about_services">
              Explore the world of commodities with our comprehensive commodity signals. From precious metals to energy products and agricultural commodities, our signals provide you with valuable insights to seize opportunities in this dynamic market.
            </p>
  
            <!-- Algorithmic Signals -->
           
            <h4 class="lasthead lasthead1">Algorithmic Signals</h4>
            <p class="text about_services">
              For the tech-savvy traders, our algorithmic signals leverage advanced data analysis and machine learning to deliver cutting-edge trading opportunities. Stay ahead of the curve with these sophisticated signals.
            </p>
  
            <!-- Swing Trading Signals -->
           
            <h4 class="lasthead lasthead1">Swing Trading Signals</h4>
            <p class="text about_services">
              Master the art of swing trading with our specialized signals designed for capturing short- to medium-term market movements. Our swing trading signals empower you to make strategic decisions for optimal returns.
            </p>
  
            <!-- Long-Term Investment Signals -->
           
            <h4 class="lasthead lasthead1">Long-Term Investment Signals</h4>
            <p class="text about_services">
              Looking for long-term growth opportunities? Our long-term investment signals are tailored to identify undervalued assets with strong growth potential, helping you build a robust investment portfolio.
            </p>
  
            <!-- Options Signals -->
           
            <h4 class="lasthead lasthead1">Options Signals</h4>
            <p class="text about_services">
              Navigate the complex world of options trading with confidence. Our options signals provide you with valuable insights and strategies to maximize your returns and manage risk effectively.
            </p>
  
            <!-- Futures Signals -->
           
            <h4 class="lasthead lasthead1">Futures Signals</h4>
            <p class="text about_services">
              Dive into the exciting realm of futures trading with our futures signals. Stay informed about commodity, currency, and index futures, empowering you to take advantage of price movements and market trends.
            </p>
  
            <!-- Day Trading Signals -->
           
            <h4 class="lasthead lasthead1">Day Trading Signals</h4>
            <p class="text about_services">
              For the active day traders, our real-time day trading signals offer precise entry and exit points for rapid decision-making. Stay focused and capitalize on intraday opportunities.
            </p>
  
            <!-- 24/5 Support and Hourly Updates -->
           
            <h4 class="lasthead lasthead1">24/5 Support and Hourly Updates</h4>
            <p class="text about_services">
              No matter which signal service you choose, rest assured that you'll receive 24/5 support from our expert team. Additionally, all our signal services come with hourly updates to keep you informed about market developments.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'TradingSignals',
  };
  </script>
<style scoped>
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
.upper-content { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 100%;
  margin-top: 30% !important;
}

.about_services {
  color: #3f276a;
  width: 130% !important; /* Set width to 100% */
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center horizontally */
  width: 100% !important;
}
.lasthead1{
  margin-top: 10%;
}
.cont{
  margin-top: 25%;
}
@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .upper-content {
    width: 100%;
    margin-top: 2% !important;
  }
  .cont{
  position: relative;
  margin-top: -11% !important;
  }
}

/* Standard Laptops: 1600px - 1920px */
@media screen and (min-width: 1600px) and (max-width: 1920px) {
  .upper-content {
    width: 100%;
  }
  .cont{
    margin-top: 5%;
  }
}

/* Small Laptops: 1440px - 1600px */
@media screen and (min-width: 1440px) and (max-width: 1600px) {
  .upper-content {
    width: 100%;
    margin-top: 20% !important;
  }
}

/* Large Tablets: 1280px - 1440px */
@media screen and (min-width: 1280px) and (max-width: 1440px) {
  .upper-content {
    width: 100%;
  }
  .cont{
    margin-top: 15%;
  }
}

/* Standard Tablets: 1024px - 1280px */
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .upper-content {
   margin-top: 110% !important;
    }
  .about_services{
    width: 100% !important;
  }
  .cont{
    margin-top: -20% !important;
  }
}

/* Small Tablets: 768px - 1024px */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .upper-content {
    width: 100%;
    margin-top: 250% !important;
  }
  .about_services{
    width: 100% !important;
  }
  .cont{
    margin-top: -10% !important;
  }
}

/* Large Phones: 480px - 768px */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .upper-content {
    width: 100%;
    margin-top: 250% !important;
  }
  .about_services{
    width: 100% !important;
  }
  .cont{
    margin-top:40% !important;
  }
}

/* Standard Phones: 320px - 480px */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .upper-content {
    width: 100%;
    margin-top: 390%;
  }
  .about_services{
    width: 100% !important;
  }.cont{
    margin-top: 350%;
  }
}
</style>

<template>
  <div>
    <div class="section-p" id="section-p">
      <div class="section-head">
        <h3 class="subtitle wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
          Choose the plan that fits for you
        </h3>
        <h2 class="title wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
          Unlock a wealth of opportunities with our versatile signals service
        </h2>
        <p class="text wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
          Empower your trading journey with actionable insights and continuous
          signal access, empowering you to make well-informed decisions in
          various markets.
        </p>
        <p class="text wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
          Join now to elevate your trading experience and seize potential
          opportunities with confidence.
        </p>
      </div>
      <div class="currency-links">
        <a class="cur_pick normal" @click="updateCurrency('eur')">EUR</a>/
        <a class="cur_pick normal" @click="updateCurrency('usd')">USD</a>/
        <a class="cur_pick normal" @click="updateCurrency('gbp')">GBP</a>/
        <a class="cur_pick normal" @click="updateCurrency('aud')">AUD</a>/
        <a class="cur_pick normal" @click="updateCurrency('cad')">CAD</a>
      </div>
    </div>
   <div class="row">
    <div class="col-12">
      <div class="box">
        <div class="row justify-content-center">
          <div v-for="(product, index) in products.slice(0, 3)" :key="index"
            class="col-xl-4 col-lg-6 text-center wow fadeInUp" :data-wow-duration="'0.2s'"
            :data-wow-delay="computeDelay(index)">
            <div class="item-box">
              <div class="thumb">
                <div class="icon">
                  <img src="/public/img/price-1.png" alt="" />
                </div>
              </div>
              <div class="content">
                <h4 class="lasthead">{{ product.name }}</h4>
                <ul class="list">
                  <li class="list-item" v-for="(item, i) in product.features" :key="i">
                    {{ item }}
                  </li>
                </ul>
                <h6 class="value package_amount">
                    <span class="currency-logo">
                      <img v-if="currency === 'eur'" src="/public/currency/icons8-euro-24.png" alt="EUR" />
                      <img v-else-if="currency === 'usd'" src="/public/currency/icons8-usd-24.png" alt="USD" />
                      <img v-else-if="currency === 'gbp'" src="/public/currency/icons8-gbp-24.png" alt="GBP" />
                      <img v-else-if="currency === 'aud'" src="/public/currency/icons8-aud-24.png" alt="AUD" />
                      <img v-else-if="currency === 'cad'" src="/public/currency/icons8-cad-24.png" alt="CAD" />
                    </span>
                    <span class="package_span">{{
          product.prices[currency]
        }}</span>
                  </h6>
                <button @click="selectProduct(product)" class="button-1 package-btn">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Second Row for Products 4 to 6 with Different Styling -->
    <div class="row second-row">
      <div class="col-12">
        <div class="box">
          <div class="row justify-content-center">
            <div v-for="(product, index) in products.slice(3, 6)" :key="index + 3"
              class="col-xl-4 col-lg-6 text-center wow fadeInUp" :data-wow-duration="'0.2s'"
              :data-wow-delay="computeDelay(index + 3)">
              <div :class="['item-box', index === 1 ? 'additional-style' : '']">
                <div class="thumb">
                  <div class="icon">
                    <!-- Render icon text only for the middle product/additional -->
                    <span v-if="index === 1" class="icon-text">Popular</span>
                    <img src="/public/img/price-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <h4 class="lasthead">{{ product.name }}</h4>
                  <ul class="list">
                    <li class="list-item" v-for="(item, i) in product.features" :key="i">
                      {{ item }}
                    </li>
                  </ul>
                  <h6 class="value package_amount">
                    <span class="currency-logo">
                      <img v-if="currency === 'eur'" src="/public/currency/icons8-euro-24.png" alt="EUR" />
                      <img v-else-if="currency === 'usd'" src="/public/currency/icons8-usd-24.png" alt="USD" />
                      <img v-else-if="currency === 'gbp'" src="/public/currency/icons8-gbp-24.png" alt="GBP" />
                      <img v-else-if="currency === 'aud'" src="/public/currency/icons8-aud-24.png" alt="AUD" />
                      <img v-else-if="currency === 'cad'" src="/public/currency/icons8-cad-24.png" alt="CAD" />
                    </span>
                    <span class="package_span">{{
          product.prices[currency]
        }}</span>
                  </h6>

                  <button @click="selectProduct(product)" class="button-1 package-btn">
                  Start Now
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Third Row for Products 7 to 9 -->
    <div class="row third-row">
      <div class="col-12">
        <div class="box">
          <div class="row justify-content-center">
            <div v-for="(product, index) in products.slice(6, 9)" :key="index + 6"
              class="col-xl-4 col-lg-6 text-center wow fadeInUp" :data-wow-duration="'0.2s'"
              :data-wow-delay="computeDelay(index + 6)">
              <div class="item-box another-style">
                <div class="thumb">
                  <div class="icon">
                    <img src="/public/img/price-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <h4 class="lasthead">{{ product.name }}</h4>
                  <ul class="list">
                    <li class="list-item" v-for="(item, i) in product.features" :key="i">
                      {{ item }}
                    </li>
                  </ul>
                  <h6 class="value package_amount">
                    <span class="currency-logo">
                      <img v-if="currency === 'eur'" src="/public/currency/icons8-euro-24.png" alt="EUR" />
                      <img v-else-if="currency === 'usd'" src="/public/currency/icons8-usd-24.png" alt="USD" />
                      <img v-else-if="currency === 'gbp'" src="/public/currency/icons8-gbp-24.png" alt="GBP" />
                      <img v-else-if="currency === 'aud'" src="/public/currency/icons8-aud-24.png" alt="AUD" />
                      <img v-else-if="currency === 'cad'" src="/public/currency/icons8-cad-24.png" alt="CAD" />
                    </span>
                    <span class="package_span">{{
          product.prices[currency]
        }}</span>
                  </h6>

                  <button @click="selectProduct(product)" class="button-1 package-btn">
                  Start Now
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fourth Row for Products 10 to 12 -->
    <div class="row fourth-row">
      <div class="col-12">
        <div class="box">
          <div class="row justify-content-center">
            <div v-for="(product, index) in products.slice(9, 12)" :key="index + 9" :class="[
          'col-xl-4',
          'col-lg-6',
          'text-center',
          'wow',
          'fadeInUp',
          { 'additional-style-4th-row': index === 1 },
        ]" :data-wow-duration="'0.2s'" :data-wow-delay="computeDelay(index + 9)">
              <div :class="['item-box', index === 1 ? 'additional-style' : '']">
                <div class="thumb">
                  <div class="icon">
                    <!-- Render icon text only for the middle product/additional -->
                    <span v-if="index === 1" class="icon-text">Popular</span>
                    <img style="margin-top: 10%;" src="/public/img/price-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <h4 class="lasthead">{{ product.name }}</h4>
                  <ul class="list">
                    <li class="list-item" v-for="(item, i) in product.features" :key="i">
                      {{ item }}
                    </li>
                  </ul>
                  <h6 class="value package_amount">
                    <span class="currency-logo">
                      <img v-if="currency === 'eur'" src="/public/currency/icons8-euro-24.png" alt="EUR" />
                      <img v-else-if="currency === 'usd'" src="/public/currency/icons8-usd-24.png" alt="USD" />
                      <img v-else-if="currency === 'gbp'" src="/public/currency/icons8-gbp-24.png" alt="GBP" />
                      <img v-else-if="currency === 'aud'" src="/public/currency/icons8-aud-24.png" alt="AUD" />
                      <img v-else-if="currency === 'cad'" src="/public/currency/icons8-cad-24.png" alt="CAD" />
                    </span>
                    <span class="package_span">{{
          product.prices[currency]
        }}</span>
                  </h6>

                  <button @click="selectProduct(product)" class="button-1 package-btn">
                  Start Now
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: "eur", // Default currency
      products: [
        {
          id: 1,
          name: "Basic Access",
          features: [
            "Cryptocurrency Signals",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 97.8,
            usd: 110.5,
            gbp: 85.2,
            aud: 150.4,
            cad: 125.6,
          },
        },
        {
          id: 2,
          name: "Starter Access",
          features: [
            "Cryptocurrency and Stock Signals",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 178.4,
            usd: 200.2,
            gbp: 155.6,
            aud: 275.8,
            cad: 230.7,
          },
        },
        {
          id: 3,
          name: "Silver Access",
          features: [
            "Cryptocurrency, Stock and Commodity Signals ",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 201.3,
            usd: 225.6,
            gbp: 175.3,
            aud: 310.7,
            cad: 259.8,
          },
        },
        {
          id: 4,
          name: "Pro Access",
          features: [
          "Extensive Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 219.9,
            usd: 247.1,
            gbp: 192.1,
            aud: 340.2,
            cad: 284.1,
          },
        },
        {
          id: 5,
          name: "Advanced Access",
          features: [
            "Exclusive Signals for Cryptocurrency, Stocks, and Commodities",
            "Technical and Fundamental Analysis",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 243.6,
            usd: 273.7,
            gbp: 212.6,
            aud: 376.1,
            cad: 314.8,
          },
        },
        {
          id: 6,
          name: "Gold Access",
          features: [
            "Extensive Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 312.5,
            usd: 350.6,
            gbp: 272.4,
            aud: 482.1,
            cad: 403.8,
          },
        },
        {
          id: 7,
          name: "Platinum Access",
          features: [
            "Premium Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Personalized Support",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 492.7,
            usd: 553.1,
            gbp: 429.8,
            aud: 760.5,
            cad: 636.3,
          },
        },
        {
          id: 8,
          name: "Elite Access",
          features: [
            "Elite Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Personalized Support",
            "Dedicated Account Manager",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 789.4,
            usd: 885.9,
            gbp: 688.3,
            aud: 1219.6,
            cad: 1020.8,
          },
        },
        {
          id: 9,
          name: "Diamond Access",
          features: [
            "Diamond Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Dedicated Account Manager",
            "Exclusive Market Insights",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 1013.3,
            usd: 1136.7,
            gbp: 883.3,
            aud: 1563.1,
            cad: 1307.8,
          },
        },
        {
          id: 10,
          name: "Premier Access",
          features: [
            "Cryptocurrency, Stock, Commodity, Forex, Options, Futures, Bonds, Real Estate, Precious Metals, and Collectibles Signals",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Personalized Support",
            "Dedicated Account Manager",
            "Exclusive Market Insights",
            "Priority Access to New Features",
            "24/5 Support",
            "Hourly Updates",
          ],
          prices: {
            eur: 1507.2,
            usd: 1693.1,
            gbp: 1314.2,
            aud: 2328.9,
            cad: 1948.5,
          },
        },
        {
          id: 11,
          name: "VIP Access",
          features: [
            "VIP Signals for Cryptocurrency, Stocks, and Commodities",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Personalized Support",
            "Dedicated Account Manager",
            "Exclusive Market Insights",
            "Priority Access to New Features",
            "24/7 Support",
            "Real-time Updates",
          ],
          prices: {
            eur: 2484.5,
            usd: 2788.6,
            gbp: 2165.3,
            aud: 3836.7,
            cad: 3207.8,
          },
        },
        {
          id: 12,
          name: "Ultimate Access",
          features: [
            "Full Suite of Financial Signals with Customized Analysis",
            "Advanced Charting Tools",
            "Technical and Fundamental Analysis",
            "Personalized Support",
            "Dedicated Account Manager",
            "Exclusive Market Insights",
            "Priority Access to New Features",
            "Customized Trading Strategies",
            "24/7 Priority Support",
            "Real-time Updates",
          ],
          prices: {
            eur: 3001.3,
            usd: 3367.5,
            gbp: 2615.9,
            aud: 4630.4,
            cad: 3872.2,
          },
        },
      ],
    };
  },

  methods: {
    updateCurrency(currency) {
      this.currency = currency;
      // Remove active class from all cur_pick elements
      document.querySelectorAll(".cur_pick").forEach((element) => {
        element.classList.remove("active");
      });
      // Add active class to the clicked cur_pick element
      event.target.classList.add("active");
    },
    computeDelay(index) {
      return (0.2 + index * 0.1).toFixed(1) + "s";
    },
    selectProduct(product) {
    // Assuming you are using Vue Router for navigation
    this.$router.push({
      path: '/checkout',
      query: {
        name: product.name,
        price: product.prices[this.currency],
        currency: this.currency
      }
    });
  },
  
  },
};
</script>

<style scoped>
.section-p {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}

.section-head {
  width: 80% !;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.section-head h3 {
  font-family: "Open Sans";
  font-size: 33px;
  font-weight: 400;
  font-style: normal;
  color: #5d5779;
  line-height: 28px;
  text-decoration: none;
  letter-spacing: 0;
}

.section-head h2 {
  font-family: "Josefin Sans";
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
  color: #142645;
  line-height: 60px;
  text-decoration: none;
  letter-spacing: 0;
}

.section-head p {
  font-size: 21px;
  line-height: 33px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
}

.cur_pick {
  font-size: 50px;
  margin-top: -5%;
  padding-bottom: 5%;
}

.cur_pick.active {
  color: #007bff;
}

.row {
  margin-bottom: 8%;
}

.box {
  position: relative;
  width: 85%;
  height: 650px;
  max-height: 100%;
  border-radius: 25px;
  padding: 20px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 16px 43px 0px rgba(60, 49, 172, 0.2);
  box-shadow: 0px 16px 43px 0px rgba(60, 49, 172, 0.2);
  padding-top: 5%;
}

.icon {
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.icon img {
  max-width: 100%;
  height: 120px;
  margin-top: -5%;
}

.item-box {
  position: relative;
  z-index: 1;
  height: 100%;
}

.content {
  margin-top: 10%;
  color: #3b368c;
}

.content h4.lasthead {
  font-family: "Josefin Sans";
  font-size: 29px;
  font-weight: 700;
  color: #3b368c;
  margin-bottom: 5px;
}

.list-item {
  font-weight: 400;
  font-size: 21px;
  font-style: normal;
  color: #3b368c;
  line-height: 33px;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
  padding-left: 5%;
  padding-right: 5%;
}

.currency-logo img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  margin-top: -5%;
}

.package_span {
  font-size: 38px;
  color: #ff8a00;
}

.item-box .package-btn {
  position: absolute;
  bottom: -65%;
  left: 50%;
  transform: translateX(-50%);
}

.value {
  font-weight: 400;
  font-size: 53px !important;
  font-style: normal;
  color: #ff8a00;
  line-height: 38px;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
  position: absolute;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

.item-box.additional-style {
  margin-top: -25%;
  height: 160%;
  background: -webkit-gradient(linear,
      left top,
      right top,
      from(#4050e9),
      to(#a12ffe));
  background: linear-gradient(90deg, #4050e9 0%, #a12ffe 100%);
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 16px 43px 0px rgba(64, 80, 233, 0.5);
  box-shadow: 0px 16px 43px 0px rgba(64, 80, 233, 0.5);
  z-index: 99;
}

.additional-style .content h4.lasthead {
  color: white;
}

.additional-style .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.item-box.additional-style .icon img {
  filter: brightness(0) invert(1);
  margin-top: 10%;
}

.item-box.additional-style .list-item {
  color: #fff;
}

.additional-style .package-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #66cc33;
  margin-top: -45%;
}

.item-box.additional-style .value {
  display: block;
}

.additional-style .value.package_amount {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon-text {
  position: absolute;
  border: none;
  height: 50px;
  width: 200px;
  font-size: 24px !important;
  top: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
  background: -webkit-gradient(linear,
      left bottom,
      left top,
      from(#fa709a),
      to(#fee140));
  background: linear-gradient(0deg, #fa709a 0%, #fee140 100%);
  text-transform: uppercase;
  font-weight: bold;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
}

/*second row*/

.second-row .package-btn {
  background-color: #66cc33;
  color: #ffffff;
  border: 2px solid #66cc33;
  top: 115% !important;
}

.second-row .value.package_amount {
  font-size: 38px;
  color: #ff8a00;
  margin-top: -25%;
}

/*Third Row*/
.third-row .box {
  height: 100% !important;
}

.third-row .item-box {
  height: 600px;
}

.third-row .value.package_amount {
  margin-top: -45%;
}

.third-row .package-btn {
  top: 105%;
}

/* Fourth Row Middle Product Styling */

.fourth-row .box {
  height: 70%;
  position: relative;
  z-index: 1;
  margin-top: 50px;
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
.fourth-row .item-box {
  height: 1000px;
}
.fourth-row .value.package_amount {
  margin-top: -150%;
}

.fourth-row .package-btn {
  bottom: 23%;
}

.additional-style-4th-row .item-box {
  height: 1000px;
  z-index: 999;
}

.additional-style-4th-row .content {
  color: #ffffff;
}

.additional-style-4th-row .list-item {
  color: #ffffff;
}

.additional-style-4th-row .value.package_amount {
  color: #ffffff;
  margin-top: -40%;
}

.additional-style-4th-row .package-btn {
  background-color: #66cc33;
  color: #ffffff;
  border: 2px solid #66cc33;
  top: 105%;
}

.additional-style-4th-row .icon-text {
  margin-top: -1.3%;
  color: #ffffff;
}

/* Media Query */
@media screen and (max-width: 1200px) {

  /* Adjustments for smaller screens */
  .box {
    width: 90%;
  }
}

@media screen and (max-width: 999px) {

  /* Adjustments for even smaller screens */
  .box {
    height: 100%;
  }

  .item-box {
    height: 100%;
    margin-top: 10%;
    padding: 10%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 83%;
  }

  .package-btn {
    top: 95%;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 105% !important;
  }

  .second-row .package-btn {
    top: 105% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -30%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 91% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 500px;
    top: 10%;
    bottom: 5%;
  }

  .third-row .value.package_amount {
    top: 118%;
  }

  .third-row .package-btn {
    top: 100%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    top: 5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 800px;
    margin-bottom: 10%;
  }

  .fourth-row .value.package_amount {
    top: 130%;
  }

  .fourth-row .package-btn {
    top: 85%;
  }

  .additional-style-4th-row .item-box {
    height: 900px;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 90% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 95% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: -0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 949px) {

  /* Adjustments for even smaller screens */
  .box {
    height: 110%;
    width: 75%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 90%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 115%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 92% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: 0%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 100% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 25%;
  }

  .third-row .value.package_amount {
    top: 143%;
  }

  .third-row .package-btn {
    top: 115%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 70%;
  }

  .fourth-row .value.package_amount {
    top: 145%;
  }

  .fourth-row .package-btn {
    top: 75%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 100% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 90% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 899px) {
  .box {
    height: 100%;
    width: 80%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 92% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 98% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 35%;
  }

  .third-row .value.package_amount {
    top: 143%;
  }

  .third-row .package-btn {
    top: 115%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 70%;
  }

  .fourth-row .value.package_amount {
    top: 145%;
  }

  .fourth-row .package-btn {
    top: 71%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 100% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 95% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 849px) {
  .box {
    width: 80%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 92% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 98% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 128%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 137%;
  }

  .fourth-row .package-btn {
    top: 71%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 100% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 95% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0%;
    color: #ffffff;
  }
}

@media screen and (max-width: 799px) {
  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 92% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 98% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 130%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 140%;
  }

  .fourth-row .package-btn {
    top: 71%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 100% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 95% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0%;
    color: #ffffff;
  }
}

@media screen and (max-width: 749px) {
  .box {
    width: 70%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 98% !important;
  }

  .second-row .package-btn {
    top: 93% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 95% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 123%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 130%;
  }

  .fourth-row .package-btn {
    top: 78%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 98% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 95% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.7%;
    color: #ffffff;
  }
}

@media screen and (max-width: 699px) {
  .box {
    width: 70%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 95% !important;
  }

  .second-row .package-btn {
    top: 92% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 93% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 120%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 128%;
  }

  .fourth-row .package-btn {
    top: 80%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 95% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 93% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.7%;
    color: #ffffff;
  }
}

@media screen and (max-width: 649px) {
  .box {
    width: 80%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 5%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 98% !important;
  }

  .second-row .package-btn {
    top: 93% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -5%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 95% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 120%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 129%;
  }

  .fourth-row .package-btn {
    top: 78%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 95% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 93% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.6%;
    color: #ffffff;
  }
}

@media screen and (max-width: 599px) {
  .box {
    width: 80%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 15%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 98% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -15%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 93% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 120%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 90%;
  }

  .fourth-row .value.package_amount {
    top: 125%;
  }

  .fourth-row .package-btn {
    top: 80%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 95% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 93% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.6%;
    color: #ffffff;
  }
}

@media screen and (max-width: 549px) {
  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 15%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 98% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -15%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 93% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 120%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 90%;
  }

  .fourth-row .value.package_amount {
    top: 125%;
  }

  .fourth-row .package-btn {
    top: 80%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 90% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 93% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 499px) {
  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 65%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 75%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 15%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 98% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -15%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 93% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 45%;
  }

  .third-row .value.package_amount {
    top: 120%;
  }

  .third-row .package-btn {
    top: 105%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: auto;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -20%;
    padding-bottom: 90%;
  }

  .fourth-row .value.package_amount {
    top: 121%;
  }

  .fourth-row .package-btn {
    top: 80%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 90% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 93% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 449px) {
  .cur_pick {
    font-size: 40px;
  }

  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 68%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 78%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 25%;
    padding-top: 10%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 103% !important;
  }

  .second-row .package-btn {
    top: 105% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -30%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 93% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 55%;
  }

  .third-row .value.package_amount {
    top: 110%;
  }

  .third-row .package-btn {
    top: 100%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: 95%;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -10%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 117%;
  }

  .fourth-row .package-btn {
    top: 83%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 93% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 105% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 399px) {
  .cur_pick {
    font-size: 30px;
  }

  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 68%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 78%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 100%;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 25%;
    padding-top: 15%;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 100% !important;
  }

  .second-row .package-btn {
    top: 100% !important;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -30%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 90% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: auto;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 60%;
  }

  .third-row .value.package_amount {
    top: 108%;
  }

  .third-row .package-btn {
    top: 100%;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: 95%;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -10%;
    padding-bottom: 80%;
  }

  .fourth-row .value.package_amount {
    top: 113%;
  }

  .fourth-row .package-btn {
    top: 83%;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 93% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 103% !important;
  }

  .additional-style-4th-row .icon-text {
    margin-top: 0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 349px) {
  .box {
    width: 90%;
  }

  .item-box {
    height: 120%;
    margin-top: 0%;
    padding-top: 80px;
    padding-bottom: 20%;
  }

  .section-p {
    width: 90%;
  }

  .section-head h2 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0%;
  }

  .content {
    margin-top: 2%;
  }

  .section-head p {
    font-size: 18px;
    line-height: 28px;
  }

  .value.package_amount {
    top: 70%;
    font-size: 25px !important;
  }

  .package-btn {
    top: 80%;
  }

  .list-item {
    font-size: 16px;
  }

  /* Second Row */
  .second-row .box {
    height: 120% !important;
  }

  .second-row .item-box {
    height: 500px;
    margin-top: 0%;
    margin-bottom: 25%;
    padding-top: 15%;
  }

  .currency-logo img {
    width: 20px;
    height: 20px;
  }

  .second-row .value.package_amount {
    font-size: 28px;
    top: 110% !important;
  }

  .second-row .package-btn {
    top: 108% !important;
    font-size: 14px;
  }

  .item-box.additional-style {
    height: 700px;
  }

  .additional-style .package-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #66cc33;
    margin-top: -50%;
  }

  .item-box.additional-style .value {
    display: block;
  }

  .additional-style .value.package_amount {
    position: absolute;
    top: 95% !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .additional-style .icon-text {
    margin-top: 0.8%;
  }

  /* Third Row */
  .third-row .box {
    height: 110% !;
  }

  .third-row .item-box {
    height: 100%;
    margin-top: -30%;
    padding-top: 30%;
    padding-bottom: 60%;
  }

  .third-row .value.package_amount {
    top: 105%;
  }

  .third-row .package-btn {
    top: 98%;
    font-size: 14px;
  }

  /* Fourth Row */
  .fourth-row .box {
    height: 96%;
    margin-top: -5%;
    border-radius: 15px;
    padding: 20px;
    -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .fourth-row .item-box {
    height: 100%;
    margin-bottom: -10%;
    padding-bottom: 100%;
  }

  .currency-logo img {
    width: 20px;
    height: 20px;
  }

  .fourth-row .value.package_amount {
    font-size: 14px !important;
    top: 110%;
  }

  .fourth-row .package-btn {
    top: 85%;
    font-size: 14px;
  }

  .additional-style-4th-row .item-box {
    height: 100%;
    z-index: 999;
  }

  .additional-style-4th-row .icon {
    margin-top: 10%;
  }

  .additional-style-4th-row .content {
    color: #ffffff;
  }

  .additional-style-4th-row .list-item {
    color: #ffffff;
  }

  .additional-style-4th-row .value.package_amount {
    color: #ffffff;
    top: 95% !important;
  }

  .additional-style-4th-row .package-btn {
    background-color: #66cc33;
    color: #ffffff;
    border: 2px solid #66cc33;
    top: 100% !important;
    font-size: 14px;
  }

  .additional-style-4th-row .icon-text {
    margin-top: -0.5%;
    color: #ffffff;
  }
}

@media screen and (max-width: 299px) {
  .box {
    width: 90%;
  }
}
</style>

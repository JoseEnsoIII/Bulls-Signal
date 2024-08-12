<template>
  <v-footer fluid class="footer" ref="footer">
    <v-container style="text-align: center">
      <v-row class="footer-container">
        <v-col
          cols="12"
          sm="6"
          md="2"
          class="footer-col wow fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.2s"
        >
          <div class="footer-box">
            <v-img src="/public/img/tran_logo.png" alt="Logo"></v-img>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
          class="footer-col wow fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.3s"
        >
          <div class="footer-box">
            <h4 class="lasthead">Company</h4>
            <ul class="footer-link">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
          class="footer-col wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.6s"
        >
          <div class="footer-box">
            <h4 class="lasthead">Policy</h4>
            <ul class="footer-link">
              <li><a href="/terms">Terms of use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
          class="footer-col wow fadeInUp"
          data-wow-duration="0.6s"
          data-wow-delay="0.6s"
        >
          <div class="footer-box" style="margin-top: -20%">
            <h4 class="lasthead">Contacts</h4>
            <ul class="footer-link">
              <li><p style="text-align: center;">support@bullssignals.com</p></li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
          class="footer-col wow fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.2s"
        >
          <div class="footer-box">
            <v-img
              src="/public/img/Visa_Brandmark_White_RGB_2021.png"
              alt="Logo"
            ></v-img>
            <v-img src="/public/img/mc.png" alt="Logo"></v-img>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="footer-bottom" style="margin-top: -1%">
            <div class="content">
              <p class="text">
                Copyright &copy; <a href="/contact" style="color: #D50A73; font-weight: bold;">2023</a>. All Rights Reserved By
                <a href="contact.html"
                  ><span class="websiteName" href="/contact" style="color: #D50A73; font-weight: bold;">BullsSignals</span>.</a
                >
                BullsSignals is owned and operated by
                <span class="companyName">Bullss Oceanss LTD</span>, registered
                at
                <span class="companyAddress"
                  >27 Old Gloucester Street, London, UK, 3AX UK</span
                >
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="footer-bottom margin-none" style="margin-top: -3%">
            <div class="content">
              <p class="text">
                <strong>**Disclaimer**</strong><br />
                Trading of Futures, Forex, Stocks, and other asset classes
                contains substantial risk and is not suited for every investor.
                An investor could potentially lose all or more than the initial
                investment. Risk capital is money that can be lost without
                jeopardizing one's financial security or lifestyle. Only risk
                capital should be used for trading, and only those with
                sufficient risk capital should consider trading. Past
                performance is not necessarily indicative of future results.
                </p>
                <br>
                <p class="text">Hypothetical performance results have many inherent limitations,
                some of which are described below. No representation is being
                made that any account will or is likely to achieve profits or
                losses similar to those shown; in fact, there are frequently
                sharp differences between hypothetical performance results and
                the actual results subsequently achieved by any particular
                trading program. One of the limitations of hypothetical
                performance results is that they are generally prepared with the
                benefit of hindsight. In addition, hypothetical trading does not
                involve financial risk, and no hypothetical trading record can
                completely account for the impact of financial risk on actual
                trading. For example, the ability to withstand losses or to
                adhere to a particular trading program in spite of trading
                losses is a material point which can also adversely affect
                actual trading results. There are numerous other factors related
                to the markets in general or to the implementation of any
                specific trading program that cannot be fully accounted for in
                the preparation of hypothetical performance results and all of
                which can adversely affect trading results.</p>
                <br>
                 <p class="text">Testimonials appearing on this website may not be representative
                of other clients or customers and are not a guarantee of future
                performance or success.</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  mounted() {
    // No need for scroll event listener
  },
  beforeDestroy() {
    // No need to remove event listener
  },
};
</script>

<style scoped>
.text {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px !important;
  font-style: normal;
  line-height: 23px;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
}

a,
span,
p {
  font-weight: 400;
  size: px;
  font-style: normal;
  color: #ffffff;
  line-height: 2rem;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
}
.footer {
  margin-top: 60px;
  padding: 280px 0px 0px;
  background-image: url(../img/footer-bg.png);
  background-size: cover;
  background-color: #416382;
  background-position: center center; /* Center the background image */
  background-repeat: no-repeat;
  width: 100%; /* Make the width 100% */
  height: 100%; /* Make the height 100% of its parent container */
}

.footer-box {
  width: 150px;
  margin: 0 -30px;
  box-shadow: none;
  text-decoration: none;
  background-color: transparent !important;
  color: white !important;
}
.footer-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 0;
}


.footer .footer-box:first-child,
.footer .footer-box:last-child {
  margin: 0; /* Remove margins for the first and last footer boxes */
}

.footer .footer-box .logo {
  padding-bottom: 10px;
}

.footer .footer-box p.text {
  padding-top: 8px;
  color: #ffffff;
  border: none !important;
}

.footer .footer-box .button-box a.link {
  margin-top: 20px;
}

.footer .footer-box .button-box a.link img {
  max-width: 120px;
}

.footer .footer-box .button-box a.link.one {
  margin-right: 20px;
}

.footer .footer-box h4.lasthead {
  color: #ffffff;
  padding-bottom: 10px;
  color: white;
}

.footer .footer-box .footer-link li {
  padding-top: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  background-color: none;
}

.footer .footer-box .footer-link li a {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.footer .footer-box .footer-link li a:hover {
  color: #ff0073;
  text-decoration: underline;
}

.footer .footer-bottom {
  margin-top: 30px;
  padding: 20px 0px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
}

.footer .footer-bottom.margin-none {
  margin-top: 0;
}

.footer .footer-bottom .content p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  color: #ffffff;
}

.footer .footer-bottom .content p a {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 28px;
  font-weight: 400;
  color: #ff0073;
}

.footer .footer-bottom .content p a:hover {
  text-decoration: underline;
}

.footer .footer-bottom .social-style a {
  margin-left: 15px;
  background-color: rgba(213, 218, 250, 0);
  color: #8c99d6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.footer .footer-bottom .social-style a:hover {
  background: linear-gradient(24deg, #903eff 17%, #ea07fe 100%);
  -webkit-box-shadow: -1.816px 3.564px 10px 0px rgba(60, 49, 172, 0.29);
  box-shadow: -1.816px 3.564px 10px 0px rgba(60, 49, 172, 0.29);
  color: rgba(255, 255, 255, 0.9);
}
@media screen and (max-width: 960px) {
  .justify-space-around {
    justify-content: flex-start;
  }
  .footer-box {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (max-width: 599px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    margin-left: 30%;
  }
}

@media only screen and (max-width: 499px) {
  .footer-col {
    width: 100%;
    max-width: none;
  }
}

@media only screen and (max-width: 399px) {
  .footer-link li {
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 320px) {
  .footer-container {
    padding: 0 10px;
    margin-left: 20%;
  }
}

</style>

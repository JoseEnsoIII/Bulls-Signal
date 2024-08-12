<template>
    <v-app>
      <v-footer class="footer" app>
        <v-container fluid style="">
          <v-row class="justify-space-around align-center">
            <v-col cols="12" sm="6" md="2" class="wow fadeInUp" data-wow-duration="0.2s" data-wow-delay="0.2s">
              <div class="footer-box">
                <v-img src="/public/img/tran_logo.png" alt="Logo"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2" class="wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
              <div class="footer-box">
                <h4 class="lasthead">Company</h4>
                <ul class="footer-link">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2" class="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s">
              <div class="footer-box">
                <h4 class="lasthead">Policy</h4>
                <ul class="footer-link">
                  <li><a href="terms.html">Terms of use</a></li>
                  <li><a href="privacy.html">Privacy Policy</a></li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2" class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.6s">
              <div class="footer-box">
                <h4 class="lasthead">Contacts</h4>
                <ul class="footer-link">
                  <li><a>support@bullssignals.com</a></li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2" class="wow fadeInUp" data-wow-duration="0.2s" data-wow-delay="0.2s">
              <div class="footer-box">
                <v-img src="/public/img/Visa_Brandmark_White_RGB_2021.png" alt="Logo"></v-img>
                <v-img src="/public/img/mc.png" alt="Logo"></v-img>
                
              </div>
            </v-col>
          </v-row>
         
          <v-row>
        <v-col cols="12">
          <div class="footer-bottom">
            <div class="content">
              <p class="text">
                Copyright &copy; <a href="#">2023</a>. All Rights Reserved By
                <a href="contact.html"
                  ><span class="websiteName">BullsSignals</span>.</a
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
          <div class="footer-bottom margin-none">
            <div class="content">
              <p class="text">
                <strong>Disclaimer</strong><br />
                Trading of Futures, Forex, Stocks, and other asset classes
                contains substantial risk and is not suited for every investor.
                An investor could potentially lose all or more than the initial
                investment. Risk capital is money that can be lost without
                jeopardizing one's financial security or lifestyle. Only risk
                capital should be used for trading, and only those with
                sufficient risk capital should consider trading. Past
                performance is not necessarily indicative of future results.
                <br />
                Hypothetical performance results have many inherent limitations,
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
                which can adversely affect trading results. <br />
                Testimonials appearing on this website may not be representative
                of other clients or customers and are not a guarantee of future
                performance or success.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
        </v-container>
        
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    // Your script logic here
  }
  </script>
  
  <style>
  .footer {
    background-image: url('/public/img/footer-bg.png');
    background-size: cover;
    color: white; /* Set text color to contrast with background */
    width: 100%;
    /* Removed height property to allow the footer to adjust its height based on content */
  }
  .footer-box {
    margin-bottom: 20px;
  }
  .footer-bottom {
    padding: 20px; /* Adjust padding as needed */
  }
  .content {
    max-width: 1200px; /* Set max-width for content */
    margin: 0 auto; /* Center align content */
  }
  .text {
    /* Add styling for text content */
    font-size: 14px;
    line-height: 1.6;
  }
  </style>
  
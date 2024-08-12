<template>
    <v-container class="termss">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="upper-content">
            <h2 class="title">Terms and Conditions</h2>
            
            <!-- Loop through each term -->
            <div v-for="(item, index) in terms" :key="index" class="term">
              <!-- Display the title -->
              <h4 class="lasth">{{ item.title }}</h4>
              <!-- Display the content -->
              <p class="text about_services">{{ item.content }}</p>
            </div>
            
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        terms: [
          {
            title: 'Use of Services',
            content: 'BullsSignals provides trading signal services, educational resources, and related content for informational purposes only. We do not provide financial advice or guarantee profits.'
          },
          {
            title: 'Risk Disclosure',
            content: 'Trading Futures, Forex, Stocks, and other asset classes involves substantial risk. You understand and acknowledge that there is a risk of financial loss, and you are solely responsible for any trading decisions you make.'
          },
          {
            title: 'No Guarantee of Results',
            content: 'BullsSignals does not guarantee the accuracy, completeness, or timeliness of our signals or content. Past performance is not indicative of future results.'
          },
          {
            title: 'Membership and Subscription',
            content: 'By subscribing to BullsSignals for a year, you gain access to our signal services and educational resources for the duration of your subscription.'
          },
          {
            title: 'Refund Policy',
            content: 'We offer a refund for annual subscriptions within 1 month of the purchase date. To request a refund, please contact our support team with your purchase details.'
          },
          {
            title: 'Intellectual Property',
            content: 'All content on BullsSignals.com, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without prior written consent.'
          },
          {
            title: 'Third-Party Links',
            content: 'Our website may contain links to third-party websites or resources. BullsSignals is not responsible for the content or practices of these external sites.'
          },
          {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify or update these terms and conditions at any time without notice. Please check this page periodically for changes.'
          },
          {
            title: 'Limitation of Liability',
            content: 'BullsSignals and its team shall not be liable for any direct, indirect, or consequential damages arising from your use of our services.'
          },
          {
            title: 'Indemnification',
            content: 'You agree to indemnify and hold harmless BullsSignals and its team from any claims, losses, or expenses arising out of your use of our website or services.'
          },
          {
            title: 'Governing Law',
            content: 'These terms and conditions are governed by the laws of London, UK, and any disputes shall be subject to the exclusive jurisdiction of the courts in London, UK.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .termss{
    margin-top: -15%;
  }
  .title{
    color: #33276A;
  }
  .lasth{
    color: #6342FF;
  }
  .term {
    margin-bottom: 30px;
    text-align: center;
  }
  .title {
    margin-bottom: 50px;
    text-align: center;
  }
  </style>
  
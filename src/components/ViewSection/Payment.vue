<template>
  <div class="container">
    <v-col><div class="product-details" v-if="product">
      <h2>{{ product.name }}</h2>
      <ul>
        <li v-for="(feature, index) in product.features" :key="index">
          {{ feature }}
        </li>
      </ul>
      <p>Price: {{ product.prices[currency] }}</p>
      <v-btn>Add to cart</v-btn>
      <!-- Additional details as needed -->
    </div>
  </v-col>
    <v-col>
       <div class="payment-form">
      <h2>Payment</h2>
      <p>Product: {{ product ? product.name : "Loading..." }}</p>
      <p>Price: {{ product ? product.prices[currency] : "Loading..." }}</p>
      <!-- Add your payment form here, e.g., PayPal button, credit card form, etc. -->
      <div class="payment-methods">
        <!-- Your payment gateway integration goes here -->
      </div>
    </div>
    </v-col>
   
  </div>
  <v-row justify="center">
        <v-col cols="12" xl="7" class="text-center">
          <div class="section-head">
            <h3 class="subtitle">An Exhaustive of amazing Features.</h3>
            <h2 class="title">Some of the Reasons You'll Love Us</h2>
            <p class="text">
              We're not just the world's first truly digital home loan. We're a home loan that actually makes sense - a simple process, with no nonsense, no jargon and no asterisks. It's about time.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="item-box" elevation="0">
            <v-img src="assets3/img/f-item-1.png" height="100"></v-img>
            <v-card-text>
              <h4 class="lasthead">Lower Rates. No fees</h4>
              <p class="text">Our technology streamlines the process, which means streamlined costs. Get the best rates, with no fees.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="item-box" elevation="0">
            <v-img src="assets3/img/f-item-2.png" height="100"></v-img>
            <v-card-text>
              <h4 class="lasthead">Simpler process</h4>
              <p class="text">Complete your online application in your own time, with local customer support available 7 days.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="item-box" elevation="0">
            <v-img src="assets3/img/f-item-3.png" height="100"></v-img>
            <v-card-text>
              <h4 class="lasthead">Get full approval, faster</h4>
              <p class="text">Thanks to our auto-assessment technology, we assess you as you apply to slash wait times.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="item-box" elevation="0">
            <v-img src="assets3/img/f-item-4.png" height="100"></v-img>
            <v-card-text>
              <h4 class="lasthead">Secure process</h4>
              <p class="text">Get tech-nerd grade security, encryption & hosting. Plus, confidence in our Australian Credit Licence.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
export default {
  data() {
    return {
      currency: "eur", // Default currency
      product: null,
    };
  },
  mounted() {
    // Fetch product details based on the route parameter
    const productId = this.$route.params.id;
    this.product = this.products.find(
      (product) => product.name.toLowerCase().replace(/\s+/g, "-") === productId
    );
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },
  },
  computed: {
    products() {
      // Retrieve products data from the Vuex store
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -35%;
}

.product-details {
  flex: 1;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 2%;
}

.payment-form {
  flex: 1;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 2%;
}

.card {
  background-color: #4e7290;
  width: 100%;
  height: auto;
}

</style>

<template>
    <v-banner class="about" id="home">
      <div class="banner-content">
        <h2 class="title">Privacy Policy</h2>
        <v-breadcrumbs class="breadcrumbs">
          <v-breadcrumbs-item class="item" link href="/">
            Home
          </v-breadcrumbs-item>
          <i class="pi pi-arrow-right"></i>
          <v-breadcrumbs-item class="item">
            Privacy Policy
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </div>
    </v-banner>
    <!-- Add your other content here -->
  </template>
  
  <script>
  export default {
    name: 'AboutBanner'
  };
  </script>
  
  <style scoped>
   .about {
    position: absolute; /* Use absolute positioning */
    top: -0.6%;
    left: 0;
    width: 100%;
    height: 400px; /* Set a fixed height for the banner */
    background-image: url('/public/img/bg-2.jpg');
    background-size: cover;
    background-position: center -10%;
    background-repeat: no-repeat;
    z-index: 999;
  }
  
  .banner-content {
    padding: 100px; 
    margin-top: 5%;
  }
  h2{
    font-size: 50px;
  }
  .title,
  .banner-content span,
  .banner-content a,
  .icon {
    color: white;
  } 
  .breadcrumbs{
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  .item{
    font-size: 18px;
  }
  @media screen and (min-width: 1920px) and (max-width: 2560px) {
    .about {
      margin-top: -2%; /* Adjust margin-top */
    }
  }
  @media screen and (min-width: 1600px) and (max-width: 1920px) {
    .about {
      margin-top: -1%; /* Adjust margin-top */
    }
  }
  @media screen and (max-width: 999px) {
    .banner-content {
      margin-top: 10%;
      margin-left: 25%;
    }
  }
  @media screen and (max-width: 699px) {
    .banner-content {
      margin-top: 13%;
      margin-left: 20%;
    }
  }
  @media screen and (max-width: 499px) {
    .banner-content {
      margin-top: 15%;
      margin-left: 10%;
    }
  }
  @media screen and (max-width: 449px) {
    .banner-content {
      margin-top: 20%;
      margin-left: 1%;
    }
  }
  @media screen and (max-width: 399px) {
    .banner-content {
      margin-top: 20%;
      margin-left: -3%;
    }
  }
  @media screen and (max-width: 349px) {
    .banner-content {
      margin-top: 20%;
      margin-left: -10%;
    }
  }
  @media screen and (max-width: 299px) {
    .banner-content {
      margin-top: 20%;
      margin-left: -14%;
    }
  }
  </style>
  
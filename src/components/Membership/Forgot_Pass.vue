<template>
    <v-container fluid class="account-section">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div class="account-wrapper">
            <div class="account-title">
              <a href="/" class="logo">
                <img src="/public/img/tran_logo.png" alt="logo" class="logo" />
              </a>
            </div>
            <div>
              <a href="/" class="back-home">
                <i class="pi pi-angle-left"></i>
                <span class="back"
                  >Back <span class="back">To BullsSignals</span></span
                >
              </a>
            </div>
            <div
            class="account-body"
            style="
              background-color: white;
              width: 450px !important;
              border-radius: 25px;
              height: 450px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              margin-top: 1% !important;
              position: relative;
            "
          >
              <div>
                <h3 class="subtitle" id="login_headline" style="font-size: 36px; margin-top: -20%;color: #33276a;">
                  Welcome To BullsSignals
                </h3>
                <div class="login_box">
                  <form class="account-form" id="login-form">
                    <div class="form-group" style="text-align: left">
                      <label for="sign-up" style="font-size: 18px;margin-top: 5%;"
                        >Your Email
                      </label>
                      <br />
                      <input
                        type="email"
                        placeholder="Enter Your Email "
                        id="su-email"
                        name="email"
                        style="
                        height: 50px;
                        width: 100%;
                        border: 1px solid #e3e3ef;
                        border-radius: 5px;
                        padding: 5%;
                        background-color: #f6f6fa;"
                      />
                      <p id="login_error" style="color: red"></p>
                      <label for="sign-up" style="font-size: 18px;margin-top: 5%;"
                        >Verification Code
                      </label>
                      <br />
                      <input
                        type="email"
                        placeholder="Enter The Code"
                        id="su-email"
                        name="email"
                        style="
                        height: 50px;
                        width: 100%;
                        border: 1px solid #e3e3ef;
                        border-radius: 5px;
                        padding: 5%;
                        background-color: #f6f6fa;"
                      />
                      <p id="login_error" style="color: red"></p>
                    </div>
  
                    <div class="form-group text-center">
                      <button
                        class="sign-in button-1"
                        type="submit"
                        style="
                          background: rgb(139, 60, 255);
                          background: linear-gradient(
                            90deg,
                            rgba(139, 60, 255, 1) 0%,
                            rgba(106, 45, 255, 1) 50%,
                            rgba(66, 27, 255, 1) 100%
                          );
                          border-radius: 15px;position:absolute;
                          bottom: 80px;
                          left:40%;
                        "
                      >
                        Sign In
                      </button>
                      <br />
                      <span class="sign-in-recovery" style="font-size: 16px; position: absolute; bottom: 35px;left:10px; width: 100%; text-align: center;">
                        You Have Account? <a href="/login" style="color: #6342ff;">Start Now!</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  
  <script>
  export default {
    name: "AccountSection",
  };
  </script>
  
  <style scoped>
 .account-section {
  background-image: url("/public/img/account-bg.jpg");
  margin-top: 0%;
  background-size: cover;
  height: 100vh;
}
  
  .account-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0%;
  }
  
  .pi,
  .back {
    color: white;
    font-size: 18px;
  }
  
  .logo {
    right: auto;
    height: auto;
  }
  
  .back-home {
  margin-left: 15%;
  position: absolute;
  top: 15%;
}

  .account-body {
    background-color: white;
    width: 500px;
    border-radius: 25px;
    height: 500px;
    display: flex;
    padding: 5%;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
  }
  @media only screen and (min-width: 2560px) and (max-width: 3440px) {
  .account-section{
    height: 100vh !important;
  }
  
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 7%; /* Adjust as needed */
  left: 15%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 50% !important;
  margin-top: 3% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}
@media only screen and (min-width: 1920px) and (max-width: 2560px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 8% !important; /* Adjust as needed */
  left: 15% !important; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 50% !important;
  margin-top: 5% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1920px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 10%; /* Adjust as needed */
  left: 15%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 40% !important;
  margin-top: 5% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1600px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 10%; /* Adjust as needed */
  left: 15%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 50% !important;
  margin-top: 8% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 8%; /* Adjust as needed */
  left: 15%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 40% !important;
  margin-top: 3% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1366px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto !important; /* Center horizontally */
  margin-right: auto !important; /* Center horizontally */
  text-align: center !important; /* Center text */
  position: fixed; /* Set position fixed */
  top: 10% !important; /* Adjust as needed */
  left: 15%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 40% !important;
  top: 10% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .account-section{
    height: 100vh !important;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 10%; /* Adjust as needed */
  left: 15%;
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 40% !important;
  margin-top: 5% !important; 
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}


@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .account-section{
    height: 100vh;
  }
  .back-home {
    top: 11% !important;
    margin-left: 4% !important;
    text-align: center; /* Center text */
  }
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 60% !important;
  margin-top: 10% !important;
  padding: 5% !important;
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  .account-section{
    height: 100vh;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: fixed; /* Set position fixed */
  top: 22% !important; /* Adjust as needed */
  left: 45%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
  .subtitle{
    text-align: center;
  }
 .account-body{
  width: 80% !important;
  margin-top: 10% !important; 
  padding: 10%;
}
.sign-in {
    margin: 0 auto !important; /* Center horizontally */
    display: block !important;  /* Ensure it takes up the entire width */
  }
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .account-section{
    height: 120vh;
  }
  .back-home {
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  text-align: center; /* Center text */
  position: absolute; /* Set position fixed */
  margin-top: 10% !important; /* Adjust as needed */
  left: 45%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}
 .account-body{
  width: 100% !important;
  margin-top: 25% !important; 
  padding: 15%;
}
.sign-in{
  margin-left: -10% !important;
}
.sign-in-recovery {
    margin: 0 auto;
    width: 70%; /* Adjust width as needed */
    text-align: center; /* Center text */
    display: flex;
    justify-content: center; /* Center horizontally */
  }
}

  </style>
  
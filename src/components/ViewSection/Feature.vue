<template>
  <v-container fluid>
    <v-row justify="space-between" align="center">
      <v-col cols="12" xxl="5" lg="6">
        <div class="section-head fade-up">
          <h3 class="subtitle" style="color: #66cc33">
            The {{ websiteName }} Story
          </h3>
          <h2 class="title">The future is digital.</h2>
          <p class="text">
            {{ websiteName }} is the best way to receive trading signals from
            world-wide financial markets. Businesses small and large, as well as
            private traders rely on our data to power their decision-making.
          </p>
          <v-list class="flex-list" style="display: flex; flex-wrap: wrap; margin-left: -5%">
  <v-list-item
    v-for="(item, index) in features"
    :key="index"
    class="list-item fade-up"
    :style="{ 'animation-delay': (index * 0.4) + 's', 'flex': '0 0 calc(50% - 20px)', 'margin-top': '-15px' }"
  >
    <div class="icon-wrapper">
      <img
        src="/img/check.png"
        alt="Check Icon"
        class="img"
        style="background-color: #66cc33; padding: 8px; border-radius: 50%; width: 40px; height: 40px;"
      />
    </div>
    <div class="list-item-content">
      <img
        src="/img/check.png"
        alt="Example Image"
        style="max-width: 100%; height: 80px; width: 80px; margin-top: -15% !;"
      />
      <p class="texts" style="height: 30px; margin-top: -15%; margin-left: 13%">{{ item }}</p>
    </div>
  </v-list-item>
</v-list>

        </div>
      </v-col>
      <v-col cols="12" lg="6" class="col-lg-6 d-lg-block d-none">
        <div
          class="pic wow fadeInRight"
          data-wow-duration="0.4s"
          data-wow-delay="0.4s"
        >
          <img src="/public/img/feature.png" alt="" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "YourComponentName",
  data() {
    return {
      websiteName: "Bull Signal",
      features: [
        "Real-Time API",
        "Historical Data",
        "Market Analysis",
        "Case Studies",
      ],
      item: "", // Define the item property
    };
  },
};

</script>

<style scoped>
.section-head {
  margin-bottom: 26px;
}

.section-head h3.subtitle {
  color: #66cc33;
}

.section-head h2.title {
  color: #142645;
  padding: 21px 0 16px;
}

.section-head p.text {
  color: #5d5779;
}

/* Feature Start */
.feature {
  padding: 60px 0px 120px;
}

.feature .section-head {
  margin-bottom: 6px;
}

.feature .section-head h2.title {
  color: #142645;
  padding: 21px 0 16px;
}

.feature .list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.feature .list .list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 20px;
  width: 50%;
}

.feature .list .list-item .thumb {
  margin-right: 20px;
  min-width: 40px;
}

.feature .list .list-item .thumb .icon {
  border-radius: 50%;
  background-color: #66cc33;
  -webkit-box-shadow: 0px 4px 13px 0px rgba(139, 123, 217, 0.14);
  box-shadow: 0px 4px 13px 0px rgba(139, 123, 217, 0.14);
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.feature .list .list-item p.text {
  color: #33276a;
}

.feature .pic img {
  max-width: unset;
}

.flex-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5%;
  margin-top: 20px;
  width: 90%;
}

.list-item {
  flex: 0 0 calc(50% - 20px);
  margin: 5px;
}

.img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 25% !important;
    margin-top: -110px !important;
    width: 100%;
  }
@media screen and (min-width: 1920px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
  }

  .texts {
    margin-left: 15% !important;
    margin-top: 20px;
    width: 100%;
  }
}
@media screen and (max-width: 1919px) and (min-width: 1900px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
  }

  .texts {
    margin-left: 15% !important;
    margin-top: 20px;
    width: 100%;
  }
}
@media screen and (max-width: 1899px) and (min-width: 1800px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
  }

  .texts {
    margin-left: 17% !important;
    margin-top: 20px;
    width: 100%;
  }
}

@media screen and (max-width: 1799px) and (min-width: 1700px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
  }

  .texts {
    margin-left: 18% !important;
    margin-top: -18% !important;
    width: 100%;
  }
}


@media screen and (max-width: 1299px) and (min-width: 1200px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
    margin-left: 6% !important;
   }

  .texts {
    margin-left: 18% !important;
    margin-top: -12% !important;
    width: 100%;
  }
}

@media screen and (max-width: 1199px) and (min-width: 1100px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
    margin-left: 6% !important;
   }

  .texts {
    margin-left: 19% !important;
    margin-top: -14% !important;
    width: 100%;
  }
}

@media screen and (max-width: 1099px) and (min-width: 1000px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 0% !important;
    margin-left: 6% !important;
   }

  .texts {
    margin-left: 21% !important;
    margin-top: -15% !important;
    width: 100%;
  }
}
@media screen and (max-width: 999px) and (min-width: 950px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 18% !important;
    margin-top: -40% !important;
    width: 100%;
  }
}
@media screen and (max-width: 949px) and (min-width: 900px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 18% !important;
    margin-top: -42% !important;
    width: 100%;
  }
}

@media screen and (max-width: 899px) and (min-width: 850px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 5% !important;
  }

  .texts {
    margin-left: 20% !important;
    margin-top: -43% !important;
    width: 100%;
  }
}
@media screen and (max-width: 849px) and (min-width: 800px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 5% !important;
  }

  .texts {
    margin-left: 20% !important;
    margin-top: -45% !important;
    width: 100%;
  }
}
@media screen and (max-width: 799px) and (min-width: 750px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 23% !important;
    margin-top: -50% !important;
    width: 100%;
  }
}
@media screen and (max-width: 749px) and (min-width: 700px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 23% !important;
    margin-top: -55% !important;
    width: 100%;
  }
}
@media screen and (max-width: 699px) and (min-width: 650px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 15% !important;
  }

  .texts {
    margin-left: 28% !important;
    margin-top: -60% !important;
    width: 70%;
  }
}
@media screen and (max-width: 649px) and (min-width: 600px) {
  .img {
    max-width: 100%;
    height: 80px;
    width: 80px;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 28% !important;
    margin-top: -70% !important;
    width: 100%;
  }
}

@media screen and (max-width: 599px) and (min-width: 500px) {
  .img {
    max-width: 100%;
    height: auto;
    width: auto;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 15% !important;
    margin-top: -110px !important;
    width: 100%;
  }

  .flex-list {
    flex-direction: column;
  }

  .list-item {
    flex: 0 0 100%;
    margin: 5px 0; /* Adjust margin for spacing */
  }
}


@media screen and (max-width: 499px) and (min-width: 400px) {
  .img {
    max-width: 100%;
    height: auto;
    width: auto;
    margin-top: 10% !important;
  }

  .texts {
    margin-left: 19% !important;
    margin-top: -110px !important;
    width: 100%;
  }

  .flex-list {
    flex-direction: column;
  }

  .list-item {
    flex: 0 0 100%;
    margin: 5px 0; /* Adjust margin for spacing */
  }
}

@media screen and (max-width: 399px) and (min-width: 320px) {
  .img {
    max-width: 100%;
    height: auto;
    width: auto;
    margin: 10px;
    margin-top: 5% !important;
  }

  .texts {
    margin-left: 30% !important;
    margin-top: -115px !important;
    width: 90% !important;
  }

  .flex-list {
    flex-direction: column;
  }

  .list-item {
    flex: 0 0 100%;
    margin: 5px 0; /* Adjust margin for spacing */
  }
}


@media screen and (max-width: 1280px) {
  .pic {
    display: none; /* Hide the entire image container */
  }
}


</style>

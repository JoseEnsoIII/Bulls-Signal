<template>
  <div class="counter">
   <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3" class="text-center" style="">
          <div class="page-counter fade-up">
            <div class="thmb">
              <img style="height: 70px;" src="/public/img/counter-1.png" alt="">
            </div>
            <div class="counter-item">
              <h2 class="fifty" style="font-family: 'Josefin Sans', sans-serif; font-weight: 600;"><span class="count-num" style="font-size: 50px;">{{ animatedCounts[0].toFixed(0) }}</span>M+</h2>
              <p class="text">Trading Volume (USD)</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="text-center" style="">
          <div class="page-counter">
            <div class="thmb">
              <img style="height: 70px;" src="/public/img/counter-2.png" alt="">
            </div>
            <div class="counter-item">
              <h2 class="fifty" style="font-family: 'Josefin Sans', sans-serif; font-weight: 600;"><span class="count-num" style="font-size: 50px;">{{ animatedCounts[1].toFixed(0) }}</span>K+</h2>
              <p class="text">Transactions</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="text-center" style="">
          <div class="page-counter">
            <div class="thmb">
              <img style="height: 70px;" src="/public/img/counter-3.png" alt="">
            </div>
            <div class="counter-item">
              <h2 class="fifty" style="font-family: 'Josefin Sans', sans-serif; font-weight: 600;"><span class="count-num" style="font-size: 50px;">{{ animatedCounts[2].toFixed(0) }}</span>K+</h2>
              <p class="text">Happy Users</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="text-center" style="">
          <div class="page-counter">
            <div class="thmb">
              <img style="height: 70px;" src="/public/img/counter-4.png" alt="">
            </div>
            <div class="counter-item">
              <h2 class="fifty" style="font-family: 'Josefin Sans', sans-serif; font-weight: 600;"><span class="count-num" style="font-size: 50px;">{{ animatedCounts[3].toFixed(0) }}</span>K+</h2>
              <p class="text">Custom Portfolios Created</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      targets: [50, 400, 10, 20], // Target values for each counter
      currentCounts: [0, 0, 0, 0], // Current values for each counter
      duration: 5000, // Duration for the counting animation in milliseconds
    };
  },
  computed: {
    animatedCounts() {
      // Compute the current animated values for each counter
      return this.targets.map((target, index) => {
        const diff = target - this.currentCounts[index];
        const step = diff / (this.duration / 50); // Dividing by 50 to simulate smoother animation
        const currentCount = this.currentCounts[index] + step;

        // Ensure that the count stops when it reaches the target
        if (diff > 0) {
          return Math.min(currentCount, target);
        } else {
          return Math.max(currentCount, target);
        }
      });
    },
  },
  mounted() {
    // Start counting animation when component is mounted
    this.startCounting();
  },
  methods: {
    startCounting() {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= this.duration) {
          clearInterval(interval);
          this.currentCounts = this.targets;
        } else {
          this.currentCounts = this.targets.map((target, index) => {
            const diff = target - this.currentCounts[index];
            const step = diff * (elapsedTime / this.duration);
            return this.currentCounts[index] + step;
          });
        }
      }, 50);
    },
  },
};
</script>
<style scoped>
/* Add animation for fade-up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.counter .page-counter {
  animation: fadeUp 0.5s ease forwards;
  opacity: 0;
  
}


.counter .page-counter .thmb {
  margin: 0 auto 0px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0.942px 17.975px 24px 0px rgba(110, 100, 199, 0.22);
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter .page-counter .counter-item {
  margin-top: 34px;
}

.counter .page-counter .counter-item h2.fifty {
  font-size: 50px;
  line-height: 60px;
  color: #142645;
}

.counter .page-counter .counter-item h2.fifty span {
  font-family: "Josefin Sans", sans-serif;
  font-size: 40px;
  line-height: 60px;
  color: #142645;
}

.counter .page-counter .counter-item p.text {
  color: #142645;
  font-size: 21px;
}

@media screen and (max-width: 999px) {
  .counter .page-counter .thmb {
    width: 100px;
    height: 100px;
  }

  .counter .page-counter .counter-item h2.fifty {
    font-size: 40px;
    line-height: 48px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 40px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 18px;
  }
  .counter .page-counter .thmb img {
    width: 50px;
    height: 50px !important;
  }
}

@media screen and (max-width: 900px) {
  .counter .page-counter .thmb {
    width: 80px;
    height: 80px;
  }
  .counter .page-counter .thmb img {
    width: 50px;
    height: 50px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 36px;
    line-height: 42px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 36px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 16px;
  }
}

@media screen and (max-width: 800px) {
  .counter .page-counter .thmb {
    width: 70px;
    height: 70px;
  }
  .counter .page-counter .thmb img {
    width:45px;
    height:45px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 32px;
    line-height: 38px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 32px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 15px;
  }
}
@media screen and (max-width: 700px) {
  .counter .page-counter .thmb {
    width: 60px;
    height: 60px;
  }
  .counter .page-counter .thmb img {
    width: 40px;
    height: 40px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 28px;
    line-height: 32px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 28px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .counter .page-counter .thmb {
    width: 50px;
    height: 50px;
  }
  .counter .page-counter .thmb img {
    width: 35px;
    height: 35px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 26px;
    line-height: 30px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 26px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .counter .page-counter .thmb {
    width: 45px;
    height: 45px;
  }
  .counter .page-counter .thmb img {
    width: 30px;
    height: 30px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 22px;
    line-height: 26px;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 22px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 13px;
  }
}

@media screen and (max-width: 400px) {
  .counter .page-counter .thmb {
    width: 50px;
    height: 50px;
  }
  .counter .page-counter .thmb img {
    width: 30px;
    height: 30px !important;
  }
  .counter .page-counter .counter-item h2.fifty {
    font-size: 24px !important;
    line-height: 24px;
    margin-top: -5%;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 24px !important;
    line-height: 24px;
  }

  .counter .page-counter .counter-item p.text {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .counter .page-counter .thmb {
    width: 40px;
    height: 40px;
    margin-top: -10%;
  }
  .counter .page-counter .thmb img {
    width: 25px;
    height: 25px !important;
  }

  .counter .page-counter .counter-item h2.fifty {
    font-size: 20px !important;
    line-height: 24px;
    margin-top: -5%;
  }

  .counter .page-counter .counter-item h2.fifty span {
    font-size: 20px !important;
    line-height: 24px;
  }
  .count-num{
    font-size: 20px;
  }
  .counter .page-counter .counter-item p.text {
    font-size: 13px;
  }
}

</style>

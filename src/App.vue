<template>
  <v-app>
    <Header />

    <v-main>
        <div class="d-flex justify-center pa-6" v-if="problems">
          <v-alert
              dense
              outlined
              type="error"
              width="350"
          >
              {{errorMessage}}
          </v-alert>
        </div>

        <calculator :ddds="ddds" :plansTitles="plans" @showResult="valuesToCalculate = $event, calculateValue(valuesToCalculate)"/>

        <result-calculator :tariffsCalculated="tariffsCalculated" v-if="showResult"/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from './components/header/Header'
import Calculator from './components/calculator/Calculator'
import ResultCalculator from './components/resultCalculator/ResultCalculator'
import Footer from './components/footer/Footer'
import API from './services/api'

export default {
  name: 'App',
  data: () => {
    return {
      valuesToCalculate: '',
      tariffsCalculated: '',
      showResult: false,
      ddds: [],
      plans: [],
      problems: false,
      errorMessage: 'Desculpe! Estamos com problemas'
    }
  }, 

  components: {
    Header,
    Calculator,
    ResultCalculator,
    Footer
  },

  created() {
    API.getAllDDD()
      .then(result => {
        if(result.ddds) {
          this.ddds = result.ddds
          this.problems = false
        } else {
          this.problems = true
        }
      })

    API.getPlans()
      .then(result => {
        if(result.plans) {
          this.plans = result.plans
          this.problems = false
        } else {
          this.problems = true
        }
      })
  },

  methods: {
    calculateValue(valuesToCalculate) {
      API.calculate(valuesToCalculate)
        .then(result => {
          if(!result.erro) {
            console.log('entrei')
            this.problems = false
            this.tariffsCalculated = result.tariffs;
            this.showResult = true 
          } else {
            this.showResult = false
            this.errorMessage = result.erro
            this.problems = true
          }
        })
    }
  }

};
</script>

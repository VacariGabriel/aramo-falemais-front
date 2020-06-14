<template>
  <v-app>
    <Header />

    <v-main>
        <calculator :ddds="ddds" :plansTitles="plans" @showResult="values = $event, calculateValue(values)"/>

        <result-calculator v-if="true"/>
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
      tariffs: '',
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
    calculateValue(values) {
      API.calculate(values)
        .then(result => {
          if(!result.erro) {
            this.problems = false
            this.tariffs = result.tariffs;
            this.showComponent = true 
          } else {
            this.errorMessage = result.erro
            this.problems = true
          }
        })
    }
  }

};
</script>

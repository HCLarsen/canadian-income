<template>
  <div>
    <div class="description" v-html="description"></div>
    <input placeholder="Enter your income" v-model.number="income" type="number" class="income"/>
    <p class="answer">{{result}}</p>
    <footer>Data is sourced from the <a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/income-statistics-gst-hst-statistics/t1-final-statistics/2017-tax-year.html" target="_blank">Canadian Revenue Agency</a></footer>
  </div>
</template>

<script>

import { year, total, values } from '@/data/canada.json';

export default {
  name: 'Comparator',
  data() {
    return {
      description: `<p>Ever want to know where your income sits compared to other Canadians? Want to shut up your rich friends when they claim they're not rich?</p>\n<p>Simply enter your (or anyone's) yearly income for tax year ${year} into the box below, and you'll see where that income sits against other Canadians.</p>`,
      income: 0,

      year,
      total,
      values,
    }
  },
  computed: {
    result() {
      var number = Number(this.income);
      if (!isNaN(number) && number > 0) {
        if (this.above > this.below) {
          return `With a yearly salary of ${this.currency(number)}, you make less money than over ${this.percent(this.above/this.total)} of Canadians.`;
        } else {
          return `With a yearly salary of ${this.currency(number)}, you make more money than over ${this.percent(this.below/this.total)} of Canadians.`;
        }
      } else {
        return 'Please enter numbers only. Dollar signs and commas are unnecessary.';

      }
    },
    position() {
      var position = -1;
      this.values.forEach((value, i) => {
        if (value.max > this.income && position == -1) {
          console.log('Returning');
          position = i;
        }
      });
      return position;
    },
    below() {
      return this.numbers.slice(0, this.position).reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
    },
    above() {
      return this.numbers.slice(this.position).reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
    },
    numbers() {
      return this.values.map(value => {
        return value.number;
      });
    }
  },
  methods: {
    percent(number) {
      return `${Math.floor(number * 100)}%`;
    },
    currency(number) {
      const formatter = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 0
      })
      return formatter.format(number);
    },
  }
}
</script>

<style scoped>
  footer {
    position: absolute;
    bottom: 5%;
    width: 100%;
    text-align: center;
  }
</style>

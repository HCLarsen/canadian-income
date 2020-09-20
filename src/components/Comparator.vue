<template>
  <div>
    <div class="description">
      <p>Ever want to know where your income sits compared to other Canadians? Want to shut up your rich friends when they claim they're not rich?</p>
      <p>Simply enter your (or anyone's) yearly income for tax year {{year}} into the box below, and you'll see where that income sits against that of other Canadians.</p>
    </div>
    <input placeholder="Enter your income" v-model.number="income" type="number" class="income"/>
    <p class="answer">{{result}}</p>
    <p class="comment" v-html="comment"></p>
    <footer>Data is sourced from the <a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/income-statistics-gst-hst-statistics/t1-final-statistics/2017-tax-year.html" target="_blank">Canadian Revenue Agency</a></footer>
  </div>
</template>

<script>

import { year, total, values } from '@/data/canada.json';

export default {
  name: 'Comparator',
  data() {
    return {
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
          return `With a yearly salary of ${this.currency(number)}, you make less money than over ${this.percent(this.above)} of Canadians.`;
        } else {
          return `With a yearly salary of ${this.currency(number)}, you make more money than over ${this.percent(this.below)} of Canadians.`;
        }
      } else {
        return 'Please enter numbers only. Dollar signs and commas are unnecessary.';

      }
    },
    position() {
      var position = -2;
      this.values.forEach((value, i) => {
        if (value.max > this.income && position == -2) {
          position = i;
        }
      });
      return position;
    },
    below() {
      var number = this.numbers.slice(0, this.position + 1).reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
      return number / this.total;
    },
    above() {
      var numbers = this.numbers.slice(this.position + 1)
      var number = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
      return number / this.total;
    },
    numbers() {
      return this.values.map(value => {
        return value.number;
      });
    },
    comment() {
      if (this.income <= 0) {
        return "";
      } else if (this.above > 0.8) {
        return "You make very little money. At this low level, it's most likely that you're working part time. If you're making this income at full time, then you have a very low income. In fact, your low income is an expression of society's failure. You have every right to demand more money.";
      } else if (this.above > 0.60) {
        return "You're poor. There's no way to sugarcoat it. Your income reflects the failure of our economy to ensure that everyone is making a liveable wage.";
      } else if (this.above > 0.5) {
        return "You're below the halfway mark. More than half of Canadians make more money than you. You're definitely not very well off, but there also a lot of Canadians that are worse off than you."
      } else if (this.below > 0.98) {
        return "You're obscenely rich. With an income this high, there's a very good chance that you're part of the 1%. You know, one of those people that were the reason for all the occupy protests? Yeah, that's your fault.";
      } else if (this.below > 0.8) {
        return `You're rich. There's no denying it. You make more money than the mass majority of Canadians. There's no good reason for you to want a higher income. In fact, research has shown that increasing wages for people in your income bracket makes things more difficult for those in the lower income ranges. So instead of complaining that your car or house isn't expensive enough, try being grateful for having so much already.`;
      } else {
        return "You're neither rich nor poor. You're a solid middle class worker. As long as you're reasonably smart about your money, and don't have unexpected financial problems, you can easily afford a reasonable standard of living.";
      }
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

  p {
    width: 80%;
    margin: 1em 10%;
  }
</style>

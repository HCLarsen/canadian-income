(function(){"use strict";var e={758:function(e,n,r){var t=r(144),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("h1",[e._v(e._s(e.title))]),r("Comparator")],1)},a=[],i=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{staticClass:"description"},[r("p",[e._v("Ever want to know where your income sits compared to other Canadians? Want to shut up your rich friends when they claim they're not rich?")]),r("p",[e._v("Simply enter your (or anyone's) yearly income for tax year "+e._s(e.year)+" into the box below, and you'll see where that income sits against that of other Canadians.")])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.income,expression:"income",modifiers:{number:!0}}],staticClass:"income",attrs:{placeholder:"Enter your income",type:"number"},domProps:{value:e.income},on:{input:function(n){n.target.composing||(e.income=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}}),r("p",{staticClass:"answer"},[e._v(e._s(e.result))]),r("p",{staticClass:"comment",domProps:{innerHTML:e._s(e.comment)}}),e._m(0)])},s=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("footer",[e._v("Data is sourced from the "),r("a",{attrs:{href:"https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/income-statistics-gst-hst-statistics/t1-final-statistics/2017-tax-year.html",target:"_blank"}},[e._v("Canadian Revenue Agency")])])}],u=JSON.parse('{"ty":2017,"MF":17748780,"VO":[{"max":4999,"number":751600},{"max":9999,"number":887510},{"max":14999,"number":1010020},{"max":19999,"number":1006070},{"max":24999,"number":1025920},{"max":29999,"number":1029130},{"max":34999,"number":1047790},{"max":39999,"number":1062350},{"max":44999,"number":1046590},{"max":49999,"number":980370},{"max":54999,"number":868630},{"max":59999,"number":773780},{"max":69999,"number":1324690},{"max":79999,"number":1093140},{"max":89999,"number":870270},{"max":99999,"number":712900},{"max":149999,"number":1474080},{"max":249999,"number":552580},{"max":250000,"number":231360}]}'),m={name:"Comparator",data(){return{income:0,year:u.ty,total:u.MF,values:u.VO}},computed:{result(){var e=Number(this.income);return!isNaN(e)&&e>0?this.above>this.below?`With a yearly salary of ${this.currency(e)}, you make less money than over ${this.percent(this.above)} of Canadians.`:`With a yearly salary of ${this.currency(e)}, you make more money than over ${this.percent(this.below)} of Canadians.`:"Please enter numbers only. Dollar signs and commas are unnecessary."},position(){var e=-2;return this.values.forEach(((n,r)=>{n.max>this.income&&-2==e&&(e=r)})),e},below(){var e=this.numbers.slice(0,this.position+1).reduce(((e,n)=>e+n),0);return e/this.total},above(){var e=this.numbers.slice(this.position+1),n=e.reduce(((e,n)=>e+n),0);return n/this.total},numbers(){return this.values.map((e=>e.number))},comment(){return this.income<=0?"":this.above>.8?"You make very little money. At this low level, it's most likely that you're working part time. If you're making this income at full time, then you have a very low income. In fact, your low income is an expression of society's failure. You have every right to demand more money.":this.above>.6?"You're poor. There's no way to sugarcoat it. Your income reflects the failure of our economy to ensure that everyone is making a liveable wage.":this.above>.5?"You're below the halfway mark. More than half of Canadians make more money than you. You're definitely not very well off, but there also a lot of Canadians that are worse off than you.":this.below>.98?"You're obscenely rich. With an income this high, there's a very good chance that you're part of the 1%. You know, one of those people that were the reason for all the occupy protests? Yeah, that's your fault.":this.below>.8?"You're rich. There's no denying it. You make more money than the mass majority of Canadians. There's no good reason for you to want a higher income. In fact, research has shown that increasing wages for people in your income bracket makes things more difficult for those in the lower income ranges. So instead of complaining that your car or house isn't expensive enough, try being grateful for having so much already.":"You're neither rich nor poor. You're a solid middle class worker. As long as you're reasonably smart about your money, and don't have unexpected financial problems, you can easily afford a reasonable standard of living."}},methods:{percent(e){return`${Math.floor(100*e)}%`},currency(e){const n=new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:0});return n.format(e)}}},c=m,l=r(1),h=(0,l.Z)(c,i,s,!1,null,"958e3406",null),f=h.exports,y={name:"App",data(){return{title:"Canadian Income Comparator"}},components:{Comparator:f}},p=y,v=(0,l.Z)(p,o,a,!1,null,null,null),b=v.exports;t.Z.config.productionTip=!1,new t.Z({render:e=>e(b)}).$mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,a){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var m=o();void 0!==m&&(n=m)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,i=t[0],s=t[1],u=t[2],m=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var c=u(r)}for(n&&n(t);m<i.length;m++)a=i[m],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self["webpackChunkcanadian_income"]=self["webpackChunkcanadian_income"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(758)}));t=r.O(t)})();
//# sourceMappingURL=app.5bcfd9e5.js.map
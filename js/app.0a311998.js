(function(){"use strict";var n={8525:function(n,e,t){var r=t(5130),o=t(6768),u=t(4232);const l={class:"env-display"},i={key:0},a={key:1};function c(n,e,t,r,c,s){return(0,o.uX)(),(0,o.CE)("div",l,[e[7]||(e[7]=(0,o.Lk)("h1",null,"Environment Variables",-1)),(0,o.Lk)("table",null,[e[5]||(e[5]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Variable"),(0,o.Lk)("th",null,"Value")])],-1)),(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",null,[e[0]||(e[0]=(0,o.Lk)("td",null,"VUE_APP_FOR_EVERYONES",-1)),(0,o.Lk)("td",null,(0,u.v_)(c.forEveryones),1)]),(0,o.Lk)("tr",null,[e[1]||(e[1]=(0,o.Lk)("td",null,"VUE_APP_API_URL",-1)),(0,o.Lk)("td",null,(0,u.v_)(c.apiUrl),1)]),(0,o.Lk)("tr",null,[e[2]||(e[2]=(0,o.Lk)("td",null,"VUE_APP_SUPER_SECRET_KEY",-1)),(0,o.Lk)("td",null,(0,u.v_)(c.secretKey),1)]),(0,o.Lk)("tr",null,[e[3]||(e[3]=(0,o.Lk)("td",null,"VUE_APP_PROD_SECRET",-1)),(0,o.Lk)("td",null,(0,u.v_)(c.prodSecret),1)]),(0,o.Lk)("tr",null,[e[4]||(e[4]=(0,o.Lk)("td",null,"VUE_APP_GITHUB_SECRET",-1)),(0,o.Lk)("td",null,(0,u.v_)(c.githubSecret),1)])])]),(0,o.Lk)("div",null,[e[6]||(e[6]=(0,o.Lk)("h2",null,"Message from Backend",-1)),c.message?((0,o.uX)(),(0,o.CE)("p",i,(0,u.v_)(c.message),1)):((0,o.uX)(),(0,o.CE)("p",a,"Loading..."))])])}var s={data(){return{message:null,forEveryones:"Everyone can see me !",apiUrl:"https://api.production.com",secretKey:"production_secret_key",prodSecret:"production_secret",githubSecret:"MONSECRET"}},mounted(){fetch("https://back-express-one.vercel.app/api/hello").then((n=>n.json())).then((n=>{this.message=n.message})).catch((n=>{console.error("Error fetching the backend resource:",n),this.message="Error loading message."}))}},f=t(1241);const d=(0,f.A)(s,[["render",c],["__scopeId","data-v-8065bd00"]]);var p=d;(0,r.Ef)(p).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r].call(u.exports,u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,u){if(!r){var l=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var i=!0,a=0;a<r.length;a++)(!1&u||l>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(i=!1,u<l&&(l=u));if(i){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,l=r[0],i=r[1],a=r[2],c=0;if(l.some((function(e){return 0!==n[e]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(a)var s=a(t)}for(e&&e(r);c<l.length;c++)u=l[c],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},r=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(8525)}));r=t.O(r)})();
//# sourceMappingURL=app.0a311998.js.map
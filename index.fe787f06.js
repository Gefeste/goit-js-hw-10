!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=a.test(t);return f||u.test(t)?c(t.slice(2),f?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,a,u,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=o,r=i;return o=i=void 0,f=t,a=n.apply(r,e)}function h(n){return f=n,u=setTimeout(T,t),l?y(n):a}function j(n){var e=n-c;return void 0===c||e>=t||e<0||s&&n-f>=r}function T(){var n=g();if(j(n))return w(n);u=setTimeout(T,function(n){var e=t-(n-c);return s?v(e,r-(n-f)):e}(n))}function w(n){return u=void 0,d&&o?y(n):(o=i=void 0,a)}function O(){var n=g(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===u)return h(c);if(s)return u=setTimeout(T,t),y(c)}return void 0===u&&(u=setTimeout(T,t)),a}return t=b(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(b(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=i=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O};var y=document.querySelector(".country-list");document.querySelector("#search-box").addEventListener("input",n(e)((function(n){(t=n.target.value,fetch("".concat("https://restcountries.com/v3.1/name/").concat(t,"?fields=name,capital,population,flags,languages")).then((function(n){return n.ok,n.json()}))).then((function(n){n.length>1?y.innerHTML=n.map((function(n){var t=n.name.official,e=n.flags.svg;return'<li class=""js-list>\n        <div class="js-box">\n        <img src="'.concat(e,'" width="30" alt="flag">\n        <p>').concat(t,"</p>\n        </div>\n        </li>")})).join(""):y.innerHTML=function(n){return n.map((function(n){var t=n.name.official,e=n.flags.svg,o=n.capital,i=n.population,r=n.languages;return'<img src="'.concat(e,'" width="50" alt="flag">\n        <h1>').concat(t,"</h1>\n        <p>Capital: ").concat(o,"</p>\n        <p>Population: ").concat(i,"</p>\n        <p>Languages: ").concat(Object.values(r),"</p>")})).join("")}(n)}));var t}),300)),console.log()}();
//# sourceMappingURL=index.fe787f06.js.map
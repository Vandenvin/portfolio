function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequire82ef;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in r){var e=r[n];delete r[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){r[n]=e},e.parcelRequire82ef=i);var o,a="Expected a function",u=NaN,c="[object Symbol]",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,p=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,m=v||y||Function("return this")(),g=Object.prototype.toString,h=Math.max,b=Math.min,T=function(){return m.Date.now()};function _(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function M(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&g.call(n)==c}(n))return u;if(_(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=_(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(f,"");var t=s.test(n);return t||p.test(n)?d(n.slice(2),t?2:8):l.test(n)?u:+n}o=function(n,e,t){var r,i,o,u,c,f,l=0,s=!1,p=!1,d=!0;if("function"!=typeof n)throw new TypeError(a);function v(e){var t=r,o=i;return r=i=void 0,l=e,u=n.apply(o,t)}function y(n){var t=n-f;return void 0===f||t>=e||t<0||p&&n-l>=o}function m(){var n=T();if(y(n))return g(n);c=setTimeout(m,function(n){var t=e-(n-f);return p?b(t,o-(n-l)):t}(n))}function g(n){return c=void 0,d&&r?v(n):(r=i=void 0,u)}function j(){var n=T(),t=y(n);if(r=arguments,i=this,f=n,t){if(void 0===c)return function(n){return l=n,c=setTimeout(m,e),s?v(n):u}(f);if(p)return c=setTimeout(m,e),v(f)}return void 0===c&&(c=setTimeout(m,e)),u}return e=M(e)||0,_(t)&&(s=!!t.leading,o=(p="maxWait"in t)?h(M(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d),j.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=f=i=c=void 0},j.flush=function(){return void 0===c?u:g(T())},j};var j=i("iQIUW");const w=document.querySelector(".country-list"),L=document.querySelector(".country-info");function O(n){const e=n.length;e>10&&(j.Notify.info("Too many matches found. Please enter a more specific name."),L.innerHTML=x(),w.innerHTML=x()),1===e&&(L.innerHTML=function(n){return`\n        <div class="country__name">\n            <img class="country__flag" \n            src="${n[0].flags.png}" \n            alt="Flag" width=50>\n            <h1>${n[0].name.official}</h1>\n        </div>\n        <p>\n            <span class="country__label">Capital: </span>\n            ${n[0].capital}\n        </p>\n        <p>\n            <span class="country__label">Population: </span>\n            ${n[0].population}\n        </p>\n        <p>\n            <span class="country__label">Languages: </span>\n            ${Object.values(n[0].languages)}\n        </p>\n        `}(n),w.innerHTML=x()),e>1&&e<=10&&(w.innerHTML=n.map((n=>`\n        <li class="country-list__item">\n            <img class="country__flag" \n            src="${n.flags.png}" \n            alt="Flag" width=20>\n            <p>${n.name.official}</p>\n        </li>\n        `)).join(""),L.innerHTML=x())}function $(n){j.Notify.failure("Oops, there is no country with that name"),L.innerHTML=x(),w.innerHTML=x()}function x(){return" "}document.querySelector("#search-box").addEventListener("input",n(o)((function(n){const e=n.target.value.trim();if(""===e)return L.innerHTML=x(),void(w.innerHTML=x());(t=e,fetch(`https://restcountries.com/v3.1/name/${t}?fields=flags,name,capital,population,languages`).then((n=>{if(!n.ok)throw Error("Error");return n.json()}))).then(O).catch($);var t}),300));
//# sourceMappingURL=09-country-search.480ffc09.js.map

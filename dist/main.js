(()=>{var e={672:e=>{function n(e){return e===e.toUpperCase()}function r(e,n){let r,t;return n&&"en"!==n?"fr"===n?(r="Bonjour ",t=" et "):"nl"===n&&(r="Goeidag ",t=" en "):(r="Hello, ",t=" and "),r+e.slice(0,e.length-1).join(", ")+t+e[e.length-1]+"."}e.exports=function(e){if(Array.isArray(e)){let t,l,o=[];if("fr"!==e[e.length-1]&&"nl"!==e[e.length-1]&&"en"!==e[e.length-1]||(l=e[e.length-1]),e.length>=2)for(let r=0;r<e.length;r++)if(n(e[r])){if(t)return"Impossible because more than 1 uppercase name";t=e[r]}else e[r]!==l&&o.push(e[r]);return t?r(o)+" AND HELLO "+t+"!":r(o,l)}return e?n(e)?"HELLO, "+e+"!":"Hello, "+e+".":"Hello, my friend."}}},n={};!function r(t){var l=n[t];if(void 0!==l)return l.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}(672)})();
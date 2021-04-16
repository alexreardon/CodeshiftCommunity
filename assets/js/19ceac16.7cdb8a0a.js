(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(94)),a={id:"when-not-to-codemod",title:"When not to codemod",slug:"/when-not-to-codemod"},s={unversionedId:"guides/when-not-to-codemod",id:"guides/when-not-to-codemod",isDocsHomePage:!1,title:"When not to codemod",description:"Codemods can't solve every problem, sometimes there is simply too much human intervention required.",source:"@site/docs/guides/when-not-to-codemod.mdx",slug:"/when-not-to-codemod",permalink:"/CodeshiftCommunity/docs/when-not-to-codemod",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/guides/when-not-to-codemod.mdx",version:"current",sidebar:"docs",previous:{title:"Understanding ASTs",permalink:"/CodeshiftCommunity/docs/understanding-asts"},next:{title:"Prompting for human input",permalink:"/CodeshiftCommunity/docs/prompting-for-human-input"}},d=[{value:"When a codemod doesn&#39;t make sense?",id:"when-a-codemod-doesnt-make-sense",children:[]},{value:"What to do when a codemod isn&#39;t possible?",id:"what-to-do-when-a-codemod-isnt-possible",children:[]}],c={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Codemods can't solve every problem, sometimes there is simply too much human intervention required."),Object(i.b)("p",null,"Here is a list of some user cases that are not possible or is extremely hard to codemod:"),Object(i.b)("h2",{id:"when-a-codemod-doesnt-make-sense"},"When a codemod doesn't make sense?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"API / feature removal: cannot shift people to things that do not exist"),Object(i.b)("li",{parentName:"ul"},"When there is too much human intervention required. (consider writing a migration guide instead)"),Object(i.b)("li",{parentName:"ul"},"Changes that need an awareness of runtime usage (e.g. what is in the full result react tree)"),Object(i.b)("li",{parentName:"ul"},"Sometimes we need to know what values are being used. This can be hard if it is coming in across module boundaries, using object spreading and so on."),Object(i.b)("li",{parentName:"ul"},"Usage paradigm shifts where the old paradigm does not have a 1:1 in the new paradigm"),Object(i.b)("li",{parentName:"ul"},"Cases where consumers need to provide more information than they did before (eg when a provided component now needs to provide a ref)")),Object(i.b)("h2",{id:"what-to-do-when-a-codemod-isnt-possible"},"What to do when a codemod isn't possible?"),Object(i.b)("p",null,"In most cases, you should aim to do as much of the work, and prompt for human input where possible."))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(a,".").concat(p)]||m[p]||l[p]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
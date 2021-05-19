(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(98)),a={id:"consuming",title:"Consuming",slug:"/consuming"},c={unversionedId:"consuming",id:"consuming",isDocsHomePage:!1,title:"Consuming",description:"Running codemods is made simple through our CLI tool, @codeshift/cli.",source:"@site/docs/consuming.mdx",slug:"/consuming",permalink:"/docs/consuming",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/consuming.mdx",version:"current",sidebar:"docs",previous:{title:"Authoring",permalink:"/docs/authoring"},next:{title:"Testing",permalink:"/docs/testing"}},l=[{value:"How to run Community codemods",id:"how-to-run-community-codemods",children:[]},{value:"Run codemods in sequence",id:"run-codemods-in-sequence",children:[]},{value:"Running local transforms",id:"running-local-transforms",children:[]},{value:"Parsing TypeScript &amp; Flow",id:"parsing-typescript--flow",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running codemods is made simple through our CLI tool, ",Object(i.b)("a",{parentName:"p",href:"/docs/cli"},"@codeshift/cli"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"@codeshift/cli is responsible for running the provided transform against your entire codebase. Under the hood, it is a wrapper of jscodeshift's cli, which provides additional functionality")),Object(i.b)("p",null,"For usage please refer to the ",Object(i.b)("a",{parentName:"p",href:"/docs/cli"},"@codeshift/cli API reference"),"."),Object(i.b)("h2",{id:"how-to-run-community-codemods"},"How to run Community codemods"),Object(i.b)("p",null,"To apply a codemod from the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"Community folder")," install and use the ",Object(i.b)("inlineCode",{parentName:"p"},"@codemod/cli")," via ",Object(i.b)("inlineCode",{parentName:"p"},"npx"),"."),Object(i.b)("p",null,"For example, say we want to run transforms for ",Object(i.b)("inlineCode",{parentName:"p"},"@mylib/button")," and migrate from version 13 to the latest version 14."),Object(i.b)("p",null,"In this case we could try:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npx @codemod/cli --package @mylib/button@14.0.0 project/path/to/src\n")),Object(i.b)("p",null,"The following sequence of events will follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"npx")," will download and run ",Object(i.b)("inlineCode",{parentName:"li"},"@codemod/cli")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"@codemod/cli")," will then attempt to locate a codemod for the ",Object(i.b)("inlineCode",{parentName:"li"},"@mylib/button")," package matching version ",Object(i.b)("inlineCode",{parentName:"li"},"14.0.0")),Object(i.b)("li",{parentName:"ol"},"Download the matching transform from NPM"),Object(i.b)("li",{parentName:"ol"},"Run the transform against the path ",Object(i.b)("inlineCode",{parentName:"li"},"project/path/to/src"))),Object(i.b)("h2",{id:"run-codemods-in-sequence"},"Run codemods in sequence"),Object(i.b)("p",null,"It's also possible to run a series of codemods, one after the other, to migrate your usage of ",Object(i.b)("inlineCode",{parentName:"p"},"@mylib/button")," across multiple major versions, from say v14, v15 and finally v16. Assuming codemods for those versions exist."),Object(i.b)("p",null,"This is done my providing the ",Object(i.b)("inlineCode",{parentName:"p"},"--sequence")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"-s"),") flag to ",Object(i.b)("inlineCode",{parentName:"p"},"@codemod/cli"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npx @codemod/cli --package @mylib/button@14.0.0 --sequence project/path/to/src\n")),Object(i.b)("p",null,"This time around, we use the provided version (14.0.0) as the start of a semver range between ",Object(i.b)("inlineCode",{parentName:"p"},"14.0.0-@latest"),".\nWe then fetch all codemods that match and run them one after another."),Object(i.b)("h2",{id:"running-local-transforms"},"Running local transforms"),Object(i.b)("p",null,"For codemods not published to the community repo, you can supply your own transform the same way you would with jscodeshift."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npx @codemod/cli --transform path/to/transform.ts project/path/to/src\n")),Object(i.b)("h2",{id:"parsing-typescript--flow"},"Parsing TypeScript & Flow"),Object(i.b)("p",null,"By default ",Object(i.b)("inlineCode",{parentName:"p"},"@codemod/cli")," will use ",Object(i.b)("inlineCode",{parentName:"p"},"babel")," as the default parser and only transform files with a ",Object(i.b)("inlineCode",{parentName:"p"},".js")," extensions."),Object(i.b)("p",null,"If your repo depends on flow or typescript, it's important to remember to specify ",Object(i.b)("inlineCode",{parentName:"p"},"ts"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tsx")," or ",Object(i.b)("inlineCode",{parentName:"p"},"flow")," as the ",Object(i.b)("inlineCode",{parentName:"p"},"--parser")," and or ",Object(i.b)("inlineCode",{parentName:"p"},"jsx, ts, tsx")," as ",Object(i.b)("inlineCode",{parentName:"p"},"--extensions")," to make sure jscodeshift can interpret the files properly."),Object(i.b)("p",null,"Please refer to the ",Object(i.b)("a",{parentName:"p",href:"/docs/cli"},"@codeshift/cli API reference")," for more information."))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,b=m["".concat(a,".").concat(u)]||m[u]||d[u]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
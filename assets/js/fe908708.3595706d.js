(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(94)),a={id:"authoring",title:"Authoring",slug:"/authoring"},s={unversionedId:"authoring",id:"authoring",isDocsHomePage:!1,title:"Authoring",description:"Please read the contribution guide \ud83d\ude4f",source:"@site/docs/authoring.mdx",slug:"/authoring",permalink:"/CodeshiftCommunity/docs/authoring",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/authoring.mdx",version:"current",sidebar:"docs",previous:{title:"Ecosystem",permalink:"/CodeshiftCommunity/docs/ecosystem"},next:{title:"Consuming",permalink:"/CodeshiftCommunity/docs/consuming"}},c=[{value:"Initializing",id:"initializing",children:[]},{value:"File structure",id:"file-structure",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Transformers",id:"transformers",children:[]},{value:"Motions",id:"motions",children:[]},{value:"Testing",id:"testing",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Please read the ",Object(i.b)("a",{parentName:"p",href:"docs/contribution"},"contribution guide")," \ud83d\ude4f"),Object(i.b)("h2",{id:"initializing"},"Initializing"),Object(i.b)("p",null,"Create a folder structure for your new codemod by running:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn codeshift:init -p [package-name] -v [version]")),Object(i.b)("p",null,"for example: ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init:codemods react-cool-library 10.0.0")),Object(i.b)("p",null,"It will create a package within the ",Object(i.b)("inlineCode",{parentName:"p"},"/community")," subdirectory, this is for you to implement your codemod."),Object(i.b)("h2",{id:"file-structure"},"File structure"),Object(i.b)("p",null,"The file structure of your codemod will look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"community/[package-name]/[version]\n  /transform.ts // main entrypoint (should contain a transform)\n  /transform.spec.ts // main tests\n  /motions // different operations that make up the codemod\n    /[motion-name].ts // motion\n    /[motion-name].spec.ts // motion tests\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"community/react-cool-library/18.0.0\n  /transform.ts\n  /transform.spec.ts\n  /motions\n    /remove-ref-usage.ts\n    /remove-ref-usage.spec.ts\n")),Object(i.b)("h2",{id:"versioning"},"Versioning"),Object(i.b)("p",null,"We believe that codemods should aim to target specific package and versions of that package."),Object(i.b)("p",null,"This is done to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make it obvious what the intended purpose of a codemod is"),Object(i.b)("li",{parentName:"ul"},"Make it obvious which package is being upgraded"),Object(i.b)("li",{parentName:"ul"},"Make it easy to play codemods in sequence to allow migration from v4 -> v5 -> v6")),Object(i.b)("h2",{id:"transformers"},"Transformers"),Object(i.b)("p",null,"Transformers are the main entry point to your codemod, they are responsible for accepting a raw file and coordinating the appropriate modifications to it."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { hasImportDeclaration } from '@codeshift/utils';\nimport updateBorderWidth from './motions/update-border-width';\n\nexport default function transformer(\n  fileInfo: FileInfo,\n  { jscodeshift: j }: API,\n  options: Options,\n) {\n  const source = j(fileInfo.source);\n\n  if (hasImportDeclaration(j, source, '@atlaskit/avatar')) {\n    // Checks if the file needs to be modified\n    updateBorderWidth(j, source); // Execute individual motions\n\n    return source.toSource(options.printOptions || { quote: 'single' }); // Writes modified AST to file\n  }\n\n  return fileInfo.source; // Writes original untouched file\n}\n")),Object(i.b)("h2",{id:"motions"},"Motions"),Object(i.b)("p",null,"A motion is what we call specific actions performed within a codemod. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"updateBorderWidth")," or ",Object(i.b)("inlineCode",{parentName:"p"},"removeDeprecatedProps"),".\nThey can be simply thought of a functions that are responsible for a single action within a codemod. This is not required but can help to isolate more complicated parts of your codemod into a single place."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"function removeDeprecatedProps(\n  j: core.JSCodeshift,\n  source: ReturnType<typeof j>,\n) {\n  // TODO:\n}\n")),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"It's very likely that consumers will run into all sorts of edge-cases when running your transform. That's why it's important to start by writing some tests to assert it's behavior. Luckily, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#unit-testing"},"jscodeshift provides some testing utilities"),"."),Object(i.b)("p",null,"When creating a codemod, it's best to always try to write your tests first. Think about the start and end state and how you might be able to achieve that. Also, make sure to consider as many edge-cases as you possibly can."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;\nconst transform = require('../myTransform');\nconst transformOptions = {};\n\ndefineInlineTest(\n  transform,\n  transformOptions,\n  'input',\n  'expected output',\n  'test name (optional)',\n);\n")))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
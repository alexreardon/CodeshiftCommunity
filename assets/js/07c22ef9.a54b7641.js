(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ast-f6b2404fe976ce54f4d4d5e9e29007cb.png"},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/astexplorer-845e0c64d8ddc8aed2cfe5b5900e69e8.png"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(95)),i={id:"understanding-asts",title:"Understanding ASTs",slug:"/understanding-asts"},s={unversionedId:"guides/understanding-asts",id:"guides/understanding-asts",isDocsHomePage:!1,title:"Understanding ASTs",description:"Before writing your first codemod, it\u2019s important to first have a good conceptual understanding of ASTs and how to work with them.",source:"@site/docs/guides/understanding-asts.mdx",slug:"/understanding-asts",permalink:"/docs/understanding-asts",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/guides/understanding-asts.mdx",version:"current",sidebar:"docs",previous:{title:"Your first codemod",permalink:"/docs/your-first-codemod"},next:{title:"When not to codemod",permalink:"/docs/when-not-to-codemod"}},c=[{value:"Abstract Syntax Tree (aka AST)",id:"abstract-syntax-tree-aka-ast",children:[]},{value:"AST Explorer",id:"ast-explorer",children:[]}],l={toc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before writing your first codemod, it\u2019s important to first have a good conceptual understanding of ASTs and how to work with them."),Object(o.b)("h2",{id:"abstract-syntax-tree-aka-ast"},"Abstract Syntax Tree (aka AST)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"An abstract syntax tree (AST), is a tree representation of the abstract syntactic structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the source code.")),Object(o.b)("p",null,"\u2013 ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"Wiki: Abstract syntax tree")),Object(o.b)("p",null,"Abstract Syntax Trees can be thought of as simply the object representation of your code after being parsed.\nYou might already be familiar with the tools and libraries that do this, for example ",Object(o.b)("a",{parentName:"p",href:"https://babeljs.io/"},"babeljs"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/benjamn/recast"},"recast"),", ",Object(o.b)("a",{parentName:"p",href:"https://eslint.org/"},"eslint"),' etc.\nThese tools parse files into ASTs in preperaton for some work, which generally consists of breaking a raw file down into "Nodes" which are then organized and categorized into a hierarchial format that can be reasoned about, manipulated and output back into a file.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Code \u2014 AST \u2014 AST(mutated) \u2014 Code",src:n(139).default})),Object(o.b)("p",null,"\u2013 ",Object(o.b)("a",{parentName:"p",href:"https://itnext.io/automatic-refactoring-with-jscodeshift-codemods-45c219eaf992"},"Image source")),Object(o.b)("p",null,"Not all ASTs are the same, different libraries like babel and recast structure their ASTs differently, but if you're comfortable with one it's not too hard to wrap your head around another."),Object(o.b)("p",null,"For instance, consider this snippet:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"console.log('Hello, World');\n")),Object(o.b)("p",null,"The way you might catagorise the anatomy of this expression in your mind is probably not too dissimilar to how it's actually done in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/benjamn/recast"},"recast")," (which is what is used in this project).\nSo now compare it to the actual resulting AST, generated by recast."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const AST = {\n  type: 'File',\n  program: {\n    type: 'Program',\n    sourceType: 'module',\n    body: [\n      {\n        type: 'ExpressionStatement',\n        expression: {\n          type: 'CallExpression',\n          callee: {\n            type: 'MemberExpression',\n            object: {\n              type: 'Identifier',\n              name: 'console',\n            },\n            computed: false,\n            property: {\n              type: 'Identifier',\n              name: 'log',\n            },\n          },\n          arguments: [\n            {\n              type: 'StringLiteral',\n              extra: {\n                rawValue: 'Hello, World',\n                raw: \"'Hello, World'\",\n              },\n              value: 'Hello, World',\n            },\n          ],\n        },\n      },\n    ],\n  },\n};\n")),Object(o.b)("p",null,"Now your initial reaction might be \"wow that's a lot for a simple console.log\" and that's a totally fair assessment. But look a little closer and you should start to see some order among the chaos.\nEvery ",Object(o.b)("a",{parentName:"p",href:"/docs/glossary#node"},"Node"),' in this tree is given a "type", these types are key to how you navigate and interact with this object.'),Object(o.b)("p",null,"So for example, if you want to know the arguments this method contains, you could first look at the ",Object(o.b)("inlineCode",{parentName:"p"},"arguments")," property on the ",Object(o.b)("inlineCode",{parentName:"p"},"ExpressionStatement"),".\nArguments in functions can be conceptually thought of as arrays, so it's no surprise that we're presented with an array here.\nNow we can see that in our array we have one element, which is of the type ",Object(o.b)("inlineCode",{parentName:"p"},"StringLiteral")," and has it's own meta data attached to it containing the value we're looking for: ",Object(o.b)("inlineCode",{parentName:"p"},"Hello, World")," \u2013 Hooray \ud83c\udf89."),Object(o.b)("p",null,"Great but where do we go from here? Well it totally depends on what you're trying to achieve.\nIf you want to replace the message that's logged, all you'd have to do is replace the ",Object(o.b)("inlineCode",{parentName:"p"},"StringLiteral")," node with one containing the appropriate message.\nIf you want to pass an additional argument to the method, you could simply push a new node into the arguments array and so on."),Object(o.b)("p",null,"The point is, with this abstract data structure we can inspect and manipulate it into any shape we want! A perfect tool for us codemoders!"),Object(o.b)("h2",{id:"ast-explorer"},"AST Explorer"),Object(o.b)("p",null,"ASTs, like in the example above, can get quite large, so you could imagine how big one for a typical javascript source file could get \ud83d\ude31!\nHow can one make sense of it all? Well luckily there are indispensable tools out there to help..."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://astexplorer.net/"},"astexplorer.net")," is one of those tools."),Object(o.b)("p",null,Object(o.b)("img",{alt:"AST Explorer screenshot",src:n(140).default})),Object(o.b)("p",null,"It provides a real-time representation of your code as an AST which is inspectable and lets you write and test transforms against it live in the browser.\nIt also supports other ASTs like babel, typescript etc. so for our usecase we'll need to configure it a bit to support recast + jscodeshift."),Object(o.b)("p",null,"To configure it, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set language to Javascript"),Object(o.b)("li",{parentName:"ol"},"Set the transformer to ",Object(o.b)("inlineCode",{parentName:"li"},"recast")),Object(o.b)("li",{parentName:"ol"},"If you want to enable typescript support, click the little cog icon and set the parser to ",Object(o.b)("inlineCode",{parentName:"li"},"TypeScript")),Object(o.b)("li",{parentName:"ol"},'And finally turn the "transform" toggle on, this should show some new panels to write and test your transforms.')),Object(o.b)("p",null,"And there you go, you're all setup with a sandbox to help you test/learn/experiment with!\nFrom here you should have enough of a grasp of ASTs to try your hand at ",Object(o.b)("a",{parentName:"p",href:"/docs/your-first-codemod"},"writing your first codemod"),"."))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
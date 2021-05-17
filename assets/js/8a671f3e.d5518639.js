(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(95)),p={id:"react",title:"React & JSX",slug:"/react"},i={unversionedId:"recipes/react",id:"recipes/react",isDocsHomePage:!1,title:"React & JSX",description:"Props",source:"@site/docs/recipes/react.mdx",slug:"/react",permalink:"/docs/react",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/recipes/react.mdx",version:"current",sidebar:"docs",previous:{title:"Import manipulation",permalink:"/docs/import-manipulation"}},c=[{value:"Props",id:"props",children:[{value:"Inserting props",id:"inserting-props",children:[]},{value:"Removing props",id:"removing-props",children:[]},{value:"Replacing props",id:"replacing-props",children:[]},{value:"Rest props",id:"rest-props",children:[]}]},{value:"JSX",id:"jsx",children:[{value:"Wrapping components",id:"wrapping-components",children:[]},{value:"Inserting children nodes",id:"inserting-children-nodes",children:[]},{value:"Render props",id:"render-props",children:[]}]}],s={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"inserting-props"},"Inserting props"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source\n    .find(j.JSXElement)\n    // Find all components called button\n    .filter(path => path.value.openingElement.name.name === 'button')\n    .forEach(element => {\n      const newComponent = j.jsxElement(\n        j.jsxOpeningElement(element.node.openingElement.name, [\n          ...element.node.openingElement.attributes,\n          // build and insert our new prop\n          j.jsxAttribute(j.jsxIdentifier('disabled'), j.stringLiteral('true')),\n        ]),\n        element.node.closingElement,\n        element.node.children,\n      );\n\n      // Replace our original component with our modified one\n      j(element).replaceWith(newComponent);\n    });\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => {\n  return <button className=\"button\">Submit</button>;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'import React from \'react\';\n\nconst Button = props => {\n-  return <button className="button">Submit</button>;\n+  return <button className="button" disabled="true">Submit</button>;\n};\n')),Object(a.b)("h3",{id:"removing-props"},"Removing props"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source\n    .find(j.JSXElement)\n    .filter(path => path.value.openingElement.name.name === 'button') // Find all button jsx elements\n    .find(j.JSXAttribute) // Find all attributes (props) on the button\n    .filter(path => path.node.name.name === 'onClick') // Filter to only props called onClick\n    .remove(); // Remove everything that matched\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => {\n  return (\n    <button className=\"button\" onClick={() => console.log('Hello, World!')}>\n      Submit\n    </button>\n  );\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nconst Button = props => {\n-  return <button className=\"button\" onClick={() => console.log('Hello, World!')}>Submit</button>;\n+  return <button className=\"button\">Submit</button>;\n};\n")),Object(a.b)("h3",{id:"replacing-props"},"Replacing props"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => {\n  return <button className=\"button\">Submit</button>;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'import React from \'react\';\n\nconst Button = props => {\n-  return <button className="button">Submit</button>;\n+  return <button className="button button-primary">Submit</button>;\n};\n')),Object(a.b)("h3",{id:"rest-props"},"Rest props"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n  const props = [];\n\n  source\n    // Find all jsx elements with the name \"button\"\n    .find(j.JSXElement)\n    .filter(path => path.node.openingElement.name.name === 'button')\n    // Collect all of their props\n    .forEach(path => props.push(...path.node.openingElement.attributes))\n    // Now get all of the jsx attributes (props)...\n    .find(j.JSXAttribute)\n    // And replace them with a spread attribute called \"props\" for example `{...props}`\n    .forEach(path => path.replace(j.jsxSpreadAttribute(j.identifier('props'))));\n\n  // Create a new constant variable named props.\n  const variableDeclaration = j.variableDeclaration('const', [\n    j.variableDeclarator(\n      j.identifier('props'),\n      // the variable will be assigned an object containing all of the props from button\n      j.objectExpression(\n        props.map(prop =>\n          j.objectProperty(\n            j.identifier(prop.name.name),\n            j.stringLiteral(prop.value.value),\n          ),\n        ),\n      ),\n    ),\n  ]);\n\n  // Finally, we find the arrow function expression\n  source\n    .find(j.ArrowFunctionExpression)\n    // We then retrieve its body, which is the \"block scope\" of the component\n    .get('body')\n    // Since elements in a block are an array, we need to insert our new variable using unshift because we want it to be first\n    .value.body.unshift(variableDeclaration);\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = () => {\n  return <button className=\"button\">Submit</button>;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nconst Button = () => {\n+  const props = { className: 'button' };\n-  return <button className=\"button\">Submit</button>;\n+  return <button {...props}>Submit</button>;\n};\n")),Object(a.b)("h2",{id:"jsx"},"JSX"),Object(a.b)("h3",{id:"wrapping-components"},"Wrapping components"),Object(a.b)("p",null,"Wrapping react components with react components is a fairly common opperation."),Object(a.b)("p",null,"Simply follow this fairly simple set of steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Find the component you want to wrap"),Object(a.b)("li",{parentName:"ol"},"Create a new component and pass the component to be wrapped in as a child node"),Object(a.b)("li",{parentName:"ol"},"Replace the original component with a wrapped version of itself")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Find all components named \"Avatar\"\n  source.findJSXElements('Avatar').forEach(element => {\n    // Create a new JSXElement called \"Tooltip\" and use the original Avatar component as children\n    const wrappedAvatar = j.jsxElement(\n      j.jsxOpeningElement(j.jsxIdentifier('Tooltip'), [\n        // Create a prop on the tooltip so it works as expected\n        j.jsxAttribute(\n          j.jsxIdentifier('content'),\n          j.stringLiteral('Hello, there!'),\n        ),\n      ]),\n      j.jsxClosingElement(j.jsxIdentifier('Tooltip')),\n      [element.value], // Pass in the original component as children\n    );\n\n    j(element).replaceWith(wrappedAvatar);\n  });\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { Avatar, Tooltip } from 'component-lib';\n\nconst App = () => {\n  return <Avatar name=\"foo\" />;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'import {Avatar, Tooltip } from \'component-lib\';\n\nconst App = () => {\n  return (\n+    <Tooltip content="foo">\n      <Avatar name="foo" />\n+    </Tooltip>\n  );\n}\n')),Object(a.b)("h3",{id:"inserting-children-nodes"},"Inserting children nodes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source\n    .find(j.JSXElement) // Find all jsx elements\n    .filter(path => path.node.openingElement.name.name === 'ul') // filter to an array of only ul elements\n    .forEach(path =>\n      // Replace each ul element with a modified version of itself\n      path.replace(\n        j.jsxElement(path.node.openingElement, path.node.closingElement, [\n          ...path.node.children, // Copy existing children\n          // Create a new li element containing our new entry\n          j.jsxElement(\n            j.jsxOpeningElement(j.jsxIdentifier('li')),\n            j.jsxClosingElement(j.jsxIdentifier('li')),\n            [j.stringLiteral('Venusaur')],\n          ),\n          j.jsxText('\\n'), // Add this to tidy up the formatting\n        ]),\n      ),\n    );\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = () => {\n  return (\n    <ul>\n      <li>Bulbasaur</li>\n      <li>Ivysaur</li>\n    </ul>\n  );\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nconst Button = () => {\n  return (\n    <ul>\n      <li>Bulbasaur</li>\n      <li>Ivysaur</li>\n+     <li>Venusaur</li>\n    </ul>\n  );\n};\n")),Object(a.b)("h3",{id:"render-props"},"Render props"),Object(a.b)("p",null,"Moving between different types of React composition strategies, like for example, from component props to ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html#using-props-other-than-render"},"render props")," is could be something you want to do between major versions.\nThis might seem difficult on the surface, but think about it like every other codemod. First we need to find the component, replace it with a modified copy of itself and finally insert a function as children."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import { getJSXAttributesByName } from '@codeshift/utils';\n\nexport default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source.findJSXElements('Avatar').forEach(element => {\n    // Find props all JSXAttributes with a prop called \"component\"\n    // (Using the getJSXAttributeByName util here for simplicity)\n    const componentProp = getJSXAttributesByName(j, element, 'component').get();\n    // Grabs the name of the component passed into the \"component\" prop\n    const componentName = j(componentProp)\n      .find(j.JSXExpressionContainer)\n      .find(j.Expression)\n      .get().value.name;\n\n    // Remove it since it's no longer required on the wrapping component\n    j(componentProp).remove();\n\n    // Create a new child component based on the component prop and spread props onto it\n    const customComponent = j.jsxElement(\n      j.jsxOpeningElement(\n        j.jsxIdentifier(componentName),\n        [j.jsxSpreadAttribute(j.identifier('props'))],\n        true,\n      ),\n    );\n\n    /**\n     * Here's where it gets interesting.\n     * We create a render prop function and pass in `customComponent` as the return value\n     */\n    const childrenExpression = j.jsxExpressionContainer(\n      j.arrowFunctionExpression([j.identifier('props')], customComponent),\n    );\n\n    /**\n     * Then finally, we replace our original component with the following.\n     * Taking properties from the original component and combining them with our new render prop function\n     */\n    j(element).replaceWith(\n      j.jsxElement(\n        j.jsxOpeningElement(\n          element.value.openingElement.name,\n          element.value.openingElement.attributes,\n          false,\n        ),\n        j.jsxClosingElement(element.value.openingElement.name),\n        [childrenExpression],\n      ),\n    );\n  });\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import Avatar from '@component-lib/avatar';\n\nconst App = () => {\n  return <Avatar name=\"Dan\" component={CustomAvatar} />;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'\nimport Avatar from \'@component-lib/avatar\';\n\nconst App = () => {\n  return (\n-    <Avatar name="Dan" component={CustomAvatar} />\n+    <Avatar name="Dan">{props => <CustomAvatar {...props} />}</Avatar>\n+  );\n}\n')))}l.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,j=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return t?o.a.createElement(j,i(i({ref:n},s),{},{components:t})):o.a.createElement(j,i({ref:n},s))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
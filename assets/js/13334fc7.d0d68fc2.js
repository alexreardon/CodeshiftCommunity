(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(95)),i={id:"import-manipulation",title:"Import manipulation",slug:"/import-manipulation"},c={unversionedId:"recipes/import-manipulation",id:"recipes/import-manipulation",isDocsHomePage:!1,title:"Import manipulation",description:"Manipulating imports will likely be one of the first and most common operations you do when writing codemods. So here are a few helpful examples to get you started.",source:"@site/docs/recipes/import-manipulation.mdx",slug:"/import-manipulation",permalink:"/docs/import-manipulation",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/recipes/import-manipulation.mdx",version:"current",sidebar:"docs",previous:{title:"Prompting for human input",permalink:"/docs/prompting-for-human-input"},next:{title:"React & JSX",permalink:"/docs/react"}},p=[{value:"Import declarations",id:"import-declarations",children:[{value:"Finding an import declaration",id:"finding-an-import-declaration",children:[]},{value:"Inserting an import declaration",id:"inserting-an-import-declaration",children:[]},{value:"Inserting an import declaration before/after a node",id:"inserting-an-import-declaration-beforeafter-a-node",children:[]},{value:"Removing an import declaration",id:"removing-an-import-declaration",children:[]},{value:"Replace/Rename an import declaration",id:"replacerename-an-import-declaration",children:[]}]},{value:"Import specifiers",id:"import-specifiers",children:[{value:"Finding an import specifiers",id:"finding-an-import-specifiers",children:[]},{value:"Inserting an import specifier",id:"inserting-an-import-specifier",children:[]},{value:"Inserting an aliased (as) import specifier",id:"inserting-an-aliased-as-import-specifier",children:[]},{value:"Removing an import specifier",id:"removing-an-import-specifier",children:[]},{value:"Replace/Rename an import specifier",id:"replacerename-an-import-specifier",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manipulating imports will likely be one of the first and most common operations you do when writing codemods. So here are a few helpful examples to get you started."),Object(a.b)("h2",{id:"import-declarations"},"Import declarations"),Object(a.b)("p",null,"An ",Object(a.b)("inlineCode",{parentName:"p"},"ImportDeclaration")," refers to an entire import statement for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import React, { useEffect } from 'react';\n")),Object(a.b)("p",null,"The anatomy of an ",Object(a.b)("inlineCode",{parentName:"p"},"ImportDeclaration")," includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An array of ",Object(a.b)("inlineCode",{parentName:"li"},"specifiers"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ImportDefaultSpecifier"),": ",Object(a.b)("inlineCode",{parentName:"li"},"React")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ImportSpecifier"),": ",Object(a.b)("inlineCode",{parentName:"li"},"useEffect")))),Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("inlineCode",{parentName:"li"},"source")," which can either be a module name or path: ",Object(a.b)("inlineCode",{parentName:"li"},"react"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note: ",Object(a.b)("inlineCode",{parentName:"strong"},"@codeshift/utils")," provides utilities for import manipulation, please see the docs")),Object(a.b)("h3",{id:"finding-an-import-declaration"},"Finding an import declaration"),Object(a.b)("p",null,"Import declarations can be found with the ",Object(a.b)("inlineCode",{parentName:"p"},"jscodeshift.ImportDeclaration")," type."),Object(a.b)("p",null,"In this example we're seaching this file for the ",Object(a.b)("inlineCode",{parentName:"p"},"React")," import."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  const reactImportDeclaration = source\n    .find(j.ImportDeclaration) // Find all nodes that match a type of `ImportDeclaration`\n    .filter(path => path.node.source.value === 'react'); // Filter imports by source equal to the target ie \"react\"\n\n  // Do something here\n  console.log(reactImportDeclaration);\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output (unchanged):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"inserting-an-import-declaration"},"Inserting an import declaration"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Build a new import\n  const newImport = j.importDeclaration(\n    [j.importDefaultSpecifier(j.identifier('Foo'))],\n    j.stringLiteral('bar'),\n  );\n\n  // Insert it at the top of the document\n  source.get().node.program.body.unshift(newImport);\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"+import Foo from 'bar';\nimport React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"inserting-an-import-declaration-beforeafter-a-node"},"Inserting an import declaration before/after a node"),Object(a.b)("p",null,"Sometimes you might want to insert an import before another import.\nFor that you can use ",Object(a.b)("inlineCode",{parentName:"p"},"insertBefore"),", ",Object(a.b)("inlineCode",{parentName:"p"},"insertAfter")," methods."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Build a new import\n  const newImport = j.importDeclaration(\n    [j.importDefaultSpecifier(j.identifier('Foo'))],\n    j.stringLiteral('bar'),\n  );\n\n  const reactImportDeclaration = source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react')\n    .insertAfter(newImport); // Insert the new import after all react imports\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n+import Foo from 'bar';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"removing-an-import-declaration"},"Removing an import declaration"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source\n    .find(j.ImportDeclaration) // Find all nodes that match a type of `ImportDeclaration`\n    .filter(path => path.node.source.value === 'react') // Filter imports by source equal to the target ie \"react\"\n    .remove(); // Removes all found import declarations\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"-import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"replacerename-an-import-declaration"},"Replace/Rename an import declaration"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  const reactImports = source\n    .find(j.ImportDeclaration) // Find all nodes that match a type of `ImportDeclaration`\n    .filter(path => path.node.source.value === 'react'); // Filter imports by source equal to the target ie \"react\"\n\n  reactImports.forEach((\n    reactImport, // Iterate over react imports\n  ) =>\n    // Replace the existing node with a new one\n    j(reactImport).replaceWith(\n      // Build a new import declaration node based on the existing one\n      j.importDeclaration(\n        reactImport.node.specifiers, // copy over the existing import specificers\n        j.stringLiteral('hot-new-library'), // Replace the source with our new source\n      ),\n    ),\n  );\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"-import React from 'react';\n+import React from 'hot-new-library';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h2",{id:"import-specifiers"},"Import specifiers"),Object(a.b)("p",null,"Import specifiers are the actual variables and functions being imported"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import React, { useEffect } from 'react';\n")),Object(a.b)("p",null,"Generally, within an import declaration import specifiers are defined as an array of either ",Object(a.b)("inlineCode",{parentName:"p"},"ImportSpecifier")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ImportDefaultSpecifier"),"."),Object(a.b)("p",null,"So in the above case import specifiers are ",Object(a.b)("inlineCode",{parentName:"p"},"React")," & ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),"."),Object(a.b)("h3",{id:"finding-an-import-specifiers"},"Finding an import specifiers"),Object(a.b)("p",null,"Finding an import is the same as finding any other node."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Finding all react import declarations\n  const reactImports = source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react');\n\n  // Here we narrow our search to only relevant import nodes\n  const useEffectSpecifier = reactImports\n    .find(j.ImportSpecifier)\n    .filter(path => path.node.imported.name === 'useEffect'); // Filter by name \"useEffect\"\n\n  // Do something here\n  console.log(useEffectSpecifier);\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output (unchanged):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"inserting-an-import-specifier"},"Inserting an import specifier"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Finding all react import declarations\n  const reactImports = source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react');\n\n  // Build our new import specifier\n  const importSpecifier = j.importSpecifier(j.identifier('useContext'));\n\n  // Iterate over react imports\n  reactImports.forEach(reactImport =>\n    // Replace the existing node with a new one\n    j(reactImport).replaceWith(\n      // Build a new import declaration node based on the existing one\n      j.importDeclaration(\n        [...reactImport.node.specifiers, importSpecifier], // Insert our new import specificer\n        reactImport.node.source,\n      ),\n    ),\n  );\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"+import React, { useEffect, useContext } from 'react';\n-import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"inserting-an-aliased-as-import-specifier"},"Inserting an aliased (as) import specifier"),Object(a.b)("p",null,"Sometimes you might want to import something under an alias."),Object(a.b)("p",null,"For example: ",Object(a.b)("inlineCode",{parentName:"p"},"import { useEffect as useFoo } from 'react'"),"."),Object(a.b)("p",null,"In this case, simply passing an identifier into the 'local' argument of ",Object(a.b)("inlineCode",{parentName:"p"},"j.importSpecifier(imported, local)")," will do the trick."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const importSpecifier = j.importSpecifier(\n  j.identifier('useContext'),\n  j.identifier('useFoo'),\n);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  const reactImports = source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react');\n\n  // Build our new import specifier\n  const importSpecifier = j.importSpecifier(\n    j.identifier('useContext'),\n    j.identifier('useFoo'),\n  );\n\n  reactImports.forEach(reactImport =>\n    j(reactImport).replaceWith(\n      j.importDeclaration(\n        [...reactImport.node.specifiers, importSpecifier], // Insert our new import specificer\n        reactImport.node.source,\n      ),\n    ),\n  );\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"+import React, { useEffect, useContext as useFoo } from 'react';\n-import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"removing-an-import-specifier"},"Removing an import specifier"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react')\n    .find(j.ImportSpecifier)\n    .filter(path => path.node.imported.name === 'useEffect')\n    .remove();\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"+import React from 'react';\n-import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("h3",{id:"replacerename-an-import-specifier"},"Replace/Rename an import specifier"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Transform:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Build an import specifier\n  const newImport = j.importSpecifier(j.identifier('useFoo'));\n\n  source\n    .find(j.ImportDeclaration)\n    .filter(path => path.node.source.value === 'react')\n    .find(j.ImportSpecifier)\n    .filter(path => path.node.imported.name === 'useEffect')\n    .replaceWith(newImport); // Insert our new import specifier\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"+import React, { useFoo } from 'react';\n-import React, { useEffect } from 'react';\n\nconst Button = props => <button {...props} />;\n")))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,f=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[106],{"+1NP":function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e,a){return new Array(n).fill(1).reduce((function(n,i,c){return n.concat([{bin:c,bins:(0,r.default)(t,e,a)}])}),[])};var a,r=(a=e("mNV6"))&&a.__esModule?a:{default:a}},"201w":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("J4UP");function r(n){return Object(a.a)(n)}},"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var a=e("uKU/"),r=e("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(n){return i(Object(a.a)(),n)}},GKGl:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/heatmaps",function(){return e("yRVi")}])},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("lEbO");function r(n,t){if(n){if("string"===typeof n)return Object(a.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(a.a)(n,t):void 0}}},IkWl:function(n){n.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},J4UP:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const a=1/4294967296;function r(n=Math.random()){let t=0|(0<=n&&n<1?n/a:Math.abs(n));return()=>(t=1664525*t+1013904223|0,a*(t>>>0))}},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var a=e("aWzz"),r=e.n(a),i=e("ERkP"),c=e.n(i),o=e("O94r"),u=e.n(o);function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function s(n){var t=n.top,e=void 0===t?0:t,a=n.left,r=void 0===a?0:a,i=n.transform,o=n.className,s=n.children,m=n.innerRef,p=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["top","left","transform","className","children","innerRef"]);return c.a.createElement("g",l({ref:m,className:u()("visx-group",o),transform:i||"translate("+r+", "+e+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Zbhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e("PB0s"),r=e("XAd9"),i=e("Cyas"),c=e("VBI3");function o(n,t,e,o){var u,l=Object(a.c)(n,t,e);switch((o=Object(r.a)(null==o?",f":o)).type){case"s":var s=Math.max(Math.abs(n),Math.abs(t));return null!=o.precision||isNaN(u=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(l,s))||(o.precision=u),Object(c.b)(o,s);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(u=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(l,Math.max(Math.abs(n),Math.abs(t))))||(o.precision=u-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(u=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(l))||(o.precision=u-2*("%"===o.type))}return Object(c.a)(o)}},Zydf:function(n,t,e){"use strict";e.d(t,"a",(function(){return x}));var a=e("fGyu"),r=e("ERkP"),i=e.n(r),c=e("JmwF"),o=e("+1NP"),u=e.n(o),l=e("67po"),s=e("aWzz"),m=e.n(s),p=e("O94r"),f=e.n(p);function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function b(n){var t=n.className,e=n.top,a=n.left,r=n.data,o=void 0===r?[]:r,u=n.gap,l=void 0===u?1:u,s=n.radius,m=void 0===s?6:s,p=n.xScale,b=n.yScale,h=n.colorScale,g=void 0===h?function(){}:h,y=n.opacityScale,v=void 0===y?function(){return 1}:y,x=n.bins,S=void 0===x?function(n){return n&&n.bins}:x,O=n.count,w=void 0===O?function(n){return n&&n.count}:O,M=n.children,j=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),N=m-l,k=o.map((function(n,t){var e=p(t);return S(n).map((function(a,r){var i=w(a);return{bin:a,row:r,column:t,datum:n,radius:m,gap:l,count:i,cx:m+e,cy:b(r)+l+m,r:N,opacity:v(i),color:g(i)}}))}));return M?i.a.createElement(i.a.Fragment,null,M(k)):i.a.createElement(c.a,{className:"visx-heatmap-circles",top:e,left:a},k.map((function(n){return n.map((function(n){return i.a.createElement("circle",d({key:"heatmap-tile-circle-"+n.row+"-"+n.column,className:f()("visx-heatmap-circle",t),r:n.r,cx:n.cx,cy:n.cy,fill:n.color,fillOpacity:n.opacity},j))}))})))}function h(){return(h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function g(n){var t=n.className,e=n.top,a=n.left,r=n.data,o=void 0===r?[]:r,u=n.binWidth,l=void 0===u?6:u,s=n.binHeight,m=void 0===s?6:s,p=n.x0,d=void 0===p?0:p,b=n.gap,g=void 0===b?1:b,y=n.xScale,v=n.yScale,x=n.colorScale,S=void 0===x?function(){}:x,O=n.opacityScale,w=void 0===O?function(){return 1}:O,M=n.bins,j=void 0===M?function(n){return n&&n.bins}:M,N=n.count,k=void 0===N?function(n){return n&&n.count}:N,E=n.children,_=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),R=l-g,H=m-g,C=o.map((function(n,t){var e=y(t);return j(n).map((function(a,r){var i=k(a);return{bin:a,row:r,column:t,datum:n,width:R,height:H,gap:g,count:i,x:e+d,y:v(r)+g,color:S(i),opacity:w(i)}}))}));return E?i.a.createElement(i.a.Fragment,null,E(C)):i.a.createElement(c.a,{className:"visx-heatmap-rects",top:e,left:a},C.map((function(n){return n.map((function(n){return i.a.createElement("rect",h({key:"heatmap-tile-rect-"+n.row+"-"+n.column,className:f()("visx-heatmap-rect",t),width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity},_))}))})))}b.propTypes={data:m.a.array,left:m.a.number,top:m.a.number,gap:m.a.number,radius:m.a.number,xScale:m.a.func.isRequired,yScale:m.a.func.isRequired,bins:m.a.func,count:m.a.func,className:m.a.string,children:m.a.func},g.propTypes={data:m.a.array,left:m.a.number,top:m.a.number,binWidth:m.a.number,binHeight:m.a.number,x0:m.a.number,gap:m.a.number,xScale:m.a.func.isRequired,yScale:m.a.func.isRequired,bins:m.a.func,count:m.a.func,className:m.a.string,children:m.a.func};var y=e("201w"),v=i.a.createElement,x="#28272c",S=Object(y.a)(.41),O=u()(16,16,(function(n){return 150*n}),(function(n,t){return 25*(t-n)*S()}));function w(n,t){return Math.max.apply(Math,Object(a.a)(n.map(t)))}var M=function(n){return n.bins},j=function(n){return n.count},N=w(O,(function(n){return w(M(n),j)})),k=w(O,(function(n){return M(n).length})),E=Object(l.a)({domain:[0,O.length]}),_=Object(l.a)({domain:[0,k]}),R=Object(l.a)({range:["#77312f","#f33d15"],domain:[0,N]}),H=Object(l.a)({range:["#122549","#b4fbde"],domain:[0,N]}),C=Object(l.a)({range:[.1,1],domain:[0,N]}),A={top:10,left:20,right:20,bottom:110},B=function(n){var t,e,r=n.width,i=n.height,o=n.events,u=void 0!==o&&o,l=n.margin,s=void 0===l?A:l,m=n.separation,p=void 0===m?20:m,f=(r>s.left+s.right?r-s.left-s.right-p:r)/2,d=i-s.bottom-s.top,h=f/O.length,y=(t=[h,d/k],e=function(n){return n},Math.min.apply(Math,Object(a.a)(t.map(e)))/2);return E.range([0,f]),_.range([d,0]),r<10?null:v("svg",{width:r,height:i},v("rect",{x:0,y:0,width:r,height:i,rx:14,fill:x}),v(c.a,{top:s.top,left:s.left},v(b,{data:O,xScale:function(n){var t;return null!==(t=E(n))&&void 0!==t?t:0},yScale:function(n){var t;return null!==(t=_(n))&&void 0!==t?t:0},colorScale:R,opacityScale:C,radius:y,gap:2},(function(n){return n.map((function(n){return n.map((function(n){return v("circle",{key:"heatmap-circle-".concat(n.row,"-").concat(n.column),className:"visx-heatmap-circle",cx:n.cx,cy:n.cy,r:n.r,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(u){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}})}))}))}))),v(c.a,{top:s.top,left:f+s.left+p},v(g,{data:O,xScale:function(n){var t;return null!==(t=E(n))&&void 0!==t?t:0},yScale:function(n){var t;return null!==(t=_(n))&&void 0!==t?t:0},colorScale:H,opacityScale:C,binWidth:h,binHeight:h,gap:2},(function(n){return n.map((function(n){return n.map((function(n){return v("rect",{key:"heatmap-rect-".concat(n.row,"-").concat(n.column),className:"visx-heatmap-rect",width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(u){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}})}))}))}))))};t.b=B;try{B.displayName="Example",B.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:{value:20},description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:B.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(P){}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("lEbO");var r=e("HO86");function i(n){return function(n){if(Array.isArray(n))return Object(a.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(r.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(n,t,e){"use strict";function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}e.d(t,"a",(function(){return a}))},mNV6:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e){void 0===t&&(t=r);void 0===e&&(e=a);return new Array(n).fill(1).reduce((function(a,r,i){return a.concat([{bin:t(i,n),count:e(i,n)}])}),[])};var a=function(n,t){return Math.random()*(25*(t-n))},r=function(n,t){return 150*n}},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return u}));var a=e("PB0s"),r=e("2+fR"),i=e("W1cA"),c=e("Zbhd");function o(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(a.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var a=t();return Object(c.a)(a[0],a[a.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var r,i,c=t(),o=0,u=c.length-1,l=c[o],s=c[u],m=10;for(s<l&&(i=l,l=s,s=i,i=o,o=u,u=i);m-- >0;){if((i=Object(a.b)(l,s,e))===r)return c[o]=l,c[u]=s,t(c);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}r=i}return n},n}function u(){var n=Object(r.b)();return n.copy=function(){return Object(r.a)(n,u())},i.b.apply(n,arguments),o(n)}},yRVi:function(n,t,e){"use strict";e.r(t);var a=e("ERkP"),r=e.n(a),i=e("6wy5"),c=e("Zydf"),o=e("IkWl"),u=r.a.createElement;t.default=function(){return u(i.a,{events:!0,margin:{top:10,left:40,right:30,bottom:80},component:c.b,title:"Heatmaps",codeSandboxDirectoryName:"visx-heatmap",packageJson:o},"import React from 'react';\nimport { Group } from '@visx/group';\nimport genBins, { Bin, Bins } from '@visx/mock-data/lib/generators/genBins';\nimport { scaleLinear } from '@visx/scale';\nimport { HeatmapCircle, HeatmapRect } from '@visx/heatmap';\nimport { getSeededRandom } from '@visx/mock-data';\n\nconst hot1 = '#77312f';\nconst hot2 = '#f33d15';\nconst cool1 = '#122549';\nconst cool2 = '#b4fbde';\nexport const background = '#28272c';\n\nconst seededRandom = getSeededRandom(0.41);\n\nconst binData = genBins(\n  /* length = */ 16,\n  /* height = */ 16,\n  /** binFunc */ idx => 150 * idx,\n  /** countFunc */ (i, number) => 25 * (number - i) * seededRandom(),\n);\n\nfunction max<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.max(...data.map(value));\n}\n\nfunction min<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.min(...data.map(value));\n}\n\n// accessors\nconst bins = (d: Bins) => d.bins;\nconst count = (d: Bin) => d.count;\n\nconst colorMax = max(binData, d => max(bins(d), count));\nconst bucketSizeMax = max(binData, d => bins(d).length);\n\n// scales\nconst xScale = scaleLinear<number>({\n  domain: [0, binData.length],\n});\nconst yScale = scaleLinear<number>({\n  domain: [0, bucketSizeMax],\n});\nconst circleColorScale = scaleLinear<string>({\n  range: [hot1, hot2],\n  domain: [0, colorMax],\n});\nconst rectColorScale = scaleLinear<string>({\n  range: [cool1, cool2],\n  domain: [0, colorMax],\n});\nconst opacityScale = scaleLinear<number>({\n  range: [0.1, 1],\n  domain: [0, colorMax],\n});\n\nexport type HeatmapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  separation?: number;\n  events?: boolean;\n};\n\nconst defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };\n\nconst Example = ({\n  width,\n  height,\n  events = false,\n  margin = defaultMargin,\n  separation = 20,\n}: HeatmapProps) => {\n  // bounds\n  const size =\n    width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;\n  const xMax = size / 2;\n  const yMax = height - margin.bottom - margin.top;\n\n  const binWidth = xMax / binData.length;\n  const binHeight = yMax / bucketSizeMax;\n  const radius = min([binWidth, binHeight], d => d) / 2;\n\n  xScale.range([0, xMax]);\n  yScale.range([yMax, 0]);\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <rect x={0} y={0} width={width} height={height} rx={14} fill={background} />\n      <Group top={margin.top} left={margin.left}>\n        <HeatmapCircle\n          data={binData}\n          xScale={d => xScale(d) ?? 0}\n          yScale={d => yScale(d) ?? 0}\n          colorScale={circleColorScale}\n          opacityScale={opacityScale}\n          radius={radius}\n          gap={2}\n        >\n          {heatmap =>\n            heatmap.map(heatmapBins =>\n              heatmapBins.map(bin => (\n                <circle\n                  key={`heatmap-circle-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-circle\"\n                  cx={bin.cx}\n                  cy={bin.cy}\n                  r={bin.r}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapCircle>\n      </Group>\n      <Group top={margin.top} left={xMax + margin.left + separation}>\n        <HeatmapRect\n          data={binData}\n          xScale={d => xScale(d) ?? 0}\n          yScale={d => yScale(d) ?? 0}\n          colorScale={rectColorScale}\n          opacityScale={opacityScale}\n          binWidth={binWidth}\n          binHeight={binWidth}\n          gap={2}\n        >\n          {heatmap =>\n            heatmap.map(heatmapBins =>\n              heatmapBins.map(bin => (\n                <rect\n                  key={`heatmap-rect-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-rect\"\n                  width={bin.width}\n                  height={bin.height}\n                  x={bin.x}\n                  y={bin.y}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapRect>\n      </Group>\n    </svg>\n  );\n};\n\nexport default Example;\n")}}},[["GKGl",0,2,1,3,4,5,6]]]);
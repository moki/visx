_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"+fu8":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return f}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),l=n("O94r"),c=n.n(l);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var u={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(t){var e=t.className,n=t.top,r=t.left,o=t.offsetLeft,i=void 0===o?10:o,l=t.offsetTop,f=void 0===l?10:l,p=t.style,d=void 0===p?u:p,h=t.children,v=t.unstyled,y=void 0!==v&&v,m=t.applyPositionStyle,g=void 0!==m&&m,b=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"]);return a.a.createElement("div",s({className:c()("visx-tooltip",e),style:s({top:null==n||null==f?n:n+f,left:null==r||null==i?r:r+i},g&&{position:"absolute"},!y&&d)},b),h)}f.propTypes={children:o.a.node,className:o.a.string,left:o.a.number,offsetLeft:o.a.number,offsetTop:o.a.number,top:o.a.number,applyPositionStyle:o.a.bool,unstyled:o.a.bool}},"0RyW":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("ERkP"),o=n.n(r),i=n("7nmT"),a=n.n(i);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={top:0,right:0,bottom:0,left:0,width:0,height:0};function f(t){var e,n;return n=e=function(e){var n,r;function i(t){var n;return s(c(n=e.call(this,t)||this),"node",void 0),n.state={rect:void 0,parentRect:void 0},n.getRects=n.getRects.bind(c(n)),n}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var f=i.prototype;return f.componentDidMount=function(){var t=this;this.node=a.a.findDOMNode(this),this.setState((function(){return t.getRects()}))},f.getRects=function(){if(!this.node)return this.state;var t=this.node,e=t.parentNode;return{rect:t.getBoundingClientRect?t.getBoundingClientRect():u,parentRect:e&&e.getBoundingClientRect?e.getBoundingClientRect():u}},f.render=function(){return o.a.createElement(t,l({getRects:this.getRects},this.state,this.props))},i}(o.a.PureComponent),s(e,"displayName","withBoundingRects("+(t.displayName||"")+")"),n}},"8/jq":function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("0RyW"),a=n("+fu8");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.a=Object(i.a)((function(t){var e=t.children,n=(t.getRects,t.left),r=void 0===n?0:n,i=t.offsetLeft,c=void 0===i?10:i,s=t.offsetTop,u=void 0===s?10:s,f=t.parentRect,p=t.rect,d=t.style,h=void 0===d?a.b:d,v=t.top,y=void 0===v?0:v,m=t.unstyled,g=void 0!==m&&m,b=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled"]),x=r,O=y;if(p&&f){var k=!1,w=!1;if(f.width){var j=x+c+p.width-f.width,T=p.width-x-c;k=j>0&&j>T}else{var E=x+c+p.width-window.innerWidth,_=p.width-x-c;k=E>0&&E>_}if(f.height){var S=O+u+p.height-f.height,R=p.height-O-u;w=S>0&&S>R}else w=O+u+p.height>window.innerHeight;x=k?x-p.width-c:x+c,O=w?O-p.height-u:O+u}return x=Math.round(x),O=Math.round(O),o.a.createElement(a.a,l({style:l({left:0,top:0,transform:"translate("+x+"px, "+O+"px)"},!g&&h)},b),e)}))},"9Jhr":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),l=n("1Wmu"),c=n("dGDr");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){var e=t.x,n=t.x0,r=t.x1,i=t.y,u=t.y1,f=t.y0,p=t.yScale,d=t.data,h=void 0===d?[]:d,v=t.defined,y=void 0===v?function(){return!0}:v,m=t.className,g=t.curve,b=t.innerRef,x=t.children,O=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),k=Object(c.b)({x:e,x0:n,x1:r,defined:y,curve:g});return null==f?k.y0(p.range()[0]):Object(l.a)(k.y0,f),i&&!u&&Object(l.a)(k.y1,i),u&&!i&&Object(l.a)(k.y1,u),x?o.a.createElement(o.a.Fragment,null,x({path:k})):o.a.createElement("path",s({ref:b,className:a()("visx-area-closed",m),d:k(h)||""},O))}},"Cf/J":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){var e=t.children,n=t.id,r=t.from,o=t.to,i=t.x1,c=t.y1,s=t.x2,u=t.y2,f=t.fromOffset,p=void 0===f?"0%":f,d=t.fromOpacity,h=void 0===d?1:d,v=t.toOffset,y=void 0===v?"100%":v,m=t.toOpacity,g=void 0===m?1:m,b=t.rotate,x=t.transform,O=t.vertical,k=void 0===O||O,w=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),j=i,T=s,E=c,_=u;return!k||j||T||E||_||(j="0",T="0",E="0",_="1"),a.a.createElement("defs",null,a.a.createElement("linearGradient",l({id:n,x1:j,y1:E,x2:T,y2:_,gradientTransform:b?"rotate("+b+")":x},w),!!e&&e,!e&&a.a.createElement("stop",{offset:p,stopColor:r,stopOpacity:h}),!e&&a.a.createElement("stop",{offset:y,stopColor:o,stopOpacity:g})))}c.propTypes={id:o.a.string.isRequired,from:o.a.string,to:o.a.string,x1:o.a.oneOfType([o.a.string,o.a.number]),x2:o.a.oneOfType([o.a.string,o.a.number]),y1:o.a.oneOfType([o.a.string,o.a.number]),y2:o.a.oneOfType([o.a.string,o.a.number]),fromOffset:o.a.oneOfType([o.a.string,o.a.number]),fromOpacity:o.a.oneOfType([o.a.string,o.a.number]),toOffset:o.a.oneOfType([o.a.string,o.a.number]),toOpacity:o.a.oneOfType([o.a.string,o.a.number]),rotate:o.a.oneOfType([o.a.string,o.a.number]),transform:o.a.string,children:o.a.node,vertical:o.a.bool}},DTjC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/areas",function(){return n("SYW9")}])},EbDF:function(t,e,n){"use strict";function r(t){return t<0?-1:1}function o(t,e,n){var o=t._x1-t._x0,i=e-t._x1,a=(t._y1-t._y0)/(o||i<0&&-0),l=(n-t._y1)/(i||o<0&&-0),c=(a*i+l*o)/(o+i);return(r(a)+r(l))*Math.min(Math.abs(a),Math.abs(l),.5*Math.abs(c))||0}function i(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function a(t,e,n){var r=t._x0,o=t._y0,i=t._x1,a=t._y1,l=(i-r)/3;t._context.bezierCurveTo(r+l,o+l*e,i-l,a-l*n,i,a)}function l(t){this._context=t}function c(t){this._context=new s(t)}function s(t){this._context=t}function u(t){return new l(t)}function f(t){return new c(t)}n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f})),l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:a(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,a(this,i(this,n=o(this,t,e)),n);break;default:a(this,this._t0,n=o(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(c.prototype=Object.create(l.prototype)).point=function(t,e){l.prototype.point.call(this,e,t)},s.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,o,i){this._context.bezierCurveTo(e,t,r,n,i,o)}}},HlJr:function(t,e,n){"use strict";function r(t){if(("function"===typeof t||"object"===typeof t&&t)&&"valueOf"in t){var e=t.valueOf();if("number"===typeof e)return e}return t}n.d(e,"a",(function(){return r}))},Ifh9:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),l=n("O94r"),c=n.n(l),s=n("hsl+"),u=n.n(s),f=n("JmwF"),p=n("rkTo"),d=n("nNND"),h=n("HlJr"),v=n("tZ4l");function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,i=t.scale,l=t.width,s=t.stroke,m=void 0===s?"#eaf0f6":s,g=t.strokeWidth,b=void 0===g?1:g,x=t.strokeDasharray,O=t.className,k=t.children,w=t.numTicks,j=void 0===w?10:w,T=t.lineStyle,E=t.offset,_=t.tickValues,S=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),R=null!=_?_:Object(d.a)(i,j),D=(null!=E?E:0)+Object(v.a)(i)/2,P=R.map((function(t){var e,n=(null!=(e=Object(h.a)(i(t)))?e:0)+D;return{from:new p.a({x:0,y:n}),to:new p.a({x:l,y:n})}}));return a.a.createElement(f.a,{className:c()("visx-rows",O),top:n,left:o},k?k({lines:P}):P.map((function(t,e){var n=t.from,r=t.to;return a.a.createElement(u.a,y({key:"row-line-"+e,from:n,to:r,stroke:m,strokeWidth:b,strokeDasharray:x,style:T},S))})))}m.propTypes={tickValues:o.a.array,width:o.a.number.isRequired}},JmwF:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),l=n("O94r"),c=n.n(l);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,i=t.transform,l=t.className,u=t.children,f=t.innerRef,p=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",s({ref:f,className:c()("visx-group",l),transform:i||"translate("+o+", "+n+")"},p),u)}u.propTypes={top:o.a.number,left:o.a.number,transform:o.a.string,className:o.a.string,children:o.a.node,innerRef:o.a.oneOfType([o.a.string,o.a.func,o.a.object])}},QnoR:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("ERkP");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){var e=Object(r.useState)(o({tooltipOpen:!1},t)),n=e[0],i=e[1],a=Object(r.useCallback)((function(t){return i("function"===typeof t?function(e){e.tooltipOpen;var n=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(e,["tooltipOpen"]);return o({},t(n),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData})}),[i]),l=Object(r.useCallback)((function(){return i({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[i]);return{tooltipOpen:n.tooltipOpen,tooltipLeft:n.tooltipLeft,tooltipTop:n.tooltipTop,tooltipData:n.tooltipData,updateTooltip:i,showTooltip:a,hideTooltip:l}}},SYW9:function(t,e,n){"use strict";n.r(e);var r=n("ERkP"),o=n.n(r),i=n("6wy5"),a=n("qyW2"),l=n("bf+l"),c=o.a.createElement;e.default=function(){return c(i.a,{component:a.c,title:"Areas",codeSandboxDirectoryName:"visx-area",packageJson:l},"import React, { useMemo, useCallback } from 'react';\nimport { AreaClosed, Line, Bar } from '@visx/shape';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { curveMonotoneX } from '@visx/curve';\nimport { GridRows, GridColumns } from '@visx/grid';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';\nimport { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';\nimport { localPoint } from '@visx/event';\nimport { LinearGradient } from '@visx/gradient';\nimport { max, extent, bisector } from 'd3-array';\nimport { timeFormat } from 'd3-time-format';\n\ntype TooltipData = AppleStock;\n\nconst stock = appleStock.slice(800);\nexport const background = '#3b6978';\nexport const background2 = '#204051';\nexport const accentColor = '#edffea';\nexport const accentColorDark = '#75daad';\nconst tooltipStyles = {\n  ...defaultStyles,\n  background,\n  border: '1px solid white',\n  color: 'white',\n};\n\n// util\nconst formatDate = timeFormat(\"%b %d, '%y\");\n\n// accessors\nconst getDate = (d: AppleStock) => new Date(d.date);\nconst getStockValue = (d: AppleStock) => d.close;\nconst bisectDate = bisector<AppleStock, Date>(d => new Date(d.date)).left;\n\nexport type AreaProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default withTooltip<AreaProps, TooltipData>(\n  ({\n    width,\n    height,\n    margin = { top: 0, right: 0, bottom: 0, left: 0 },\n    showTooltip,\n    hideTooltip,\n    tooltipData,\n    tooltipTop = 0,\n    tooltipLeft = 0,\n  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {\n    if (width < 10) return null;\n\n    // bounds\n    const innerWidth = width - margin.left - margin.right;\n    const innerHeight = height - margin.top - margin.bottom;\n\n    // scales\n    const dateScale = useMemo(\n      () =>\n        scaleTime({\n          range: [margin.left, innerWidth + margin.left],\n          domain: extent(stock, getDate) as [Date, Date],\n        }),\n      [innerWidth, margin.left],\n    );\n    const stockValueScale = useMemo(\n      () =>\n        scaleLinear({\n          range: [innerHeight + margin.top, margin.top],\n          domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],\n          nice: true,\n        }),\n      [margin.top, innerHeight],\n    );\n\n    // tooltip handler\n    const handleTooltip = useCallback(\n      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {\n        const { x } = localPoint(event) || { x: 0 };\n        const x0 = dateScale.invert(x);\n        const index = bisectDate(stock, x0, 1);\n        const d0 = stock[index - 1];\n        const d1 = stock[index];\n        let d = d0;\n        if (d1 && getDate(d1)) {\n          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;\n        }\n        showTooltip({\n          tooltipData: d,\n          tooltipLeft: x,\n          tooltipTop: stockValueScale(getStockValue(d)),\n        });\n      },\n      [showTooltip, stockValueScale, dateScale],\n    );\n\n    return (\n      <div>\n        <svg width={width} height={height}>\n          <rect\n            x={0}\n            y={0}\n            width={width}\n            height={height}\n            fill=\"url(#area-background-gradient)\"\n            rx={14}\n          />\n          <LinearGradient id=\"area-background-gradient\" from={background} to={background2} />\n          <LinearGradient id=\"area-gradient\" from={accentColor} to={accentColor} toOpacity={0.1} />\n          <GridRows\n            left={margin.left}\n            scale={stockValueScale}\n            width={innerWidth}\n            strokeDasharray=\"1,3\"\n            stroke={accentColor}\n            strokeOpacity={0}\n            pointerEvents=\"none\"\n          />\n          <GridColumns\n            top={margin.top}\n            scale={dateScale}\n            height={innerHeight}\n            strokeDasharray=\"1,3\"\n            stroke={accentColor}\n            strokeOpacity={0.2}\n            pointerEvents=\"none\"\n          />\n          <AreaClosed<AppleStock>\n            data={stock}\n            x={d => dateScale(getDate(d)) ?? 0}\n            y={d => stockValueScale(getStockValue(d)) ?? 0}\n            yScale={stockValueScale}\n            strokeWidth={1}\n            stroke=\"url(#area-gradient)\"\n            fill=\"url(#area-gradient)\"\n            curve={curveMonotoneX}\n          />\n          <Bar\n            x={margin.left}\n            y={margin.top}\n            width={innerWidth}\n            height={innerHeight}\n            fill=\"transparent\"\n            rx={14}\n            onTouchStart={handleTooltip}\n            onTouchMove={handleTooltip}\n            onMouseMove={handleTooltip}\n            onMouseLeave={() => hideTooltip()}\n          />\n          {tooltipData && (\n            <g>\n              <Line\n                from={{ x: tooltipLeft, y: margin.top }}\n                to={{ x: tooltipLeft, y: innerHeight + margin.top }}\n                stroke={accentColorDark}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n                strokeDasharray=\"5,2\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop + 1}\n                r={4}\n                fill=\"black\"\n                fillOpacity={0.1}\n                stroke=\"black\"\n                strokeOpacity={0.1}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop}\n                r={4}\n                fill={accentColorDark}\n                stroke=\"white\"\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n            </g>\n          )}\n        </svg>\n        {tooltipData && (\n          <div>\n            <TooltipWithBounds\n              key={Math.random()}\n              top={tooltipTop - 12}\n              left={tooltipLeft + 12}\n              style={tooltipStyles}\n            >\n              {`$${getStockValue(tooltipData)}`}\n            </TooltipWithBounds>\n            <Tooltip\n              top={innerHeight + margin.top - 14}\n              left={tooltipLeft}\n              style={{\n                ...defaultStyles,\n                minWidth: 72,\n                textAlign: 'center',\n                transform: 'translateX(-50%)',\n              }}\n            >\n              {formatDate(getDate(tooltipData))}\n            </Tooltip>\n          </div>\n        )}\n      </div>\n    );\n  },\n);\n")}},"VB+g":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("rkTo"),o=n("ZQHj");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a={x:0,y:0};function l(t,e){if(!t||!e)return null;var n=function(t){if(!t)return i({},a);if(Object(o.g)(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:i({},a);if(Object(o.c)(t))return{x:t.clientX,y:t.clientY};var e=null==t?void 0:t.target,n=e&&"getBoundingClientRect"in e?e.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:i({},a)}(e),l=Object(o.d)(t)?t.ownerSVGElement:t,c=Object(o.e)(l)?l.getScreenCTM():null;if(Object(o.f)(l)&&c){var s=l.createSVGPoint();return s.x=n.x,s.y=n.y,s=s.matrixTransform(c.inverse()),new r.a({x:s.x,y:s.y})}var u=t.getBoundingClientRect();return new r.a({x:n.x-u.left-t.clientLeft,y:n.y-u.top-t.clientTop})}},WqRU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,r=t.to,i=void 0===r?{x:1,y:1}:r,c=t.fill,s=void 0===c?"transparent":c,u=t.className,f=t.innerRef,p=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["from","to","fill","className","innerRef"]),d=n.x===i.x||n.y===i.y;return o.a.createElement("line",l({ref:f,className:a()("visx-line",u),x1:n.x,y1:n.y,x2:i.x,y2:i.y,fill:s,shapeRendering:d?"crispEdges":"auto"},p))}},ZQHj:function(t,e,n){"use strict";function r(t){return!!t&&t instanceof Element}function o(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function i(t){return!!t&&"createSVGPoint"in t}function a(t){return!!t&&"getScreenCTM"in t}function l(t){return!!t&&"changedTouches"in t}function c(t){return!!t&&"clientX"in t}function s(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s}))},"bf+l":function(t){t.exports=JSON.parse('{"name":"@visx/demo-area","description":"Standalone visx area demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/event":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-array":"^2.4.0","d3-time-format":"2.2.3","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","area"]}')},eMuC:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),l=n("O94r"),c=n.n(l),s=n("hsl+"),u=n.n(s),f=n("JmwF"),p=n("rkTo"),d=n("nNND"),h=n("HlJr"),v=n("tZ4l");function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,i=t.scale,l=t.height,s=t.stroke,m=void 0===s?"#eaf0f6":s,g=t.strokeWidth,b=void 0===g?1:g,x=t.strokeDasharray,O=t.className,k=t.numTicks,w=void 0===k?10:k,j=t.lineStyle,T=t.offset,E=t.tickValues,_=t.children,S=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),R=null!=E?E:Object(d.a)(i,w),D=(null!=T?T:0)+Object(v.a)(i)/2,P=R.map((function(t){var e,n=(null!=(e=Object(h.a)(i(t)))?e:0)+D;return{from:new p.a({x:n,y:0}),to:new p.a({x:n,y:l})}}));return a.a.createElement(f.a,{className:c()("visx-columns",O),top:n,left:o},_?_({lines:P}):P.map((function(t,e){var n=t.from,r=t.to;return a.a.createElement(u.a,y({key:"column-line-"+e,from:n,to:r,stroke:m,strokeWidth:b,strokeDasharray:x,style:j},S))})))}m.propTypes={tickValues:o.a.array,height:o.a.number.isRequired}},g2fB:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){var e=t.className,n=t.innerRef,r=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["className","innerRef"]);return o.a.createElement("rect",l({ref:n,className:a()("visx-bar",e)},r))}},"hsl+":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,i=t.to,l=void 0===i?{x:1,y:1}:i,c=t.fill,s=void 0===c?"transparent":c,u=t.className,f=t.innerRef,p=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["from","to","fill","className","innerRef"]),d=n.x===l.x||n.y===l.y;return r.default.createElement("line",a({ref:f,className:(0,o.default)("visx-line",u),x1:n.x,y1:n.y,x2:l.x,y2:l.y,fill:s,shapeRendering:d?"crispEdges":"auto"},p))};var r=i(n("ERkP")),o=i(n("O94r"));function i(t){return t&&t.__esModule?t:{default:t}}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},jpI8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("VB+g"),o=n("ZQHj");function i(t,e){if(Object(o.a)(t)&&e)return Object(r.a)(t,e);if(Object(o.b)(t)){var n=t,i=n.target;if(i)return Object(r.a)(i,n)}return null}},nNND:function(t,e,n){"use strict";function r(t,e){var n=t;return"ticks"in n?n.ticks(e):n.domain().filter((function(t,n,r){return null==e||r.length<=e||n%Math.round((r.length-1)/e)===0}))}n.d(e,"a",(function(){return r}))},qyW2:function(t,e,n){"use strict";n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return S}));var r=n("zjfJ"),o=n("ERkP"),i=n.n(o),a=n("9Jhr"),l=n("g2fB"),c=n("WqRU"),s=n("oT5u"),u=n.n(s),f=n("EbDF"),p=n("Ifh9"),d=n("eMuC"),h=n("cjvV"),v=n("67po"),y=n("+fu8"),m=n("xc3W"),g=n("8/jq"),b=n("jpI8"),x=n("Cf/J"),O=n("ue4z"),k=n("mHfT"),w=i.a.createElement;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=u.a.slice(800),_="#3b6978",S="#edffea",R=T(T({},y.b),{},{background:_,border:"1px solid white",color:"white"}),D=Object(k.a)("%b %d, '%y"),P=function(t){return new Date(t.date)},N=function(t){return t.close},C=Object(O.a)((function(t){return new Date(t.date)})).left;e.c=Object(m.a)((function(t){var e=t.width,n=t.height,r=t.margin,i=void 0===r?{top:0,right:0,bottom:0,left:0}:r,s=t.showTooltip,u=t.hideTooltip,m=t.tooltipData,k=t.tooltipTop,j=void 0===k?0:k,W=t.tooltipLeft,M=void 0===W?0:W;if(e<10)return null;var L=e-i.left-i.right,V=n-i.top-i.bottom,A=Object(o.useMemo)((function(){return Object(h.a)({range:[i.left,L+i.left],domain:Object(O.b)(E,P)})}),[L,i.left]),z=Object(o.useMemo)((function(){return Object(v.a)({range:[V+i.top,i.top],domain:[0,(Object(O.c)(E,N)||0)+V/3],nice:!0})}),[i.top,V]),B=Object(o.useCallback)((function(t){var e=(Object(b.a)(t)||{x:0}).x,n=A.invert(e),r=C(E,n,1),o=E[r-1],i=E[r],a=o;i&&P(i)&&(a=n.valueOf()-P(o).valueOf()>P(i).valueOf()-n.valueOf()?i:o),s({tooltipData:a,tooltipLeft:e,tooltipTop:z(N(a))})}),[s,z,A]);return w("div",null,w("svg",{width:e,height:n},w("rect",{x:0,y:0,width:e,height:n,fill:"url(#area-background-gradient)",rx:14}),w(x.a,{id:"area-background-gradient",from:_,to:"#204051"}),w(x.a,{id:"area-gradient",from:S,to:S,toOpacity:.1}),w(p.a,{left:i.left,scale:z,width:L,strokeDasharray:"1,3",stroke:S,strokeOpacity:0,pointerEvents:"none"}),w(d.a,{top:i.top,scale:A,height:V,strokeDasharray:"1,3",stroke:S,strokeOpacity:.2,pointerEvents:"none"}),w(a.a,{data:E,x:function(t){var e;return null!==(e=A(P(t)))&&void 0!==e?e:0},y:function(t){var e;return null!==(e=z(N(t)))&&void 0!==e?e:0},yScale:z,strokeWidth:1,stroke:"url(#area-gradient)",fill:"url(#area-gradient)",curve:f.a}),w(l.a,{x:i.left,y:i.top,width:L,height:V,fill:"transparent",rx:14,onTouchStart:B,onTouchMove:B,onMouseMove:B,onMouseLeave:function(){return u()}}),m&&w("g",null,w(c.a,{from:{x:M,y:i.top},to:{x:M,y:V+i.top},stroke:"#75daad",strokeWidth:2,pointerEvents:"none",strokeDasharray:"5,2"}),w("circle",{cx:M,cy:j+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),w("circle",{cx:M,cy:j,r:4,fill:"#75daad",stroke:"white",strokeWidth:2,pointerEvents:"none"}))),m&&w("div",null,w(g.a,{key:Math.random(),top:j-12,left:M+12,style:R},"$".concat(N(m))),w(y.a,{top:V+i.top-14,left:M,style:T(T({},y.b),{},{minWidth:72,textAlign:"center",transform:"translateX(-50%)"})},D(P(m)))))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-area/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-area/Example.tsx#Example"})}catch(W){}},rkTo:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}));var o=function(){function t(t){var e=t.x,n=void 0===e?0:e,o=t.y,i=void 0===o?0:o;r(this,"x",0),r(this,"y",0),this.x=n,this.y=i}var e=t.prototype;return e.value=function(){return{x:this.x,y:this.y}},e.toArray=function(){return[this.x,this.y]},t}()},tZ4l:function(t,e,n){"use strict";function r(t){return"bandwidth"in t?t.bandwidth():0}n.d(e,"a",(function(){return r}))},ue4z:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return f}));var r=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},o=function(t){var e;return 1===t.length&&(e=t,t=function(t,n){return r(e(t),n)}),{left:function(e,n,r,o){for(null==r&&(r=0),null==o&&(o=e.length);r<o;){var i=r+o>>>1;t(e[i],n)<0?r=i+1:o=i}return r},right:function(e,n,r,o){for(null==r&&(r=0),null==o&&(o=e.length);r<o;){var i=r+o>>>1;t(e[i],n)>0?o=i:r=i+1}return r}}};var i=o(r);i.right,i.left;var a=function(t,e){var n,r,o,i=t.length,a=-1;if(null==e){for(;++a<i;)if(null!=(n=t[a])&&n>=n)for(r=o=n;++a<i;)null!=(n=t[a])&&(r>n&&(r=n),o<n&&(o=n))}else for(;++a<i;)if(null!=(n=e(t[a],a,t))&&n>=n)for(r=o=n;++a<i;)null!=(n=e(t[a],a,t))&&(r>n&&(r=n),o<n&&(o=n));return[r,o]},l=Array.prototype,c=(l.slice,l.map,function(t,e,n){t=+t,e=+e,n=(o=arguments.length)<2?(e=t,t=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((e-t)/n)),i=new Array(o);++r<o;)i[r]=t+r*n;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var s=function(t,e){var n,r,o=t.length,i=-1;if(null==e){for(;++i<o;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<o;)null!=(n=t[i])&&n>r&&(r=n)}else for(;++i<o;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<o;)null!=(n=e(t[i],i,t))&&n>r&&(r=n);return r},u=function(t){for(var e,n,r,o=t.length,i=-1,a=0;++i<o;)a+=t[i].length;for(n=new Array(a);--o>=0;)for(e=(r=t[o]).length;--e>=0;)n[--a]=r[e];return n},f=function(t){if(!(o=t.length))return[];for(var e=-1,n=function(t,e){var n,r,o=t.length,i=-1;if(null==e){for(;++i<o;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<o;)null!=(n=t[i])&&r>n&&(r=n)}else for(;++i<o;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<o;)null!=(n=e(t[i],i,t))&&r>n&&(r=n);return r}(t,p),r=new Array(n);++e<n;)for(var o,i=-1,a=r[e]=new Array(o);++i<o;)a[i]=t[i][e];return r};function p(t){return t.length}},xc3W:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("ERkP"),o=n.n(r),i=n("QnoR");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e,n){void 0===e&&(e={style:{position:"relative",width:"inherit",height:"inherit"}}),void 0===n&&(n=function(t,e){return o.a.createElement("div",e,t)});return function(r){var l=Object(i.a)();return n(o.a.createElement(t,a({},l,r)),e)}}},zjfJ:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}},[["DTjC",0,2,1,3,4,5,6,7,11,16,17]]]);
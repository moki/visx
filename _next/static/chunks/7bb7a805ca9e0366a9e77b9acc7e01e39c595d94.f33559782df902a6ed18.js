(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"3Ng6":function(e){e.exports=JSON.parse('{"name":"@visx/demo-annotation","description":"Standalone visx annotation demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/annotation":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.8.0","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","annotation"]}')},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("+wNj");function o(e,t){if(null==e)return{};var n,o,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},erk3:function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return P}));var a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("/GET"),r=n("Xr0V"),c=n("amCE"),l=n("tNN4"),u=n("geX1"),d=n("zjfJ"),p=n("yFcC"),m=n.n(p),x=n("oT5u"),h=n.n(x),b=n("cjvV"),f=n("67po"),j=n("ue4z"),y=n("xH1m"),v=n("5srZ"),g=i.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=h.a.slice(-100),C=function(e){return new Date(e.date).valueOf()},k=function(e){return e.close},E=S[Math.floor(S.length/2)+4];function w(e){var t,n,a=e.width,s=e.height,r=e.compact,c=void 0!==r&&r,l=e.children,u=Object(o.useMemo)((function(){return Object(b.a)({domain:Object(j.b)(S,(function(e){return C(e)})),range:[0,a]})}),[a]),d=Object(o.useMemo)((function(){return Object(f.a)({domain:Object(j.b)(S,(function(e){return k(e)})),range:[s-100,100]})}),[s]),p=Object(o.useState)(!1),x=p[0],h=p[1],N=Object(o.useState)(!1),w=N[0],_=N[1],A=Object(o.useState)("Title"),T=A[0],P=A[1],V=Object(o.useState)(c?"Subtitle":"Subtitle with deets and deets and deets and deets"),z=V[0],D=V[1],L=Object(o.useState)("elbow"),R=L[0],q=L[1],I=Object(o.useState)("circle"),H=I[0],B=I[1],K=Object(o.useState)(!0),Y=K[0],J=K[1],F=Object(o.useState)("auto"),G=F[0],M=F[1],W=Object(o.useState)("auto"),X=W[0],Z=W[1],Q=Object(o.useState)(c?100:175)[0],U=Object(o.useState)({x:null!==(t=u(C(E)))&&void 0!==t?t:0,y:null!==(n=d(k(E)))&&void 0!==n?n:0,dx:c?-50:-100,dy:c?-30:-50}),$=U[0],ee=U[1];return Object(o.useEffect)((function(){ee((function(e){var t,n;return O(O({},e),{},{x:null!==(t=u(C(E)))&&void 0!==t?t:0,y:null!==(n=d(k(E)))&&void 0!==n?n:0})}))}),[u,d]),g(i.a.Fragment,null,l({AnnotationComponent:x||w?y.a:v.a,annotationPosition:$,approxTooltipHeight:70,connectorType:R,data:S,editLabelPosition:x,editSubjectPosition:w,getDate:C,getStockValue:k,horizontalAnchor:"auto"===X?void 0:X,labelWidth:Q,setAnnotationPosition:ee,showAnchorLine:Y,subjectType:H,subtitle:z,title:T,verticalAnchor:"auto"===G?void 0:G,xScale:u,yScale:d}),!c&&g("div",{className:"jsx-272244364 controls"},g("div",{className:"jsx-272244364"},g("label",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Title"),"\xa0\xa0",g("input",{type:"text",onChange:function(e){return P(e.target.value)},value:T,className:"jsx-272244364"})),"\xa0\xa0\xa0",g("label",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Subtitle"),"\xa0\xa0",g("input",{type:"text",onChange:function(e){return D(e.target.value)},value:z,className:"jsx-272244364"})),"\xa0\xa0\xa0",g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return _(!w)},checked:w,className:"jsx-272244364"}),"Edit subject position"),"\xa0\xa0",g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return h(!x)},checked:x,className:"jsx-272244364"}),"Edit label position")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Connector type"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return q("elbow")},checked:"elbow"===R,className:"jsx-272244364"}),"Elbow"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return q("line")},checked:"line"===R,className:"jsx-272244364"}),"Straight line")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Subject type"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return B("circle")},checked:"circle"===H,className:"jsx-272244364"}),"Circle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return B("vertical-line")},checked:"vertical-line"===H,className:"jsx-272244364"}),"Vertical line"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return B("horizontal-line")},checked:"horizontal-line"===H,className:"jsx-272244364"}),"Horizontal line")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Horizontal label anchor"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("auto")},checked:"auto"===X,className:"jsx-272244364"}),"auto"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("start")},checked:"start"===X,className:"jsx-272244364"}),"left"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("middle")},checked:"middle"===X,className:"jsx-272244364"}),"middle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("end")},checked:"end"===X,className:"jsx-272244364"}),"right")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Vertical label anchor"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return M("auto")},checked:"auto"===G,className:"jsx-272244364"}),"auto"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return M("start")},checked:"start"===G,className:"jsx-272244364"}),"top"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return M("middle")},checked:"middle"===G,className:"jsx-272244364"}),"middle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return M("end")},checked:"end"===G,className:"jsx-272244364"}),"bottom"),g("div",{className:"jsx-272244364"},g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return J(!Y)},checked:Y,className:"jsx-272244364"}),"Show anchor line")))),g(m.a,{id:"272244364"},[".controls.jsx-272244364{font-size:13px;line-height:1.5em;}",".controls.jsx-272244364>div.jsx-272244364{margin-bottom:4px;}"]))}try{w.displayName="ExampleControls",w.__docgenInfo={description:"",displayName:"ExampleControls",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"]={docgenInfo:w.__docgenInfo,name:"ExampleControls",path:"src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"})}catch(V){}function _(e){var t=e.value,n=e.scale,a=e.accessor,o=e.data,i=Object(j.a)(a).left,s=n.invert(t),r=i(o,s,1),c=o[r-1],l=o[r],u=c;return l&&a(l)&&(u=s-a(c)>a(l)-s?l:c),u}try{_.displayName="findNearestDatum",_.__docgenInfo={description:"",displayName:"findNearestDatum",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"ScaleLinear<unknown, unknown, never> | ScaleTime<unknown, unknown, never>"}},accessor:{defaultValue:null,description:"",name:"accessor",required:!0,type:{name:"(d: AppleStock) => number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"]={docgenInfo:_.__docgenInfo,name:"findNearestDatum",path:"src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"})}catch(V){}var A=i.a.createElement,T=["#ecf4f3","#68b0ab","#006a71"];function P(e){var t=e.width,n=e.height,o=e.compact;return A(w,{width:t,height:n,compact:void 0!==o&&o},(function(e){var o=e.AnnotationComponent,i=e.annotationPosition,d=e.approxTooltipHeight,p=e.connectorType,m=e.data,x=e.editLabelPosition,h=e.editSubjectPosition,b=e.getDate,f=e.getStockValue,j=e.horizontalAnchor,y=e.labelWidth,v=e.setAnnotationPosition,g=e.showAnchorLine,N=e.subjectType,O=e.subtitle,S=e.title,C=e.verticalAnchor,k=e.xScale,E=e.yScale;return A("svg",{width:t,height:n},A("rect",{width:t,height:n,fill:T[0]}),A(u.a,{stroke:T[2],strokeWidth:2,data:m,x:function(e){var t;return null!==(t=k(b(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=E(f(e)))&&void 0!==t?t:0}}),A(o,{width:t,height:n,x:i.x,y:i.y,dx:i.dx,dy:i.dy,canEditLabel:x,canEditSubject:h,onDragEnd:function(e){e.event;var o,i,s=Object(a.a)(e,["event"]),r=_({accessor:"horizontal-line"===N?f:b,data:m,scale:"horizontal-line"===N?E:k,value:"horizontal-line"===N?s.y:s.x}),c=null!==(o=k(b(r)))&&void 0!==o?o:0,l=null!==(i=E(f(r)))&&void 0!==i?i:0,u=s.dx>0&&c+s.dx+y>t||s.dx<0&&c+s.dx-y<=0,p=s.dy>0&&n-(l+s.dy)<d||s.dy<0&&l+s.dy-d<=0;v({x:c,y:l,dx:(u?-1:1)*s.dx,dy:(p?-1:1)*s.dy})}},A(s.a,{stroke:"#ff7e67",type:p}),A(r.a,{backgroundFill:"white",showAnchorLine:g,anchorLineStroke:T[2],backgroundProps:{stroke:T[1]},fontColor:T[2],horizontalAnchor:j,subtitle:O,title:S,verticalAnchor:C,width:y}),"circle"===N&&A(c.a,{stroke:"#ff7e67"}),"circle"!==N&&A(l.a,{orientation:"vertical-line"===N?"vertical":"horizontal",stroke:"#ff7e67",min:0,max:"vertical-line"===N?n:t})))}))}try{P.displayName="Example",P.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/Example.tsx#Example"]={docgenInfo:P.__docgenInfo,name:"Example",path:"src/sandboxes/visx-annotation/Example.tsx#Example"})}catch(V){}}}]);
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"06HE":function(n,t,e){"use strict";var r,i,u,o,c=e("aIlv"),a=e("Rlwr"),l=e("0OVb"),f=e("4qE7"),s=e("WX26"),p=Object(l.a)(),h=Object(l.a)(),v={point:s.a,lineStart:s.a,lineEnd:s.a,polygonStart:function(){v.lineStart=b,v.lineEnd=j},polygonEnd:function(){v.lineStart=v.lineEnd=v.point=s.a,p.add(Object(f.a)(h)),h.reset()},result:function(){var n=p/2;return p.reset(),n}};function b(){v.point=g}function g(n,t){v.point=d,r=u=n,i=o=t}function d(n,t){h.add(o*n-u*t),u=n,o=t}function j(){d(r,i)}var O,E,y,m,S=v,x=e("VftZ"),M=0,_=0,q=0,w=0,N=0,k=0,P=0,R=0,z=0,F={point:C,lineStart:A,lineEnd:W,polygonStart:function(){F.lineStart=X,F.lineEnd=U},polygonEnd:function(){F.point=C,F.lineStart=A,F.lineEnd=W},result:function(){var n=z?[P/z,R/z]:k?[w/k,N/k]:q?[M/q,_/q]:[NaN,NaN];return M=_=q=w=N=k=P=R=z=0,n}};function C(n,t){M+=n,_+=t,++q}function A(){F.point=I}function I(n,t){F.point=L,C(y=n,m=t)}function L(n,t){var e=n-y,r=t-m,i=Object(f.t)(e*e+r*r);w+=i*(y+n)/2,N+=i*(m+t)/2,k+=i,C(y=n,m=t)}function W(){F.point=C}function X(){F.point=V}function U(){Q(O,E)}function V(n,t){F.point=Q,C(O=y=n,E=m=t)}function Q(n,t){var e=n-y,r=t-m,i=Object(f.t)(e*e+r*r);w+=i*(y+n)/2,N+=i*(m+t)/2,k+=i,P+=(i=m*n-y*t)*(y+n),R+=i*(m+t),z+=3*i,C(y=n,m=t)}var T=F;function H(n){this._context=n}H.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,f.v)}},result:s.a};var J,Y,Z,G,B,D=Object(l.a)(),K={point:s.a,lineStart:function(){K.point=$},lineEnd:function(){J&&nn(Y,Z),K.point=s.a},polygonStart:function(){J=!0},polygonEnd:function(){J=null},result:function(){var n=+D;return D.reset(),n}};function $(n,t){K.point=nn,Y=G=n,Z=B=t}function nn(n,t){G-=n,B-=t,D.add(Object(f.t)(G*G+B*B)),G=n,B=t}var tn=K;function en(){this._string=[]}function rn(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}en.prototype={_radius:4.5,_circle:rn(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=rn(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}};t.a=function(n,t){var e,r,i=4.5;function u(n){return n&&("function"===typeof i&&r.pointRadius(+i.apply(this,arguments)),Object(a.a)(n,e(r))),r.result()}return u.area=function(n){return Object(a.a)(n,e(S)),S.result()},u.measure=function(n){return Object(a.a)(n,e(tn)),tn.result()},u.bounds=function(n){return Object(a.a)(n,e(x.a)),x.a.result()},u.centroid=function(n){return Object(a.a)(n,e(T)),T.result()},u.projection=function(t){return arguments.length?(e=null==t?(n=null,c.a):(n=t).stream,u):n},u.context=function(n){return arguments.length?(r=null==n?(t=null,new en):new H(t=n),"function"!==typeof i&&r.pointRadius(i),u):t},u.pointRadius=function(n){return arguments.length?(i="function"===typeof n?n:(r.pointRadius(+n),+n),u):i},u.projection(n).context(t)}},"0OVb":function(n,t,e){"use strict";function r(){this.reset()}t.a=function(){return new r},r.prototype={constructor:r,reset:function(){this.s=this.t=0},add:function(n){u(i,n,this.t),u(this,i.s,this.s),this.s?this.t+=i.t:this.s=i.t},valueOf:function(){return this.s}};var i=new r;function u(n,t,e){var r=n.s=t+e,i=r-t,u=r-i;n.t=t-u+(e-i)}},"29fh":function(n,t,e){"use strict";var r=e("4qE7"),i=e("Uyw0"),u=e("8ato"),o=e("lXCi");t.a=function(){var n,t,e,c,a,l,f=Object(i.a)(),s=Object(u.a)().rotate([154,0]).center([-2,58.5]).parallels([55,65]),p=Object(u.a)().rotate([157,0]).center([-3,19.9]).parallels([8,18]),h={point:function(n,t){l=[n,t]}};function v(n){var t=n[0],r=n[1];return l=null,e.point(t,r),l||(c.point(t,r),l)||(a.point(t,r),l)}function b(){return n=t=null,v}return v.invert=function(n){var t=f.scale(),e=f.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?p:f).invert(n)},v.stream=function(e){return n&&t===e?n:n=function(n){var t=n.length;return{point:function(e,r){for(var i=-1;++i<t;)n[i].point(e,r)},sphere:function(){for(var e=-1;++e<t;)n[e].sphere()},lineStart:function(){for(var e=-1;++e<t;)n[e].lineStart()},lineEnd:function(){for(var e=-1;++e<t;)n[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<t;)n[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<t;)n[e].polygonEnd()}}}([f.stream(t=e),s.stream(e),p.stream(e)])},v.precision=function(n){return arguments.length?(f.precision(n),s.precision(n),p.precision(n),b()):f.precision()},v.scale=function(n){return arguments.length?(f.scale(n),s.scale(.35*n),p.scale(n),v.translate(f.translate())):f.scale()},v.translate=function(n){if(!arguments.length)return f.translate();var t=f.scale(),i=+n[0],u=+n[1];return e=f.translate(n).clipExtent([[i-.455*t,u-.238*t],[i+.455*t,u+.238*t]]).stream(h),c=s.translate([i-.307*t,u+.201*t]).clipExtent([[i-.425*t+r.i,u+.12*t+r.i],[i-.214*t-r.i,u+.234*t-r.i]]).stream(h),a=p.translate([i-.205*t,u+.212*t]).clipExtent([[i-.214*t+r.i,u+.166*t+r.i],[i-.115*t-r.i,u+.234*t-r.i]]).stream(h),b()},v.fitExtent=function(n,t){return Object(o.a)(v,n,t)},v.fitSize=function(n,t){return Object(o.c)(v,n,t)},v.fitWidth=function(n,t){return Object(o.d)(v,n,t)},v.fitHeight=function(n,t){return Object(o.b)(v,n,t)},v.scale(1070)}},"4qE7":function(n,t,e){"use strict";e.d(t,"i",(function(){return r})),e.d(t,"j",(function(){return i})),e.d(t,"n",(function(){return u})),e.d(t,"l",(function(){return o})),e.d(t,"p",(function(){return c})),e.d(t,"v",(function(){return a})),e.d(t,"h",(function(){return l})),e.d(t,"q",(function(){return f})),e.d(t,"a",(function(){return s})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return h})),e.d(t,"g",(function(){return v})),e.d(t,"f",(function(){return b})),e.d(t,"k",(function(){return g})),e.d(t,"m",(function(){return d})),e.d(t,"o",(function(){return j})),e.d(t,"s",(function(){return O})),e.d(t,"r",(function(){return E})),e.d(t,"t",(function(){return y})),e.d(t,"u",(function(){return m})),e.d(t,"b",(function(){return S})),e.d(t,"c",(function(){return x}));var r=1e-6,i=1e-12,u=Math.PI,o=u/2,c=u/4,a=2*u,l=180/u,f=u/180,s=Math.abs,p=Math.atan,h=Math.atan2,v=Math.cos,b=Math.ceil,g=Math.exp,d=(Math.floor,Math.log),j=Math.pow,O=Math.sin,E=Math.sign||function(n){return n>0?1:n<0?-1:0},y=Math.sqrt,m=Math.tan;function S(n){return n>1?0:n<-1?u:Math.acos(n)}function x(n){return n>1?o:n<-1?-o:Math.asin(n)}},"6pkO":function(n,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"b",(function(){return c}));var r=e("4qE7"),i=e("O6YI"),u=e("dedP");function o(n,t){return[n,Object(r.m)(Object(r.u)((r.l+t)/2))]}function c(n){var t,e,c,a=Object(u.a)(n),l=a.center,f=a.scale,s=a.translate,p=a.clipExtent,h=null;function v(){var u=r.n*f(),l=a(Object(i.a)(a.rotate()).invert([0,0]));return p(null==h?[[l[0]-u,l[1]-u],[l[0]+u,l[1]+u]]:n===o?[[Math.max(l[0]-u,h),t],[Math.min(l[0]+u,e),c]]:[[h,Math.max(l[1]-u,t)],[e,Math.min(l[1]+u,c)]])}return a.scale=function(n){return arguments.length?(f(n),v()):f()},a.translate=function(n){return arguments.length?(s(n),v()):s()},a.center=function(n){return arguments.length?(l(n),v()):l()},a.clipExtent=function(n){return arguments.length?(null==n?h=t=e=c=null:(h=+n[0][0],t=+n[0][1],e=+n[1][0],c=+n[1][1]),v()):null==h?null:[[h,t],[e,c]]},v()}o.invert=function(n,t){return[n,2*Object(r.d)(Object(r.k)(t))-r.l]},t.a=function(){return c(o).scale(961/r.v)}},"8ato":function(n,t,e){"use strict";var r=e("4qE7"),i=e("I5DF");function u(n,t){var e=Object(r.s)(n),i=(e+Object(r.s)(t))/2;if(Object(r.a)(i)<r.i)return function(n){var t=Object(r.g)(n);function e(n,e){return[n*t,Object(r.s)(e)/t]}return e.invert=function(n,e){return[n/t,Object(r.c)(e*t)]},e}(n);var u=1+e*(2*i-e),o=Object(r.t)(u)/i;function c(n,t){var e=Object(r.t)(u-2*i*Object(r.s)(t))/i;return[e*Object(r.s)(n*=i),o-e*Object(r.g)(n)]}return c.invert=function(n,t){var e=o-t,c=Object(r.e)(n,Object(r.a)(e))*Object(r.r)(e);return e*i<0&&(c-=r.n*Object(r.r)(n)*Object(r.r)(e)),[c/i,Object(r.c)((u-(n*n+e*e)*i*i)/(2*i))]},c}t.a=function(){return Object(i.a)(u).scale(155.424).center([0,33.6442])}},I5DF:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("4qE7"),i=e("dedP");function u(n){var t=0,e=r.n/3,u=Object(i.b)(n),o=u(t,e);return o.parallels=function(n){return arguments.length?u(t=n[0]*r.q,e=n[1]*r.q):[t*r.h,e*r.h]},o}},O6YI:function(n,t,e){"use strict";e.d(t,"b",(function(){return o}));var r=e("UQCd"),i=e("4qE7");function u(n,t){return[Object(i.a)(n)>i.n?n+Math.round(-n/i.v)*i.v:n,t]}function o(n,t,e){return(n%=i.v)?t||e?Object(r.a)(a(n),l(t,e)):a(n):t||e?l(t,e):u}function c(n){return function(t,e){return[(t+=n)>i.n?t-i.v:t<-i.n?t+i.v:t,e]}}function a(n){var t=c(n);return t.invert=c(-n),t}function l(n,t){var e=Object(i.g)(n),r=Object(i.s)(n),u=Object(i.g)(t),o=Object(i.s)(t);function c(n,t){var c=Object(i.g)(t),a=Object(i.g)(n)*c,l=Object(i.s)(n)*c,f=Object(i.s)(t),s=f*e+a*r;return[Object(i.e)(l*u-s*o,a*e-f*r),Object(i.c)(s*u+l*o)]}return c.invert=function(n,t){var c=Object(i.g)(t),a=Object(i.g)(n)*c,l=Object(i.s)(n)*c,f=Object(i.s)(t),s=f*u-l*o;return[Object(i.e)(l*u+f*o,a*e+s*r),Object(i.c)(s*e-a*r)]},c}u.invert=u,t.a=function(n){function t(t){return(t=n(t[0]*i.q,t[1]*i.q))[0]*=i.h,t[1]*=i.h,t}return n=o(n[0]*i.q,n[1]*i.q,n.length>2?n[2]*i.q:0),t.invert=function(t){return(t=n.invert(t[0]*i.q,t[1]*i.q))[0]*=i.h,t[1]*=i.h,t},t}},Rlwr:function(n,t,e){"use strict";function r(n,t){n&&u.hasOwnProperty(n.type)&&u[n.type](n,t)}var i={Feature:function(n,t){r(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,u=e.length;++i<u;)r(e[i].geometry,t)}},u={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){o(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)o(e[r],t,0)},Polygon:function(n,t){c(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)c(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,u=e.length;++i<u;)r(e[i],t)}};function o(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function c(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)o(n[e],t,1);t.polygonEnd()}t.a=function(n,t){n&&i.hasOwnProperty(n.type)?i[n.type](n,t):r(n,t)}},S5jI:function(n,t,e){"use strict";var r=e("dedP"),i=e("4qE7"),u=1.340264,o=-.081106,c=893e-6,a=.003796,l=Object(i.t)(3)/2;function f(n,t){var e=Object(i.c)(l*Object(i.s)(t)),r=e*e,f=r*r*r;return[n*Object(i.g)(e)/(l*(u+3*o*r+f*(7*c+9*a*r))),e*(u+o*r+f*(c+a*r))]}f.invert=function(n,t){for(var e,r=t,f=r*r,s=f*f*f,p=0;p<12&&(s=(f=(r-=e=(r*(u+o*f+s*(c+a*f))-t)/(u+3*o*f+s*(7*c+9*a*f)))*r)*f*f,!(Object(i.a)(e)<i.j));++p);return[l*n*(u+3*o*f+s*(7*c+9*a*f))/Object(i.g)(r),Object(i.c)(Object(i.s)(r)/l)]},t.a=function(){return Object(r.a)(f).scale(177.158)}},UQCd:function(n,t,e){"use strict";t.a=function(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return(e=t.invert(e,r))&&n.invert(e[0],e[1])}),e}},Uyw0:function(n,t,e){"use strict";var r=e("8ato");t.a=function(){return Object(r.a)().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}},VftZ:function(n,t,e){"use strict";var r=e("WX26"),i=1/0,u=i,o=-i,c=o,a={point:function(n,t){n<i&&(i=n);n>o&&(o=n);t<u&&(u=t);t>c&&(c=t)},lineStart:r.a,lineEnd:r.a,polygonStart:r.a,polygonEnd:r.a,result:function(){var n=[[i,u],[o,c]];return o=c=-(u=i=1/0),n}};t.a=a},WX26:function(n,t,e){"use strict";function r(){}e.d(t,"a",(function(){return r}))},aIlv:function(n,t,e){"use strict";t.a=function(n){return n}},dedP:function(n,t,e){"use strict";e.d(t,"a",(function(){return X})),e.d(t,"b",(function(){return U}));var r=e("WX26"),i=function(){var n,t=[];return{point:function(t,e,r){n.push([t,e,r])},lineStart:function(){t.push(n=[])},lineEnd:r.a,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var e=t;return t=[],n=null,e}}},u=e("4qE7"),o=function(n,t){return Object(u.a)(n[0]-t[0])<u.i&&Object(u.a)(n[1]-t[1])<u.i};function c(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}var a=function(n,t,e,r,i){var a,f,s=[],p=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,e,r=n[0],l=n[t];if(o(r,l)){if(!r[2]&&!l[2]){for(i.lineStart(),a=0;a<t;++a)i.point((r=n[a])[0],r[1]);return void i.lineEnd()}l[0]+=2*u.i}s.push(e=new c(r,n,null,!0)),p.push(e.o=new c(r,null,e,!1)),s.push(e=new c(l,n,null,!1)),p.push(e.o=new c(l,null,e,!0))}})),s.length){for(p.sort(t),l(s),l(p),a=0,f=p.length;a<f;++a)p[a].e=e=!e;for(var h,v,b=s[0];;){for(var g=b,d=!0;g.v;)if((g=g.n)===b)return;h=g.z,i.lineStart();do{if(g.v=g.o.v=!0,g.e){if(d)for(a=0,f=h.length;a<f;++a)i.point((v=h[a])[0],v[1]);else r(g.x,g.n.x,1,i);g=g.n}else{if(d)for(h=g.p.z,a=h.length-1;a>=0;--a)i.point((v=h[a])[0],v[1]);else r(g.x,g.p.x,-1,i);g=g.p}h=(g=g.o).z,d=!d}while(!g.v);i.lineEnd()}}};function l(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}var f=e("0OVb");function s(n){return[Object(u.e)(n[1],n[0]),Object(u.c)(n[2])]}function p(n){var t=n[0],e=n[1],r=Object(u.g)(e);return[r*Object(u.g)(t),r*Object(u.s)(t),Object(u.s)(e)]}function h(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function v(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function b(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function g(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function d(n){var t=Object(u.t)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var j=Object(f.a)();function O(n){return Object(u.a)(n[0])<=u.n?n[0]:Object(u.r)(n[0])*((Object(u.a)(n[0])+u.n)%u.v-u.n)}var E=e("ue4z"),y=function(n,t,e,r){return function(o){var c,l,f,s=t(o),h=i(),b=t(h),g=!1,y={point:x,lineStart:_,lineEnd:q,polygonStart:function(){y.point=w,y.lineStart=N,y.lineEnd=k,l=[],c=[]},polygonEnd:function(){y.point=x,y.lineStart=_,y.lineEnd=q,l=Object(E.d)(l);var n=function(n,t){var e=O(t),r=t[1],i=Object(u.s)(r),o=[Object(u.s)(e),-Object(u.g)(e),0],c=0,a=0;j.reset(),1===i?r=u.l+u.i:-1===i&&(r=-u.l-u.i);for(var l=0,f=n.length;l<f;++l)if(h=(s=n[l]).length)for(var s,h,b=s[h-1],g=O(b),E=b[1]/2+u.p,y=Object(u.s)(E),m=Object(u.g)(E),S=0;S<h;++S,g=M,y=q,m=w,b=x){var x=s[S],M=O(x),_=x[1]/2+u.p,q=Object(u.s)(_),w=Object(u.g)(_),N=M-g,k=N>=0?1:-1,P=k*N,R=P>u.n,z=y*q;if(j.add(Object(u.e)(z*k*Object(u.s)(P),m*w+z*Object(u.g)(P))),c+=R?N+k*u.v:N,R^g>=e^M>=e){var F=v(p(b),p(x));d(F);var C=v(o,F);d(C);var A=(R^N>=0?-1:1)*Object(u.c)(C[2]);(r>A||r===A&&(F[0]||F[1]))&&(a+=R^N>=0?1:-1)}}return(c<-u.i||c<u.i&&j<-u.i)^1&a}(c,r);l.length?(g||(o.polygonStart(),g=!0),a(l,S,n,e,o)):n&&(g||(o.polygonStart(),g=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),g&&(o.polygonEnd(),g=!1),l=c=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function x(t,e){n(t,e)&&o.point(t,e)}function M(n,t){s.point(n,t)}function _(){y.point=M,s.lineStart()}function q(){y.point=x,s.lineEnd()}function w(n,t){f.push([n,t]),b.point(n,t)}function N(){b.lineStart(),f=[]}function k(){w(f[0][0],f[0][1]),b.lineEnd();var n,t,e,r,i=b.clean(),u=h.result(),a=u.length;if(f.pop(),c.push(f),f=null,a)if(1&i){if((t=(e=u[0]).length-1)>0){for(g||(o.polygonStart(),g=!0),o.lineStart(),n=0;n<t;++n)o.point((r=e[n])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),l.push(u.filter(m))}return y}};function m(n){return n.length>1}function S(n,t){return((n=n.x)[0]<0?n[1]-u.l-u.i:u.l-n[1])-((t=t.x)[0]<0?t[1]-u.l-u.i:u.l-t[1])}var x=y((function(){return!0}),(function(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(o,c){var a=o>0?u.n:-u.n,l=Object(u.a)(o-e);Object(u.a)(l-u.n)<u.i?(n.point(e,r=(r+c)/2>0?u.l:-u.l),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(o,r),t=0):i!==a&&l>=u.n&&(Object(u.a)(e-i)<u.i&&(e-=i*u.i),Object(u.a)(o-a)<u.i&&(o-=a*u.i),r=function(n,t,e,r){var i,o,c=Object(u.s)(n-e);return Object(u.a)(c)>u.i?Object(u.d)((Object(u.s)(t)*(o=Object(u.g)(r))*Object(u.s)(e)-Object(u.s)(r)*(i=Object(u.g)(t))*Object(u.s)(n))/(i*o*c)):(t+r)/2}(e,r,o,c),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=o,r=c),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}),(function(n,t,e,r){var i;if(null==n)i=e*u.l,r.point(-u.n,i),r.point(0,i),r.point(u.n,i),r.point(u.n,0),r.point(u.n,-i),r.point(0,-i),r.point(-u.n,-i),r.point(-u.n,0),r.point(-u.n,i);else if(Object(u.a)(n[0]-t[0])>u.i){var o=n[0]<t[0]?u.n:-u.n;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}),[-u.n,-u.l]);var M=e("O6YI");function _(n,t,e,r,i,o){if(e){var c=Object(u.g)(t),a=Object(u.s)(t),l=r*e;null==i?(i=t+r*u.v,o=t-l/2):(i=q(c,i),o=q(c,o),(r>0?i<o:i>o)&&(i+=r*u.v));for(var f,p=i;r>0?p>o:p<o;p-=l)f=s([c,-a*Object(u.g)(p),-a*Object(u.s)(p)]),n.point(f[0],f[1])}}function q(n,t){(t=p(t))[0]-=n,d(t);var e=Object(u.b)(-t[1]);return((-t[2]<0?-e:e)+u.v-u.i)%u.v}var w=function(n){var t=Object(u.g)(n),e=6*u.q,r=t>0,i=Object(u.a)(t)>u.i;function c(n,e){return Object(u.g)(n)*Object(u.g)(e)>t}function a(n,e,r){var i=[1,0,0],o=v(p(n),p(e)),c=h(o,o),a=o[0],l=c-a*a;if(!l)return!r&&n;var f=t*c/l,d=-t*a/l,j=v(i,o),O=g(i,f);b(O,g(o,d));var E=j,y=h(O,E),m=h(E,E),S=y*y-m*(h(O,O)-1);if(!(S<0)){var x=Object(u.t)(S),M=g(E,(-y-x)/m);if(b(M,O),M=s(M),!r)return M;var _,q=n[0],w=e[0],N=n[1],k=e[1];w<q&&(_=q,q=w,w=_);var P=w-q,R=Object(u.a)(P-u.n)<u.i;if(!R&&k<N&&(_=N,N=k,k=_),R||P<u.i?R?N+k>0^M[1]<(Object(u.a)(M[0]-q)<u.i?N:k):N<=M[1]&&M[1]<=k:P>u.n^(q<=M[0]&&M[0]<=w)){var z=g(E,(-y+x)/m);return b(z,O),[M,s(z)]}}}function l(t,e){var i=r?n:u.n-n,o=0;return t<-i?o|=1:t>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return y(c,(function(n){var t,e,f,s,p;return{lineStart:function(){s=f=!1,p=1},point:function(h,v){var b,g=[h,v],d=c(h,v),j=r?d?0:l(h,v):d?l(h+(h<0?u.n:-u.n),v):0;if(!t&&(s=f=d)&&n.lineStart(),d!==f&&(!(b=a(t,g))||o(t,b)||o(g,b))&&(g[2]=1),d!==f)p=0,d?(n.lineStart(),b=a(g,t),n.point(b[0],b[1])):(b=a(t,g),n.point(b[0],b[1],2),n.lineEnd()),t=b;else if(i&&t&&r^d){var O;j&e||!(O=a(g,t,!0))||(p=0,r?(n.lineStart(),n.point(O[0][0],O[0][1]),n.point(O[1][0],O[1][1]),n.lineEnd()):(n.point(O[1][0],O[1][1]),n.lineEnd(),n.lineStart(),n.point(O[0][0],O[0][1],3)))}!d||t&&o(t,g)||n.point(g[0],g[1]),t=g,f=d,e=j},lineEnd:function(){f&&n.lineEnd(),t=null},clean:function(){return p|(s&&f)<<1}}}),(function(t,r,i,u){_(u,n,e,i,t,r)}),r?[0,-n]:[-u.n,n-u.n])};function N(n,t,e,r){function o(i,u){return n<=i&&i<=e&&t<=u&&u<=r}function c(i,u,o,c){var a=0,f=0;if(null==i||(a=l(i,o))!==(f=l(u,o))||s(i,u)<0^o>0)do{c.point(0===a||3===a?n:e,a>1?r:t)}while((a=(a+o+4)%4)!==f);else c.point(u[0],u[1])}function l(r,i){return Object(u.a)(r[0]-n)<u.i?i>0?0:3:Object(u.a)(r[0]-e)<u.i?i>0?2:1:Object(u.a)(r[1]-t)<u.i?i>0?1:0:i>0?3:2}function f(n,t){return s(n.x,t.x)}function s(n,t){var e=l(n,1),r=l(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(u){var l,s,p,h,v,b,g,d,j,O,y,m=u,S=i(),x={point:M,lineStart:function(){x.point=_,s&&s.push(p=[]);O=!0,j=!1,g=d=NaN},lineEnd:function(){l&&(_(h,v),b&&j&&S.rejoin(),l.push(S.result()));x.point=M,j&&m.lineEnd()},polygonStart:function(){m=S,l=[],s=[],y=!0},polygonEnd:function(){var t=function(){for(var t=0,e=0,i=s.length;e<i;++e)for(var u,o,c=s[e],a=1,l=c.length,f=c[0],p=f[0],h=f[1];a<l;++a)u=p,o=h,p=(f=c[a])[0],h=f[1],o<=r?h>r&&(p-u)*(r-o)>(h-o)*(n-u)&&++t:h<=r&&(p-u)*(r-o)<(h-o)*(n-u)&&--t;return t}(),e=y&&t,i=(l=Object(E.d)(l)).length;(e||i)&&(u.polygonStart(),e&&(u.lineStart(),c(null,null,1,u),u.lineEnd()),i&&a(l,f,t,c,u),u.polygonEnd());m=u,l=s=p=null}};function M(n,t){o(n,t)&&m.point(n,t)}function _(i,u){var c=o(i,u);if(s&&p.push([i,u]),O)h=i,v=u,b=c,O=!1,c&&(m.lineStart(),m.point(i,u));else if(c&&j)m.point(i,u);else{var a=[g=Math.max(-1e9,Math.min(1e9,g)),d=Math.max(-1e9,Math.min(1e9,d))],l=[i=Math.max(-1e9,Math.min(1e9,i)),u=Math.max(-1e9,Math.min(1e9,u))];!function(n,t,e,r,i,u){var o,c=n[0],a=n[1],l=0,f=1,s=t[0]-c,p=t[1]-a;if(o=e-c,s||!(o>0)){if(o/=s,s<0){if(o<l)return;o<f&&(f=o)}else if(s>0){if(o>f)return;o>l&&(l=o)}if(o=i-c,s||!(o<0)){if(o/=s,s<0){if(o>f)return;o>l&&(l=o)}else if(s>0){if(o<l)return;o<f&&(f=o)}if(o=r-a,p||!(o>0)){if(o/=p,p<0){if(o<l)return;o<f&&(f=o)}else if(p>0){if(o>f)return;o>l&&(l=o)}if(o=u-a,p||!(o<0)){if(o/=p,p<0){if(o>f)return;o>l&&(l=o)}else if(p>0){if(o<l)return;o<f&&(f=o)}return l>0&&(n[0]=c+l*s,n[1]=a+l*p),f<1&&(t[0]=c+f*s,t[1]=a+f*p),!0}}}}}(a,l,n,t,e,r)?c&&(m.lineStart(),m.point(i,u),y=!1):(j||(m.lineStart(),m.point(a[0],a[1])),m.point(l[0],l[1]),c||m.lineEnd(),y=!1)}g=i,d=u,j=c}return x}}var k=e("UQCd"),P=e("aIlv");function R(n){return function(t){var e=new z;for(var r in n)e[r]=n[r];return e.stream=t,e}}function z(){}z.prototype={constructor:z,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var F=e("lXCi"),C=Object(u.g)(30*u.q),A=function(n,t){return+t?function(n,t){function e(r,i,o,c,a,l,f,s,p,h,v,b,g,d){var j=f-r,O=s-i,E=j*j+O*O;if(E>4*t&&g--){var y=c+h,m=a+v,S=l+b,x=Object(u.t)(y*y+m*m+S*S),M=Object(u.c)(S/=x),_=Object(u.a)(Object(u.a)(S)-1)<u.i||Object(u.a)(o-p)<u.i?(o+p)/2:Object(u.e)(m,y),q=n(_,M),w=q[0],N=q[1],k=w-r,P=N-i,R=O*k-j*P;(R*R/E>t||Object(u.a)((j*k+O*P)/E-.5)>.3||c*h+a*v+l*b<C)&&(e(r,i,o,c,a,l,w,N,_,y/=x,m/=x,S,g,d),d.point(w,N),e(w,N,_,y,m,S,f,s,p,h,v,b,g,d))}}return function(t){var r,i,u,o,c,a,l,f,s,h,v,b,g={point:d,lineStart:j,lineEnd:E,polygonStart:function(){t.polygonStart(),g.lineStart=y},polygonEnd:function(){t.polygonEnd(),g.lineStart=j}};function d(e,r){e=n(e,r),t.point(e[0],e[1])}function j(){f=NaN,g.point=O,t.lineStart()}function O(r,i){var u=p([r,i]),o=n(r,i);e(f,s,l,h,v,b,f=o[0],s=o[1],l=r,h=u[0],v=u[1],b=u[2],16,t),t.point(f,s)}function E(){g.point=d,t.lineEnd()}function y(){j(),g.point=m,g.lineEnd=S}function m(n,t){O(r=n,t),i=f,u=s,o=h,c=v,a=b,g.point=O}function S(){e(f,s,l,h,v,b,i,u,r,o,c,a,16,t),g.lineEnd=E,E()}return g}}(n,t):function(n){return R({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}(n)};var I=R({point:function(n,t){this.stream.point(n*u.q,t*u.q)}});function L(n,t,e,r,i){function u(u,o){return[t+n*(u*=r),e-n*(o*=i)]}return u.invert=function(u,o){return[(u-t)/n*r,(e-o)/n*i]},u}function W(n,t,e,r,i,o){var c=Object(u.g)(o),a=Object(u.s)(o),l=c*n,f=a*n,s=c/n,p=a/n,h=(a*e-c*t)/n,v=(a*t+c*e)/n;function b(n,u){return[l*(n*=r)-f*(u*=i)+t,e-f*n-l*u]}return b.invert=function(n,t){return[r*(s*n-p*t+h),i*(v-p*n-s*t)]},b}function X(n){return U((function(){return n}))()}function U(n){var t,e,r,i,o,c,a,l,f,s,p=150,h=480,v=250,b=0,g=0,d=0,j=0,O=0,E=0,y=1,m=1,S=null,_=x,q=null,z=P.a,C=.5;function X(n){return l(n[0]*u.q,n[1]*u.q)}function U(n){return(n=l.invert(n[0],n[1]))&&[n[0]*u.h,n[1]*u.h]}function V(){var n=W(p,0,0,y,m,E).apply(null,t(b,g)),r=(E?W:L)(p,h-n[0],v-n[1],y,m,E);return e=Object(M.b)(d,j,O),a=Object(k.a)(t,r),l=Object(k.a)(e,a),c=A(a,C),Q()}function Q(){return f=s=null,X}return X.stream=function(n){return f&&s===n?f:f=I(function(n){return R({point:function(t,e){var r=n(t,e);return this.stream.point(r[0],r[1])}})}(e)(_(c(z(s=n)))))},X.preclip=function(n){return arguments.length?(_=n,S=void 0,Q()):_},X.postclip=function(n){return arguments.length?(z=n,q=r=i=o=null,Q()):z},X.clipAngle=function(n){return arguments.length?(_=+n?w(S=n*u.q):(S=null,x),Q()):S*u.h},X.clipExtent=function(n){return arguments.length?(z=null==n?(q=r=i=o=null,P.a):N(q=+n[0][0],r=+n[0][1],i=+n[1][0],o=+n[1][1]),Q()):null==q?null:[[q,r],[i,o]]},X.scale=function(n){return arguments.length?(p=+n,V()):p},X.translate=function(n){return arguments.length?(h=+n[0],v=+n[1],V()):[h,v]},X.center=function(n){return arguments.length?(b=n[0]%360*u.q,g=n[1]%360*u.q,V()):[b*u.h,g*u.h]},X.rotate=function(n){return arguments.length?(d=n[0]%360*u.q,j=n[1]%360*u.q,O=n.length>2?n[2]%360*u.q:0,V()):[d*u.h,j*u.h,O*u.h]},X.angle=function(n){return arguments.length?(E=n%360*u.q,V()):E*u.h},X.reflectX=function(n){return arguments.length?(y=n?-1:1,V()):y<0},X.reflectY=function(n){return arguments.length?(m=n?-1:1,V()):m<0},X.precision=function(n){return arguments.length?(c=A(a,C=n*n),Q()):Object(u.t)(C)},X.fitExtent=function(n,t){return Object(F.a)(X,n,t)},X.fitSize=function(n,t){return Object(F.c)(X,n,t)},X.fitWidth=function(n,t){return Object(F.d)(X,n,t)},X.fitHeight=function(n,t){return Object(F.b)(X,n,t)},function(){return t=n.apply(this,arguments),X.invert=t.invert&&U,V()}}},goRg:function(n,t,e){"use strict";e.d(t,"a",(function(){return E}));var r=e("aWzz"),i=e.n(r),u=e("ERkP"),o=e.n(u),c=e("O94r"),a=e.n(c),l=e("JmwF"),f=e("jQ+C"),s=e("Uyw0"),p=e("29fh"),h=e("6pkO"),v=e("rvbe"),b=e("S5jI"),g=e("06HE"),d=e("sCBh");function j(){return(j=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var O={orthographic:function(){return Object(f.a)()},albers:function(){return Object(s.a)()},albersUsa:function(){return Object(p.a)()},mercator:function(){return Object(h.a)()},naturalEarth:function(){return Object(v.a)()},equalEarth:function(){return Object(b.a)()}};function E(n){var t=n.data,e=n.projection,r=void 0===e?"mercator":e,i=n.projectionFunc,u=n.clipAngle,c=n.clipExtent,f=n.scale,s=n.translate,p=n.center,h=n.rotate,v=n.precision,b=n.fitExtent,E=n.fitSize,y=n.centroid,m=n.graticule,S=n.graticuleLines,x=n.graticuleOutline,M=n.className,_=n.innerRef,q=n.pointRadius,w=n.children,N=function(n,t){if(null==n)return{};var e,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["data","projection","projectionFunc","clipAngle","clipExtent","scale","translate","center","rotate","precision","fitExtent","fitSize","centroid","graticule","graticuleLines","graticuleOutline","className","innerRef","pointRadius","children"]),k=("string"===typeof r?O[r]:r)();u&&k.clipAngle&&k.clipAngle(u),c&&k.clipExtent&&k.clipExtent(c),f&&k.scale&&k.scale(f),s&&k.translate&&k.translate(s),p&&k.center&&k.center(p),h&&k.rotate&&k.rotate(h),v&&k.precision&&k.precision(v),b&&k.fitExtent&&k.fitExtent.apply(k,b),E&&k.fitSize&&k.fitSize.apply(k,E);var P=Object(g.a)().projection(k);q&&P.pointRadius(q);var R=t.map((function(n,t){return{feature:n,type:r,projection:k,index:t,centroid:P.centroid(n),path:P(n)}}));return w?o.a.createElement(o.a.Fragment,null,w({path:P,features:R,projection:k})):o.a.createElement(l.a,{className:"visx-geo"},m&&!m.foreground&&o.a.createElement(d.a,j({graticule:function(n){return P(n)||""}},m)),S&&!S.foreground&&o.a.createElement(d.a,j({lines:function(n){return P(n)||""}},S)),x&&!x.foreground&&o.a.createElement(d.a,j({outline:function(n){return P(n)||""}},x)),R.map((function(n,t){return o.a.createElement("g",{key:r+"-"+t},o.a.createElement("path",j({className:a()("visx-geo-"+r,M),d:n.path||"",ref:_&&_(n,t)},N)),y&&y(n.centroid,n))})),i&&i(k),m&&m.foreground&&o.a.createElement(d.a,j({graticule:function(n){return P(n)||""}},m)),S&&S.foreground&&o.a.createElement(d.a,j({lines:function(n){return P(n)||""}},S)),x&&x.foreground&&o.a.createElement(d.a,j({outline:function(n){return P(n)||""}},x)))}E.propTypes={data:i.a.array.isRequired,projectionFunc:i.a.func,clipAngle:i.a.number,scale:i.a.number,precision:i.a.number,centroid:i.a.func,className:i.a.string,children:i.a.func,innerRef:i.a.func,pointRadius:i.a.number}},"jQ+C":function(n,t,e){"use strict";var r=e("4qE7"),i=e("mv/e"),u=e("dedP");function o(n,t){return[Object(r.g)(t)*Object(r.s)(n),Object(r.s)(t)]}o.invert=Object(i.a)(r.c),t.a=function(){return Object(u.a)(o).scale(249.5).clipAngle(90+r.i)}},lXCi:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"d",(function(){return a})),e.d(t,"b",(function(){return l}));var r=e("Rlwr"),i=e("VftZ");function u(n,t,e){var u=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=u&&n.clipExtent(null),Object(r.a)(e,n.stream(i.a)),t(i.a.result()),null!=u&&n.clipExtent(u),n}function o(n,t,e){return u(n,(function(e){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],u=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),o=+t[0][0]+(r-u*(e[1][0]+e[0][0]))/2,c=+t[0][1]+(i-u*(e[1][1]+e[0][1]))/2;n.scale(150*u).translate([o,c])}),e)}function c(n,t,e){return o(n,[[0,0],t],e)}function a(n,t,e){return u(n,(function(e){var r=+t,i=r/(e[1][0]-e[0][0]),u=(r-i*(e[1][0]+e[0][0]))/2,o=-i*e[0][1];n.scale(150*i).translate([u,o])}),e)}function l(n,t,e){return u(n,(function(e){var r=+t,i=r/(e[1][1]-e[0][1]),u=-i*e[0][0],o=(r-i*(e[1][1]+e[0][1]))/2;n.scale(150*i).translate([u,o])}),e)}},lxyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("ue4z"),i=e("4qE7");function u(n,t,e){var u=Object(r.e)(n,t-i.i,e).concat(t);return function(n){return u.map((function(t){return[n,t]}))}}function o(n,t,e){var u=Object(r.e)(n,t-i.i,e).concat(t);return function(n){return u.map((function(t){return[t,n]}))}}function c(){var n,t,e,c,a,l,f,s,p,h,v,b,g=10,d=g,j=90,O=360,E=2.5;function y(){return{type:"MultiLineString",coordinates:m()}}function m(){return Object(r.e)(Object(i.f)(c/j)*j,e,j).map(v).concat(Object(r.e)(Object(i.f)(s/O)*O,f,O).map(b)).concat(Object(r.e)(Object(i.f)(t/g)*g,n,g).filter((function(n){return Object(i.a)(n%j)>i.i})).map(p)).concat(Object(r.e)(Object(i.f)(l/d)*d,a,d).filter((function(n){return Object(i.a)(n%O)>i.i})).map(h))}return y.lines=function(){return m().map((function(n){return{type:"LineString",coordinates:n}}))},y.outline=function(){return{type:"Polygon",coordinates:[v(c).concat(b(f).slice(1),v(e).reverse().slice(1),b(s).reverse().slice(1))]}},y.extent=function(n){return arguments.length?y.extentMajor(n).extentMinor(n):y.extentMinor()},y.extentMajor=function(n){return arguments.length?(c=+n[0][0],e=+n[1][0],s=+n[0][1],f=+n[1][1],c>e&&(n=c,c=e,e=n),s>f&&(n=s,s=f,f=n),y.precision(E)):[[c,s],[e,f]]},y.extentMinor=function(e){return arguments.length?(t=+e[0][0],n=+e[1][0],l=+e[0][1],a=+e[1][1],t>n&&(e=t,t=n,n=e),l>a&&(e=l,l=a,a=e),y.precision(E)):[[t,l],[n,a]]},y.step=function(n){return arguments.length?y.stepMajor(n).stepMinor(n):y.stepMinor()},y.stepMajor=function(n){return arguments.length?(j=+n[0],O=+n[1],y):[j,O]},y.stepMinor=function(n){return arguments.length?(g=+n[0],d=+n[1],y):[g,d]},y.precision=function(r){return arguments.length?(E=+r,p=u(l,a,90),h=o(t,n,E),v=u(s,f,90),b=o(c,e,E),y):E},y.extentMajor([[-180,-90+i.i],[180,90-i.i]]).extentMinor([[-180,-80-i.i],[180,80+i.i]])}},"mv/e":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("4qE7");function i(n){return function(t,e){var i=Object(r.t)(t*t+e*e),u=n(i),o=Object(r.s)(u),c=Object(r.g)(u);return[Object(r.e)(t*o,i*c),Object(r.c)(i&&e*o/i)]}}},rvbe:function(n,t,e){"use strict";var r=e("dedP"),i=e("4qE7");function u(n,t){var e=t*t,r=e*e;return[n*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),t*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}u.invert=function(n,t){var e,r=t,u=25;do{var o=r*r,c=o*o;r-=e=(r*(1.007226+o*(.015085+c*(.028874*o-.044475-.005916*c)))-t)/(1.007226+o*(.045255+c*(.259866*o-.311325-.005916*11*c)))}while(Object(i.a)(e)>i.i&&--u>0);return[n/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},t.a=function(){return Object(r.a)(u).scale(175.295)}},sCBh:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("aWzz"),i=e.n(r),u=e("ERkP"),o=e.n(u),c=e("JmwF"),a=e("lxyu");function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.graticule,e=n.lines,r=n.outline,i=n.extent,u=n.extentMajor,f=n.extentMinor,s=n.step,p=n.stepMajor,h=n.stepMinor,v=n.precision,b=n.children,g=function(n,t){if(null==n)return{};var e,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["graticule","lines","outline","extent","extentMajor","extentMinor","step","stepMajor","stepMinor","precision","children"]),d=Object(a.a)();return i&&d.extent(i),u&&d.extentMajor(u),f&&d.extentMinor(f),s&&d.step(s),p&&d.stepMajor(p),h&&d.stepMinor(h),v&&d.precision(v),b?o.a.createElement(o.a.Fragment,null,b({graticule:d})):o.a.createElement(c.a,{className:"visx-geo-graticule"},t&&o.a.createElement("path",l({d:t(d()),fill:"none",stroke:"black"},g)),e&&d.lines().map((function(n,t){return o.a.createElement("g",{key:t},o.a.createElement("path",l({d:e(n),fill:"none",stroke:"black"},g)))})),r&&o.a.createElement("path",l({d:r(d.outline()),fill:"none",stroke:"black"},g)))}f.propTypes={graticule:i.a.func,lines:i.a.func,outline:i.a.func,children:i.a.func,precision:i.a.number}},ue4z:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return f})),e.d(t,"e",(function(){return a})),e.d(t,"f",(function(){return s}));var r=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN},i=function(n){var t;return 1===n.length&&(t=n,n=function(n,e){return r(t(n),e)}),{left:function(t,e,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}};var u=i(r);u.right,u.left;var o=function(n,t){var e,r,i,u=n.length,o=-1;if(null==t){for(;++o<u;)if(null!=(e=n[o])&&e>=e)for(r=i=e;++o<u;)null!=(e=n[o])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++o<u;)if(null!=(e=t(n[o],o,n))&&e>=e)for(r=i=e;++o<u;)null!=(e=t(n[o],o,n))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},c=Array.prototype,a=(c.slice,c.map,function(n,t,e){n=+n,t=+t,e=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((t-n)/e)),u=new Array(i);++r<i;)u[r]=n+r*e;return u});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=function(n,t){var e,r,i=n.length,u=-1;if(null==t){for(;++u<i;)if(null!=(e=n[u])&&e>=e)for(r=e;++u<i;)null!=(e=n[u])&&e>r&&(r=e)}else for(;++u<i;)if(null!=(e=t(n[u],u,n))&&e>=e)for(r=e;++u<i;)null!=(e=t(n[u],u,n))&&e>r&&(r=e);return r},f=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(t=(r=n[i]).length;--t>=0;)e[--o]=r[t];return e},s=function(n){if(!(i=n.length))return[];for(var t=-1,e=function(n,t){var e,r,i=n.length,u=-1;if(null==t){for(;++u<i;)if(null!=(e=n[u])&&e>=e)for(r=e;++u<i;)null!=(e=n[u])&&r>e&&(r=e)}else for(;++u<i;)if(null!=(e=t(n[u],u,n))&&e>=e)for(r=e;++u<i;)null!=(e=t(n[u],u,n))&&r>e&&(r=e);return r}(n,p),r=new Array(e);++t<e;)for(var i,u=-1,o=r[t]=new Array(i);++u<i;)o[u]=n[u][t];return r};function p(n){return n.length}},v1FA:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=function(n){return n},i=function(n){if(null==n)return r;var t,e,i=n.scale[0],u=n.scale[1],o=n.translate[0],c=n.translate[1];return function(n,r){r||(t=e=0);var a=2,l=n.length,f=new Array(l);for(f[0]=(t+=n[0])*i+o,f[1]=(e+=n[1])*u+c;a<l;)f[a]=n[a],++a;return f}},u=function(n,t){return"string"===typeof t&&(t=n.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return o(n,t)}))}:o(n,t)};function o(n,t){var e=t.id,r=t.bbox,i=null==t.properties?{}:t.properties,u=c(n,t);return null==e&&null==r?{type:"Feature",properties:i,geometry:u}:null==r?{type:"Feature",id:e,properties:i,geometry:u}:{type:"Feature",id:e,bbox:r,properties:i,geometry:u}}function c(n,t){var e=i(n.transform),r=n.arcs;function u(n,t){t.length&&t.pop();for(var i=r[n<0?~n:n],u=0,o=i.length;u<o;++u)t.push(e(i[u],u));n<0&&function(n,t){for(var e,r=n.length,i=r-t;i<--r;)e=n[i],n[i++]=n[r],n[r]=e}(t,o)}function o(n){return e(n)}function c(n){for(var t=[],e=0,r=n.length;e<r;++e)u(n[e],t);return t.length<2&&t.push(t[0]),t}function a(n){for(var t=c(n);t.length<4;)t.push(t[0]);return t}function l(n){return n.map(a)}return function n(t){var e,r=t.type;switch(r){case"GeometryCollection":return{type:r,geometries:t.geometries.map(n)};case"Point":e=o(t.coordinates);break;case"MultiPoint":e=t.coordinates.map(o);break;case"LineString":e=c(t.arcs);break;case"MultiLineString":e=t.arcs.map(c);break;case"Polygon":e=l(t.arcs);break;case"MultiPolygon":e=t.arcs.map(l);break;default:return null}return{type:r,coordinates:e}}(t)}}}]);
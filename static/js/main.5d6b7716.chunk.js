(this.webpackJsonpstonks=this.webpackJsonpstonks||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),i=n.n(c),s=n(10),r=n.n(s),j=(n(63),n(21)),o=(n(64),n(27)),l=n.n(o),d=n(86),h=n(120),b=n(121),u=n(122),O=n(123),g=n(124),x=n(125),p=n(126),f=n(129),m=n(130),v=n(128),k=n(53),y=n(127),w=Object(k.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}}),C=function(e){var t=e.userInfo;return Object(a.jsxs)("div",{style:{padding:w.spacing(12)},children:[Object(a.jsx)(d.a,{variant:"h2",children:t.title}),Object(a.jsx)(d.a,{variant:"",children:t.description}),Object(a.jsx)(d.a,{variant:"",children:Object(a.jsx)(h.a,{href:t.link,children:t.link})}),Object(a.jsxs)(d.a,{variant:"body2",children:["Page built using ",Object(a.jsx)(h.a,{href:"https://withlaguna.com/",children:"Laguna"})]})]})},I=function(e){var t=e.holdings;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{align:"left",variant:"h5",children:"Current holdings"}),Object(a.jsxs)(b.a,{size:"small",style:{paddingBottom:w.spacing(4)},children:[Object(a.jsx)(u.a,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(g.a,{children:"Ticker"}),Object(a.jsx)(g.a,{children:"Name"}),Object(a.jsx)(g.a,{children:"Amount Held (USD)"}),Object(a.jsx)(g.a,{children:"Total percentage return"})]})}),Object(a.jsx)(x.a,{children:t.map((function(e){if(e.ticker_symbol.includes("CUR:"))return Object(a.jsx)(a.Fragment,{});var t,n=e.institution_value/e.cost_basis-1,c=e.institution_value;return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(g.a,{children:e.ticker_symbol}),Object(a.jsx)(g.a,{children:e.name}),Object(a.jsxs)(g.a,{children:["$",c.toFixed(2)]}),Object(a.jsx)(g.a,{children:(t=n,"".concat((100*t).toFixed(2),"%"))})]})}))})]})]})},F=function(e){var t=e.userInfo,n=Object(c.useState)(!1),i=Object(j.a)(n,2),s=i[0],r=i[1],o=Object(c.useState)(""),h=Object(j.a)(o,2),b=h[0],u=h[1],O=Object(c.useState)(!1),g=Object(j.a)(O,2),x=g[0],v=g[1];console.log("userInfo",t);return Object(a.jsxs)(p.a,{style:{padding:w.spacing(2),margin:w.spacing(12),backgroundColor:"white"},children:[Object(a.jsx)(d.a,{variant:"h6",children:"Get texted as soons as Rob makes a trade"}),s?Object(a.jsx)(d.a,{children:"Thanks for subscribing :)"}):Object(a.jsxs)("form",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)(f.a,{id:"phone",lable:"Phone number",variant:"filled",value:b,onChange:function(e){return u(e.target.value)},placeholder:"555-555-5555",helperText:x?"Please enter the right phone number":"By submitting, you agree to data usage terms",error:x}),Object(a.jsx)(m.a,{variant:"contained",onClick:function(e){v(!1),r(!0),l.a.post("https://api.withlaguna.com/stonks/submit",{owner_id:t.id,phone:b}).then((function(e){r(!0)})).catch((function(){r(!1),v(!0),u("")}))},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:w.spacing(4)},children:"Get notified"})]})]})},S=function(e){var t=e.trades.filter((function(e){return e.trade_date})).slice(0,3);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{align:"left",variant:"h5",children:"Three most recent trades"}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(g.a,{children:"Date"}),Object(a.jsx)(g.a,{children:"Ticker"}),Object(a.jsx)(g.a,{children:"Quantity (shares)"}),Object(a.jsx)(g.a,{children:"Price (USD)"})]})}),Object(a.jsx)(x.a,{children:t.map((function(e){return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(g.a,{children:e.trade_date.split(" ")[0]}),Object(a.jsx)(g.a,{children:e.ticker}),Object(a.jsx)(g.a,{children:e.quantity}),Object(a.jsxs)(g.a,{children:["$",e.price]})]})}))})]})]})};function A(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{variant:"h5",style:{color:"white",padding:w.spacing(2)},children:"Interested in having your own page?"}),Object(a.jsx)(m.a,{href:"https://airtable.com/shr3XDgLgKL6AoCgy",style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},children:"Join Laguna"})]})}var T=function(){Object(c.useEffect)((function(){x()}),[]);var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),r=Object(j.a)(s,2),o=r[0],d=r[1],h=Object(c.useState)([]),b=Object(j.a)(h,2),u=b[0],O=b[1],g=window.location.host.split(".")[0],x=function(){l.a.get("https://api.withlaguna.com/stonks/holdings").then((function(e){i(e.data.holdings)})),l.a.get("https://api.withlaguna.com/stonks/trades").then((function(e){d(e.data.trades)})),l.a.get("https://api.withlaguna.com/stonks/userinfo/".concat(g)).then((function(e){O(e.data)}))};return Object(a.jsx)(y.a,{theme:w,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{style:{backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},children:Object(a.jsxs)(v.a,{maxWidth:"md",children:[Object(a.jsx)(C,{userInfo:u}),Object(a.jsx)(S,{trades:o}),Object(a.jsx)(F,{userInfo:u}),Object(a.jsx)(I,{holdings:n})]})}),Object(a.jsx)("div",{style:{backgroundColor:"black",padding:w.spacing(12)},children:Object(a.jsx)(v.a,{children:Object(a.jsx)(A,{})})})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),_()}},[[85,1,2]]]);
//# sourceMappingURL=main.5d6b7716.chunk.js.map
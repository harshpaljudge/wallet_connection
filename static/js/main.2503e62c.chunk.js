(this.webpackJsonpwallet_connection=this.webpackJsonpwallet_connection||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),s=t(4),i=t.n(s),a=(t(9),t(2)),d=t(0);var r=function(){var e=Object(o.useState)(""),n=Object(a.a)(e,2),t=n[0],c=n[1],s=Object(o.useState)(""),i=Object(a.a)(s,2),r=i[0],l=i[1],u=Object(o.useState)(""),b=Object(a.a)(u,2),w=b[0],j=b[1],h=Object(o.useState)(""),O=Object(a.a)(h,2),x=O[0],f=O[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){window.tronWeb&&window.tronWeb.defaultAddress.base58&&(t=window.tronWeb.defaultAddress.base58,c(t))},children:"Connect to TronLink"}),Object(d.jsx)("button",{onClick:function(){if(window.ethereum){window.ethereum.request({method:"eth_requestAccounts"}),w=window.ethereum.selectedAddress,j(w);var e=window.ethereum.chainId;"0x13881"===e?l(r="Polygon Matic"):"0x61"===e?l(r="Binance"):"0x1"===e?l(r="Ethereum Main Net"):"0x3"===e?l(r="Ropsten Test Net"):"0x4"===e&&l(r="Rinkeby Test Net")}},children:"Connect to MetaMask"}),Object(d.jsx)("button",{onClick:function(){window.solana.connect(),window.solana.request({method:"connect"}),window.solana.on("connect",(function(){return console.log("connected!")})),null!=window.solana.publicKey&&(x=window.solana.publicKey.toString(),f(x))},children:"Connect to Solana"}),Object(d.jsxs)("h1",{children:[" Tron Address: ",t]}),Object(d.jsxs)("h1",{children:[" MetaMask Address(",r,"): ",w]}),Object(d.jsxs)("h1",{children:[" Solana Address: ",x]})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.2503e62c.chunk.js.map
(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{28:function(a,e,t){a.exports=t(42)},33:function(a,e,t){},34:function(a,e,t){},35:function(a,e,t){},40:function(a,e,t){},42:function(a,e,t){"use strict";t.r(e);var c=t(0),l=t.n(c),r=t(14),n=t.n(r),o=(t(33),t(34),t(13)),s=t(3),i=(t(35),t(10));var u=Object(i.b)((function(a){return{productState:a.productState}}),{addCocabella:function(){return function(a){a({type:"ADD_COCABELLA"})}},addItalian:function(){return function(a){a({type:"ADD_ITALIAN"})}},addKesterata:function(){return function(a){a({type:"ADD_KESTERATA"})}},addMargharita:function(){return function(a){a({type:"ADD_MARGHARITA"})}},addMocarello:function(){return function(a){a({type:"ADD_MOCARELLO"})}},addNamelita:function(){return function(a){a({type:"ADD_NAMELITA"})}},addTartufata:function(){return function(a){a({type:"ADD_TARTUFATA"})}},addTwenky:function(){return function(a){a({type:"ADD_TWENKY"})}},removeCocabella:function(){return function(a){a({type:"REMOVE_COCABELLA"})}},removeItalian:function(){return function(a){a({type:"REMOVE_ITALIAN"})}},removeMargharita:function(){return function(a){a({type:"REMOVE_MARGHARITA"})}},removeNamelita:function(){return function(a){a({type:"REMOVE_NAMELITA"})}},removeTwenky:function(){return function(a){a({type:"REMOVE_TWENKY"})}},removeTartufata:function(){return function(a){a({type:"REMOVE_TARTUFATA"})}},removeMocarello:function(){return function(a){a({type:"REMOVE_MOCARELLO"})}},removeKesterata:function(){return function(a){a({type:"REMOVE_KESTERATA"})}},addToCart:function(a){return console.log(a),function(e){e({type:"ADD_TO_CART",payload:a})}}})((function(a){var e=a.productState,t=a.addToCart,c=a.addMocarello,r=a.removeMocarello,n=a.addTartufata,o=a.removeTartufata,s=a.addMargharita,i=a.removeMargharita,u=a.addItalian,m=a.removeItalian,p=a.addCocabella,E=a.removeCocabella,d=a.addTwenky,b=a.removeTwenky,N=a.addKesterata,g=a.removeKesterata,O=a.addNamelita,T=a.removeNamelita;return l.a.createElement("div",{className:"catalog-grid"},l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Mocarello.img,".png"),alt:"hello"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Mocarello.name),l.a.createElement("span",{className:"price-dollars"},e.Mocarello.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Mocarello.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:c,alt:"hello"}),l.a.createElement("div",null,e.Mocarello.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",alt:"hello",onClick:0===e.Mocarello.count?null:r})),l.a.createElement("button",{className:"button",onClick:e.Mocarello.count>0?function(){return t(e.Mocarello)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Tartufata.img,".png"),alt:"h"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Tartufata.name),l.a.createElement("span",{className:"price-dollars"},e.Tartufata.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Tartufata.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:n,alt:"sh"}),l.a.createElement("div",null,e.Tartufata.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Tartufata.count?null:o,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Tartufata.count>0?function(){return t(e.Tartufata)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Margharita.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Margharita.name),l.a.createElement("span",{className:"price-dollars"},e.Margharita.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Margharita.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:s,alt:"sh"}),l.a.createElement("div",null,e.Margharita.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Margharita.count?null:i,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Margharita.count>0?function(){return t(e.Margharita)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Italian.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Italian.name),l.a.createElement("span",{className:"price-dollars"},e.Italian.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Italian.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:u,alt:"sh"}),l.a.createElement("div",null,e.Italian.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Italian.count?null:m,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Italian.count>0?function(){return t(e.Italian)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Cocabella.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Cocabella.name),l.a.createElement("span",{className:"price-dollars"},e.Cocabella.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Cocabella.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:p,alt:"sh"}),l.a.createElement("div",null,e.Cocabella.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Cocabella.count?null:E,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Cocabella.count>0?function(){return t(e.Cocabella)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Twenky.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Twenky.name),l.a.createElement("span",{className:"price-dollars"},e.Twenky.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Twenky.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:d,alt:"sh"}),l.a.createElement("div",null,e.Twenky.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Twenky.count?null:b,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Twenky.count>0?function(){return t(e.Twenky)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Kesterata.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Kesterata.name),l.a.createElement("span",{className:"price-dollars"},e.Kesterata.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Kesterata.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:N,alt:"sh"}),l.a.createElement("div",null,e.Kesterata.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Kesterata.count?null:g,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Kesterata.count>0?function(){return t(e.Kesterata)}:null},"Add to cart")))),l.a.createElement("div",{className:"pizza-type"},l.a.createElement("div",{className:"product-item"},l.a.createElement("img",{src:"./images/".concat(e.Namelita.img,".png"),alt:"sh"}),l.a.createElement("div",{className:"product-list"},l.a.createElement("h3",null,e.Namelita.name),l.a.createElement("span",{className:"price-dollars"},e.Namelita.price.dollars," dollars"),l.a.createElement("span",{className:"price-dollars"},e.Namelita.price.euros," euros"),l.a.createElement("div",{className:"count"},l.a.createElement("img",{src:"./images/plus.png",className:"plus",onClick:O,alt:"sh"}),l.a.createElement("div",null,e.Namelita.count),l.a.createElement("img",{src:"images/minus.webp",className:"minus",onClick:0===e.Namelita.count?null:T,alt:"sh"})),l.a.createElement("button",{className:"button",onClick:e.Namelita.count>0?function(){return t(e.Namelita)}:null},"Add to cart")))))})),m=t(26);t(40);var p=Object(i.b)((function(a){return{cartState:a.cartState}}))((function(a){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),r=t[0],n=t[1],o=0,s=0,i=0;return a.cartState.forEach((function(a){o+=a.count,s+=a.costDollars,i+=a.costEuros})),s+=30,i+=15,l.a.createElement("div",{className:"cart"},l.a.createElement("div",{className:"left-content"},a.cartState.length>0?a.cartState.map((function(a,e){return l.a.createElement("div",{key:e,className:"pizza-item"},l.a.createElement("img",{src:"./images/".concat(a.img,".png"),alt:""}),l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti quia voluptate, voluptatem nobis sequi."),l.a.createElement("span",{className:"pizza-count"},a.count),l.a.createElement("span",null,a.costDollars," $"),l.a.createElement("span",null,a.costEuros," \u20ac")))})):l.a.createElement("h1",null,"Add some pizzas in cart")),l.a.createElement("div",{className:"right-content"},l.a.createElement("form",null,l.a.createElement("span",null,"Write your address"),l.a.createElement("input",{type:"text"}),l.a.createElement("span",null,"Name, surname etc..."),l.a.createElement("input",{type:"text"}),l.a.createElement("span",null,"Email"),l.a.createElement("input",{type:"email"}),l.a.createElement("span",null,"Products: ",o),l.a.createElement("span",null,"Cost $: ",s," $ (delivery: ",30," $)"),l.a.createElement("span",null,"Cost \u20ac: ",i," \u20ac (delivery: ",15," \u20ac)"),l.a.createElement("button",{onClick:function(a){a.preventDefault(),n(!0)}},"Order")),l.a.createElement("div",{className:!0===r?"blackout":"hidden"})),l.a.createElement("div",{className:"".concat(!0===r?"show":"hidden"," order-modal")},l.a.createElement("div",{className:"order-modal-overlay"},l.a.createElement("span",null,"Wait for your pizza :D"),l.a.createElement("span",{className:"close-modal",onClick:function(){return n(!1)}},"X"))))})),E=t(8),d=t(24),b=t(25),N=t(1),g={Mocarello:{img:"Pizza",count:1,name:"Mocarello",price:{dollars:40,euros:25},costDollars:40,costEuros:25},Tartufata:{img:"Pizza",count:1,name:"Tartufata",price:{dollars:45,euros:30},costDollars:45,costEuros:30},Margharita:{img:"Pizza",count:1,name:"Margharita",price:{dollars:50,euros:35},costDollars:50,costEuros:35},Italian:{img:"Pizza",count:1,name:"Italian",price:{dollars:27,euros:12},costDollars:27,costEuros:12},Cocabella:{img:"Pizza",count:1,name:"Cocabella",price:{dollars:60,euros:45},costDollars:60,costEuros:45},Twenky:{img:"Pizza",count:1,name:"Twenky",price:{dollars:50,euros:37},costDollars:50,costEuros:37},Kesterata:{img:"Pizza",count:1,name:"Kesterata",price:{dollars:50,euros:35},costDollars:50,costEuros:35},Namelita:{img:"Pizza",count:1,name:"Namelita",price:{dollars:100,euros:85},costDollars:100,costEuros:85}},O=t(27),T=[],f=Object(E.combineReducers)({productState:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_MOCARELLO":return Object(N.a)(Object(N.a)({},a),{},{Mocarello:Object(N.a)(Object(N.a)({},a.Mocarello),{},{count:a.Mocarello.count+1,costDollars:(a.Mocarello.count+1)*a.Mocarello.price.dollars,costEuros:(a.Mocarello.count+1)*a.Mocarello.price.euros})});case"REMOVE_MOCARELLO":return Object(N.a)(Object(N.a)({},a),{},{Mocarello:Object(N.a)(Object(N.a)({},a.Mocarello),{},{count:a.Mocarello.count-1,costDollars:(a.Mocarello.count-1)*a.Mocarello.price.dollars,costEuros:(a.Mocarello.count-1)*a.Mocarello.price.euros})});case"ADD_TARTUFATA":return Object(N.a)(Object(N.a)({},a),{},{Tartufata:Object(N.a)(Object(N.a)({},a.Tartufata),{},{count:a.Tartufata.count+1,costDollars:(a.Tartufata.count+1)*a.Tartufata.price.dollars,costEuros:(a.Tartufata.count+1)*a.Tartufata.price.euros})});case"REMOVE_TARTUFATA":return Object(N.a)(Object(N.a)({},a),{},{Tartufata:Object(N.a)(Object(N.a)({},a.Tartufata),{},{count:a.Tartufata.count-1,costDollars:(a.Tartufata.count-1)*a.Tartufata.price.dollars,costEuros:(a.Tartufata.count-1)*a.Tartufata.price.euros})});case"ADD_MARGHARITA":return Object(N.a)(Object(N.a)({},a),{},{Margharita:Object(N.a)(Object(N.a)({},a.Margharita),{},{count:a.Margharita.count+1,costDollars:(a.Margharita.count+1)*a.Margharita.price.dollars,costEuros:(a.Margharita.count+1)*a.Margharita.price.euros})});case"REMOVE_MARGHARITA":return Object(N.a)(Object(N.a)({},a),{},{Margharita:Object(N.a)(Object(N.a)({},a.Margharita),{},{count:a.Margharita.count-1,costDollars:(a.Margharita.count-1)*a.Margharita.price.dollars,costEuros:(a.Margharita.count-1)*a.Margharita.price.euros})});case"ADD_ITALIAN":return Object(N.a)(Object(N.a)({},a),{},{Italian:Object(N.a)(Object(N.a)({},a.Italian),{},{count:a.Italian.count+1,costDollars:(a.Italian.count+1)*a.Italian.price.dollars,costEuros:(a.Italian.count+1)*a.Italian.price.euros})});case"REMOVE_ITALIAN":return Object(N.a)(Object(N.a)({},a),{},{Italian:Object(N.a)(Object(N.a)({},a.Italian),{},{count:a.Italian.count-1,costDollars:(a.Italian.count-1)*a.Italian.price.dollars,costEuros:(a.Italian.count-1)*a.Italian.price.euros})});case"ADD_COCABELLA":return Object(N.a)(Object(N.a)({},a),{},{Cocabella:Object(N.a)(Object(N.a)({},a.Cocabella),{},{count:a.Cocabella.count+1,costDollars:(a.Cocabella.count+1)*a.Cocabella.price.dollars,costEuros:(a.Cocabella.count+1)*a.Cocabella.price.euros})});case"REMOVE_COCABELLA":return Object(N.a)(Object(N.a)({},a),{},{Cocabella:Object(N.a)(Object(N.a)({},a.Cocabella),{},{count:a.Cocabella.count-1,costDollars:(a.Cocabella.count-1)*a.Cocabella.price.dollars,costEuros:(a.Cocabella.count-1)*a.Cocabella.price.euros})});case"ADD_TWENKY":return Object(N.a)(Object(N.a)({},a),{},{Twenky:Object(N.a)(Object(N.a)({},a.Twenky),{},{count:a.Twenky.count+1,costDollars:(a.Twenky.count+1)*a.Twenky.price.dollars,costEuros:(a.Twenky.count+1)*a.Twenky.price.euros})});case"REMOVE_TWENKY":return Object(N.a)(Object(N.a)({},a),{},{Twenky:Object(N.a)(Object(N.a)({},a.Twenky),{},{count:a.Twenky.count-1,costDollars:(a.Twenky.count-1)*a.Twenky.price.dollars,costEuros:(a.Twenky.count-1)*a.Twenky.price.euros})});case"ADD_KESTERATA":return Object(N.a)(Object(N.a)({},a),{},{Kesterata:Object(N.a)(Object(N.a)({},a.Kesterata),{},{count:a.Kesterata.count+1,costDollars:(a.Kesterata.count+1)*a.Kesterata.price.dollars,costEuros:(a.Kesterata.count+1)*a.Kesterata.price.euros})});case"REMOVE_KESTERATA":return Object(N.a)(Object(N.a)({},a),{},{Kesterata:Object(N.a)(Object(N.a)({},a.Kesterata),{},{count:a.Kesterata.count-1,costDollars:(a.Kesterata.count-1)*a.Kesterata.price.dollars,costEuros:(a.Kesterata.count-1)*a.Kesterata.price.euros})});case"ADD_NAMELITA":return Object(N.a)(Object(N.a)({},a),{},{Namelita:Object(N.a)(Object(N.a)({},a.Namelita),{},{count:a.Namelita.count+1,costDollars:(a.Namelita.count+1)*a.Namelita.price.dollars,costEuros:(a.Namelita.count-1)*a.Mocarello.price.euros})});case"REMOVE_NAMELITA":return Object(N.a)(Object(N.a)({},a),{},{Namelita:Object(N.a)(Object(N.a)({},a.Namelita),{},{count:a.Namelita.count-1,costDollars:(a.Namelita.count-1)*a.Namelita.price.dollars,costEuros:(a.Namelita.count-1)*a.Namelita.price.euros})});default:return a}},cartState:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":return[].concat(Object(O.a)(a),[e.payload]);default:return a}}}),v=[d.a],A=Object(E.createStore)(f,{},Object(b.composeWithDevTools)(E.applyMiddleware.apply(void 0,v)));var M=function(a){return l.a.createElement(i.a,{store:A},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"nav"},l.a.createElement(o.b,{to:"catalog",className:"nav-link"},"Catalog"),l.a.createElement(o.b,{to:"cart",className:"nav-link"},"Cart"))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:u,hello:"aa"}),l.a.createElement(s.a,{path:"/catalog",component:u}),l.a.createElement(s.a,{path:"/cart",component:p})))))};n.a.render(l.a.createElement(o.a,{basename:"/pizza"},l.a.createElement(M,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f5fd7fd3.chunk.js.map
(this["webpackJsonpreact-store"]=this["webpackJsonpreact-store"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"products":[{"id":1,"manufacturer":"New Balance","name":"Liverpool 6 Times","sizes":["XS","S","M","L","XL","XXL"],"description":"Remember that magnificent night in Madrid with this Junior New Balance Liverpool 6 Times Football Shirt which is a replica of the jersey worn at the Wanda Metropolitano Stadium, however the top features six stars and the years The Reds have triumphed on Europe\'s biggest stage. The shirt also benefits from being engineered with NBdry technology which wicks sweat away from your skin to keep you feeling fresh and comfortable and the New Balance branding adds the finishing touch. ","images":["37861608_l-1.jpg","37861608_l-2.jpg"],"price":529,"timesSold":10},{"id":2,"manufacturer":"Adidas","name":"Manchester United Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Cheer on The Red Devils in style with the adidas Manchester United Home Shirt for the 2019/2020 campaign which features the iconic crest in gold which stands out against the black background so you can highlight your admiration for the Old Trafford club. The shirt benefits from being constructed with Climalite technology which wicks moisture away from your skin to keep you feeling fresh from the first whistle to the last and the iconic adidas branding completes the on-pitch look.","images":["37724808_l-1.jpg","37724808_l-2.jpg"],"price":629,"timesSold":19},{"id":3,"manufacturer":"Nike","name":"Barcelona Home Vapor Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"This Nike Barcelona Home Vapor Shirt 2019 2020 has been been developed with Vaporknit technology which wicks sweat away from your skin and dries extremely fast which allows you to reach the top of your game with ease. The shirt introduces a new check design for the 19/20 season which has taken inspiration for the iconic grid layout of the city, whilst the team crest and Nike Swoosh branding completes the Nou Camp look. ","images":["37714721_l-1.jpg","37714721_l-2.jpg"],"price":429,"timesSold":51},{"id":4,"manufacturer":"Adidas","name":"Real Madrid Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Show your support for Los Blancos with pride with this adidas Real Madrid Home Shirt 2019 2020 which benefits from being developed with Climalite technology which wicks sweat away from your skin to keep you feeling fresh and comfortable, whilst the iconic white shirt with gold detailing delivers a classically stylish look perfect for any fan of the Spanish capital club.","images":["37721501_l-1.jpg","37721501_l-2.jpg"],"price":579,"timesSold":42},{"id":5,"manufacturer":"Adidas","name":"Bayern Munich Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Support the Bavarian giants in style for the season ahead with this adidas Bayern Munich Home Shirt 2019 2020 which benefits from being crafted with Climalite technology which sweeps moisture away from your skin to maximise comfort throughout the entire game. The shirt features the iconic team crest of The FCB so all those around you know that your heart belongs in Munich and the adidas branding completes the on-pitch look. ","images":["37720708_l-1.jpg","37720708_l-2.jpg"],"price":479,"timesSold":99},{"id":6,"manufacturer":"Puma","name":"Borussia Dortmund Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Cheer on The BVB in style with this Puma Borussia Dortmund Home Shirt 2019 2020 which benefits from being developed with dryCELL technology which wicks sweat away from your skin and dry\'s quickly to maximises comfort all-game long. The shirt features a stylish print on the sleeves to assist the team crest and Puma branding to deliver a fashionable look for the season ahead. ","images":["37713513_l-1.jpg","37713513_l-2.jpg","37713513_l-3.jpg","37713513_l-4.jpg"],"price":599,"timesSold":39}]}')},,,,,,,,,,function(e,t,a){e.exports=a(45)},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),n=a.n(r),c=a(17),i=a.n(c),s=a(11),o=(a(27),a(4)),l=a(7),m=a(2);a(28);var u=function(){return n.a.createElement("div",{className:"site-logo"},n.a.createElement("img",{className:"logo-img",src:"./static/images/logo.png",alt:""}),n.a.createElement("div",{className:"logo-wrapper"},n.a.createElement("h2",{className:"logo-text"},"Compass Shop"),n.a.createElement("h6",{className:"logo-subtext"},"for DEDICATED fans")))},d=n.a.createContext(),p=d.Provider,h=(d.Consumer,d);var f=function(){var e=Object(r.useContext)(h),t=Object(m.a)(e,1)[0].cart;return n.a.createElement("nav",{className:"nav nav-header"},n.a.createElement("ul",{className:"nav-list"},n.a.createElement("li",{className:"nav-item cart"},n.a.createElement(o.b,{to:"/test-repo/cart"},n.a.createElement("i",{className:"fas fa-shopping-cart",htmlFor:"cart-cb"},n.a.createElement("span",{className:"cart-size"},t.reduce((function(e,t){return e+t.productQty}),0)))))))};var E=function(){var e=Object(r.useContext)(h),t=Object(m.a)(e,2),a=(t[0].cart,t[1]);return n.a.createElement("header",null,n.a.createElement("div",{className:"site-header",onLoad:function(){null!==JSON.parse(localStorage.getItem("cartData"))&&a({type:"LOAD_CART_FROM_STORAGE",item:JSON.parse(localStorage.getItem("cartData"))})}},n.a.createElement(o.b,{to:"/test-repo/"},n.a.createElement(u,null)),n.a.createElement(f,null)))};a(34);var g=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"site-footer"},"Footer"))};a(35),a(36);var b=function(e){var t=e.image,a=e.imageClass;return n.a.createElement("span",{className:a},n.a.createElement("img",{src:"./static/images/"+t,alt:"",onError:function(e){e.target.src="./static/images/error.png"}}))};var y=function(e){var t=e.product;return n.a.createElement(o.b,{className:"product-card",to:"/test-repo/products/".concat(t.id)},n.a.createElement("span",{className:"card-inner"},n.a.createElement("div",{className:"details"},"Details"),n.a.createElement(b,{image:t.images[0],imageClass:"card-media"}),n.a.createElement("span",{className:"card-meta"},n.a.createElement("p",{className:"manufacturer"},t.manufacturer),n.a.createElement("h6",null,t.name)),n.a.createElement("span",{className:"card-footer"},n.a.createElement("h6",{className:"price"},t.price," DKK"))))},N=n.a.createContext(),v=N.Provider,S=(N.Consumer,N);var w=function(e){document.title="Compass Store";var t=e.products,a=Object(r.useContext)(S),c=Object(m.a)(a,2),i=c[0].sort,s=c[1],o=Object(r.useState)(i.criteria),l=Object(m.a)(o,2),u=l[0],d=l[1],p=Object(r.useState)(i.direction),h=Object(m.a)(p,2),f=h[0],E=h[1],g=function(){t.sort((function(e,t){return"desc"===f?t[u]-e[u]:e[u]-t[u]}))};return g(),n.a.createElement("div",{className:"product-list-container",onLoad:function(){null!==localStorage.getItem("sortData")&&s({type:"LOAD_SORT_FROM_STORAGE",data:localStorage.getItem("sortData")}),d(i.criteria),E(i.direction)}},n.a.createElement("h1",{className:"list-title"},"Our Products"),n.a.createElement("div",{className:"sort-wrapper"},n.a.createElement("label",{className:"sort-label",htmlFor:"sort-options"},"Sort by:"),n.a.createElement("select",{value:u+"-"+f,className:"sort-options",id:"sort-options",onChange:function(e){var t=e.target.value.split("-"),a=Object(m.a)(t,2),r=a[0],n=a[1];d(r),E(n),s({type:"SORT",criteria:r,direction:n}),g()}},n.a.createElement("option",{value:"timesSold-desc"},"by Popularity (Desc)"),n.a.createElement("option",{value:"timesSold-asc"},"by Popularity (Asc)"),n.a.createElement("option",{value:"price-desc"},"by Price (Desc)"),n.a.createElement("option",{value:"price-asc"},"by Price (Asc)")),n.a.createElement("div",{htmlFor:"sort-options",className:"arrow"},n.a.createElement("i",{className:"fas fa-sort-down"}))),n.a.createElement("div",{className:"product-list"},t.map((function(e){return n.a.createElement(y,{key:e.id,product:e})}))))};a(37);var C=function(e){var t=e.images,a=e.handleThumbImageClick;return n.a.createElement("span",{className:"image-thumbs"},t.map((function(e,t){return n.a.createElement("label",{key:e,className:"image-label"},0===t?n.a.createElement("input",{className:"image-radio",type:"radio",name:"image-radio",id:e,defaultChecked:!0}):n.a.createElement("input",{className:"image-radio",type:"radio",name:"image-radio",id:e}),n.a.createElement("div",{className:"image-placeholder",onClick:function(){return a(e)}},n.a.createElement(b,{image:e,imageClass:"image-thumb",htmlFor:"image-radio"})))})))};a(38);var O=function(e){var t=e.sizes,a=e.handleSizeSelection;return n.a.createElement("div",{className:"size-list"},n.a.createElement("h6",{className:"size-list-title"},"This product is available in:"),n.a.createElement("div",{className:"label-list"},t.map((function(e){return n.a.createElement("label",{key:e,className:"size-label",id:e,onClick:function(){return a(e)}},n.a.createElement("button",{className:"size-radio",type:"radio",name:"size-radio",id:e}),n.a.createElement("span",{className:"size-item",htmlFor:"size-radio"},e))}))),n.a.createElement("div",{id:"size-warning"},"Please select a size"))};a(39);var T=function(e){var t=e.dataTestId,a=e.isDisabled,r=e.className,c=e.onClick,i=e.btnText,s=e.icon;return n.a.createElement("button",{"data-testid":t,disabled:a,className:r,onClick:c},s," ",i)},k=(a(40),function(e){var t,a=e.product,r=e.productQty,c=e.handleDecrement,i=e.handleIncrement;return t=a?a.productQty:r,n.a.createElement("span",{className:"product-item-qty"},t<2?n.a.createElement(T,{dataTestId:"decr",isDisabled:!0,className:"form-button product-table",onClick:function(){return c(a)},btnText:n.a.createElement("i",{className:"far fa-minus-square"})}):n.a.createElement(T,{dataTestId:"decr",isDisabled:!1,className:"form-button product-table",onClick:function(){return c(a)},btnText:n.a.createElement("i",{className:"far fa-minus-square"})}),n.a.createElement("span",{className:"qty-number"},t),n.a.createElement(T,{dataTestId:"incr",isDisabled:!1,className:"form-button product-table",onClick:function(){return i(a)},btnText:n.a.createElement("i",{className:"far fa-plus-square"})}))}),D=a(10),j=a.n(D),R={closeButton:!0,newestOnTop:!1,timeOut:1e3,progressBar:!0};function z(e,t){j.a.remove(),"success"!==e?"simpleError"!==e?Object.keys(t).forEach((function(a){t[a].length>0&&j.a[e](t[a].join("\n"),"Invalid ".concat(a),R)})):j.a.error(t.message,t.title,R):j.a[e](t.message,t.title,R)}var _=function(e){var t=e.match.params.id,a=s.products.filter((function(e){return e.id===+t}))[0];document.title="".concat(a.manufacturer," | ").concat(a.name);var c=Object(r.useState)(1),i=Object(m.a)(c,2),o=i[0],l=i[1],u=Object(r.useContext)(h),d=Object(m.a)(u,2),p=(d[0].cart,d[1]),f=Object(r.useState)(""),E=Object(m.a)(f,2),g=E[0],y=E[1],N=Object(r.useState)(a.images[0]),v=Object(m.a)(N,2),S=v[0],w=v[1];return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"product-details"},n.a.createElement("h3",{className:"manufacturer"},a.manufacturer),n.a.createElement("span",{className:"images"},n.a.createElement(b,{image:S,imageClass:"image-main"}),n.a.createElement(C,{images:a.images,handleThumbImageClick:function(e){w(e)}})),n.a.createElement("span",{className:"wrapper"},n.a.createElement("span",{className:"info-wrapper"},n.a.createElement("h5",null,a.name),n.a.createElement("h4",null,a.price," DKK"),n.a.createElement("h6",null,"Description"),n.a.createElement("p",null,a.description),n.a.createElement(O,{sizes:a.sizes,handleSizeSelection:function(e){y(e),document.getElementById("size-warning").classList.remove("visible"),Array.from(document.getElementsByClassName("size-label")).map((function(e){return e.classList.remove("selected")})),document.getElementById("".concat(e)).classList.add("selected")}})),n.a.createElement("span",{className:"qty-wrapper"},n.a.createElement(k,{productQty:o,handleDecrement:function(){o>1&&l(o-=1)},handleIncrement:function(){l(o+=1)}}),n.a.createElement(T,{isDisabled:!1,className:"form-button cart",onClick:function(){if(!g)return document.getElementById("size-warning").classList.add("visible"),void z("simpleError",{title:"Please select a size!"});z("success",{title:"".concat(a.name," added successfully to your cart.")}),p({type:"ADD_TO_CART",item:a,productQty:o,productSize:g})},btnText:"Add to cart"})))))},x=(a(43),a(44),function(e){return n.a.createElement("li",{className:"product-item header"},n.a.createElement("span",{className:"product-item-title"},"Product details"),n.a.createElement("span",{className:"product-item-sprice"},"Unit price"),n.a.createElement("span",{className:"product-item-qty"},"Quantity"),n.a.createElement("span",{className:"product-item-tprice"},"Total price"))}),L=function(e){var t=e.productTable,a=e.handleDecrement,r=e.handleIncrement;return n.a.createElement("ul",{className:"product-list-table"},n.a.createElement(x,null),t.map((function(t){return n.a.createElement("li",{key:t.id+t.productSize,className:"product-item data-row"},n.a.createElement("span",{className:"product-item-title"},n.a.createElement(o.b,{to:"/test-repo/products/"+t.id},n.a.createElement(b,{image:t.images[0],imageClass:"cart-image"}),n.a.createElement("div",{className:"title-info"},n.a.createElement("span",null,"Manufacturer: ",n.a.createElement("span",{className:"manufacturer"},t.manufacturer)),n.a.createElement("span",{className:"name"},t.name),n.a.createElement("span",null,"Size: ",n.a.createElement("span",{className:"size"},t.productSize)))),n.a.createElement(T,{isDisabled:!1,className:"form-button button-delete product-table",onClick:function(){return e.handleRemoveFromCart(t)},icon:n.a.createElement("i",{className:"far fa-trash-alt"}),btnText:"Remove this product"})),n.a.createElement("span",{className:"product-item-sprice"},t.price.toFixed(2)," DKK"),n.a.createElement(k,{product:t,handleDecrement:a,handleIncrement:r}),n.a.createElement("span",{className:"product-item-tprice"},t.totalPrice," DKK"))})))},I=function(){document.title="Compass Store | Cart";var e=Object(r.useContext)(h),t=Object(m.a)(e,2),a=t[0].cart,c=t[1],i=function(){c({type:"CHECKOUT"});var e=0;a.map((function(t){return e+=+t.totalPrice}))};return n.a.createElement("div",{className:"cart-wrapper"},0!==a.length?n.a.createElement(r.Fragment,null,n.a.createElement("h1",null,"Your shopping cart"),n.a.createElement(L,{source:"cart",productTable:a,handleRemoveFromCart:function(e){c({type:"REMOVE_FROM_CART",item:e})},handleCheckout:i,handleIncrement:function(e){c({type:"INCREMENT",item:e})},handleDecrement:function(e){c({type:"DECREMENT",item:e})}}),n.a.createElement("div",{className:"total-price-wrapper"},n.a.createElement("h4",null,n.a.createElement("span",{className:"text"},"Total Price: "),n.a.createElement("span",{className:"price"},function(e){var t=0;return e.map((function(e){return t+=+e.totalPrice})),t}(a).toFixed(2)," DKK")),n.a.createElement(T,{isDisabled:!1,className:"form-button cart",onClick:i,btnText:"Proceed to Checkout"}))):n.a.createElement(r.Fragment,null,n.a.createElement("h1",null,"Your cart is empty"),n.a.createElement(o.b,{to:"/"},n.a.createElement("h4",null,"Start shopping"))))},M=a(20),A={cart:[]},F=function(e,t){var a;t.item&&(a="ADD_TO_CART"===t.type?e.cart.findIndex((function(e){return e.id===t.item.id&&e.productSize===t.productSize})):e.cart.findIndex((function(e){return e.id===t.item.id&&e.productSize===t.item.productSize})));var r=function(){localStorage.removeItem("cartData")},n=function(e){localStorage.setItem("cartData",JSON.stringify(e))};switch(t.type){case"LOAD_CART_FROM_STORAGE":return e.cart=t.item,{cart:e.cart};case"ADD_TO_CART":if(a>-1)return e.cart[a].productQty+=t.productQty,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2),n(e.cart),{cart:e.cart};var c=Object(M.a)({},t.item);return c.productSize=t.productSize,c.productQty=t.productQty,c.totalPrice=(c.productQty*c.price).toFixed(2),e.cart.push(c),n(e.cart),{cart:e.cart};case"INCREMENT":return e.cart[a].productQty+=1,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2),n(e.cart),{cart:e.cart};case"DECREMENT":return e.cart[a].productQty>1&&(e.cart[a].productQty-=1,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2)),n(e.cart),{cart:e.cart};case"REMOVE_FROM_CART":return e.cart=e.cart.filter((function(e,t){return t!==a&&e})),e.cart.length>0?n(e.cart):r(),{cart:e.cart};case"CHECKOUT":return r(),{cart:[]};default:return e}},X={sort:{}},B=function(e,t){var a;switch(t.type){case"LOAD_SORT_FROM_STORAGE":return e.sort=JSON.parse(t.data),{sort:e.sort};case"SORT":return e.sort.criteria=t.criteria,e.sort.direction=t.direction,a=e.sort,localStorage.setItem("sortData",JSON.stringify(a)),{sort:e.sort};default:return e}};var P=function(){var e=Object(r.useReducer)(F,A),t=Object(r.useReducer)(B,X);return n.a.createElement("div",{className:"site-container"},n.a.createElement(o.a,null,n.a.createElement(p,{value:e},n.a.createElement(v,{value:t},n.a.createElement(E,null),n.a.createElement("main",{className:"site-main"},n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/test-repo/",render:function(){return n.a.createElement(w,{products:s.products})}}),n.a.createElement(l.a,{exact:!0,path:"/test-repo/products/:id",component:_}),n.a.createElement(l.a,{exact:!0,path:"/test-repo/cart",component:I}))),n.a.createElement(g,null)))))};i.a.render(n.a.createElement(P,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.6c4df3ea.chunk.js.map
(()=>{"use strict";var e,t={712:(e,t,n)=>{n(147);var r=l(n(294)),a=l(n(935)),u=n(954),o=l(n(566));function l(e){return e&&e.__esModule?e:{default:e}}var c=r.default.createElement(u.BrowserRouter,null,r.default.createElement(o.default,null));a.default.render(c,document.getElementById("contents"))},164:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement(a.Switch,null,r.default.createElement(a.Redirect,{exact:!0,from:"/",to:"/products"}),r.default.createElement(a.Route,{path:"/products",component:u.default}),r.default.createElement(a.Route,{path:"/view/:id",component:l.default}),r.default.createElement(a.Route,{path:"/edit/:id",component:o.default}),r.default.createElement(a.Route,{component:i}))};var r=c(n(294)),a=n(954),u=c(n(277)),o=c(n(563)),l=c(n(915));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("h1",{style:{color:"black"}},"Page Not Found")}},449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(294))&&r.__esModule?r:{default:r};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,n;function r(t){var n,r;return(n=e.call(this,t)||this).state={value:(r=t.value,null!=r?r.toString():"")},n.onBlur=n.onBlur.bind(o(n)),n.onChange=n.onChange.bind(o(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var c=r.prototype;return c.onChange=function(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})},c.onBlur=function(e){var t,n=this.props.onChange,r=this.state.value;n(e,(t=parseInt(r,10),Number.isNaN(t)?null:t))},c.render=function(){var e=this.state.value;return a.default.createElement("input",u({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))},r}(a.default.Component);t.default=c},566:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement(a.default,null)};var r=u(n(294)),a=u(n(164));function u(e){return e&&e.__esModule?e:{default:e}}},792:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(294)),a=u(n(697));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e){var t,n;function a(){var t;return c(o(t=e.call(this)||this),"handlePriceChange",(function(){t.setState({price:document.forms.productAdd.price.value})})),c(o(t),"handleSubmit",(function(e){e.preventDefault();var n=document.forms.productAdd,r=n.price.value.replace(/\$/g,""),a={Name:n.name.value,Price:r,Category:n.category.value,Image:n.imageurl.value},u=t.props.createProduct;t.setState({price:"$"}),n.name.value="",n.category.value="",n.imageurl.value="",u(a)})),t.state={price:"$"},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),a.prototype.render=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Add a new product to Inventory"),r.default.createElement("hr",null),r.default.createElement("form",{name:"productAdd",onSubmit:this.handleSubmit},r.default.createElement("div",{className:"formContainer"},r.default.createElement("div",{className:"formCol"},"Category"," ",r.default.createElement("br",null),r.default.createElement("select",{name:"category"},r.default.createElement("option",{value:""}),r.default.createElement("option",{value:"Shirts"},"Shirts"),r.default.createElement("option",{value:"Jeans"},"Jeans"),r.default.createElement("option",{value:"Jackets"}," Jackets"),r.default.createElement("option",{value:"Sweaters"},"Sweaters "),r.default.createElement("option",{value:"Accessories"},"Accessories")),r.default.createElement("br",null),"Product Name"," ",r.default.createElement("br",null),r.default.createElement("input",{type:"text",name:"name"}),r.default.createElement("br",null)),r.default.createElement("div",{className:"formCol"},"Price Per Unit"," ",r.default.createElement("br",null),r.default.createElement("input",{type:"text",name:"price",value:this.state.price,onChange:this.handlePriceChange}),r.default.createElement("br",null),"Image URL"," ",r.default.createElement("br",null),r.default.createElement("input",{type:"text",name:"imageurl"}),r.default.createElement("br",null))),r.default.createElement("input",{type:"submit",value:"Add Product",className:"submitButton"})))},a}(r.default.Component),d=i;t.default=d,i.propTypes={createProduct:a.default.func.isRequired}},563:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(294)),a=n(954),u=c(n(6)),o=c(n(449)),l=c(n(515));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function d(e,t,n,r,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){d(u,r,a,o,l,"next",e)}function l(e){d(u,r,a,o,l,"throw",e)}o(void 0)}))}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){var t,n;function c(){var t,n,r,a;return a=function(e,n){var r=e.target,a=r.name,u=r.value,o=void 0===n?u:n;t.setState((function(e){var t;return{product:s({},e.product,(t={},t[a]=o,t))}}))},(r="onChange")in(n=p(t=e.call(this)||this))?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,t.state={product:{}},t.handleSubmit=t.handleSubmit.bind(p(t)),t}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,m(t,n);var d=c.prototype;return d.componentDidMount=function(){this.loadData()},d.componentDidUpdate=function(e){var t=e.match.params.id;this.props.match.params.id!==t&&this.loadData()},d.handleSubmit=function(){var e=f(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.product,r=n.id,a=i(n,["id"]),e.next=6,(0,u.default)("mutation productUpdate(\n      $id: Int!\n      $modify: ProductUpdateInputs!\n    ) {\n      productUpdate(\n        id: $id\n        modify: $modify\n      ) {\n        id Category Name Price Image\n      }\n    }",{modify:a,id:r});case 6:(o=e.sent)&&(this.setState({product:o.productUpdate}),alert("Update Product Successfully"));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),d.loadData=function(){var e=f(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=4,(0,u.default)("query Product($id: Int!) {\n      Product(id: $id) {\n        id Name Price Category Image\n      }\n    }",{id:t});case 4:n=e.sent,this.setState({product:n.Product});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),d.render=function(){var e=this.state.product,t=e.Name,n=e.Price,u=e.Image,c=e.id,i=e.Category;return c?r.default.createElement("div",{style:{color:"black"}},r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement("h1",null,"Editing Product ID: "+c),r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"Name:"),r.default.createElement("td",null,r.default.createElement(l.default,{name:"Name",value:t,onChange:this.onChange,key:c}))),r.default.createElement("tr",null,r.default.createElement("td",null,"Category:"),r.default.createElement("td",null,r.default.createElement("select",{name:"Category",value:i,onChange:this.onChange},r.default.createElement("option",{value:"Shirt"},"Shirt"),r.default.createElement("option",{value:"Jeans"},"Jeans"),r.default.createElement("option",{value:"Jackets"},"Jackets"),r.default.createElement("option",{value:"Sweaters"},"Sweaters"),r.default.createElement("option",{value:"Accessories"},"Accessories")))),r.default.createElement("tr",null,r.default.createElement("td",null,"Price:"),r.default.createElement("td",null,r.default.createElement(o.default,{name:"Price",value:n,onChange:this.onChange,key:c}))),r.default.createElement("tr",null,r.default.createElement("td",null,"Image:"),r.default.createElement("td",null,r.default.createElement(l.default,{name:"Image",value:u,onChange:this.onChange,key:c}))),r.default.createElement("tr",null,r.default.createElement("td",null),r.default.createElement("td",null,r.default.createElement("button",{type:"submit"},"Submit"))))),r.default.createElement(a.Link,{to:"/edit/"+(c-1)},"Prev")," | ",r.default.createElement(a.Link,{to:"/edit/"+(c+1)},"Next"))):r.default.createElement("h1",null,"Loading Data...")},c}(r.default.Component);t.default=v},915:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(294)),a=u(n(6));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,n;function u(){var t;return(t=e.call(this)||this).state={product:{}},t}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var c=u.prototype;return c.componentDidMount=function(){this.loadData()},c.loadData=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=4,(0,a.default)("query Product($id: Int!) {\n      Product(id: $id) {\n        id Category Name Price Image\n      }\n    }",{id:t});case 4:(n=e.sent)?this.setState({product:n.Product}):this.setState({product:null});case 6:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){o(u,r,a,l,c,"next",e)}function c(e){o(u,r,a,l,c,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),c.render=function(){var e=this.state.product;return r.default.createElement("img",{style:{maxWidth:"100vw"},src:e.Image,alt:e.Name})},u}(r.default.Component);t.default=c},277:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(294)),a=l(n(883)),u=l(n(792)),o=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){c(u,r,a,o,l,"next",e)}function l(e){c(u,r,a,o,l,"throw",e)}o(void 0)}))}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){var t,n;function l(){var t;return(t=e.call(this)||this).state={products:[]},t.createProduct=t.createProduct.bind(d(t)),t.deleteProduct=t.deleteProduct.bind(d(t)),t}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,f(t,n);var c=l.prototype;return c.componentDidMount=function(){this.loadData()},c.loadData=function(){var e=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("query {\n      productList {\n        id Category Name Price Image\n      }\n    }");case 3:(t=e.sent)&&this.setState({products:t.productList});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),c.createProduct=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("mutation productAdd($product: ProductInputs!) {\n      productAdd(product: $product) {\n        id \n      }\n    }",{product:t});case 3:e.sent&&this.loadData();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),c.deleteProduct=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("mutation productDelete($id: Int!) {\n      productDelete(id: $id)\n    }",{id:t});case 3:if(e.sent.productDelete){e.next=7;break}return alert("Product deleted unsuccessfully"),e.abrupt("return",!1);case 7:return alert("Product deleted successfully"),this.loadData(),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),c.render=function(){var e=this.state.products;return r.default.createElement("div",{style:{color:"black"}},r.default.createElement(a.default,{products:e,deleteProduct:this.deleteProduct}),r.default.createElement(u.default,{createProduct:this.createProduct}))},l}(r.default.Component);t.default=s},185:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(294))&&r.__esModule?r:{default:r},u=n(954);t.default=function(e){var t=e.index,n=e.product,r=e.deleteProduct;return a.default.createElement("tr",{key:t,style:{textAlign:"center"}},a.default.createElement("td",{className:"table-col"},n.Name),a.default.createElement("td",{className:"table-col"},"$",n.Price),a.default.createElement("td",{className:"table-col"},n.Category),a.default.createElement("td",{className:"table-col"},a.default.createElement(u.Link,{to:"/view/"+n.id},"View")),a.default.createElement("td",null,a.default.createElement(u.Link,{to:"/edit/"+n.id},"Edit")," | ",a.default.createElement("button",{type:"button",onClick:function(){r(n.id)}},"Delete")))}},883:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(294)),a=u(n(185));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.products,n=e.deleteProduct;return r.default.createElement("div",null,r.default.createElement("h1",null,"Company Inventory"),r.default.createElement("p",null,"Showing available products"),r.default.createElement("hr",null),r.default.createElement("table",null,r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",{className:"table-col"},"Product Name"),r.default.createElement("th",{className:"table-col"},"Price"),r.default.createElement("th",{className:"table-col"},"Category"),r.default.createElement("th",{className:"table-col"},"Image"),r.default.createElement("th",{className:"table-col"},"Action"))),r.default.createElement("tbody",null,t.map((function(e,t){return r.default.createElement(a.default,{product:e,index:t,key:e.id,deleteProduct:n})})))))}},515:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(294))&&r.__esModule?r:{default:r};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,n;function r(t){var n,r;return(n=e.call(this,t)||this).state={value:(r=t.value,null!=r?r:"")},n.onBlur=n.onBlur.bind(o(n)),n.onChange=n.onChange.bind(o(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var c=r.prototype;return c.onChange=function(e){this.setState({value:e.target.value})},c.onBlur=function(e){var t;(0,this.props.onChange)(e,0===(t=this.state.value).trim().length?null:t)},c.render=function(){var e=this.state.value,t=this.props,n=t.tag,r=void 0===n?"input":n,o=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["tag"]);return a.default.createElement(r,u({},o,{value:e,onBlur:this.onBlur,onChange:this.onChange}))},r}(a.default.Component);t.default=c},6:(e,t)=>{function n(e,t,n,r,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var o=e.apply(t,r);function l(e){n(o,a,u,l,c,"next",e)}function c(e){n(o,a,u,l,c,"throw",e)}l(void 0)}))}}function a(){return(a=r(regeneratorRuntime.mark((function e(t,n){var r,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),e.next=3,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:n})});case 3:return r=e.sent,e.next=6,r.text();case 6:return a=e.sent,u=JSON.parse(a),e.abrupt("return",u.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return a.apply(this,arguments)}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.m=t,e=[],r.O=(t,n,a,u)=>{if(!n){var o=1/0;for(i=0;i<e.length;i++){for(var[n,a,u]=e[i],l=!0,c=0;c<n.length;c++)(!1&u||o>=u)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,u<o&&(o=u));l&&(e.splice(i--,1),t=a())}return t}u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[n,a,u]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,u,[o,l,c]=n,i=0;for(a in l)r.o(l,a)&&(r.m[a]=l[a]);for(c&&c(r),t&&t(n);i<o.length;i++)u=o[i],r.o(e,u)&&e[u]&&e[u][0](),e[o[i]]=0;r.O()},n=self.webpackChunkassignment5_ui=self.webpackChunkassignment5_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(712)));a=r.O(a)})();
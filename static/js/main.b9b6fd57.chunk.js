(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(9),n=c.n(s),i=(c(14),c(15),c(5)),r=c(6),l=c(8),d=c(2),o=c.n(d),j=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],u=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=h.find((function(t){return t.id===e.categoryId})),c=j.find((function(e){return e.id===t.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{category:t,user:c})})),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(i.a)(n,2),d=l[0],x=l[1],m=Object(a.useState)([]),O=Object(i.a)(m,2),f=O[0],p=O[1],y=function(e,t,c,a){var s=Object(r.a)(e),n=c.toLowerCase();return t&&(s=s.filter((function(e){return e.user.name===t}))),c&&(s=s.filter((function(e){return e.name.toLowerCase().includes(n)}))),a.length&&(s=s.filter((function(e){return a.includes(e.category.title)}))),s}(b,c,d,f);return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"Product Categories"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(u.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return s("")},className:o()({"is-active":""===c}),children:"All"}),j.map((function(e){return Object(u.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return s(e.name)},className:o()({"is-active":c===e.name}),children:e.name},e.id)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:d,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),d&&Object(u.jsx)("span",{className:"icon is-right",children:Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){x("")}})})]})}),Object(u.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(u.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button is-success mr-6",{"is-outlined":f.length}),onClick:function(){return p([])},children:"All"}),h.map((function(e){return Object(u.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":f.includes(e.title)}),href:"#/",onClick:function(){return f.includes(e.title)?p(function(e,t){return Object(r.a)(e).filter((function(e){return e!==t}))}(f,e.title)):p([].concat(Object(r.a)(f),[e.title]))},children:e.title},e.id)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),x(""),p([])},children:"Reset all filters"})})]})}),Object(u.jsx)("div",{className:"box table-container",children:y.length?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(u.jsx)("tbody",{children:y.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Product",children:[Object(u.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(u.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(u.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(u.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})}):Object(u.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b9b6fd57.chunk.js.map
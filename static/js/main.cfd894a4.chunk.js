(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),o=c.n(l),d=(c(10),c(11),c(3)),i=c.n(d),r=c(0),j={todo:{},hasChosen:!1},u=o.a.createContext({selectedTodo:{},setSelectedTodo:function(e){}}),b=function(e){var t=e.children,c=Object(l.useState)(j),s=Object(n.a)(c,2),a=s[0],o=s[1],d=Object(l.useMemo)((function(){return{selectedTodo:a,setSelectedTodo:o}}),[a]);return Object(r.jsx)(u.Provider,{value:d,children:t})},h=function(e){var t=e.todo,c=Object(l.useContext)(u),s=c.selectedTodo,a=c.setSelectedTodo,n=t.id,o=t.completed,d=t.title,j=s.hasChosen;return Object(r.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":j}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:n}),Object(r.jsx)("td",{className:"is-vcentered",children:o&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:i()({"has-text-danger":!o,"has-text-success":o}),children:d})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a({todo:t,hasChosen:!0})},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:i()("far",{"fa-eye":!j,"fa-eye-slash":j})})})})})]})},m=function(e){var t=e.todos;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(h,{todo:e})}))})]})},O=function(e){var t=e.query,c=e.setQuery,s=e.setStatus;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){s(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:t,"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})},x=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var v,p=function(){var e=Object(l.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),o=Object(n.a)(a,2),d=o[0],i=o[1],j=Object(l.useContext)(u),b=j.selectedTodo,h=j.setSelectedTodo,m=b.todo;Object(l.useEffect)((function(){var e;setTimeout((function(){i(!1)}),300),(e=m.userId,f("/users/".concat(e))).then(s)}),[m.userId]);return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),d?Object(r.jsx)(x,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(m.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){h({todo:m,hasChosen:!1})}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:m.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[m.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(v||(v={}));var N=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useContext)(u).selectedTodo,o=Object(l.useState)(!0),d=Object(n.a)(o,2),i=d[0],j=d[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),N=h[0],y=h[1],g=Object(l.useState)("all"),C=Object(n.a)(g,2),S=C[0],T=C[1];Object(l.useEffect)((function(){setTimeout((function(){j(!1)}),500),f("/todos").then(s)}),[]);var k=Object(l.useMemo)((function(){return c.filter((function(e){var t=N.trim();return e.title.toLowerCase().includes(t.toLowerCase())}))}),[N,c]),w=Object(l.useMemo)((function(){return k.filter((function(e){switch(S){case v.all:return e;case v.active:return!e.completed;case v.completed:return e.completed;default:return e}}))}),[S,k]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(O,{query:N,setQuery:y,setStatus:T})}),Object(r.jsxs)("div",{className:"block",children:[i&&Object(r.jsx)(x,{}),Object(r.jsx)(m,{todos:w})]})]})})}),a.hasChosen&&Object(r.jsx)(p,{})]})};a.a.render(Object(r.jsx)(b,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cfd894a4.chunk.js.map
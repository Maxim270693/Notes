(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(7),r=n.n(s),i=(n(19),n(20),n(3)),o=n(4),u=n(2),l=function(){return new Promise((function(t,e){return setTimeout((function(){var e=localStorage.getItem("app-state");if(null===e)t([]);else{var n=JSON.parse(e).notes.tasks;t(n)}}),1e3)}))},j=function(t){return new Promise((function(e,n){return setTimeout((function(){var c=localStorage.getItem("app-state");if(null===c)n("error");else{var a=JSON.parse(c);a.notes.tasks=[].concat(Object(o.a)(a.notes.tasks),[t]),localStorage.setItem("app-state",JSON.stringify(a)),e("ok")}}),1e3)}))},d=function(t){return new Promise((function(e,n){return setTimeout((function(){var c=localStorage.getItem("app-state");if(null===c)n("error");else{var a=JSON.parse(c);a.notes.tasks=a.notes.tasks.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{title:t.title}):e})),e("ok")}}),1e3)}))},b=function(t){return new Promise((function(e,n){return setTimeout((function(){var c=localStorage.getItem("app-state");if(null===c)n("error");else{var a=JSON.parse(c);a.notes.tasks=a.notes.tasks.filter((function(e){return e.id!==t})),e("ok")}}),1e3)}))},f={tasks:[],pinnedTasks:[],searchValue:"",searchTag:[],editMode:!1,title:""},O="GET-TASKS",p="ADD-TASK",h="DELETE-TASK",A="UPDATE-TASK",m="EDIT-MODE",g="PIN_TASK",k="DELETE-PIN-TASK",T="SET-SEARCH-TASK",v="SET-SEARCH-HASHTAG-TASK",N="SET-TITLE",S=function(t){return{type:k,id:t}},x=function(t){return{type:T,title:t}},C=function(t){return{type:v,title:t}},E=function(t){return{type:N,title:t}},I=function(){return function(t){l().then((function(e){t({type:O,payload:e})}))}},w=function(t){return function(e){j(t).then((function(n){e({type:p,payload:t})}))}},y=function(t,e){return function(n){d({id:t,title:e}).then((function(c){n(function(t,e){return{type:A,id:t,title:e}}(t,e))}))}},P=function(t){return function(e){b(t).then((function(n){e(function(t){return{type:h,id:t}}(t))}))}},B=n(28),F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB1VXRUcMwDFXoAu4nXzgTUP74NBMAE8AG7QaECaATNJ2A6wTNBniDhglwJwhPWBy5XuI4SfvRd/fOTirpWbWkJNQArbXBcg8+8KO8dqAF12VZ5tQDFwfBGVtsP8A9+AhOETTBmoJL0MBmBz5TJJK6ABYW2IAZArs2p5ptDrtXioFk0Ot0sFXgJ7iIdViBGfWEHO4bnHUZzjgLGgg+nNxjK/ji5+QvdCjeQT6oColwqgUNhBRIAZqgCAwtjcMX/fdTo8gxwNkE/y6XpukVjcM1WFJAxFZVdUPjoMmPnFYR7vA5DY3ue0SF7pVFcvIlaGgY+IDdo4VHg4wVRT0A+5eYRv6tLqTKDbUGtzL8YgQ4g4Xsgz6Tv41zrlBKXWL7hnWPZ9sS3OD3Fba34B35Sc4+G/g0Tu6kIYjGkpH/aFkhf1u4zA35flgi+6zmw/snFsX7slPkQIwrR0tgdrZtVdQldDTIRN7F3uv5CSV0ItTvaEIngrTElPV+AB2DhZkOK2XPAAAAAElFTkSuQmCC",D=n(1),V=a.a.memo((function(t){var e=Object(i.c)((function(t){return t.notes.searchValue})),n=Object(i.b)();return Object(D.jsxs)("div",{className:"search",children:[Object(D.jsx)("span",{className:"searchSpan",children:Object(D.jsx)("img",{className:"search-img",src:F,onClick:t.searchHandler,alt:"search"})}),Object(D.jsx)("input",{value:e,className:"searchInput",type:"text",onChange:function(t){return n(x(t.currentTarget.value))},placeholder:"Search"})]})})),L=n(6),J=n(13),X=a.a.memo((function(t){console.log("EDITABLESPAN");var e=Object(c.useState)(!1),n=Object(L.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(L.a)(r,2),o=i[0],u=i[1];return a?Object(D.jsx)("input",{className:"todo-row",value:o,onChange:function(t){return u(t.currentTarget.value)},onBlur:function(){return e=t.id,t.onChangeTaskTitle(e,o),void s(!1);var e},autoFocus:!0}):Object(D.jsx)("span",{className:"todo-row",onDoubleClick:function(){return t.id,s(!0),void u(t.title)},children:Object(D.jsx)(J.a,{className:"hashtag",onHashtagClick:function(){return alert("hello")},children:t.title})})})),H=n.p+"static/media/pinIcon.16f2bd29.png",K=a.a.memo((function(t){var e=t.task,n=t.removeTaskHandler,c=t.onChangeTaskTitle,a=t.isPined,s=void 0!==a&&a,r=Object(i.b)();return Object(D.jsx)("div",{className:"icons",children:Object(D.jsxs)("div",{className:"icons-blocks",children:[Object(D.jsx)(X,{title:e.title,id:e.id,task:e,onChangeTaskTitle:c}),Object(D.jsxs)("div",{className:"icons-block",children:[Object(D.jsx)("div",{className:"icons-block-pin",children:Object(D.jsx)("button",{className:"pin-icon-btn",onClick:function(){r(function(t,e){return{type:g,id:t,task:e}}(e.id,e))},children:Object(D.jsx)("img",{src:H,className:"pin-icon",alt:"pinIcon"})})}),Object(D.jsx)("div",{className:"icons-block-delete",children:Object(D.jsx)("button",{className:"delete-icon",onClick:function(){return n(e.id,s)},children:"X"})})]})]})})})),R=a.a.memo((function(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(L.a)(e,2),a=n[0],s=n[1];return Object(D.jsxs)("div",{className:"search",children:[Object(D.jsx)("span",{className:"searchSpan",children:Object(D.jsx)("img",{className:"search-img",onClick:function(){""!==a.trim()&&t(C(a))},src:F,alt:"search"})}),Object(D.jsx)("input",{value:a,className:"searchInput",type:"text",onChange:function(e){""===e.currentTarget.value&&t(C("")),s(e.currentTarget.value)},placeholder:"SearchHashtag"})]})})),G=a.a.memo((function(){var t=Object(i.c)((function(t){return t.notes.title})),e=Object(i.c)((function(t){return t.notes.tasks})),n=Object(i.c)((function(t){return t.notes.searchTag})),a=Object(i.c)((function(t){return t.notes.pinnedTasks})),s=Object(i.c)((function(t){return t.notes.searchValue})),r=Object(i.b)();Object(c.useEffect)((function(){r(I())}),[e,r]);var o=s?e.filter((function(t){return t.title.toLowerCase().includes(s.toLocaleLowerCase())})):e;n.length&&(o=o.filter((function(t){var e=!0;return n.forEach((function(n){e=e?t.title.toLowerCase().includes(n.toLocaleLowerCase()):e})),e})));var u=Object(c.useCallback)((function(){""!==s.trim()&&r(x(s))}),[r,s]),l=Object(c.useCallback)((function(t){""!==t.trim()&&(r(w({id:Object(B.a)(),title:t})),r(E("")))}),[r]),j=Object(c.useCallback)((function(t,e){r(y(t,e))}),[r]),d=Object(c.useCallback)((function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r(e?S(t):P(t))}),[r]);return Object(D.jsxs)("div",{className:"notes-app",children:[Object(D.jsx)("h1",{children:"Notes"}),Object(D.jsx)(V,{searchHandler:u}),Object(D.jsx)(R,{}),Object(D.jsxs)("div",{className:"notes-form",children:[Object(D.jsxs)("div",{className:"notes-wrapper",children:[Object(D.jsx)("input",{className:"notes-input",type:"text",value:t,placeholder:"Add notes",onChange:function(t){return r(E(t.currentTarget.value))},onKeyPress:function(e){"Enter"===e.code&&l(t.trim())}}),Object(D.jsx)("button",{onClick:function(){return l(t)},className:"notes-button",children:"Add notes"})]}),a.map((function(t){return Object(D.jsx)(K,{task:t,onChangeTaskTitle:j,removeTaskHandler:d,isPined:!0},t.id)})),e.length?Object(D.jsxs)("div",{className:"notes-list",children:[" ",o.map((function(t){return Object(D.jsx)(K,{task:t,onChangeTaskTitle:j,removeTaskHandler:d},t.id)}))]}):Object(D.jsx)("div",{className:"notes-text",children:" The notes list is empty "})]})]})}));var Q=function(){return console.log("APP"),Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(G,{})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))},M=n(9),Y=n(14),W=Object(M.b)({notes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(u.a)(Object(u.a)({},t),{},{tasks:e.payload});case p:return Object(u.a)(Object(u.a)({},t),{},{tasks:[e.payload].concat(Object(o.a)(t.tasks))});case h:return Object(u.a)(Object(u.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==e.id}))});case A:return Object(u.a)(Object(u.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}))});case g:if(!t.tasks.find((function(t){return t.id===e.id}))){var n=t.pinnedTasks.filter((function(t){return t.id!==e.id}));return Object(u.a)(Object(u.a)({},t),{},{pinnedTasks:n,tasks:[e.task].concat(Object(o.a)(t.tasks))})}var c=t.tasks.filter((function(t){return t.id!==e.id}));return Object(u.a)(Object(u.a)({},t),{},{tasks:c,pinnedTasks:[e.task].concat(Object(o.a)(t.pinnedTasks))});case k:return Object(u.a)(Object(u.a)({},t),{},{pinnedTasks:t.pinnedTasks.filter((function(t){return t.id!==e.id}))});case T:return Object(u.a)(Object(u.a)({},t),{},{searchValue:e.title});case v:return Object(u.a)(Object(u.a)({},t),{},{searchTag:e.title.split(" ")});case m:return Object(u.a)(Object(u.a)({},t),{},{editMode:e.editMode});case N:return Object(u.a)(Object(u.a)({},t),{},{title:e.title});default:return t}}}),z=Object(M.c)(W,function(){try{var t=localStorage.getItem("app-state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),Object(M.a)(Y.a));z.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("app-state",e)}catch(n){}}({notes:z.getState().notes})})),r.a.render(Object(D.jsx)(i.a,{store:z,children:Object(D.jsx)(Q,{})}),document.getElementById("root")),U()}},[[26,1,2]]]);
//# sourceMappingURL=main.4d4d7adc.chunk.js.map
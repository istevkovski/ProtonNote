(this.webpackJsonpprotonnote=this.webpackJsonpprotonnote||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=a(1),l=a(5),u=a.n(l),s=a(12),d=function(e){return new Promise((function(t,a){setTimeout(t,e)}))},m=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(1e3);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(1e3);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return{type:"SET_EDIT_NOTE",payload:e}},b=function(e){return{type:"SET_IS_LOADING",payload:e}},v=function(e){return{type:"CREATE_NOTE",payload:e}},p=function(e){return{type:"SET_ACTIVE_NOTE",payload:e}};function N(){var e=Object(i.c)((function(e){return e.general.isLoading})),t=Object(i.c)((function(e){return e.general.editMode})),a=Object(i.b)();return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"ProtonMail"),r.a.createElement("button",{className:"button button--link",onClick:function(){a({type:"SET_NEW_NOTE",payload:!0})},disabled:t||e},"New Note +"))}var O=a(32),w=a(53),g=a.n(w),h=a(54),j=a.n(h);function y(e){var t=e.color,a=void 0===t?"#333":t;return r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"pen",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{fill:a,d:"M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z"}))}function k(e){var t=e.color,a=void 0===t?"#333":t;return r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:a,d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882A15.895 15.895 0 0 1 416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z"}))}function _(e){var t=e.color,a=void 0===t?"#333":t;return r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{fill:a,d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"}))}function T(e){var t=e.color,a=void 0===t?"#333":t;return r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:a,d:"M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z"}))}function x(){return r.a.createElement("div",{className:"sk-folding-cube"},r.a.createElement("div",{className:"sk-cube1 sk-cube"}),r.a.createElement("div",{className:"sk-cube2 sk-cube"}),r.a.createElement("div",{className:"sk-cube4 sk-cube"}),r.a.createElement("div",{className:"sk-cube3 sk-cube"}))}function M(){var e=Object(i.c)((function(e){return e.general.isLoading})),t=Object(i.c)((function(e){return e.general.editMode})),a=Object(i.c)((function(e){return e.general.isNewNote})),c=Object(i.c)((function(e){return e.general.activeNoteId})),o=Object(i.c)((function(e){return e.general.activeNote})),l=Object(n.useState)(""),d=Object(O.a)(l,2),N=d[0],w=d[1],h=Object(n.useState)(""),M=Object(O.a)(h,2),I=M[0],S=M[1],C=Object(n.useRef)(!0),A=Object(i.b)();function z(){var e;A(a?(e={title:N,markdown:I},function(){var t=Object(s.a)(u.a.mark((function t(a,n){var r,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(b(!0)),r=e.title,c=e.markdown,t.next=4,m(c);case 4:o=t.sent,a(v({title:r,markdown:o}));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()):function(e,t,a){return{type:"UPDATE_NOTE",payload:{title:t,markdown:a,id:e}}}(c,N,I))}function L(){A(function(e){return function(t,a){t(function(e){return{type:"REMOVE_NOTE",payload:e}}(e));var n=a().general.activeNoteId;t(p(n))}}(c))}return Object(n.useEffect)((function(){C.current||function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(b(!0)),!o||a){e.next=9;break}return w(o.title),e.next=5,f(o.markdown);case 5:t=e.sent,S(t),e.next=11;break;case 9:w(""),S("");case 11:A(b(!1));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,t]),Object(n.useEffect)((function(){C&&(C.current=!1)}),[]),r.a.createElement("div",{className:"editor"},r.a.createElement("div",{className:"editor__title"},r.a.createElement("input",{type:"text",value:N,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{className:"editor__body"},e?r.a.createElement(x,null):t&&!e?r.a.createElement("textarea",{name:"editor__body",id:"editorNoteBody",value:I,onChange:function(e){return S(e.target.value)}}):r.a.createElement(g.a,{className:"markdown-editor",plugins:[j.a],rawSourcePos:!0,children:I}),r.a.createElement("div",{className:"editor__controls",disabled:e||void 0===o&&!t},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button button--icon",onClick:function(){return o?(w(o.title),S(o.markdown)):(w(""),S("")),void A(E(!1))}},r.a.createElement(_,null),r.a.createElement("p",null,"Cancel")),r.a.createElement("div",{className:"group"},r.a.createElement("button",{className:"button button--icon",onClick:function(){return z()}},r.a.createElement(k,null),r.a.createElement("p",null,"Save")),r.a.createElement("button",{className:"button button--icon",onClick:function(){return L()}},r.a.createElement(T,null),r.a.createElement("p",null,"Delete")))):r.a.createElement("button",{className:"button button--icon margin-auto--left",onClick:function(){return A(E(!0))}},r.a.createElement(y,null),r.a.createElement("p",null,"Edit")))))}function I(e){var t=e.title,a=e.active,n=e.id,c=e.disabled,o=Object(i.c)((function(e){return e.general.editMode})),l=Object(i.b)();return r.a.createElement("div",{className:"note ".concat(a?"note--active":""),onClick:function(){l(p(n))},disabled:Boolean(o&&(!a||c))},r.a.createElement("h2",{className:"note__title"},t))}function S(){var e=Object(i.c)((function(e){return e.general.isLoading})),t=Object(i.c)((function(e){return e.general.notes})),a=Object(i.c)((function(e){return e.general.activeNoteId}));return r.a.createElement("div",{className:"notelist"},t.map((function(t,n){return r.a.createElement(I,{title:t.title,key:"note_".concat(n),active:a===n,id:n,disabled:e})})))}function C(){var e=Object(i.b)(),t=[];return Object(n.useEffect)((function(){e(function(e){return{type:"UPDATE_NOTES",payload:e}}(t))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("main",null,r.a.createElement(S,{notes:t}),r.a.createElement(M,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(10),z=a(55),L=a(56),D=a(57),V=a(4),B={isLoading:!1,isNewNote:!1,editMode:!1,notes:[],activeNoteId:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EDIT_NOTE":return Object(V.a)(Object(V.a)({},e),{},{editMode:t.payload,isNewNote:!1});case"SET_NEW_NOTE":return Object(V.a)(Object(V.a)({},e),{},{isNewNote:t.payload,editMode:t.payload,activeNote:void 0});case"SET_IS_LOADING":return Object(V.a)(Object(V.a)({},e),{},{isLoading:t.payload});case"UPDATE_NOTES":return Object(V.a)(Object(V.a)({},e),{},{notes:t.payload,activeNote:t.payload[e.activeNoteId]});case"UPDATE_NOTE":return Object(V.a)(Object(V.a)({},e),{},{notes:e.notes.map((function(e,a){return a===t.payload.id?{title:t.payload.title,markdown:t.payload.markdown}:e})),activeNote:{title:t.payload.title,markdown:t.payload.markdown},activeNoteId:t.payload.id,editMode:!1});case"CREATE_NOTE":return Object(V.a)(Object(V.a)({},e),{},{notes:[].concat(Object(D.a)(e.notes),[t.payload]),activeNoteId:e.notes.length,activeNote:t.payload,editMode:!1,isNewNote:!1,isLoading:!1});case"REMOVE_NOTE":return Object(V.a)(Object(V.a)({},e),{},{activeNoteId:e.activeNoteId>0?e.activeNoteId-1:0,notes:e.notes.filter((function(e,a){return a!==t.payload})),editMode:!1});case"SET_ACTIVE_NOTE":return Object(V.a)(Object(V.a)({},e),{},{activeNoteId:t.payload,activeNote:e.notes[t.payload]});default:return e}},P=Object(A.combineReducers)({general:H}),R=Object(A.createStore)(P,Object(z.composeWithDevTools)(Object(A.applyMiddleware)(L.a)));a(164);o.a.render(r.a.createElement(i.a,{store:R},r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),document.getElementById("protonnote")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(165)}},[[58,1,2]]]);
//# sourceMappingURL=main.d64c41e6.chunk.js.map
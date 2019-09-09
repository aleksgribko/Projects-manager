(window["webpackJsonpredux-fiberbase"]=window["webpackJsonpredux-fiberbase"]||[]).push([[0],{214:function(e,t,a){e.exports=a(412)},219:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(86),l=a.n(c),i=(a(219),a(14)),o=a(29),s=a(6),u=a(133),m=a.n(u);a(224),a(227),a(229);m.a.initializeApp({apiKey:"AIzaSyBui4fDtGHkLFDwM9YquxC0WBMmP8bjiqg",authDomain:"project-planner-with-react.firebaseapp.com",databaseURL:"https://project-planner-with-react.firebaseio.com",projectId:"project-planner-with-react",storageBucket:"",messagingSenderId:"531862986710",appId:"1:531862986710:web:66e2a451f37ed4a66e4e77"});var p=m.a,d=Object(s.b)(null,function(e){return{signOut:function(){return e(function(e,t){p.auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return n.a.createElement("ul",{className:"right"},n.a.createElement("li",null,n.a.createElement(i.c,{to:"/create"},"New Project")),n.a.createElement("li",null,n.a.createElement("a",{onClick:e.signOut},"Log Out")),n.a.createElement("li",null,n.a.createElement(i.c,{to:"/",className:"btn btn-floating red lighten-1"},e.profile.initials)))}),f=function(){return n.a.createElement("ul",{className:"right"},n.a.createElement("li",null,n.a.createElement(i.c,{to:"/signup"},"Sign Up")),n.a.createElement("li",null,n.a.createElement(i.c,{to:"/signin"},"Log In")))},E=Object(s.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){return n.a.createElement("nav",{className:"nav-wrapper grey darken-3"},e.auth.isLoaded?n.a.createElement("div",{className:"container"},n.a.createElement(i.b,{to:"/",className:"brand-logo"},"AleksPlan"),e.auth.uid?n.a.createElement(d,{profile:e.profile}):n.a.createElement(f,null)):null)}),h=a(45),b=a.n(h),g=function(e){return n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"card z-depth-0"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},"Notifications"),n.a.createElement("ul",{className:"notification"},e.notifications&&e.notifications.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("span",{className:"pink-text"},e.user," "),n.a.createElement("span",null,e.content),n.a.createElement("div",{className:"grey-text note-date"},b()(e.time.toDate()).fromNow()))})))))},N={projects:[{id:"1",title:"help",content:"hep blah"},{id:"2",title:"help2",content:"hep blah2"},{id:"3",title:"help3",content:"hep blah3"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project:",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error:",t.err),e;default:return e}},O=function(e){var t=e.project;return console.log(t),n.a.createElement("div",{className:"card z-depth-0 project-summary"},n.a.createElement("div",{className:"card-content grey-text text-darken-3"},n.a.createElement("span",{className:"card-title"},t.title),n.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),n.a.createElement("p",{className:"grey-text"},b()(t.createdAt.toDate()).calendar())))},v=function(e){var t=e.projects;return n.a.createElement("div",{className:"poject-list section"},t&&t.map(function(e){return n.a.createElement(i.b,{to:"/project/".concat(e.id),key:e.id},n.a.createElement(O,{project:e,key:e.id}))}))},y=a(28),w=a(13),S=Object(w.d)(Object(s.b)(function(e){return{projects:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications}}),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(function(e){var t=e.projects;return n.a.createElement("div",{className:"dashboard container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6"},n.a.createElement(v,{projects:t})),n.a.createElement("div",{className:"col s12 m5 offset-m1"},n.a.createElement(g,{notifications:e.notifications}))))}),P=Object(w.d)(Object(s.b)(function(e,t){var a=t.match.params.id,r=e.firestore.data.projects;return{project:r?r[a]:null}}),Object(y.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return t?n.a.createElement("div",{className:"container section project-details"},n.a.createElement("div",{className:"card z-depth-0"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title"},t.title),n.a.createElement("p",null,t.content)),n.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},n.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),n.a.createElement("div",null,b()(t.createdAt.toDate()).calendar())))):n.a.createElement("div",{className:"container center"},n.a.createElement("p",null,"Loading project..."))}),C=a(16);var R=Object(s.b)(function(e){return{authError:e.auth.authError}},function(e){return{signIn:function(t){return e(function(e){return function(t,a){p.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}(t))}}})(function(e){var t=Object(r.useState)(""),a=Object(C.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(""),o=Object(C.a)(i,2),s=o[0],u=o[1];return n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signIn({email:c,password:s}),e.history.push("/")},className:"white"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",onChange:function(e){return l(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn red lighten-1 z-depth-0"},"Login"),n.a.createElement("div",{className:"red-text center"},e.authError?n.a.createElement("p",null,e.authError):null))))});var F=Object(s.b)(null,function(e){return{signUp:function(t){return e(function(e){return function(t,a,r){var n=(0,r.getFirestore)();console.log(n,e),p.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return console.log(t),n.collection("users").doc(t.user.uid).set({firstName:e.userFirstName,lastName:e.userLastName,initials:e.userFirstName[0]+e.userLastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(function(e){var t=Object(r.useState)(""),a=Object(C.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(""),o=Object(C.a)(i,2),s=o[0],u=o[1],m=Object(r.useState)(""),p=Object(C.a)(m,2),d=p[0],f=p[1],E=Object(r.useState)(""),h=Object(C.a)(E,2),b=h[0],g=h[1];return n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signUp({email:c,password:s,userFirstName:d,userLastName:b}),e.history.push("/")},className:"white"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",onChange:function(e){return l(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",id:"firstName",onChange:function(e){return f(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"lastName"},"First Name"),n.a.createElement("input",{type:"text",id:"lastName",onChange:function(e){return g(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn red lighten-1 z-depth-0"},"Sign Up"))))}),x=a(88);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var U=function(e){return function(t,a,r){r.getFirebase;var n=(0,r.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;console.log(c,l),n.collection("projects").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}};var D=Object(s.b)(null,function(e){return{createProject:function(t){return e(U(t))}}})(function(e){var t=Object(r.useState)(""),a=Object(C.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(""),o=Object(C.a)(i,2),s=o[0],u=o[1];return n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.createProject({title:c,content:s}),e.history.push("/")},className:"white"},n.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"title"},"Title"),n.a.createElement("input",{type:"text",id:"title",onChange:function(e){return l(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"content"},"Project Content"),n.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:function(e){return u(e.target.value)}})),n.a.createElement("div",{className:"input-field"},n.a.createElement("button",{className:"btn red lighten-1 z-depth-0"},"Create"))))});var L=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:S}),n.a.createElement(o.a,{path:"/project/:id",component:P}),n.a.createElement(o.a,{path:"/signin",component:R}),n.a.createElement(o.a,{path:"/signup",component:F}),n.a.createElement(o.a,{path:"/create",component:D}))))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),A({},e,{authError:null});case"LOGIN_ERROR":return console.log("login failed"),A({},e,{authError:"Login failed"});case"SIGNOUT_SUCCESS":return console.log("signed out"),e;case"SIGNUP_SUCCESS":return console.log("signed up"),A({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signed up error",t.err.message),A({},e,{authError:t.err.message});default:return e}},T=a(46),z=Object(w.c)({auth:G,project:j,firestore:T.firestoreReducer,firebase:y.firebaseReducer}),B=a(213),J=Object(w.e)(z,Object(w.d)(Object(w.a)(B.a.withExtraArgument({getFirestore:T.getFirestore})),Object(T.reduxFirestore)(p))),W={firebase:p,config:{attachAuthIsReady:!0,useFirestoreForProfile:!0,userProfile:"users"},dispatch:J.dispatch,createFirestoreInstance:T.createFirestoreInstance};l.a.render(n.a.createElement(s.a,{store:J},n.a.createElement(y.ReactReduxFirebaseProvider,W,n.a.createElement(L,null))),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.09db3b15.chunk.js.map
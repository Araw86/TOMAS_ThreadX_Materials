(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{204:function(e,t,a){e.exports=a(611)},209:function(e,t,a){},611:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),i=(a(209),a(70)),o=a.n(i),c=a(10),m=a(33),d=a(21),p=a(22),h=a(47),u=a(24),f=a(23),b=a(18),v=a(116),y=a(17),E=a.n(y),g=a(46),k=a.n(g),w=a(7),x=a(613),O=a(120);var S=Object(c.withStyles)((function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}}))((function(e){var t,a,n,l=e.children,s=Object(b.a)(e,["children"]);return t=void 0!==s.className?r.a.createElement("div",null,r.a.createElement(w.b,{variant:"contained",size:"small",style:{marginBottom:12},color:"primary",onClick:function(e){s.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var t=document.createElement("textarea");t.value=l,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Copy code")):[],"lang-c"===s.className?(n=1!==l.split(/\r\n|\r|\n/).length,a=r.a.createElement("div",null,r.a.createElement(w.d,null),r.a.createElement("div",null,r.a.createElement(x.a,{language:"c",style:O.atomOneLight,showLineNumbers:n,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}}},l)),t,r.a.createElement(w.d,null))):a=r.a.createElement("i",null,r.a.createElement("code",null,l)),a})),j=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),n=t.call(this,e),S.bind(n.props),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t={overrides:{h1:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement(E.a,{gutterBottom:!0,variant:"h4",className:a.classes.STdarkBlue}," ",t,"  ")},props:{classes:this.props.classes}},h2:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",className:a.classes.STdarkBlue}," ",t)},props:{classes:this.props.classes}},h3:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1",className:a.classes.STdarkBlue}," ",t)},props:{classes:this.props.classes}},h4:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement(E.a,{gutterBottom:!0,variant:"caption",paragraph:!0,className:a.classes.STdarkBlue}," ",t)},props:{classes:this.props.classes}},p:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement(E.a,{paragraph:!0,className:a.classes.STdarkBlue},t," ")},props:{classes:this.props.classes}},a:{component:k.a},li:{component:function(e){var t=e.children,a=Object(b.a)(e,["children"]);return r.a.createElement("li",{className:a.classes.STlightBlue},r.a.createElement(E.a,{component:"span",className:a.classes.STdarkBlue},t))},props:{classes:this.props.classes}},code:{component:S,props:{enqueueSnackbar:this.props.enqueueSnackbar}},pre:{component:function(e){var t=e.children;Object(b.a)(e,["children"]);return r.a.createElement(n.Fragment,null,t)}},img:{component:function(t){t.children;var a=Object(b.a)(t,["children"]);return r.a.createElement(n.Fragment,null,r.a.createElement("img",{alt:a.alt,src:"/TOMAS_ThreadX_Materials"+e.props.mdInfo.mdPath+"/img/"+a.src.replace("./img/",""),title:a.title,style:{padding:24,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%"}}))}}}};return r.a.createElement(w.f,{container:!0,justify:"center",spacing:0,style:{padding:24}},r.a.createElement(w.f,{item:!0},r.a.createElement(v.a,{children:this.props.mdInfo.mdContent,options:t})))}}]),a}(n.Component),C=Object(c.withStyles)((function(e){return{STdarkBlue:{color:"#002052"},STlightBlue:{color:"#39A9DC"}}}))(j),T=a(71),_=a(121),F=a.n(_),N=a(122),B=a.n(N),A=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={expand:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,l=t.theme,s=t.classes,i=this.props.item,o={};this.props.depth>0&&(o={paddingLeft:4*l.spacing.unit*this.props.depth});var c={};if("Folder"===i.type){var m=i.children.map((function(t){return r.a.createElement(a,{key:t.name,item:t,depth:e.props.depth+1,selectCb:e.props.selectCb,theme:l,classes:s})}));c=r.a.createElement(n.Fragment,null,r.a.createElement(w.h,{button:!0,style:o,onClick:function(t){return e.setState({expand:!e.state.expand})}},r.a.createElement(w.i,{inset:!0,primary:i.name,disableTypography:!0,className:s.Folder}),this.state.expand?r.a.createElement(F.a,null):r.a.createElement(B.a,null)),r.a.createElement(w.c,{in:this.state.expand,timeout:"auto",unmountOnExit:!0},r.a.createElement(w.g,{component:"div",disablePadding:!0},m)))}else if("File"===i.type){c=r.a.createElement(w.h,{button:!0,style:o,onClick:function(t){return e.props.selectCb(i.name)}},r.a.createElement(w.i,{disableTypography:!0,inset:!0,primary:i.name,className:s.File}))}return r.a.createElement(n.Fragment,null,c)}}]),a}(n.Component),M=Object(c.withStyles)((function(e){return{Folder:{color:"#002052",fontWeight:"bold"},File:{color:"#002052",fontWeight:"500"}}}),{withTheme:!0})(A),P=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classesToUse,a=this.props.menuItems.map((function(t){return r.a.createElement(M,{key:t.name,item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse})})),n=r.a.createElement(w.g,{component:"nav"},a);return r.a.createElement(w.e,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(w.d,null),n)}}]),a}(n.Component),X=Object(c.withStyles)((function(e){return{}}))(P),I=[{name:"1. Add ThreadX",path:"/markdown",file:"add_threadx.md"},{name:"2. Add TraceX",path:"/markdown",file:"adding_tracex.md"},{name:"3. ThreadX basic",path:"/markdown",file:"threadx_basic stucture_flow.md"},{name:"4. ThreadX memory",path:"/markdown",file:"threadx_memory_allocation.md"},{name:"5. Memory pools",path:"/markdown",file:"threadx_memory_pools.md"},{name:"6. Threads",path:"/markdown",file:"thredx_thread.md"},{name:"7. Semaphore",path:"/markdown",file:"thredx_semaphore.md"},{name:"8. Mutex",path:"/markdown",file:"thredx_mutex.md"},{name:"9. Queue",path:"/markdown",file:"thredx_queue.md"},{name:"10. Event flags",path:"/markdown",file:"thredx_events.md"},{name:"11. Timer",path:"/markdown",file:"threadx_timer.md"}],L=[{type:"File",name:"1. Add ThreadX",path:"/markdown",file:"add_threadx.md"},{type:"File",name:"2. Add TraceX",path:"/markdown",file:"adding_tracex.md"},{type:"File",name:"3. ThreadX basic",path:"/markdown",file:"threadx_basic stucture_flow.md"},{type:"File",name:"4. ThreadX memory",path:"/markdown",file:"threadx_memory_allocation.md"},{type:"File",name:"5. Memory pools",path:"/markdown",file:"threadx_memory_pools.md"},{type:"File",name:"6. Threads",path:"/markdown",file:"thredx_thread.md"},{type:"File",name:"7. Semaphore",path:"/markdown",file:"thredx_semaphore.md"},{type:"File",name:"8. Mutex",path:"/markdown",file:"thredx_mutex.md"},{type:"File",name:"9. Queue",path:"/markdown",file:"thredx_queue.md"},{type:"File",name:"10. Event flags",path:"/markdown",file:"thredx_events.md"},{type:"File",name:"11. Timer",path:"/markdown",file:"threadx_timer.md"}],W=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={mdFilesContent:[],mdSelected:""},n.itemSelectedCb=n.itemSelectedCb.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=[],a=I.map((function(e){return fetch("/TOMAS_ThreadX_Materials"+e.path+"/"+e.file).then((function(e){return e.text()})).then((function(a){var n={name:e.name,mdContent:a,mdPath:e.path};t.push(n)}))}));Promise.all(a).then((function(){e.setState({mdFilesContent:t})}))}},{key:"itemSelectedCb",value:function(e){this.setState({mdSelected:e})}},{key:"render",value:function(){var e=this,t=Object(T.withSnackbar)(C),a=this.props.classes,n={},l=[],s=[];return 0===this.state.mdFilesContent.length?(n.name="Loading",n.mdContent="",n.mdPath=""):1===this.state.mdFilesContent.length?(n=this.state.mdFilesContent[0],l.push(r.a.createElement(X,{classesToUse:a,menuItems:L,selectCb:this.itemSelectedCb})),s.push(r.a.createElement(t,{mdInfo:n}))):(l.push(r.a.createElement(X,{classesToUse:a,menuItems:L,selectCb:this.itemSelectedCb})),void 0!==(n=this.state.mdFilesContent.find((function(t){return t.name===e.state.mdSelected})))?s.push(r.a.createElement(t,{mdInfo:n})):((n={}).name="",n.mdContent="",n.mdPath="")),r.a.createElement("div",{className:a.root},r.a.createElement(w.a,{position:"fixed",className:a.appBar},r.a.createElement(w.j,null,r.a.createElement(w.k,{variant:"h6",color:"inherit"},n.name))),l,r.a.createElement("div",{className:a.content},r.a.createElement(T.SnackbarProvider,{maxSnack:3},r.a.createElement("div",{className:a.toolbar}),s)))}}]),a}(n.Component),q=Object(c.withStyles)((function(e){return{root:{display:"flex"},drawer:{width:320,flexShrink:0},drawerPaper:{width:320},appBar:{width:"calc(100% - ".concat(320,"px)"),marginLeft:320},content:{flexGrow:1,padding:3*e.spacing.unit},toolbar:e.mixins.toolbar,nested:{paddingLeft:4*e.spacing.unit}}}))(W),U=(a(597),Object(c.createMuiTheme)({typography:{useNextVariants:!0,fontFamily:["Arial"].join(","),color:"#39A9DC"},palette:{primary:m.blue,secondary:m.pink}}));var D=function(){return r.a.createElement(o.a,{theme:U},r.a.createElement("div",{className:"App"},r.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[204,1,2]]]);
//# sourceMappingURL=main.daed4d4c.chunk.js.map
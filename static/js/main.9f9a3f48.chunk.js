(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{115:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(9),r=n.n(s),i=(n(115),n(384)),c=n(99),o=n(68),l=n(67),d=n(29),p=n(17),h=n(18),u=n(24),j=n(20),b=n(19),m=n(30),O=n(85),x=n(51),f=n(368),g=n(386),v=n(364),S=n(366),C=n(6),w=n(388),y=n(367),k=n(2);var T=Object(C.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}))((function(e){var t,n,a,s=e.children,r=Object(m.a)(e,["children"]);return t=void 0!==r.className?Object(k.jsx)("div",{children:Object(k.jsx)(v.a,{variant:"contained",size:"small",style:{marginBottom:12},color:"primary",onClick:function(e){r.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var t=document.createElement("textarea");t.value=s,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},children:"Copy code"})}):[],"lang-c"===r.className?(a=1!==s.split(/\r\n|\r|\n/).length,n=Object(k.jsxs)("div",{children:[Object(k.jsx)(S.a,{}),Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{language:"c",style:y.a,showLineNumbers:a,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:s})}),t,Object(k.jsx)(S.a,{})]})):n=Object(k.jsx)("i",{children:Object(k.jsx)("code",{children:s})}),n})),I=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t={overrides:{h1:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"h4",className:n.classes.STdarkBlue,children:[" ",t,"  "]})},props:{classes:this.props.classes}},h2:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"h6",className:n.classes.STdarkBlue,children:[" ",t]})},props:{classes:this.props.classes}},h3:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"subtitle1",className:n.classes.STdarkBlue,children:[" ",t]})},props:{classes:this.props.classes}},h4:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"caption",paragraph:!0,className:n.classes.STdarkBlue,children:[" ",t]})},props:{classes:this.props.classes}},p:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsxs)(x.a,{paragraph:!0,className:n.classes.STdarkBlue,children:[t," "]})},props:{classes:this.props.classes}},a:{component:f.a},li:{component:function(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(k.jsx)("li",{className:n.classes.STlightBlue,children:Object(k.jsx)(x.a,{component:"span",className:n.classes.STdarkBlue,children:t})})},props:{classes:this.props.classes}},code:{component:T,props:{enqueueSnackbar:this.props.enqueueSnackbar}},pre:{component:function(e){var t=e.children;Object(m.a)(e,["children"]);return Object(k.jsx)(a.Fragment,{children:t})}},img:{component:function(t){t.children;var n=Object(m.a)(t,["children"]);return Object(k.jsx)(g.a,{children:Object(k.jsx)("img",{alt:n.alt,src:"/TOMAS_ThreadX_Materials"+e.props.mdInfo.mdPath+"/img/"+n.src.replace("./img/",""),title:n.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}})})}}}};return Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(O.a,{children:this.props.children,options:t})})}}]),n}(a.Component),F=Object(C.a)((function(e){return{STdarkBlue:{color:"#002052"},STlightBlue:{color:"#39A9DC"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))(I),N=n(369),B=n(370),L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.mdChapters,a=(n=n.split(/(^#\s.*\r\n\r\n)/g)).map((function(t,n){return Object(k.jsx)(F,{children:t,enqueueSnackbar:e.props.enqueueSnackbar,mdInfo:e.props.mdInfo,routerLocation:e.props.routerLocation},n)}));return Object(k.jsxs)(g.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[a,Object(k.jsx)(N.a,{"aria-label":"Add",className:t.fab,color:"primary",onClick:this.scrollTop,children:Object(k.jsx)(B.a,{})})]})}}]),n}(a.Component),D=Object(C.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))(L),P=n(371),A=n(389),q=n(373),E=n(374),_=n(375),M=n(11),U=n(36),W=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(p.a)(this,n);var s=(a=t.call(this,e)).props.mdChapters;(s=s.split(/(?=#\s.*[\r\n\r\n|\n\n])/g))[0].search(/^[\r\n\r\n|\n\n]/)>=0&&s.shift();var r=s.length;return a.state={slideIndex:0,mdChapters:s,mdChapterSize:r,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(u.a)(a)),a.previousSlide=a.previousSlide.bind(Object(u.a)(a)),a.firstSlide=a.firstSlide.bind(Object(u.a)(a)),a.onExited=a.onExited.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"firstSlide",value:function(){var e=this.state.slideIndex;this.setState({previousIndex:e,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var e=this.state.slideIndex+1;e>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:e,slide:!1})}},{key:"previousSlide",value:function(){var e=this.state.slideIndex-1;e<0&&(e=0),this.setState({slideIndex:e,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=Object(k.jsxs)(M.d,{children:[Object(k.jsx)(M.b,{exact:!0,path:"".concat(this.props.match.url,"/:id"),render:function(t){var n=t.match,s=parseInt(n.params.id);return e.state.reroute?Object(k.jsx)(M.a,{push:!0,to:"".concat(e.props.match.url,"/").concat(e.state.slideIndex)}):(e.state.enter&&e.setState({slideIndex:s,slideToShow:s,enter:!1}),Object(k.jsx)(a.Fragment,{}))}}),Object(k.jsx)(M.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),s=Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(P.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(k.jsx)("div",{children:Object(k.jsx)(F,{children:this.state.mdChapters[this.state.slideToShow],enqueueSnackbar:this.props.enqueueSnackbar,mdInfo:this.props.mdInfo})})})});return Object(k.jsxs)(g.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,s,Object(k.jsx)(A.a,{title:"First slide","aria-label":"First slide",children:Object(k.jsx)(N.a,{"aria-label":"First slide",className:t.fabLL,color:"primary",component:U.b,to:"".concat(this.props.match.url,"/0"),children:Object(k.jsx)(q.a,{})})}),Object(k.jsx)(A.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(k.jsx)(N.a,{"aria-label":"Previous slide",className:t.fabL,color:"primary",onClick:this.previousSlide,children:Object(k.jsx)(E.a,{})})}),Object(k.jsx)(N.a,{"aria-label":"Slide",className:t.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(k.jsx)(A.a,{title:"Next slide","aria-label":"Next slide",children:Object(k.jsx)(N.a,{"aria-label":"Next slide",className:t.fabR,color:"primary",onClick:this.nextSlide,children:Object(k.jsx)(_.a,{})})})]})}}]),n}(a.Component),z=Object(C.a)((function(e){return{fabR:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},fabC:{position:"fixed",bottom:e.spacing(10),right:e.spacing(2)},fabL:{position:"fixed",bottom:e.spacing(2),right:e.spacing(10)},fabLL:{position:"fixed",bottom:e.spacing(2),right:e.spacing(18)}}}))(W),X=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e,t=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,s=this.props.mdInfo.mdContent;return s.search(n)>=0?(console.log("presenation mode"),s=s.split(n).pop(),e=Object(k.jsx)(M.b,{to:"".concat(this.props.match.path),render:function(e){return Object(k.jsx)(z,Object(d.a)({mdChapters:s,enqueueSnackbar:t.props.enqueueSnackbar,mdInfo:t.props.mdInfo},e))}})):(console.log("document mode"),e=Object(k.jsx)(D,{mdChapters:s,enqueueSnackbar:this.props.enqueueSnackbar,mdInfo:this.props.mdInfo})),Object(k.jsx)(a.Fragment,{children:e})}}]),n}(a.Component),J=n(382),R=n(383),G=n(381),V=n(98),$=n.n(V),H=n(76),K=n(380),Q=n(387),Y=n(378),Z=n(379),ee=n(377),te=n(95),ne=n.n(te),ae=n(96),se=n.n(ae),re=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={expand:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props,s=t.theme,r=t.classes,i=this.props.item,c={};this.props.depth>0&&(c={paddingLeft:s.spacing(4)*this.props.depth});var o={};if("Folder"===i.type){var l=i.children.map((function(t){return Object(k.jsx)(M.b,{to:"".concat(e.props.match.path),render:function(a){return Object(k.jsx)(n,Object(d.a)({item:t,depth:e.props.depth+1,selectCb:e.props.selectCb,theme:s,classes:r},a),t.name)}})}));o=Object(k.jsxs)(a.Fragment,{children:[Object(k.jsxs)(Y.a,{button:!0,style:c,onClick:function(t){return e.setState({expand:!e.state.expand})},children:[Object(k.jsx)(Z.a,{inset:!0,primary:i.name,disableTypography:!0,className:r.Folder}),this.state.expand?Object(k.jsx)(ne.a,{}):Object(k.jsx)(se.a,{})]}),Object(k.jsx)(ee.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(K.a,{component:"div",disablePadding:!0,children:l})})]})}else if("File"===i.type){o=Object(k.jsx)(Y.a,{button:!0,style:c,onClick:function(t){return e.props.selectCb(i.name)},component:U.b,to:"".concat(this.props.match.url,"/").concat(i.file),children:Object(k.jsx)(Z.a,{disableTypography:!0,inset:!0,primary:i.name,className:r.File})})}return Object(k.jsx)(a.Fragment,{children:o})}}]),n}(a.Component),ie=Object(C.a)((function(e){return{Folder:{color:"#002052",fontWeight:"bold"},File:{color:"#002052",fontWeight:"500"}}}),{withTheme:!0})(re),ce=n(97),oe=n.n(ce),le=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).closeDrawer=a.closeDrawer.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"closeDrawer",value:function(){console.log(this),this.props.drawerChange(!1)}},{key:"render",value:function(){var e=this,t=this.props.classesToUse,n=this.props.menuItems.map((function(t,n){return Object(k.jsx)(M.b,{to:"".concat(e.props.match.path),render:function(n){return Object(k.jsx)(ie,Object(d.a)({item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse},n),t.name)}},n)})),a=Object(k.jsx)(K.a,{component:"nav",children:n});return Object(k.jsxs)(Q.a,{className:t.drawer,variant:"persistent",open:this.props.isDrawerOpen,classes:{paper:t.drawerPaper},anchor:"left",children:[Object(k.jsx)(G.a,{children:Object(k.jsx)(J.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(k.jsx)(oe.a,{})})}),Object(k.jsx)(S.a,{}),a]})}}]),n}(a.Component),de=Object(C.a)((function(e){return{}}))(le),pe=320,he=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[]},a.itemSelectedCb=a.itemSelectedCb.bind(Object(u.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(u.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=[];fetch("/TOMAS_ThreadX_Materials/filesToLoad.json").then((function(e){return e.json()})).then((function(t){e=t})).then((function(){var a=e.filesToLoadArr.map((function(e){return fetch("/TOMAS_ThreadX_Materials"+e.path+"/"+e.file).then((function(e){return e.text()})).then((function(t){var a={name:e.name,mdContent:t,mdPath:e.path,mdFile:e.file};n.push(a)}))}));Promise.all(a).then((function(){t.setState({mdFilesContent:n,menuStructure:e.menuStructure})}))}))}},{key:"itemSelectedCb",value:function(e){this.setState({mdSelected:e})}},{key:"handleDrawerOpen",value:function(){console.log(this),this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(e){this.setState({isDrawerOpen:e})}},{key:"render",value:function(){var e,t,n,s,r,i=this,c=Object(H.b)(X),o=this.props.classes,l={};if(0===this.state.mdFilesContent.length)l.name="Loading",l.mdContent="",l.mdPath="";else if(1===this.state.mdFilesContent.length){l=this.state.mdFilesContent[0];var p=this.state.menuStructure[0];e=Object(k.jsx)(M.b,{to:"".concat(this.props.match.path),render:function(e){return Object(k.jsx)(de,Object(d.a)({classesToUse:o,menuItems:i.state.menuStructure,selectCb:i.itemSelectedCb,isDrawerOpen:i.state.isDrawerOpen,drawerChange:i.drawerOpenClose,match:i.props.match},e))}}),t=Object(k.jsx)(M.b,{path:"".concat(this.props.match.path,"/").concat(p.file),render:function(e){return Object(k.jsx)(c,Object(d.a)({mdInfo:l},e))}})}else{e=Object(k.jsx)(M.b,{to:"".concat(this.props.match.path),render:function(e){return Object(k.jsx)(de,Object(d.a)({classesToUse:o,menuItems:i.state.menuStructure,selectCb:i.itemSelectedCb,isDrawerOpen:i.state.isDrawerOpen,drawerChange:i.drawerOpenClose,match:i.props.match},e))}}),l=this.state.mdFilesContent.find((function(e){return e.name===i.state.mdSelected}));this.state.menuStructure.find((function(e){return e.name===i.state.mdSelected}));(t=this.state.mdFilesContent.map((function(e,t){return Object(k.jsx)(M.b,{path:"".concat(i.props.match.path,"/").concat(e.mdFile),render:function(t){return Object(k.jsx)(c,Object(d.a)({mdInfo:e},t))}},t)}))).push(Object(k.jsx)(M.b,{exact:!0,path:"".concat(this.props.match.path),render:function(e){return Object(k.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===l&&((l={}).name="",l.mdContent="",l.mdPath="")}return this.state.isDrawerOpen?(n=o.appBarOpen,s=o.contentShift):(r=Object(k.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(k.jsx)($.a,{})}),n=o.appBarClose,e=null,s=o.content),Object(k.jsxs)("div",{className:o.root,children:[e,Object(k.jsx)(R.a,{position:"fixed",className:n,children:Object(k.jsxs)(G.a,{children:[r,Object(k.jsx)(x.a,{variant:"h6",color:"inherit",children:l.name})]})}),Object(k.jsxs)(g.a,{className:s,children:[Object(k.jsxs)(H.a,{maxSnack:3,children:[Object(k.jsx)("div",{className:o.toolbar}),t]}),Object(k.jsx)(M.b,{path:"".concat(this.props.match,"/About"),children:"About"})]})]})}}]),n}(a.Component),ue=Object(C.a)((function(e){return{root:{display:"flex"},drawer:{width:pe,flexShrink:0},drawerPaper:{width:pe},appBarClose:{marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarOpen:{width:"calc(100% - ".concat(pe,"px)"),marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},toolbar:e.mixins.toolbar,nested:{paddingLeft:e.spacing(4)}}}))(he),je=(n(341),Object(c.a)({typography:{useNextVariants:!0,fontFamily:["Arial"].join(","),color:"#39A9DC"},palette:{primary:o.a,secondary:l.a}}));var be=function(){return Object(k.jsx)(U.a,{children:Object(k.jsx)(i.a,{theme:je,children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(M.d,{children:[Object(k.jsx)(M.b,{path:"/show",component:ue}),Object(k.jsx)(M.a,{from:"/",to:"/show"})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(k.jsx)(be,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[342,1,2]]]);
//# sourceMappingURL=main.9f9a3f48.chunk.js.map
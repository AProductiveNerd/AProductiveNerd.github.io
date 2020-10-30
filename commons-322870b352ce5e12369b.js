/*! For license information please see commons-322870b352ce5e12369b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!s.test(e))}(a)?n+=c(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("q4sD"),n("wx14")),i=n("zLVn"),c=n("TSYQ"),s=n.n(c),u=n("JCAc"),l=/-(.)/g;var f=a.a.createContext({});f.Consumer,f.Provider;function d(e,t){var n=Object(r.useContext)(f);return e||n[t]||t}var p=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var m=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.as,u=Object(i.a)(e,["bsPrefix","className","as"]);n=d(n,"navbar-brand");var l=c||(u.href?"a":"span");return a.a.createElement(l,Object(o.a)({},u,{ref:t,className:s()(r,n)}))}));m.displayName="NavbarBrand";var v=m,h=n("7j6X"),b=n("GEtZ");function y(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(b.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function g(e,t,n,r){var a,o,i;null==n&&(a=e,o=Object(h.a)(a,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var c=y(e,n,r),s=Object(b.a)(e,"transitionend",t);return function(){c(),s()}}var E=n("dI71"),w=n("i8i4"),x=n.n(w),O=!1,T=a.a.createContext(null),j=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(E.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[x.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),s=r?c.appear:c.enter;!e&&!n||O?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:x.a.findDOMNode(this);t&&!O?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(i.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(T.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function C(){}j.contextType=T,j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},j.UNMOUNTED="unmounted",j.EXITED="exited",j.ENTERING="entering",j.ENTERED="entered",j.EXITING="exiting";var S=j;var N,k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var A={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function P(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=A[e];return n+parseInt(Object(h.a)(t,r[0]),10)+parseInt(Object(h.a)(t,r[1]),10)}var L=((N={}).exited="collapse",N.exiting="collapsing",N.entering="collapsing",N.entered="collapse show",N),I={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:P},R=a.a.forwardRef((function(e,t){var n=e.onEnter,c=e.onEntering,u=e.onEntered,l=e.onExit,f=e.onExiting,d=e.className,p=e.children,m=e.dimension,v=void 0===m?"height":m,h=e.getDimensionValue,b=void 0===h?P:h,y=Object(i.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"==typeof v?v():v,w=Object(r.useMemo)((function(){return k((function(e){e.style[E]="0"}),n)}),[E,n]),x=Object(r.useMemo)((function(){return k((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),c)}),[E,c]),O=Object(r.useMemo)((function(){return k((function(e){e.style[E]=null}),u)}),[E,u]),T=Object(r.useMemo)((function(){return k((function(e){e.style[E]=b(E,e)+"px",e.offsetHeight}),l)}),[l,b,E]),j=Object(r.useMemo)((function(){return k((function(e){e.style[E]=null}),f)}),[E,f]);return a.a.createElement(S,Object(o.a)({ref:t,addEndListener:g},y,{"aria-expanded":y.role?y.in:null,onEnter:w,onEntering:x,onEntered:O,onExit:T,onExiting:j}),(function(e,t){return a.a.cloneElement(p,Object(o.a)({},t,{className:s()(d,p.props.className,L[e],"width"===E&&"width")}))}))}));R.defaultProps=I;var M=R,D=a.a.createContext(null);D.displayName="NavbarContext";var _=D,q=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,c=Object(i.a)(e,["children","bsPrefix"]);return r=d(r,"navbar-collapse"),a.a.createElement(_.Consumer,null,(function(e){return a.a.createElement(M,Object(o.a)({in:!(!e||!e.expanded)},c),a.a.createElement("div",{ref:t,className:r},n))}))}));q.displayName="NavbarCollapse";var K=q,F=n("ZCiN"),U=a.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.children,l=e.label,f=e.as,p=void 0===f?"button":f,m=e.onClick,v=Object(i.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=d(n,"navbar-toggler");var h=Object(r.useContext)(_)||{},b=h.onToggle,y=h.expanded,g=Object(F.a)((function(e){m&&m(e),b&&b()}));return"button"===p&&(v.type="button"),a.a.createElement(p,Object(o.a)({},v,{ref:t,onClick:g,"aria-label":l,className:s()(c,n,!y&&"collapsed")}),u||a.a.createElement("span",{className:n+"-icon"}))}));U.displayName="NavbarToggle",U.defaultProps={label:"Toggle navigation"};var B,Y,H,z,V,Z,J,W,G=U,X=a.a.createContext(null),$=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},Q=X,ee=(B="navbar-text",z=(H=void 0===(Y={Component:"span"})?{}:Y).displayName,V=void 0===z?p(B):z,Z=H.Component,J=H.defaultProps,(W=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,c=e.as,u=void 0===c?Z||"div":c,l=Object(i.a)(e,["className","bsPrefix","as"]),f=d(r,B);return a.a.createElement(u,Object(o.a)({ref:t,className:s()(n,f)},l))}))).defaultProps=J,W.displayName=V,W),te=a.a.forwardRef((function(e,t){var n=Object(u.a)(e,{expanded:"onToggle"}),c=n.bsPrefix,l=n.expand,f=n.variant,p=n.bg,m=n.fixed,v=n.sticky,h=n.className,b=n.children,y=n.as,g=void 0===y?"nav":y,E=n.expanded,w=n.onToggle,x=n.onSelect,O=n.collapseOnSelect,T=Object(i.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),j=d(c,"navbar"),C=Object(r.useCallback)((function(){x&&x.apply(void 0,arguments),O&&E&&w&&w(!1)}),[x,O,E,w]);void 0===T.role&&"nav"!==g&&(T.role="navigation");var S=j+"-expand";"string"==typeof l&&(S=S+"-"+l);var N=Object(r.useMemo)((function(){return{onToggle:function(){return w&&w(!E)},bsPrefix:j,expanded:!!E}}),[j,E,w]);return a.a.createElement(_.Provider,{value:N},a.a.createElement(Q.Provider,{value:C},a.a.createElement(g,Object(o.a)({ref:t},T,{className:s()(h,j,l&&S,f&&j+"-"+f,p&&"bg-"+p,v&&"sticky-"+v,m&&"fixed-"+m)}),b)))}));te.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},te.displayName="Navbar",te.Brand=v,te.Toggle=G,te.Collapse=K,te.Text=ee;var ne=te,re=(n("K9S6"),a.a.createContext(null));re.displayName="CardContext";var ae=re,oe=n("Zeqi"),ie=n("YGJp"),ce=n("lcWJ"),se=a.a.createContext(null);se.displayName="NavContext";var ue=se,le=a.a.createContext(null),fe=function(){},de=a.a.forwardRef((function(e,t){var n,c,s=e.as,u=void 0===s?"ul":s,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,m=Object(i.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),v=Object(ie.a)(),h=Object(r.useRef)(!1),b=Object(r.useContext)(Q),y=Object(r.useContext)(le);y&&(d=d||"tablist",f=y.activeKey,n=y.getControlledId,c=y.getControllerId);var g=Object(r.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n=Object(oe.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},w=function(e,t){null!=e&&(l&&l(e,t),b&&b(e,t))};Object(r.useEffect)((function(){if(g.current&&h.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var x=Object(ce.a)(t,g);return a.a.createElement(Q.Provider,{value:w},a.a.createElement(ue.Provider,{value:{role:d,activeKey:$(f),getControlledId:n||fe,getControllerId:c||fe}},a.a.createElement(u,Object(o.a)({},m,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),w(t.dataset.rbEventKey,e),h.current=!0,v())},ref:x,role:d}))))})),pe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.children,u=e.as,l=void 0===u?"div":u,f=Object(i.a)(e,["bsPrefix","className","children","as"]);return n=d(n,"nav-item"),a.a.createElement(l,Object(o.a)({},f,{ref:t,className:s()(r,n)}),c)}));pe.displayName="NavItem";var me=pe;function ve(e){return!e||"#"===e.trim()}var he=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,c=e.disabled,s=e.onKeyDown,u=Object(i.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=u.href,n=u.onClick;(c||ve(t))&&e.preventDefault(),c?e.stopPropagation():n&&n(e)};return ve(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),c&&(u.tabIndex=-1,u["aria-disabled"]=!0),a.a.createElement(r,Object(o.a)({ref:t},u,{onClick:l,onKeyDown:k((function(e){" "===e.key&&(e.preventDefault(),l(e))}),s)}))}));he.displayName="SafeAnchor";var be=he,ye=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,c=e.className,u=e.eventKey,l=e.onSelect,f=e.onClick,d=e.as,p=Object(i.a)(e,["active","className","eventKey","onSelect","onClick","as"]),m=$(u,p.href),v=Object(r.useContext)(Q),h=Object(r.useContext)(ue),b=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var y=h.getControllerId(m),g=h.getControlledId(m);p["data-rb-event-key"]=m,p.id=y||p.id,p["aria-controls"]=g||p["aria-controls"],b=null==n&&null!=m?h.activeKey===m:n}"tab"===p.role&&(p.tabIndex=b?p.tabIndex:-1,p["aria-selected"]=b);var E=Object(F.a)((function(e){f&&f(e),null!=m&&(l&&l(m,e),v&&v(m,e))}));return a.a.createElement(d,Object(o.a)({},p,{ref:t,onClick:E,className:s()(c,b&&"active")}))})));ye.defaultProps={disabled:!1};var ge=ye,Ee={disabled:!1,as:be},we=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,c=e.className,u=e.href,l=e.eventKey,f=e.onSelect,p=e.as,m=Object(i.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=d(n,"nav-link"),a.a.createElement(ge,Object(o.a)({},m,{href:u,ref:t,eventKey:l,as:p,disabled:r,onSelect:f,className:s()(c,n,r&&"disabled")}))}));we.displayName="NavLink",we.defaultProps=Ee;var xe=we,Oe=a.a.forwardRef((function(e,t){var n,c,l,f=Object(u.a)(e,{activeKey:"onSelect"}),p=f.as,m=void 0===p?"div":p,v=f.bsPrefix,h=f.variant,b=f.fill,y=f.justify,g=f.navbar,E=f.className,w=f.children,x=f.activeKey,O=Object(i.a)(f,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),T=d(v,"nav"),j=!1,C=Object(r.useContext)(_),S=Object(r.useContext)(ae);return C?(c=C.bsPrefix,j=null==g||g):S&&(l=S.cardHeaderBsPrefix),a.a.createElement(de,Object(o.a)({as:m,ref:t,activeKey:x,className:s()(E,(n={},n[T]=!j,n[c+"-nav"]=j,n[l+"-"+h]=!!l,n[T+"-"+h]=!!h,n[T+"-fill"]=b,n[T+"-justified"]=y,n))},O),w)}));Oe.displayName="Nav",Oe.defaultProps={justify:!1,fill:!1},Oe.Item=me,Oe.Link=xe;var Te=Oe,je=function(){return a.a.createElement("div",{className:"top-banner"},a.a.createElement("div",{className:"container"},a.a.createElement(ne,{className:"navbar"},a.a.createElement(ne.Brand,{className:"navbar-brand",href:"/"},a.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"🏠"),"Home"),a.a.createElement(Te,{className:"mr-auto"},a.a.createElement(Te.Link,{className:"nav-item nav-link",href:"/about-me"},a.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"👨‍🔬"),"About Me"),a.a.createElement(Te.Link,{className:"nav-item nav-link",href:"/newsletter"},a.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"💌"),"Sunday Times Sunday"),a.a.createElement(Te.Link,{className:"nav-item nav-link",href:"/notes"},a.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"📚"),"Notes"),a.a.createElement(Te.Link,{className:"nav-item nav-link",href:"/tags"},a.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"🏷"),"Tags")),a.a.createElement(Te,null,a.a.createElement(Te.Link,{className:"nav-link"},a.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-url":"https://www.aproductivenerd.com/","data-lang":"en","data-dnt":"true","data-show-count":"false"},a.a.createElement("span",{className:"share-icon"},a.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),a.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),a.a.createElement(Te.Link,{className:"nav-link"},a.a.createElement("div",{class:"fb-share-button","data-href":"https://aproductivenerd.com","data-layout":"button","data-size":"small"},a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faproductivenerd.com%2F&src=sdkpreparse",class:"fb-xfbml-parse-ignore"},a.a.createElement("iframe",{title:"facebook-share-button",src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Faproductivenerd.com&layout=button&size=small&width=67&height=20&appId",width:"67",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})))))),a.a.createElement("h1",{className:"site-title"},"A Productive Nerd"),a.a.createElement("h5",{className:"site-sub-title",style:{color:"rgba(255, 177, 59, 0.6)"}},"Nerd out about tools for thought, productivity and learning")))},Ce=function(){return a.a.createElement("div",{style:{marginTop:"50px"},className:"footer"},a.a.createElement("div",{style:{marginTop:"30px"},className:"row-footer"},a.a.createElement("div",{style:{textAlign:"center"},className:"col-footer"},a.a.createElement("h6",{style:{color:"white",paddingTop:"20px"}},"Contact Me"),a.a.createElement("hr",{style:{color:"white"}}),a.a.createElement("a",{href:"mailto:hi@aproductivenerd.com"},a.a.createElement("i",{class:"fas fa-mail-bulk"}," ")," Mail me"),a.a.createElement("br",null),a.a.createElement("a",{href:"https://twitter.com/SikandMr"},a.a.createElement("i",{class:"fa fa-twitter","aria-hidden":"true"})," Twitter DM me")),a.a.createElement("div",{style:{textAlign:"center"},className:"col-footer"},a.a.createElement("a",{style:{paddingTop:"20px"},href:"https://www.gatsbyjs.com"},"Made with ❤ and Gatsby"),a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/AProductiveNerd/gatsby-site"},"Click here to visit the soruce code for this website"))))},Se=n("qhky");n("/Cf1"),t.a=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(Se.a,null,a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-172115128-2"}),a.a.createElement("script",null,"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-172115128-2');\n          "),a.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=David+Libre:wght@500;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sansita+Swashed:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap",rel:"stylesheet"}),a.a.createElement("script",{src:"https://kit.fontawesome.com/df5ff3fd43.js",crossorigin:"anonymous"})),a.a.createElement(je,null),a.a.createElement("div",{id:"fb-root"}),a.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0",nonce:"shF5cmWA"}),t,a.a.createElement(Ce,null))}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(u){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!o){var i=r.once,c=r.capture,s=n;!o&&i&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,a?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var u,l=n,f=l[i(s)],d=l[s],p=Object(a.a)(l,[i(s),s].map(c)),m=t[s],v=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&i!==t&&c(t),[s?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[m]),h=v[0],b=v[1];return Object(r.a)({},p,((u={})[s]=h,u[m]=b,u))}),e)}n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],i[u[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ve}));var r,a,o,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),m=n.n(p),v=n("YVoz"),h=n.n(v),b="bodyAttributes",y="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",O="href",T="http-equiv",j="innerHTML",C="itemprop",S="name",N="property",k="rel",A="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),K=[E.NOSCRIPT,E.SCRIPT,E.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,E.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},J=function(e){return $(e,D)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==j&&c!==x&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=h()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(E.BODY,r),se(E.HTML,a),ce(f,d);var p={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,i),noscriptTags:ue(E.NOSCRIPT,c),scriptTags:ue(E.SCRIPT,u),styleTags:ue(E.STYLE,l)},m={},v={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(v[e]=p[e].oldTags)})),t&&t(),s(e,m,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===j||n===x){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===x)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(y,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,c,r),script:de(E.SCRIPT,s,r),style:de(E.STYLE,u,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:G([O,P],e),bodyAttributes:W(b,e),defer:$(e,R),encode:$(e,M),htmlAttributes:W(y,e),linkTags:X(E.LINK,[k,O],e),metaTags:X(E.META,[S,w,T,N,C],e),noscriptTags:X(E.NOSCRIPT,[j],e),onChangeClientState:J(e),scriptTags:X(E.SCRIPT,[A,j],e),styleTags:X(E.STYLE,[x],e),title:Z(e),titleAttributes:W(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ve=(a=me,i=o=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},o)});case E.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(H(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ve.renderStatic=ve.rewind}).call(this,n("yLpj"))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-322870b352ce5e12369b.js.map
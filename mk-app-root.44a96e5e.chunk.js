webpackJsonp([4],{1862:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,u,a=n(4),o=i(a),c=n(53),d=i(c),f=n(6),s=i(f),l=n(14),p=i(l),h=n(7),m=i(h),v=n(8),_=i(v),y=n(0),A=(i(y),n(200)),g=n(730),k=i(g),R=(r=(0,A.wrapper)(k.default))(u=function(t){function e(){return(0,s.default)(this,e),(0,m.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),e}(y.Component))||u;e.default=R,t.exports=e.default},1863:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new f.action(t),n=new m((0,a.default)({},t,{metaAction:e})),i=(0,a.default)({},e,n);return e.config({metaHandlers:i}),i}Object.defineProperty(e,"__esModule",{value:!0});var u=n(4),a=i(u),o=n(6),c=i(o);e.default=r;var d=n(0),f=(i(d),n(200)),s=n(310),l=i(s),p=n(19),h=n(708),m=function t(e){var n=this;(0,c.default)(this,t),this.onInit=function(t){var e=t.component,i=t.injections;n.component=e,n.injections=i;var r=(0,h.getInitState)(),u=r.data.currentAppName;i.reduce("init",{initState:r}),p.history.listen("mk-app-root",n.listen),n.onRedirect({appName:p.history.getChildApp("mk-app-root")||u})},this.listen=function(t,e,i){var r=(0,h.getInitState)().data.currentAppName,u=n.metaAction.gf("data.currentAppName")||r,a=t||r;a!=u&&n.injections.reduce("redirect",a)},this.onRedirect=function(t){var e=t.appName;p.history.pushChildApp("mk-app-root",e)},this.componentWillUnmount=function(){p.history.unlisten("mk-app-root",n.listen)},this.metaAction=e.metaAction,this.config=l.default.current};t.exports=e.default},1864:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new l.reducer(t),n=new m((0,d.default)({},t,{metaReducer:e}));return(0,d.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var u,a,o,c=n(4),d=i(c),f=n(6),s=i(f);e.default=r;var l=(n(73),n(200)),p=n(310),h=i(p),m=(n(708),n(19),a=u=function t(e){(0,s.default)(this,t),o.call(this),this.metaReducer=e.metaReducer,this.config=h.default.current},o=function(){var t=this;this.init=function(e,n){return t.metaReducer.init(e,n.initState)},this.redirect=function(e,n){return t.metaReducer.sf(e,"data.currentAppName",n)}},a);t.exports=e.default}});
webpackJsonp([11],{1832:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,u=r(4),i=n(u),c=r(53),s=n(c),f=r(6),p=n(f),d=r(14),l=n(d),h=r(7),g=n(h),m=r(8),v=n(m),k=r(0),w=(n(k),r(200)),b=r(710),x=n(b),_=(a=(0,w.wrapper)(x.default))(o=function(e){function t(){return(0,p.default)(this,t),(0,g.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),t}(k.Component))||o;t.default=_,e.exports=t.default},1833:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new k.action(e),r=new x((0,c.default)({},e,{metaAction:t})),n=(0,c.default)({},t,r);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var o=r(36),u=n(o),i=r(4),c=n(i),s=r(85),f=n(s),p=r(694),d=n(p),l=r(695),h=n(l),g=r(6),m=n(g);t.default=a;var v=r(0),k=(n(v),r(200)),w=r(698),b=n(w),x=function e(t){var r=this;(0,m.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;r.component=t,r.injections=n,n.reduce("init")},this.getLogo=function(){return r.config.logo},this.login=(0,h.default)(d.default.mark(function e(){var t,n,a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.mobile",value:t.mobile},{path:"data.form.password",value:t.password}]);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,r.webapi.user.login(t);case 8:a=e.sent,r.metaAction.context.set("currentUser",a),r.component.props.onRedirect&&r.config.goAfterLogin&&r.component.props.onRedirect(r.config.goAfterLogin);case 11:case"end":return e.stop()}},e,r)})),this.goRegister=function(){if(!r.config.apps["mk-app-register"])throw"请将这个应用加入到带mk-app-root和mk-app-register的网站中，跳转功能才能正常使用";r.component.props.onRedirect&&r.config.goRegister&&r.component.props.onRedirect(r.config.goRegister)},this.goForgot=function(){if(!r.config.apps["mk-app-forgot-password"])throw"请将这个应用加入到带mk-app-root和mk-app-forgot-password的网站中，跳转功能才能正常使用";r.component.props.onRedirect&&r.config.goForgot&&r.component.props.onRedirect(r.config.goForgot)},this.fieldChange=function(){var e=(0,h.default)(d.default.mark(function e(t,n){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.check([{path:t,value:n}]);case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.check=function(){var e=(0,h.default)(d.default.mark(function e(t){var n,a,o,i,s,p,l,h,g,m;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:n=[],a=!0,o=!1,i=void 0,e.prev=6,s=(0,f.default)(t);case 8:if(a=(p=s.next()).done){e.next=31;break}if(l=p.value,h=(0,c.default)({},l),"data.form.mobile"!=l.path){e.next=20;break}return e.t0=u.default,e.t1=h,e.next=16,r.checkMobile(l.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if("data.form.password"!=l.path){e.next=27;break}return e.t3=u.default,e.t4=h,e.next=25,r.checkPassword(l.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:n.push(h);case 28:a=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e.catch(6),o=!0,i=e.t6;case 37:e.prev=37,e.prev=38,!a&&s.return&&s.return();case 40:if(e.prev=40,!o){e.next=43;break}throw i;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return g={},m=!0,n.forEach(function(e){g[e.path]=e.value,g[e.errorPath]=e.message,e.message&&(m=!1)}),r.metaAction.sfs(g),e.abrupt("return",m);case 50:case"end":return e.stop()}},e,r,[[6,33,37,45],[38,,40,44]])}));return function(t){return e.apply(this,arguments)}}(),this.checkMobile=function(){var e=(0,h.default)(d.default.mark(function e(t){var n;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?/^1[3|4|5|8][0-9]\d{8}$/.test(t)||(n="请录入有效的手机号"):n="请录入手机号",e.abrupt("return",{errorPath:"data.other.error.mobile",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkPassword=function(){var e=(0,h.default)(d.default.mark(function e(t){var n;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n="请录入密码"),e.abrupt("return",{errorPath:"data.other.error.password",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.metaAction=t.metaAction,this.config=b.default.current,this.webapi=this.config.webapi};e.exports=t.default},1834:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new s.reducer(e),r=new d((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,r)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),u=n(o),i=r(6),c=n(i);t.default=a;var s=(r(73),r(200)),f=r(698),p=(n(f),r(711)),d=function e(t){var r=this;(0,c.default)(this,e),this.init=function(e,t){return r.metaReducer.init(e,(0,p.getInitState)())},this.metaReducer=t.metaReducer};e.exports=t.default}});
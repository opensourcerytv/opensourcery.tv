
          window.__NEXT_REGISTER_PAGE('/gallery', function() {
            var comp = module.exports=webpackJsonp([5],{366:function(e,t,o){e.exports=o(367)},367:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(21),i=n(a),u=o(8),r=n(u),s=o(22),l=n(s),d=o(9),p=n(d),f=o(23),c=n(f),h=o(44),m=n(h),y=o(3),v=n(y),k=o(42),x=n(k),_=o(386),b=n(_),g=o(200),w=n(g),j=(new w.default("opensourcerytv","opensourcery-content",["","events"]),function(e){function t(e){(0,r.default)(this,t);var o=(0,l.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return o.onKeyDown=o.onKeyDown.bind(o),o}return(0,c.default)(t,e),(0,p.default)(t,null,[{key:"getInitialProps",value:function(){return{photos:new Array(12).fill(0).map(function(e,t){return t+1})}}}]),(0,p.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown),Github.crawl(["events"])}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"onKeyDown",value:function(e){this.props.url.query.photoId&&27===e.keyCode&&this.props.url.back()}},{key:"dismissModal",value:function(){x.default.push("/")}},{key:"showPhoto",value:function(e,t){e.preventDefault(),x.default.push("/?photoId="+t,"/photo?id="+t)}},{key:"render",value:function(){var e=this,t=this.props,o=t.url,n=t.photos;return v.default.createElement("div",{className:"list","data-jsx":3611748052},o.query.photoId&&v.default.createElement(b.default,{id:o.query.photoId,onDismiss:function(){return e.dismissModal()}}),n.map(function(t){return v.default.createElement("div",{key:t,className:"photo","data-jsx":3611748052},v.default.createElement("a",{className:"photoLink",href:"/photo?id="+t,onClick:function(o){return e.showPhoto(o,t)},"data-jsx":3611748052},t))}),v.default.createElement(m.default,{styleId:3611748052,css:'.list[data-jsx="3611748052"]{padding:50px;text-align:center}.photo[data-jsx="3611748052"]{display:inline-block}.photoLink[data-jsx="3611748052"]{color:#333;verticalAlign:middle;cursor:pointer;background:#eee;display:inline-block;width:250px;height:250px;line-height:250px;margin:10px;border:2px solid transparent}.photoLink[data-jsx="3611748052"]:hover{borderColor:blue}'}))}}]),t}(v.default.Component));t.default=j},386:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(21),i=n(a),u=o(8),r=n(u),s=o(9),l=n(s),d=o(22),p=n(d),f=o(23),c=n(f),h=o(44),m=n(h),y=o(3),v=n(y),k=o(194),x=n(k),_=function(e){function t(){return(0,r.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,l.default)(t,[{key:"dismiss",value:function(e){this._shim!==e.target&&this._photoWrap!==e.target||this.props.onDismiss&&this.props.onDismiss()}},{key:"render",value:function(){var e=this;return v.default.createElement("div",{ref:function(t){return e._shim=t},className:"shim",onClick:function(t){return e.dismiss(t)},"data-jsx":1933048425},v.default.createElement("div",{ref:function(t){return e._photoWrap=t},className:"photo","data-jsx":1933048425},v.default.createElement(x.default,{id:this.props.id})),v.default.createElement(m.default,{styleId:1933048425,css:'.shim[data-jsx="1933048425"]{position:fixed;background:rgba(0,0,0,.65);left:0;right:0;top:0;bottom:0;margin:auto}.photo[data-jsx="1933048425"]{position:absolute;top:50%;width:100%;margin-top:-250px}'}))}}]),t}(v.default.Component);t.default=_}},[366]);
            return { page: comp.default }
          })
        
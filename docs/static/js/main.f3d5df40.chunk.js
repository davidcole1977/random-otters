(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t){t.exports=["01-otter-trade-minden_00571407.jpg","1_ir3MBJgZwPKAVghEbSdFIg.jpeg","Julie-Larsen-Maher-2_4116_Sea-Otter_AQ_02-01-18_hr.jpg","LutraCanadensis_fullres.jpg","Otter-01v2.jpg","Otters_in_a_row.jpg","aaci_banner3.jpg","aafc_banner.jpg","animals_hero_otter.jpg","duplaix_shortclawedotter3.jpg","maxresdefault.jpg","otter-group-thumb.ngsversion.1550790000350.adapt.1900.1.jpg","otter_shutterstock_506415685.jpg"]},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),c=(n(15),n(4)),s=n(5),l=n(7),g=n(6),h=n(8),u=n(1),d={objectFit:"contain",objectPosition:"center",width:"100vw",height:"100vh"},p={backgroundColor:"#000000",width:"100vw",height:"100vh"},m=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(g.a)(e).call(this,t))).getMeANewOtter=function(){var t=Math.floor(Math.random()*u.length);n.setState({otterImageUrl:u[t]}),console.log("displaying otter #".concat(t))},n.state={otterImageUrl:""},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getMeANewOtter(),this.newOtterInterval=setInterval(this.getMeANewOtter,3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.newOtterInterval)}},{key:"render",value:function(){return r.a.createElement("div",{style:p},r.a.createElement("img",{src:"".concat("/random-otters","/otters/").concat(this.state.otterImageUrl),alt:"awesome random otter innit",style:d}))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f3d5df40.chunk.js.map
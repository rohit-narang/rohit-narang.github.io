(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/myplayer.3a1dda06.png"},14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(19),n(20),n(2)),l=n(12),s=n.n(l),u=n(5),p=n(4),d={position:[0,0],walkIndex:0,playerLocation:"0px 0px"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BASE/MOVE_NORTH":return Object(c.a)({},e.player,{position:t.newPos,playerLocation:"".concat(58*t.walkIndex,"px ").concat(95,"px"),walkIndex:t.walkIndex});case"BASE/MOVE_SOUTH":return Object(c.a)({},e.player,{position:t.newPos,playerLocation:"".concat(58*t.walkIndex,"px ").concat(0,"px"),walkIndex:t.walkIndex});case"BASE/MOVE_WEST":return Object(c.a)({},e.player,{position:t.newPos,playerLocation:"".concat(58*t.walkIndex,"px ").concat(285,"px"),walkIndex:t.walkIndex});case"BASE/MOVE_EAST":return Object(c.a)({},e.player,{position:t.newPos,playerLocation:"".concat(58*t.walkIndex,"px ").concat(190,"px"),walkIndex:t.walkIndex});default:return e}},E=[[0,5,0,0,0,5,0,0,0,0,0,0,0],[0,6,0,4,0,0,0,0,5,4,6,0,0],[0,5,0,4,5,0,5,0,4,0,0,0,0],[0,5,0,0,0,0,5,5,4,5,5,5,0],[0,5,0,5,5,0,5,0,0,0,0,0,5],[0,0,0,5,5,0,0,0,4,5,0,0,7]],x={tiles:E},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TILES":return Object(c.a)({},e,{tiles:t.payload});default:return e}},f=Object(p.b)({player:w,maps:y}),m=Object(p.c)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=Object(u.b)(function(e){return Object(c.a)({},e.player,{position:e.player.position,playerLocation:e.player.playerLocation,walkIndex:e.player.walkIndex},e.maps,{tiles:e.maps.tiles})})(function(e){var t=function(t){t.preventDefault();var a=e.position,r=n(t.keyCode,a),i=function(){var t=e.walkIndex;return t<=5?t+1:0}(),c=o(a,r.newPos);return m.dispatch({type:r.type,newPos:c,walkIndex:i})};Object(a.useEffect)(function(){return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}});var n=function(e,t){switch(e){case 37:return{type:"BASE/MOVE_WEST",data:t,newPos:[t[0]-58,t[1]]};case 38:return{type:"BASE/MOVE_NORTH",data:t,newPos:[t[0],t[1]-95]};case 39:return{type:"BASE/MOVE_EAST",data:t,newPos:[t[0]+58,t[1]]};case 40:return{type:"BASE/MOVE_SOUTH",data:t,newPos:[t[0],t[1]+95]};default:return}},o=function(t,n){if(n[0]>696||n[0]<0||n[1]<0||n[1]>475)return t;var a=n[0]/58,r=n[1]/95;return e.tiles[r][a]>3?t:n};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"absolute",top:e.position[1],left:e.position[0],backgroundImage:"url('".concat(s.a,"')"),backgroundPosition:e.playerLocation,width:"58px",height:"95px"}}))}),k=(n(25),function(e){switch(e){case 0:return"grass";case 4:return"bricks";case 5:return"tree";case 6:return"rock";case 7:return"treasure"}}),O=function(e){return r.a.createElement(r.a.Fragment,null,e.tiles.map(function(e){return r.a.createElement("div",{className:"tile ".concat(k(e)),style:{height:95,width:58}})}))},v=function(e){return r.a.createElement("div",{style:{position:"relative",top:"0px",left:"0px",width:"754px",height:"570px",display:"flex",flexWrap:"wrap"}},e.value.map(function(e){return r.a.createElement(O,{tiles:e})}))},b=Object(u.b)(function(e){return{tiles:e.maps.tiles}})(function(e){return Object(a.useEffect)(function(){m.dispatch({type:"ADD_TILES",payload:E})}),r.a.createElement("div",{style:{position:"relative",width:"754px",height:"570px",backgroundColor:"white",border:"4px solid black",margin:"auto"}},r.a.createElement(h,null),r.a.createElement(v,{value:e.tiles}))});var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u.a,{store:m},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.d748935d.chunk.js.map
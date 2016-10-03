!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},a={}.hasOwnProperty,o=/^\.\.?(\/|$)/,i=function(e,t){for(var r,n=[],a=(o.test(t)?e+"/"+t:t).split("/"),i=0,u=a.length;i<u;i++)r=a[i],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(r){var n=i(u(t),r);return e.require(n,t)}},c=function(e,t){var n=null;n=g&&g.createHot(e);var a={id:e,exports:{},hot:n};return r[e]=a,t(a.exports,l(e),a),a.exports},s=function(e){return n[e]?s(n[e]):e},d=function(e,t){return s(i(u(e),t))},f=function(e,n){null==n&&(n="/");var o=s(e);if(a.call(r,o))return r[o].exports;if(a.call(t,o))return c(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};f.alias=function(e,t){n[t]=e};var m=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,h=function(e){if(m.test(e)){var t=e.replace(m,"");a.call(n,t)&&n[t].replace(m,"")!==t+"/index"||(n[t]=e)}if(p.test(e)){var r=e.replace(p,"");a.call(n,r)||(n[r]=e)}};f.register=f.define=function(e,n){if("object"==typeof e)for(var o in e)a.call(e,o)&&f.register(o,e[o]);else t[e]=n,delete r[e],h(e)},f.list=function(){var e=[];for(var r in t)a.call(t,r)&&e.push(r);return e};var g=e._hmr&&new e._hmr(d,f,t,r);f._cache=r,f.hmr=g&&g.wrap,f.brunch=!0,e.require=f}}(),function(){window;require.register("actions/index.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addImage=function(e,t,r){return{type:"ADD_IMAGE",id:e,src:t,name:r}},e.removeImage=function(e){return{type:"REMOVE_IMAGE",id:e}},e.addAlert=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info";return{type:"ADD_ALERT",url:e,message:t,state:r}},e.clearAlert=function(){return{type:"CLEAR_ALERT"}}}),require.register("components/alert.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),i=function(e){var t=e.message,r=e.url,n=e.state;e.data;return o["default"].createElement("div",{className:"alert alert-"+(n||"info")},o["default"].createElement("p",null,o["default"].createElement("strong",null,r,": ")," ",t))};e["default"]=i}),require.register("components/app.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.Home=void 0;var a=t("react"),o=n(a),i=t("../containers/form-input-container"),u=n(i),l=t("../containers/image-list-container"),c=n(l),s=t("./navbar"),d=n(s),f=t("./footer"),m=n(f),p=(e.Home=function(){return o["default"].createElement("div",{className:"container"},o["default"].createElement(u["default"],null),o["default"].createElement(c["default"],null))},function(e){var t=e.children;return o["default"].createElement("div",null,o["default"].createElement(d["default"],null),t,o["default"].createElement(m["default"],null))});e["default"]=p}),require.register("components/footer.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),i=function(){return o["default"].createElement("footer",{className:"footer"},o["default"].createElement("div",{className:"container"},"Created by ",o["default"].createElement("a",{href:"https://tkesgar.com",target:"_blank"},"Ted Kesgar"),".",o["default"].createElement("br",null),"View the source code on ",o["default"].createElement("a",{href:"https://github.com/tkesgar/miyako",target:"_blank"},"GitHub"),".",o["default"].createElement("br",null),"All code is licensed under ",o["default"].createElement("a",{href:"LICENSE"},"MIT License"),"."))};e["default"]=i}),require.register("components/form-input.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),i=function(e){var t=e.onSubmit;return o["default"].createElement("div",null,o["default"].createElement("h2",null,"Input"),o["default"].createElement("form",{className:"form-input",onSubmit:t},o["default"].createElement("div",{className:"form-group"},o["default"].createElement("label",{htmlFor:"urls"},"URLs"),o["default"].createElement("textarea",{id:"urls",name:"urls",className:"form-control",placeholder:"Insert URLs here",rows:"10",required:!0})),o["default"].createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Add Images")))};e["default"]=i}),require.register("components/image-list.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=t("react"),i=n(o),u=t("./alert"),l=n(u),c=t("./image"),s=n(c),d=function(e){var t=e.images,r=e.alerts,n=e.onRemoveImage;return i["default"].createElement("div",{className:"image-list"},i["default"].createElement("h2",null,"Images"),r.map(function(e,t){return i["default"].createElement(l["default"],a({key:t},e))}),i["default"].createElement("div",{className:"images"},t&&0!==t.length?t.map(function(e){return i["default"].createElement(s["default"],{key:e.id,src:e.src,name:e.name,onRemove:function(){return n(e.id)}})}):i["default"].createElement("div",{className:"images-empty well"},"No images to be shown.")))};e["default"]=d}),require.register("components/image.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),i=function(e){var t=e.src,r=e.name,n=e.onRemove;return o["default"].createElement("div",{className:"image"},o["default"].createElement("div",{className:"panel panel-default"},o["default"].createElement("div",{className:"panel-heading"},r),o["default"].createElement("div",{className:"panel-body"},o["default"].createElement("img",{className:"panel-image",src:t})),o["default"].createElement("div",{className:"panel-footer"},o["default"].createElement("a",{href:t,download:!0,target:"_blank",className:"btn btn-default"},"Download"),o["default"].createElement("button",{type:"button",className:"btn btn-danger pull-right",onClick:n},"Remove"))))};e["default"]=i}),require.register("components/navbar.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),i=t("react-router"),u=function(){return o["default"].createElement("nav",{className:"navbar navbar-inverse navbar-static-top"},o["default"].createElement("div",{className:"container"},o["default"].createElement("div",{className:"navbar-header"},o["default"].createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#mainNavbar"},o["default"].createElement("span",{className:"sr-only"},"Toggle navigation"),o["default"].createElement("span",{className:"icon-bar"}),o["default"].createElement("span",{className:"icon-bar"}),o["default"].createElement("span",{className:"icon-bar"})),o["default"].createElement(i.Link,{className:"navbar-brand",to:"/"},"Miyako")),o["default"].createElement("div",{className:"collapse navbar-collapse",id:"mainNavbar"},o["default"].createElement("ul",{className:"nav navbar-nav"},o["default"].createElement("li",null,o["default"].createElement(i.Link,{to:"/about"},"About"))),o["default"].createElement("ul",{className:"nav navbar-nav navbar-right"},o["default"].createElement("li",null,o["default"].createElement("a",{href:"https://github.com/tkesgar/miyako",target:"_blank"},"View on GitHub"))))))};e["default"]=u}),require.register("components/page.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.About=void 0;var a=t("react"),o=n(a),i=t("../pages/about"),u=n(i),l=function(e){var t=e.content;return o["default"].createElement("div",{className:"container",dangerouslySetInnerHTML:{__html:t}})};e.About=function(){return o["default"].createElement(l,{content:u["default"]})}}),require.register("config.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={endpoint:"/api"}}),require.register("containers/form-input-container.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react-redux"),o=t("../actions"),i=t("../lib/extract"),u=n(i),l=t("../components/form-input"),c=n(l),s=function(e){return{}},d=function(e){return{onSubmit:function(t){t.preventDefault(),e((0,o.clearAlert)());var r=t.target.elements.urls.value.split("\n").map(function(e){return e.trim()}).filter(function(e){return e});r.forEach(function(t){(0,u["default"])(t).then(function(r){Array.isArray(r)?r.forEach(function(r,n){var a=r.src,i=r.name;e((0,o.addImage)(t+"#"+n,a,i))}):e((0,o.addImage)(t,r.src,r.name))})["catch"](function(r){e((0,o.addAlert)(t,r.message,"danger"))})})}}};e["default"]=(0,a.connect)(s,d)(c["default"])}),require.register("containers/image-list-container.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react-redux"),o=t("../actions"),i=t("../components/image-list"),u=n(i),l=function(e){return{images:e.images,alerts:e.alerts}},c=function(e){return{onRemoveImage:function(t){return e((0,o.removeImage)(t))}}};e["default"]=(0,a.connect)(l,c)(u["default"])}),require.register("lib/extract.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("./mods/direct"),o=n(a),i=t("./mods/facebook"),u=n(i),l={direct:o["default"],facebook:u["default"]},c=function(e){return new Promise(function(t,r){var n=Object.keys(l),a=n.find(function(t){return l[t].pattern.test(e)})||null;if(a){var o=l[a];o.run(e).then(function(e){return t(e)})["catch"](function(e){return r(e)})}else r(new Error("URL is not supported"))})};e["default"]=c}),require.register("lib/mods/direct.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.run=function(e){return new Promise(function(t,r){var n=e,a=/.*\/(.*)\.(jpeg|jpg|png|gif)[\/?#]*.*/i.exec(e),o=a[1];t({src:n,name:o})})},a=e.pattern=/.*\.(jpeg|jpg|png|gif)/i;e["default"]={pattern:a,run:n}}),require.register("lib/mods/facebook.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.pattern=e.run=void 0;var a=t("superagent"),o=n(a),i=t("../../config"),u=n(i),l=u["default"].endpoint,c=e.run=function(e){return new Promise(function(t,r){o["default"].get(l).query({url:e}).end(function(e,n){if(e)r(e);else{var a=n.body;a.error?r(new Error(a.error)):t(a.result)}})})},s=e.pattern=/facebook\.com/i;e["default"]={pattern:s,run:c}}),require.register("main.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.getState=void 0;var a=t("react"),o=n(a),i=t("react-dom"),u=t("redux"),l=t("react-redux"),c=t("react-router"),s=t("./reducers"),d=n(s),f=t("./components/app"),m=n(f),p=t("./components/page"),h="production",g=void 0;g="development"===h?(0,u.createStore)(d["default"],window.devToolsExtension&&window.devToolsExtension()):(0,u.createStore)(d["default"]);e.getState=function(){return g.getState()};(0,i.render)(o["default"].createElement(l.Provider,{store:g},o["default"].createElement(c.Router,{history:c.browserHistory},o["default"].createElement(c.Route,{path:"/",component:m["default"]},o["default"].createElement(c.IndexRoute,{component:f.Home}),o["default"].createElement(c.Route,{path:"about",component:p.About})))),document.getElementById("app"))}),require.register("pages/about.md",function(e,t,r){var n='<h1 id="miyako">Miyako</h1>\n<p><img src="https://i.imgur.com/yeiiB.gif" alt="Miyako"></p>\n<p>Miyako is a simple app to download photos and photo albums from various URLs.</p>\n<p>I create this to make downloading various reference photos from Internet easier. Downloading all of them one-by-one is a complete waste of time.</p>\n<p>Also, I want to learn React and Redux.</p>\n<h2 id="supported-urls">Supported URLs</h2>\n<ul>\n<li>Direct link (<code>http://example.com/image.jpg</code>)</li>\n<li>Facebook photo (<code>https://www.facebook.com/example/123/456/?type=3&amp;theater</code>)</li>\n<li>Facebook album (<code>https://www.facebook.com/example/photos/?tab=album&amp;album_id=123</code>)</li>\n</ul>\n<h2 id="notes">Notes</h2>\n<ul>\n<li>In order to download Facebook photos, you need to login with your Facebook account. This is necessary to get access token for Facebook API.</li>\n<li>Firefox has additional security measures:<ul>\n<li>If you get error <code>Request has been terminated Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.</code>, it is possible that <a href="https://developer.mozilla.org/en-US/Firefox/Privacy/Tracking_Protection">Tracking Protection</a> turned on.</li>\n</ul>\n</li>\n<li>It is difficult to perform client-side scraping because of various security issues, so we have to either find APIs or write a backend. I choose the former for now, but for sites like Zerochan or Deviantart (who don&#39;t have any API, as far as I am aware) I might end up creating a backend anyway.</li>\n</ul>\n<h2 id="todo">Todo</h2>\n<ul>\n<li>[ ] Add more URL support<ul>\n<li>[ ] Twitter (possible with Twitter API)</li>\n<li>[ ] Zerochan</li>\n<li>[ ] Deviantart</li>\n<li>[ ] pixiv (there is a bunch of npm packages, but I haven&#39;t tested it yet)</li>\n</ul>\n</li>\n<li>[ ] Testing</li>\n<li>[ ] Documentation</li>\n</ul>\n<h2 id="miyako-who-">Miyako who?</h2>\n<p>From <a href="https://en.wikipedia.org/wiki/Hidamari_Sketch">Hidamari Sketch</a>.</p>\n<p><img src="http://www.ilbazardimari.net/wp-content/uploads/Hidamari-sketch-6.gif" alt="Miyako laughing"></p>\n<h2 id="licence">Licence</h2>\n<p><a href="LICENSE">MIT License</a></p>\n';"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof r&&r&&r.exports&&(r.exports=n)}),require.register("reducers/alerts.js",function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_ALERT":var r={url:t.url,message:t.message,state:t.state};return[].concat(n(e),[r]);case"CLEAR_ALERT":return[];default:return e}};e["default"]=a}),require.register("reducers/images.js",function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"ADD_IMAGE":return{id:t.id,src:t.src,name:t.name};default:return e}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_IMAGE":return[].concat(n(e),[a(void 0,t)]);case"REMOVE_IMAGE":return e.filter(function(e){return e.id!=t.id});default:return e}};e["default"]=o}),require.register("reducers/index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("redux"),o=t("./images"),i=n(o),u=t("./alerts"),l=n(u);e["default"]=(0,a.combineReducers)({images:i["default"],alerts:l["default"]})}),require.register("test/direct.js",function(e,t,r){"use strict";var n=t("../lib/mods/direct"),a=chai.expect,o={"url .gif":{url:"http://yahallo.com/test.gif",name:"test"},"url .jpeg":{url:"http://yahallo.com/test.jpeg",name:"test"},"url .jpg":{url:"http://yahallo.com/test.jpg",name:"test"},"url .png":{url:"http://yahallo.com/test.png",name:"test"},"url with extra slash":{url:"http://yahallo.com/test.png/revision/latest",name:"test"},"url with extra slash with query":{url:"http://yahallo.com/test.png/revision/latest?resize=1200&cache=abc",name:"test"},"url with query":{url:"http://yahallo.com/test.png?resize=1200&cache=abc",name:"test"},"url without extension":{url:"http://yahallo.com/test",name:"test"},"url without extension with query":{url:"http://yahallo.com/test?resize=1200&cache=abc",name:"test"},"url without protocol":{url:"yahallo.com/test.png#123",name:"test"},"url with double slash":{url:"//yahallo.com/test.png#123",name:"test"}},i={string:"Yahallo!"};describe("direct",function(){describe("type",function(){it("should return promise",function(){a((0,n.run)("http://yahallo.com/test.jpg")).to.be.a("promise")}),it("should resolve with #src and #name string",function(){return(0,n.run)("http://yahallo.com/test.jpg").then(function(e){var t=e.name,r=e.src;a(t).to.be.a("string"),a(r).to.be.a("string")})}),it("should reject with #message",function(){return(0,n.run)("yahallo")["catch"](function(e){var t=e.message;a(t).to.be.a("string")})})}),describe("pattern",function(){var e=function(e){var t=o[e].url;it("should accept "+e,function(){a(t).to.match(n.pattern)})};for(var t in o)e(t);var r=function(e){var t=i[e].url;it("should reject "+e,function(){a(t).not.to.match(n.pattern)})};for(var u in i)r(u)}),describe("src",function(){it("should return the url",function(){var e="http://yahallo.com/test.png";return(0,n.run)(e).then(function(t){var r=t.src;a(r).to.equal(e)})})}),describe("name",function(){var e=function(e){var t=o[e];it("should extract filename from "+e,function(){return(0,n.run)(t.url).then(function(e){var r=e.name;a(r).to.equal(t.name)})})};for(var t in o)e(t)})})}),require.register("test/extract.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=t("../lib/extract"),o=n(a),i=chai.expect;describe("extract",function(){describe("types",function(){it("should return promise",function(){i((0,o["default"])("http://yahallo.com/test.jpg")).to.be.a("promise")}),it("should reject with Error if fails",function(){return(0,o["default"])("yahallo")["catch"](function(e){i(e).to.be["instanceof"](Error)})})})})}),require.register("test/index.js",function(e,t,r){"use strict";t("./extract"),t("./direct")}),require.register("___globals___",function(e,t,r){})}(),require("___globals___");
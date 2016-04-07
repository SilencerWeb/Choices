!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/assets/scripts/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Choices=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(2),a=n(13),c=i(a),u=n(14),l=n(15),d=t.Choices=function(){function e(t){r(this,e);var n=document.createElement("fakeel"),i=t||{},o={element:document.querySelector("[data-choice]"),disabled:!1,items:[],addItems:!0,removeItems:!0,editItems:!1,maxItems:!1,delimiter:",",allowDuplicates:!0,regexFilter:!1,debug:!1,placeholder:!1,prependValue:!1,appendValue:!1,selectAll:!0,callbackOnInit:function(){},callbackOnRender:function(){},callbackOnRemoveItem:function(){},callbackOnAddItem:function(){}};this.initialised=!1,this.options=(0,l.extend)(o,i||{}),this.store=(0,s.createStore)(c.default),this.supports="querySelector"in document&&"addEventListener"in document&&"classList"in n,this.element=this.options.element,this.presetItems=[],this.options.items.length?this.presetItems=this.options.items:""!==this.element.value&&(this.presetItems=this.element.value.split(this.options.delimiter)),this.onKeyDown=this.onKeyDown.bind(this),this.onClick=this.onClick.bind(this),this.render=this.render.bind(this),this.init=this.init.bind(this),this.init()}return o(e,[{key:"isDisabled",value:function(){return!!this.input.disabled}},{key:"isEmpty",value:function(){return 0===this.store.getState().length}},{key:"onKeyDown",value:function(e){var t=this,n=this.store.getState(),i=e.ctrlKey||e.metaKey,r=8,o=13,s=65;if(e.target===this.input){if(i&&e.keyCode===s&&this.list&&this.list.children){var a=function(){t.options.removeItems&&!t.input.value&&t.options.selectAll&&t.selectAll(t.list.children)};a()}e.keyCode===o&&e.target.value&&!function(){var e=t.input.value,i=function(){var i=!0;if(t.options.maxItems&&t.options.maxItems<=t.list.children.length&&(i=!1),t.options.allowDuplicates===!1&&t.element.value&&(i=!n.some(function(t){return t.value===e})),i&&"text"===t.element.type){var r=!0;t.options.regexFilter&&(r=t.regexFilter(e)),r&&(t.addItem(e),t.clearInput(t.element))}};i()}()}if(e.keyCode===r&&!e.target.value){var c=function(){if(t.options.removeItems){var e=t.list.querySelectorAll(".choices__item"),n=t.list.querySelectorAll(".is-selected"),i=e[e.length-1];i&&!t.options.editItems&&t.selectItem(i),t.options.editItems&&i&&0===n.length?(t.input.value=i.innerHTML,t.removeItem(i)):t.removeAll(e)}};c(),e.preventDefault()}}},{key:"onClick",value:function(e){var t=this;if("LI"===e.target.tagName){var n=e.target,i=function(e){for(var n=e.getAttribute("data-choice-id"),i=t.list.children,r=0;r<i.length;r++){var o=i[r],s=o.getAttribute("data-choice-id");s!==n||o.classList.contains("is-selected")?t.deselectItem(o):t.selectItem(o)}};i(n)}}},{key:"clearInput",value:function(){this.input.value&&(this.input.value="")}},{key:"regexFilter",value:function(e){var t=new RegExp(this.options.regexFilter,"i"),n=t.test(e);return n}},{key:"selectItem",value:function(e){var t=e.getAttribute("data-choice-id");this.store.dispatch((0,u.selectItemFromStore)(t,!0))}},{key:"deselectItem",value:function(e){var t=e.getAttribute("data-choice-id");this.store.dispatch((0,u.selectItemFromStore)(t,!1))}},{key:"selectAll",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];this.selectItem(n)}}},{key:"addItem",value:function(e){this.options.debug&&console.debug("Add item");var t=e;this.options.prependValue&&(t=this.options.prependValue+t.toString()),this.options.appendValue&&(t+=this.options.appendValue.toString());var n=this.store.getState().length+1;this.options.callbackOnAddItem&&((0,l.isType)("Function",this.options.callbackOnAddItem)?this.options.callbackOnAddItem(n,e):console.error("callbackOnAddItem: Callback is not a function")),this.store.dispatch((0,u.addItemToStore)(t,n))}},{key:"removeItem",value:function(e){if(!e)return void console.error("removeItem: No item was passed to be removed");var t=e.getAttribute("data-choice-id"),n=e.innerHTML;this.options.callbackOnRemoveItem&&((0,l.isType)("Function",this.options.callbackOnRemoveItem)?this.options.callbackOnRemoveItem(n):console.error("callbackOnRemoveItem: Callback is not a function")),this.store.dispatch((0,u.removeItemFromStore)(t))}},{key:"removeAll",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.classList.contains("is-selected")&&this.removeItem(n)}}},{key:"renderTextInput",value:function(){var e=this,t=(0,l.strToEl)('<div class="choices choices--active"></div>'),n=(0,l.strToEl)('<div class="choices__inner"></div>');this.element.classList.add("choices__input","choices__input--hidden"),this.element.tabIndex="-1",this.element.setAttribute("style","display:none;"),this.element.setAttribute("aria-hidden","true"),(0,l.wrap)(this.element,n),(0,l.wrap)(n,t);var i=(0,l.strToEl)('<div class="choices__list choices__list--items"></div>'),r=(0,l.strToEl)('<input type="text" class="choices__input choices__input--cloned">');r.placeholder&&(r.placeholder=this.element.placeholder),this.options.addItems||(r.disabled=!0),t.appendChild(n),n.appendChild(i),n.appendChild(r),this.containerOuter=t,this.containerInner=n,this.input=r,this.list=i,this.presetItems.forEach(function(t){e.addItem(t)}),this.store.subscribe(this.render),this.render(),this.addEventListeners()}},{key:"addEventListeners",value:function(){document.addEventListener("keydown",this.onKeyDown),this.list.addEventListener("click",this.onClick)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this.onKeyDown),this.list.removeEventListener("click",this.onClick)}},{key:"render",value:function(){var e=this,t=this.store.getState(),n=t.reduce(function(e,t){return e.push(t.value),e},[]);this.element.value=n.join(this.options.delimiter),this.list.innerHTML="",t.forEach(function(t){if(t.active){var n=(0,l.strToEl)('<div class="choices__item '+(t.selected?"is-selected":"")+'" data-choice-id="'+t.id+'" data-choice-selected="'+t.selected+'">'+t.value+"</div>");e.list.appendChild(n)}}),console.log(t)}},{key:"renderInput",value:function(e){switch(this.options.debug&&console.debug("Render"),e.type){case"text":this.renderTextInput();break;case"select-one":break;case"select-multiple":break;default:this.renderTextInput()}}},{key:"init",value:function(){this.supports||console.error("init: Your browser doesn'nt support shit"),this.initialised=!0,this.renderInput(this.element)}},{key:"destroy",value:function(){this.options=null,this.element=null,this.initialised=null}}]),e}();!function(){var e=document.getElementById(1),t=document.getElementById(2),n=document.getElementById(3),i=document.getElementById(4),r=document.getElementById(5),o=document.getElementById(6);new d({element:e,delimiter:" ",editItems:!0,maxItems:5}),new d({element:t,allowDuplicates:!1,editItems:!0}),new d({element:n,allowDuplicates:!1,editItems:!0,regexFilter:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}),new d({element:i,addItems:!1}),new d({element:r,prependValue:"item-",appendValue:"-"+Date.now()}),new d({element:o,items:["josh@joshuajohnson.co.uk","joe@bloggs.co.uk"]})}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(3),o=i(r),s=n(8),a=i(s),c=n(10),u=i(c),l=n(11),d=i(l),f=n(12),p=i(f),h=n(9);i(h);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=u.default,t.applyMiddleware=d.default,t.compose=p.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){function i(){h===p&&(h=p.slice())}function o(){return f}function c(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return i(),h.push(e),function(){if(t){t=!1,i();var n=h.indexOf(e);h.splice(n,1)}}}function u(e){if(!(0,s.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,f=d(f,e)}finally{m=!1}for(var t=p=h,n=0;n<t.length;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");d=e,u({type:a.INIT})}if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var d=e,f=t,p=[],h=p,m=!1;return u({type:a.INIT}),{dispatch:u,subscribe:c,getState:o,replaceReducer:l}}t.__esModule=!0,t.ActionTypes=void 0,t.default=r;var o=n(4),s=i(o),a=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){function i(e){if(!s(e)||f.call(e)!=a||o(e))return!1;var t=r(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==d}var r=n(5),o=n(6),s=n(7),a="[object Object]",c=Object.prototype,u=Function.prototype.toString,l=c.hasOwnProperty,d=u.call(Object),f=c.toString;e.exports=i},function(e,t){function n(e){return i(Object(e))}var i=Object.getPrototypeOf;e.exports=n},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=t&&t.type,i=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+i+". To ignore an action, you must explicitly return the previous state."}function o(e){Object.keys(e).forEach(function(t){var n=e[t],i=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof i)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:r}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var s=t[i];"function"==typeof e[s]&&(n[s]=e[s])}var a,c=Object.keys(n);try{o(n)}catch(u){a=u}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var i=!1,o={},s=0;s<c.length;s++){var u=c[s],l=n[u],d=e[u],f=l(d,t);if("undefined"==typeof f){var p=r(u,t);throw new Error(p)}o[u]=f,i=i||f!==d}return i?o:e}}t.__esModule=!0,t.default=s;var a=n(3),c=n(4),u=(i(c),n(9));i(u)},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t.default=n},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;o<i.length;o++){var s=i[o],a=e[s];"function"==typeof a&&(r[s]=n(a,t))}return r}t.__esModule=!0,t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,i,r){var s=e(n,i,r),c=s.dispatch,u=[],l={getState:s.getState,dispatch:function(e){return c(e)}};return u=t.map(function(e){return e(l)}),c=a.default.apply(void 0,u)(s.dispatch),o({},s,{dispatch:c})}}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.__esModule=!0,t.default=r;var s=n(12),a=i(s)},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],n=t.slice(0,-1);return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=[],r=function(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case"ADD_ITEM":var r=[].concat(n(e),[{id:parseInt(t.id),value:t.value,active:!0,selected:!1}]);return r.map(function(e){return e.selected&&(e.selected=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===parseInt(t.id)&&(e.active=!1),e});case"SELECT_ITEM":return e.map(function(e){return e.id===parseInt(t.id)&&(e.selected=t.value),e});default:return e}};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItemToStore=function(e,t){return{type:"ADD_ITEM",value:e,id:t}},t.removeItemFromStore=function(e){return{type:"REMOVE_ITEM",id:e}},t.selectItemFromStore=function(e,t){return{type:"SELECT_ITEM",id:e,value:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(t.hasClass=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.isType=function(e,t){var n=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&n===e}),i=(t.extend=function(){for(var e={},t=arguments.length,i=function(t){for(var n in t)e[n]=t[n]},r=0;t>r;r++){var o=arguments[r];n("Object",o)?i(o):console.error("Custom options must be an object")}return e},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(void 0!==t.style[e])return n[e]});t.getParentsUntil=function(e,t,n){for(var i=[];e&&e!==document;e=e.parentNode){if(t){var r=t.charAt(0);if("."===r&&e.classList.contains(t.substr(1)))break;if("#"===r&&e.id===t.substr(1))break;if("["===r&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(n){var o=n.charAt(0);"."===o&&e.classList.contains(n.substr(1))&&i.push(e),"#"===o&&e.id===n.substr(1)&&i.push(e),"["===o&&e.hasAttribute(n.substr(1,n.length-1))&&i.push(e),e.tagName.toLowerCase()===n&&i.push(e)}else i.push(e)}return 0===i.length?null:i},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.debounce=function(e,t,n){var i;return function(){var r=this,o=arguments,s=function(){i=null,n||e.apply(r,o)},a=n&&!i;clearTimeout(i),i=setTimeout(s,t),a&&e.apply(r,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var n=t;return n>1&&(n=1),n>0&&(n=0),Math.max(e.offsetHeight*n)},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,n){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,n)},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var n=i(),r=function o(){e.classList.remove(t),e.removeEventListener(n,o,!1)};e.classList.add(t),e.addEventListener(n,r,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.strToEl=function(){var e=document.createElement("div");return function(t){var n;for(e.innerHTML=t,n=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return n}}(),t.getWidthOfInput=function(){var e=document.createElement("span");e.className="input-element tmp-element",e.innerHTML=inputEl.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),document.body.appendChild(e);var t=e.getBoundingClientRect().width;return document.body.removeChild(e),t}}]);
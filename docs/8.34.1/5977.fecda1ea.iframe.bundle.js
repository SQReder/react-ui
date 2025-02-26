"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5977],{"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DropdownContainer,a:()=>StyledDropdownContainer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useClickOutside=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),parseShadowFromTheme=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),PositionInPortal=__webpack_require__("./src/components/PositionInPortal.tsx"),useInterval=__webpack_require__("./src/components/common/hooks/useInterval.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),DropdownProvider=__webpack_require__("./src/components/DropdownProvider.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),setVerticalPosition=function(rect,targetRect,viewportHeight){var rectHeight=rect.bottom-rect.top+8,enoughHeightOnTheTop=targetRect.top>=rectHeight,enoughHeightOnTheBottom=viewportHeight-targetRect.bottom>=rectHeight,targetInsideViewport=targetRect.top>=0&&targetRect.bottom<=viewportHeight,targetAboveViewport=targetRect.bottom<=0,targetUnderViewport=targetRect.top>=viewportHeight,targetCrossTopViewport=targetRect.top<0&&0<targetRect.bottom&&targetRect.bottom<viewportHeight,targetCrossBottomViewport=0<targetRect.top&&targetRect.top<viewportHeight&&targetRect.bottom>viewportHeight;if(targetInsideViewport){if(!enoughHeightOnTheTop&&!enoughHeightOnTheBottom)return{upward:!1,translateY:"".concat(viewportHeight-targetRect.bottom-rectHeight-16,"px")};if(enoughHeightOnTheTop&&enoughHeightOnTheBottom);else if(!enoughHeightOnTheTop&&enoughHeightOnTheBottom);else if(enoughHeightOnTheTop&&!enoughHeightOnTheBottom)return{upward:!0,translateY:"0"}}else if(targetAboveViewport)return{upward:!1,translateY:"".concat(0-targetRect.bottom+8,"px")};else if(targetUnderViewport)return{upward:!0,translateY:"".concat(viewportHeight-targetRect.top-8,"px")};else if(targetCrossTopViewport)return enoughHeightOnTheBottom?{upward:!1,translateY:"0"}:{upward:!1,translateY:"".concat(0-targetRect.bottom+8,"px")};else if(targetCrossBottomViewport)return enoughHeightOnTheTop?{upward:!0,translateY:"0"}:{upward:!0,translateY:"".concat(viewportHeight-targetRect.top-8)};return{upward:!1,translateY:"0"}},setHorizontalPosition=function(rect,targetRect,viewportWidth){var rectWidth=rect.right-rect.left,targetInsideViewport=targetRect.left>=0&&targetRect.right<=viewportWidth,targetBeforeViewport=targetRect.right<=0,targetAfterViewport=targetRect.left>=viewportWidth,targetCrossLeftViewport=targetRect.left<0&&0<targetRect.right&&targetRect.right<viewportWidth,targetCrossRightViewport=targetRect.right>viewportWidth&&0<targetRect.left&&targetRect.left<viewportWidth;if(targetInsideViewport){var enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(!enoughWidthOnTheLeft&&!enoughWidthOnTheRight)return{align:"flex-end",translateX:"".concat(viewportWidth-targetRect.right-16,"px")};if(enoughWidthOnTheLeft&&enoughWidthOnTheRight)return{align:"flex-end",translateX:"0"};if(containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight)return{align:"flex-start",translateX:"0"};if(containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft)return{align:"flex-end",translateX:"0"}}else if(targetBeforeViewport||targetCrossLeftViewport)return{align:"flex-start",translateX:"".concat(0-targetRect.left+16,"px")};else if(targetAfterViewport||targetCrossRightViewport)return{align:"flex-end",translateX:"".concat(viewportWidth-targetRect.right-16,"px")};return{align:"",translateX:"0"}};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  pointer-events: initial;\n  margin: 8px 0;\n  flex: 0 0 auto;\n  ",";\n  max-width: calc(100vw - 32px);\n  opacity: 0;\n  transition-delay: 200ms;\n  transition-property: opacity;\n\n  &:focus-visible {\n    border: 2px solid blue;\n  }\n\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  pointer-events: none;\n  height: 100%;\n  flex: 0 0 auto;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: ",";\n  flex-wrap: nowrap;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  box-shadow: var(--admiral-box-shadow-Shadow08, ",");\n  border-radius: var(--admiral-border-radius-Medium, ",");\n  overflow: hidden;\n  width: max-content;\n  background: var(--admiral-color-Special_ElevatedBG, ",");\n"]);return _templateObject3=function _templateObject(){return data},data}var Container=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.$alignSelf?"align-self: ".concat(p.$alignSelf,";"):""},function(p){return p.$dropContainerCssMixin}),FakeTarget=styled_components_browser_esm.Ay.div(_templateObject1()),Portal=(0,styled_components_browser_esm.Ay)(PositionInPortal.l)(_templateObject2(),function(p){return p.$reverse?"column-reverse":"column"}),DropdownContainer=(0,react.forwardRef)(function(_param,ref){var targetElement=_param.targetElement,_param_onClickOutside=_param.onClickOutside,onClickOutside=void 0===_param_onClickOutside?function(){return null}:_param_onClickOutside,_param_className=_param.className,alignSelf=_param.alignSelf,dropContainerCssMixin=_param.dropContainerCssMixin,props=_object_without_properties(_param,["targetElement","onClickOutside","className","alignSelf","dropContainerCssMixin"]),containerRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),displayUpward=_useState[0],setDisplayUpward=_useState[1],_useDropdown=(0,DropdownProvider.BK)(containerRef),addDropdown=_useDropdown.addDropdown,removeDropdown=_useDropdown.removeDropdown,dropdowns=_useDropdown.dropdowns,rootRef=(0,react.useContext)(DropdownProvider.rO).rootRef;(0,useClickOutside.L)([containerRef],function(e){(0,DropdownProvider.TT)(e,dropdowns)&&onClickOutside(e)}),(0,react.useLayoutEffect)(function(){if(containerRef.current!==document.activeElement){var _containerRef_current;null==containerRef||null===(_containerRef_current=containerRef.current)||void 0===_containerRef_current||_containerRef_current.focus()}},[]);var checkDropdownPosition=(0,react.useCallback)(function(){var node=containerRef.current;if(node&&targetElement){var rect=node.getBoundingClientRect(),targetRect=targetElement.getBoundingClientRect(),viewportWidth=globalThis.innerWidth,_setVerticalPosition=setVerticalPosition(rect,targetRect,globalThis.innerHeight),upward=_setVerticalPosition.upward,translateY=_setVerticalPosition.translateY;if(displayUpward!==upward&&setDisplayUpward(upward),alignSelf&&"auto"!==alignSelf)node.style.transform="translateY(".concat(translateY,")");else{var _setHorizontalPosition=setHorizontalPosition(rect,targetRect,viewportWidth),align=_setHorizontalPosition.align,translateX=_setHorizontalPosition.translateX;node.style.transform="translate(".concat(translateX,", ").concat(translateY,")"),node.style.alignSelf=align}}},[displayUpward,targetElement]);return(0,useInterval.$)(checkDropdownPosition,100),(0,react.useEffect)(function(){containerRef.current&&(containerRef.current.style.opacity="1")},[]),(0,react.useLayoutEffect)(function(){return null==addDropdown||addDropdown(containerRef),function(){null==removeDropdown||removeDropdown(containerRef)}},[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Portal,{targetElement:targetElement,$reverse:displayUpward,rootRef:rootRef,children:[(0,jsx_runtime.jsx)(FakeTarget,{}),(0,jsx_runtime.jsx)(Container,_object_spread_props(_object_spread({ref:(0,refSetter.d)(ref,containerRef)},props),{className:(void 0===_param_className?"":_param_className)+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin}))]})})});DropdownContainer.displayName="DropdownContainer";var StyledDropdownContainer=(0,styled_components_browser_esm.Ay)(DropdownContainer)(_templateObject3(),function(p){return(0,parseShadowFromTheme.C)(p.theme.shadow["Shadow 08"])},function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.color["Special/Elevated BG"]});StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!0,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useClickOutside=function(elements,handler){var listener=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(e){elements.every(function(element){return element.current&&!element.current.contains(e.target)})&&handler(e)},[handler,elements]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function(){return document.addEventListener("mousedown",listener,!0),document.addEventListener("touchstart",listener),function(){document.removeEventListener("mousedown",listener,!0),document.removeEventListener("touchstart",listener)}},[listener])}},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){var intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){callbackRef.current=callback},[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if("number"==typeof delay)return intervalRef.current=setInterval(function(){return callbackRef.current()},delay),function(){return clearInterval(intervalRef.current||0)}},[delay]),intervalRef}}}]);
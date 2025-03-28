"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7322],{"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/AvatarBaseGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>AvatarBaseGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/uid.ts"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_DropMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/DropMenu/index.tsx"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),_src_components_AvatarBase__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/AvatarBase/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n  white-space: nowrap;\n  & > * {\n    margin-left: -","px;\n  }\n  & > *:first-child {\n    margin-left: 0;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  flex-flow: nowrap;\n  justify-content: flex-start;\n  & > button:first-child {\n    margin-right: 8px;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  cursor: pointer;\n"]);return _templateObject2=function _templateObject(){return data},data}var AvatarsBaseWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(p){return p.$withActivityRing?10:2}),AvatarBaseMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D)(_templateObject1()),MenuAvatarBase=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_AvatarBase__WEBPACK_IMPORTED_MODULE_4__.d)(_templateObject2()),AvatarBaseGroup=function(_param){var items=_param.items,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"neutral2":_param_appearance,onAvatarSelect=_param.onAvatarSelect,menuWidth=_param.menuWidth,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,_param_withActivityRing=_param.withActivityRing,withActivityRing=void 0!==_param_withActivityRing&&_param_withActivityRing,props=_object_without_properties(_param,["items","dimension","appearance","onAvatarSelect","menuWidth","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","withActivityRing"]),dropMenuProps=(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.c$)(props),wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(items.length),2),visibleItems=_useState[0],setVisibleItems=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),2),hiddenItems=_useState1[0],setHiddenItems=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),2),selected=_useState2[0],setSelected=_useState2[1],WIDTH={xs:24,s:32,m:40,l:48,xl:56};(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){if(wrapperRef.current){var resizeObserver=new ResizeObserver(function(entries){entries.forEach(function(entry){var visibleItems=~~((entry.contentRect.width||0)/WIDTH[dimension]);setVisibleItems(visibleItems>=items.length?items.length:Math.max(visibleItems-1,0)),setHiddenItems(visibleItems>=items.length?0:items.length-visibleItems+1)})});return resizeObserver.observe(wrapperRef.current),function(){resizeObserver.disconnect()}}},[dimension]);var visible=items.slice(0,visibleItems),hidden=items.slice(visibleItems,visibleItems+hiddenItems),modelHidden=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return hidden.map(function(_param){var idProp=_param.id,item=_object_without_properties(_param,["id"]),id=idProp||(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_6__.L)();return{id:id,render:function(options){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AvatarBaseMenuItem,_object_spread_props(_object_spread({role:"option",id:id,dimension:"m"},options),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_AvatarBase__WEBPACK_IMPORTED_MODULE_4__.d,_object_spread_props(_object_spread({},item),{userName:item.userName,dimension:"xs",appearance:item.appearance||appearance,showTooltip:!1,status:void 0,withActivityRing:withActivityRing,showActivityRing:item.showActivityRing})),item.userName]}),id)}}})},[hidden]),handleSelectAvatar=function(id){null==onAvatarSelect||onAvatarSelect(id),setSelected(id)},containsActiveAvatar=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return -1!=modelHidden.findIndex(function(item){return item.id===selected})},[modelHidden,selected]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AvatarsBaseWrapper,_object_spread_props(_object_spread({ref:wrapperRef},props),{$withActivityRing:withActivityRing,children:[1===items.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_AvatarBase__WEBPACK_IMPORTED_MODULE_4__.d,_object_spread_props(_object_spread({},items[0]),{dimension:dimension,withActivityRing:withActivityRing})),items.length>1&&visible.map(function(item,index){var id=item.id||(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_6__.L)(),last=index===items.length-1;return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_components_AvatarBase__WEBPACK_IMPORTED_MODULE_4__.d,_object_spread_props(_object_spread({},item),{userName:item.userName,key:id,id:id,onClick:function(e){item.onClick&&item.onClick(e),handleSelectAvatar(e.currentTarget.id)},onKeyDown:function(e){var code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_7__.r.getCode(e);(code===_common_keyboardKey__WEBPACK_IMPORTED_MODULE_7__.r.Enter||code===_common_keyboardKey__WEBPACK_IMPORTED_MODULE_7__.r[" "])&&(item.onKeyDown&&item.onKeyDown(e),handleSelectAvatar(e.currentTarget.id))},dimension:dimension,appearance:item.appearance||appearance,group:!last,status:void 0,withActivityRing:withActivityRing}))}),hiddenItems>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DropMenu__WEBPACK_IMPORTED_MODULE_8__.f,_object_spread_props(_object_spread({dimension:"m",menuWidth:menuWidth,menuMaxHeight:menuMaxHeight,items:modelHidden,selected:containsActiveAvatar?selected:void 0,onSelectItem:handleSelectAvatar,disabled:!1,alignSelf:"flex-start",dropContainerCssMixin:dropContainerCssMixin,dropContainerClassName:dropContainerClassName,dropContainerStyle:dropContainerStyle},dropMenuProps),{renderContentProp:function(param){var buttonRef=param.buttonRef,handleKeyDown=param.handleKeyDown,handleClick=param.handleClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuAvatarBase,{ref:buttonRef,userName:"+"+modelHidden.length,isMenuAvatar:!0,appearance:appearance,dimension:dimension,showTooltip:!1,onClick:handleClick,onKeyDown:handleKeyDown,className:"avatar-menu-with-dropdown",withActivityRing:withActivityRing})}})):null]}))};AvatarBaseGroup.displayName="AvatarBaseGroup";try{AvatarBaseGroup.displayName="AvatarBaseGroup",AvatarBaseGroup.__docgenInfo={description:"",displayName:"AvatarBaseGroup",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarBaseProps[]"}},dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"neutral2"},description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}},withActivityRing:{defaultValue:{value:"false"},description:"Аватары с опцией activity ring",name:"withActivityRing",required:!1,type:{name:"boolean"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarBaseGroup/index.tsx#AvatarBaseGroup"]={docgenInfo:AvatarBaseGroup.__docgenInfo,name:"AvatarBaseGroup",path:"src/components/AvatarBaseGroup/index.tsx#AvatarBaseGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DropMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DropMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/OpenStatusButton.tsx"),_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownContainer/index.tsx"),_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  width: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  ","\n"]);return _templateObject1=function _templateObject(){return data},data}var StyledMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.W)(_templateObject(),function(param){return param.$width||"auto"}),DropMenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject1(),function(p){return p.$dropContainerCssMixin||""}),DropMenu=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,menuWidth=_param.menuWidth,_param_disabled=_param.disabled,_param_loading=_param.loading,_param_alignSelf=_param.alignSelf,onClose=_param.onClose,onOpen=_param.onOpen,items=_param.items,selected=_param.selected,active=_param.active,onSelectItem=_param.onSelectItem,onActivateItem=_param.onActivateItem,onChange=_param.onChange,onClick=_param.onClick,onKeyDown=_param.onKeyDown,alignMenuRef=_param.alignMenuRef,targetElement=_param.targetElement,renderContentProp=_param.renderContentProp,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,_param_multiSelection=_param.multiSelection,multiSelection=void 0!==_param_multiSelection&&_param_multiSelection,_param_disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,disableSelectedOptionHighlight=void 0!==_param_disableSelectedOptionHighlight&&_param_disableSelectedOptionHighlight,isVisible=_param.isVisible,_param_onVisibilityChange=_param.onVisibilityChange,onVisibilityChange=void 0===_param_onVisibilityChange?function(){}:_param_onVisibilityChange,onClickOutside=_param.onClickOutside,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,virtualScroll=_param.virtualScroll,props=_object_without_properties(_param,["dimension","menuWidth","disabled","loading","alignSelf","onClose","onOpen","items","selected","active","onSelectItem","onActivateItem","onChange","onClick","onKeyDown","alignMenuRef","targetElement","renderContentProp","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","multiSelection","disableSelectedOptionHighlight","isVisible","onVisibilityChange","onClickOutside","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","virtualScroll"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isMenuOpenState=_useState[0],setIsMenuOpenState=_useState[1],btnRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),targetNode=targetElement||(null==alignMenuRef?void 0:alignMenuRef.current)||btnRef.current,isMenuOpen=null!=isVisible?isVisible:isMenuOpenState,setIsMenuOpen=function(newMenuOpenState){setIsMenuOpenState(newMenuOpenState),onVisibilityChange(newMenuOpenState)},closeMenu=function(){var _btnRef_current;setIsMenuOpen(!1),null==onClose||onClose(),null===(_btnRef_current=btnRef.current)||void 0===_btnRef_current||_btnRef_current.focus()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[renderContentProp({disabled:void 0!==_param_disabled&&_param_disabled,buttonRef:btnRef,handleKeyDown:function(e){var code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.getCode(e);switch(null==onKeyDown||onKeyDown(e),code){case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Escape:isMenuOpen&&closeMenu();break;case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Enter:case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r[" "]:isMenuOpen||(e.stopPropagation(),setIsMenuOpen(!0),null==onOpen||onOpen(),e.preventDefault())}},handleClick:function(e){isMenuOpen?null==onClose||onClose():null==onOpen||onOpen(),setIsMenuOpen(!isMenuOpen),null==onClick||onClick(e)},statusIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__.$,{$isOpen:isMenuOpen,"aria-hidden":!0}),menuState:isMenuOpen}),isMenuOpen&&!(void 0!==_param_loading&&_param_loading)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DropMenuContainer,_object_spread_props(_object_spread({ref:ref,role:"listbox",alignSelf:void 0===_param_alignSelf?"flex-end":_param_alignSelf,targetElement:targetNode,onClickOutside:function(e){var _btnRef_current;e.target&&(null===(_btnRef_current=btnRef.current)||void 0===_btnRef_current?void 0:_btnRef_current.contains(e.target))||(onClickOutside?onClickOutside(e):(setIsMenuOpen(!1),null==onClose||onClose()))},$dropContainerCssMixin:dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMenu,{maxHeight:menuMaxHeight,$width:menuWidth,virtualScroll:virtualScroll,model:items,selected:selected,onSelectItem:function(id){null==onChange||onChange(id),null==onSelectItem||onSelectItem(id),void 0!==isVisible||multiSelection||disableSelectedOptionHighlight||closeMenu()},dimension:void 0===_param_dimension?"m":_param_dimension,active:active,onActivateItem:onActivateItem,multiSelection:multiSelection,disableSelectedOptionHighlight:disableSelectedOptionHighlight,renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove})}))]})});DropMenu.displayName="DropMenu";try{DropMenu.displayName="DropMenu",DropMenu.__docgenInfo={description:"",displayName:"DropMenu",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.\nВзамен используйте onSelectItem\n\nКолбек на изменение выбранной опции",name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.\nВзамен используйте isVisible and onVisibilityChange\n\nКолбек на открытие меню",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.\nВзамен используйте isVisible and onVisibilityChange\n\nКолбек на закрытие меню",name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},alignMenuRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nКомпонент, относительно которого необходимо выравнивать выпадающее меню",name:"alignMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderContentProp:{defaultValue:null,description:"Компонент, для которого необходимо Menu",name:"renderContentProp",required:!0,type:{name:"(options: RenderContentProps) => ReactNode"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},disableSelectedOptionHighlight:{defaultValue:{value:"false"},description:"Возможность отключить подсветку выбранной опции\n(например, при множественном выборе, когда у каждой опции есть Checkbox)",name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:{value:"false"},description:"@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.\nВзамен используйте disableSelectedOptionHighlight\n\nВозможность множественного выбора (опции с Checkbox)",name:"multiSelection",required:!1,type:{name:"boolean"}},virtualScroll:{defaultValue:null,description:"Включение виртуального скролла для меню.\nМаксимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет\nвысота согласно dimension",name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:{value:"flex-end"},description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropMenu/index.tsx#DropMenu"]={docgenInfo:DropMenu.__docgenInfo,name:"DropMenu",path:"src/components/DropMenu/index.tsx#DropMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  transition: transform 0.3s ease-in-out;\n  transform: rotate(","deg);\n  & *[fill^='#'] {\n    fill: ",";\n  }\n\n  &:hover *[fill^='#'] {\n    fill: ",";\n  }\n\n  &[data-loading] {\n    pointer-events: none;\n  }\n\n  &[data-disabled] {\n    pointer-events: none;\n\n    *[fill^='#'] {\n      fill: var(--admiral-color-Neutral_Neutral30, ",");\n    }\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var OpenStatusButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h)(_templateObject(),function(p){return 180*!!p.$isOpen},function(param){var appearance=param.appearance,theme=param.theme;return"white"===appearance?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")},function(p){return"white"===p.appearance?"":"var(--admiral-color-Primary_Primary70, ".concat(p.theme.color["Primary/Primary 70"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]})}}]);
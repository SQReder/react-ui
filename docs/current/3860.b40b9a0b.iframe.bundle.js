"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3860],{"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function isObject(val){return null!==val&&!Array.isArray(val)&&(void 0===val?"undefined":_type_of(val))==="object"}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});for(var codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(var j=0;j<26;j+=1){var n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}var keyboardKey={codes:codes,getCode:function getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey:function getKey(eventOrCode){var isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;var name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[+!!eventOrCode.shiftKey]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey["0"],keyboardKey.Digit1=keyboardKey["1"],keyboardKey.Digit2=keyboardKey["2"],keyboardKey.Digit3=keyboardKey["3"],keyboardKey.Digit4=keyboardKey["4"],keyboardKey.Digit5=keyboardKey["5"],keyboardKey.Digit6=keyboardKey["6"],keyboardKey.Digit7=keyboardKey["7"],keyboardKey.Digit8=keyboardKey["8"],keyboardKey.Digit9=keyboardKey["9"],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/Menu/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  ","\n  ul[data-dimension='s'] & {\n    ","\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  color: ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  background: ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  padding: ",";\n  ul[data-dimension='m'] && {\n    padding: 8px 16px;\n  }\n  ul[data-dimension='s'] && {\n    padding: 6px 12px;\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}var styleTextMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){return"s"===param.$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]},typography.Il["Body/Body 2 Long"]),colorTextMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){var theme=param.theme;return param.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}),backgroundColor=(0,styled_components_browser_esm.AH)(_templateObject2(),function(param){var theme=param.theme,$selected=param.$selected,$preselected=param.$preselected;return param.$hovered?"var(--admiral-color-Opacity_Hover, ".concat(theme.color["Opacity/Hover"],")"):$preselected?"var(--admiral-color-Opacity_Press, ".concat(theme.color["Opacity/Press"],")"):$selected?"var(--admiral-color-Opacity_Focus, ".concat(theme.color["Opacity/Focus"],")"):"var(--admiral-color-Special_ElevatedBG, ".concat(theme.color["Special/Elevated BG"],")")}),paddings=(0,styled_components_browser_esm.AH)(_templateObject3(),function(param){switch(param.$dimension){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}),SmallArrowRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg");function styled_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function styled_templateObject(){var data=styled_tagged_template_literal(["\n  transition: all 0.3s;\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  margin: 0 0 0 8px;\n  [data-icon='left'] & {\n    margin: 0 8px 0 0;\n  }\n  & *[fill^='#'] {\n    fill: var(--admiral-color-Neutral_Neutral50, ",");\n  }\n  [data-disabled='true'] & {\n    & *[fill^='#'] {\n      fill: var(--admiral-color-Neutral_Neutral30, ",");\n    }\n  }\n  [data-dimension='s'] & {\n    width: 20px;\n    height: 20px;\n  }\n"]);return styled_templateObject=function _templateObject(){return data},data}var Chevron=(0,styled_components_browser_esm.Ay)(SmallArrowRightOutline.h)(styled_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuItem_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuItem_templateObject(){var data=MenuItem_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  position: relative;\n  justify-content: space-between;\n  outline: none;\n  white-space: pre;\n  margin: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  ","\n  ","\n  ","\n  ","\n\n  &&[data-disabled='true'] {\n    cursor: not-allowed;\n    background-color: var(--admiral-color-Special_ElevatedBG, ",");\n    color: var(--admiral-color-Neutral_Neutral30, ",");\n    && *[fill^='#'] {\n      fill: var(--admiral-color-Neutral_Neutral30, ",");\n    }\n    && input[type='checkbox'] + * [fill^='#'] {\n      fill: var(--admiral-color-Neutral_Neutral00, ",");\n    }\n  }\n\n  &&[data-readonly='true'] {\n    cursor: default;\n  }\n"]);return MenuItem_templateObject=function _templateObject(){return data},data}function MenuItem_templateObject1(){var data=MenuItem_tagged_template_literal(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return MenuItem_templateObject1=function _templateObject(){return data},data}var stopEventHandler=function(e){e.preventDefault(),e.stopPropagation()},MenuItem=(0,react.forwardRef)(function(_param,ref){var children=_param.children,_param_expandIcon=_param.expandIcon,expandIcon=void 0===_param_expandIcon?(0,jsx_runtime.jsx)(Chevron,{}):_param_expandIcon,hasSubmenu=_param.hasSubmenu,onHover=_param.onHover,disabled=_param.disabled,readOnly=_param.readOnly,hovered=_param.hovered,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_selected=_param.selected,_param_preselected=_param.preselected,preselected=void 0!==_param_preselected&&_param_preselected,selfRef=_param.selfRef,onMouseDown=_param.onMouseDown,onLeave=_param.onLeave,props=(_param.containerRef,_object_without_properties(_param,["children","expandIcon","hasSubmenu","onHover","disabled","readOnly","hovered","dimension","selected","preselected","selfRef","onMouseDown","onLeave","containerRef"])),handleMouseDown=disabled?stopEventHandler:onMouseDown,resolvedRef=selfRef?(0,refSetter.d)(ref,selfRef):ref;return(0,jsx_runtime.jsxs)(Item,_object_spread_props(_object_spread({ref:resolvedRef,$dimension:dimension,$preselected:preselected,$selected:void 0!==_param_selected&&_param_selected,$hovered:hovered,"data-preselected":preselected,"data-hovered":hovered,"data-disabled":disabled,"data-readonly":readOnly,"data-dimension":dimension,onMouseEnter:function(e){var _props_onMouseEnter;null==onHover||onHover(e),null===(_props_onMouseEnter=props.onMouseEnter)||void 0===_props_onMouseEnter||_props_onMouseEnter.call(props,e)},onMouseLeave:function(e){var _props_onMouseLeave;null==onLeave||onLeave(e),null===(_props_onMouseLeave=props.onMouseLeave)||void 0===_props_onMouseLeave||_props_onMouseLeave.call(props,e)},onMouseMove:function(e){var _props_onMouseMove;null==onHover||onHover(e),null===(_props_onMouseMove=props.onMouseMove)||void 0===_props_onMouseMove||_props_onMouseMove.call(props,e)},onMouseDown:handleMouseDown},props),{children:[react.Children.toArray(children).map(function(child,index){return"string"==typeof child?(0,jsx_runtime.jsx)(TextWrapper,{children:child},child+index):child}),hasSubmenu&&expandIcon]}))});MenuItem.displayName="MenuItem";var Item=styled_components_browser_esm.Ay.div(MenuItem_templateObject(),paddings,styleTextMixin,colorTextMixin,backgroundColor,function(p){return p.theme.color["Special/Elevated BG"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),TextWrapper=styled_components_browser_esm.Ay.span(MenuItem_templateObject1());try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{selected:{defaultValue:{value:"false"},description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},preselected:{defaultValue:{value:"false"},description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:{value:"<Chevron />"},description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.17.0, будет удалено в 10.x.x версии.\n\nссылка на элемент, при работе через renderProp",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"'l' as ItemDimension"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/MenuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}}}]);
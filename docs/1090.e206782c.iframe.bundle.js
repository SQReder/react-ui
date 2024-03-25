"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1090],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M5.226 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.37 5.55-6.41a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.9c-.28.31-.76.31-1.04 0L5.396 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M9.996 16.211c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.494-3.146-3.49-3.018a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.98 3.458c.31.28.31.76 0 1.04l-3.984 3.586c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(val){return null!==val&&!Array.isArray(val)&&"object"==typeof val}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});const codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(let j=0;j<26;j+=1){let n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}const keyboardKey={codes,getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey(eventOrCode){const isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;let name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[eventOrCode.shiftKey?1:0]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey[0],keyboardKey.Digit1=keyboardKey[1],keyboardKey.Digit2=keyboardKey[2],keyboardKey.Digit3=keyboardKey[3],keyboardKey.Digit4=keyboardKey[4],keyboardKey.Digit5=keyboardKey[5],keyboardKey.Digit6=keyboardKey[6],keyboardKey.Digit7=keyboardKey[7],keyboardKey.Digit8=keyboardKey[8],keyboardKey.Digit9=keyboardKey[9],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/Menu/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");const styleTextMixin=(0,styled_components_browser_esm.AH)([""," ul[data-dimension='s'] &{","}"],(({$dimension})=>"s"===$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]),typography.Il["Body/Body 2 Long"]),colorTextMixin=(0,styled_components_browser_esm.AH)(["color:",";"],(({theme,$disabled})=>$disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${theme.color["Neutral/Neutral 90"]})`)),backgroundColor=(0,styled_components_browser_esm.AH)(["background:",";"],(({theme,$selected,$hovered})=>$hovered?`var(--admiral-color-Opacity_Hover, ${theme.color["Opacity/Hover"]})`:$selected?`var(--admiral-color-Opacity_Focus, ${theme.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${theme.color["Special/Elevated BG"]})`)),paddings=(0,styled_components_browser_esm.AH)(["padding:",";ul[data-dimension='m'] &&{padding:8px 16px;}ul[data-dimension='s'] &&{padding:6px 12px;}"],(({$dimension})=>{switch($dimension){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}));var SmallArrowRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg");const Chevron=(0,styled_components_browser_esm.Ay)(SmallArrowRightOutline.h).withConfig({displayName:"styled__Chevron",componentId:"sc-h2e66q-0"})(["transition:all 0.3s;flex-shrink:0;width:24px;height:24px;margin:0 0 0 8px;[data-icon='left'] &{margin:0 8px 0 0;}& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral50,",");}[data-disabled='true'] &{& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}[data-dimension='s'] &{width:20px;height:20px;}"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]));var refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const stopEventHandler=e=>{e.preventDefault(),e.stopPropagation()},MenuItem=react.forwardRef((({children,expandIcon=(0,jsx_runtime.jsx)(Chevron,{}),hasSubmenu,onHover,disabled,hovered,dimension="l",selected=!1,selfRef,onMouseDown,onLeave,containerRef,...props},ref)=>{const handleMouseDown=disabled?stopEventHandler:onMouseDown,resolvedRef=selfRef?(0,refSetter.d)(ref,selfRef):ref;return(0,jsx_runtime.jsxs)(Item,{ref:resolvedRef,$dimension:dimension,$selected:selected,$hovered:hovered,"data-hovered":hovered,"data-disabled":disabled,"data-dimension":dimension,onMouseEnter:e=>{onHover?.(),props.onMouseEnter?.(e)},onMouseLeave:e=>{onLeave?.(e),props.onMouseLeave?.(e)},onMouseMove:e=>{onHover?.(),props.onMouseMove?.(e)},onMouseDown:handleMouseDown,...props,children:[react.Children.toArray(children).map(((child,index)=>"string"==typeof child?(0,jsx_runtime.jsx)(TextWrapper,{children:child},child+index):child)),hasSubmenu&&expandIcon]})}));MenuItem.displayName="MenuItem";const Item=styled_components_browser_esm.Ay.div.withConfig({displayName:"MenuItem__Item",componentId:"sc-jdadix-0"})(["display:flex;align-items:center;user-select:none;position:relative;justify-content:space-between;outline:none;white-space:pre;margin:0;cursor:pointer;box-sizing:border-box;"," "," "," "," &&[data-disabled='true']{cursor:not-allowed;background-color:var(--admiral-color-Special_ElevatedBG,",");color:var(--admiral-color-Neutral_Neutral30,",");&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}&& input[type='checkbox'] + * [fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}}"],paddings,styleTextMixin,colorTextMixin,backgroundColor,(p=>p.theme.color["Special/Elevated BG"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),TextWrapper=styled_components_browser_esm.Ay.span.withConfig({displayName:"MenuItem__TextWrapper",componentId:"sc-jdadix-1"})(["overflow:hidden;text-overflow:ellipsis;"]);try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:{value:"false"},description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:{value:"<Chevron />"},description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/MenuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useClickOutside=(elements,handler)=>{const listener=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{elements.every((element=>element.current&&!element.current.contains(e.target)))&&handler(e)}),[handler,elements]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(document.addEventListener("mousedown",listener,!0),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener,!0),document.removeEventListener("touchstart",listener)})),[listener])}},"./src/components/input/InputEx/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>InputEx});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/input/Container.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/InputIconButton.tsx"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_input_InputEx_SuffixSelect__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/input/InputEx/SuffixSelect.tsx"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/Tooltip/index.tsx"),_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/TextInput/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["::-ms-clear,::-ms-reveal{display:none;}"]),Input=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input.withConfig({displayName:"InputEx__Input",componentId:"sc-xw3euq-0"})(["outline:none;appearance:none;border-radius:inherit;box-sizing:border-box;flex:1 1 auto;min-width:10px;border:none;background:transparent;text-overflow:ellipsis;padding:0;color:var(--admiral-color-Neutral_Neutral90,",");&&&:disabled{color:var(--admiral-color-Neutral_Neutral30,",");}"," &::placeholder{color:var(--admiral-color-Neutral_Neutral50,",");}&:disabled::placeholder{color:var(--admiral-color-Neutral_Neutral30,",");}[data-disable-copying] &{user-select:none;pointer-events:none;}&&&:user-invalid + ","{border:1px solid var(--admiral-color-Error_Error60Main,",");}&&&:user-invalid:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Error_Error70,",");}&&&:user-invalid:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Error_Error60Main,",");}",""],(p=>p.theme.color["Neutral/Neutral 90"]),(p=>p.theme.color["Neutral/Neutral 30"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.R$,(p=>p.theme.color["Error/Error 60 Main"]),_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.R$,(p=>p.theme.color["Error/Error 70"]),_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.R$,(p=>p.theme.color["Error/Error 60 Main"]),ieFixes),PrefixContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"InputEx__PrefixContainer",componentId:"sc-xw3euq-1"})(["align-self:center;border-right:solid 1px var(--admiral-color-Neutral_Neutral20,",");padding-right:8px;margin-right:8px;",";color:",";white-space:nowrap;"],(p=>p.theme.color["Neutral/Neutral 20"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),(({disabled,theme})=>disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`)),SuffixContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"InputEx__SuffixContainer",componentId:"sc-xw3euq-2"})(["align-self:center;border-left:solid 1px var(--admiral-color-Neutral_Neutral20,",");padding-left:8px;margin-left:8px;",";color:",";white-space:nowrap;"],(p=>p.theme.color["Neutral/Neutral 20"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),(({disabled,theme})=>disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`)),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"InputEx__IconPanel",componentId:"sc-xw3euq-3"})(["position:relative;display:flex;align-items:center;& > svg{border-radius:var(--admiral-border-radius-Medium,",");display:block;width:","px;&:focus{outline:none;}&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}}& > *:not(:first-child){margin-left:8px;}"],(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_6__.VM)(p.theme.shape)),(props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}}),(p=>p.theme.color["Primary/Primary 60 Main"])),preventDefault=e=>e.preventDefault(),Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"InputEx__Container",componentId:"sc-xw3euq-4"})(["position:relative;display:flex;align-items:stretch;overflow:hidden;border:none;border-radius:",";padding:0 ","px;background-color:var(--admiral-color-Neutral_Neutral00,",");&[data-read-only],&[data-disabled]{background-color:var(--admiral-color-Neutral_Neutral10,",");}"," ",";",""],(p=>p.$skeleton?0:`var(--admiral-border-radius-Medium, ${(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_6__.VM)(p.theme.shape)})`),(props=>{switch(props.$dimension){case"xl":default:return 16;case"s":return 12}}),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Neutral/Neutral 10"]),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_7__.Cg,(({$skeleton})=>$skeleton&&_src_components_input_Container__WEBPACK_IMPORTED_MODULE_7__.vy),_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.fw),InputEx=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({dimension,menuWidth,displayClearIcon,status,containerRef=()=>null,alignDropRef,icons,children,className,style,placeholder,prefixValue,renderPrefixValue=({value})=>value?String(value):value,prefixValueList,onPrefixValueChange,renderPrefixOption,suffixValue,renderSuffixValue=({value})=>value?String(value):value,suffixValueList,onSuffixValueChange,renderSuffixOption,skeleton=!1,dropContainerCssMixin,prefixDropContainerStyle,suffixDropContainerStyle,showTooltip=!0,...props},ref)=>{const innerContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),alignRef=alignDropRef||innerContainerRef,menuDimension="xl"===dimension?"l":dimension,renderPrefix=prefixValueList?props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_input_InputEx_SuffixSelect__WEBPACK_IMPORTED_MODULE_8__.E,{dropAlign:"flex-start",dimension:menuDimension,menuWidth,alignRef,value:props.value||"",onChange:value=>onPrefixValueChange?.(value),options:prefixValueList,disabled:props.disabled,readOnly:props.readOnly,dropContainerCssMixin:prefixDropContainerStyle?.dropContainerCssMixin||dropContainerCssMixin,dropContainerClassName:prefixDropContainerStyle?.dropContainerClassName,dropContainerStyle:prefixDropContainerStyle?.dropContainerStyle,renderValue:renderPrefixValue,renderOption:renderPrefixOption}):renderPrefixValue,prefix=renderPrefix({value:prefixValue,disabled:props.disabled,readOnly:props.readOnly}),renderSuffix=suffixValueList?props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_input_InputEx_SuffixSelect__WEBPACK_IMPORTED_MODULE_8__.E,{dropAlign:"flex-end",dimension:menuDimension,menuWidth,alignRef,value:props.value||"",onChange:value=>onSuffixValueChange?.(value),options:suffixValueList,disabled:props.disabled,readOnly:props.readOnly,dropContainerCssMixin:suffixDropContainerStyle?.dropContainerCssMixin||dropContainerCssMixin,dropContainerClassName:suffixDropContainerStyle?.dropContainerClassName,dropContainerStyle:suffixDropContainerStyle?.dropContainerStyle,renderValue:renderSuffixValue,renderOption:renderSuffixOption}):renderSuffixValue,suffix=renderSuffix({value:suffixValue,disabled:props.disabled,readOnly:props.readOnly}),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[overflowActive,setOverflowActive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[tooltipVisible,setTooltipVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[innerValueState,setInnerValueState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.defaultValue??void 0),innerValue=props.value??innerValueState;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__.p)(inputRef.current)?setOverflowActive(!0):setOverflowActive(!1)}),[tooltipVisible,setOverflowActive]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{function show(){document.activeElement!==inputRef.current&&setTooltipVisible(!0)}function hide(){setTooltipVisible(!1)}const wrapper=innerContainerRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("mousedown",hide),()=>{wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("mousedown",hide)}}),[setTooltipVisible]);const iconArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(icons);!props.readOnly&&displayClearIcon&&innerValue&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__.h,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon"));const iconCount=iconArray.length;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{className,style,"data-disabled":!!props.disabled||void 0,$dimension:dimension,ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_12__.d)(innerContainerRef,containerRef),"data-read-only":!!props.readOnly||void 0,"data-status":status,"data-disable-copying":!!props.disableCopying||void 0,onMouseDown:props.disableCopying?preventDefault:void 0,$skeleton:skeleton,$status:status,disabled:props.disabled,readOnly:props.readOnly,children:[!!prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PrefixContainer,{$dimension:dimension,disabled:props.disabled,children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Input,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_12__.d)(ref,inputRef),...props,onChange:e=>{setInnerValueState(e.currentTarget.value),props.onChange?.(e)},placeholder,$iconCount:iconCount,$dimension:dimension}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_input_TextInput__WEBPACK_IMPORTED_MODULE_5__.R$,{$status:status,disabled:props.disabled||props.readOnly}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),!!suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SuffixContainer,{$dimension:dimension,disabled:props.disabled,children:suffix}),children]}),showTooltip&&tooltipVisible&&overflowActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_13__.m,{renderContent:()=>inputRef?.current?.value||"",targetElement:innerContainerRef.current})]})}));InputEx.defaultProps={dimension:"m"},InputEx.displayName="InputEx";try{InputEx.displayName="InputEx",InputEx.__docgenInfo={description:"",displayName:"InputEx",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:{value:"() => null"},description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},alignDropRef:{defaultValue:null,description:"Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:{value:"({ value }) => (!value ? value : String(value))"},description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:{value:"({ value }) => (!value ? value : String(value))"},description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated use columnsButtonDropContainerStyle.dropContainerCssMixin instead\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},showTooltip:{defaultValue:{value:"true"},description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/index.tsx#InputEx"]={docgenInfo:InputEx.__docgenInfo,name:"InputEx",path:"src/components/input/InputEx/index.tsx#InputEx"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);
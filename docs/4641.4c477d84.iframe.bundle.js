"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4641],{"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.6 9.6 0 0 1-2.562.349 9.8 9.8 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19 19 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M11.306 9.08c.376-.088.694.233.694.62v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 5c-4.88 0-8.134 3.655-9.563 5.682a2.27 2.27 0 0 0 0 2.636C3.867 15.345 7.119 19 12 19c4.88 0 8.134-3.655 9.563-5.682a2.27 2.27 0 0 0 0-2.636C20.133 8.656 16.881 5 12 5M5.709 8.927a15 15 0 0 0-2.21 2.505.97.97 0 0 0 0 1.136c.522.74 1.263 1.654 2.21 2.505A7 7 0 0 1 5 12c0-1.102.255-2.145.709-3.073M12 17.7a5.7 5.7 0 1 1 0-11.4 5.7 5.7 0 0 1 0 11.4m6.291-8.773a15 15 0 0 1 2.21 2.505.97.97 0 0 1 0 1.136 15 15 0 0 1-2.21 2.505A7 7 0 0 0 19 12a7 7 0 0 0-.709-3.073",clipRule:"evenodd"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DropdownContainer,a:()=>StyledDropdownContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PositionInPortal.tsx"),_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useInterval.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownProvider.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/themes/borderRadius.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__Container",componentId:"sc-1eulg01-0"})(["pointer-events:initial;margin:8px 0;flex:0 0 auto;",";max-width:calc(100vw - 32px);opacity:0;transition-delay:200ms;transition-property:opacity;&:focus-visible{border:2px solid blue;}",""],(p=>p.$alignSelf?`align-self: ${p.$alignSelf};`:""),(p=>p.$dropContainerCssMixin)),FakeTarget=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__FakeTarget",componentId:"sc-1eulg01-1"})(["pointer-events:none;height:100%;flex:0 0 auto;"]),Portal=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__.l).withConfig({displayName:"DropdownContainer__Portal",componentId:"sc-1eulg01-2"})(["display:flex;flex-direction:",";flex-wrap:nowrap;"],(p=>p.$reverse?"column-reverse":"column")),DropdownContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({targetRef,targetElement,onClickOutside=()=>null,className="",alignSelf,dropContainerCssMixin,...props},ref)=>{const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[displayUpward,setDisplayUpward]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),targetNode=targetElement??targetRef?.current,{addDropdown,removeDropdown,dropdowns}=(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.BK)(containerRef),{rootRef}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.rO);(0,_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__.L)([containerRef],(e=>{(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.TT)(e,dropdowns)&&onClickOutside(e)})),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{containerRef.current!==document.activeElement&&containerRef?.current?.focus()}),[]);const checkDropdownPosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const node=containerRef.current;if(node&&targetNode){const rect=node.getBoundingClientRect(),targetRect=targetNode.getBoundingClientRect(),viewportHeight=window.innerHeight,viewportWidth=window.innerWidth;if(viewportHeight-rect.bottom<0&&targetRect.top>viewportHeight-targetRect.bottom?displayUpward||setDisplayUpward(!0):(targetRect.bottom+(targetRect.top-rect.top)<viewportHeight-8||targetRect.top<viewportHeight-targetRect.bottom)&&displayUpward&&setDisplayUpward(!1),alignSelf&&"auto"!==alignSelf)return;const rectWidth=rect.right-rect.left,enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right-16>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(enoughWidthOnTheLeft||enoughWidthOnTheRight)node.style.transform="translateX(0)",enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-end":containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-start":containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft&&(node.style.alignSelf="flex-end");else{node.style.alignSelf="center";const offset=(viewportWidth-rect.width)/2-(targetRect.left-(rectWidth-targetRect.width)/2);node.style.transform=`translateX(${offset}px)`}}}),[displayUpward,targetRef,targetElement]);return(0,_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__.$)(checkDropdownPosition,100),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{containerRef.current&&(containerRef.current.style.opacity="1")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>(addDropdown?.(containerRef),()=>{removeDropdown?.(containerRef)})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portal,{targetElement:targetNode,$reverse:displayUpward,rootRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FakeTarget,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__.d)(ref,containerRef),...props,className:className+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin})]})})}));DropdownContainer.displayName="DropdownContainer";const StyledDropdownContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(DropdownContainer).withConfig({displayName:"DropdownContainer__StyledDropdownContainer",componentId:"sc-1eulg01-3"})(["box-shadow:var(--admiral-box-shadow-Shadow08,",");border-radius:var(--admiral-border-radius-Medium,",");overflow:hidden;width:max-content;"],(p=>(0,_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__.C)(p.theme.shadow["Shadow 08"])),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__.VM)(p.theme.shape)));StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется выпадающее меню",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");const OpenStatusButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h).withConfig({displayName:"OpenStatusButton",componentId:"sc-126g2c3-0"})(["transition:transform 0.3s ease-in-out;transform:rotate(","deg);& *[fill^='#']{fill:",";}&:hover *[fill^='#']{fill:",";}&[data-disabled]{pointer-events:none;*[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.$isOpen?180:0),(({appearance,theme})=>"white"===appearance?`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`),(p=>"white"===p.appearance?"":`var(--admiral-color-Primary_Primary70, ${p.theme.color["Primary/Primary 70"]})`),(p=>p.theme.color["Neutral/Neutral 30"]))},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("number"==typeof delay)return intervalRef.current=window.setInterval((()=>callbackRef.current()),delay),()=>window.clearInterval(intervalRef.current||0)}),[delay]),intervalRef}},"./src/components/input/InputEx/SuffixSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>SuffixSelect});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OpenStatusButton=__webpack_require__("./src/components/OpenStatusButton.tsx"),DropdownContainer=__webpack_require__("./src/components/DropdownContainer/index.tsx"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),parseShadowFromTheme=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const menuListHeights=(0,styled_components_browser_esm.AH)(["max-height:",";"],(({$dimension,$maxHeight})=>{if($maxHeight)return $maxHeight;switch($dimension){case"l":default:return"304px";case"m":return"256px";case"s":return"208px"}})),Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"Menu__Wrapper",componentId:"sc-114angb-0"})(["pointer-events:initial;background-color:var(--admiral-color-Special_ElevatedBG,",");border-radius:var(--admiral-border-radius-Medium,",");box-shadow:var(--admiral-box-shadow-Shadow08,",");max-width:calc(100vw - 32px);border-color:transparent;",";overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth;"],(p=>p.theme.color["Special/Elevated BG"]),(p=>(0,borderRadius.VM)(p.theme.shape)),(p=>(0,parseShadowFromTheme.C)(p.theme.shadow["Shadow 08"])),menuListHeights),StyledDiv=styled_components_browser_esm.Ay.div.withConfig({displayName:"Menu__StyledDiv",componentId:"sc-114angb-1"})(["margin:0;padding:8px 0;appearance:none;flex:0 0 auto;border:none;"]);function defaultOptionRender({value,...props}){return(0,jsx_runtime.jsx)(MenuItem.D,{...props,children:String(value)})}defaultOptionRender.displayName="defaultOptionRender";const Menu=(0,react.forwardRef)((({options,selected,renderOption=defaultOptionRender,onSelect,dimension,maxHeight,preventFocusSteal,...props},ref)=>{const[activeOption,setActiveOption]=(0,react.useState)(null),menuRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{function handleKeyDown(e){switch(keyboardKey.r.getCode(e)){case keyboardKey.r[" "]:case keyboardKey.r.Enter:activeOption&&onSelect(activeOption),e.preventDefault();break;case keyboardKey.r.ArrowDown:setActiveOption((()=>{const currentIndex=selected?options.indexOf(activeOption||selected):0;return currentIndex+1>options.length?options[0]:options[currentIndex+1]})()),e.preventDefault();break;case keyboardKey.r.ArrowUp:setActiveOption((()=>{const currentIndex=selected?options.indexOf(activeOption||selected):0;return currentIndex-1<0?options[options.length-1]:options[currentIndex-1]})()),e.preventDefault()}}return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[activeOption]);return(0,react.useEffect)((()=>{const hoveredItem=menuRef.current?.querySelector('[data-hovered="true"]');hoveredItem?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}),[activeOption]),(0,jsx_runtime.jsx)(Wrapper,{ref,$dimension:dimension,$maxHeight:maxHeight,...props,children:(0,jsx_runtime.jsx)(StyledDiv,{ref:menuRef,children:options.map(((option,index)=>renderOption({key:index,value:option,hovered:option===activeOption,selected:option===selected,onHover:()=>setActiveOption(option),onClick:()=>onSelect(option),onMouseDown:preventFocusSteal?e=>e.preventDefault():void 0,dimension})))})})}));Menu.displayName="Menu";try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!0,type:{name:"ReactNode"}},onSelect:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelect",required:!0,type:{name:"(option: ReactNode) => void"}},options:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"options",required:!0,type:{name:"ReactNode[]"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"maxHeight",required:!1,type:{name:"string | number"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не преводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/Menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/input/InputEx/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}const StyledMenu=(0,styled_components_browser_esm.Ay)(Menu).withConfig({displayName:"SuffixSelect__StyledMenu",componentId:"sc-1jlcs4d-0"})(["width:",";"],(({$width})=>$width||"auto")),disableEventMixin=(0,styled_components_browser_esm.AH)(["pointer-events:none;cursor:default;"]),preventDefault=e=>e.preventDefault(),Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"SuffixSelect__Container",componentId:"sc-1jlcs4d-1"})(["display:flex;align-items:center;cursor:pointer;[data-read-only]{cursor:default;}& > svg{display:block;width:",";&:focus{outline:none;}&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}}&:hover{& > "," *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}}",""],(p=>p.$iconSizeValue||"24px"),(p=>p.theme.color["Primary/Primary 60 Main"]),OpenStatusButton.$,(p=>p.theme.color["Primary/Primary 70"]),(p=>p.disabled?disableEventMixin:"")),ValueContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"SuffixSelect__ValueContainer",componentId:"sc-1jlcs4d-2"})(["margin-right:4px;"]),SuffixSelect=({dropAlign,dimension,menuWidth,dropMaxHeight,onChange,options,value,disabled,dropContainerCssMixin,dropContainerClassName,dropContainerStyle,renderValue,renderOption,...props})=>{const[isOpenState,setIsOpenState]=react.useState(!1),isOpen=void 0===props.isOpen?isOpenState:props.isOpen,containerRef=react.useRef(null),alignContainerRef=void 0===props.alignRef?containerRef:props.alignRef;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Container,{ref:containerRef,disabled,"data-read-only":!!props.readOnly||void 0,onMouseDown:props.readOnly||disabled?preventDefault:e=>{e.preventDefault();const newOpenStatus=!isOpen;props.onOpenChange?.(newOpenStatus),setIsOpenState(newOpenStatus)},children:[renderValue?renderValue({value}):(0,jsx_runtime.jsx)(ValueContainer,{children:String(value)}),!props.readOnly&&(0,jsx_runtime.jsx)(OpenStatusButton.$,{$isOpen:isOpen,"aria-hidden":!0,"data-disabled":disabled})]}),isOpen&&(0,jsx_runtime.jsx)(DropdownContainer.a,{role:"listbox",alignSelf:dropAlign,targetElement:alignContainerRef.current,onClickOutside:e=>{e.target&&containerRef.current?.contains(e.target)||setIsOpenState(!1)},dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle,children:(0,jsx_runtime.jsx)(StyledMenu,{$width:menuWidth,maxHeight:dropMaxHeight,options,selected:value,onSelect:value=>{onChange(value),setIsOpenState(!1)},renderOption,dimension,preventFocusSteal:!0})})]})};try{SuffixSelect.displayName="SuffixSelect",SuffixSelect.__docgenInfo={description:"",displayName:"SuffixSelect",props:{alignRef:{defaultValue:null,description:"ref элемента относительно которого будет выравниваться дроп контейнер",name:"alignRef",required:!1,type:{name:"RefObject<HTMLElement>"}},dropAlign:{defaultValue:null,description:"задает выравнивание дроп контейнера относительно компонента",name:"dropAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту дроп контейнера",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:"выбранное на данный момент значение",name:"value",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"список значений для выбора",name:"options",required:!0,type:{name:"T[]"}},onChange:{defaultValue:null,description:"обработчик события на выбор элемента",name:"onChange",required:!0,type:{name:"(value: ReactNode) => void"}},isOpen:{defaultValue:null,description:"состояние видимости контейнера с опциями",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"обработчик события на изменение видимости контейнера с опциями",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},renderValue:{defaultValue:null,description:"",name:"renderValue",required:!1,type:{name:"((props: RenderPropsType<T>) => ReactNode)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/SuffixSelect.tsx#SuffixSelect"]={docgenInfo:SuffixSelect.__docgenInfo,name:"SuffixSelect",path:"src/components/input/InputEx/SuffixSelect.tsx#SuffixSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);
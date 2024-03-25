"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3066],{"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DropdownContainer,a:()=>StyledDropdownContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PositionInPortal.tsx"),_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useInterval.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownProvider.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/themes/borderRadius.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__Container",componentId:"sc-1eulg01-0"})(["pointer-events:initial;margin:8px 0;flex:0 0 auto;",";max-width:calc(100vw - 32px);opacity:0;transition-delay:200ms;transition-property:opacity;&:focus-visible{border:2px solid blue;}",""],(p=>p.$alignSelf?`align-self: ${p.$alignSelf};`:""),(p=>p.$dropContainerCssMixin)),FakeTarget=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__FakeTarget",componentId:"sc-1eulg01-1"})(["pointer-events:none;height:100%;flex:0 0 auto;"]),Portal=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__.l).withConfig({displayName:"DropdownContainer__Portal",componentId:"sc-1eulg01-2"})(["display:flex;flex-direction:",";flex-wrap:nowrap;"],(p=>p.$reverse?"column-reverse":"column")),DropdownContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({targetRef,targetElement,onClickOutside=()=>null,className="",alignSelf,dropContainerCssMixin,...props},ref)=>{const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[displayUpward,setDisplayUpward]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),targetNode=targetElement??targetRef?.current,{addDropdown,removeDropdown,dropdowns}=(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.BK)(containerRef),{rootRef}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.rO);(0,_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__.L)([containerRef],(e=>{(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.TT)(e,dropdowns)&&onClickOutside(e)})),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{containerRef.current!==document.activeElement&&containerRef?.current?.focus()}),[]);const checkDropdownPosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const node=containerRef.current;if(node&&targetNode){const rect=node.getBoundingClientRect(),targetRect=targetNode.getBoundingClientRect(),viewportHeight=window.innerHeight,viewportWidth=window.innerWidth;if(viewportHeight-rect.bottom<0&&targetRect.top>viewportHeight-targetRect.bottom?displayUpward||setDisplayUpward(!0):(targetRect.bottom+(targetRect.top-rect.top)<viewportHeight-8||targetRect.top<viewportHeight-targetRect.bottom)&&displayUpward&&setDisplayUpward(!1),alignSelf&&"auto"!==alignSelf)return;const rectWidth=rect.right-rect.left,enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right-16>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(enoughWidthOnTheLeft||enoughWidthOnTheRight)node.style.transform="translateX(0)",enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-end":containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-start":containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft&&(node.style.alignSelf="flex-end");else{node.style.alignSelf="center";const offset=(viewportWidth-rect.width)/2-(targetRect.left-(rectWidth-targetRect.width)/2);node.style.transform=`translateX(${offset}px)`}}}),[displayUpward,targetRef,targetElement]);return(0,_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__.$)(checkDropdownPosition,100),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{containerRef.current&&(containerRef.current.style.opacity="1")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>(addDropdown?.(containerRef),()=>{removeDropdown?.(containerRef)})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portal,{targetElement:targetNode,$reverse:displayUpward,rootRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FakeTarget,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__.d)(ref,containerRef),...props,className:className+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin})]})})}));DropdownContainer.displayName="DropdownContainer";const StyledDropdownContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(DropdownContainer).withConfig({displayName:"DropdownContainer__StyledDropdownContainer",componentId:"sc-1eulg01-3"})(["box-shadow:var(--admiral-box-shadow-Shadow08,",");border-radius:var(--admiral-border-radius-Medium,",");overflow:hidden;width:max-content;"],(p=>(0,_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__.C)(p.theme.shadow["Shadow 08"])),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__.VM)(p.theme.shape)));StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется выпадающее меню",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("number"==typeof delay)return intervalRef.current=window.setInterval((()=>callbackRef.current()),delay),()=>window.clearInterval(intervalRef.current||0)}),[delay]),intervalRef}},"./src/components/common/utils/splice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function splice(oldString,start,delCount,newSubStr){return oldString.slice(0,start)+newSubStr+oldString.slice(start+Math.abs(delCount))}__webpack_require__.d(__webpack_exports__,{V:()=>splice})},"./src/components/input/DateInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>DateInput});var _path,_path2,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCalendarOutline=function SvgCalendarOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.88 12.65c-.749 0-1.35.601-1.35 1.35v1.32c0 .749.601 1.35 1.35 1.35h2.32c.749 0 1.35-.601 1.35-1.35V14c0-.749-.601-1.35-1.35-1.35zM8.83 14q.001-.027.013-.037.01-.012.037-.013h2.32q.027.001.037.013a.05.05 0 0 1 .013.037v1.32q-.001.027-.013.037-.01.012-.037.013H8.88q-.027-.001-.037-.013-.012-.01-.013-.037z",clipRule:"evenodd"})),_path2||(_path2=react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.79 2.6a.65.65 0 0 0-1.3 0v1.39H7c-1.66 0-3 1.34-3 3v10.13c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V6.99c0-1.66-1.35-3-3-3h-.5V2.6a.65.65 0 1 0-1.3 0v1.39h-2.55V2.6a.65.65 0 1 0-1.3 0v1.39H8.79zm-1.3 2.69v1.57a.65.65 0 1 0 1.3 0V5.29h2.56v1.57a.65.65 0 1 0 1.3 0V5.29h2.55v1.57a.65.65 0 1 0 1.3 0V5.29h.5c.94 0 1.7.76 1.7 1.7v2.36H5.3V6.99c0-.94.76-1.7 1.7-1.7zM5.3 10.65h13.4v6.47c0 .94-.76 1.7-1.7 1.7H7c-.94 0-1.7-.76-1.7-1.7z",clipRule:"evenodd"})))};__webpack_require__.p;var TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),Calendar=__webpack_require__("./src/components/Calendar/index.tsx"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),splice=__webpack_require__("./src/components/common/utils/splice.ts");const MASK_VALUE="__.__.____",formatDate=value=>`${value.substring(0,2).replace(/\D/g,"_").padEnd(2,"_")}.${value.substring(2,4).replace(/\D/g,"_").padEnd(2,"_")}.${value.substring(4,8).replace(/\D/g,"_").padEnd(4,"_")}`,calcCursorPosition=(inputValue,selectionStart)=>{const underlinePos=inputValue.indexOf("_"),valueLength=-1===underlinePos?inputValue.length:underlinePos||1;return selectionStart<valueLength?"."===inputValue.charAt(selectionStart-1)?selectionStart+1:selectionStart:valueLength};function defaultDateInputHandle(inputData){if(null===inputData)return{value:MASK_VALUE,selectionStart:0,selectionEnd:0};const selectionStart=inputData.selectionStart||0;let inputValue=inputData.value||"";const lengthDifference=inputValue.length-MASK_VALUE.length;if(inputValue.replace(/\d/g,"_")===MASK_VALUE)return inputData;if(lengthDifference<0)return inputValue=(0,splice.V)(inputValue,selectionStart,0,MASK_VALUE.substr(selectionStart,-lengthDifference)),{...inputData,value:inputValue};let addCount=0;"."===inputValue.charAt(selectionStart-1)&&(addCount=-1),"."===inputValue.charAt(selectionStart)&&(addCount=/\d/.test(inputValue.charAt(selectionStart-1))?1:-1);const clearValue=(0,splice.V)(inputValue,selectionStart+addCount,lengthDifference,"").replace(/[^\d_]/g,"");inputValue=formatDate(clearValue);const cursorPos=calcCursorPosition(inputValue,selectionStart);return{...inputData,value:inputValue,selectionStart:cursorPos,selectionEnd:cursorPos}}var changeInputData=__webpack_require__("./src/components/common/dom/changeInputData.ts");function isValidDate(d){return d instanceof Date&&!isNaN(d.getTime())}function parseStringToDate(str=""){const[ddStr,mmStr,yyyyStr]=str.split("."),date=new Date(`${yyyyStr}-${mmStr}-${ddStr}`);return date.setDate(date.getUTCDate()),date.setHours(0,0,0,0),isValidDate(date)?date:null}function defaultParser(stringValue="",isDateRangeValue,dateRangeSeparatorSymbols=" - "){const result=stringValue.split(dateRangeSeparatorSymbols).map(parseStringToDate);return isDateRangeValue?result:result[0]}const defaultDateRangeInputHandle_MASK_VALUE=MASK_VALUE+" - "+MASK_VALUE;function defaultDateRangeInputHandle(inputData){if(!inputData||!inputData.value){return{value:defaultDateRangeInputHandle_MASK_VALUE,selectionStart:0,selectionEnd:0}}const inputValue=inputData.value||defaultDateRangeInputHandle_MASK_VALUE;if(inputValue.replace(/\d/g,"_")===defaultDateRangeInputHandle_MASK_VALUE)return inputData;const selectionStart=inputData.selectionStart||0,symbolsChanged=inputValue.length-defaultDateRangeInputHandle_MASK_VALUE.length;if(MASK_VALUE.length<selectionStart+1&&MASK_VALUE.length+3>selectionStart){const selectionPos=inputValue.length<defaultDateRangeInputHandle_MASK_VALUE.length?MASK_VALUE.length:MASK_VALUE.length+3;return{value:defaultDateInputHandle({...inputData,value:inputValue.substring(0,MASK_VALUE.length)}).value+" - "+inputValue.slice(-10),selectionStart:selectionPos,selectionEnd:selectionPos}}if(selectionStart<=MASK_VALUE.length){const handledData=defaultDateInputHandle({...inputData,value:inputValue.length>MASK_VALUE.length?inputValue.substring(0,MASK_VALUE.length+Math.max(symbolsChanged,-MASK_VALUE.length)):inputValue}),rightHandleData=defaultDateInputHandle({value:inputValue.length>MASK_VALUE.length?inputValue.substring(inputValue.length-MASK_VALUE.length,inputValue.length):""});return{value:handledData.value+" - "+rightHandleData.value,selectionStart:handledData.selectionStart,selectionEnd:handledData.selectionEnd}}const handledData=defaultDateInputHandle({value:inputValue.slice(-10-symbolsChanged),selectionStart:selectionStart-(MASK_VALUE.length+3),selectionEnd:selectionStart-(MASK_VALUE.length+3)});return{value:inputValue.substring(0,MASK_VALUE.length)+" - "+handledData.value,selectionStart:(handledData.selectionStart||0)+MASK_VALUE.length+3,selectionEnd:(handledData.selectionEnd||0)+MASK_VALUE.length+3}}var InputIconButton=__webpack_require__("./src/components/InputIconButton.tsx"),DropdownContainer=__webpack_require__("./src/components/DropdownContainer/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,styled_components_browser_esm.Ay)(TextInput.ks).withConfig({displayName:"DateInput__Input",componentId:"sc-yf2ks1-0"})(["min-width:150px;"]);function defaultFormatter(isoValues,joinString=" - "){return isoValues.map((iso=>new Date(iso))).map((date=>isValidDate(date)?date.toLocaleDateString("ru",{timeZone:"UTC"}).replace(/[^ -~]/g,""):"__.__.____")).join(joinString)}const DateInput=react.forwardRef((({type="date",defaultIsCalendarOpen=!1,formatter=defaultFormatter,parser=defaultParser,minDate,maxDate,validator,filterDate,alignDropdown="auto",currentActiveView,currentActiveViewImportant,onMonthSelect,onYearSelect,onViewEnter,onViewLeave,onViewMonthSelect,onViewYearSelect,selected,calendarRef,icon=SvgCalendarOutline,icons,skeleton=!1,dropContainerCssMixin,dropContainerClassName,dropContainerStyle,isVisible,onVisibilityChange=()=>{},highlightSpecialDay,locale,onDateIncreaseDecrease,...props},ref)=>{const calendarProps={minDate,maxDate,validator,filterDate,currentActiveView,currentActiveViewImportant,onMonthSelect,onYearSelect,onViewEnter,onViewLeave,onViewMonthSelect,onViewYearSelect,selected,highlightSpecialDay,locale,onDateIncreaseDecrease},isDateRange="date-range"===type,handleInput=props.handleInput||(isDateRange?defaultDateRangeInputHandle:defaultDateInputHandle),[calendarValue,setCalendarValue]=(0,react.useState)(null),inputRef=(0,react.useRef)(null),inputContainerRef=(0,react.useRef)(null),[isCalendarOpenState,setCalendarOpenState]=(0,react.useState)(defaultIsCalendarOpen),isCalendarOpen=isVisible??isCalendarOpenState,setCalendarOpen=newCalendarOpenState=>{setCalendarOpenState(newCalendarOpenState),onVisibilityChange(newCalendarOpenState)},[startDate,endDate,selectedCalendarValue]=Array.isArray(calendarValue)?calendarValue:[void 0,void 0,calendarValue],handleButtonClick=()=>{const calValue=parser(inputRef.current?.value,isDateRange);setCalendarValue(calValue),isCalendarOpen||inputRef.current?.focus(),setCalendarOpen(!isCalendarOpen)},iconArray=react.Children.toArray(icons);return props.readOnly||iconArray.push((0,jsx_runtime.jsx)(InputIconButton.G,{icon,onClick:handleButtonClick,tabIndex:0})),(0,jsx_runtime.jsx)(Input,{...props,ref:(0,refSetter.d)(ref,inputRef),handleInput,icons:iconArray,containerRef:inputContainerRef,skeleton,children:isCalendarOpen&&!skeleton&&(0,jsx_runtime.jsx)(DropdownContainer.a,{targetElement:inputRef.current,alignSelf:alignDropdown,onClickOutside:e=>{e.target&&inputContainerRef.current?.contains(e.target)||setCalendarOpen(!1)},dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle,children:(0,jsx_runtime.jsx)(StyledCalendar,{...calendarProps,ref:calendarRef,selected:selectedCalendarValue,startDate,endDate,onChange:maybeDate=>{if(setCalendarValue(maybeDate),inputRef.current){if(!maybeDate)return void(0,changeInputData.B)(inputRef.current,{value:""});const values=Array.isArray(maybeDate)?maybeDate:[maybeDate],toFormatValues=values.map((date=>date?function toUTCDateIsoString(date){const newDate=new Date(date);return newDate.setUTCDate(newDate.getDate()),newDate.setUTCHours(0,0,0,0),newDate.toISOString()}(date):"")),value=formatter(toFormatValues);(0,changeInputData.B)(inputRef.current,{value}),isDateRange&&values.includes(null)||setCalendarOpen(!1)}},range:isDateRange})})})})),StyledCalendar=(0,styled_components_browser_esm.Ay)(Calendar.V).withConfig({displayName:"DateInput__StyledCalendar",componentId:"sc-yf2ks1-1"})(["box-shadow:none;border-radius:0;"]);DateInput.defaultProps={dimension:"m"},DateInput.displayName="DateInput";try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{type:{defaultValue:{value:"date"},description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:{value:"false"},description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:{value:"auto"},description:"Принудительно выравнивает контейнер календаря относительно компонента, значение по умолчанию 'flex-end'",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},tooltipContainer:{defaultValue:null,description:"@deprecated Используйте rootRef пропсу на DropdownProvider\nКонтейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal",name:"tooltipContainer",required:!1,type:{name:"undefined"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:"Предоставляет функции проверки корректности даты, возможности её выбора в календаре.\nЕсли возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое\nфункцией значение является текстом ошибки",name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:"Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать\nПример функции https://reactdatepicker.com/#example-filter-dates",name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/index.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/components/input/DateInput/index.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}}}]);
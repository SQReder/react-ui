"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3469],{"./src/components/common/utils/splice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>splice});function splice(oldString,start,delCount,newSubStr){return oldString.slice(0,start)+newSubStr+oldString.slice(start+Math.abs(delCount))}},"./src/components/input/DateInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J3:()=>DateInput});var _path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCalendarOutline=function SvgCalendarOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.14 1.94c.35 0 .65.3.65.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .64.3.64.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .65.3.65.65v1.39h.5c1.64 0 3 1.34 3 3v10.13c0 1.67-1.34 3-3 3H7c-1.67 0-3-1.33-3-3V6.98c0-1.66 1.33-3 3-3h.48V2.59c0-.35.3-.65.66-.65m-.66 4.91V5.28H7c-.94 0-1.71.76-1.71 1.7v2.36H18.7V6.98c0-.94-.77-1.7-1.7-1.7h-.5v1.57c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65V5.28h-2.56v1.57c0 .36-.29.65-.64.65-.36 0-.65-.29-.65-.65V5.28H8.79v1.57a.655.655 0 0 1-1.31 0m11.22 3.8H5.29v6.46c0 .94.77 1.7 1.71 1.7h10c.93 0 1.7-.76 1.7-1.7zM7.52 13.99c0-.74.61-1.34 1.35-1.34h2.33c.74 0 1.34.6 1.34 1.34v1.32c0 .75-.6 1.36-1.34 1.36H8.87c-.74 0-1.35-.61-1.35-1.36zm1.32-.03c-.01.01-.01.02-.01.03v1.32c0 .02 0 .03.01.04s.02.01.03.01h2.33c.01 0 .02 0 .03-.01s.02-.02.02-.04v-1.32c0-.01-.01-.02-.02-.03s-.02-.01-.03-.01H8.87c-.01 0-.02 0-.03.01"})))};__webpack_require__.p;var TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),Calendar=__webpack_require__("./src/components/Calendar/index.tsx"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),splice=__webpack_require__("./src/components/common/utils/splice.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var MASK_VALUE="__.__.____",formatDate=function(value){var DD=value.substring(0,2).replace(/\D/g,"_").padEnd(2,"_"),MM=value.substring(2,4).replace(/\D/g,"_").padEnd(2,"_"),YYYY=value.substring(4,8).replace(/\D/g,"_").padEnd(4,"_");return"".concat(DD,".").concat(MM,".").concat(YYYY)};function defaultDateInputHandle(inputData){if(null===inputData)return{value:MASK_VALUE,selectionStart:0,selectionEnd:0};var _inputData_value,selectionStart=inputData.selectionStart||0,inputValue=inputData.value||"",lengthDifference=inputValue.length-MASK_VALUE.length;if(inputValue.replace(/\d/g,"_")===MASK_VALUE)return inputData;if(lengthDifference<0){inputValue=(0,splice.V)(inputValue,selectionStart,0,MASK_VALUE.substr(selectionStart,-lengthDifference));var cursorPos=selectionStart>0&&"."===inputValue.charAt(selectionStart-1)?selectionStart-1:selectionStart;return _object_spread_props(_object_spread({},inputData),{value:inputValue,selectionStart:cursorPos,selectionEnd:cursorPos})}var addCount=0;"."===inputValue.charAt(selectionStart-1)&&(addCount=-1),"."===inputValue.charAt(selectionStart)&&(addCount=/\d/.test(inputValue.charAt(selectionStart-1))?1:-1);var cursorPos1="."===(inputValue=formatDate((0,splice.V)(inputValue,selectionStart+addCount,lengthDifference,"").replace(/[^\d_]/g,""))).charAt(selectionStart)?selectionStart+1:selectionStart;return(null===(_inputData_value=inputData.value)||void 0===_inputData_value?void 0:_inputData_value.charAt(inputData.selectionStart||0))==="."&&(cursorPos1+=1),_object_spread_props(_object_spread({},inputData),{value:inputValue,selectionStart:cursorPos1,selectionEnd:cursorPos1})}var changeInputData=__webpack_require__("./src/components/common/dom/changeInputData.ts");function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function isValidDate(d){return _instanceof(d,Date)&&!isNaN(d.getTime())}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function parseStringToDate(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",_str_split=_sliced_to_array(str.split("."),3),ddStr=_str_split[0],mmStr=_str_split[1],yyyyStr=_str_split[2],date=new Date("".concat(yyyyStr,"-").concat(mmStr,"-").concat(ddStr));return date.setDate(date.getUTCDate()),date.setHours(0,0,0,0),isValidDate(date)?date:null}function defaultParser(){var stringValue=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",isDateRangeValue=arguments.length>1?arguments[1]:void 0,dateRangeSeparatorSymbols=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" - ",result=stringValue.split(dateRangeSeparatorSymbols).map(parseStringToDate);return isDateRangeValue?result:result[0]}function defaultDateRangeInputHandle_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function defaultDateRangeInputHandle_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){defaultDateRangeInputHandle_define_property(target,key,source[key])})}return target}function defaultDateRangeInputHandle_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function defaultDateRangeInputHandle_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):defaultDateRangeInputHandle_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var defaultDateRangeInputHandle_MASK_VALUE=MASK_VALUE+" - "+MASK_VALUE;function defaultDateRangeInputHandle(inputData){if(!inputData||!inputData.value)return{value:defaultDateRangeInputHandle_MASK_VALUE,selectionStart:0,selectionEnd:0};var inputValue=inputData.value||defaultDateRangeInputHandle_MASK_VALUE;if(inputValue.replace(/\d/g,"_")===defaultDateRangeInputHandle_MASK_VALUE)return inputData;var selectionStart=inputData.selectionStart||0,symbolsChanged=inputValue.length-defaultDateRangeInputHandle_MASK_VALUE.length;if(MASK_VALUE.length<selectionStart+1&&MASK_VALUE.length+3>selectionStart){var selectionPos=inputValue.length<defaultDateRangeInputHandle_MASK_VALUE.length?MASK_VALUE.length:MASK_VALUE.length+3;return{value:defaultDateInputHandle(defaultDateRangeInputHandle_object_spread_props(defaultDateRangeInputHandle_object_spread({},inputData),{value:inputValue.substring(0,MASK_VALUE.length)})).value+" - "+inputValue.slice(-10),selectionStart:selectionPos,selectionEnd:selectionPos}}if(selectionStart<=MASK_VALUE.length){var handledData1=defaultDateInputHandle(defaultDateRangeInputHandle_object_spread_props(defaultDateRangeInputHandle_object_spread({},inputData),{value:inputValue.length>MASK_VALUE.length?inputValue.substring(0,MASK_VALUE.length+Math.max(symbolsChanged,-MASK_VALUE.length)):inputValue})),rightHandleData=defaultDateInputHandle({value:inputValue.length>MASK_VALUE.length?inputValue.substring(inputValue.length-MASK_VALUE.length,inputValue.length):""});return{value:handledData1.value+" - "+rightHandleData.value,selectionStart:handledData1.selectionStart,selectionEnd:handledData1.selectionEnd}}var handledData2=defaultDateInputHandle({value:inputValue.slice(-10-symbolsChanged),selectionStart:selectionStart-(MASK_VALUE.length+3),selectionEnd:selectionStart-(MASK_VALUE.length+3)});return{value:inputValue.substring(0,MASK_VALUE.length)+" - "+handledData2.value,selectionStart:(handledData2.selectionStart||0)+MASK_VALUE.length+3,selectionEnd:(handledData2.selectionEnd||0)+MASK_VALUE.length+3}}var InputIconButton=__webpack_require__("./src/components/InputIconButton.tsx"),DropdownContainer=__webpack_require__("./src/components/DropdownContainer/index.tsx");function DateInput_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInput_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInput_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateInput_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInput_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInput_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInput_define_property(target,key,source[key])})}return target}function DateInput_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInput_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInput_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateInput_sliced_to_array(arr,i){return DateInput_array_with_holes(arr)||DateInput_iterable_to_array_limit(arr,i)||DateInput_unsupported_iterable_to_array(arr,i)||DateInput_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DateInput_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInput_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInput_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  min-width: 150px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  box-shadow: none;\n  border-radius: 0;\n"]);return _templateObject1=function _templateObject(){return data},data}var Input=(0,styled_components_browser_esm.Ay)(TextInput.ks)(_templateObject());function toUTCDateIsoString(date){return new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())).toISOString()}function defaultFormatter(isoValues){var joinString=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" - ";return isoValues.map(function(iso){return new Date(iso)}).map(function(date){return isValidDate(date)?date.toLocaleDateString("ru",{timeZone:"UTC"}).replace(/[^ -~]/g,""):"__.__.____"}).join(joinString)}function preventUseUnsupportedCharacters(e){var typedChar=e.data;typedChar&&0===typedChar.replace(/[^\d_.]/g,"").length&&(e.preventDefault(),e.stopPropagation())}var DateInput=(0,react.forwardRef)(function(_param,ref){var _param_type=_param.type,_param_defaultIsCalendarOpen=_param.defaultIsCalendarOpen,_param_formatter=_param.formatter,formatter=void 0===_param_formatter?defaultFormatter:_param_formatter,_param_parser=_param.parser,parser=void 0===_param_parser?defaultParser:_param_parser,minDate=_param.minDate,maxDate=_param.maxDate,validator=_param.validator,filterDate=_param.filterDate,_param_alignDropdown=_param.alignDropdown,_param_alignSelf=_param.alignSelf,currentActiveView=_param.currentActiveView,currentActiveViewImportant=_param.currentActiveViewImportant,onMonthSelect=_param.onMonthSelect,onYearSelect=_param.onYearSelect,onViewEnter=_param.onViewEnter,onViewLeave=_param.onViewLeave,onViewMonthSelect=_param.onViewMonthSelect,onViewYearSelect=_param.onViewYearSelect,selected=_param.selected,viewDate=_param.viewDate,onViewDateChange=_param.onViewDateChange,calendarRef=_param.calendarRef,_param_icon=_param.icon,icons=_param.icons,iconsAfter=_param.iconsAfter,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,isVisible=_param.isVisible,_param_onVisibilityChange=_param.onVisibilityChange,onVisibilityChange=void 0===_param_onVisibilityChange?function(){}:_param_onVisibilityChange,highlightSpecialDay=_param.highlightSpecialDay,locale=_param.locale,onDateIncreaseDecrease=_param.onDateIncreaseDecrease,_param_dimension=_param.dimension,_param_onBeforeInput=_param.onBeforeInput,renderBottomPanel=_param.renderBottomPanel,props=_object_without_properties(_param,["type","defaultIsCalendarOpen","formatter","parser","minDate","maxDate","validator","filterDate","alignDropdown","alignSelf","currentActiveView","currentActiveViewImportant","onMonthSelect","onYearSelect","onViewEnter","onViewLeave","onViewMonthSelect","onViewYearSelect","selected","viewDate","onViewDateChange","calendarRef","icon","icons","iconsAfter","skeleton","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","isVisible","onVisibilityChange","highlightSpecialDay","locale","onDateIncreaseDecrease","dimension","onBeforeInput","renderBottomPanel"]),isDateRange="date-range"===(void 0===_param_type?"date":_param_type),handleInput=props.handleInput||(isDateRange?defaultDateRangeInputHandle:defaultDateInputHandle),_useState=DateInput_sliced_to_array((0,react.useState)(null),2),calendarValue=_useState[0],setCalendarValue=_useState[1],inputRef=(0,react.useRef)(null),inputContainerRef=(0,react.useRef)(null),_useState1=DateInput_sliced_to_array((0,react.useState)(void 0!==_param_defaultIsCalendarOpen&&_param_defaultIsCalendarOpen),2),isCalendarOpenState=_useState1[0],setCalendarOpenState=_useState1[1],isCalendarOpen=null!=isVisible?isVisible:isCalendarOpenState,setCalendarOpen=function(newCalendarOpenState){setCalendarOpenState(newCalendarOpenState),onVisibilityChange(newCalendarOpenState)},_ref=DateInput_sliced_to_array(Array.isArray(calendarValue)?calendarValue:[void 0,void 0,calendarValue],3),startDate=_ref[0],endDate=_ref[1],selectedCalendarValue=_ref[2],iconArray=react.Children.toArray(iconsAfter||icons);return props.readOnly||iconArray.push((0,jsx_runtime.jsx)(InputIconButton.G,{icon:void 0===_param_icon?SvgCalendarOutline:_param_icon,onClick:function(){var _inputRef_current,_inputRef_current1;setCalendarValue(parser(null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current?void 0:_inputRef_current.value,isDateRange)),isCalendarOpen||null===(_inputRef_current1=inputRef.current)||void 0===_inputRef_current1||_inputRef_current1.focus(),setCalendarOpen(!isCalendarOpen)},tabIndex:0})),(0,jsx_runtime.jsx)(Input,DateInput_object_spread_props(DateInput_object_spread({dimension:void 0===_param_dimension?"m":_param_dimension},props),{ref:(0,refSetter.d)(ref,inputRef),handleInput:handleInput,onBeforeInput:void 0===_param_onBeforeInput?preventUseUnsupportedCharacters:_param_onBeforeInput,iconsAfter:iconArray,containerRef:inputContainerRef,skeleton:skeleton,children:isCalendarOpen&&!skeleton&&(0,jsx_runtime.jsxs)(DropdownContainer.a,{targetElement:inputRef.current,alignSelf:(void 0===_param_alignDropdown?"auto":_param_alignDropdown)||(void 0===_param_alignSelf?"auto":_param_alignSelf),onClickOutside:function(e){var _inputContainerRef_current;e.target&&(null===(_inputContainerRef_current=inputContainerRef.current)||void 0===_inputContainerRef_current?void 0:_inputContainerRef_current.contains(e.target))||setCalendarOpen(!1)},dropContainerCssMixin:dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle,children:[(0,jsx_runtime.jsx)(StyledCalendar,DateInput_object_spread_props(DateInput_object_spread({},{minDate:minDate,maxDate:maxDate,validator:validator,filterDate:filterDate,currentActiveView:currentActiveView,currentActiveViewImportant:currentActiveViewImportant,onMonthSelect:onMonthSelect,onYearSelect:onYearSelect,onViewEnter:onViewEnter,onViewLeave:onViewLeave,onViewMonthSelect:onViewMonthSelect,onViewYearSelect:onViewYearSelect,selected:selected,viewDate:viewDate,onViewDateChange:onViewDateChange,highlightSpecialDay:highlightSpecialDay,locale:locale,onDateIncreaseDecrease:onDateIncreaseDecrease}),{ref:calendarRef,selected:selectedCalendarValue,startDate:startDate,endDate:endDate,onChange:function(maybeDate){if(setCalendarValue(maybeDate),inputRef.current){if(!maybeDate){(0,changeInputData.B)(inputRef.current,{value:""});return}var values=Array.isArray(maybeDate)?maybeDate:[maybeDate],value=formatter(values.map(function(date){return date?toUTCDateIsoString(date):""}));(0,changeInputData.B)(inputRef.current,{value:value}),isDateRange&&values.includes(null)||setCalendarOpen(!1)}},range:isDateRange})),renderBottomPanel&&renderBottomPanel()]})}))}),StyledCalendar=(0,styled_components_browser_esm.Ay)(Calendar.V)(_templateObject1());DateInput.displayName="DateInput";try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{type:{defaultValue:{value:"date"},description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:{value:"false"},description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:{value:"auto"},description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.\nВзамен используйте alignSelf\n\nПринудительно выравнивает контейнер календаря относительно компонента",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},tooltipContainer:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.\nВзамен используйте rootRef пропсу на DropdownProvider.\n\nКонтейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal",name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:"Предоставляет функции проверки корректности даты, возможности её выбора в календаре.\nЕсли возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое\nфункцией значение является текстом ошибки",name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:"Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать\nПример функции https://reactdatepicker.com/#example-filter-dates",name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:{value:"auto"},description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/index.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/components/input/DateInput/index.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}}}]);
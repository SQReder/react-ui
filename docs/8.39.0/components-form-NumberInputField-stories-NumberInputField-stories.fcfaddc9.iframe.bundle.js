"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2586],{"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/NumberInputField/stories/NumberInputField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NumberInputFieldPlayground:()=>NumberInputFieldPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NumberInputField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),NumberInput=__webpack_require__("./src/components/input/NumberInput/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var NumberInputField=react.forwardRef(function(props,ref){var inputRef=react.useRef(null),className=props.className,maxLength=props.maxLength,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","maxLength","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,maxLength:maxLength,inputRef:inputRef,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,"aria-required":required,status:status,disabled:disabled,maxLength:maxLength,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(NumberInput.Q7,_object_spread({},inputProps))}))});NumberInputField.displayName="NumberInputField";try{NumberInputField.displayName="NumberInputField",NumberInputField.__docgenInfo={description:"",displayName:"NumberInputField",props:{precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:null,description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},fillEmptyDecimals:{defaultValue:null,description:"Данный флаг управляет дозаполнением десятичной части числа нулями при потере инпутом фокуса, либо при нажатии кнопок +/-\nПо умолчанию fillEmptyDecimals установлен в true\n\nПодробнее: если строка должна быть отформатирована как десятичное число (т.е. precision > 0 и в строке есть decimal)\nи fillEmptyDecimals установлен в true, то произойдет проверка того, сколько знаков в числе после разделителя decimal\nи если таких знаков меньше, чем precision, недостающее количество будет заполнено нулями.\nНапример, при precision={3} строка '3.9' превратится в '3.900'",name:"fillEmptyDecimals",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"Шаг инпута. Если шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"Минимальное значение. При minValue >= 0, ввод знака минус блокируется",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},displayPlusMinusIcons:{defaultValue:null,description:"Отображать иконки плюса и минуса",name:"displayPlusMinusIcons",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"Выравнивание контента. По умолчанию выравнивание происходит по левому краю",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},createInputHandler:{defaultValue:null,description:"Функция высшего порядка для получения функции handleInput",name:"createInputHandler",required:!1,type:{name:"((params: NumberInputHandlerCreatorParams) => CustomInputHandler)"}},hideSpaceAfterPrefix:{defaultValue:null,description:"Скрыть пробел после префикса",name:"hideSpaceAfterPrefix",required:!1,type:{name:"boolean"}},hideSpaceBeforeSuffix:{defaultValue:null,description:"Скрыть пробел перед суффиксом",name:"hideSpaceBeforeSuffix",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/NumberInputField/index.tsx#NumberInputField"]={docgenInfo:NumberInputField.__docgenInfo,name:"NumberInputField",path:"src/components/form/NumberInputField/index.tsx#NumberInputField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/components/input/NumberInput/utils.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function NumberInputFieldPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function NumberInputFieldPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){NumberInputFieldPlayground_template_define_property(target,key,source[key])})}return target}function NumberInputFieldPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function NumberInputFieldPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NumberInputFieldPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function NumberInputFieldPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=NumberInputFieldPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function NumberInputFieldPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function convertStrToNum(str,precision,decimal){return Number((0,utils.Zv)(str,precision,decimal).replace(decimal,"."))}var NumberInputFieldPlaygroundTemplate=function(_param){var _param_defaultValue=_param.defaultValue,_param_label=_param.label,_param_precision=_param.precision,precision=void 0===_param_precision?0:_param_precision,_param_maxValue=_param.maxValue,maxValue=void 0===_param_maxValue?1e4:_param_maxValue,_param_decimal=_param.decimal,decimal=void 0===_param_decimal?",":_param_decimal,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=NumberInputFieldPlayground_template_object_without_properties(_param,["defaultValue","label","precision","maxValue","decimal","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(void 0),2),status=_React_useState[0],setStatus=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(""),2),extraText=_React_useState1[0],setExtraText=_React_useState1[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(NumberInputField,NumberInputFieldPlayground_template_object_spread_props(NumberInputFieldPlayground_template_object_spread({"data-container-id":"numberInputFieldIdOne"},props),{maxValue:maxValue,defaultValue:void 0===_param_defaultValue?"2 000":_param_defaultValue,onChange:function(event){var numValue=convertStrToNum(event.target.value,precision,decimal);event.target.value&&numValue>maxValue?(setStatus("error"),setExtraText("Достигнуто максимальное значение")):(setStatus(void 0),setExtraText(""))},label:void 0===_param_label?"Введите сумму":_param_label,precision:precision,decimal:decimal,status:status,extraText:extraText}))})};try{NumberInputFieldPlaygroundTemplate.displayName="NumberInputFieldPlaygroundTemplate",NumberInputFieldPlaygroundTemplate.__docgenInfo={description:"",displayName:"NumberInputFieldPlaygroundTemplate",props:{precision:{defaultValue:{value:"0"},description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:{value:","},description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},fillEmptyDecimals:{defaultValue:null,description:"Данный флаг управляет дозаполнением десятичной части числа нулями при потере инпутом фокуса, либо при нажатии кнопок +/-\nПо умолчанию fillEmptyDecimals установлен в true\n\nПодробнее: если строка должна быть отформатирована как десятичное число (т.е. precision > 0 и в строке есть decimal)\nи fillEmptyDecimals установлен в true, то произойдет проверка того, сколько знаков в числе после разделителя decimal\nи если таких знаков меньше, чем precision, недостающее количество будет заполнено нулями.\nНапример, при precision={3} строка '3.9' превратится в '3.900'",name:"fillEmptyDecimals",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"Шаг инпута. Если шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"Минимальное значение. При minValue >= 0, ввод знака минус блокируется",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"10000"},description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},displayPlusMinusIcons:{defaultValue:null,description:"Отображать иконки плюса и минуса",name:"displayPlusMinusIcons",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"Выравнивание контента. По умолчанию выравнивание происходит по левому краю",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},createInputHandler:{defaultValue:null,description:"Функция высшего порядка для получения функции handleInput",name:"createInputHandler",required:!1,type:{name:"((params: NumberInputHandlerCreatorParams) => CustomInputHandler)"}},hideSpaceAfterPrefix:{defaultValue:null,description:"Скрыть пробел после префикса",name:"hideSpaceAfterPrefix",required:!1,type:{name:"boolean"}},hideSpaceBeforeSuffix:{defaultValue:null,description:"Скрыть пробел перед суффиксом",name:"hideSpaceBeforeSuffix",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Введите сумму"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/NumberInputField/stories/NumberInputFieldPlayground.template.tsx#NumberInputFieldPlaygroundTemplate"]={docgenInfo:NumberInputFieldPlaygroundTemplate.__docgenInfo,name:"NumberInputFieldPlaygroundTemplate",path:"src/components/form/NumberInputField/stories/NumberInputFieldPlayground.template.tsx#NumberInputFieldPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");function NumberInputField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function NumberInputField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function NumberInputField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function NumberInputField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function NumberInputField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function NumberInputField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){NumberInputField_stories_define_property(target,key,source[key])})}return target}function NumberInputField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function NumberInputField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NumberInputField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function NumberInputField_stories_sliced_to_array(arr,i){return NumberInputField_stories_array_with_holes(arr)||NumberInputField_stories_iterable_to_array_limit(arr,i)||NumberInputField_stories_unsupported_iterable_to_array(arr,i)||NumberInputField_stories_non_iterable_rest()}function NumberInputField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return NumberInputField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return NumberInputField_stories_array_like_to_array(o,minLen)}}let NumberInputField_stories={title:"Admiral-2.1/Form Field/NumberInputField",component:NumberInputField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60588"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60694"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60723"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},disabled:{control:{type:"boolean"}},displayPlusMinusIcons:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},thousand:{control:{type:"text"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}},decimal:{control:{type:"text"}},precision:{type:"number"},minValue:{type:"number"},maxValue:{type:"number"},step:{type:"number"},icons:{control:!1},containerRef:{control:!1},handleInput:{control:!1},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var NumberInputFieldPlayground={render:function(props){var CSSCustomProps=NumberInputField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(NumberInputFieldPlaygroundTemplate,NumberInputField_stories_object_spread_props(NumberInputField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { NumberInputField, clearValue } from '@admiral-ds/react-ui';\nimport type { NumberInputFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nfunction convertStrToNum(str: string, precision: number, decimal: string) {\n  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));\n}\n\nexport const NumberInputFieldPlaygroundTemplate = ({\n  defaultValue = '2 000',\n  label = 'Введите сумму',\n  precision = 0,\n  maxValue = 10000,\n  decimal = ',',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: NumberInputFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [status, setStatus] = React.useState<NumberInputFieldProps['status'] | undefined>(undefined);\n  const [extraText, setExtraText] = React.useState('');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    const numValue = convertStrToNum(event.target.value, precision, decimal);\n    if (event.target.value && numValue > maxValue) {\n      setStatus('error');\n      setExtraText('Достигнуто максимальное значение');\n    } else {\n      setStatus(undefined);\n      setExtraText('');\n    }\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <NumberInputField\n        data-container-id=\"numberInputFieldIdOne\"\n        {...props}\n        maxValue={maxValue}\n        defaultValue={defaultValue}\n        onChange={handleChange}\n        label={label}\n        precision={precision}\n        decimal={decimal}\n        status={status}\n        extraText={extraText}\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"NumberInputField example"};NumberInputFieldPlayground.parameters={...NumberInputFieldPlayground.parameters,docs:{...NumberInputFieldPlayground.parameters?.docs,source:{originalSource:"{\n  render: NumberInputFieldStory,\n  parameters: {\n    docs: {\n      source: {\n        code: NumberInputFieldPlaygroundRaw\n      }\n    }\n  },\n  name: 'NumberInputField example'\n}",...NumberInputFieldPlayground.parameters?.docs?.source}}};let __namedExportsOrder=["NumberInputFieldPlayground"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});var INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
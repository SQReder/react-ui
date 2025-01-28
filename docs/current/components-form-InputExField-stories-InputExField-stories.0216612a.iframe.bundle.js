"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6718],{"./src/components/form/InputExField/stories/InputExField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputExFieldInput:()=>InputExFieldInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputExField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),InputEx=__webpack_require__("./src/components/input/InputEx/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var InputExField=react.forwardRef(function(props,ref){var inputRef=react.useRef(null),className=props.className,maxLength=props.maxLength,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","maxLength","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,maxLength:maxLength,inputRef:inputRef,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,"aria-required":required,status:status,disabled:disabled,maxLength:maxLength,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(InputEx.M,_object_spread({},inputProps))}))});InputExField.displayName="InputExField";try{InputExField.displayName="InputExField",InputExField.__docgenInfo={description:"",displayName:"InputExField",props:{menuWidth:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.\nВзамен используйте параметры prefixDropContainerStyle.menuWidth и\nsuffixDropContainerStyle.menuWidth.\n\nШирина меню",name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.\nВзамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin\n\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputExField/index.tsx#InputExField"]={docgenInfo:InputExField.__docgenInfo,name:"InputExField",path:"src/components/form/InputExField/index.tsx#InputExField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function InputExFieldInput_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputExFieldInput_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputExFieldInput_template_define_property(target,key,source[key])})}return target}function InputExFieldInput_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputExFieldInput_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputExFieldInput_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputExFieldInput_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputExFieldInput_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputExFieldInput_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  & > * {\n    flex: 0 0 128px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var DisplayContainer=styled_components_browser_esm.Ay.div(_templateObject()),PREFIX_OPTIONS=["prefix One","prefix Two","prefix Three"],SUFFIX_OPTIONS=["suffix One","suffix Two","suffix Three"],InputExFieldInputTemplate=function(_param){var _String,_param_value=_param.value,_param_label=_param.label,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=InputExFieldInput_template_object_without_properties(_param,["value","label","themeBorderKind","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(null!==(_String=String(void 0===_param_value?"Привет":_param_value))&&void 0!==_String?_String:""),2),localValue=_useState[0],setValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)("prefix One"),2),prefixValue=_useState1[0],setPrefixValue=_useState1[1],_useState2=_sliced_to_array((0,react.useState)("suffix One"),2),suffixValue=_useState2[0],setSuffixValue=_useState2[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(DisplayContainer,{children:[(0,jsx_runtime.jsx)(InputExField,InputExFieldInput_template_object_spread_props(InputExFieldInput_template_object_spread({"data-container-id":"InputExFieldIdOne"},props),{value:localValue,onChange:function(e){var _props_onChange;setValue(e.target.value),null===(_props_onChange=props.onChange)||void 0===_props_onChange||_props_onChange.call(props,e)},suffixValue:suffixValue,suffixValueList:SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},maxLength:50,displayCharacterCounter:!0,label:void 0===_param_label?"Label":_param_label})),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdTwo",required:!0,label:"Поле необходимо заполнить",prefixValue:prefixValue,prefixValueList:PREFIX_OPTIONS,onPrefixValueChange:setPrefixValue,prefixDropContainerStyle:{dropContainerClassName:"prefixDropContainerClass"}}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdThree",suffixValue:"suffix",prefixValue:"prefix",readOnly:!0,"aria-readonly":!0,label:"Поле с атрибутом readOnly",defaultValue:"Этот текст не редактируемый"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdFour",suffixValue:"suffix",prefixValue:"prefix",disabled:!0,"aria-disabled":!0,label:"Поле с атрибутом disabled",placeholder:"Placeholder"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdFive",prefixValue:"prefix",status:"error",label:"Поле с ошибкой",extraText:"Поле не прошло валидацию, необходимо ввести корректное значение"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdWSix",suffixValue:"suffix",status:"success",label:"Поле с индикацией успеха",extraText:"Поле успешно прошло валидацию"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdSeven",prefixValue:"prefix",placeholder:"идет поиск ...",label:"Поле с иконкой загрузки",suffixValue:"suffix",icons:(0,jsx_runtime.jsx)(Spinner.y,{dimension:"m"})}),(0,jsx_runtime.jsx)(InputExField,{displayClearIcon:!0,"data-container-id":"InputExFieldIdEight",prefixValue:"prefix",label:"Поле иконкой очистки"})]})})};try{InputExFieldInputTemplate.displayName="InputExFieldInputTemplate",InputExFieldInputTemplate.__docgenInfo={description:"",displayName:"InputExFieldInputTemplate",props:{menuWidth:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.\nВзамен используйте параметры prefixDropContainerStyle.menuWidth и\nsuffixDropContainerStyle.menuWidth.\n\nШирина меню",name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.\nВзамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin\n\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputExField/stories/InputExFieldInput.template.tsx#InputExFieldInputTemplate"]={docgenInfo:InputExFieldInputTemplate.__docgenInfo,name:"InputExFieldInputTemplate",path:"src/components/form/InputExField/stories/InputExFieldInput.template.tsx#InputExFieldInputTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");function InputExField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputExField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputExField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputExField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputExField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputExField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputExField_stories_define_property(target,key,source[key])})}return target}function InputExField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputExField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputExField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputExField_stories_sliced_to_array(arr,i){return InputExField_stories_array_with_holes(arr)||InputExField_stories_iterable_to_array_limit(arr,i)||InputExField_stories_unsupported_iterable_to_array(arr,i)||InputExField_stories_non_iterable_rest()}function InputExField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputExField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputExField_stories_array_like_to_array(o,minLen)}}let InputExField_stories={title:"Admiral-2.1/Form Field/InputExField",component:InputExField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},maxLength:{control:{type:{name:"number",required:!1}}},extraText:{control:{type:"text"}},prefixValue:{control:{type:"text"}},suffixValue:{control:{type:"text"}},label:{control:{type:"text"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},icons:{control:!1},alignDropRef:{control:!1},targetElement:{control:!1},containerRef:{control:!1},prefixValueList:{control:!1},suffixValueList:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},prefixDropContainerStyle:{control:!1},suffixDropContainerStyle:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var InputExFieldInput={render:function(props){var CSSCustomProps=InputExField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputExFieldInputTemplate,InputExField_stories_object_spread_props(InputExField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import { useState } from 'react';\nimport type { ChangeEvent, ReactNode } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport { InputExField, Spinner } from '@admiral-ds/react-ui';\nimport type { InputExFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst DisplayContainer = styled.div`\n  display: flex;\n  flex-direction: column;\n  & > * {\n    flex: 0 0 128px;\n  }\n`;\n\nconst PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];\nconst SUFFIX_OPTIONS = ['suffix One', 'suffix Two', 'suffix Three'];\n\nexport const InputExFieldInputTemplate = ({\n  value = 'Привет',\n  label = 'Label',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: InputExFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [localValue, setValue] = useState<string>(String(value) ?? '');\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.target.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');\n  const [suffixValue, setSuffixValue] = useState<ReactNode>('suffix One');\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <DisplayContainer>\n        <InputExField\n          data-container-id=\"InputExFieldIdOne\"\n          {...props}\n          value={localValue}\n          onChange={handleChange}\n          suffixValue={suffixValue}\n          suffixValueList={SUFFIX_OPTIONS}\n          onSuffixValueChange={setSuffixValue}\n          suffixDropContainerStyle={{ dropContainerClassName: 'suffixDropContainerClass' }}\n          maxLength={50}\n          displayCharacterCounter\n          label={label}\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdTwo\"\n          required\n          label=\"Поле необходимо заполнить\"\n          prefixValue={prefixValue}\n          prefixValueList={PREFIX_OPTIONS}\n          onPrefixValueChange={setPrefixValue}\n          prefixDropContainerStyle={{ dropContainerClassName: 'prefixDropContainerClass' }}\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdThree\"\n          suffixValue={'suffix'}\n          prefixValue={'prefix'}\n          readOnly\n          aria-readonly\n          label=\"Поле с атрибутом readOnly\"\n          defaultValue=\"Этот текст не редактируемый\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdFour\"\n          suffixValue={'suffix'}\n          prefixValue={'prefix'}\n          disabled\n          aria-disabled\n          label=\"Поле с атрибутом disabled\"\n          placeholder=\"Placeholder\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdFive\"\n          prefixValue={'prefix'}\n          status=\"error\"\n          label=\"Поле с ошибкой\"\n          extraText=\"Поле не прошло валидацию, необходимо ввести корректное значение\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdWSix\"\n          suffixValue={'suffix'}\n          status=\"success\"\n          label=\"Поле с индикацией успеха\"\n          extraText=\"Поле успешно прошло валидацию\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdSeven\"\n          prefixValue={'prefix'}\n          placeholder=\"идет поиск ...\"\n          label=\"Поле с иконкой загрузки\"\n          suffixValue={'suffix'}\n          icons={<Spinner dimension=\"m\" />}\n        />\n        <InputExField\n          displayClearIcon\n          data-container-id=\"InputExFieldIdEight\"\n          prefixValue={'prefix'}\n          label=\"Поле иконкой очистки\"\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n"}}},name:"InputEx field example"};InputExFieldInput.parameters={...InputExFieldInput.parameters,docs:{...InputExFieldInput.parameters?.docs,source:{originalSource:"{\n  render: InputExFieldInputStory,\n  parameters: {\n    docs: {\n      source: {\n        code: InputExFieldInputRaw\n      }\n    }\n  },\n  name: 'InputEx field example'\n}",...InputExFieldInput.parameters?.docs?.source}}};let __namedExportsOrder=["InputExFieldInput"]},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
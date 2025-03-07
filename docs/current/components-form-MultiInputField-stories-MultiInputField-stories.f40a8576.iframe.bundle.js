"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6238],{"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/MultiInputField/stories/MultiInputField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiInputFieldPlayground:()=>MultiInputFieldPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultiInputField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),MultiInput=__webpack_require__("./src/components/input/MultiInput/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MultiInputField=react.forwardRef(function(props,ref){var inputRef=react.useRef(null),className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","id","disabled","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,inputRef:inputRef,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(MultiInput.g,_object_spread({},inputProps))}))});MultiInputField.displayName="InputExField";try{MultiInputField.displayName="InputExField",MultiInputField.__docgenInfo={description:"",displayName:"InputExField",props:{dimension:{defaultValue:null,description:"Делает размер компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},createActivateButtonList:{defaultValue:null,description:"",name:"createActivateButtonList",required:!1,type:{name:"string[]"}},onInputComplete:{defaultValue:null,description:"",name:"onInputComplete",required:!1,type:{name:"(() => void)"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!1,type:{name:"(() => void)"}},containerPropsConfig:{defaultValue:null,description:"Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на\nвыход должна отдавать объект с пропсами, которые будут внедрятся после оригинальных пропсов.",name:"containerPropsConfig",required:!1,type:{name:'((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "disabled" | "readOnly" | "$skeleton" | "$status" | "$dimension"> & { ...; }) => Partial<...>)'}},lastChipCloseButtonSelector:{defaultValue:null,description:"Селектор позволяющий найти кнопку закрытия последней опции. Необходимо для срабатывания\nудаления последней опции при нажатии Backspace в пустом поле ввода. Значение по умолчанию:\n'.wrapper-options > :has(.close-button):last-of-type .close-button'",name:"lastChipCloseButtonSelector",required:!1,type:{name:"string"}},onBackspaceKeyDown:{defaultValue:null,description:"Функция которая выполняется при нажатии на кнопку Backspace в поле ввода, по умолчанию произодет\nпоиск последнего чипа и нажатие на кнопку удалить",name:"onBackspaceKeyDown",required:!1,type:{name:"((input: HTMLInputElement | null, optionsWrapper: HTMLDivElement | null, lastChipCloseButtonSelector: string) => void)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/MultiInputField/index.tsx#InputExField"]={docgenInfo:InputExField.__docgenInfo,name:"InputExField",path:"src/components/form/MultiInputField/index.tsx#InputExField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Chips=__webpack_require__("./src/components/Chips/index.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function MultiInputFieldPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiInputFieldPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiInputFieldPlayground_template_define_property(target,key,source[key])})}return target}function MultiInputFieldPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiInputFieldPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiInputFieldPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiInputFieldPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MultiInputFieldPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MultiInputFieldPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  pointer-events: auto;\n  &:hover {\n    color: var(--admiral-color-Neutral_Neutral30, ",");\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  &:hover {\n    background-color: var(--admiral-color-Neutral_Neutral10, ",");\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: flex;\n  min-width: 35px;\n  max-width: 190px;\n\n  @media (max-width: 768px) {\n    max-width: 80px;\n  }\n\n  ","\n\n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}var disabledChipStyle=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 30"]}),hoverChipStyle=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 10"]}),StyledChip=(0,styled_components_browser_esm.Ay)(Chips.C)(_templateObject2(),function(param){var disabled=param.disabled,readOnly=param.readOnly;return disabled?disabledChipStyle:readOnly?null:hoverChipStyle},typography.Il["Caption/Caption 1"]),MultiInputFieldPlaygroundTemplate=function(_param){var _param_label=_param.label,_param_extraText=_param.extraText,themeBorderKind=_param.themeBorderKind,_param_displayClearIcon=_param.displayClearIcon,CSSCustomProps=_param.CSSCustomProps,props=MultiInputFieldPlayground_template_object_without_properties(_param,["label","extraText","themeBorderKind","displayClearIcon","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(""),2),value=_useState[0],setValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)([]),2),listValue=_useState1[0],setListValue=_useState1[1],handleDeleteChip=function(id){setListValue(function(prevState){return prevState.filter(function(elem){return elem.id!==id})})};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(MultiInputField,MultiInputFieldPlayground_template_object_spread_props(MultiInputFieldPlayground_template_object_spread({"data-container-id":"MultiInputFieldId"},props),{label:void 0===_param_label?"Label":_param_label,extraText:void 0===_param_extraText?"extraText":_param_extraText,value:value,onInputComplete:function(){var newValue=value.trim();newValue&&(setListValue(function(prevState){return _to_consumable_array(prevState).concat([{id:(0,uid.L)(),children:newValue}])}),setValue(""))},onClearOptions:function(){setListValue([])},onChange:function(e){setValue(e.currentTarget.value)},displayClearIcon:(void 0===_param_displayClearIcon||_param_displayClearIcon)&&0!==listValue.length,children:listValue.map(function(item,index){return(0,react.createElement)(StyledChip,MultiInputFieldPlayground_template_object_spread_props(MultiInputFieldPlayground_template_object_spread({},item),{key:index,onClose:props.readOnly||props.disableCopying?void 0:handleDeleteChip,tabIndex:-1,dimension:"s",appearance:"filled",readOnly:props.readOnly,disabled:props.disabled}))})}))})};try{StyledChip.displayName="StyledChip",StyledChip.__docgenInfo={description:"",displayName:"StyledChip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/MultiInputField/stories/MultiInputFieldPlayground.template.tsx#StyledChip"]={docgenInfo:StyledChip.__docgenInfo,name:"StyledChip",path:"src/components/form/MultiInputField/stories/MultiInputFieldPlayground.template.tsx#StyledChip"})}catch(__react_docgen_typescript_loader_error){}try{MultiInputFieldPlaygroundTemplate.displayName="MultiInputFieldPlaygroundTemplate",MultiInputFieldPlaygroundTemplate.__docgenInfo={description:"",displayName:"MultiInputFieldPlaygroundTemplate",props:{menuWidth:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.\nВзамен используйте параметры prefixDropContainerStyle.menuWidth и\nsuffixDropContainerStyle.menuWidth.\n\nШирина меню",name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.\nВзамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin\n\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:{value:"true"},description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:{value:"extraText"},description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/MultiInputField/stories/MultiInputFieldPlayground.template.tsx#MultiInputFieldPlaygroundTemplate"]={docgenInfo:MultiInputFieldPlaygroundTemplate.__docgenInfo,name:"MultiInputFieldPlaygroundTemplate",path:"src/components/form/MultiInputField/stories/MultiInputFieldPlayground.template.tsx#MultiInputFieldPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");function MultiInputField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MultiInputField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function MultiInputField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MultiInputField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MultiInputField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiInputField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiInputField_stories_define_property(target,key,source[key])})}return target}function MultiInputField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiInputField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiInputField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiInputField_stories_sliced_to_array(arr,i){return MultiInputField_stories_array_with_holes(arr)||MultiInputField_stories_iterable_to_array_limit(arr,i)||MultiInputField_stories_unsupported_iterable_to_array(arr,i)||MultiInputField_stories_non_iterable_rest()}function MultiInputField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MultiInputField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MultiInputField_stories_array_like_to_array(o,minLen)}}let MultiInputField_stories={title:"Admiral-2.1/Form Field/MultiInputField",component:MultiInputField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{})},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},extraText:{control:{type:"text"}},label:{control:{type:"text"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var MultiInputFieldPlayground={render:function(props){var CSSCustomProps=MultiInputField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MultiInputFieldPlaygroundTemplate,MultiInputField_stories_object_spread_props(MultiInputField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import { useState } from 'react';\nimport type { ChangeEvent } from 'react';\nimport styled, { css, ThemeProvider } from 'styled-components';\n\nimport { Chips, MultiInputField, typography } from '@admiral-ds/react-ui';\nimport type { InputExFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\nimport { uid } from '#src/components/common/uid';\n\nconst disabledChipStyle = css`\n  pointer-events: auto;\n  &:hover {\n    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});\n  }\n`;\n\nconst hoverChipStyle = css`\n  &:hover {\n    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});\n  }\n`;\n\nexport const StyledChip = styled(Chips)<{ readOnly?: boolean }>`\n  display: flex;\n  min-width: 35px;\n  max-width: 190px;\n\n  @media (max-width: 768px) {\n    max-width: 80px;\n  }\n\n  ${({ disabled, readOnly }) => (disabled ? disabledChipStyle : readOnly ? null : hoverChipStyle)}\n\n  ${typography['Caption/Caption 1']};\n`;\n\nexport const MultiInputFieldPlaygroundTemplate = ({\n  label = 'Label',\n  extraText = 'extraText',\n  themeBorderKind,\n  displayClearIcon = true,\n  CSSCustomProps,\n  ...props\n}: InputExFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [value, setValue] = useState('');\n  const [listValue, setListValue] = useState<React.ComponentProps<typeof StyledChip>[]>([]);\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const currentValue = e.currentTarget.value;\n\n    setValue(currentValue);\n  };\n\n  const handleDeleteChip = (id?: string) => {\n    setListValue((prevState) => {\n      return prevState.filter((elem) => elem.id !== id);\n    });\n  };\n\n  const handleKeyDown = () => {\n    const newValue = value.trim();\n\n    if (newValue) {\n      setListValue((prevState) => {\n        return [...prevState, { id: uid(), children: newValue }];\n      });\n      setValue('');\n    }\n  };\n\n  const handleClearListValue = () => {\n    setListValue([]);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <MultiInputField\n        data-container-id=\"MultiInputFieldId\"\n        {...props}\n        label={label}\n        extraText={extraText}\n        value={value}\n        onInputComplete={handleKeyDown}\n        onClearOptions={handleClearListValue}\n        onChange={handleChange}\n        displayClearIcon={displayClearIcon && listValue.length !== 0}\n      >\n        {listValue.map((item, index) => (\n          <StyledChip\n            {...item}\n            key={index}\n            onClose={props.readOnly || props.disableCopying ? undefined : handleDeleteChip}\n            tabIndex={-1}\n            dimension=\"s\"\n            appearance=\"filled\"\n            readOnly={props.readOnly}\n            disabled={props.disabled}\n          />\n        ))}\n      </MultiInputField>\n    </ThemeProvider>\n  );\n};\n"}}},name:"MultiInputField"};MultiInputFieldPlayground.parameters={...MultiInputFieldPlayground.parameters,docs:{...MultiInputFieldPlayground.parameters?.docs,source:{originalSource:"{\n  render: InputExFieldInputStory,\n  parameters: {\n    docs: {\n      source: {\n        code: MultiInputFieldPlaygroundTemplateRaw\n      }\n    }\n  },\n  name: 'MultiInputField'\n}",...MultiInputFieldPlayground.parameters?.docs?.source}}};let __namedExportsOrder=["MultiInputFieldPlayground"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
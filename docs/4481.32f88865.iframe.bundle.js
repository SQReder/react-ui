"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4481],{"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bP:()=>ExtraTextContainer,gN:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.c["Body/Body 2 Long"],(p=>p.error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount,"/",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.iv)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label._),Field_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.c8),LabelContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.iv)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.ZP)(Label._).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.iv)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-status='error'] &{color:",";}[data-status='success'] &{color:",";}"],typography.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.ZP)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.h)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.O)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>InputIconButton});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AnyIcon({icon,...props}){const Icon=icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{...props})}AnyIcon.displayName="AnyIcon";const InputIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(AnyIcon).withConfig({displayName:"InputIconButton",componentId:"sc-1brcj1d-0"})(["& *[fill^='#']{fill:",";}[disabled] &&&{pointer-events:none;& *[fill^='#']{fill:",";}}&:hover{cursor:pointer;}&:hover *[fill^='#']{fill:",";}"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Primary/Primary 70"]));try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:",";}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.disabled?"":props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){const{value=input.value,selectionStart,selectionEnd}=toChangeData;if(isInputDataDifferent(input,{value,selectionStart,selectionEnd})){const nativeInputValueSetter=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value")?.set;let event;nativeInputValueSetter?.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event"),event.initEvent("input",!0,!0)),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{F:()=>isInputDataDifferent,j:()=>changeInputData})},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,R_:()=>passMenuDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,l$:()=>passDataAttributes,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TextField});var _src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_input__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/TextArea/index.tsx"),_src_components_Field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),{className,maxLength,displayInline,status,required,extraText,label,id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.h)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,inputRef,displayCharacterCounter,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$l)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.Od)(restProps,fieldContainerProps);const inputProps={ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.O)(ref,inputRef),id,"aria-required":required,status,disabled,maxLength,skeleton,...restProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_5__.gN,{...fieldContainerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_6__.K,{...inputProps})})}));TextField.displayName="TextField";try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/form/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W2:()=>Container,c8:()=>skeletonMixin,pT:()=>containerHeights,xj:()=>HeightLimitedContainer});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");const containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:",";"],(({$dimension})=>{switch($dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}})),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)([""," & > *{visibility:hidden;}"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.x),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Container",componentId:"sc-1p357h8-0"})(["position:relative;display:flex;align-items:stretch;border:none;border-radius:",";pointer-events:",";",";"],(p=>p.$skeleton?0:(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.c8)(p.theme.shape)),(p=>p.$skeleton?"none":"all"),(({$skeleton})=>$skeleton&&skeletonMixin)),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(Container).withConfig({displayName:"Container__HeightLimitedContainer",componentId:"sc-1p357h8-1"})(["",";"],containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextArea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TextArea});var _src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/InputIconButton.tsx"),_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/Container.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconSizeValue=props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},verticalPaddingValue=props=>{switch(props.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},horizontalPaddingValue=props=>{switch(props.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["padding-right:","px;"],(props=>horizontalPaddingValue(props)+(props.$iconCount?iconSizeValue(props)+8:0))),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";border-color:transparent;"],(props=>props.theme.color["Neutral/Neutral 10"])),BorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"TextArea__BorderedDiv",componentId:"sc-1kfofel-0"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:0;pointer-events:none;overflow:hidden;min-width:0;background:none;border:1px solid ",";border-radius:inherit;[data-status='error'] &&&{border:1px solid ",";}[data-status='success'] &&&{border:1px solid ",";}[data-read-only] &&&{border-color:transparent;}"],(props=>props.theme.color["Neutral/Neutral 40"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),colorsBorderAndBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";&:focus + ","{border:2px solid ",";}&&&:disabled + ",",[data-read-only] &&& + ","{border-color:transparent;}&:hover:not(:focus) + ","{border-color:",";}&:invalid + ",",&:invalid:hover + ","{border:1px solid ",";}[data-status='error'] &&&:hover:not(:disabled) + ",",&:invalid:hover:not(:disabled) + ","{border:1px solid ",";}[data-status='success'] &&&:hover:not(:disabled) + ","{border:1px solid ",";}[data-status='error'] &&&:focus:not(:disabled) + ",",&:invalid:focus:not(:disabled) + ","{border:2px solid ",";}[data-status='success'] &&&:focus:not(:disabled) + ","{border:2px solid ",";}[data-read-only] &&&,&&&:disabled{","}[data-read-only] &&&:hover + ",",[data-read-only] &&&:focus + ","{border-color:transparent;}"],(props=>props.theme.color["Neutral/Neutral 00"]),BorderedDiv,(props=>props.theme.color["Primary/Primary 60 Main"]),BorderedDiv,BorderedDiv,BorderedDiv,(props=>props.disabled?"transparent":props.theme.color["Neutral/Neutral 60"]),BorderedDiv,BorderedDiv,(props=>props.theme.color["Error/Error 60 Main"]),BorderedDiv,BorderedDiv,(props=>props.theme.color["Error/Error 70"]),BorderedDiv,(props=>props.theme.color["Success/Success 60"]),BorderedDiv,BorderedDiv,(props=>props.theme.color["Error/Error 60 Main"]),BorderedDiv,(props=>props.theme.color["Success/Success 50 Main"]),disabledColors,BorderedDiv,BorderedDiv),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["::-ms-clear,::-ms-reveal{display:none;}"]),textBlockStyleMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["outline:none;appearance:none;border-radius:inherit;border:none;box-sizing:border-box;margin:0;padding:","px ","px;overflow-wrap:break-word;"," "," ",""],verticalPaddingValue,horizontalPaddingValue,(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.c["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.c["Body/Body 1 Long"]),colorsBorderAndBackground,extraPadding),HiddenSpanContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"TextArea__HiddenSpanContainer",componentId:"sc-1kfofel-1"})(["overflow-x:hidden;overflow-y:auto;",""],textBlockStyleMixin),Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.textarea.withConfig({displayName:"TextArea__Text",componentId:"sc-1kfofel-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;resize:none;flex:1 1 auto;min-width:10px;background:transparent;overflow-y:auto;overflow-x:hidden;color:",";"," &::placeholder{color:",";}&:disabled::placeholder,&:disabled{color:",";}[data-disable-copying] &{user-select:none;pointer-events:none;}"," ",""],(props=>props.theme.color["Neutral/Neutral 90"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.c["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.c["Body/Body 1 Long"]),(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),textBlockStyleMixin,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"TextArea__IconPanel",componentId:"sc-1kfofel-3"})(["position:absolute;top:0;bottom:0;right:0;display:flex;flex-direction:column;align-items:center;padding-right:","px;padding-top:","px;& > *{display:block;width:","px;}"],horizontalPaddingValue,verticalPaddingValue,iconSizeValue);function defaultHandleInput(newInputData){return newInputData}const stopEvent=e=>e.preventDefault(),textAreaHeight=(rows,$dimension)=>rows*("s"===$dimension?20:24)+2*verticalPaddingValue({$dimension}),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_Container__WEBPACK_IMPORTED_MODULE_5__.W2).withConfig({displayName:"TextArea__StyledContainer",componentId:"sc-1kfofel-4"})(["min-height:","px;"," ",""],(p=>textAreaHeight(p.$rows,p.$dimension)),(p=>p.$maxRows?`max-height: ${textAreaHeight(p.$maxRows,p.$dimension)}px;`:""),(p=>p.$autoHeight?"":`height: ${textAreaHeight(p.$rows,p.$dimension)}px;`));function toHtmlString(value){return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const TextArea=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({rows=3,maxRows,value,displayClearIcon,status,handleInput=defaultHandleInput,containerRef,icons,children,className,autoHeight,skeleton=!1,dimension="m",...props},ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),hiddenDivRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),iconArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(icons);!props.readOnly&&displayClearIcon&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__.W,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__.r,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.j)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon"));const iconCount=iconArray.length,inputData=null!=value?handleInput({value:String(value)}):{};return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect((()=>{function oninput(){const{value,selectionStart,selectionEnd}=this,inputData=handleInput({value,selectionStart,selectionEnd});(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.j)(this,inputData)}if(inputRef.current){const node=inputRef.current;node.addEventListener("input",oninput);const{value,selectionStart,selectionEnd}=node,inputData=handleInput({value,selectionStart,selectionEnd});return(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.j)(node,inputData),()=>{node.removeEventListener("input",oninput)}}}),[handleInput]),react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{function oninput(){const{value}=this,hiddenDiv=hiddenDivRef.current;hiddenDiv&&(hiddenDiv.innerHTML=toHtmlString(value),this.style.overflowY=hiddenDiv.clientHeight<hiddenDiv.scrollHeight?"":"hidden")}if(autoHeight&&inputRef.current&&hiddenDivRef.current){const node=inputRef.current;return hiddenDivRef.current.innerHTML=toHtmlString(node.value),node.addEventListener("input",oninput),node.style.overflowY=hiddenDivRef.current.clientHeight<hiddenDivRef.current.scrollHeight?"":"hidden",()=>{node.removeEventListener("input",oninput),node.style.overflowY=""}}}),[autoHeight,inputData.value,props.defaultValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{className,ref:containerRef,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:skeleton,"data-disable-copying":!!props.disableCopying||void 0,$autoHeight:!!autoHeight,$rows:rows,$maxRows:maxRows,$dimension:dimension,...props.disableCopying&&{onMouseDown:stopEvent},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HiddenSpanContainer,{ref:hiddenDivRef,$dimension:dimension,disabled:props.disabled,$iconCount:iconCount}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__.O)(ref,inputRef),...props,$dimension:dimension,$iconCount:iconCount,$autoHeight:autoHeight,value:inputData.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BorderedDiv,{}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]})}));TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"3"},description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/input/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(["0%{background-color:",";border-color:",";}50%{background-color:",";border-color:",";}100%{background-color:",";border-color:",";}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}}}]);
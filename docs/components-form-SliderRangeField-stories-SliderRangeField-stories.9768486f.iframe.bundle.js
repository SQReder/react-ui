"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7220],{"./src/components/form/SliderRangeField/stories/SliderRangeField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SliderRangeFieldPlayground:()=>SliderRangeFieldPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SliderRangeField_stories});__webpack_require__("./node_modules/react/index.js");var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),uid=__webpack_require__("./src/components/common/uid.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),SliderRange=__webpack_require__("./src/components/input/SliderRange/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SliderRangeField_Field=(0,styled_components_browser_esm.Ay)(Field.D0).withConfig({displayName:"SliderRangeField__Field",componentId:"sc-1qqwbba-0"})(["overflow:visible;"]),SliderRangeField=props=>{const{className,maxLength,displayInline,status,required,extraText,label,id=(0,uid.L)(),disabled,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);const componentProps={id,disabled,skeleton,...restProps};return(0,jsx_runtime.jsx)(SliderRangeField_Field,{...fieldContainerProps,children:(0,jsx_runtime.jsx)(SliderRange.t,{...componentProps})})};SliderRangeField.displayName="SliderRangeField",SliderRangeField.displayName="SliderRangeField";try{SliderRangeField.displayName="SliderRangeField",SliderRangeField.__docgenInfo={description:"",displayName:"SliderRangeField",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:null,description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SliderRangeField/index.tsx#SliderRangeField"]={docgenInfo:SliderRangeField.__docgenInfo,name:"SliderRangeField",path:"src/components/form/SliderRangeField/index.tsx#SliderRangeField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");const SliderRangeFieldPlaygroundTemplate=({label="Введите диапазон",themeBorderKind,CSSCustomProps,...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SliderRangeField,{"data-container-id":"sliderRangeFieldIdOne",...props,label})});SliderRangeFieldPlaygroundTemplate.displayName="SliderRangeFieldPlaygroundTemplate";try{SliderRangeFieldPlaygroundTemplate.displayName="SliderRangeFieldPlaygroundTemplate",SliderRangeFieldPlaygroundTemplate.__docgenInfo={description:"",displayName:"SliderRangeFieldPlaygroundTemplate",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:null,description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Введите диапазон"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SliderRangeField/stories/SliderRangeFieldPlayground.template.tsx#SliderRangeFieldPlaygroundTemplate"]={docgenInfo:SliderRangeFieldPlaygroundTemplate.__docgenInfo,name:"SliderRangeFieldPlaygroundTemplate",path:"src/components/form/SliderRangeField/stories/SliderRangeFieldPlayground.template.tsx#SliderRangeFieldPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const SliderRangeField_stories={title:"Admiral-2.1/Form Field/SliderRangeField",component:SliderRangeField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},extraText:{control:{type:"text"}},thousand:{control:{type:"text"}},decimal:{control:{type:"text"}},suffix:{control:{type:"text"}},maxLength:{control:{type:"number"}},minValue:{control:{type:"number"}},maxValue:{control:{type:"number"}},step:{control:{type:"number"}},precision:{control:{type:"number"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},name:{control:{type:"text"}},input1:{control:!1},input2:{control:!1},defaultValue:{control:!1},value:{control:!1},prefix:{control:!1},placeholder:{control:!1}}},SliderRangeFieldPlaygroundStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SliderRangeFieldPlaygroundTemplate,{...props,CSSCustomProps})};SliderRangeFieldPlaygroundStory.displayName="SliderRangeFieldPlaygroundStory";const SliderRangeFieldPlayground={render:SliderRangeFieldPlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { SliderRangeField } from '@admiral-ds/react-ui';\nimport type { SliderRangeFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderRangeFieldPlaygroundTemplate = ({\n  label = 'Введите диапазон',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderRangeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderRangeField data-container-id=\"sliderRangeFieldIdOne\" {...props} label={label} />\n    </ThemeProvider>\n  );\n};\n"}}},name:"SliderRangeField example"};SliderRangeFieldPlayground.parameters={...SliderRangeFieldPlayground.parameters,docs:{...SliderRangeFieldPlayground.parameters?.docs,source:{originalSource:"{\n  render: SliderRangeFieldPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderRangeFieldPlaygroundRaw\n      }\n    }\n  },\n  name: 'SliderRangeField example'\n}",...SliderRangeFieldPlayground.parameters?.docs?.source}}};const __namedExportsOrder=["SliderRangeFieldPlayground"]},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bV:()=>ExtraTextContainer,D0:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.Il["Body/Body 2 Long"],(p=>p.error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,visibilityThreshold=.8,inputRef,...props})=>{const[currentCount,setCurrentCount]=(0,react.useState)(0);return(0,react.useEffect)((()=>{const timer=setInterval((()=>{const node=inputRef.current;node&&setCurrentCount(node.value.length)}),250);return()=>clearInterval(timer)}),[inputRef]),currentCount>maxLength*visibilityThreshold?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<maxLength*visibilityThreshold,children:[currentCount," / ",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},visibilityThreshold:{defaultValue:{value:"0.8"},description:"Коэффициент появления счетчика:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"visibilityThreshold",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const ContentWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ContentWrapper",componentId:"sc-1wrg3lg-0"})([""]),inlineMixin=(0,styled_components_browser_esm.AH)(["flex-direction:row;align-items:center;","{margin:0 8px 0 0;}","{flex:1 1 auto;}"],Label.J,ContentWrapper),Field_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-1"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-2"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.vy),LabelContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-3"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.AH)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.Ay)(Label.J).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-4"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.AH)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-5"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-6"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-status='error'] &{color:var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &{color:var(--admiral-color-Success_Success50Main,",");}"],typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.Ay)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-7"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,characterCounterVisibilityThreshold=.8,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id,skeleton=!1,...restFieldProps}=props,[defaultID]=(0,react.useState)((0,uid.L)()),fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id??defaultID,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.d)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)(ContentWrapper,{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,visibilityThreshold:characterCounterVisibilityThreshold,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:var(--admiral-color-Error_Error60Main,",");}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);
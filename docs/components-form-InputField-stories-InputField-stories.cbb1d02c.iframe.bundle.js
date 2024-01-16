"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3128],{"./src/components/form/InputField/stories/InputField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputFieldInput:()=>InputFieldInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputField_stories});var react=__webpack_require__("./node_modules/react/index.js"),InputField=__webpack_require__("./src/components/form/InputField/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DisplayContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputFieldInputtemplate__DisplayContainer",componentId:"sc-1jhniyh-0"})(["> *{margin-bottom:24px;}"]),InputFieldInputTemplate=({value="Привет",label="Label",themeBorderKind,...props})=>{const[localValue,setValue]=react.useState(String(value)??""),[invalidInputValue,setInvalidInputValue]=react.useState("Hello");return(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:(0,createBorderRadiusSwapper.z)(themeBorderKind),children:(0,jsx_runtime.jsxs)(DisplayContainer,{children:[(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdOne",...props,value:localValue,onChange:e=>{const inputValue=e.target.value;setValue(inputValue),props.onChange?.(e)},label}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdTwo",required:!0,label:"Поле необходимо заполнить"}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdThree",readOnly:!0,"aria-readonly":!0,label:"Поле с атрибутом readOnly",defaultValue:"Этот текст не редактируемый"}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdFour",disabled:!0,"aria-disabled":!0,label:"Поле с атрибутом disabled",placeholder:"Placeholder"}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdFiveInvalid",label:"Поле с ошибкой (invalid)",pattern:"[a-z]+",value:invalidInputValue,onChange:e=>{const invalidInputValue=e.target.value;setInvalidInputValue(invalidInputValue),props.onChange?.(e)}}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdFive",status:"error",label:"Поле с ошибкой (status = error)",extraText:"Поле не прошло валидацию, необходимо ввести корректное значение"}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdSix",status:"success",label:"Поле с индикацией успеха (status = success)",extraText:"Поле успешно прошло валидацию"}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdSeven",displayClearIcon:!0,placeholder:"идет поиск ...",label:"Поле с иконкой загрузки",isLoading:!0}),(0,jsx_runtime.jsx)(InputField.U,{"data-container-id":"inputFieldIdEight",label:"Поле для ввода пароля (type='password')",type:"password"})]})})};InputFieldInputTemplate.displayName="InputFieldInputTemplate";try{InputFieldInputTemplate.displayName="InputFieldInputTemplate",InputFieldInputTemplate.__docgenInfo={description:"",displayName:"InputFieldInputTemplate",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputField/stories/InputFieldInput.template.tsx#InputFieldInputTemplate"]={docgenInfo:InputFieldInputTemplate.__docgenInfo,name:"InputFieldInputTemplate",path:"src/components/form/InputField/stories/InputFieldInput.template.tsx#InputFieldInputTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const InputField_stories={title:"Admiral-2.1/Form Field/InputField",component:InputField.U,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.t,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046"}]},argTypes:{dimension:{options:types.q,control:{type:"radio"}},status:{control:{type:"radio"},options:types.l},maxLength:{control:{type:{name:"number",required:!1}}},extraText:{control:{type:"text"}},label:{control:{type:"text"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},icons:{control:!1},containerRef:{control:!1},handleInput:{control:!1},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},InputFieldInputStory=props=>(0,jsx_runtime.jsx)(InputFieldInputTemplate,{...props});InputFieldInputStory.displayName="InputFieldInputStory";const InputFieldInput={render:InputFieldInputStory,parameters:{docs:{source:{code:'import * as React from \'react\';\n\nimport { InputField } from \'@admiral-ds/react-ui\';\nimport type { InputFieldProps, BorderRadiusType } from \'@admiral-ds/react-ui\';\nimport styled, { ThemeProvider } from \'styled-components\';\nimport { createBorderRadiusSwapper } from \'../../../../../.storybook/createBorderRadiusSwapper\';\n\nconst DisplayContainer = styled.div`\n  > * {\n    margin-bottom: 24px;\n  }\n`;\n\nexport const InputFieldInputTemplate = ({\n  value = \'Привет\',\n  label = \'Label\',\n  themeBorderKind,\n  ...props\n}: InputFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  const [localValue, setValue] = React.useState<string>(String(value) ?? \'\');\n  const [invalidInputValue, setInvalidInputValue] = React.useState<string>(\'Hello\');\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.target.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  const handleInvalidInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const invalidInputValue = e.target.value;\n    setInvalidInputValue(invalidInputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <DisplayContainer>\n        <InputField\n          data-container-id="inputFieldIdOne"\n          {...props}\n          value={localValue}\n          onChange={handleChange}\n          label={label}\n        />\n        <InputField data-container-id="inputFieldIdTwo" required label="Поле необходимо заполнить" />\n        <InputField\n          data-container-id="inputFieldIdThree"\n          readOnly\n          aria-readonly\n          label="Поле с атрибутом readOnly"\n          defaultValue="Этот текст не редактируемый"\n        />\n        <InputField\n          data-container-id="inputFieldIdFour"\n          disabled\n          aria-disabled\n          label="Поле с атрибутом disabled"\n          placeholder="Placeholder"\n        />\n        <InputField\n          data-container-id="inputFieldIdFiveInvalid"\n          label="Поле с ошибкой (invalid)"\n          pattern="[a-z]+"\n          value={invalidInputValue}\n          onChange={handleInvalidInputValueChange}\n        />\n        <InputField\n          data-container-id="inputFieldIdFive"\n          status="error"\n          label="Поле с ошибкой (status = error)"\n          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"\n        />\n        <InputField\n          data-container-id="inputFieldIdSix"\n          status="success"\n          label="Поле с индикацией успеха (status = success)"\n          extraText="Поле успешно прошло валидацию"\n        />\n        <InputField\n          data-container-id="inputFieldIdSeven"\n          displayClearIcon\n          placeholder="идет поиск ..."\n          label="Поле с иконкой загрузки"\n          isLoading\n        />\n        <InputField\n          data-container-id="inputFieldIdEight"\n          label="Поле для ввода пароля (type=\'password\')"\n          type="password"\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n'}}},name:"Input field example"};InputFieldInput.parameters={...InputFieldInput.parameters,docs:{...InputFieldInput.parameters?.docs,source:{originalSource:"{\n  render: InputFieldInputStory,\n  parameters: {\n    docs: {\n      source: {\n        code: InputFieldInputRaw\n      }\n    }\n  },\n  name: 'Input field example'\n}",...InputFieldInput.parameters?.docs?.source}}};const __namedExportsOrder=["InputFieldInput"]},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.6 9.6 0 0 1-2.562.349 9.8 9.8 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19 19 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgEyeOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M11.306 9.08c.376-.088.694.233.694.62v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 5c-4.88 0-8.134 3.655-9.563 5.682a2.27 2.27 0 0 0 0 2.636C3.867 15.345 7.119 19 12 19c4.88 0 8.134-3.655 9.563-5.682a2.27 2.27 0 0 0 0-2.636C20.133 8.656 16.881 5 12 5M5.709 8.927a15 15 0 0 0-2.21 2.505.97.97 0 0 0 0 1.136c.522.74 1.263 1.654 2.21 2.505A7 7 0 0 1 5 12c0-1.102.255-2.145.709-3.073M12 17.7a5.7 5.7 0 1 1 0-11.4 5.7 5.7 0 0 1 0 11.4m6.291-8.773a15 15 0 0 1 2.21 2.505.97.97 0 0 1 0 1.136 15 15 0 0 1-2.21 2.505A7 7 0 0 0 19 12a7 7 0 0 0-.709-3.073",clipRule:"evenodd"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");function createBorderRadiusSwapper(borderRadiusKind){return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f)}}},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bP:()=>ExtraTextContainer,gN:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.c["Body/Body 2 Long"],(p=>p.error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount,"/",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.iv)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label._),Field_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.c8),LabelContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.iv)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.ZP)(Label._).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.iv)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-status='error'] &{color:",";}[data-status='success'] &{color:",";}"],typography.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.ZP)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.h)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.O)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:",";}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.disabled?"":props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,R_:()=>passMenuDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,l$:()=>passDataAttributes,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/InputField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>InputField});var _src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_input__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/TextInput/index.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),{className,maxLength,displayInline,status,required,extraText,label,id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.h)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,inputRef,displayCharacterCounter,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$l)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.Od)(restProps,fieldContainerProps);const inputProps={ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.O)(ref,inputRef),id,"aria-required":required,status,disabled,maxLength,skeleton,...restProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_5__.gN,{...fieldContainerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_6__.oi,{...inputProps})})}));InputField.displayName="InputField";try{InputField.displayName="InputField",InputField.__docgenInfo={description:"",displayName:"InputField",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputField/index.tsx#InputField"]={docgenInfo:InputField.__docgenInfo,name:"InputField",path:"src/components/form/InputField/index.tsx#InputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.cP,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>INPUT_STATUS_VALUES,q:()=>INPUT_DIMENSIONS_VALUES});const INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);
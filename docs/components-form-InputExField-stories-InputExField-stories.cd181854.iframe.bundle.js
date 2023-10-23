"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6314],{"./src/components/form/InputExField/stories/InputExField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputExFieldInput:()=>InputExFieldInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputExField_stories});var react=__webpack_require__("./node_modules/react/index.js"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),InputEx=__webpack_require__("./src/components/input/InputEx/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputExField=react.forwardRef(((props,ref)=>{const inputRef=react.useRef(null),{className,maxLength,displayInline,status,required,extraText,label,id=(0,uid.h)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,inputRef,displayCharacterCounter,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$l)(restProps,fieldContainerProps),(0,splitDataAttributes.Od)(restProps,fieldContainerProps);const inputProps={ref:(0,refSetter.O)(ref,inputRef),id,"aria-required":required,status,disabled,maxLength,skeleton,...restProps};return(0,jsx_runtime.jsx)(Field.gN,{...fieldContainerProps,children:(0,jsx_runtime.jsx)(InputEx.B,{...inputProps})})}));InputExField.displayName="InputExField";try{InputExField.displayName="InputExField",InputExField.__docgenInfo={description:"",displayName:"InputExField",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},alignDropRef:{defaultValue:null,description:"Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated use columnsButtonDropContainerStyle.dropContainerCssMixin instead\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputExField/index.tsx#InputExField"]={docgenInfo:InputExField.__docgenInfo,name:"InputExField",path:"src/components/form/InputExField/index.tsx#InputExField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");const DisplayContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputExFieldInputtemplate__DisplayContainer",componentId:"sc-1j04g94-0"})(["> *{margin-bottom:24px;}"]),PREFIX_OPTIONS=["prefix One","prefix Two","prefix Three"],SUFFIX_OPTIONS=["suffix One","suffix Two","suffix Three"],InputExFieldInputTemplate=({value="Привет",label="Label",themeBorderKind,...props})=>{const[localValue,setValue]=(0,react.useState)(String(value)??""),[prefixValue,setPrefixValue]=(0,react.useState)("prefix One"),[suffixValue,setSuffixValue]=(0,react.useState)("suffix One");return(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:(0,createBorderRadiusSwapper.z)(themeBorderKind),children:(0,jsx_runtime.jsxs)(DisplayContainer,{children:[(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdOne",...props,value:localValue,onChange:e=>{const inputValue=e.target.value;setValue(inputValue),props.onChange?.(e)},suffixValue,suffixValueList:SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},label}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdTwo",required:!0,label:"Поле необходимо заполнить",prefixValue,prefixValueList:PREFIX_OPTIONS,onPrefixValueChange:setPrefixValue,prefixDropContainerStyle:{dropContainerClassName:"prefixDropContainerClass"}}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdThree",suffixValue:"suffix",prefixValue:"prefix",readOnly:!0,"aria-readonly":!0,label:"Поле с атрибутом readOnly",defaultValue:"Этот текст не редактируемый"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdFour",suffixValue:"suffix",prefixValue:"prefix",disabled:!0,"aria-disabled":!0,label:"Поле с атрибутом disabled",placeholder:"Placeholder"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdFive",prefixValue:"prefix",status:"error",label:"Поле с ошибкой",extraText:"Поле не прошло валидацию, необходимо ввести корректное значение"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdWSix",suffixValue:"suffix",status:"success",label:"Поле с индикацией успеха",extraText:"Поле успешно прошло валидацию"}),(0,jsx_runtime.jsx)(InputExField,{"data-container-id":"InputExFieldIdSeven",prefixValue:"prefix",placeholder:"идет поиск ...",label:"Поле с иконкой загрузки",suffixValue:"suffix",icons:(0,jsx_runtime.jsx)(Spinner.$,{dimension:"m"})}),(0,jsx_runtime.jsx)(InputExField,{displayClearIcon:!0,"data-container-id":"InputExFieldIdEight",prefixValue:"prefix",label:"Поле иконкой очистки"})]})})};InputExFieldInputTemplate.displayName="InputExFieldInputTemplate";try{InputExFieldInputTemplate.displayName="InputExFieldInputTemplate",InputExFieldInputTemplate.__docgenInfo={description:"",displayName:"InputExFieldInputTemplate",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},alignDropRef:{defaultValue:null,description:"Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,\nесли не указан, выравнивание произойдет относительно контейнера компонента",name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:"((props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},dropContainerCssMixin:{defaultValue:null,description:"@deprecated use columnsButtonDropContainerStyle.dropContainerCssMixin instead\nПозволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:"DropContainerStyles"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputExField/stories/InputExFieldInput.template.tsx#InputExFieldInputTemplate"]={docgenInfo:InputExFieldInputTemplate.__docgenInfo,name:"InputExFieldInputTemplate",path:"src/components/form/InputExField/stories/InputExFieldInput.template.tsx#InputExFieldInputTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const InputExField_stories={title:"Admiral-2.1/Form Field/InputExField",component:InputExField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.t,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046"}]},argTypes:{dimension:{options:types.q,control:{type:"radio"}},status:{control:{type:"radio"},options:types.l},maxLength:{control:{type:{name:"number",required:!1}}},extraText:{control:{type:"text"}},prefixValue:{control:{type:"text"}},suffixValue:{control:{type:"text"}},label:{control:{type:"text"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},icons:{control:!1},alignDropRef:{control:!1},containerRef:{control:!1},prefixValueList:{control:!1},suffixValueList:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},prefixDropContainerStyle:{control:!1},suffixDropContainerStyle:{control:!1},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},InputExFieldInputStory=props=>(0,jsx_runtime.jsx)(InputExFieldInputTemplate,{...props});InputExFieldInputStory.displayName="InputExFieldInputStory";const InputExFieldInput={render:InputExFieldInputStory,parameters:{docs:{source:{code:"import { useState } from 'react';\nimport type { ChangeEvent, ReactNode } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport { InputExField, Spinner } from '@admiral-ds/react-ui';\nimport type { InputExFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst DisplayContainer = styled.div`\n  > * {\n    margin-bottom: 24px;\n  }\n`;\n\nconst PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];\nconst SUFFIX_OPTIONS = ['suffix One', 'suffix Two', 'suffix Three'];\n\nexport const InputExFieldInputTemplate = ({\n  value = 'Привет',\n  label = 'Label',\n  themeBorderKind,\n  ...props\n}: InputExFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  const [localValue, setValue] = useState<string>(String(value) ?? '');\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.target.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');\n  const [suffixValue, setSuffixValue] = useState<ReactNode>('suffix One');\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <DisplayContainer>\n        <InputExField\n          data-container-id=\"InputExFieldIdOne\"\n          {...props}\n          value={localValue}\n          onChange={handleChange}\n          suffixValue={suffixValue}\n          suffixValueList={SUFFIX_OPTIONS}\n          onSuffixValueChange={setSuffixValue}\n          suffixDropContainerStyle={{ dropContainerClassName: 'suffixDropContainerClass' }}\n          label={label}\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdTwo\"\n          required\n          label=\"Поле необходимо заполнить\"\n          prefixValue={prefixValue}\n          prefixValueList={PREFIX_OPTIONS}\n          onPrefixValueChange={setPrefixValue}\n          prefixDropContainerStyle={{ dropContainerClassName: 'prefixDropContainerClass' }}\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdThree\"\n          suffixValue={'suffix'}\n          prefixValue={'prefix'}\n          readOnly\n          aria-readonly\n          label=\"Поле с атрибутом readOnly\"\n          defaultValue=\"Этот текст не редактируемый\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdFour\"\n          suffixValue={'suffix'}\n          prefixValue={'prefix'}\n          disabled\n          aria-disabled\n          label=\"Поле с атрибутом disabled\"\n          placeholder=\"Placeholder\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdFive\"\n          prefixValue={'prefix'}\n          status=\"error\"\n          label=\"Поле с ошибкой\"\n          extraText=\"Поле не прошло валидацию, необходимо ввести корректное значение\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdWSix\"\n          suffixValue={'suffix'}\n          status=\"success\"\n          label=\"Поле с индикацией успеха\"\n          extraText=\"Поле успешно прошло валидацию\"\n        />\n        <InputExField\n          data-container-id=\"InputExFieldIdSeven\"\n          prefixValue={'prefix'}\n          placeholder=\"идет поиск ...\"\n          label=\"Поле с иконкой загрузки\"\n          suffixValue={'suffix'}\n          icons={<Spinner dimension=\"m\" />}\n        />\n        <InputExField\n          displayClearIcon\n          data-container-id=\"InputExFieldIdEight\"\n          prefixValue={'prefix'}\n          label=\"Поле иконкой очистки\"\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n"}}},name:"InputEx field example"};InputExFieldInput.parameters={...InputExFieldInput.parameters,docs:{...InputExFieldInput.parameters?.docs,source:{originalSource:"{\n  render: InputExFieldInputStory,\n  parameters: {\n    docs: {\n      source: {\n        code: InputExFieldInputRaw\n      }\n    }\n  },\n  name: 'InputEx field example'\n}",...InputExFieldInput.parameters?.docs?.source}}};const __namedExportsOrder=["InputExFieldInput"]},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bP:()=>ExtraTextContainer,gN:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.c["Body/Body 2 Long"],(p=>p.error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount,"/",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.iv)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label._),Field_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.c8),LabelContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.iv)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.ZP)(Label._).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.iv)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-status='error'] &{color:",";}[data-status='success'] &{color:",";}"],typography.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.ZP)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.h)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.O)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:",";}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.disabled?"":props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,R_:()=>passMenuDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,l$:()=>passDataAttributes,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.cP,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"}}]);
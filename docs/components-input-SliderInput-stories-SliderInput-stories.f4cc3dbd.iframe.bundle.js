"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1008],{"./src/components/input/SliderInput/stories/SliderInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledExample:()=>ControlledExample,CustomExample:()=>CustomExample,CustomMarkExample:()=>CustomMarkExample,TickmarksExample:()=>TickmarksExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SliderInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SliderInput=__webpack_require__("./src/components/input/SliderInput/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SliderInputControlledTemplate=({themeBorderKind,CSSCustomProps,...props})=>{const[slider1,setSlider1]=react.useState(String(props.value??""));return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SliderInput.C,{...props,value:slider1,onChange:(full,short,event)=>{console.log({full,short,event}),setSlider1(event.target.value)}})})};SliderInputControlledTemplate.displayName="SliderInputControlledTemplate";try{SliderInputControlledTemplate.displayName="SliderInputControlledTemplate",SliderInputControlledTemplate.__docgenInfo={description:"",displayName:"SliderInputControlledTemplate",props:{onChange:{defaultValue:null,description:"Колбек на изменение значения компонента\n(fullStr - строка вместе с префиксом/суффиксом/разделителями,\nshortStr - строка только с числом без символа разделителя тысяч)",name:"onChange",required:!1,type:{name:"((fullStr: string, shortStr: string, event: ChangeEvent<HTMLInputElement>) => void)"}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это положительное число, по умолчанию 1.\nЕсли шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},tickMarks:{defaultValue:null,description:"Массив отметок слайдера",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдер",name:"placeholder",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"Стандартные html-атрибуты, которые будут переданы wrapper-контейнеру компонента",name:"wrapperProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderInput/stories/SliderInputControlled.template.tsx#SliderInputControlledTemplate"]={docgenInfo:SliderInputControlledTemplate.__docgenInfo,name:"SliderInputControlledTemplate",path:"src/components/input/SliderInput/stories/SliderInputControlled.template.tsx#SliderInputControlledTemplate"})}catch(__react_docgen_typescript_loader_error){}const SliderInputTickMarksTemplate=({themeBorderKind,CSSCustomProps,...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SliderInput.C,{...props,defaultValue:"15",onChange:(full,short,event)=>console.log({full,short,event}),tickMarks:[5,10,15]})});SliderInputTickMarksTemplate.displayName="SliderInputTickMarksTemplate";try{SliderInputTickMarksTemplate.displayName="SliderInputTickMarksTemplate",SliderInputTickMarksTemplate.__docgenInfo={description:"",displayName:"SliderInputTickMarksTemplate",props:{onChange:{defaultValue:null,description:"Колбек на изменение значения компонента\n(fullStr - строка вместе с префиксом/суффиксом/разделителями,\nshortStr - строка только с числом без символа разделителя тысяч)",name:"onChange",required:!1,type:{name:"((fullStr: string, shortStr: string, event: ChangeEvent<HTMLInputElement>) => void)"}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это положительное число, по умолчанию 1.\nЕсли шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},tickMarks:{defaultValue:null,description:"Массив отметок слайдера",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдер",name:"placeholder",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"Стандартные html-атрибуты, которые будут переданы wrapper-контейнеру компонента",name:"wrapperProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderInput/stories/SliderInputTickMarks.template.tsx#SliderInputTickMarksTemplate"]={docgenInfo:SliderInputTickMarksTemplate.__docgenInfo,name:"SliderInputTickMarksTemplate",path:"src/components/input/SliderInput/stories/SliderInputTickMarks.template.tsx#SliderInputTickMarksTemplate"})}catch(__react_docgen_typescript_loader_error){}const SliderInputCustomisedTemplate=({themeBorderKind,CSSCustomProps,...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SliderInput.C,{...props,defaultValue:"5.000",onChange:(full,short,event)=>console.log({full,short,event}),suffix:"$",thousand:",",precision:3,placeholder:"0.000 $"})});SliderInputCustomisedTemplate.displayName="SliderInputCustomisedTemplate";try{SliderInputCustomisedTemplate.displayName="SliderInputCustomisedTemplate",SliderInputCustomisedTemplate.__docgenInfo={description:"",displayName:"SliderInputCustomisedTemplate",props:{onChange:{defaultValue:null,description:"Колбек на изменение значения компонента\n(fullStr - строка вместе с префиксом/суффиксом/разделителями,\nshortStr - строка только с числом без символа разделителя тысяч)",name:"onChange",required:!1,type:{name:"((fullStr: string, shortStr: string, event: ChangeEvent<HTMLInputElement>) => void)"}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это положительное число, по умолчанию 1.\nЕсли шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},tickMarks:{defaultValue:null,description:"Массив отметок слайдера",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдер",name:"placeholder",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"Стандартные html-атрибуты, которые будут переданы wrapper-контейнеру компонента",name:"wrapperProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderInput/stories/SliderInputCustomised.template.tsx#SliderInputCustomisedTemplate"]={docgenInfo:SliderInputCustomisedTemplate.__docgenInfo,name:"SliderInputCustomisedTemplate",path:"src/components/input/SliderInput/stories/SliderInputCustomised.template.tsx#SliderInputCustomisedTemplate"})}catch(__react_docgen_typescript_loader_error){}const SliderInputCustomMarkTemplate=({themeBorderKind,CSSCustomProps,...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SliderInput.C,{...props,defaultValue:"15 000",onChange:(full,short,event)=>console.log({full,short,event}),renderTickMark:mark=>mark+" ₽",tickMarks:[5e3,1e4,15e3],maxValue:2e4})});SliderInputCustomMarkTemplate.displayName="SliderInputCustomMarkTemplate";try{SliderInputCustomMarkTemplate.displayName="SliderInputCustomMarkTemplate",SliderInputCustomMarkTemplate.__docgenInfo={description:"",displayName:"SliderInputCustomMarkTemplate",props:{onChange:{defaultValue:null,description:"Колбек на изменение значения компонента\n(fullStr - строка вместе с префиксом/суффиксом/разделителями,\nshortStr - строка только с числом без символа разделителя тысяч)",name:"onChange",required:!1,type:{name:"((fullStr: string, shortStr: string, event: ChangeEvent<HTMLInputElement>) => void)"}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это положительное число, по умолчанию 1.\nЕсли шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision",name:"step",required:!1,type:{name:"number"}},tickMarks:{defaultValue:null,description:"Массив отметок слайдера",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдер",name:"placeholder",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"Стандартные html-атрибуты, которые будут переданы wrapper-контейнеру компонента",name:"wrapperProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderInput/stories/SliderInputCustomMark.template.tsx#SliderInputCustomMarkTemplate"]={docgenInfo:SliderInputCustomMarkTemplate.__docgenInfo,name:"SliderInputCustomMarkTemplate",path:"src/components/input/SliderInput/stories/SliderInputCustomMark.template.tsx#SliderInputCustomMarkTemplate"})}catch(__react_docgen_typescript_loader_error){}const Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"SliderInputstories__Separator",componentId:"sc-dwog6v-0"})(["height:20px;"]),Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"SliderInputstories__Desc",componentId:"sc-dwog6v-1"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["Поле ввода со слайдером позволяет выбирать значение из обозначенного диапазона мышкой. Так же возможен ввод вручную.",(0,jsx_runtime.jsx)(Separator,{}),"Диапазон может быть сплошным либо фиксированным. В диапозон может быть добавлено значение: рубли, доллары и т.п. В таком случае значение подставляется только в поле ввода."]});Description.displayName="Description";const SliderInput_stories={title:"Admiral-2.1/Input/SliderInput",decorators:void 0,component:SliderInput.C,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214"}]},argTypes:{thousand:{control:{type:"text"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}},placeholder:{control:{type:"text"}},precision:{type:"number"},step:{type:"number"},minValue:{type:"number"},maxValue:{type:"number"},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},icons:{control:!1},containerRef:{control:!1},handleInput:{control:!1},tickMarks:{control:!1},wrapperProps:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},ControlledStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SliderInputControlledTemplate,{...props,CSSCustomProps})};ControlledStory.displayName="ControlledStory";const ControlledExample={render:ControlledStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { SliderInput } from '@admiral-ds/react-ui';\nimport type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { ThemeProvider } from 'styled-components';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderInputControlledTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [slider1, setSlider1] = React.useState(String(props.value ?? ''));\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderInput\n        {...props}\n        value={slider1}\n        onChange={(full, short, event) => {\n          console.log({ full, short, event });\n          setSlider1(event.target.value);\n        }}\n      />\n    </ThemeProvider>\n  );\n};\n"}},description:{story:"В качестве значений параметров value и defaultValue в SliderInput необходимо передавать уже\n      отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).\n\nЕсли вы используете \n      контролируемый SliderInput, то в качестве значения value вам досточно указывать event.target.value, где event - это нативное событие \n      инпута, передаваемое к качестве параметра в колбек onChange. Также в колбек onChange передаются параметры fullStr и shortStr, \n      однако в будущем планируется убрать их и оставить только event по аналогии с api стандартного html-инпута.\n\nКроме того, библиотека \n      предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в денежном формате. В качестве параметров \n      данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. \n      Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме \n      цифр, символа decimal и минуса."}},name:"SliderInput. Пример контролируемого инпута."},TickMarksStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SliderInputTickMarksTemplate,{...props,CSSCustomProps})};TickMarksStory.displayName="TickMarksStory";const TickmarksExample={render:TickMarksStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { SliderInput } from '@admiral-ds/react-ui';\nimport type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { ThemeProvider } from 'styled-components';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderInputTickMarksTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderInput\n        {...props}\n        defaultValue=\"15\"\n        onChange={(full, short, event) => console.log({ full, short, event })}\n        tickMarks={[5, 10, 15]}\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"SliderInput. С промежуточными отметками."},CustomStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SliderInputCustomisedTemplate,{...props,CSSCustomProps})};CustomStory.displayName="CustomStory";const CustomExample={render:CustomStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { SliderInput } from '@admiral-ds/react-ui';\nimport type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { ThemeProvider } from 'styled-components';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderInputCustomisedTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderInput\n        {...props}\n        defaultValue=\"5.000\"\n        onChange={(full, short, event) => console.log({ full, short, event })}\n        suffix=\"$\"\n        thousand=\",\"\n        precision={3}\n        placeholder=\"0.000 $\"\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"SliderInput. Пример изменения настроек (suffix, precision, thousand)."},CustomMarkStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SliderInputCustomMarkTemplate,{...props,CSSCustomProps})};CustomMarkStory.displayName="CustomMarkStory";const CustomMarkExample={render:CustomMarkStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { SliderInput } from '@admiral-ds/react-ui';\nimport type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { ThemeProvider } from 'styled-components';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderInputCustomMarkTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderInput\n        {...props}\n        defaultValue=\"15 000\"\n        onChange={(full, short, event) => console.log({ full, short, event })}\n        renderTickMark={(mark: string) => mark + ' ₽'}\n        tickMarks={[5000, 10000, 15000]}\n        maxValue={20000}\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера."};ControlledExample.parameters={...ControlledExample.parameters,docs:{...ControlledExample.parameters?.docs,source:{originalSource:"{\n  render: ControlledStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderInputControlledRaw\n      }\n    },\n    description: {\n      story: `В качестве значений параметров value и defaultValue в SliderInput необходимо передавать уже\n      отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).\\n\\nЕсли вы используете \n      контролируемый SliderInput, то в качестве значения value вам досточно указывать event.target.value, где event - это нативное событие \n      инпута, передаваемое к качестве параметра в колбек onChange. Также в колбек onChange передаются параметры fullStr и shortStr, \n      однако в будущем планируется убрать их и оставить только event по аналогии с api стандартного html-инпута.\\n\\nКроме того, библиотека \n      предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в денежном формате. В качестве параметров \n      данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. \n      Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме \n      цифр, символа decimal и минуса.`\n    }\n  },\n  name: 'SliderInput. Пример контролируемого инпута.'\n}",...ControlledExample.parameters?.docs?.source}}},TickmarksExample.parameters={...TickmarksExample.parameters,docs:{...TickmarksExample.parameters?.docs,source:{originalSource:"{\n  render: TickMarksStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderInputTickMarksRaw\n      }\n    }\n  },\n  name: 'SliderInput. С промежуточными отметками.'\n}",...TickmarksExample.parameters?.docs?.source}}},CustomExample.parameters={...CustomExample.parameters,docs:{...CustomExample.parameters?.docs,source:{originalSource:"{\n  render: CustomStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderInputCustomisedRaw\n      }\n    }\n  },\n  name: 'SliderInput. Пример изменения настроек (suffix, precision, thousand).'\n}",...CustomExample.parameters?.docs?.source}}},CustomMarkExample.parameters={...CustomMarkExample.parameters,docs:{...CustomMarkExample.parameters?.docs,source:{originalSource:"{\n  render: CustomMarkStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderInputCustomMarkRaw\n      }\n    }\n  },\n  name: 'SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.'\n}",...CustomMarkExample.parameters?.docs?.source}}};const __namedExportsOrder=["ControlledExample","TickmarksExample","CustomExample","CustomMarkExample"]}}]);
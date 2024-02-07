"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[332],{"./src/components/ProgressPage/stories/ProgressPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressPageAnimation:()=>ProgressPageAnimation,ProgressPageBase:()=>ProgressPageBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components_browser_esm.cp.div.withConfig({displayName:"ProgressPage__Wrapper",componentId:"sc-vss5as-0"})(["background:",";border-radius:2px;min-width:140px;min-height:4px;display:flex;"],(({theme})=>theme.color["Neutral/Neutral 20"])),Progress=styled_components_browser_esm.cp.div.withConfig({displayName:"ProgressPage__Progress",componentId:"sc-vss5as-1"})(["background:",";width:","%;border-radius:2px;transition:all 0.3s linear;"],(({theme,$appearance})=>"error"===$appearance?theme.color["Error/Error 60 Main"]:theme.color["Primary/Primary 60 Main"]),(({$percent})=>$percent)),Label=styled_components_browser_esm.cp.div.withConfig({displayName:"ProgressPage__Label",componentId:"sc-vss5as-2"})(["display:flex;padding-bottom:8px;font-size:12px;justify-content:space-between;width:100%;line-height:16px;font-style:normal;font-weight:normal;font-family:",";color:",";"],(p=>p.theme.fontFamily),(({theme,$appearance})=>"error"===$appearance?theme.color["Error/Error 60 Main"]:theme.color["Neutral/Neutral 90"])),Container=styled_components_browser_esm.cp.div.withConfig({displayName:"ProgressPage__Container",componentId:"sc-vss5as-3"})([""]),ProgressPage=({percent=0,label,appearance="primary",...props})=>(0,jsx_runtime.jsxs)(Container,{...props,children:[(0,jsx_runtime.jsx)(Label,{$appearance:appearance,children:label}),(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(Progress,{$appearance:appearance,$percent:percent})})]});ProgressPage.displayName="ProgressPage",ProgressPage.displayName="ProgressPage";try{ProgressPage.displayName="ProgressPage",ProgressPage.__docgenInfo={description:"",displayName:"ProgressPage",props:{percent:{defaultValue:{value:"0"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/index.tsx#ProgressPage"]={docgenInfo:ProgressPage.__docgenInfo,name:"ProgressPage",path:"src/components/ProgressPage/index.tsx#ProgressPage"})}catch(__react_docgen_typescript_loader_error){}const ProgressPageBaseTemplate=({percent=50,...props})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressPage,{...props,label:props.label?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{children:props.label})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"error"===props.appearance?"Ошибка загрузки":"Загрузка данных..."}),(0,jsx_runtime.jsxs)("div",{children:[" ",percent,"%"]})]}),percent,role:"alert","aria-live":"assertive"})});try{ProgressPageBaseTemplate.displayName="ProgressPageBaseTemplate",ProgressPageBaseTemplate.__docgenInfo={description:"",displayName:"ProgressPageBaseTemplate",props:{percent:{defaultValue:{value:"50"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/stories/ProgressPageBase.template.tsx#ProgressPageBaseTemplate"]={docgenInfo:ProgressPageBaseTemplate.__docgenInfo,name:"ProgressPageBaseTemplate",path:"src/components/ProgressPage/stories/ProgressPageBase.template.tsx#ProgressPageBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}const ProgressPageAnimationTemplate=props=>{const[tik,setTick]=react.useState(0);return react.useEffect((()=>{const timerId=setTimeout((()=>setTick((prev=>prev+1))),1e3);return tik>=20&&clearTimeout(timerId),()=>{clearTimeout(timerId)}}),[tik]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressPage,{...props,label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"error"===props.appearance?"Ошибка загрузки":"Загрузка данных..."}),(0,jsx_runtime.jsxs)("div",{children:[" ",props.percent||tik,"%"]})]}),percent:props.percent||tik,role:"alert","aria-live":"assertive"})})};try{ProgressPageAnimationTemplate.displayName="ProgressPageAnimationTemplate",ProgressPageAnimationTemplate.__docgenInfo={description:"",displayName:"ProgressPageAnimationTemplate",props:{percent:{defaultValue:null,description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/stories/ProgressPageAnimation.template.tsx#ProgressPageAnimationTemplate"]={docgenInfo:ProgressPageAnimationTemplate.__docgenInfo,name:"ProgressPageAnimationTemplate",path:"src/components/ProgressPage/stories/ProgressPageAnimation.template.tsx#ProgressPageAnimationTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.cp.div.withConfig({displayName:"ProgressPagestories__Desc",componentId:"sc-1wwa3c3-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по ширине, минимальный размер 140px. Компонент имеет два сценария применения: Первый, когда мы, например, загружаем тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки, при этом блокируется содержимое страницы и прогресс отображается оверлеем. Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на странице и отображает прогресс какого-либо процесса, например опроса."});Description.displayName="Description";const ProgressPage_stories={title:"Admiral-2.1/ProgressPage",decorators:void 0,component:ProgressPage,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25008"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25036"}]},args:{appearance:"primary"},argTypes:{appearance:{options:["primary","error"],control:{type:"radio"}},label:{control:{type:"text"}},percent:{control:{type:"number"}}}},ProgressPageBaseStory=props=>(0,jsx_runtime.jsx)(ProgressPageBaseTemplate,{...props});ProgressPageBaseStory.displayName="ProgressPageBaseStory";const ProgressPageBase={render:ProgressPageBaseStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { ProgressPage } from '@admiral-ds/react-ui';\nimport type { ProgressPageProps } from '@admiral-ds/react-ui';\n\nexport const ProgressPageBaseTemplate = ({ percent = 50, ...props }: ProgressPageProps) => {\n  return (\n    <>\n      <ProgressPage\n        {...props}\n        label={\n          props.label ? (\n            <>\n              <div>{props.label}</div>\n            </>\n          ) : (\n            <>\n              <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>\n              <div> {percent}%</div>\n            </>\n          )\n        }\n        percent={percent}\n        role=\"alert\"\n        aria-live=\"assertive\"\n      />\n    </>\n  );\n};\n"}}},name:"Базовый пример"},ProgressPageAnimationStory=props=>(0,jsx_runtime.jsx)(ProgressPageAnimationTemplate,{...props});ProgressPageAnimationStory.displayName="ProgressPageAnimationStory";const ProgressPageAnimation={render:ProgressPageAnimationStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { ProgressPage } from '@admiral-ds/react-ui';\nimport type { ProgressPageProps } from '@admiral-ds/react-ui';\n\nexport const ProgressPageAnimationTemplate = (props: ProgressPageProps) => {\n  const [tik, setTick] = React.useState(0);\n\n  React.useEffect(() => {\n    const counter = () => setTick((prev) => prev + 1);\n    const timerId = setTimeout(counter, 1000);\n    if (tik >= 20) {\n      clearTimeout(timerId);\n    }\n    return () => {\n      clearTimeout(timerId);\n    };\n  }, [tik]);\n\n  return (\n    <>\n      <ProgressPage\n        {...props}\n        label={\n          <>\n            <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>\n            <div> {props.percent || tik}%</div>\n          </>\n        }\n        percent={props.percent || tik}\n        role=\"alert\"\n        aria-live=\"assertive\"\n      />\n    </>\n  );\n};\n"}}},name:"Прогресс бар с анимацией"};ProgressPageBase.parameters={...ProgressPageBase.parameters,docs:{...ProgressPageBase.parameters?.docs,source:{originalSource:"{\n  render: ProgressPageBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressPageBaseRaw\n      }\n    }\n  },\n  name: 'Базовый пример'\n}",...ProgressPageBase.parameters?.docs?.source}}},ProgressPageAnimation.parameters={...ProgressPageAnimation.parameters,docs:{...ProgressPageAnimation.parameters?.docs,source:{originalSource:"{\n  render: ProgressPageAnimationStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressPageAnimationRaw\n      }\n    }\n  },\n  name: 'Прогресс бар с анимацией'\n}",...ProgressPageAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["ProgressPageBase","ProgressPageAnimation"]}}]);
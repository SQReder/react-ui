"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[500],{"./src/components/FloatingButton/stories/FloatingButtonMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FloatingButtonMenuExample:()=>FloatingButtonMenuExample,FloatingButtonMenuModesExample:()=>FloatingButtonMenuModesExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FloatingButtonMenu_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FloatingButton=__webpack_require__("./src/components/FloatingButton/index.tsx"),CloseOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),style=__webpack_require__("./src/components/FloatingButton/style.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FloatingButtonMenu=({icon,isOpen:propIsOpen,onOpenChange,appearance="primary",dimension="m",mobile=!1,disabled=!1,type="button",containerClassName,containerStyle,containerCssMixin,children,...props})=>{const[open,setOpen]=(0,react.useState)(!1),isOpen=propIsOpen??open,hasTransitionedIn=((isMounted,unmountDelay)=>{const[hasTransitionedIn,setHasTransitionedIn]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{let timeoutId;return isMounted&&!hasTransitionedIn?setHasTransitionedIn(!0):!isMounted&&hasTransitionedIn&&(timeoutId=window.setTimeout((()=>setHasTransitionedIn(!1)),unmountDelay)),()=>{window.clearTimeout(timeoutId)}}),[unmountDelay,isMounted,hasTransitionedIn]),hasTransitionedIn})(isOpen,style.xt),floatButtonGroupRef=(0,react.useRef)(null),floatButtonRef=(0,react.useRef)(null),onClick=e=>{floatButtonGroupRef.current?.contains(e.target)?floatButtonRef.current?.contains(e.target)&&setOpen((prevState=>(onOpenChange?.(!prevState),!prevState))):null!=floatButtonGroupRef.current?.querySelector(".floating_button_menu")&&(setOpen(!1),onOpenChange?.(!1))};return(0,react.useEffect)((()=>(document.addEventListener("click",onClick),()=>{document.removeEventListener("click",onClick)})),[]),(0,jsx_runtime.jsxs)(style.th,{ref:floatButtonGroupRef,$dimension:dimension,$mobile:mobile,$dropContainerCssMixin:containerCssMixin,className:containerClassName,style:containerStyle,children:[(isOpen||hasTransitionedIn)&&!disabled&&(0,jsx_runtime.jsx)(style.xq,{className:"floating_button_menu","data-dimension":dimension,"data-visible":isOpen&&hasTransitionedIn,children}),(0,jsx_runtime.jsx)(FloatingButton.r,{ref:floatButtonRef,appearance,dimension,type,disabled,...props,children:isOpen?(0,jsx_runtime.jsx)(CloseOutline.h,{}):icon})]})};FloatingButtonMenu.displayName="FloatingButtonMenu",FloatingButtonMenu.displayName="FloatingButtonMenu";try{FloatingButtonMenu.displayName="FloatingButtonMenu",FloatingButtonMenu.__docgenInfo={description:"",displayName:"FloatingButtonMenu",props:{icon:{defaultValue:null,description:"Иконка для размещения в основной кнопке",name:"icon",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Состояние видимости меню",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Обработчик события на изменение видимости меню",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},containerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для контейнера компонента, созданный с помощью styled css",name:"containerCssMixin",required:!1,type:{name:"RuleSet<object>"}},containerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер компонента",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер компонента",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},badge:{defaultValue:null,description:"Использование компонента вместе с Badge, где параметр badge - это объект с настройками для отображения бейджа",name:"badge",required:!1,type:{name:"BadgeProps"}},tooltip:{defaultValue:null,description:"Текст тултипа. Если параметр tooltip не задан, то тултип не отображается",name:"tooltip",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/FloatingButtonMenu.tsx#FloatingButtonMenu"]={docgenInfo:FloatingButtonMenu.__docgenInfo,name:"FloatingButtonMenu",path:"src/components/FloatingButton/FloatingButtonMenu.tsx#FloatingButtonMenu"})}catch(__react_docgen_typescript_loader_error){}var EmailOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/EmailOutline.svg"),DeleteOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg"),PrintOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PrintOutline.svg");const Layout=styled_components_browser_esm.Ay.div.withConfig({displayName:"FloatingButtonMenutemplate__Layout",componentId:"sc-7rpas1-0"})(["width:100%;height:100px;"]),FloatingButtonMenuTemplate=({icon,...props})=>(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(FloatingButtonMenu,{icon:icon??(0,jsx_runtime.jsx)(EmailOutline.h,{}),onOpenChange:isOpen=>console.log(isOpen?"Open menu":"Close menu"),...props,children:[(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})}),(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(PrintOutline.h,{})})]})});FloatingButtonMenuTemplate.displayName="FloatingButtonMenuTemplate";try{FloatingButtonMenuTemplate.displayName="FloatingButtonMenuTemplate",FloatingButtonMenuTemplate.__docgenInfo={description:"",displayName:"FloatingButtonMenuTemplate",props:{icon:{defaultValue:null,description:"Иконка для размещения в основной кнопке",name:"icon",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Состояние видимости меню",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Обработчик события на изменение видимости меню",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},containerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для контейнера компонента, созданный с помощью styled css",name:"containerCssMixin",required:!1,type:{name:"RuleSet<object>"}},containerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер компонента",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер компонента",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},badge:{defaultValue:null,description:"Использование компонента вместе с Badge, где параметр badge - это объект с настройками для отображения бейджа",name:"badge",required:!1,type:{name:"BadgeProps"}},tooltip:{defaultValue:null,description:"Текст тултипа. Если параметр tooltip не задан, то тултип не отображается",name:"tooltip",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/stories/FloatingButtonMenu.template.tsx#FloatingButtonMenuTemplate"]={docgenInfo:FloatingButtonMenuTemplate.__docgenInfo,name:"FloatingButtonMenuTemplate",path:"src/components/FloatingButton/stories/FloatingButtonMenu.template.tsx#FloatingButtonMenuTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),Toggle=__webpack_require__("./src/components/Toggle/index.tsx");const FloatingButtonMenuModes_template_Layout=styled_components_browser_esm.Ay.div.withConfig({displayName:"FloatingButtonMenuModestemplate__Layout",componentId:"sc-1ii1bqd-0"})(["display:flex;justify-content:space-between;height:200px;"]),FloatingButtonMenuModesTemplate=({icon,...props})=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(FloatingButtonMenuModes_template_Layout,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Short",as:"div",style:{marginBottom:"16px",fontStyle:"italic"},children:"Контролируемый режим"}),(0,jsx_runtime.jsx)(Toggle.l,{onChange:event=>{setOpen(event.currentTarget.checked)},children:"Открыть/закрыть меню"})]}),(0,jsx_runtime.jsxs)(FloatingButtonMenu,{icon:icon??(0,jsx_runtime.jsx)(EmailOutline.h,{}),isOpen:open,onOpenChange:isOpen=>console.log(isOpen?"Open menu1":"Close menu1"),containerStyle:{left:props.mobile?"16px":"28px"},...props,children:[(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})}),(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(PrintOutline.h,{})})]}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Short",as:"div",style:{fontStyle:"italic"},children:"Неконтролируемый режим"}),(0,jsx_runtime.jsxs)(FloatingButtonMenu,{icon:icon??(0,jsx_runtime.jsx)(EmailOutline.h,{}),onOpenChange:isOpen=>console.log(isOpen?"Open menu2":"Close menu2"),...props,children:[(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})}),(0,jsx_runtime.jsx)(FloatingButton.r,{appearance:"secondary",children:(0,jsx_runtime.jsx)(PrintOutline.h,{})})]})]})};FloatingButtonMenuModesTemplate.displayName="FloatingButtonMenuModesTemplate";try{FloatingButtonMenuModesTemplate.displayName="FloatingButtonMenuModesTemplate",FloatingButtonMenuModesTemplate.__docgenInfo={description:"",displayName:"FloatingButtonMenuModesTemplate",props:{icon:{defaultValue:null,description:"Иконка для размещения в основной кнопке",name:"icon",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Состояние видимости меню",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Обработчик события на изменение видимости меню",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},containerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для контейнера компонента, созданный с помощью styled css",name:"containerCssMixin",required:!1,type:{name:"RuleSet<object>"}},containerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер компонента",name:"containerClassName",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер компонента",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},badge:{defaultValue:null,description:"Использование компонента вместе с Badge, где параметр badge - это объект с настройками для отображения бейджа",name:"badge",required:!1,type:{name:"BadgeProps"}},tooltip:{defaultValue:null,description:"Текст тултипа. Если параметр tooltip не задан, то тултип не отображается",name:"tooltip",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/stories/FloatingButtonMenuModes.template.tsx#FloatingButtonMenuModesTemplate"]={docgenInfo:FloatingButtonMenuModesTemplate.__docgenInfo,name:"FloatingButtonMenuModesTemplate",path:"src/components/FloatingButton/stories/FloatingButtonMenuModes.template.tsx#FloatingButtonMenuModesTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"FloatingButtonMenustories__Desc",componentId:"sc-1rgg14t-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"Компонент FloatingButtonMenu позволяет вызывать меню с дополнительными действиями (кнопками) путём нажатия на основную кнопку. Тип дополнительных кнопок всегда Secondary. Основная кнопка может быть как Primary, так и Secondary. Рекомендуется не более 5 дополнительных кнопок."});Description.displayName="Description";const FloatingButtonMenu_stories={title:"Admiral-2.1/FloatingButton/FloatingButtonMenu",decorators:void 0,component:FloatingButtonMenu,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=191233-164632&mode=design&t=aOVIJbOXBwclj7Gu-4"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=209967-6837&mode=design&t=aOVIJbOXBwclj7Gu-4"}]},argTypes:{isOpen:{control:{type:"boolean"}},dimension:{options:["xl","m"],control:{type:"radio"}},appearance:{options:["primary","secondary"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},mobile:{control:{type:"boolean"}},tooltip:{control:{type:"text"}},tooltipPosition:{options:["bottom","top","left","right"],control:{type:"radio"}}}},FloatingButtonMenuStory=props=>(0,jsx_runtime.jsx)(FloatingButtonMenuTemplate,{...props});FloatingButtonMenuStory.displayName="FloatingButtonMenuStory";const FloatingButtonMenuExample={render:FloatingButtonMenuStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { FloatingButton, FloatingButtonMenu } from '@admiral-ds/react-ui';\nimport type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';\nimport styled from 'styled-components';\n\nimport { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';\nimport { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';\nimport { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';\n\nconst Layout = styled.div`\n  width: 100%;\n  height: 100px;\n`;\n\nexport const FloatingButtonMenuTemplate = ({ icon, ...props }: FloatingButtonMenuProps) => {\n  return (\n    <Layout>\n      <FloatingButtonMenu\n        icon={icon ?? <EmailOutline />}\n        onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu' : 'Close menu')}\n        {...props}\n      >\n        <FloatingButton appearance=\"secondary\">\n          <DeleteOutline />\n        </FloatingButton>\n        <FloatingButton appearance=\"secondary\">\n          <PrintOutline />\n        </FloatingButton>\n      </FloatingButtonMenu>\n    </Layout>\n  );\n};\n"}}},name:"Playground"},FloatingButtonMenuModesStory=props=>(0,jsx_runtime.jsx)(FloatingButtonMenuModesTemplate,{...props});FloatingButtonMenuModesStory.displayName="FloatingButtonMenuModesStory";const FloatingButtonMenuModesExample={render:FloatingButtonMenuModesStory,parameters:{docs:{source:{code:"import { useState } from 'react';\nimport type { ChangeEvent } from 'react';\nimport styled from 'styled-components';\nimport { FloatingButton, FloatingButtonMenu, Toggle, T } from '@admiral-ds/react-ui';\nimport type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';\n\nimport { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';\nimport { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';\nimport { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';\n\nconst Layout = styled.div`\n  display: flex;\n  justify-content: space-between;\n  height: 200px;\n`;\n\nexport const FloatingButtonMenuModesTemplate = ({ icon, ...props }: FloatingButtonMenuProps) => {\n  const [open, setOpen] = useState(false);\n\n  const onChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setOpen(event.currentTarget.checked);\n  };\n\n  return (\n    <Layout>\n      <div>\n        <T font=\"Body/Body 1 Short\" as=\"div\" style={{ marginBottom: '16px', fontStyle: 'italic' }}>\n          Контролируемый режим\n        </T>\n        <Toggle onChange={onChange}>Открыть/закрыть меню</Toggle>\n      </div>\n      <FloatingButtonMenu\n        icon={icon ?? <EmailOutline />}\n        isOpen={open}\n        onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu1' : 'Close menu1')}\n        containerStyle={{ left: props.mobile ? '16px' : '28px' }}\n        {...props}\n      >\n        <FloatingButton appearance=\"secondary\">\n          <DeleteOutline />\n        </FloatingButton>\n        <FloatingButton appearance=\"secondary\">\n          <PrintOutline />\n        </FloatingButton>\n      </FloatingButtonMenu>\n      <T font=\"Body/Body 1 Short\" as=\"div\" style={{ fontStyle: 'italic' }}>\n        Неконтролируемый режим\n      </T>\n      <FloatingButtonMenu\n        icon={icon ?? <EmailOutline />}\n        onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu2' : 'Close menu2')}\n        {...props}\n      >\n        <FloatingButton appearance=\"secondary\">\n          <DeleteOutline />\n        </FloatingButton>\n        <FloatingButton appearance=\"secondary\">\n          <PrintOutline />\n        </FloatingButton>\n      </FloatingButtonMenu>\n    </Layout>\n  );\n};\n"},description:{story:"Компонент FloatingButtonMenu может использоваться как в контролируемом, так и в некотролируемом режиме. \n        У компонента есть параметр isOpen, с помощью которого можно управлять видимостью меню. Также существует колбек\n        onOpenChange, который срабатывает при каждом нажатии на основную кнопку и при клике вне группы кнопок. \n        При закрытом меню основная кнопка может содержать любую иконку, при открытии меню иконка меняется на иконку\n        «Close»."}}},name:"FloatingButtonMenu. Режимы использования"};FloatingButtonMenuExample.parameters={...FloatingButtonMenuExample.parameters,docs:{...FloatingButtonMenuExample.parameters?.docs,source:{originalSource:"{\n  render: FloatingButtonMenuStory,\n  parameters: {\n    docs: {\n      source: {\n        code: FloatingButtonMenuRaw\n      }\n    }\n  },\n  name: 'Playground'\n}",...FloatingButtonMenuExample.parameters?.docs?.source}}},FloatingButtonMenuModesExample.parameters={...FloatingButtonMenuModesExample.parameters,docs:{...FloatingButtonMenuModesExample.parameters?.docs,source:{originalSource:"{\n  render: FloatingButtonMenuModesStory,\n  parameters: {\n    docs: {\n      source: {\n        code: FloatingButtonMenuModesRaw\n      },\n      description: {\n        story: `Компонент FloatingButtonMenu может использоваться как в контролируемом, так и в некотролируемом режиме. \n        У компонента есть параметр isOpen, с помощью которого можно управлять видимостью меню. Также существует колбек\n        onOpenChange, который срабатывает при каждом нажатии на основную кнопку и при клике вне группы кнопок. \n        При закрытом меню основная кнопка может содержать любую иконку, при открытии меню иконка меняется на иконку\n        «Close».`\n      }\n    }\n  },\n  name: 'FloatingButtonMenu. Режимы использования'\n}",...FloatingButtonMenuModesExample.parameters?.docs?.source}}};const __namedExportsOrder=["FloatingButtonMenuExample","FloatingButtonMenuModesExample"]},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgDeleteOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgDeleteOutline=function SvgDeleteOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12.65 2.66c0-.35-.3-.65-.65-.65-.36 0-.65.3-.65.65v1.99H4.33c-.36 0-.65.29-.65.65 0 .35.29.65.65.65h.69l.76 11.49c.1 1.58 1.4 2.81 2.99 2.81h6.36c1.57 0 2.9-1.23 2.99-2.81l.77-11.49h.79c.35 0 .65-.3.65-.65 0-.36-.3-.65-.65-.65h-7.03zM7.08 17.35l-.71-11.4h11.17l-.7 11.41c-.06.89-.8 1.59-1.7 1.59H8.78c-.9 0-1.64-.7-1.7-1.6m3.1-8.88c.35 0 .65.29.65.65v6.35c0 .35-.3.65-.65.65-.36 0-.65-.3-.65-.65V9.12c0-.36.29-.65.65-.65m4.3.65c0-.36-.3-.65-.65-.65-.36 0-.65.29-.65.65v6.35c0 .35.29.65.65.65.35 0 .65-.3.65-.65z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/PrintOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgPrintOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgPrintOutline=function SvgPrintOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M8.79 3c-1.07 0-1.94.87-1.94 1.95v1.1c0 .36.29.65.65.65.35 0 .64-.29.64-.65v-1.1c0-.36.3-.65.65-.65h6.41c.35 0 .65.29.65.65v1.1c0 .36.29.65.65.65.35 0 .64-.29.64-.65v-1.1c0-1.08-.87-1.95-1.94-1.95zm6.91 18c.71 0 1.3-.59 1.3-1.3V18h1c1.65 0 3-1.35 3-3v-4a3.01 3.01 0 0 0-3-3.01H6c-1.66 0-3 1.35-3 3.01v4c0 1.65 1.34 3 3 3h1v1.7c0 .71.58 1.3 1.29 1.3zm2.3-4.3h-1v-3c0-.39-.32-.7-.71-.7H7.7c-.39 0-.7.31-.7.7v3H6c-.94 0-1.71-.77-1.71-1.7v-4c0-.94.77-1.71 1.71-1.71h12c.93 0 1.7.77 1.7 1.71v4c0 .93-.77 1.7-1.7 1.7m.69-5.22c0 .55-.45 1-1 1s-1-.45-1-1c0-.56.45-1 1-1s1 .44 1 1M8.29 19.7h7.41v-5.4H8.29z"})))};__webpack_require__.p},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(val){return null!==val&&!Array.isArray(val)&&"object"==typeof val}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});const codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(let j=0;j<26;j+=1){let n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}const keyboardKey={codes,getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey(eventOrCode){const isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;let name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[eventOrCode.shiftKey?1:0]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey[0],keyboardKey.Digit1=keyboardKey[1],keyboardKey.Digit2=keyboardKey[2],keyboardKey.Digit3=keyboardKey[3],keyboardKey.Digit4=keyboardKey[4],keyboardKey.Digit5=keyboardKey[5],keyboardKey.Digit6=keyboardKey[6],keyboardKey.Digit7=keyboardKey[7],keyboardKey.Digit8=keyboardKey[8],keyboardKey.Digit9=keyboardKey[9],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/Toggle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toggle});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");const sizes=(0,styled_components_browser_esm.AH)(["width:",";height:",";"],(({$dimension})=>"s"===$dimension?"28px":"36px"),(({$dimension})=>"s"===$dimension?"16px":"20px")),sliderSizes=(0,styled_components_browser_esm.AH)(["width:",";height:",";border-radius:",";"],(({$dimension})=>"s"===$dimension?"12px":"16px"),(({$dimension})=>"s"===$dimension?"12px":"16px"),(({$dimension})=>"s"===$dimension?"12px":"16px")),hoverSizes=(0,styled_components_browser_esm.AH)(["width:",";height:",";border-radius:",";"],(({$dimension})=>"s"===$dimension?"32px":"36px"),(({$dimension})=>"s"===$dimension?"32px":"36px"),(({$dimension})=>"s"===$dimension?"32px":"36px"));var keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const hoverInputStyles=(0,styled_components_browser_esm.AH)(["& + div > div{","}"],(({$dimension})=>`left: calc(${"m"===$dimension?"16px":"12px"} + -12px + 4px);`)),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"Toggle__Input",componentId:"sc-1lr8rab-0"})(["position:absolute;cursor:",";top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;&:disabled{cursor:not-allowed;}&:checked{& + div > span{&:before{","}background:",";}&:disabled + div > span{background:var(--admiral-color-Primary_Primary30,",");}",";}&:not(:disabled){&:focus-visible + div > span{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}&:hover{& + div > div{",";}&:focus-visible + div > span{outline:none;}}&:active{& + div > div{",";background:var(--admiral-color-Opacity_Press,",");}}}"],(({readOnly})=>readOnly?"default":"pointer"),(({$dimension})=>`left: calc(${"m"===$dimension?"16px":"12px"} + 2px);`),(({theme,readOnly})=>readOnly?`var(--admiral-color-Primary_Primary30, ${theme.color["Primary/Primary 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`),(p=>p.theme.color["Primary/Primary 30"]),hoverInputStyles,(p=>p.theme.color["Primary/Primary 60 Main"]),(({readOnly})=>!readOnly&&"visibility: visible"),(({readOnly})=>!readOnly&&"visibility: visible"),(p=>p.theme.color["Opacity/Press"])),Label=styled_components_browser_esm.Ay.div.withConfig({displayName:"Toggle__Label",componentId:"sc-1lr8rab-1"})(["display:flex;flex-direction:column;"," "," color:",";"],(({$position})=>"right"===$position?"margin-left: 8px;":"margin-right: 8px;"),(({$dimension})=>"s"===$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(({disabled,theme})=>disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${theme.color["Neutral/Neutral 90"]})`)),Hint=styled_components_browser_esm.Ay.div.withConfig({displayName:"Toggle__Hint",componentId:"sc-1lr8rab-2"})(["margin-top:4px;"," color:",";"],(({$dimension})=>"s"===$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(({theme,disabled})=>disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`)),Slider=styled_components_browser_esm.Ay.span.withConfig({displayName:"Toggle__Slider",componentId:"sc-1lr8rab-3"})(["position:absolute;border-radius:",";flex-shrink:0;"," &:before{content:'';position:absolute;top:","px;left:","px;background:var(--admiral-color-Special_StaticWhite,",");transition:all 0.3s;","}background:",";"],"10px",sizes,2,2,(p=>p.theme.color["Special/Static White"]),sliderSizes,(({theme,$faded})=>$faded?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`)),Hover=styled_components_browser_esm.Ay.div.withConfig({displayName:"Toggle__Hover",componentId:"sc-1lr8rab-4"})(["visibility:hidden;pointer-events:none;position:absolute;top:",";left:",";background:var(--admiral-color-Opacity_Hover,",");",""],"-8px","-8px",(p=>p.theme.color["Opacity/Hover"]),hoverSizes),SliderWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"Toggle__SliderWrapper",componentId:"sc-1lr8rab-5"})(["pointer-events:none;position:relative;flex-shrink:0;",""],sizes),Wrapper=styled_components_browser_esm.Ay.label.withConfig({displayName:"Toggle__Wrapper",componentId:"sc-1lr8rab-6"})(["display:flex;flex-direction:",";align-items:flex-start;justify-content:space-between;position:relative;width:",";cursor:",";-webkit-tap-highlight-color:transparent;user-select:none;",";"],(({$labelPosition})=>"right"===$labelPosition?"row":"row-reverse"),(({width})=>width?"number"==typeof width?`${width}px`:width:"fit-content"),(({disabled,readOnly})=>disabled?"not-allowed":readOnly?"default":"pointer"),(({readOnly})=>readOnly&&"pointer-events: none")),Toggle=(0,react.forwardRef)((({dimension="m",labelPosition="right",disabled=!1,readOnly=!1,width,extraText,className,children,...props},ref)=>(0,jsx_runtime.jsxs)(Wrapper,{className,width:"left"===labelPosition?width:void 0,$labelPosition:labelPosition,disabled,readOnly,role:"switch","aria-checked":props.checked||props["aria-checked"],children:[(0,jsx_runtime.jsx)(Input,{ref,type:"checkbox",$dimension:dimension,disabled,readOnly,...props,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)}}),(0,jsx_runtime.jsxs)(SliderWrapper,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(Hover,{$dimension:dimension}),(0,jsx_runtime.jsx)(Slider,{$dimension:dimension,$faded:disabled||readOnly,"aria-hidden":!0})]}),children&&(0,jsx_runtime.jsxs)(Label,{$dimension:dimension,disabled,$position:labelPosition,children:[children,extraText&&(0,jsx_runtime.jsx)(Hint,{$dimension:dimension,disabled,children:extraText})]})]})));Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{labelPosition:{defaultValue:{value:"right"},description:"Расположение подписи",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Ширина компонента. Применяется только в случае labelPosition == 'left'.\nРекомендуется использовать в мобильной версии компонента, указывая ширину равную всему экрану",name:"width",required:!1,type:{name:"string | number"}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/index.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/index.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}}}]);
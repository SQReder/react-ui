"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4375],{"./src/components/StatusIndicator/stories/StatusIndicator.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StatusIndicatorDimension:()=>StatusIndicatorDimension,StatusIndicatorPlayground:()=>StatusIndicatorPlayground,StatusIndicatorPosition:()=>StatusIndicatorPosition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StatusIndicator_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Typography/typography.ts")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=styled_components_browser_esm.Ay.span.withConfig({displayName:"StatusIndicator__Text",componentId:"sc-11drwr0-0"})([""]),Circle=styled_components_browser_esm.Ay.div.withConfig({displayName:"StatusIndicator__Circle",componentId:"sc-11drwr0-1"})([""]),cssDefault=(0,styled_components_browser_esm.AH)(["> ","{color:var(--admiral-color-Neutral_Neutral90,",");}> ","{svg{path{fill:var(--admiral-color-Neutral_Neutral50,",");}}}"],Text,(p=>p.theme.color["Neutral/Neutral 90"]),Circle,(p=>p.theme.color["Neutral/Neutral 50"])),StatusContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"StatusIndicator__StatusContainer",componentId:"sc-11drwr0-2"})(["display:inline-flex;align-items:center;flex-direction:",";height:",";"," > ","{width:",";height:",";margin:",";}",""],(p=>p.$displayRight?"row":"row-reverse"),(p=>"m"===p.$dimension?"24px":"20px"),(p=>"m"===p.$dimension?typography.Il["Body/Body 1 Long"]:typography.Il["Body/Body 2 Long"]),Circle,(p=>"m"===p.$dimension?"20px":"16px"),(p=>"m"===p.$dimension?"20px":"16px"),(p=>p.$displayRight?"0 10px 0 0":"0 0 0 10px"),(p=>p.$cssMixin||cssDefault)),StatusIndicator=({dimension="m",displayRight=!0,icon,cssMixin,text})=>(0,jsx_runtime.jsxs)(StatusContainer,{$dimension:dimension,$displayRight:displayRight,$cssMixin:cssMixin,children:[icon&&(0,jsx_runtime.jsx)(Circle,{children:icon}),(0,jsx_runtime.jsx)(Text,{children:text})]});StatusIndicator.displayName="StatusIndicator",StatusIndicator.displayName="StatusIndicator";try{StatusIndicator.displayName="StatusIndicator",StatusIndicator.__docgenInfo={description:"",displayName:"StatusIndicator",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять миксин, созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},icon:{defaultValue:null,description:"Иконка индикатора статуса",name:"icon",required:!1,type:{name:"ReactNode"}},displayRight:{defaultValue:{value:"true"},description:"Позиционирование иконки статуса. По умолчанию - слева",name:"displayRight",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Текст статуса",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StatusIndicator/index.tsx#StatusIndicator"]={docgenInfo:StatusIndicator.__docgenInfo,name:"StatusIndicator",path:"src/components/StatusIndicator/index.tsx#StatusIndicator"})}catch(__react_docgen_typescript_loader_error){}var CheckOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckOutline.svg");const StatusIndicatorPlaygroundTemplate=({text="P 16px/24 book",...props})=>(0,jsx_runtime.jsx)(StatusIndicator,{...props,text,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{})});StatusIndicatorPlaygroundTemplate.displayName="StatusIndicatorPlaygroundTemplate";try{StatusIndicatorPlaygroundTemplate.displayName="StatusIndicatorPlaygroundTemplate",StatusIndicatorPlaygroundTemplate.__docgenInfo={description:"",displayName:"StatusIndicatorPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять миксин, созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},icon:{defaultValue:null,description:"Иконка индикатора статуса",name:"icon",required:!1,type:{name:"ReactNode"}},displayRight:{defaultValue:null,description:"Позиционирование иконки статуса. По умолчанию - слева",name:"displayRight",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"P 16px/24 book"},description:"Текст статуса",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StatusIndicator/stories/StatusIndicatorPlayground.template.tsx#StatusIndicatorPlaygroundTemplate"]={docgenInfo:StatusIndicatorPlaygroundTemplate.__docgenInfo,name:"StatusIndicatorPlaygroundTemplate",path:"src/components/StatusIndicator/stories/StatusIndicatorPlayground.template.tsx#StatusIndicatorPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg");const StyledText=(0,styled_components_browser_esm.Ay)(T.T).withConfig({displayName:"StatusIndicatorDimensiontemplate__StyledText",componentId:"sc-1jaz8r7-0"})(["margin:10px 0;"]),StatusIndicatorDimensionTemplate=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledText,{font:"Body/Body 1 Long",forwardedAs:"div",children:"Dimension - M"}),(0,jsx_runtime.jsx)(StatusIndicator,{dimension:"m",text:"P 16px/24 book",icon:(0,jsx_runtime.jsx)(CheckOutline.h,{})}),(0,jsx_runtime.jsx)(StyledText,{font:"Body/Body 1 Long",forwardedAs:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(StatusIndicator,{dimension:"s",text:"P 14px/20 book",icon:(0,jsx_runtime.jsx)(InfoSolid.h,{})})]});var ErrorSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg");const StatusIndicatorPosition_template_StyledText=(0,styled_components_browser_esm.Ay)(T.T).withConfig({displayName:"StatusIndicatorPositiontemplate__StyledText",componentId:"sc-1vj569h-0"})(["margin:10px 0;"]),OrangeColor=(0,styled_components_browser_esm.AH)(["color:var(--admiral-color-Warning_Warning50Main,",");> div{svg{path{fill:var(--admiral-color-Warning_Warning50Main,",");}}}"],(p=>p.theme.color["Warning/Warning 50 Main"]),(p=>p.theme.color["Warning/Warning 50 Main"])),StatusIndicatorPositionTemplate=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StatusIndicatorPosition_template_StyledText,{font:"Body/Body 1 Long",forwardedAs:"div",children:"Кастомное цветовое отображение статуса"}),(0,jsx_runtime.jsx)(StatusIndicator,{cssMixin:OrangeColor,dimension:"m",text:"P 16px/24 book",icon:(0,jsx_runtime.jsx)(InfoSolid.h,{})}),(0,jsx_runtime.jsx)(StatusIndicatorPosition_template_StyledText,{font:"Body/Body 1 Long",forwardedAs:"div",children:"Позиционирование иконки индикатора справа"}),(0,jsx_runtime.jsx)(StatusIndicator,{dimension:"m",text:"P 16px/24 book",displayRight:!1,icon:(0,jsx_runtime.jsx)(ErrorSolid.h,{})}),(0,jsx_runtime.jsx)(StatusIndicatorPosition_template_StyledText,{font:"Body/Body 1 Long",forwardedAs:"div",children:"Без иконки"}),(0,jsx_runtime.jsx)(StatusIndicator,{dimension:"m",text:"P 16px/24 book"})]}),Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"StatusIndicatorstories__Desc",componentId:"sc-1akcdbr-0"})(["font-family:'VTB Group UI',serif;font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"Компонент Status Indicator используется для отображения состояния объекта или действия."});Description.displayName="Description";const StatusIndicator_stories={title:"Admiral-2.1/StatusIndicator",decorators:void 0,component:StatusIndicator,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18744"}},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},text:{control:{type:"text"}},displayRight:{control:{type:"boolean"}},cssMixin:{control:!1},icon:{control:!1}}},StatusIndicatorPlaygroundStory=props=>(0,jsx_runtime.jsx)(StatusIndicatorPlaygroundTemplate,{...props});StatusIndicatorPlaygroundStory.displayName="StatusIndicatorPlaygroundStory";const StatusIndicatorPlayground={render:StatusIndicatorPlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { StatusIndicator } from '@admiral-ds/react-ui';\nimport type { StatusIndicatorProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';\n\nexport const StatusIndicatorPlaygroundTemplate = ({ text = 'P 16px/24 book', ...props }: StatusIndicatorProps) => {\n  return <StatusIndicator {...props} text={text} icon={<CheckOutline />} />;\n};\n"}}}},StatusIndicatorDimensionStory=()=>(0,jsx_runtime.jsx)(StatusIndicatorDimensionTemplate,{});StatusIndicatorDimensionStory.displayName="StatusIndicatorDimensionStory";const StatusIndicatorDimension={render:StatusIndicatorDimensionStory,name:"Status Indicator. Размеры компонента",parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled from \'styled-components\';\n\nimport { StatusIndicator, T } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as CheckOutline } from \'@admiral-ds/icons/build/service/CheckOutline.svg\';\nimport { ReactComponent as InfoSolid } from \'@admiral-ds/icons/build/service/InfoSolid.svg\';\n\nconst StyledText = styled(T)`\n  margin: 10px 0;\n`;\n\nexport const StatusIndicatorDimensionTemplate = () => {\n  return (\n    <>\n      <StyledText font="Body/Body 1 Long" forwardedAs="div">\n        Dimension - M\n      </StyledText>\n      <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />\n      <StyledText font="Body/Body 1 Long" forwardedAs="div">\n        Dimension - S\n      </StyledText>\n      <StatusIndicator dimension="s" text="P 14px/20 book" icon={<InfoSolid />} />\n    </>\n  );\n};\n'},description:{story:"Компонент регулируется только по высоте и представлен в размерах M (24px) и S (20px), ширина подстраивается под контент."}}}},StatusIndicatorPositionStory=()=>(0,jsx_runtime.jsx)(StatusIndicatorPositionTemplate,{});StatusIndicatorPositionStory.displayName="StatusIndicatorPositionStory";const StatusIndicatorPosition={render:StatusIndicatorPositionStory,name:"Status Indicator. Альтернативные варианты отображения",parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled, { css } from \'styled-components\';\n\nimport { StatusIndicator, T } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as InfoSolid } from \'@admiral-ds/icons/build/service/InfoSolid.svg\';\nimport { ReactComponent as ErrorSolid } from \'@admiral-ds/icons/build/service/ErrorSolid.svg\';\n\nconst StyledText = styled(T)`\n  margin: 10px 0;\n`;\n\nconst OrangeColor = css`\n  color: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color[\'Warning/Warning 50 Main\']});\n  > div {\n    svg {\n      path {\n        fill: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color[\'Warning/Warning 50 Main\']});\n      }\n    }\n  }\n`;\n\nexport const StatusIndicatorPositionTemplate = () => {\n  return (\n    <>\n      <StyledText font="Body/Body 1 Long" forwardedAs="div">\n        Кастомное цветовое отображение статуса\n      </StyledText>\n      <StatusIndicator cssMixin={OrangeColor} dimension="m" text="P 16px/24 book" icon={<InfoSolid />} />\n      <StyledText font="Body/Body 1 Long" forwardedAs="div">\n        Позиционирование иконки индикатора справа\n      </StyledText>\n      <StatusIndicator dimension="m" text="P 16px/24 book" displayRight={false} icon={<ErrorSolid />} />\n      <StyledText font="Body/Body 1 Long" forwardedAs="div">\n        Без иконки\n      </StyledText>\n      <StatusIndicator dimension="m" text="P 16px/24 book" />\n    </>\n  );\n};\n'},description:{story:"Через параметр cssMixin можно изменять цветовое отображение статуса. Также с помощью \n        параметра displayRight можно управлять позиционированием иконки."}}}};StatusIndicatorPlayground.parameters={...StatusIndicatorPlayground.parameters,docs:{...StatusIndicatorPlayground.parameters?.docs,source:{originalSource:"{\n  render: StatusIndicatorPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: StatusIndicatorPlaygroundRaw\n      }\n    }\n  }\n}",...StatusIndicatorPlayground.parameters?.docs?.source}}},StatusIndicatorDimension.parameters={...StatusIndicatorDimension.parameters,docs:{...StatusIndicatorDimension.parameters?.docs,source:{originalSource:"{\n  render: StatusIndicatorDimensionStory,\n  name: 'Status Indicator. Размеры компонента',\n  parameters: {\n    docs: {\n      source: {\n        code: StatusIndicatorDimensionRaw\n      },\n      description: {\n        story: `Компонент регулируется только по высоте и представлен в размерах M (24px) и S (20px), ширина подстраивается под контент.`\n      }\n    }\n  }\n}",...StatusIndicatorDimension.parameters?.docs?.source}}},StatusIndicatorPosition.parameters={...StatusIndicatorPosition.parameters,docs:{...StatusIndicatorPosition.parameters?.docs,source:{originalSource:"{\n  render: StatusIndicatorPositionStory,\n  name: 'Status Indicator. Альтернативные варианты отображения',\n  parameters: {\n    docs: {\n      source: {\n        code: StatusIndicatorPositionRaw\n      },\n      description: {\n        story: `Через параметр cssMixin можно изменять цветовое отображение статуса. Также с помощью \n        параметра displayRight можно управлять позиционированием иконки.`\n      }\n    }\n  }\n}",...StatusIndicatorPosition.parameters?.docs?.source}}};const __namedExportsOrder=["StatusIndicatorPlayground","StatusIndicatorDimension","StatusIndicatorPosition"]},"./node_modules/@admiral-ds/icons/build/service/CheckOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCheckOutline=function SvgCheckOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M10.79 15.29c.28.28.74.27 1.01-.02l4.42-4.8c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-3.99 4.34-2.4-2.4a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-7.7 9a7.7 7.7 0 1 1 15.4 0 7.7 7.7 0 0 1-15.4 0",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 10.695a.65.65 0 0 0 .65-.65V7.9a.65.65 0 1 0-1.3 0v5.146c0 .36.291.65.65.65m.85 2.206a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75",clipRule:"evenodd"})))};__webpack_require__.p},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",";pointer-events:none;"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig({displayName:"T__Tspan",componentId:"sc-1bd4slr-0"})(["color:",";",";"," ",""],(({$color,theme,$skeleton})=>{const cssVar=`--admiral-color-${$color?.replace("/","_").replaceAll(" ","")}`;return $skeleton?"transparent":$color?theme.color[$color]?`var(${cssVar}, ${theme.color[$color]})`:$color:`var(--admiral-color-Neutral_Neutral90, ${theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.jn]})`}),(p=>p.theme.typography[p.$font]),(p=>p.$cssMixin?p.$cssMixin:""),(p=>p.$skeleton&&skeletonMixin)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({font,color,cssMixin,skeleton,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tspan,{ref,...props,$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton})));T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 60"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 60 Main"'},{value:'"Primary/Primary 70"'},{value:'"Primary/Primary 80"'},{value:'"Special/Static White"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 60 Main"'},{value:'"Error/Error 70"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 50 Main"'},{value:'"Success/Success 60"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});const DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
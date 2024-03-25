"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4437],{"./src/components/CSSCustomProps/stories/CSSCustomProps.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeActivatingExample:()=>ThemeActivatingExample,ThemeBasicsExample:()=>ThemeBasicsExample,ThemeContentExample:()=>ThemeContentExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CSSCustomProps_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Content=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeBasicstemplate__Content",componentId:"sc-97jwsz-0"})([""," color:var(--admiral-color-Neutral_Neutral90,",");"],typography.Il["Body/Body 1 Long"],(p=>p.theme.color["Neutral/Neutral 90"])),Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeBasicstemplate__Separator",componentId:"sc-97jwsz-1"})(["height:20px;"]),Term=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeBasicstemplate__Term",componentId:"sc-97jwsz-2"})(["font-weight:500;"]),InfoBlock=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeBasicstemplate__InfoBlock",componentId:"sc-97jwsz-3"})(["position:relative;background-color:var(--admiral-color-Primary_Primary10,",");border-left:solid 4px var(--admiral-color-Primary_Primary60Main,",");border-radius:4px;padding:24px 24px 24px 32px;&::before{content:'i';"," background-color:var(--admiral-color-Primary_Primary60Main,",");color:var(--admiral-color-Neutral_Neutral00,",");position:absolute;top:calc(50% - 12px);left:calc(-12px - 2px);width:24px;height:24px;display:flex;align-items:center;justify-content:center;clip-path:circle(50% at 50% 50%);}"],(p=>p.theme.color["Primary/Primary 10"]),(p=>p.theme.color["Primary/Primary 60 Main"]),typography.Il["Subtitle/Subtitle 3"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Neutral/Neutral 00"])),ThemeBasicsTemplate=()=>(0,jsx_runtime.jsxs)(Content,{children:["Библиотека предоставляет компоненты для подключения светлой (компонент ",(0,jsx_runtime.jsx)(Term,{children:"LightThemeCssVars"}),") и темной (компонент ",(0,jsx_runtime.jsx)(Term,{children:"DarkThemeCssVars"}),") тем, где тема - это таблица стилей, в которой согласно определенному API заданы css переменные, в дальнейшем применяемые для стилизации компонентов. Пользователь также может создать свою уникальную тему. Чтобы создать тему, необходимо понимание CSS, включая раздел"," ",(0,jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",children:"CSS Custom Properties"}),".",(0,jsx_runtime.jsx)(Separator,{}),"Все темы, использующие css переменные, применяются в рамках определенных classNames, заданных согласно шаблону"," ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-[themeName]"'}),", где ",(0,jsx_runtime.jsx)(Term,{children:"[themeName]"})," - это значение в нижнем регистре, разделенное дефисом, представляющее имя темы.",(0,jsx_runtime.jsx)(Separator,{}),"Предоставляемые библиотекой светлая и темная темы используют ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-light"'})," и"," ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-dark"'}),' classNames соответственно. Кастомная тема с названием "Purple Power", например, использовала бы className "admiral-theme-purple-power".',(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InfoBlock,{children:'В storybook в верхней панели добавлена кнопка "CSS Custom Props", которая позволяет управлять подключением таблиц стилей с css переменными в примерах storybookа. По умолчанию css переменные отключены. При подключении css переменные применяются к элементу body внутри каждого примера в storybook, при этом элементу body присваивается определенный className. В этом легко убедиться с помощью DevTools браузера.'})]});ThemeBasicsTemplate.displayName="ThemeBasicsTemplate";var CSSCustomProps=__webpack_require__("./src/components/CSSCustomProps/index.tsx");const ThemeActivating_template_Content=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeActivatingtemplate__Content",componentId:"sc-6bp1pj-0"})([""," color:var(--admiral-color-Neutral_Neutral90,",");"],typography.Il["Body/Body 1 Long"],(p=>p.theme.color["Neutral/Neutral 90"])),Text=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeActivatingtemplate__Text",componentId:"sc-6bp1pj-1"})(["color:var(--admiral-color-Neutral_Neutral50,",");"],(p=>p.theme.color["Neutral/Neutral 50"])),ThemeActivating_template_Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeActivatingtemplate__Separator",componentId:"sc-6bp1pj-2"})(["height:20px;"]),ThemeActivating_template_InfoBlock=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeActivatingtemplate__InfoBlock",componentId:"sc-6bp1pj-3"})(["position:relative;background-color:var(--admiral-color-Primary_Primary10,",");border-left:solid 4px var(--admiral-color-Primary_Primary60Main,",");border-radius:4px;padding:24px 24px 24px 32px;&::before{content:'i';"," background-color:var(--admiral-color-Primary_Primary60Main,",");color:var(--admiral-color-Neutral_Neutral00,",");position:absolute;top:calc(50% - 12px);left:calc(-12px - 2px);width:24px;height:24px;display:flex;align-items:center;justify-content:center;clip-path:circle(50% at 50% 50%);}"],(p=>p.theme.color["Primary/Primary 10"]),(p=>p.theme.color["Primary/Primary 60 Main"]),typography.Il["Subtitle/Subtitle 3"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Neutral/Neutral 00"])),Example=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeActivatingtemplate__Example",componentId:"sc-6bp1pj-4"})(["background:var(--admiral-color-Neutral_Neutral05,",");color:var(--admiral-color-Neutral_Neutral90,",");border-radius:4px;padding:24px;"],(p=>p.theme.color["Neutral/Neutral 05"]),(p=>p.theme.color["Neutral/Neutral 90"])),ThemeActivatingTemplate=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CSSCustomProps.$,{}),(0,jsx_runtime.jsxs)(ThemeActivating_template_Content,{children:["Чтобы подключить тему, необходимо импортировать соответствующий компонент"," ",(0,jsx_runtime.jsx)(Text,{children:"(LightThemeCssVars / DarkThemeCssVars)"})," из библиотеки и назначить className темы"," ",(0,jsx_runtime.jsx)(Text,{children:'("admiral-theme-light" / "admiral-theme-dark")'})," тому элементу, dom-дерево внутри которого предполагается темизировать с помощью css переменных.",(0,jsx_runtime.jsx)(ThemeActivating_template_Separator,{}),(0,jsx_runtime.jsx)(Example,{className:"admiral-theme-dark",children:'Данный абзац является простейшим примером элемента, к которому подключена темная тема с css переменными. Пример кода можно увидеть, нажав кнопку "Show code".'}),(0,jsx_runtime.jsx)(ThemeActivating_template_Separator,{}),(0,jsx_runtime.jsx)(ThemeActivating_template_InfoBlock,{children:'Исключение: для подключения светлой темы не обязательно использовать className "admiral-theme-light". При импорте компонента LightThemeCssVars светлая тема по умолчанию подключается к элементу :root.'})]})]}),ThemeContent_template_Content=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeContenttemplate__Content",componentId:"sc-1vhyude-0"})([""," color:var(--admiral-color-Neutral_Neutral90,",");li{margin-bottom:16px;}"],typography.Il["Body/Body 1 Long"],(p=>p.theme.color["Neutral/Neutral 90"])),Underline=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeContenttemplate__Underline",componentId:"sc-1vhyude-1"})(["text-decoration:underline;"]),ThemeContent_template_Text=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeContenttemplate__Text",componentId:"sc-1vhyude-2"})(["font-weight:500;"]),AdText=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeContenttemplate__AdText",componentId:"sc-1vhyude-3"})(["color:var(--admiral-color-Neutral_Neutral50,",");"],(p=>p.theme.color["Neutral/Neutral 50"])),ThemeContent_template_Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"ThemeContenttemplate__Separator",componentId:"sc-1vhyude-4"})(["height:8px;"]),ThemeContent_template_Term=styled_components_browser_esm.Ay.span.withConfig({displayName:"ThemeContenttemplate__Term",componentId:"sc-1vhyude-5"})(["font-weight:550;"]),ThemeContentTemplate=()=>(0,jsx_runtime.jsxs)(ThemeContent_template_Content,{children:["Тема включает в себя несколько категорий css переменных.",(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"color"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями цветов",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-color-[название группы цветов]_[название конкретного цвета]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-color-Primary_Primary60Main"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"}),", в storybook в разделе Colors можно увидеть какому дизайн токену цвета соответствует каждая css переменная"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"z-index"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями z-index",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-z-index-[тип компонента]"}),", например,"," ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-z-index-tooltip"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"box-shadow"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями box-shadow",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-box-shadow-[название тени]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-box-shadow-Shadow08"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-family"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменная со значениями font-family",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-family"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Переменная аналогична theme.fontFamily токену из стандартной темы ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-weight"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями font-weight",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-weight-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-weight-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-size"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями font-size",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-size-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-size-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"line-height"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями line-height",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-line-height-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-line-height-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"border-radius"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями border-radius",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-[размер скругления (Small / Medium / Large)]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-Small"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Для каждой css переменной ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-[размер скругления]"})," задан набор допустимых значений в виде css переменных типа ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-kind-[размер скругления]_*"})]})]})]});ThemeContentTemplate.displayName="ThemeContentTemplate";const Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"CSSCustomPropsstories__Desc",componentId:"sc-1xfj7rk-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),CSSCustomProps_stories_Term=styled_components_browser_esm.Ay.span.withConfig({displayName:"CSSCustomPropsstories__Term",componentId:"sc-1xfj7rk-1"})(["font-weight:500;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["В библиотеке добавлена дополнительная возможность темизации компонентов с помощью ",(0,jsx_runtime.jsx)(CSSCustomProps_stories_Term,{children:"css переменных"})," (css custom props / css variables). Необходимость прокидывать тему в компоненты библиотеки с помощью styled-components ThemeProvider сохраняется."]});Description.displayName="Description";const CSSCustomProps_stories={title:"Experimental API/CSS Custom Properties",component:Desc,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{})}},ThemeBasicsStory=()=>(0,jsx_runtime.jsx)(ThemeBasicsTemplate,{});ThemeBasicsStory.displayName="ThemeBasicsStory";const ThemeBasicsExample={render:ThemeBasicsStory,name:"Базовые понятия"},ThemeActivatingStory=()=>(0,jsx_runtime.jsx)(ThemeActivatingTemplate,{});ThemeActivatingStory.displayName="ThemeActivatingStory";const ThemeActivatingExample={render:ThemeActivatingStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport styled from 'styled-components';\nimport { typography, DarkThemeCssVars } from '@admiral-ds/react-ui';\n\nconst Content = styled.div`\n  ${typography['Body/Body 1 Long']}\n  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});\n`;\n\nconst Text = styled.span`\n  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});\n`;\n\nconst Separator = styled.div`\n  height: 20px;\n`;\n\nconst InfoBlock = styled.div`\n  position: relative;\n  background-color: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});\n  border-left: solid 4px var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});\n  border-radius: 4px;\n  padding: 24px 24px 24px 32px;\n\n  &::before {\n    content: 'i';\n    ${typography['Subtitle/Subtitle 3']}\n    background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});\n    color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});\n    position: absolute;\n    top: calc(50% - 12px);\n    left: calc(-12px - 2px);\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    clip-path: circle(50% at 50% 50%);\n  }\n`;\n\nconst Example = styled.div`\n  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});\n  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});\n  border-radius: 4px;\n  padding: 24px;\n`;\n\nexport const ThemeActivatingTemplate = () => {\n  return (\n    <>\n      <DarkThemeCssVars />\n      <Content>\n        Чтобы подключить тему, необходимо импортировать соответствующий компонент{' '}\n        <Text>(LightThemeCssVars / DarkThemeCssVars)</Text> из библиотеки и назначить className темы{' '}\n        <Text>(\"admiral-theme-light\" / \"admiral-theme-dark\")</Text> тому элементу, dom-дерево внутри которого\n        предполагается темизировать с помощью css переменных.\n        <Separator />\n        <Example className=\"admiral-theme-dark\">\n          Данный абзац является простейшим примером элемента, к которому подключена темная тема с css переменными.\n          Пример кода можно увидеть, нажав кнопку \"Show code\".\n        </Example>\n        <Separator />\n        <InfoBlock>\n          Исключение: для подключения светлой темы не обязательно использовать className \"admiral-theme-light\". При\n          импорте компонента LightThemeCssVars светлая тема по умолчанию подключается к элементу :root.\n        </InfoBlock>\n      </Content>\n    </>\n  );\n};\n"}}},name:"Подключение темы"},ThemeContentStory=()=>(0,jsx_runtime.jsx)(ThemeContentTemplate,{});ThemeContentStory.displayName="ThemeContentStory";const ThemeContentExample={render:ThemeContentStory,name:"Состав темы"};ThemeBasicsExample.parameters={...ThemeBasicsExample.parameters,docs:{...ThemeBasicsExample.parameters?.docs,source:{originalSource:"{\n  render: ThemeBasicsStory,\n  name: 'Базовые понятия'\n}",...ThemeBasicsExample.parameters?.docs?.source}}},ThemeActivatingExample.parameters={...ThemeActivatingExample.parameters,docs:{...ThemeActivatingExample.parameters?.docs,source:{originalSource:"{\n  render: ThemeActivatingStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ThemeActivatingRaw\n      }\n    }\n  },\n  name: 'Подключение темы'\n}",...ThemeActivatingExample.parameters?.docs?.source}}},ThemeContentExample.parameters={...ThemeContentExample.parameters,docs:{...ThemeContentExample.parameters?.docs,source:{originalSource:"{\n  render: ThemeContentStory,\n  name: 'Состав темы'\n}",...ThemeContentExample.parameters?.docs?.source}}};const __namedExportsOrder=["ThemeBasicsExample","ThemeActivatingExample","ThemeContentExample"]}}]);
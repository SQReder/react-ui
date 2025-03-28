"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6037],{"./src/components/List/OrderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>OrderedList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OrderedList=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_styleType=_param.styleType,_param_gap=_param.gap,markerCssMixin=_param.markerCssMixin,props=_object_without_properties(_param,["children","dimension","styleType","gap","markerCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.ti,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,$dimension:dimension,$styleType:void 0===_param_styleType?"numbers":_param_styleType,$gap:void 0===_param_gap?"8px":_param_gap,$markerCssMixin:markerCssMixin},props),{children:children}))});OrderedList.displayName="OrderedList";try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"numbers"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/OrderedList.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"src/components/List/OrderedList.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/stories/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ListMarkerColorExample:()=>ListMarkerColorExample,ListMarkerCustomExample:()=>ListMarkerCustomExample,ListMultiLineExample:()=>ListMultiLineExample,ListNestedExample:()=>ListNestedExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OrderedList=__webpack_require__("./src/components/List/OrderedList.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),List=__webpack_require__("./src/components/List/index.tsx"),UnorderedList=__webpack_require__("./src/components/List/UnorderedList.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, auto);\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  height: ","px;\n"]);return _templateObject1=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),Separator=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.$height||8}),ListNestedTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок.",(0,jsx_runtime.jsx)(Separator,{}),"Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет по краю текста вышестоящего уровня."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsxs)(Layout,{children:[(0,jsx_runtime.jsxs)(OrderedList._,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(OrderedList._,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(OrderedList._,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(OrderedList._,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(UnorderedList.X,{styleType:"virgule",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(UnorderedList.X,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(UnorderedList.X,{dimension:"s",styleType:"virgule",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]})]})},TasksOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/TasksOutline.svg"),PeopleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PeopleOutline.svg"),EmailOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/EmailOutline.svg");function ListMarkerColor_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ListMarkerColor_template_templateObject(){var data=ListMarkerColor_template_tagged_template_literal(["\n  &&::before {\n    color: ",";\n  }\n"]);return ListMarkerColor_template_templateObject=function _templateObject(){return data},data}var ItemWithColoredMarker=(0,styled_components_browser_esm.Ay)(List.ck)(ListMarkerColor_template_templateObject(),function(p){return p.$color}),ListMarkerColorTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном примере."}),(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Покупка продуктов",(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"blue",children:"Куриная грудка"}),(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"red",children:"Сливки"}),(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"green",children:"Чеснок"})]})]}),(0,jsx_runtime.jsxs)(List.ck,{children:["Работа",(0,jsx_runtime.jsxs)(UnorderedList.X,{styleType:"icon",children:[(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:TasksOutline.h,color:"blue"}),"Задачи"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:EmailOutline.h,color:"red"}),"Почта"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:PeopleOutline.h,color:"green"}),"Встречи"]})]})]})]})]})},ListMultiLineTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По умолчанию компонент подстраивается под размеры родительского элемента."}),(0,jsx_runtime.jsxs)(UnorderedList.X,{style:{maxWidth:"500px"},children:[(0,jsx_runtime.jsx)(List.ck,{children:"First, let's set up your Segment Unify space. We'll take you to Segment to do this."}),(0,jsx_runtime.jsx)(List.ck,{children:"The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when automatically finding profiles."}),(0,jsx_runtime.jsx)(List.ck,{children:"Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want to make available to Flex agents and give them display names."})]})]})};function ListMarkerCustom_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ListMarkerCustom_template_templateObject(){var data=ListMarkerCustom_template_tagged_template_literal(["\n  content: counter(admiral-list-counter, lower-latin) ')';\n"]);return ListMarkerCustom_template_templateObject=function _templateObject(){return data},data}function ListMarkerCustom_template_templateObject1(){var data=ListMarkerCustom_template_tagged_template_literal(["\n  content: counter(admiral-list-counter, square);\n"]);return ListMarkerCustom_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=ListMarkerCustom_template_tagged_template_literal(["\n  content: '✓';\n  color: green;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=ListMarkerCustom_template_tagged_template_literal(["\n  height: ","px;\n"]);return _templateObject3=function _templateObject(){return data},data}var latinLettersMarker=(0,styled_components_browser_esm.AH)(ListMarkerCustom_template_templateObject()),squareMarker=(0,styled_components_browser_esm.AH)(ListMarkerCustom_template_templateObject1()),checkMarker=(0,styled_components_browser_esm.AH)(_templateObject2()),ListMarkerCustom_template_Separator=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.$height||8}),ListMarkerCustomTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin, задаваемого для компонентов OrderedList и UnorderedList.",(0,jsx_runtime.jsx)(ListMarkerCustom_template_Separator,{})," В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с использованием css функций counter() и counters()."]}),(0,jsx_runtime.jsx)(ListMarkerCustom_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(OrderedList._,{styleType:"lower-letters",markerCssMixin:latinLettersMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Покупка продуктов",(0,jsx_runtime.jsxs)(UnorderedList.X,{markerCssMixin:checkMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Куриная грудка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Сливки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Чеснок"})]})]}),(0,jsx_runtime.jsxs)(List.ck,{children:["Работа",(0,jsx_runtime.jsxs)(UnorderedList.X,{markerCssMixin:squareMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Задачи"}),(0,jsx_runtime.jsx)(List.ck,{children:"Почта"}),(0,jsx_runtime.jsx)(List.ck,{children:"Встречи"})]})]})]})]})};function List_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function List_stories_templateObject(){var data=List_stories_tagged_template_literal(["\n  height: ","px;\n  width: 8px;\n"]);return List_stories_templateObject=function _templateObject(){return data},data}function List_stories_templateObject1(){var data=List_stories_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return List_stories_templateObject1=function _templateObject(){return data},data}var List_stories_Separator=styled_components_browser_esm.Ay.div(List_stories_templateObject(),function(p){var _p_$height;return null!==(_p_$height=p.$height)&&void 0!==_p_$height?_p_$height:20}),Desc=styled_components_browser_esm.Ay.div(List_stories_templateObject1());let List_stories={title:"Admiral-2.1/List/Общие примеры",decorators:void 0,component:OrderedList._,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент для вертикальной группировки связанных по смыслу текстовых пунктов. Представлен в двух вариантах OrderedList и UnorderedList.",(0,jsx_runtime.jsx)(List_stories_Separator,{}),"Рекомендации:",(0,jsx_runtime.jsx)(List_stories_Separator,{}),"- Используйте список, если у вас есть два и более пунктов.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Простые списки, разделенные запятыми, могут не нуждаться в разметке, но длинные списки или группы ссылок должны ее иметь.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Организуйте списки так, чтобы пользователи могли понять взаимосвязь и группировку информации.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Создавайте структурированные списки. Их легче использовать, чем простые таблицы."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684"}]},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},styleType:{options:["bullet","virgule","icon"],control:{type:"radio"}},gap:{control:{type:"text"}}}};var ListNestedExample={render:function(){return(0,jsx_runtime.jsx)(ListNestedTemplate,{})},parameters:{docs:{source:{code:'import * as React from \'react\';\nimport { OrderedList, UnorderedList, ListItem, T } from \'@admiral-ds/react-ui\';\nimport styled from \'styled-components\';\n\nconst Layout = styled.div`\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, auto);\n`;\nconst Separator = styled.div<{ $height?: number }>`\n  height: ${(p) => p.$height || 8}px;\n`;\n\nexport const ListNestedTemplate = () => {\n  return (\n    <>\n      <T font="Body/Body 1 Long" as="div">\n        Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок.\n        <Separator />\n        Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет\n        по краю текста вышестоящего уровня.\n      </T>\n      <Separator $height={24} />\n      <Layout>\n        <OrderedList>\n          <ListItem>Текст строки</ListItem>\n          <ListItem>\n            Текст строки\n            <OrderedList>\n              <ListItem>Текст строки</ListItem>\n              <ListItem>Текст строки</ListItem>\n            </OrderedList>\n          </ListItem>\n          <ListItem>Текст строки</ListItem>\n        </OrderedList>\n        <OrderedList dimension="s">\n          <ListItem>Текст строки</ListItem>\n          <ListItem>\n            Текст строки\n            <OrderedList dimension="s">\n              <ListItem>Текст строки</ListItem>\n              <ListItem>Текст строки</ListItem>\n            </OrderedList>\n          </ListItem>\n          <ListItem>Текст строки</ListItem>\n        </OrderedList>\n        <UnorderedList>\n          <ListItem>Текст строки</ListItem>\n          <ListItem>\n            Текст строки\n            <UnorderedList styleType="virgule">\n              <ListItem>Текст строки</ListItem>\n              <ListItem>Текст строки</ListItem>\n            </UnorderedList>\n          </ListItem>\n          <ListItem>Текст строки</ListItem>\n        </UnorderedList>\n        <UnorderedList dimension="s">\n          <ListItem>Текст строки</ListItem>\n          <ListItem>\n            Текст строки\n            <UnorderedList dimension="s" styleType="virgule">\n              <ListItem>Текст строки</ListItem>\n              <ListItem>Текст строки</ListItem>\n            </UnorderedList>\n          </ListItem>\n          <ListItem>Текст строки</ListItem>\n        </UnorderedList>\n      </Layout>\n    </>\n  );\n};\n'}}},name:"Вложенные списки"},ListMarkerColorExample={render:function(){return(0,jsx_runtime.jsx)(ListMarkerColorTemplate,{})},parameters:{docs:{source:{code:'import * as React from \'react\';\nimport { UnorderedList, ListItem, ListIcon, T } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as TasksOutline } from \'@admiral-ds/icons/build/documents/TasksOutline.svg\';\nimport { ReactComponent as PeopleOutline } from \'@admiral-ds/icons/build/system/PeopleOutline.svg\';\nimport { ReactComponent as EmailOutline } from \'@admiral-ds/icons/build/system/EmailOutline.svg\';\nimport styled from \'styled-components\';\n\nconst ItemWithColoredMarker = styled(ListItem)<{ $color: string }>`\n  &&::before {\n    color: ${(p) => p.$color};\n  }\n`;\n\nexport const ListMarkerColorTemplate = () => {\n  return (\n    <>\n      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: \'24px\' }}>\n        Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном\n        примере.\n      </T>\n      <UnorderedList>\n        <ListItem>Уборка</ListItem>\n        <ListItem>\n          Покупка продуктов\n          <UnorderedList>\n            <ItemWithColoredMarker $color="blue">Куриная грудка</ItemWithColoredMarker>\n            <ItemWithColoredMarker $color="red">Сливки</ItemWithColoredMarker>\n            <ItemWithColoredMarker $color="green">Чеснок</ItemWithColoredMarker>\n          </UnorderedList>\n        </ListItem>\n        <ListItem>\n          Работа\n          <UnorderedList styleType="icon">\n            <ListItem>\n              <ListIcon as={TasksOutline} color="blue" />\n              Задачи\n            </ListItem>\n            <ListItem>\n              <ListIcon as={EmailOutline} color="red" />\n              Почта\n            </ListItem>\n            <ListItem>\n              <ListIcon as={PeopleOutline} color="green" />\n              Встречи\n            </ListItem>\n          </UnorderedList>\n        </ListItem>\n      </UnorderedList>\n    </>\n  );\n};\n'}}},name:"Кастомный цвет маркера"},ListMarkerCustomExample={render:function(){return(0,jsx_runtime.jsx)(ListMarkerCustomTemplate,{})},parameters:{docs:{source:{code:"import * as React from 'react';\nimport { UnorderedList, OrderedList, ListItem, T } from '@admiral-ds/react-ui';\nimport styled, { css } from 'styled-components';\n\n/**\n * Контент маркера может зависить от значения счетчика.\n * В компонентах OrderedList и UnorderedList используется счетчик с именем admiral-list-counter\n **/\nconst latinLettersMarker = css`\n  content: counter(admiral-list-counter, lower-latin) ')';\n`;\n\nconst squareMarker = css`\n  content: counter(admiral-list-counter, square);\n`;\n\nconst checkMarker = css`\n  content: '✓';\n  color: green;\n`;\n\nconst Separator = styled.div<{ $height?: number }>`\n  height: ${(p) => p.$height || 8}px;\n`;\n\nexport const ListMarkerCustomTemplate = () => {\n  return (\n    <>\n      <T font=\"Body/Body 1 Long\" as=\"div\">\n        Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin,\n        задаваемого для компонентов OrderedList и UnorderedList.\n        <Separator /> В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем\n        admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с\n        использованием css функций counter() и counters().\n      </T>\n      <Separator $height={24} />\n      <OrderedList styleType=\"lower-letters\" markerCssMixin={latinLettersMarker}>\n        <ListItem>Уборка</ListItem>\n        <ListItem>\n          Покупка продуктов\n          <UnorderedList markerCssMixin={checkMarker}>\n            <ListItem>Куриная грудка</ListItem>\n            <ListItem>Сливки</ListItem>\n            <ListItem>Чеснок</ListItem>\n          </UnorderedList>\n        </ListItem>\n        <ListItem>\n          Работа\n          <UnorderedList markerCssMixin={squareMarker}>\n            <ListItem>Задачи</ListItem>\n            <ListItem>Почта</ListItem>\n            <ListItem>Встречи</ListItem>\n          </UnorderedList>\n        </ListItem>\n      </OrderedList>\n    </>\n  );\n};\n"}}},name:"Кастомизация маркеров"},ListMultiLineExample={render:function(){return(0,jsx_runtime.jsx)(ListMultiLineTemplate,{})},parameters:{docs:{source:{code:"import * as React from 'react';\nimport { UnorderedList, ListItem, T } from '@admiral-ds/react-ui';\n\nexport const ListMultiLineTemplate = () => {\n  return (\n    <>\n      <T font=\"Body/Body 1 Long\" as=\"div\" style={{ marginBottom: '24px' }}>\n        Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По\n        умолчанию компонент подстраивается под размеры родительского элемента.\n      </T>\n      <UnorderedList style={{ maxWidth: '500px' }}>\n        <ListItem>First, let's set up your Segment Unify space. We'll take you to Segment to do this.</ListItem>\n        <ListItem>\n          The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when\n          automatically finding profiles.\n        </ListItem>\n        <ListItem>\n          Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want\n          to make available to Flex agents and give them display names.\n        </ListItem>\n      </UnorderedList>\n    </>\n  );\n};\n"}}},name:"Многострочность и регулировка ширины списка"};ListNestedExample.parameters={...ListNestedExample.parameters,docs:{...ListNestedExample.parameters?.docs,source:{originalSource:"{\n  render: ListNestedStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ListNestedRaw\n      }\n    }\n  },\n  name: 'Вложенные списки'\n}",...ListNestedExample.parameters?.docs?.source}}},ListMarkerColorExample.parameters={...ListMarkerColorExample.parameters,docs:{...ListMarkerColorExample.parameters?.docs,source:{originalSource:"{\n  render: ListMarkerColorStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ListMarkerColorRaw\n      }\n    }\n  },\n  name: 'Кастомный цвет маркера'\n}",...ListMarkerColorExample.parameters?.docs?.source}}},ListMarkerCustomExample.parameters={...ListMarkerCustomExample.parameters,docs:{...ListMarkerCustomExample.parameters?.docs,source:{originalSource:"{\n  render: ListMarkerCustomStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ListMarkerCustomRaw\n      }\n    }\n  },\n  name: 'Кастомизация маркеров'\n}",...ListMarkerCustomExample.parameters?.docs?.source}}},ListMultiLineExample.parameters={...ListMultiLineExample.parameters,docs:{...ListMultiLineExample.parameters?.docs,source:{originalSource:"{\n  render: ListMultiLineStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ListMultilineRaw\n      }\n    }\n  },\n  name: 'Многострочность и регулировка ширины списка'\n}",...ListMultiLineExample.parameters?.docs?.source}}};let __namedExportsOrder=["ListNestedExample","ListMarkerColorExample","ListMarkerCustomExample","ListMultiLineExample"]}}]);
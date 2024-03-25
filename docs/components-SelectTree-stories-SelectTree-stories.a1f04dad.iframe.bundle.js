"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6609],{"./src/components/SelectTree/stories/SelectTree.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectTreeM:()=>SelectTreeM,SelectTreeNoCheckbox:()=>SelectTreeNoCheckbox,SelectTreeS:()=>SelectTreeS,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectTree_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),ChevronRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronRightOutline.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Chevron=(0,styled_components_browser_esm.Ay)(ChevronRightOutline.h).withConfig({displayName:"SelectTreeNode__Chevron",componentId:"sc-10esmxe-0"})(["transition:all 0.3s;& path{fill:var(--admiral-color-Neutral_Neutral50,",");}width:100%;height:100%;transform:",";"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.$isOpened?"rotate(90deg)":"rotate(0deg)")),ChevronWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"SelectTreeNode__ChevronWrapper",componentId:"sc-10esmxe-1"})(["flex-shrink:0;margin-right:16px;box-sizing:border-box;cursor:pointer;position:relative;width:",";height:",";&:hover{&::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;width:calc(100% + 12px);height:calc(100% + 12px);background-color:var(--admiral-color-Opacity_Hover,",");}}"],(p=>"m"===p.$dimension?"24px":"20px"),(p=>"m"===p.$dimension?"24px":"20px"),(p=>p.theme.color["Opacity/Hover"])),TreeItem=styled_components_browser_esm.Ay.ul.withConfig({displayName:"SelectTreeNode__TreeItem",componentId:"sc-10esmxe-2"})(["list-style:none;margin:0;padding:0;padding-left:",";"],(p=>"m"===p.$dimension?"40px":"36px")),Wrapper=styled_components_browser_esm.Ay.li.withConfig({displayName:"SelectTreeNode__Wrapper",componentId:"sc-10esmxe-3"})(["color:var(--admiral-color-Neutral_Neutral90,",");",";display:flex;align-items:flex-start;padding:",";"],(p=>p.theme.color["Neutral/Neutral 90"]),(p=>"m"===p.$dimension?typography.Il["Body/Body 1 Short"]:typography.Il["Body/Body 2 Short"]),(p=>"m"===p.$dimension?`8px 16px 8px ${40*p.$level}px`:`6px 16px 6px ${36*p.$level}px`)),IconWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"SelectTreeNode__IconWrapper",componentId:"sc-10esmxe-4"})(["margin-right:8px;flex-shrink:0;width:",";height:",";> svg{width:100%;height:100%;}"],(p=>"m"===p.$dimension?"24px":"20px"),(p=>"m"===p.$dimension?"24px":"20px")),StyledCheckbox=(0,styled_components_browser_esm.Ay)(CheckboxField.Y).withConfig({displayName:"SelectTreeNode__StyledCheckbox",componentId:"sc-10esmxe-5"})(["margin-right:8px;flex-shrink:0;"]),TitleContent=styled_components_browser_esm.Ay.div.withConfig({displayName:"SelectTreeNode__TitleContent",componentId:"sc-10esmxe-6"})(["padding-top:2px;"]),SelectTreeNode=({dimension,node,level,onChange,onButtonClick,onKeyDown,expandAll})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Wrapper,{$dimension:dimension,$level:level,onKeyDown,children:[node.children&&(0,jsx_runtime.jsx)(ChevronWrapper,{"data-key":node.id,$dimension:dimension,onClick:onButtonClick,children:(0,jsx_runtime.jsx)(Chevron,{$isOpened:node.expanded})}),"status"in node&&(0,jsx_runtime.jsx)(StyledCheckbox,{id:node.id,"data-key":node.id,dimension,indeterminate:"indeterminate"===node.status,checked:"unchecked"!==node.status,onChange}),node.icon&&(0,jsx_runtime.jsx)(IconWrapper,{$dimension:dimension,children:node.icon}),(0,jsx_runtime.jsx)(TitleContent,{children:node.label})]}),node.expanded&&node.children&&node.children.map(((child,i)=>(0,jsx_runtime.jsx)(TreeItem,{$dimension:dimension,children:(0,jsx_runtime.jsx)(SelectTreeNode,{dimension,node:child,level:level+1,expandAll,onKeyDown,onButtonClick,onChange},node.id)},[node.id,i].join("/"))))]});try{SelectTreeNode.displayName="SelectTreeNode",SelectTreeNode.__docgenInfo={description:"",displayName:"SelectTreeNode",props:{node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"SelectTreeNodeProps"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},expandAll:{defaultValue:null,description:"",name:"expandAll",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLLIElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/SelectTreeNode.tsx#SelectTreeNode"]={docgenInfo:SelectTreeNode.__docgenInfo,name:"SelectTreeNode",path:"src/components/SelectTree/SelectTreeNode.tsx#SelectTreeNode"})}catch(__react_docgen_typescript_loader_error){}var keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");const updateNodeStatus=root=>(childrenStatus=>{if(0!==childrenStatus.length)return childrenStatus.every((status=>"unchecked"===status))?"unchecked":childrenStatus.every((status=>"checked"===status))?"checked":"indeterminate"})(root.map((branch=>{let branchStatus;return branch.children?(branchStatus=updateNodeStatus(branch.children),"status"in branch&&branchStatus&&(branch.status=branchStatus,branch.checked="checked"===branchStatus||"indeterminate"===branchStatus)):"status"in branch&&(branchStatus=branch.status,branch.checked="checked"===branchStatus||"indeterminate"===branchStatus),branchStatus})).filter((item=>item))),checkParent=(root,node)=>{for(const branch of root)if(branch.children){if(branch.children.find((child=>child.id===node.id)))return"status"in branch&&(branch.status="checked",branch.checked=!0),!0;if(checkParent(branch.children,node))return"status"in branch&&(branch.status="checked",branch.checked=!0),!0}return!1},setNodeStatus=list=>{list.forEach((node=>{"checked"in node&&(node.status=node.checked?"checked":"unchecked"),node.children&&setNodeStatus(node.children)}))},SelectTree_TreeItem=styled_components_browser_esm.Ay.ul.withConfig({displayName:"SelectTree__TreeItem",componentId:"sc-cefor5-0"})(["list-style:none;margin:0;padding:0;"]),SelectTree=({list,dimension="m",expandAll=!1,onChange,...props})=>{const[handleGuard,setHandleGuard]=react.useState(!1),handleExpandAll=node=>{void 0===node.expanded&&node.children&&(node.expanded=expandAll,node.children&&node.children.forEach(handleExpandAll))},handleChangeList=(type,e)=>{const checked=e.target.checked,key=e.target.getAttribute("data-key"),traverseNodes=node=>{if(node.id===key){if("buttonclick"===type){const expanded=node.expanded;node.expanded=!expanded}if("inputchange"===type&&(node.status=checked?"checked":"unchecked",checked&&checkParent(list,node),node.children&&node.children.forEach(checkAllNodes)),"keydown"===type){const code=keyboardKey.r.getCode(e);code===keyboardKey.r.Enter||code===keyboardKey.r[" "]?node.expanded=!0:code===keyboardKey.r.Escape&&(node.expanded=!1)}}node.children&&node.children.forEach(traverseNodes)},checkAllNodes=node=>{"status"in node&&(node.status=checked?"checked":"unchecked",node.checked=checked),node.children&&node.children.forEach(checkAllNodes)};list.forEach(traverseNodes),onChange?.([...list])},handleButtonClick=react.useCallback((e=>{handleChangeList("buttonclick",e)}),[]),handleChange=react.useCallback((e=>{handleChangeList("inputchange",e)}),[]),handleKeyDown=react.useCallback((e=>{handleChangeList("keydown",e)}),[]);return react.useEffect((()=>{expandAll&&(list.forEach(handleExpandAll),onChange?.([...list]))}),[expandAll]),handleGuard||(setNodeStatus(list),setHandleGuard(!0)),updateNodeStatus(list),(0,jsx_runtime.jsx)(SelectTree_TreeItem,{...props,children:list.map((node=>(0,jsx_runtime.jsx)(SelectTreeNode,{node,onChange:handleChange,dimension,expandAll,onButtonClick:handleButtonClick,onKeyDown:handleKeyDown,level:0},node.id)))})};SelectTree.displayName="SelectTree",SelectTree.defaultProps={dimension:"m"},SelectTree.displayName="SelectTree";try{SelectTree.displayName="SelectTree",SelectTree.__docgenInfo={description:"",displayName:"SelectTree",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:{value:"false"},description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/index.tsx#SelectTree"]={docgenInfo:SelectTree.__docgenInfo,name:"SelectTree",path:"src/components/SelectTree/index.tsx#SelectTree"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),FolderSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FolderSolid.svg");const RNBLogoLight=__webpack_require__.p+"static/media/src/components/SelectTree/stories/RNBLogoLight.svg",selectTreeListM=[{label:(0,jsx_runtime.jsx)(T.T,{as:"div",style:{marginTop:-2},font:"Subtitle/Subtitle 2",children:"Текст заголовка, первый уровень компонента, размер M 40 1"}),id:"1",checked:!1,children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",checked:!1,children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",checked:!1},{label:"Текст  строки, третий уровень компонента 2",id:"2-2"},{label:"Текст  строки, третий уровень компонента 3",id:"2-3"},{label:"Текст  строки, третий уровень компонента 4",id:"2-4"},{label:"Текст  строки с чекбоксом, третий уровень компонента 5",id:"2-5",checked:!1,children:[{label:"Текст  строки с чекбоксом, четвертый уровень компонента 1",id:"3-1",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n    вложенности.",id:"3-3",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 4",id:"3-4",checked:!1,children:[{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",id:"4-1",checked:!1},{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",id:"4-2",checked:!1}]}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер M 40 2",id:"2",checked:!1},{label:"Текст заголовка, первый уровень компонента, размер M 40 3",id:"3"},{label:"Текст заголовка, первый уровень компонента, размер M 40 4",id:"4"}],SelectTreeMTemplate=props=>{const[dataList,setDataList]=react.useState(selectTreeListM);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,{...props,style:{maxWidth:"768px"},list:dataList,dimension:"m",onChange:dataList=>setDataList(dataList)})})};try{SelectTreeMTemplate.displayName="SelectTreeMTemplate",SelectTreeMTemplate.__docgenInfo={description:"",displayName:"SelectTreeMTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeM.template.tsx#SelectTreeMTemplate"]={docgenInfo:SelectTreeMTemplate.__docgenInfo,name:"SelectTreeMTemplate",path:"src/components/SelectTree/stories/SelectTreeM.template.tsx#SelectTreeMTemplate"})}catch(__react_docgen_typescript_loader_error){}const selectTreeListS=[{label:"Текст заголовка, первый уровень компонента, размер S 32 1",id:"1",checked:!1,children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",checked:!1,children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",checked:!1},{label:"Текст  строки, третий уровень компонента 2",id:"2-2"},{label:"Текст  строки с чекбоксом, третий уровень компонента 3",id:"2-3",checked:!1,children:[{label:"Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n    вложенности.",id:"3-1",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",checked:!1,children:[{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",id:"4-1",checked:!1},{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",id:"4-2",checked:!1}]}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер S 32 2",id:"2",checked:!1}],SelectTreeSTemplate=props=>{const[dataList,setDataList]=react.useState(selectTreeListS);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,{...props,style:{maxWidth:"768px"},list:dataList,dimension:"s",onChange:dataList=>setDataList(dataList)})})};try{SelectTreeSTemplate.displayName="SelectTreeSTemplate",SelectTreeSTemplate.__docgenInfo={description:"",displayName:"SelectTreeSTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeS.template.tsx#SelectTreeSTemplate"]={docgenInfo:SelectTreeSTemplate.__docgenInfo,name:"SelectTreeSTemplate",path:"src/components/SelectTree/stories/SelectTreeS.template.tsx#SelectTreeSTemplate"})}catch(__react_docgen_typescript_loader_error){}const treeViewList=[{label:"Текст заголовка, первый уровень компонента, размер M 40 1",id:"1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 2",id:"2-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 3",id:"2-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 4",id:"2-4",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки с чекбоксом, третий уровень компонента 5",id:"2-5",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:"Текст  строки с чекбоксом, четвертый уровень компонента 1",id:"3-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n    вложенности.",id:"3-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер M 40 2",id:"2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})}],SelectTreeNoCheckboxTemplate=props=>{const[dataList,setDataList]=react.useState(treeViewList);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,{...props,style:{maxWidth:"768px"},list:dataList,dimension:"m",onChange:dataList=>setDataList(dataList),expandAll:!0})})};try{SelectTreeNoCheckboxTemplate.displayName="SelectTreeNoCheckboxTemplate",SelectTreeNoCheckboxTemplate.__docgenInfo={description:"",displayName:"SelectTreeNoCheckboxTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeNoCheckbox.template.tsx#SelectTreeNoCheckboxTemplate"]={docgenInfo:SelectTreeNoCheckboxTemplate.__docgenInfo,name:"SelectTreeNoCheckboxTemplate",path:"src/components/SelectTree/stories/SelectTreeNoCheckbox.template.tsx#SelectTreeNoCheckboxTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"SelectTreestories__Desc",componentId:"sc-1uqbsmb-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"(Deprecated используйте Tree компонент) Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней вложенности."});Description.displayName="Description";const SelectTree_stories={title:"Deprecated/SelectTree (Deprecated используйте Tree компонент)",decorators:void 0,component:SelectTree,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12178%3A70930"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12236%3A71124"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A12752"}]},argTypes:{dimension:{options:["m","s"]},expandAll:{control:{type:"boolean"}},list:{control:!1}}},SelectTreeMStory=props=>(0,jsx_runtime.jsx)(SelectTreeMTemplate,{...props});SelectTreeMStory.displayName="SelectTreeMStory";const SelectTreeM={render:SelectTreeMStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { SelectTree, T } from '@admiral-ds/react-ui';\nimport type { SelectTreeProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';\n\nimport type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';\nimport RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';\n\nconst selectTreeListM = [\n  {\n    label: (\n      <T as=\"div\" style={{ marginTop: -2 }} font=\"Subtitle/Subtitle 2\">\n        Текст заголовка, первый уровень компонента, размер M 40 1\n      </T>\n    ),\n    id: '1',\n    checked: false,\n    children: [\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 1',\n        id: '1-1',\n        checked: false,\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 2',\n        id: '1-2',\n        checked: false,\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 3',\n        id: '1-3',\n        checked: false,\n        children: [\n          {\n            label: <img src={RNBLogoLight} alt={''} />,\n            id: '2-1',\n            checked: false,\n          },\n          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },\n          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3' },\n          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4' },\n          {\n            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',\n            id: '2-5',\n            checked: false,\n            children: [\n              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', checked: false },\n              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', checked: false },\n              {\n                label:\n                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +\n                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +\n                  '    вложенности.',\n                id: '3-3',\n                checked: false,\n              },\n              {\n                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 4',\n                id: '3-4',\n                checked: false,\n                children: [\n                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },\n                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n    ],\n  },\n  { label: 'Текст заголовка, первый уровень компонента, размер M 40 2', id: '2', checked: false },\n  { label: 'Текст заголовка, первый уровень компонента, размер M 40 3', id: '3' },\n  { label: 'Текст заголовка, первый уровень компонента, размер M 40 4', id: '4' },\n];\n\nexport const SelectTreeMTemplate = (props: SelectTreeProps) => {\n  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListM);\n\n  return (\n    <>\n      <SelectTree\n        {...props}\n        style={{ maxWidth: '768px' }}\n        list={dataList}\n        dimension=\"m\"\n        onChange={(dataList) => setDataList(dataList)}\n      />\n    </>\n  );\n};\n"}}},name:"Select Tree. Размер М"},SelectTreeSStory=props=>(0,jsx_runtime.jsx)(SelectTreeSTemplate,{...props});SelectTreeSStory.displayName="SelectTreeSStory";const SelectTreeS={render:SelectTreeSStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { SelectTree } from '@admiral-ds/react-ui';\nimport type { SelectTreeProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';\n\nimport type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';\nimport RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';\n\nconst selectTreeListS = [\n  {\n    label: 'Текст заголовка, первый уровень компонента, размер S 32 1',\n    id: '1',\n    checked: false,\n    children: [\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 1',\n        id: '1-1',\n        checked: false,\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 2',\n        id: '1-2',\n        checked: false,\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 3',\n        id: '1-3',\n        checked: false,\n        children: [\n          {\n            label: <img src={RNBLogoLight} alt={''} />,\n            id: '2-1',\n            checked: false,\n          },\n          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },\n          {\n            label: 'Текст  строки с чекбоксом, третий уровень компонента 3',\n            id: '2-3',\n            checked: false,\n            children: [\n              {\n                label:\n                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +\n                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +\n                  '    вложенности.',\n                id: '3-1',\n                checked: false,\n              },\n              {\n                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2',\n                id: '3-2',\n                checked: false,\n                children: [\n                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },\n                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n    ],\n  },\n  { label: 'Текст заголовка, первый уровень компонента, размер S 32 2', id: '2', checked: false },\n];\n\nexport const SelectTreeSTemplate = (props: SelectTreeProps) => {\n  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListS);\n\n  return (\n    <>\n      <SelectTree\n        {...props}\n        style={{ maxWidth: '768px' }}\n        list={dataList}\n        dimension=\"s\"\n        onChange={(dataList) => setDataList(dataList)}\n      />\n    </>\n  );\n};\n"}}},name:"Select Tree. Размер S"},SelectTreeNoCheckboxStory=props=>(0,jsx_runtime.jsx)(SelectTreeNoCheckboxTemplate,{...props});SelectTreeNoCheckboxStory.displayName="SelectTreeNoCheckboxStory";const SelectTreeNoCheckbox={render:SelectTreeNoCheckboxStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { SelectTree } from '@admiral-ds/react-ui';\nimport type { SelectTreeProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';\n\nimport type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';\nimport RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';\n\nconst treeViewList = [\n  {\n    label: 'Текст заголовка, первый уровень компонента, размер M 40 1',\n    id: '1',\n    icon: <FolderSolid />,\n    children: [\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 1',\n        id: '1-1',\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 2',\n        id: '1-2',\n        icon: <FolderSolid />,\n      },\n      {\n        label: 'Текст раскрывающейся строки, второй уровень компонента 3',\n        id: '1-3',\n        icon: <FolderSolid />,\n        children: [\n          {\n            label: <img src={RNBLogoLight} alt={''} />,\n            id: '2-1',\n            icon: <FolderSolid />,\n          },\n          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2', icon: <FolderSolid /> },\n          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3', icon: <FolderSolid /> },\n          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4', icon: <FolderSolid /> },\n          {\n            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',\n            id: '2-5',\n            icon: <FolderSolid />,\n            children: [\n              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', icon: <FolderSolid /> },\n              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', icon: <FolderSolid /> },\n              {\n                label:\n                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +\n                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +\n                  '    вложенности.',\n                id: '3-3',\n                icon: <FolderSolid />,\n              },\n            ],\n          },\n        ],\n      },\n    ],\n  },\n  {\n    label: 'Текст заголовка, первый уровень компонента, размер M 40 2',\n    id: '2',\n    icon: <FolderSolid />,\n  },\n];\n\nexport const SelectTreeNoCheckboxTemplate = (props: SelectTreeProps) => {\n  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(treeViewList);\n\n  return (\n    <>\n      <SelectTree\n        {...props}\n        style={{ maxWidth: '768px' }}\n        list={dataList}\n        dimension=\"m\"\n        onChange={(dataList) => setDataList(dataList)}\n        expandAll\n      />\n    </>\n  );\n};\n"}}},name:"Select Tree. Развернутый список без опции выбора"};SelectTreeM.parameters={...SelectTreeM.parameters,docs:{...SelectTreeM.parameters?.docs,source:{originalSource:"{\n  render: SelectTreeMStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SelectTreeMRaw\n      }\n    }\n  },\n  name: 'Select Tree. Размер М'\n}",...SelectTreeM.parameters?.docs?.source}}},SelectTreeS.parameters={...SelectTreeS.parameters,docs:{...SelectTreeS.parameters?.docs,source:{originalSource:"{\n  render: SelectTreeSStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SelectTreeSRaw\n      }\n    }\n  },\n  name: 'Select Tree. Размер S'\n}",...SelectTreeS.parameters?.docs?.source}}},SelectTreeNoCheckbox.parameters={...SelectTreeNoCheckbox.parameters,docs:{...SelectTreeNoCheckbox.parameters?.docs,source:{originalSource:"{\n  render: SelectTreeNoCheckboxStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SelectTreeNoCheckboxRaw\n      }\n    }\n  },\n  name: 'Select Tree. Развернутый список без опции выбора'\n}",...SelectTreeNoCheckbox.parameters?.docs?.source}}};const __namedExportsOrder=["SelectTreeM","SelectTreeS","SelectTreeNoCheckbox"]}}]);
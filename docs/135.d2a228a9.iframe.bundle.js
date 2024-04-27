"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[135],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx");const primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:var(--admiral-color-Primary_Primary60Main,",");color:var(--admiral-color-Special_StaticWhite,",");border:1px solid var(--admiral-color-Primary_Primary60Main,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}&&&:hover{background-color:var(--admiral-color-Primary_Primary70,",");border-color:var(--admiral-color-Primary_Primary70,",");}&&&:active{background-color:var(--admiral-color-Primary_Primary80,",");border-color:var(--admiral-color-Primary_Primary80,",");}&&&&[data-appearance~='disabled'],&&&:disabled{background-color:var(--admiral-color-Neutral_Neutral10,",");color:var(--admiral-color-Neutral_Neutral30,",");border-color:var(--admiral-color-Neutral_Neutral10,",");&&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Primary/Primary 70"]),(p=>p.theme.color["Primary/Primary 70"]),(p=>p.theme.color["Primary/Primary 80"]),(p=>p.theme.color["Primary/Primary 80"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"])),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:var(--admiral-color-Primary_Primary60Main,",");border:1px solid var(--admiral-color-Primary_Primary60Main,",");&&& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}&&&:hover{background-color:var(--admiral-color-Opacity_Hover,",");color:var(--admiral-color-Primary_Primary60Main,",");border-color:var(--admiral-color-Primary_Primary60Main,",");&&& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}}&&&:active{background-color:var(--admiral-color-Opacity_Press,",");color:var(--admiral-color-Primary_Primary60Main,",");border-color:var(--admiral-color-Primary_Primary60Main,",");& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:var(--admiral-color-Neutral_Neutral30,",");border-color:var(--admiral-color-Neutral_Neutral30,",");&&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Opacity/Hover"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Opacity/Press"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 30"])),ghostAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:var(--admiral-color-Primary_Primary60Main,",");border:1px solid transparent;&&& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}&&&:hover{background-color:var(--admiral-color-Opacity_Hover,",");color:var(--admiral-color-Primary_Primary60Main,",");border-color:transparent;& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}}&&&:active{background-color:var(--admiral-color-Opacity_Press,",");color:var(--admiral-color-Primary_Primary60Main,",");border-color:transparent;& *[fill^='#']{fill:var(--admiral-color-Primary_Primary60Main,",");}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:var(--admiral-color-Neutral_Neutral30,",");border-color:transparent;&&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Opacity/Hover"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Opacity/Press"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 30"])),whiteAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:var(--admiral-color-Special_StaticWhite,",");border:1px solid var(--admiral-color-Special_StaticWhite,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}&&&:hover{background-color:var( --admiral-color-Opacity_DarkStaticHover,"," );color:var(--admiral-color-Special_StaticWhite,",");border-color:var(--admiral-color-Special_StaticWhite,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}}&&&:active{background-color:var( --admiral-color-Opacity_DarkStaticPress,"," );color:var(--admiral-color-Special_StaticWhite,",");border-color:var(--admiral-color-Special_StaticWhite,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}}&&&[data-appearance~='disabled'],&&&:disabled{border-color:var( --admiral-color-Special_DarkStaticNeutral30,"," );color:var(--admiral-color-Special_DarkStaticNeutral30,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_DarkStaticNeutral30,",");}}"],(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Opacity/Dark Static Hover"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Opacity/Dark Static Press"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Special/Dark Static Neutral 30"]),(p=>p.theme.color["Special/Dark Static Neutral 30"]),(p=>p.theme.color["Special/Dark Static Neutral 30"])),dangerAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:var(--admiral-color-Error_Error60Main,",");color:var(--admiral-color-Special_StaticWhite,",");border:1px solid var(--admiral-color-Error_Error60Main,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}&&&:hover{background-color:var(--admiral-color-Error_Error70,",");border-color:var(--admiral-color-Error_Error70,",");}&&&:active{background-color:var(--admiral-color-Error_Error80,",");border-color:var(--admiral-color-Error_Error80,",");}&&&[data-appearance~='disabled'],&&&:disabled{background-color:var(--admiral-color-Neutral_Neutral10,",");color:var(--admiral-color-Neutral_Neutral30,",");border-color:var(--admiral-color-Neutral_Neutral10,",");&&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Error/Error 70"]),(p=>p.theme.color["Error/Error 70"]),(p=>p.theme.color["Error/Error 80"]),(p=>p.theme.color["Error/Error 80"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"])),successAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:var(--admiral-color-Success_Success50Main,",");color:var(--admiral-color-Special_StaticWhite,",");border:1px solid var(--admiral-color-Success_Success50Main,",");&&& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}&&&:hover{background-color:var(--admiral-color-Success_Success60,",");border-color:var(--admiral-color-Success_Success60,",");}&&&:active{background-color:var(--admiral-color-Success_Success70,",");border-color:var(--admiral-color-Success_Success70,",");}&&&[data-appearance~='disabled'],&&&:disabled{background-color:var(--admiral-color-Neutral_Neutral10,",");color:var(--admiral-color-Neutral_Neutral30,",");border-color:var(--admiral-color-Neutral_Neutral10,",");&&& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.theme.color["Success/Success 50 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Success/Success 50 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>p.theme.color["Success/Success 60"]),(p=>p.theme.color["Success/Success 60"]),(p=>p.theme.color["Success/Success 70"]),(p=>p.theme.color["Success/Success 70"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 30"])),focusVisibleStyle=(0,styled_components_browser_esm.AH)(["&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}"],(p=>p.theme.color["Primary/Primary 60 Main"])),appearanceMixin=(0,styled_components_browser_esm.AH)(["&[data-appearance~='primary']{","}&[data-appearance~='secondary']{","}&[data-appearance~='ghost']{","}&[data-appearance~='white']{","}&[data-appearance~='danger']{","}&[data-appearance~='success']{","}",""],primaryAppearanceMixin,secondaryAppearanceMixin,ghostAppearanceMixin,whiteAppearanceMixin,dangerAppearanceMixin,successAppearanceMixin,focusVisibleStyle);var typography=__webpack_require__("./src/components/Typography/typography.ts");const ButtonIconContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"dimensionMixin__ButtonIconContainer",componentId:"sc-drkg95-0"})([""]);function getHorizontalIconPadding(dimension){switch(dimension){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}(0,styled_components_browser_esm.AH)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("l")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("m")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("s")}px;`)),(0,styled_components_browser_esm.AH)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("l")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("m")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("s")}px;`));const defaultDimensionMixin=(0,styled_components_browser_esm.AH)(["padding:0;height:56px;"," ","{width:24px;height:24px;}",""],(props=>props.$displayAsSquare?"width: 56px;":"padding: 0 29px;"),ButtonIconContainer,typography.Il["Button/Button 1"]),dimensionMixin=(0,styled_components_browser_esm.AH)([""," &[data-dimension='xl']{","}&[data-dimension='l']{height:48px;","}&[data-dimension='m']{height:40px;","}&[data-dimension='s']{height:32px;"," ","{width:20px;height:20px;}","}"],defaultDimensionMixin,defaultDimensionMixin,(props=>props.$displayAsSquare?"width: 48px;":"padding: 0 21px;"),(props=>props.$displayAsSquare?"width: 40px;":"padding: 0 17px;"),(props=>props.$displayAsSquare?"width: 32px;":"padding: 0 13px;"),ButtonIconContainer,typography.Il["Button/Button 2"]);var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),animation=__webpack_require__("./src/components/skeleton/animation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonContent=styled_components_browser_esm.Ay.div.withConfig({displayName:"Button__ButtonContent",componentId:"sc-hfmi87-0"})(["vertical-align:top;display:inline-flex;gap:8px;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;height:24px;max-width:calc(100% - ","px);> *{display:inline-block;flex:0 1 auto;white-space:nowrap;}> ","{flex:0 0 auto;}& > svg{width:24px;height:24px;}[data-dimension='s'] &{height:20px;& > svg{width:20px;height:20px;}}"],(p=>p.$addPadding),ButtonIconContainer),StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y).withConfig({displayName:"Button__StyledSpinner",componentId:"sc-hfmi87-1"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),AdditionalPadding=styled_components_browser_esm.Ay.div.withConfig({displayName:"Button__AdditionalPadding",componentId:"sc-hfmi87-2"})(["display:inline-block;width:2px;"]),Button=(0,react.forwardRef)((({appearance="primary",dimension="xl",type="button",loading=!1,skeleton=!1,iconStart,iconEnd,icon,iconPlace="left",children,buttonCssMixin,displayAsDisabled,displayAsSquare,...props},ref)=>{const spinnerDimension="s"===dimension?"ms":"m",spinnerInverse="secondary"!==appearance&&"ghost"!==appearance,hasIconStart=!!iconStart||!!icon&&"left"===iconPlace,hasIconEnd=!!iconEnd||!!icon&&"right"===iconPlace,additionalPadding=(displayAsSquare||hasIconStart?0:2)+(displayAsSquare||hasIconEnd?0:2);return(0,jsx_runtime.jsxs)(StyledButton,{ref,$appearance:appearance,$dimension:dimension,type,$loading:loading,$skeleton:skeleton,$buttonCssMixin:buttonCssMixin,$displayAsSquare:displayAsSquare,$displayAsDisabled:displayAsDisabled,...props,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:spinnerDimension,inverse:spinnerInverse}),!displayAsSquare&&!hasIconStart&&(0,jsx_runtime.jsx)(AdditionalPadding,{}),(0,jsx_runtime.jsxs)(ButtonContent,{$addPadding:additionalPadding,children:[hasIconStart?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconStart||icon}):null,react.Children.toArray(children).map(((child,index)=>"string"==typeof child?(0,jsx_runtime.jsx)("div",{children:child},child+index):child)),hasIconEnd?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconEnd||icon}):null]}),!displayAsSquare&&!hasIconEnd&&(0,jsx_runtime.jsx)(AdditionalPadding,{})]})})),StyledButton=styled_components_browser_esm.Ay.button.attrs((props=>({"data-dimension":props.$dimension,"data-appearance":[props.$appearance,props.$displayAsDisabled?"disabled":void 0].filter((val=>void 0!==val)).join(" ")}))).withConfig({displayName:"Button__StyledButton",componentId:"sc-hfmi87-3"})(["position:relative;box-sizing:border-box;display:inline-block;white-space:nowrap;border:none;border-radius:",";appearance:none;vertical-align:middle;cursor:",";",";",";",";",";","{","}"],(p=>p.$skeleton?0:`var(--admiral-border-radius-Medium, ${(0,borderRadius.VM)(p.theme.shape)})`),(p=>p.$loading||p.$skeleton?"default":p.disabled?"not-allowed":"pointer"),appearanceMixin,dimensionMixin,(p=>p.$buttonCssMixin),(({$skeleton})=>$skeleton&&animation.h),ButtonContent,(p=>p.$loading||p.$skeleton?"visibility: hidden;":""));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"white"'},{value:'"ghost"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"@deprecated Используйте iconStart или iconEnd\nИконка кнопки",name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:{value:"left"},description:"@deprecated Используйте iconStart или iconEnd\nРасположение иконки кнопки",name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/manager.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>manager});var scrollbarUtil=__webpack_require__("./src/components/common/dom/scrollbarUtil.ts");const ownerDocument=node=>node&&node.ownerDocument||document,ownerWindow=node=>ownerDocument(node).defaultView||window,getPaddingRight=element=>parseInt(ownerWindow(element).getComputedStyle(element).paddingRight,10)||0,restoreContainer=wrapper=>{const container=wrapper,initialStyle=[];if((container=>{const doc=ownerDocument(container);return doc.body===container?ownerWindow(container).innerWidth>doc.documentElement.clientWidth:container.scrollHeight>container.clientHeight})(container)){initialStyle.push({value:container.style.paddingRight,property:"padding-right",el:container}),container.style.paddingRight=`${getPaddingRight(container)+(0,scrollbarUtil.M)()}px`;const fixedElements=ownerDocument(container).querySelectorAll('*[style="position:fixed"]');[].forEach.call(fixedElements,(element=>{initialStyle.push({value:element.style.paddingRight,property:"padding-right",el:element}),element.style.paddingRight=`${getPaddingRight(element)+(0,scrollbarUtil.M)()}px`}))}const parent=container.parentElement,containerWindow=ownerWindow(container),scrollContainer="HTML"===parent?.nodeName&&"scroll"===containerWindow.getComputedStyle(parent).overflowY?parent:container;initialStyle.push({value:scrollContainer.style.overflow,property:"overflow",el:scrollContainer},{value:scrollContainer.style.overflowX,property:"overflow-x",el:scrollContainer},{value:scrollContainer.style.overflowY,property:"overflow-y",el:scrollContainer}),scrollContainer.style.overflow="hidden";return()=>{initialStyle.forEach((({value,el,property})=>{value?el.style.setProperty(property,value):el.style.removeProperty(property)}))}};function findIndexOf(items,callback){let idx=-1;return items.some(((item,index)=>!!callback(item)&&(idx=index,!0))),idx}const manager=new class ModalManager{constructor(){this.modals=[],this.containers=[]}add(modal,container){let modalIndex=this.modals.indexOf(modal);if(-1!==modalIndex)return modalIndex;modalIndex=this.modals.length,this.modals.push(modal);const containerIndex=findIndexOf(this.containers,(item=>item.container===container));return-1!==containerIndex?(this.containers[containerIndex].modals.push(modal),modalIndex):(this.containers.push({modals:[modal],container,restore:null}),modalIndex)}mount(modal){const containerIndex=findIndexOf(this.containers,(item=>-1!==item.modals.indexOf(modal))),containerInfo=this.containers[containerIndex];containerInfo.restore||(containerInfo.restore=restoreContainer(containerInfo.container))}remove(modal){const modalIndex=this.modals.indexOf(modal);if(-1===modalIndex)return modalIndex;const containerIndex=findIndexOf(this.containers,(item=>-1!==item.modals.indexOf(modal))),containerInfo=this.containers[containerIndex];return containerInfo.modals.splice(containerInfo.modals.indexOf(modal),1),this.modals.splice(modalIndex,1),0===containerInfo.modals.length&&(containerInfo.restore&&containerInfo.restore(),this.containers.splice(containerIndex,1)),modalIndex}}},"./src/components/common/dom/resizePaddings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizePaddings(node){const leftPadding=function getComputedStyleProperty(node,propertyName){return node.computedStyleMap?node.computedStyleMap().get(propertyName)?.value:parseInt(getComputedStyle(node).getPropertyValue(propertyName),10)}(node,"padding-inline-start")??0,paddingValue=leftPadding-(node.offsetWidth-node.clientWidth);node.style.paddingRight=`${paddingValue>4?paddingValue:4}px`}__webpack_require__.d(__webpack_exports__,{D:()=>resizePaddings})},"./src/components/common/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function debounce(f,delay){let timer=setTimeout((()=>{}));return function(...args){clearTimeout(timer),timer=setTimeout((()=>f.apply(args)),delay)}}__webpack_require__.d(__webpack_exports__,{s:()=>debounce})},"./src/components/common/utils/getKeyboardFocusableElements.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getKeyboardFocusableElements(element=document){return[...element.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter((el=>!el.hasAttribute("disabled")))}__webpack_require__.d(__webpack_exports__,{$:()=>getKeyboardFocusableElements})}}]);
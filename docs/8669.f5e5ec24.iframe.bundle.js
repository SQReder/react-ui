"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8669],{"./node_modules/@admiral-ds/icons/build/system/EmailOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEmailOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgEmailOutline=function SvgEmailOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M6 5C4.33 5 3 6.34 3 8v8c0 1.66 1.33 3 3 3h12c1.66 0 3-1.34 3-3V8c0-1.66-1.36-3-3-3zm13.7 3.94-4.35 3.28 2.57 1.93c.28.22.34.62.13.91-.22.29-.63.35-.91.13l-2.87-2.16-.18.13c-1.3.98-3.09.98-4.39 0l-.18-.13-2.87 2.16c-.28.22-.69.16-.91-.13a.653.653 0 0 1 .13-.91l2.57-1.93-4.15-3.13V16c0 .94.77 1.7 1.71 1.7h12c.93 0 1.7-.76 1.7-1.7zM18 6.29c.72 0 1.34.46 1.59 1.11l-6.28 4.73c-.84.63-1.99.63-2.83 0L4.36 7.52c.21-.71.86-1.23 1.64-1.23z"})))};__webpack_require__.p},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["background:",";"],(({$appearance,theme})=>{switch($appearance){case"info":return`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${theme.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${theme.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${theme.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${theme.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Neutral_Neutral10, ${theme.color["Neutral/Neutral 10"]})`}})),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["color:",";"],(({$appearance,theme})=>{switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${theme.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${theme.color["Neutral/Neutral 90"]})`}})),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"Badge__BadgeComponent",componentId:"sc-yfzdzs-0"})(["position:relative;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;padding:",";height:",";border-radius:",";"," "," "," user-select:none;"],(({$dimension})=>"s"===$dimension?"0 5px":"0 6px"),(({$dimension})=>"s"===$dimension?"16px":"20px"),(({$dimension})=>"s"===$dimension?"8px":"10px"),(({$dimension})=>"s"===$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]),background,color),Badge=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({children,dimension="m",appearance="light",locale,...props},ref)=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=locale?.amountAriaLabel||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BadgeComponent,{ref,$dimension:dimension,$appearance:appearance,"aria-label":`${amountText} ${children}`,...props,children})}));Badge.displayName="Badge";const ButtonBadge=({appearance="primary",disabled=!1,...props})=>{const isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":return disabled?"lightDisable":"info";case"tertiary":return disabled?"whiteDisable":"white";default:return disabled?"whiteDisable":"whiteBlue"}}(appearance,disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge,{...props,dimension:"s",appearance:badgeAppearance}):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge).withConfig({displayName:"Badge__SegmentedBadge",componentId:"sc-yfzdzs-1"})(["&:is(input:checked + div *){background:",";color:",";}"],(p=>p.$disabled?`var(--admiral-color-Neutral_Neutral00, ${p.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${p.theme.color["Special/Static White"]})`),(p=>p.$disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${p.theme.color["Primary/Primary 60 Main"]})`)),SegmentedControlBadge=({appearance="outlined",disabled=!1,...props})=>{const badgeAppearance=disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SegmentedBadge,{...props,dimension:"s",appearance:badgeAppearance})};SegmentedControlBadge.displayName="SegmentedControlBadge";try{BadgeComponent.displayName="Badge",BadgeComponent.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BadgeDot/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>BadgeDot});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",""],(({theme,$appearance})=>{switch($appearance){case"info":return`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${theme.color["Success/Success 50 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${theme.color["Warning/Warning 50 Main"]})`;case"attention":return`var(--admiral-color-Attention_Attention50Main, ${theme.color["Attention/Attention 50 Main"]})`;default:return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`}})),getSize=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",""],(({$dimension})=>{switch($dimension){case"l":return 12;case"s":return 8;case"xs":return 6;default:return 10}})),Dot=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"BadgeDot__Dot",componentId:"sc-iek9ap-0"})(["position:relative;box-sizing:border-box;width:","px;height:","px;background:",";border-radius:50%;"],getSize,getSize,getBackground),BadgeDot=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({dimension="m",appearance="neutral",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{ref,$dimension:dimension,$appearance:appearance,...props})));BadgeDot.displayName="BadgeDot";try{BadgeDot.displayName="BadgeDot",BadgeDot.__docgenInfo={description:"",displayName:"BadgeDot",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"neutral"'},{value:'"warning"'},{value:'"info"'},{value:'"attention"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BadgeDot/index.tsx#BadgeDot"]={docgenInfo:BadgeDot.__docgenInfo,name:"BadgeDot",path:"src/components/BadgeDot/index.tsx#BadgeDot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>FloatingButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FloatingButton/style.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FloatingButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({type="button",appearance="primary",dimension="m",badge={},mobile=!1,disabled=!1,tooltip,tooltipPosition="left",children,...props},ref)=>{const displayBadge=void 0!==badge.count&&!badge.dot&&!disabled,displayDot=badge.dot&&!disabled,renderContent=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.iE,{$dimension:dimension,$appearance:appearance,$disabled:disabled,children}),displayBadge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.Ex,{dimension:"xl"==dimension?"m":"s",appearance:badge.appearance??"info",children:badge.count}),displayDot&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.rk,{dimension:"xl"==dimension?"l":"m",appearance:badge.appearance??"info"})]});return tooltip?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.bL,{ref,type,disabled,$dimension:dimension,$mobile:mobile,renderContent:()=>tooltip,tooltipPosition,...props,children:renderContent()}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.QA,{ref,type,disabled,$dimension:dimension,$mobile:mobile,...props,children:renderContent()})}));FloatingButton.displayName="FloatingButton";try{FloatingButton.displayName="FloatingButton",FloatingButton.__docgenInfo={description:"",displayName:"FloatingButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},badge:{defaultValue:{value:"{}"},description:"Использование компонента вместе с Badge, где параметр badge - это объект с настройками для отображения бейджа",name:"badge",required:!1,type:{name:"BadgeProps"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Текст тултипа. Если параметр tooltip не задан, то тултип не отображается",name:"tooltip",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:{value:"left"},description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/index.tsx#FloatingButton"]={docgenInfo:FloatingButton.__docgenInfo,name:"FloatingButton",path:"src/components/FloatingButton/index.tsx#FloatingButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingButton/style.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,QA:()=>FloatingButtonWrapper,bL:()=>FloatingButtonWrapperWithTooltip,iE:()=>FloatingButtonContent,rk:()=>BadgeDot,th:()=>GroupWrapper,xq:()=>MenuWrapper,xt:()=>TRANSITION_DURATION});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Badge/index.tsx"),_src_components_BadgeDot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/BadgeDot/index.tsx"),_src_components_TooltipHOC__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TooltipHOC/index.tsx"),_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts");const focusVisibleStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}"],(p=>p.theme.color["Primary/Primary 60 Main"])),primaryAppearanceMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["background-color:",";& *[fill^='#']{fill:",";}",""],(({theme,$disabled})=>$disabled?`var(--admiral-color-Neutral_Neutral10, ${theme.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`),(({theme,$disabled})=>$disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`),(({theme,$disabled})=>$disabled?"":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["&:hover{background-color:var(--admiral-color-Primary_Primary70,",");}&:active{background-color:var(--admiral-color-Primary_Primary80,",");}"],theme.color["Primary/Primary 70"],theme.color["Primary/Primary 80"]))),secondaryAppearanceMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["background-color:var(--admiral-color-Special_ElevatedBG,",");& *[fill^='#']{fill:",";}",""],(p=>p.theme.color["Special/Elevated BG"]),(({theme,$disabled})=>$disabled?`var(--admiral-color-Neutral_Neutral30, ${theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`),(({theme,$disabled})=>$disabled?"":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["&:hover{background-color:var(--admiral-color-Opacity_Hover,",");}&:active{background-color:var(--admiral-color-Opacity_Press,",");}"],theme.color["Opacity/Hover"],theme.color["Opacity/Press"]))),dimensionMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["width:","px;height:","px;.floating_button_menu[data-dimension='xl'] &&{width:56px;height:56px;margin-bottom:16px;}.floating_button_menu[data-dimension='m'] &&{width:40px;height:40px;margin-bottom:12px;}"],(p=>"xl"==p.$dimension?56:40),(p=>"xl"==p.$dimension?56:40)),FloatingButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.button.withConfig({displayName:"style__FloatingButtonWrapper",componentId:"sc-1qku3wz-0"})(["position:fixed;inset-inline-end:","px;inset-block-end:","px;display:block;border:none;border-radius:50%;appearance:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;margin:0;padding:0;",";cursor:",";box-shadow:var(--admiral-box-shadow-Shadow08,",");",""],(p=>p.$mobile?16:28),(p=>p.$mobile?16:28),dimensionMixin,(p=>p.disabled?"not-allowed":"pointer"),(p=>(0,_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_1__.C)(p.theme.shadow["Shadow 08"])),focusVisibleStyle),FloatingButtonWrapperWithTooltip=(0,_src_components_TooltipHOC__WEBPACK_IMPORTED_MODULE_2__.K)(FloatingButtonWrapper),FloatingButtonContent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({displayName:"style__FloatingButtonContent",componentId:"sc-1qku3wz-1"})(["display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:100%;height:100%;margin:0;padding:","px;border-radius:50%;"," .floating_button_menu &&{","}& > svg{flex:0 0 auto;height:24px;width:24px;}"],(p=>"m"==p.$dimension?8:16),(p=>"primary"==p.$appearance?primaryAppearanceMixin:secondaryAppearanceMixin),secondaryAppearanceMixin),badgeMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["position:absolute;border:1px solid var(--admiral-color-Neutral_Neutral00,",");"],(p=>p.theme.color["Neutral/Neutral 00"])),Badge=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(_src_components_Badge__WEBPACK_IMPORTED_MODULE_3__.Ex).withConfig({displayName:"style__Badge",componentId:"sc-1qku3wz-2"})(["top:-3px;inset-inline-end:-3px;"," padding:",";"],badgeMixin,(({dimension})=>"s"===dimension?"0 4px":"0 5px")),BadgeDot=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(_src_components_BadgeDot__WEBPACK_IMPORTED_MODULE_4__.r).withConfig({displayName:"style__BadgeDot",componentId:"sc-1qku3wz-3"})(["top:","px;inset-inline-end:","px;",""],(p=>"m"==p.dimension?1:3),(p=>"m"==p.dimension?1:3),badgeMixin),TRANSITION_DURATION=200,openTransitionMixin=`\n  ${TRANSITION_DURATION}ms cubic-bezier(0, 0, 0.2, 1) 0ms\n`,closeTransitionMixin=`\n  ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 1, 1) 0ms\n`,GroupWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({displayName:"style__GroupWrapper",componentId:"sc-1qku3wz-4"})(["position:fixed;inset-inline-end:","px;inset-block-end:","px;box-sizing:border-box;width:","px;height:auto;& > div[data-visible='false']{margin-bottom:","px;opacity:0;transition:margin-bottom ",",opacity ",";}& > div[data-visible='true']{margin-bottom:","px;opacity:1;transition:margin-bottom ",",opacity ",";}& button{position:relative;inset-block-end:auto;inset-inline-end:auto;}",""],(p=>p.$mobile?16:28),(p=>p.$mobile?16:28),(p=>"m"==p.$dimension?40:56),(p=>"m"==p.$dimension?-20:-28),closeTransitionMixin,closeTransitionMixin,(p=>"m"==p.$dimension?12:16),openTransitionMixin,openTransitionMixin,(p=>p.$dropContainerCssMixin||"")),MenuWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.withConfig({displayName:"style__MenuWrapper",componentId:"sc-1qku3wz-5"})(["position:relative;display:block;box-sizing:border-box;&& > button:last-child{margin:0px;}"]);try{FloatingButtonWrapper.displayName="FloatingButtonWrapper",FloatingButtonWrapper.__docgenInfo={description:"",displayName:"FloatingButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#FloatingButtonWrapper"]={docgenInfo:FloatingButtonWrapper.__docgenInfo,name:"FloatingButtonWrapper",path:"src/components/FloatingButton/style.tsx#FloatingButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}try{FloatingButtonWrapperWithTooltip.displayName="FloatingButtonWrapperWithTooltip",FloatingButtonWrapperWithTooltip.__docgenInfo={description:"",displayName:"FloatingButtonWrapperWithTooltip",props:{renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},container:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.\nВзамен используйте rootRef пропсу на DropdownProvider\n\nКонтейнер, в котором будет отрисован тултип через React.createPortal.\nПо умолчанию тултип отрисовывается в document.body",name:"container",required:!1,type:{name:"undefined"}},withDelay:{defaultValue:null,description:"Отобразить тултип с задержкой в 1.5 секунды",name:"withDelay",required:!1,type:{name:"boolean"}},tooltipRef:{defaultValue:null,description:"Ссылка на тултип",name:"tooltipRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},$dimension:{defaultValue:null,description:"",name:"$dimension",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"m"'},{value:'"xl"'}]}},$mobile:{defaultValue:null,description:"",name:"$mobile",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#FloatingButtonWrapperWithTooltip"]={docgenInfo:FloatingButtonWrapperWithTooltip.__docgenInfo,name:"FloatingButtonWrapperWithTooltip",path:"src/components/FloatingButton/style.tsx#FloatingButtonWrapperWithTooltip"})}catch(__react_docgen_typescript_loader_error){}try{FloatingButtonContent.displayName="FloatingButtonContent",FloatingButtonContent.__docgenInfo={description:"",displayName:"FloatingButtonContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#FloatingButtonContent"]={docgenInfo:FloatingButtonContent.__docgenInfo,name:"FloatingButtonContent",path:"src/components/FloatingButton/style.tsx#FloatingButtonContent"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/FloatingButton/style.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{BadgeDot.displayName="BadgeDot",BadgeDot.__docgenInfo={description:"",displayName:"BadgeDot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#BadgeDot"]={docgenInfo:BadgeDot.__docgenInfo,name:"BadgeDot",path:"src/components/FloatingButton/style.tsx#BadgeDot"})}catch(__react_docgen_typescript_loader_error){}try{GroupWrapper.displayName="GroupWrapper",GroupWrapper.__docgenInfo={description:"",displayName:"GroupWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#GroupWrapper"]={docgenInfo:GroupWrapper.__docgenInfo,name:"GroupWrapper",path:"src/components/FloatingButton/style.tsx#GroupWrapper"})}catch(__react_docgen_typescript_loader_error){}try{MenuWrapper.displayName="MenuWrapper",MenuWrapper.__docgenInfo={description:"",displayName:"MenuWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingButton/style.tsx#MenuWrapper"]={docgenInfo:MenuWrapper.__docgenInfo,name:"MenuWrapper",path:"src/components/FloatingButton/style.tsx#MenuWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",";pointer-events:none;"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig({displayName:"T__Tspan",componentId:"sc-1bd4slr-0"})(["color:",";",";"," ",""],(({$color,theme,$skeleton})=>{const cssVar=`--admiral-color-${$color?.replace("/","_").replaceAll(" ","")}`;return $skeleton?"transparent":$color?theme.color[$color]?`var(${cssVar}, ${theme.color[$color]})`:$color:`var(--admiral-color-Neutral_Neutral90, ${theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.jn]})`}),(p=>p.theme.typography[p.$font]),(p=>p.$cssMixin?p.$cssMixin:""),(p=>p.$skeleton&&skeletonMixin)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({font,color,cssMixin,skeleton,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tspan,{ref,...props,$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton})));T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 60"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 60 Main"'},{value:'"Primary/Primary 70"'},{value:'"Primary/Primary 80"'},{value:'"Special/Static White"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 60 Main"'},{value:'"Error/Error 70"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 50 Main"'},{value:'"Success/Success 60"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TooltipHoc(Component){const WrappedComponent=props=>{const{forwardedRef,renderContent,container,withDelay,tooltipRef,tooltipPosition,...wrappedCompProps}=props,emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[visible,setVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[timer,setTimer]=react__WEBPACK_IMPORTED_MODULE_0__.useState();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{function show(){setTimer(window.setTimeout((()=>setVisible(!0)),withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.w:0))}function hide(){clearTimeout(timer),setVisible(!1)}if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),()=>{timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}}),[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{...wrappedCompProps,ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(forwardedRef,anchorElementRef,setNode)}),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.m,{targetElement:anchorElementRef.current,renderContent,container,tooltipPosition,ref:tooltipRef})]})};return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrappedComponent,{forwardedRef:ref,...props})))}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});const DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
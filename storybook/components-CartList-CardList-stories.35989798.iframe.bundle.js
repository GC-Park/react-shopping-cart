"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[974],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:function(){return _taggedTemplateLiteral}})},"./src/components/CartList/CardList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"CartList",component:__webpack_require__("./src/components/CartList/index.tsx").Z};__webpack_exports__.default=meta;var Default={args:{}};Default.parameters=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/CartList/CartItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CartList_CartItem}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),BucketCounter=__webpack_require__("./src/components/common/BucketCounter/index.tsx"),CheckBox=__webpack_require__("./src/components/common/CheckBox/index.tsx"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),cartAtom=__webpack_require__("./src/recoil/atoms/cartAtom.ts"),checkBoxAtom=__webpack_require__("./src/recoil/atoms/checkBoxAtom.ts"),fetchApi=__webpack_require__("./src/utils/fetchApi.ts"),common=__webpack_require__("./src/constants/common.ts"),useAtomLocalStorage=__webpack_require__("./src/hooks/useAtomLocalStorage.ts"),hooks_useCartItem=function useCartItem(id){var _useRecoilState=(0,es.FV)(cartAtom.c),_useRecoilState2=(0,slicedToArray.Z)(_useRecoilState,2),value=_useRecoilState2[0],setData=_useRecoilState2[1],_useAtomLocalStorage=(0,useAtomLocalStorage.Z)(checkBoxAtom.b,"checkBox"),_useAtomLocalStorage2=(0,slicedToArray.Z)(_useAtomLocalStorage,2),checkBox=_useAtomLocalStorage2[0],setCheckBox=_useAtomLocalStorage2[1],_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),check=_useState2[0],setCheck=_useState2[1],deleteItem=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var updatedId,updatedCart;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return updatedId=[],value.forEach((function(product){product.id!==id&&updatedId.push(product.id)})),updatedCart=value.filter((function(product){return checkBox.includes(product.id)})),setCheckBox(updatedId),setData(updatedCart),_context.next=7,(0,fetchApi.Z)("".concat(common.fh,"/").concat(id),{method:"delete",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"}});case 7:case"end":return _context.stop()}}),_callee)})));return function deleteItem(){return _ref.apply(this,arguments)}}();return(0,react.useEffect)((function(){checkBox.includes(id)?setCheck(!0):setCheck(!1)}),[checkBox,id]),{check:check,checkBoxOnChange:function checkBoxOnChange(e){if(e.target.checked)setCheckBox([].concat((0,toConsumableArray.Z)(checkBox),[id]));else{var newCheckBox=checkBox.filter((function(checkBoxId){return checkBoxId!==id}));setCheckBox(newCheckBox)}},deleteItem:deleteItem}},assets_images=__webpack_require__("./src/assets/images.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartItem=function CartItem(_ref){var id=_ref.id,name=_ref.name,imageUrl=_ref.imageUrl,quantity=_ref.quantity,price=_ref.price,refetch=_ref.refetch,_useCartItem=hooks_useCartItem(id),check=_useCartItem.check,checkBoxOnChange=_useCartItem.checkBoxOnChange,deleteItem=_useCartItem.deleteItem;return(0,jsx_runtime.jsxs)(CartItemWrapper,{children:[(0,jsx_runtime.jsx)(CheckBox.Z,{onChange:checkBoxOnChange,checked:check}),(0,jsx_runtime.jsx)(CartItemImg,{src:imageUrl,alt:"상품 사진"}),(0,jsx_runtime.jsx)(CartItemName,{children:name}),(0,jsx_runtime.jsxs)(CartItemInformationWrapper,{children:[(0,jsx_runtime.jsx)(RemoveCardItemImg,{src:assets_images.ZP,onClick:function removeItem(){deleteItem(),refetch()}}),(0,jsx_runtime.jsx)(BucketCounter.Z,{id:id,quantity:quantity,kind:"big",refetch:refetch}),(0,jsx_runtime.jsx)(CartItemMoney,{children:(price*quantity).toLocaleString("ko-KR")})]})]})},CartItemWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: flex-start;\n\n  width: 100%;\n  margin: 23px 0;\n"]))),CartItemImg=styled_components_browser_esm.zo.img(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 144px;\n  height: 147px;\n\n  margin-left: 15px;\n\n  object-fit: cover;\n\n  background: rgba(0, 0, 0, 0.05);\n\n  @media (max-width: 480px) {\n    width: 90px;\n    height: 90px;\n  }\n"]))),CartItemName=styled_components_browser_esm.zo.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 20px;\n  line-height: 24px;\n\n  margin-left: 20px;\n\n  letter-spacing: 0.5px;\n\n  color: #333333;\n\n  @media (max-width: 480px) {\n    font-size: 16px;\n  }\n"]))),CartItemInformationWrapper=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  flex-grow: 1;\n\n  height: 147px;\n"]))),RemoveCardItemImg=styled_components_browser_esm.zo.img(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  width: 24px;\n  height: 24px;\n\n  cursor: pointer;\n"]))),CartItemMoney=styled_components_browser_esm.zo.span(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  font-size: 16px;\n  line-height: 24px;\n\n  letter-spacing: 0.5px;\n\n  color: #333333;\n"]))),CartList_CartItem=CartItem;try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},refetch:{defaultValue:null,description:"",name:"refetch",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CartList/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/components/CartList/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CartList/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_CartList}});var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/common/Button/index.tsx"),CheckBox=__webpack_require__("./src/components/common/CheckBox/index.tsx"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),cartAtom=__webpack_require__("./src/recoil/atoms/cartAtom.ts"),checkBoxAtom=__webpack_require__("./src/recoil/atoms/checkBoxAtom.ts"),fetchApi=__webpack_require__("./src/utils/fetchApi.ts"),common=__webpack_require__("./src/constants/common.ts"),useAtomLocalStorage=__webpack_require__("./src/hooks/useAtomLocalStorage.ts"),useGetFetch=__webpack_require__("./src/hooks/useGetFetch.ts"),hooks_useCartList=function useCartList(){var _useGetFetch=(0,useGetFetch.Z)("/cart-items",{method:"get",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"}}),data=_useGetFetch.data,refetch=_useGetFetch.refetch,setData=(0,es.Zl)(cartAtom.c),_useAtomLocalStorage=(0,useAtomLocalStorage.Z)(checkBoxAtom.b,"checkBox"),_useAtomLocalStorage2=(0,slicedToArray.Z)(_useAtomLocalStorage,2),checkBox=_useAtomLocalStorage2[0],setCheckBox=_useAtomLocalStorage2[1],_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),check=_useState2[0],setCheck=_useState2[1];(0,react.useEffect)((function(){data&&setCheck(checkBox.length===data.length)}),[checkBox]);return{data:data,checkBoxTotalIdOnChange:function checkBoxTotalIdOnChange(e){e.target.checked?setCheck(!0):(setCheckBox([]),setCheck(!1),refetch())},checkBox:checkBox,removeCartOnClick:function removeCartOnClick(){if(data){var removedCart=data.filter((function(product){return checkBox.includes(product.id)})),notRemoveCart=data.filter((function(product){return!checkBox.includes(product.id)}));setData(notRemoveCart),removedCart.forEach(function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(product){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,fetchApi.Z)("".concat(common.fh,"/").concat(product.id),{method:"delete",headers:{Authorization:"Basic YUBhLmNvbToxMjM0","Content-Type":"application/json"}});case 2:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}());var removedCheckBox=[];data.forEach((function(data){checkBox.includes(data.id)||removedCheckBox.push(data.id)})),setCheckBox(removedCheckBox),refetch()}},check:check,refetch:refetch}},CartItem=__webpack_require__("./src/components/CartList/CartItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartListWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 55%;\n  border-top: 4px solid #aaaaaa;\n\n  @media (max-width: 1023px) {\n    width: 100%;\n  }\n"]))),CartPageBottom=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 50px;\n"]))),CartSelectorText=styled_components_browser_esm.zo.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n\n  letter-spacing: 0.5px;\n\n  margin: 0 13px;\n\n  color: #333333;\n"]))),components_CartList=function CartList(){var _useCartList=hooks_useCartList(),data=_useCartList.data,checkBoxTotalIdOnChange=_useCartList.checkBoxTotalIdOnChange,checkBox=_useCartList.checkBox,removeCartOnClick=_useCartList.removeCartOnClick,check=_useCartList.check,refetch=_useCartList.refetch;return data?(0,jsx_runtime.jsxs)(CartListWrapper,{children:[data&&data.map((function(product,idx){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(CartItem.Z,{id:product.id,name:product.product.name,imageUrl:product.product.imageUrl,quantity:product.quantity,price:product.product.price,refetch:refetch},product.id)]},idx)})),(0,jsx_runtime.jsxs)(CartPageBottom,{children:[(0,jsx_runtime.jsx)(CheckBox.Z,{onChange:checkBoxTotalIdOnChange,checked:check}),(0,jsx_runtime.jsxs)(CartSelectorText,{children:["전체선택(",checkBox.length,"/",data.length,")"]}),(0,jsx_runtime.jsx)(Button.Z,{text:"선택삭제",onClick:removeCartOnClick,width:"100px",height:"35px",fontSize:"16px",background:"white",color:"#333333"})]})]}):null}},"./src/components/common/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["text","onClick"],Button=function Button(_ref){var text=_ref.text,onClick=_ref.onClick,rest=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonWrapper,(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},rest),{},{onClick:onClick,children:text}))},ButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  width: ",";\n  height: ",";\n\n  font-size: ",";\n\n  background: ",";\n  color: ",";\n\n  border: 1px solid #bbbbbb;\n"])),(function(_ref2){var width=_ref2.width;return null!=width?width:"388px"}),(function(_ref3){var height=_ref3.height;return null!=height?height:"73px"}),(function(_ref4){var fontSize=_ref4.fontSize;return null!=fontSize?fontSize:"24px"}),(function(_ref5){var background=_ref5.background;return null!=background?background:"#333333"}),(function(_ref6){var color=_ref6.color;return null!=color?color:"#FFFFFF"}));__webpack_exports__.Z=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/CheckBox/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["checked"],CheckBox=function CheckBox(_ref){var checked=_ref.checked,rest=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckBoxInput,(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({type:"checkbox"},rest),{},{checked:checked}))},CheckBoxInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.input(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  width: 28px;\n  height: 28px;\n\n  background: #ffffff;\n  border: 1px solid #22a6a2;\n  border-radius: 2px;\n"])));__webpack_exports__.Z=CheckBox;try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"",displayName:"CheckBox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/CheckBox/index.tsx#CheckBox"]={docgenInfo:CheckBox.__docgenInfo,name:"CheckBox",path:"src/components/common/CheckBox/index.tsx#CheckBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useGetFetch.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useGetFetch(url,options){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),_useState2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState3,2),data=_useState4[0],setData=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState5,2),error=_useState6[0],setError=_useState6[1],fetchData=function(){var _ref=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().mark((function _callee(){var response,_data;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,setIsLoading(!0),_context.next=4,fetch(url,options);case 4:if((response=_context.sent).ok){_context.next=7;break}throw new Error("api 요청을 실패했습니다! status: ".concat(response.status));case 7:return _context.next=9,response.json();case 9:_data=_context.sent,setIsLoading(!1),setData(_data),_context.next=18;break;case 14:_context.prev=14,_context.t0=_context.catch(0),setData(null),setError(_context.t0);case 18:case"end":return _context.stop()}}),_callee,null,[[0,14]])})));return function fetchData(){return _ref.apply(this,arguments)}}();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){fetchData()}),[]),{isLoading:isLoading,data:data,error:error,refetch:fetchData}}}}]);
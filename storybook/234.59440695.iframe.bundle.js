"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[234],{"./src/assets/images.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{SX:function(){return bottom_arrow},Lb:function(){return bucket_button},ZP:function(){return cart_remove_button},Z7:function(){return bucket_logo},qC:function(){return top_arrow}});__webpack_require__("./node_modules/react/index.js");var bucket_logo=__webpack_require__.p+"static/media/bucket-logo.050edc0f52de951296380b2c4f5ee342.svg";var bucket_button=__webpack_require__.p+"static/media/bucket-button.9fa92ae3af8352855e7e8d01fcf7cfce.svg";var top_arrow=__webpack_require__.p+"static/media/top-arrow.db5392fba9754cd133f89e4c6acb18b3.svg";var bottom_arrow=__webpack_require__.p+"static/media/bottom-arrow.e45e2c583242b9dae6bc70d2d2b2c988.svg";var cart_remove_button=__webpack_require__.p+"static/media/cart-remove-button.881c7ba9a793e5e76428d79f04080434.svg"},"./src/components/common/BucketCounter/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return common_BucketCounter}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),showInputErrorMessage=function showInputErrorMessage(isError,inputElement,errorMessage){isError?(inputElement.setCustomValidity(errorMessage),inputElement.reportValidity()):inputElement.setCustomValidity("")},useControlCart=__webpack_require__("./src/hooks/useControlCart.ts"),hooks_useBucketCount=function useBucketCount(initialValue,_ref){var errorMessage=_ref.errorMessage,maximumCount=_ref.maximumCount,id=_ref.id,maximumWriteInput=10*maximumCount,_useControlCart=(0,useControlCart.Z)(),removeProductFromCart=_useControlCart.removeProductFromCart,updateQuantityOfCartItem=_useControlCart.updateQuantityOfCartItem,_useState=(0,react.useState)(initialValue),_useState2=(0,slicedToArray.Z)(_useState,2),bucketCount=_useState2[0],setBucketCount=_useState2[1],countRef=(0,react.useRef)(null),isCountError=(0,react.useCallback)((function(count){return count>maximumCount}),[maximumCount]),showCounterErrorMessage=(0,react.useCallback)((function(){countRef.current&&showInputErrorMessage(isCountError(bucketCount),countRef.current,errorMessage)}),[bucketCount,errorMessage,isCountError]);return(0,react.useEffect)((function(){showCounterErrorMessage()}),[bucketCount,showCounterErrorMessage]),{onBlur:function onBlur(event){var _relatedTarget$parent,relatedTarget=event.relatedTarget,target=event.target;(null==relatedTarget||null===(_relatedTarget$parent=relatedTarget.parentElement)||void 0===_relatedTarget$parent?void 0:_relatedTarget$parent.parentElement)!==target.parentElement&&0===bucketCount&&removeProductFromCart(id)},bucketCount:bucketCount,onChange:function onChange(event){var value=event.target.value,count=Number(value);isNaN(count)||(showInputErrorMessage(isCountError(count),event.target,errorMessage),count>=maximumWriteInput||(setBucketCount(count),updateQuantityOfCartItem(id,count)))},increaseCount:function increaseCount(){bucketCount+1>=maximumWriteInput?showCounterErrorMessage():(setBucketCount((function(prev){return prev+1})),updateQuantityOfCartItem(id,bucketCount+1))},decreaseCount:function decreaseCount(){bucketCount<=1?removeProductFromCart(id):(updateQuantityOfCartItem(id,bucketCount-1),setBucketCount((function(prev){return prev-1})))},countRef:countRef}},fetchApi=__webpack_require__("./src/utils/fetchApi.ts"),common=__webpack_require__("./src/constants/common.ts"),testId=__webpack_require__("./src/constants/testId.ts"),assets_images=__webpack_require__("./src/assets/images.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BucketCounter=function BucketCounter(_ref){var id=_ref.id,_ref$quantity=_ref.quantity,quantity=void 0===_ref$quantity?1:_ref$quantity,kind=_ref.kind,refetch=_ref.refetch,_useBucketCount=hooks_useBucketCount(quantity,{errorMessage:"장바구니 수량은 1000개 이하까지 가능합니다.",maximumCount:1e3,id:id}),onBlur=_useBucketCount.onBlur,bucketCount=_useBucketCount.bucketCount,changeCountEvent=_useBucketCount.onChange,increaseCount=_useBucketCount.increaseCount,decreaseCount=_useBucketCount.decreaseCount,countRef=_useBucketCount.countRef,changeCount=function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(event){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return changeCountEvent(event),_context.next=3,(0,fetchApi.Z)("".concat(common.fh,"/").concat(id),{method:"patch",body:JSON.stringify({quantity:Number(event.target.value)})});case 3:_context.sent.ok&&refetch();case 5:case"end":return _context.stop()}}),_callee)})));return function changeCount(_x){return _ref2.apply(this,arguments)}}(),upButton=function(){var _ref3=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(){var response;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,(0,fetchApi.Z)("".concat(common.fh,"/").concat(id),{method:"patch",body:JSON.stringify({quantity:bucketCount})});case 2:response=_context2.sent,increaseCount(),response.ok&&refetch();case 5:case"end":return _context2.stop()}}),_callee2)})));return function upButton(){return _ref3.apply(this,arguments)}}(),downButton=function(){var _ref4=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee3(){var response;return(0,regeneratorRuntime.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,(0,fetchApi.Z)("".concat(common.fh,"/").concat(id),{method:"patch",body:JSON.stringify({quantity:bucketCount})});case 2:response=_context3.sent,decreaseCount(),response.ok&&refetch();case 5:case"end":return _context3.stop()}}),_callee3)})));return function downButton(){return _ref4.apply(this,arguments)}}();return(0,jsx_runtime.jsxs)(BucketCounterWrapper,{kind:kind,children:[(0,jsx_runtime.jsx)(Count,{inputMode:"numeric",value:0===bucketCount?"":bucketCount,onChange:changeCount,ref:countRef,onBlur:function onBlurAndRefetch(e){onBlur(e),refetch()},"data-testid":testId.tQ,kind:kind}),(0,jsx_runtime.jsxs)(Counter,{children:[(0,jsx_runtime.jsx)(TopButton,{"data-testid":testId.Tq,onClick:upButton,kind:kind,children:(0,jsx_runtime.jsx)(Image,{src:assets_images.qC,alt:"증가"})}),(0,jsx_runtime.jsx)(BottomButton,{"data-testid":testId.CC,onClick:downButton,kind:kind,children:(0,jsx_runtime.jsx)(Image,{src:assets_images.SX,alt:"감소"})})]})]})},BucketCounterWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n\n  width: ",";\n  height: ",";\n\n  border: 1px solid #dddddd;\n\n  @media (max-width: 600px) {\n    width: 65px;\n    height: 28px;\n  }\n"])),(function(_ref5){return"big"===_ref5.kind?"112px":"63px"}),(function(_ref6){return"big"===_ref6.kind?"60px":"28px"})),Count=styled_components_browser_esm.zo.input(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: ",";\n  height: ",";\n\n  border: 1px solid #dddddd;\n\n  text-align: center;\n\n  outline: none;\n\n  @media (max-width: 600px) {\n    width: 42px;\n    height: 28px;\n  }\n"])),(function(_ref7){return"big"===_ref7.kind?"68px":"42px"}),(function(_ref8){return"big"===_ref8.kind?"60px":"28px"})),Counter=styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Button=styled_components_browser_esm.zo.button(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: none;\n\n  width: ",";\n  height: ",";\n\n  @media (max-width: 600px) {\n    width: 21px;\n    height: 14px;\n  }\n"])),(function(_ref9){return"big"===_ref9.kind?"42px":"20px"}),(function(_ref10){return"big"===_ref10.kind?"30px":"14px"})),TopButton=(0,styled_components_browser_esm.zo)(Button)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  border-bottom: 0.5px solid #dddddd;\n"]))),BottomButton=(0,styled_components_browser_esm.zo)(Button)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  border-top: 0.5px solid #dddddd;\n"]))),Image=styled_components_browser_esm.zo.img(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)([""]))),common_BucketCounter=BucketCounter;try{BucketCounter.displayName="BucketCounter",BucketCounter.__docgenInfo={description:"",displayName:"BucketCounter",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},quantity:{defaultValue:{value:"1"},description:"",name:"quantity",required:!1,type:{name:"number"}},refetch:{defaultValue:null,description:"",name:"refetch",required:!0,type:{name:"() => void"}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"big"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/BucketCounter/index.tsx#BucketCounter"]={docgenInfo:BucketCounter.__docgenInfo,name:"BucketCounter",path:"src/components/common/BucketCounter/index.tsx#BucketCounter"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/testId.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CC:function(){return BUCKET_COUNTER_BOTTOM_BUTTON},Tq:function(){return BUCKET_COUNTER_TOP_BUTTON},ZS:function(){return ADD_CART_BUTTON},tQ:function(){return CART_COUNT_INPUT}});var BUCKET_COUNTER_TOP_BUTTON="bucketCounterTopButton",BUCKET_COUNTER_BOTTOM_BUTTON="bucketCounterBottomButton",ADD_CART_BUTTON="addCartButton",CART_COUNT_INPUT="cartCountInput"},"./src/hooks/useAtomLocalStorage.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js");__webpack_exports__.Z=function useAtomLocalStorage(initialValue,key){var _useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.FV)(initialValue),_useRecoilState2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_useRecoilState,2),value=_useRecoilState2[0],setData=_useRecoilState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var saveData=JSON.parse(localStorage.getItem(key)||"[]");saveData&&saveData.length>0&&setData(saveData)}),[key,setData]),[value,function setValue(data){setData(data),localStorage.setItem(key,JSON.stringify(data))}]}},"./src/hooks/useControlCart.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_recoil_atoms_cartAtom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/recoil/atoms/cartAtom.ts"),_recoil_atoms_checkBoxAtom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/recoil/atoms/checkBoxAtom.ts"),_recoil_atoms_checkBoxTotalIdtAtom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/recoil/atoms/checkBoxTotalIdtAtom.ts"),_utils_fetchApi__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/utils/fetchApi.ts"),_constants_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants/common.ts"),_useAtomLocalStorage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useAtomLocalStorage.ts");__webpack_exports__.Z=function useControlCart(){var _useAtomLocalStorage=(0,_useAtomLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z)(_recoil_atoms_cartAtom__WEBPACK_IMPORTED_MODULE_1__.c,_constants_common__WEBPACK_IMPORTED_MODULE_5__.gq),_useAtomLocalStorage2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_useAtomLocalStorage,2),cart=_useAtomLocalStorage2[0],setCart=_useAtomLocalStorage2[1],_useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.FV)(_recoil_atoms_cartAtom__WEBPACK_IMPORTED_MODULE_1__.c),_useRecoilState2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_useRecoilState,2),setData=(_useRecoilState2[0],_useRecoilState2[1]),_useAtomLocalStorage3=(0,_useAtomLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z)(_recoil_atoms_checkBoxAtom__WEBPACK_IMPORTED_MODULE_2__.b,"checkBox"),_useAtomLocalStorage4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_useAtomLocalStorage3,2),checkBox=_useAtomLocalStorage4[0],setCheckBox=_useAtomLocalStorage4[1],_useAtomLocalStorage5=(0,_useAtomLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z)(_recoil_atoms_checkBoxTotalIdtAtom__WEBPACK_IMPORTED_MODULE_3__.C,"checkBoxTotalId"),_useAtomLocalStorage6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_useAtomLocalStorage5,2),checkBoxTotalId=_useAtomLocalStorage6[0],setCheckBoxTotalId=_useAtomLocalStorage6[1],addProductToCart=function(){var _ref2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.Z)().mark((function _callee(_ref){var name,id,price,imageUrl,product,updatedCart;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return name=_ref.name,id=_ref.id,price=_ref.price,imageUrl=_ref.imageUrl,product={id:id,product:{name:name,price:price,imageUrl:imageUrl,id:id},quantity:1},updatedCart=[].concat((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__.Z)(cart),[product]),setCheckBox([].concat((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__.Z)(checkBox),[id])),setCheckBoxTotalId([].concat((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__.Z)(checkBox),[id])),_context.next=7,(0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_11__.Z)(_constants_common__WEBPACK_IMPORTED_MODULE_5__.fh,{method:"post",body:JSON.stringify({productId:Number(id)})});case 7:setData(updatedCart);case 8:case"end":return _context.stop()}}),_callee)})));return function addProductToCart(_x){return _ref2.apply(this,arguments)}}(),removeProductFromCart=function(){var _ref3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.Z)().mark((function _callee2(id){var updatedCart,updatedCheckBox,updatedCheckBoxTotalId;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:updatedCart=cart.filter((function(product){return id!==product.id})),updatedCheckBox=checkBox.filter((function(checkBoxId){return checkBoxId!==id})),updatedCheckBoxTotalId=checkBoxTotalId.filter((function(checkBoxId){return checkBoxId!==id})),setCheckBox(updatedCheckBox),setCheckBoxTotalId(updatedCheckBoxTotalId),setCart(updatedCart);case 6:case"end":return _context2.stop()}}),_callee2)})));return function removeProductFromCart(_x2){return _ref3.apply(this,arguments)}}();return{addProductToCart:addProductToCart,removeProductFromCart:removeProductFromCart,updateQuantityOfCartItem:function updateQuantityOfCartItem(id,quantity){var updateCart=cart.map((function(product){return product.id===id?(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},product),{},{quantity:quantity}):product}));setCart(updateCart)}}}},"./src/recoil/atoms/cartAtom.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return cartAtom}});var cartAtom=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"cart",default:[]})},"./src/recoil/atoms/checkBoxAtom.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return checkBoxAtom}});var checkBoxAtom=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"checkBoxAtom",default:[]})},"./src/recoil/atoms/checkBoxTotalIdtAtom.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return checkBoxTotalIdtAtom}});var checkBoxTotalIdtAtom=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"checkBoxTotalIdtAtom",default:[]})},"./src/utils/fetchApi.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),fetchApi=function(){var _ref=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee(url,option){var response;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(url,option);case 2:if((response=_context.sent).ok){_context.next=5;break}throw new Error("api 요청을 실패했습니다! status: ".concat(response.status));case 5:return _context.abrupt("return",response);case 6:case"end":return _context.stop()}}),_callee)})));return function fetchApi(_x,_x2){return _ref.apply(this,arguments)}}();__webpack_exports__.Z=fetchApi}}]);
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[411],{647:function(a,e,n){n(791);e.Z=n.p+"static/media/symbol-defs.6b066baa0e6c6ae8b109f7eeee917f66.svg"},321:function(a,e,n){n.d(e,{Z:function(){return p}});var r="Modal_overlay__r63M6",s="Modal_modal__DJDMv",t="Modal_closebtn__6fsdE",i="Modal_icon__2UpwH",c=n(647),o=n(791),l=n(164),d=n(184),m=document.querySelector("#modal-root"),p=function(a){var e=a.onClose,n=a.children;(0,o.useEffect)((function(){var a=function(a){"Escape"===a.code&&e()};return window.addEventListener("keydown",a),function(){return window.removeEventListener("keydown",a)}}),[e]);return(0,l.createPortal)((0,d.jsx)("div",{className:r,onClick:function(a){a.target===a.currentTarget&&e()},children:(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("div",{className:t,onClick:e,children:(0,d.jsx)("svg",{className:i,width:"18",height:"18",children:(0,d.jsx)("use",{href:"".concat(c.Z,"#icon-x")})})}),n]})}),m)}},73:function(a,e,n){n.d(e,{Z:function(){return t}});var r={madalWrap:"ModalCar_madalWrap__K1QCQ",imgCar:"ModalCar_imgCar__prySi",imageWrapper:"ModalCar_imageWrapper__1o0EQ",infoWrap:"ModalCar_infoWrap__6tpKN",infoTopWrap:"ModalCar_infoTopWrap__asvSx",infoBottomWrap:"ModalCar_infoBottomWrap__ltCjy",infoCar:"ModalCar_infoCar__mUQ4N",border:"ModalCar_border__JULdy",nameCar:"ModalCar_nameCar__o0Cdj",modelCar:"ModalCar_modelCar__rr0Iy",carDescription:"ModalCar_carDescription__cSCWQ",carDetails:"ModalCar_carDetails__FID+l",infoConditions:"ModalCar_infoConditions__uowos",conditionsTopWrap:"ModalCar_conditionsTopWrap__SDMFr",conditionsTextIn:"ModalCar_conditionsTextIn__X7Dh9",condSapn:"ModalCar_condSapn__TJcmI",conditionsText:"ModalCar_conditionsText__ssT-1",conditionsBottomWrap:"ModalCar_conditionsBottomWrap__6ghhR",buttonRent:"ModalCar_buttonRent__cyGnT"},s=n(184),t=function(a){var e=a.data,n=e.id,t=e.address,i=e.rentalCompany,c=e.year,o=e.type,l=e.model,d=e.img,m=e.make,p=e.rentalPrice,u=e.accessories,_=e.fuelConsumption,f=e.engineSize,h=e.description,x=e.functionalities,C=e.rentalConditions,j=e.mileage,N=C.split("\n"),g=N[0].match(/\d+/),b=t.split(",");return(0,s.jsxs)("div",{className:r.madalWrap,children:[(0,s.jsx)("div",{className:r.imageWrapper,children:(0,s.jsx)("img",{src:d,alt:m,className:r.imgCar})}),(0,s.jsxs)("p",{className:r.nameCar,children:[" ",m," ",(0,s.jsx)("span",{className:r.modelCar,children:l}),", ",(0,s.jsx)("span",{children:c})]}),(0,s.jsxs)("div",{className:r.infoWrap,children:[(0,s.jsxs)("div",{className:r.infoTopWrap,children:[(0,s.jsxs)("p",{className:r.infoCar,children:[b[1]," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:[b[2]," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:[i," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:["Id: ",(0,s.jsx)("span",{children:n})," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:["Year: ",(0,s.jsx)("span",{children:c})," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:["Type: ",(0,s.jsx)("span",{children:o})]})]}),(0,s.jsxs)("div",{className:r.infoBottomWrap,children:[(0,s.jsxs)("p",{className:r.infoCar,children:["Fuel Consumption: ",(0,s.jsx)("span",{children:_})," ",(0,s.jsx)("span",{className:r.border})]}),(0,s.jsxs)("p",{className:r.infoCar,children:["Engine Size: ",(0,s.jsx)("span",{children:f})]})]})]}),(0,s.jsx)("p",{className:r.carDescription,children:h}),(0,s.jsx)("p",{className:r.carDetails,children:"Accessories and functionalities:"}),(0,s.jsxs)("div",{className:r.carDetailsWrap,children:[(0,s.jsx)("div",{className:r.infoTopWrap,children:u.map((function(a){return(0,s.jsxs)("p",{className:r.infoCar,children:[a," ",(0,s.jsx)("span",{className:r.border})]},a)}))}),(0,s.jsx)("div",{className:r.infoBottomWrap,children:x.map((function(a){return(0,s.jsxs)("p",{className:r.infoCar,children:[a," ",(0,s.jsx)("span",{className:r.border})]},a)}))})]}),(0,s.jsx)("p",{className:r.infoConditions,children:"Rental Conditions: "}),(0,s.jsxs)("div",{className:r.conditionsTopWrap,children:[(0,s.jsxs)("p",{className:r.conditionsTextIn,children:["Minimum age : ",(0,s.jsx)("span",{className:r.condSapn,children:g[0]})]}),(0,s.jsx)("p",{className:r.conditionsText,children:N[1]}),(0,s.jsx)("p",{className:r.conditionsText,children:N[2]})]}),(0,s.jsxs)("div",{className:r.conditionsBottomWrap,children:[(0,s.jsx)("p",{className:r.conditionsText,children:"Security deposite required"}),(0,s.jsxs)("p",{className:r.conditionsText,children:["Mileage: ",(0,s.jsx)("span",{className:r.condSapn,children:j})]}),(0,s.jsxs)("p",{className:r.conditionsText,children:["Price: ",(0,s.jsx)("span",{className:r.condSapn,children:p})]})]}),(0,s.jsx)("a",{href:"tel:+380730000000",className:r.buttonRent,children:"Rental car"})]},n)}},411:function(a,e,n){n.r(e),n.d(e,{default:function(){return I}});var r=n(33),s=n(433),t=n(439),i=n(791),c=n(861),o=n(687),l=n.n(o),d=n(243),m="https://65046379c8869921ae24f832.mockapi.io/Cars";function p(){return p=(0,c.Z)(l().mark((function a(e){var n,r,s=arguments;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"",a.prev=1,a.next=4,d.Z.get("".concat(m,"?page=").concat(e,"&limit=").concat(n));case 4:return r=a.sent,a.abrupt("return",r);case 8:throw a.prev=8,a.t0=a.catch(1),new Error(a.t0.message);case 11:case 12:case"end":return a.stop()}}),a,null,[[1,8]])}))),p.apply(this,arguments)}var u=function(a){return p.apply(this,arguments)},_="LoadMore_buttonLm__6fQ+Y",f=n(184),h=function(a){var e=a.onClick;return(0,f.jsx)("button",{className:_,type:"button",onClick:e,children:"Load more"})},x=n(984),C=n(264),j=n(122),N={form:"Filter_form__wVnxJ",brandWrap:"Filter_brandWrap__SJT45",inputBrand:"Filter_inputBrand__su5P6",buttonOpenBrand:"Filter_buttonOpenBrand__MNglM",labelBrand:"Filter_labelBrand__SSj0t",svgOpen:"Filter_svgOpen__CdfkW",priceWrap:"Filter_priceWrap__ParfG",labelPrice:"Filter_labelPrice__Dq5Rs",inputPrice:"Filter_inputPrice__qwjiv",buttonOpenPrice:"Filter_buttonOpenPrice__nZmMo",mileageWrap:"Filter_mileageWrap__q9Vq5",inputWrap:"Filter_inputWrap__XEHXz",mileageLabel:"Filter_mileageLabel__FTo1Q",mileageInputFrom:"Filter_mileageInputFrom__-zK2+",mileageInputTo:"Filter_mileageInputTo__yabGk",buttonSearchFilter:"Filter_buttonSearchFilter__vMDgb",brandList:"Filter_brandList__wWl8e",priceList:"Filter_priceList__bqh-9",brandItem:"Filter_brandItem__p004R",priceItem:"Filter_priceItem__2Q5NH"},g=n(647),b=function(a){var e=a.allCarCards,n=(0,i.useState)(!1),r=(0,t.Z)(n,2),s=r[0],c=r[1],o=(0,i.useState)(!1),l=(0,t.Z)(o,2),d=l[0],m=l[1],p=(0,i.useState)(""),u=(0,t.Z)(p,2),_=u[0],h=u[1],C=(0,i.useState)(""),j=(0,t.Z)(C,2),b=j[0],v=j[1],Z=(0,i.useState)(""),W=(0,t.Z)(Z,2),I=W[0],S=W[1],F=(0,i.useState)(""),T=(0,t.Z)(F,2),y=T[0],M=T[1],k=e.map((function(a){return a.make})).filter((function(a,e,n){return n.indexOf(a)===e})),w=function(){for(var a=[],e=10;e<=500;e+=10)a.push(e);return a}();return(0,f.jsx)("div",{className:N.formWrap,children:(0,f.jsxs)("form",{className:N.form,children:[(0,f.jsxs)("div",{className:N.brandWrap,children:[(0,f.jsx)("label",{htmlFor:"brand",className:N.labelBrand,children:"Car brand"}),(0,f.jsx)("input",{type:"text",name:"brand",id:"brand",placeholder:"Enter the text",value:_,onChange:function(a){return h(a.target.value)},className:N.inputBrand}),(0,f.jsx)("button",{type:"button","aria-label":"arrow",onClick:function(){return c(!s)},className:N.buttonOpenBrand,children:(0,f.jsx)("svg",{width:"20",height:"20",className:N.svgOpen,children:(0,f.jsx)("use",{href:"".concat(g.Z,"#icon-chevron-down")})})}),s&&(0,f.jsx)("ul",{className:N.brandList,children:k.map((function(a){var e=(0,x.x0)();return(0,f.jsx)("li",{onClick:function(){return e="".concat(a),c(!1),void h(e);var e},className:N.brandItem,children:a},e)}))})]}),(0,f.jsxs)("div",{className:N.priceWrap,children:[(0,f.jsx)("label",{htmlFor:"price",className:N.labelPrice,children:"Price/ 1 hour"}),(0,f.jsx)("input",{type:"text",name:"price",id:"price",placeholder:"To $",value:b,onChange:function(a){return v(a.target.value)},className:N.inputPrice}),(0,f.jsx)("button",{type:"button","aria-label":"arrow",onClick:function(){return m(!d)},className:N.buttonOpenPrice,children:(0,f.jsx)("svg",{width:"20",height:"20",className:N.svgOpen,children:(0,f.jsx)("use",{href:"".concat(g.Z,"#icon-chevron-down")})})}),d&&(0,f.jsx)("ul",{className:N.priceList,children:w.map((function(a){var e=(0,x.x0)();return(0,f.jsx)("li",{onClick:function(){return e="".concat(a),m(!1),void v(e);var e},className:N.priceItem,children:a},e)}))})]}),(0,f.jsxs)("div",{className:N.mileageWrap,children:[(0,f.jsx)("label",{htmlFor:"mileage",className:N.mileageLabel,children:"\u0421ar mileage / km"}),(0,f.jsxs)("div",{className:N.inputWrap,children:[(0,f.jsx)("input",{type:"number",id:"mileage",name:"mileageFrom",placeholder:"From",value:I,onChange:function(a){var e=a.target.value;S(e)},className:N.mileageInputFrom}),(0,f.jsx)("input",{type:"number",id:"mileage",name:"mileageTo",placeholder:"To",value:y,onChange:function(a){var e=a.target.value;M(e)},className:N.mileageInputTo})]})]}),(0,f.jsx)("button",{type:"submit",className:N.buttonSearchFilter,children:"Search"})]})})},v=n(321),Z=n(73);function W(){var a=(0,i.useState)([]),e=(0,t.Z)(a,2),n=e[0],r=e[1],c=(0,i.useState)([]),o=(0,t.Z)(c,2),l=o[0],d=o[1],m=(0,i.useState)(1),p=(0,t.Z)(m,2),_=p[0],N=p[1],W=(0,i.useState)([]),I=(0,t.Z)(W,2),S=I[0],F=I[1],T=(0,i.useState)(),y=(0,t.Z)(T,2),M=y[0],k=y[1],w=(0,i.useState)(!1),L=(0,t.Z)(w,2),B=L[0],O=L[1],P=(0,i.useState)(""),D=(0,t.Z)(P,2),E=D[0],J=D[1];(0,i.useEffect)((function(){u().then((function(a){F(a.data)})).catch((function(a){C.Notify.info("Ooops! Not found")})),k(JSON.parse(localStorage.getItem("items"))),M&&k(M)}),[M]),(0,i.useEffect)((function(){u(_,8).then((function(a){d(a.data),r((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(a.data))}))})).catch((function(a){console.log(a),C.Notify.info("Ooops! Not found")}))}),[_]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(b,{allCarCards:S}),(0,f.jsx)("ul",{className:j.Z.allCarsCardList,children:n.map((function(a){var e=a.id,n=a.address,r=a.rentalCompany,t=a.year,i=a.type,c=a.model,o=a.img,l=a.make,d=a.rentalPrice,m=a.accessories,p=a.photoLink,u=n.split(","),_=(0,x.x0)();return(0,f.jsx)("div",{className:j.Z.carsCardMainWrapper,children:(0,f.jsxs)("li",{className:j.Z.carsCardItem,children:[(0,f.jsx)("img",{src:"".concat(o||p),alt:c,className:j.Z.imagecarsCardItem}),M&&(M.find((function(a){return a.id===e}))?(0,f.jsx)("button",{type:"button",onClick:function(){return function(a){k(M.filter((function(e){return e.id!==a}))),localStorage.setItem("items",JSON.stringify(M))}(e)},className:j.Z.btnFavorite,children:(0,f.jsx)("svg",{width:"18",height:"18",children:(0,f.jsx)("use",{href:"".concat(g.Z,"#icon-heart")})})}):(0,f.jsx)("button",{type:"button",onClick:function(){return function(a){var e=S.find((function(e){return e.id===a}));k((function(a){return[].concat((0,s.Z)(a),[e])})),localStorage.setItem("items",JSON.stringify(M))}(e)},className:j.Z.btnFavorite,children:(0,f.jsx)("svg",{width:"18",height:"18",className:j.Z.svgRemoveFavorite,children:(0,f.jsx)("use",{href:"".concat(g.Z,"#icon-heart-1")})})})),(0,f.jsxs)("div",{className:j.Z.carsCardInfoTopWrap,children:[(0,f.jsxs)("p",{className:j.Z.make,children:[l,(0,f.jsx)("span",{className:j.Z.model,children:c}),","]}),(0,f.jsx)("p",{className:j.Z.year,children:t}),(0,f.jsx)("p",{className:j.Z.price,children:d})]}),(0,f.jsxs)("div",{className:j.Z.carsCardInfoWrap,children:[(0,f.jsxs)("p",{className:j.Z.carInfoText,children:[u[1]," ",(0,f.jsx)("span",{className:j.Z.borderInfoCard})]}),(0,f.jsxs)("p",{className:j.Z.carInfoText,children:[u[2]," ",(0,f.jsx)("span",{className:j.Z.borderInfoCard})]}),(0,f.jsxs)("p",{className:j.Z.carInfoText,children:[r," "]})]}),(0,f.jsxs)("div",{className:j.Z.carsCardInfoBottomWrap,children:[(0,f.jsxs)("p",{className:j.Z.carInfoText,children:[i,(0,f.jsx)("span",{className:j.Z.borderInfoCard})]}),(0,f.jsxs)("p",{className:j.Z.carInfoText,children:[e,(0,f.jsx)("span",{className:j.Z.borderInfoCard})]}),(0,f.jsx)("p",{className:j.Z.carInfoText,children:m[0]})]}),(0,f.jsx)("button",{type:"button",className:j.Z.cardBtnLearnMore,onClick:function(){return function(a){O(!0);var e=S.find((function(e){return e.id===a}));J(e)}(e)},children:"Learn more"})]},_)})}))}),l.length>=8&&(0,f.jsx)("div",{className:j.Z.bntLoadWrap,children:(0,f.jsx)(h,{onClick:function(){N((function(a){return a+1}))}})}),B&&(0,f.jsx)(v.Z,{onClose:function(){O(!1)},children:(0,f.jsx)(Z.Z,{data:E})})]})}var I=function(){return(0,f.jsx)("div",{className:r.Z.catalogSection,children:(0,f.jsx)(W,{})})}},122:function(a,e){e.Z={carsCardMainWrapper:"Catalog_carsCardMainWrapper__vfhft",allCarsCardList:"Catalog_allCarsCardList__StIGF",carsCardItem:"Catalog_carsCardItem__q9KyU",imagecarsCardItem:"Catalog_imagecarsCardItem__6b3es",make:"Catalog_make__Ql1G7",model:"Catalog_model__rGnlj",carsCardInfoTopWrap:"Catalog_carsCardInfoTopWrap__J6ntt",carsCardInfoWrap:"Catalog_carsCardInfoWrap__heL4D",carsCardInfoBottomWrap:"Catalog_carsCardInfoBottomWrap__O5lnJ",year:"Catalog_year__R+YSc",price:"Catalog_price__7INE2",carInfoText:"Catalog_carInfoText__YFffs",borderInfoCard:"Catalog_borderInfoCard__KyqTZ",cardBtnLearnMore:"Catalog_cardBtnLearnMore__Fm1KW",btnFavorite:"Catalog_btnFavorite__FMcFr",bntLoadWrap:"Catalog_bntLoadWrap__y1S8+"}},33:function(a,e){e.Z={catalogSection:"pages_catalogSection__DPlZs",mainText:"pages_mainText__oS9m7"}}}]);
//# sourceMappingURL=411.3e08584e.chunk.js.map
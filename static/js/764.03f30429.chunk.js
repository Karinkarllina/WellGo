"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{647:function(a,s,e){e(791);s.Z=e.p+"static/media/symbol-defs.6b066baa0e6c6ae8b109f7eeee917f66.svg"},321:function(a,s,e){e.d(s,{Z:function(){return p}});var r="Modal_overlay__r63M6",n="Modal_modal__DJDMv",o="Modal_closebtn__6fsdE",i="Modal_icon__2UpwH",c=e(647),t=e(791),l=e(164),d=e(184),m=document.querySelector("#modal-root"),p=function(a){var s=a.onClose,e=a.children;(0,t.useEffect)((function(){var a=function(a){"Escape"===a.code&&s()};return window.addEventListener("keydown",a),function(){return window.removeEventListener("keydown",a)}}),[s]);return(0,l.createPortal)((0,d.jsx)("div",{className:r,onClick:function(a){a.target===a.currentTarget&&s()},children:(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("div",{className:o,onClick:s,children:(0,d.jsx)("svg",{className:i,width:"18",height:"18",children:(0,d.jsx)("use",{href:"".concat(c.Z,"#icon-x")})})}),e]})}),m)}},73:function(a,s,e){e.d(s,{Z:function(){return o}});var r={madalWrap:"ModalCar_madalWrap__K1QCQ",imgCar:"ModalCar_imgCar__prySi",imageWrapper:"ModalCar_imageWrapper__1o0EQ",infoWrap:"ModalCar_infoWrap__6tpKN",infoTopWrap:"ModalCar_infoTopWrap__asvSx",infoBottomWrap:"ModalCar_infoBottomWrap__ltCjy",infoCar:"ModalCar_infoCar__mUQ4N",border:"ModalCar_border__JULdy",nameCar:"ModalCar_nameCar__o0Cdj",modelCar:"ModalCar_modelCar__rr0Iy",carDescription:"ModalCar_carDescription__cSCWQ",carDetails:"ModalCar_carDetails__FID+l",infoConditions:"ModalCar_infoConditions__uowos",conditionsTopWrap:"ModalCar_conditionsTopWrap__SDMFr",conditionsTextIn:"ModalCar_conditionsTextIn__X7Dh9",condSapn:"ModalCar_condSapn__TJcmI",conditionsText:"ModalCar_conditionsText__ssT-1",conditionsBottomWrap:"ModalCar_conditionsBottomWrap__6ghhR",buttonRent:"ModalCar_buttonRent__cyGnT",btnRentWrap:"ModalCar_btnRentWrap__A+3NK",btnLink:"ModalCar_btnLink__KYAfK"},n=e(184),o=function(a){var s=a.data,e=s.id,o=s.address,i=s.rentalCompany,c=s.year,t=s.type,l=s.model,d=s.img,m=s.make,p=s.rentalPrice,_=s.accessories,C=s.fuelConsumption,x=s.engineSize,f=s.description,h=s.functionalities,j=s.rentalConditions,u=s.mileage,N=j.split("\n"),g=N[0].match(/\d+/),v=o.split(",");return(0,n.jsxs)("div",{className:r.madalWrap,children:[(0,n.jsx)("div",{className:r.imageWrapper,children:(0,n.jsx)("img",{src:d,alt:m,className:r.imgCar})}),(0,n.jsxs)("p",{className:r.nameCar,children:[" ",m," ",(0,n.jsx)("span",{className:r.modelCar,children:l}),", ",(0,n.jsx)("span",{children:c})]}),(0,n.jsxs)("div",{className:r.infoWrap,children:[(0,n.jsxs)("div",{className:r.infoTopWrap,children:[(0,n.jsxs)("p",{className:r.infoCar,children:[v[1]," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:[v[2]," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:[i," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:["Id: ",(0,n.jsx)("span",{children:e})," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:["Year: ",(0,n.jsx)("span",{children:c})," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:["Type: ",(0,n.jsx)("span",{children:t})]})]}),(0,n.jsxs)("div",{className:r.infoBottomWrap,children:[(0,n.jsxs)("p",{className:r.infoCar,children:["Fuel Consumption: ",(0,n.jsx)("span",{children:C})," ",(0,n.jsx)("span",{className:r.border})]}),(0,n.jsxs)("p",{className:r.infoCar,children:["Engine Size: ",(0,n.jsx)("span",{children:x})]})]})]}),(0,n.jsx)("p",{className:r.carDescription,children:f}),(0,n.jsx)("p",{className:r.carDetails,children:"Accessories and functionalities:"}),(0,n.jsxs)("div",{className:r.carDetailsWrap,children:[(0,n.jsx)("div",{className:r.infoTopWrap,children:_.map((function(a){return(0,n.jsxs)("p",{className:r.infoCar,children:[a," ",(0,n.jsx)("span",{className:r.border})]},a)}))}),(0,n.jsx)("div",{className:r.infoBottomWrap,children:h.map((function(a){return(0,n.jsxs)("p",{className:r.infoCar,children:[a," ",(0,n.jsx)("span",{className:r.border})]},a)}))})]}),(0,n.jsx)("p",{className:r.infoConditions,children:"Rental Conditions: "}),(0,n.jsxs)("div",{className:r.conditionsTopWrap,children:[(0,n.jsxs)("p",{className:r.conditionsTextIn,children:["Minimum age : ",(0,n.jsx)("span",{className:r.condSapn,children:g[0]})]}),(0,n.jsx)("p",{className:r.conditionsText,children:N[1]}),(0,n.jsx)("p",{className:r.conditionsText,children:N[2]})]}),(0,n.jsxs)("div",{className:r.conditionsBottomWrap,children:[(0,n.jsx)("p",{className:r.conditionsText,children:"Security deposite required"}),(0,n.jsxs)("p",{className:r.conditionsText,children:["Mileage: ",(0,n.jsx)("span",{className:r.condSapn,children:u})]}),(0,n.jsxs)("p",{className:r.conditionsText,children:["Price: ",(0,n.jsx)("span",{className:r.condSapn,children:p})]})]}),(0,n.jsx)("div",{className:r.btnRentWrap,children:(0,n.jsx)("button",{type:"button",className:r.buttonRent,children:(0,n.jsx)("a",{href:"tel:+380730000000",className:r.btnLink,children:"Rental car"})})})]},e)}},764:function(a,s,e){e.r(s),e.d(s,{default:function(){return p}});var r=e(439),n=e(791),o=e(984),i=e(122),c=e(647),t=e(321),l=e(73),d=e(184);function m(){var a=(0,n.useState)([]),s=(0,r.Z)(a,2),e=s[0],m=s[1],p=(0,n.useState)(!1),_=(0,r.Z)(p,2),C=_[0],x=_[1],f=(0,n.useState)(""),h=(0,r.Z)(f,2),j=h[0],u=h[1];(0,n.useEffect)((function(){m(JSON.parse(localStorage.getItem("items")))}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsx)("ul",{className:i.Z.allCarsCardList,children:e&&e.map((function(a){var s=a.id,r=a.address,n=a.rentalCompany,t=a.year,l=a.type,p=a.model,_=a.img,C=a.make,f=a.rentalPrice,h=a.accessories,j=a.photoLink,N=r.split(","),g=(0,o.x0)();return(0,d.jsx)("div",{className:i.Z.carsCardMainWrapper,children:(0,d.jsxs)("li",{className:i.Z.carsCardItem,children:[(0,d.jsx)("img",{src:"".concat(_||j),alt:p,className:i.Z.imagecarsCardItem}),(0,d.jsx)("button",{type:"button",onClick:function(){return function(a){m(e.filter((function(s){return s.id!==a}))),localStorage.setItem("items",JSON.stringify(e))}(s)},className:i.Z.btnFavorite,children:(0,d.jsx)("svg",{width:"18",height:"18",className:i.Z.svgRemoveFavorite,children:(0,d.jsx)("use",{href:"".concat(c.Z,"#icon-heart")})})}),(0,d.jsxs)("div",{className:i.Z.carsCardInfoTopWrap,children:[(0,d.jsxs)("p",{className:i.Z.make,children:[C,(0,d.jsx)("span",{className:i.Z.model,children:p}),","]}),(0,d.jsx)("p",{className:i.Z.year,children:t}),(0,d.jsx)("p",{className:i.Z.price,children:f})]}),(0,d.jsxs)("div",{className:i.Z.carsCardInfoWrap,children:[(0,d.jsxs)("p",{className:i.Z.carInfoText,children:[N[1]," ",(0,d.jsx)("span",{className:i.Z.borderInfoCard})]}),(0,d.jsxs)("p",{className:i.Z.carInfoText,children:[N[2]," "]}),(0,d.jsxs)("p",{className:i.Z.carInfoText,children:[n," "]})]}),(0,d.jsxs)("div",{className:i.Z.carsCardInfoBottomWrap,children:[(0,d.jsxs)("p",{className:i.Z.carInfoText,children:[l,(0,d.jsx)("span",{className:i.Z.borderInfoCard})]}),(0,d.jsxs)("p",{className:i.Z.carInfoText,children:[s,(0,d.jsx)("span",{className:i.Z.borderInfoCard})]}),(0,d.jsx)("p",{className:i.Z.carInfoText,children:h[0]})]}),(0,d.jsx)("button",{type:"button",className:i.Z.cardBtnLearnMore,onClick:function(){return function(a){x(!0);var s=e.find((function(s){return s.id===a}));u(s)}(s)},children:"Learn more"})]},g)})}))}),C&&(0,d.jsx)(t.Z,{onClose:function(){x(!1)},children:(0,d.jsx)(l.Z,{data:j})})]})}var p=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(m,{})})}},122:function(a,s){s.Z={carsCardMainWrapper:"Catalog_carsCardMainWrapper__vfhft",allCarsCardList:"Catalog_allCarsCardList__StIGF",carsCardItem:"Catalog_carsCardItem__q9KyU",imagecarsCardItem:"Catalog_imagecarsCardItem__6b3es",make:"Catalog_make__Ql1G7",model:"Catalog_model__rGnlj",carsCardInfoTopWrap:"Catalog_carsCardInfoTopWrap__J6ntt",carsCardInfoWrap:"Catalog_carsCardInfoWrap__heL4D",carsCardInfoBottomWrap:"Catalog_carsCardInfoBottomWrap__O5lnJ",year:"Catalog_year__R+YSc",price:"Catalog_price__7INE2",carInfoText:"Catalog_carInfoText__YFffs",borderInfoCard:"Catalog_borderInfoCard__KyqTZ",cardBtnLearnMore:"Catalog_cardBtnLearnMore__Fm1KW",btnFavorite:"Catalog_btnFavorite__FMcFr",bntLoadWrap:"Catalog_bntLoadWrap__y1S8+"}},984:function(a,s,e){e.d(s,{x0:function(){return r}});var r=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(a)).reduce((function(a,s){return a+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=764.03f30429.chunk.js.map
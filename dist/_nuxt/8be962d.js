(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o={format:function(t){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0}).format(t)}}},287:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("606aa000",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(287)},307:function(t,e,r){var o=r(63)(!1);o.push([t.i,".title[data-v-595bd955]{font-weight:700}.cross-sell__products .cross-sell__products-img .plus[data-v-595bd955]{font-size:18px;font-weight:500;color:#777}.cross-sell__products .cross-sell__products-img img[data-v-595bd955]{width:100px;border:1px solid #ddd;border-radius:5px;padding:10px 5px}.cross-sell__products .cross-sell__products-name .item[data-v-595bd955]:not(:last-child){margin-bottom:.5rem}.cross-sell__products .cross-sell__products-name .item p[data-v-595bd955]{font-size:12px;font-weight:700}.cross-sell__products .cross-sell__products-name .item .price[data-v-595bd955]{text-align:right}.cross-sell__products .cross-sell__products-name .item .price .sale-price[data-v-595bd955]{font-size:12px;font-weight:700;color:var(--main-color)}.cross-sell__products .cross-sell__products-name .item .price .regular-price[data-v-595bd955]{text-decoration:line-through;font-size:10px;font-weight:500;color:#777}.total-box[data-v-595bd955]{border-top:1px solid #ddd}.total-box .price .total[data-v-595bd955],.total-box .title-temp[data-v-595bd955]{font-size:12px;font-weight:700}.total-box .price .total[data-v-595bd955]{color:var(--main-color)}.total-box .price .sub-total[data-v-595bd955]{text-decoration:line-through;font-size:10px;font-weight:500;color:#777}.btn-submit .btn-danger[data-v-595bd955]{font-weight:600;background-color:var(--main-color);text-transform:uppercase}.btn-submit .btn-danger span[data-v-595bd955]{font-size:10px;font-weight:400;text-transform:none}@media screen and (min-width:1024px){.cross-sell__products .cross-sell__products-img .plus[data-v-595bd955]{font-size:30px}.cross-sell__products .cross-sell__products-img img[data-v-595bd955]{width:150px}.cross-sell__products .cross-sell__products-name .item p[data-v-595bd955]{font-size:15px;font-weight:700}.cross-sell__products .cross-sell__products-name .item .price .sale-price[data-v-595bd955]{font-size:15px}.cross-sell__products .cross-sell__products-name .item .price .regular-price[data-v-595bd955]{font-size:12px}.total-box .price .total[data-v-595bd955],.total-box .title-temp[data-v-595bd955]{font-size:15px}.btn-submit .btn-danger span[data-v-595bd955],.total-box .price .sub-total[data-v-595bd955]{font-size:12px}}",""]),t.exports=o},337:function(t,e,r){"use strict";r.r(e);var o=r(265),c={name:"BlockCrossSell",data:function(){return{product1:{imageURL:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",name:"iPhone 13 | Chính Hãng VN/A",regularPrice:"24000000",salePrice:"21500000"},product2:{imageURL:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/m/w/mwp22_av2.jpg",name:"Tai nghe Bluetooth Apple Airpods Pro VN/A",regularPrice:"6000000",salePrice:"4500000"}}},computed:{formatTotal:function(){return o.a.format(1*this.product1.salePrice+1*this.product2.salePrice)},formatSubTotal:function(){return o.a.format(1*this.product1.regularPrice+1*this.product2.regularPrice)},formatTotalSale:function(){return o.a.format(1*this.product1.regularPrice+1*this.product2.regularPrice-(1*this.product1.salePrice+1*this.product2.salePrice))}},methods:{formatPrice:function(t){return o.a.format(t)}}},l=(r(306),r(90)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block-box mb-3"},[t._m(0),t._v(" "),r("div",{staticClass:"cross-sell__products mt-2"},[r("div",{staticClass:"cross-sell__products-img d-flex justify-content-around align-items-center"},[r("img",{attrs:{src:t.product1.imageURL}}),t._v(" "),r("span",{staticClass:"plus"},[t._v("+")]),t._v(" "),r("img",{attrs:{src:t.product2.imageURL}})]),t._v(" "),r("div",{staticClass:"cross-sell__products-name mt-2"},[r("div",{staticClass:"item d-flex justify-content-between"},[r("p",[t._v(t._s(t.product1.name))]),t._v(" "),r("div",{staticClass:"price"},[r("p",{staticClass:"sale-price"},[t._v(t._s(t.formatPrice(t.product1.salePrice)))]),t._v(" "),r("p",{staticClass:"regular-price"},[t._v(t._s(t.formatPrice(t.product1.regularPrice)))])])]),t._v(" "),r("div",{staticClass:"item d-flex justify-content-between"},[r("p",[t._v(t._s(t.product2.name))]),t._v(" "),r("div",{staticClass:"price"},[r("p",{staticClass:"sale-price"},[t._v(t._s(t.formatPrice(t.product2.salePrice)))]),t._v(" "),r("p",{staticClass:"regular-price"},[t._v(t._s(t.formatPrice(t.product2.regularPrice)))])])])])]),t._v(" "),r("div",{staticClass:"total-box d-flex justify-content-between align-items-start mt-2 pt-2"},[r("p",{staticClass:"title-temp"},[t._v("Tổng tiền:")]),t._v(" "),r("div",{staticClass:"price d-flex flex-column align-items-end"},[r("span",{staticClass:"total"},[t._v(t._s(t.formatTotal))]),t._v(" "),r("span",{staticClass:"sub-total"},[t._v(t._s(t.formatTotal))])])]),t._v(" "),r("div",{staticClass:"btn-submit"},[r("button",{staticClass:"btn btn-danger d-flex flex-column justify-content-center align-items-center w-100"},[t._v("\n      Thêm Ngay\n      "),r("span",[t._v("(Tiết kiệm "+t._s(t.formatTotalSale)+")")])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("p",[t._v("Ưu đãi mua kèm")])])}],!1,null,"595bd955",null);e.default=component.exports}}]);
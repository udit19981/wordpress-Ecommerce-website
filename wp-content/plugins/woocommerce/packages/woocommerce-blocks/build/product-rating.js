(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[30],{213:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return d}));var c=n(0),s=n(1),r=n(4),o=n.n(r),a=n(23),u=n(101),i=n(90),l=n(134),b=n(42),p=n(149);n(267);const d=t=>{const{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:n}=Object(a.useProductDataContext)(),r=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(n),b=Object(u.a)(t),d=Object(i.a)(t),g=Object(l.a)(t);if(!r)return null;const _={width:r/5*100+"%"},j=Object(s.sprintf)(
/* translators: %f is referring to the average rating value */
Object(s.__)("Rated %f out of 5","woocommerce"),r),O=(t=>{const e=Object(p.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(n),m={__html:Object(s.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",O,"woocommerce"),Object(s.sprintf)('<strong class="rating">%f</strong>',r),Object(s.sprintf)('<span class="rating">%d</span>',O))};return Object(c.createElement)("div",{className:o()(b.className,"wc-block-components-product-rating",{[e+"__product-rating"]:e}),style:{...b.style,...d.style,...g.style}},Object(c.createElement)("div",{className:o()("wc-block-components-product-rating__stars",e+"__product-rating__stars"),role:"img","aria-label":j},Object(c.createElement)("span",{style:_,dangerouslySetInnerHTML:m})))};e.default=Object(b.withProductDataContext)(d)},267:function(t,e){}}]);
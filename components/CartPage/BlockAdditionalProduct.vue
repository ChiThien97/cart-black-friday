<template>
  <div>
    <div class="title">
      <p>Mua thêm sản phẩm để được miễn phí giao hàng</p>
    </div>
    <div class='box-products swiper-container mt-2'>
      <div class='list-product swiper-wrapper'>
        <additional-product-item v-for='(hotSaleItem,index) in hotSale.products'
                                 :id='hotSaleItem.id'
                                 :key='index'
                                 :product-name='hotSaleItem.product_name'
                                 :product-price='hotSaleItem.product_price'
                                 :sale-product-price='hotSaleItem.sale_product_price'
                                 :url='hotSaleItem.url'
                                 :image-url='hotSaleItem.image_url'
                                 :rating='hotSaleItem.rating'
        >
        </additional-product-item>
      </div>
    </div>
  </div>
</template>
<script>
import {swiper} from '~/_helper/swiper'
import AdditionalProductItem from "./AdditionalProductItem";
import AdditionalProduct from "~/_helper/dbjson/db.json"

export default {
  name: 'BlockAdditionalProduct',
  data() {
    return {
      hotSale: AdditionalProduct
    }
  },
  components: {
    AdditionalProductItem,
  },
  mounted() {
    swiper.methods.additionalProductsSlidingMobile()
  }
}
</script>
<style scoped>
.title {
  font-weight: 700;
}

.box-products {
  padding: 10px 0 0 4px;
}
</style>

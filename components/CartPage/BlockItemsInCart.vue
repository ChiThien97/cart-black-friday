<template>
  <div>
    <ProductItem v-for='(cartItem,index) in items.items_in_cart' :key="index"
                 :product-name="cartItem.product_name"
                 :image-url="cartItem.image_url"
                 :product-price="cartItem.product_price"
                 :product-sale-price="cartItem.sale_product_price"
                 :color="cartItem.color"
                 :color-select="cartItem.color_option"
                 is-check
    />
  </div>
</template>
<script>
import ProductItem from "./ProductItem"
import ItemsInCart from "~/_helper/dbjson/db.json"

export default {
  name: 'BlockItemsInCart',
  data() {
    return {
      items: ItemsInCart
    }
  },
  components: {
    ProductItem
  }
}
</script>

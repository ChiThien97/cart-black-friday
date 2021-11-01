<template>
  <div>
    <ProductItem v-for='(cartItem,index) in products.quote_item' :key="index"
                 :product-id="cartItem.item_id"
                 :product-name="cartItem.item_name"
                 :image-url="cartItem.image_url"
                 :product-price="cartItem.item_price"
                 :product-sale-price="cartItem.item_discount_price"
                 :product-heavy-fee="cartItem.heavy_fee"
                 :product-quantity="cartItem.item_quantity"
                 :color="cartItem.color"
                 :color-select="cartItem.color_option"
    />
    <div class="nothing-in-cart" v-if="!ItemQuoteCounter()">
      <font-awesome-icon icon='frown'/>
      <p>Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại</p>
      <a class="go-back" href="#">Quay lại trang chủ</a>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem"
import ItemsInCart from "~/_helper/dbjson/db.json"
import {mapGetters, mapState} from "vuex";

export default {
  name: 'BlockItemsInCart',
  components: {
    ProductItem
  },
  computed: {
    ...mapState('product', ['products']),
    ...mapGetters('product', ['ItemQuoteCounter'])
  },
  async mounted() {

  },
  methods: {}
}
</script>
<style scoped lang="scss">
.nothing-in-cart {
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  svg {
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
  }

  p {
    font-size: 22px;
    font-weight: 300;
    color: #444444;
    margin-bottom: 50px;
  }

  a.go-back {
    border-radius: 5px;
    background: var(--main-color);
    color: #FFFFFF;
    padding: 10px;
  }
}
</style>

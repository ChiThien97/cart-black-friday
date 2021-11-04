<template>
  <div>
    <TopBar class="mb-5"
            back-text="Trở về"
            title="Giỏ hàng"
            close-text="Đóng"
            href="/cart"
    />
    <div class="d-flex container">
      <div class='item-product m-auto mt-5'>
        <div class='item-product__box-img'>
          <img
            src='https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg'
            loading='lazy'>
        </div>
        <div class='item-product__box-name'>
          <a target='_blank'><p>iPhone 13</p></a>
        </div>
        <div class='item-product__box-price'>
          <p class='special-price'>20.000.000 đ</p>
          <p class='old-price'>
            <del>15.000.000 đ</del>
          </p>
          <button class="btn btn-danger" @click='addTocart()'>MUA NGAY</button>
        </div>
      </div>
      <div class='item-product m-auto mt-5'>
        <div class='item-product__box-img'>
          <img
            src='https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg'
            loading='lazy'>
        </div>
        <div class='item-product__box-name'>
          <a target='_blank'><p>iPhone 13</p></a>
        </div>
        <div class='item-product__box-price'>
          <p class='special-price'>20.000.000 đ</p>
          <p class='old-price'>
            <del>15.000.000 đ</del>
          </p>
          <button class="btn btn-danger" @click='addTocart()'>MUA NGAY</button>
        </div>
      </div>
      <div class='item-product m-auto mt-5'>
        <div class='item-product__box-img'>
          <img
            src='https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg'
            loading='lazy'>
        </div>
        <div class='item-product__box-name'>
          <a target='_blank'><p>iPhone 13</p></a>
        </div>
        <div class='item-product__box-price'>
          <p class='special-price'>20.000.000 đ</p>
          <p class='old-price'>
            <del>15.000.000 đ</del>
          </p>
          <button class="btn btn-danger" @click='addTocart()'>MUA NGAY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/CartPage/TopBar";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    TopBar,
  },
  computed: {
    ...mapState('quote', ['quote'])
  },
  methods: {
    ...mapActions('quote', ['setQuoteID']),
    addTocart() {
      const form = new FormData();
      form.append("store_id", "9998");
      form.append("region_id", "88");
      form.append("is_guest", "0");
      form.append("vat_id", "VAT_IDXX");
      form.append("customer_name", "Chí Thiện");
      form.append("customer_phone", "0963797531");
      form.append("customer_mail", "chithien@gmail.com");
      form.append("customer_level", "SMEM");
      form.append("item_id", "11");
      form.append("item_sku", "IPHONE13PM");
      form.append("item_name", "iPhone 13 Chính Hãng VNA");
      form.append("item_price", "20000000");
      form.append("item_quantity", "1");
      form.append("heavy_fee", "");
      form.append("item_discount_price", "15000000");
      return this.$axios.$post(`${process.env.cartServer}/quote`, form)
        .then(response => {
          this.setQuoteID(response.quote_id)
          this.$router.push('/cart')
        })
    }
  },
  layout: 'default'
}
</script>
<style scoped lang="scss">
.item-product {
  margin: 0 1rem 1rem 0;
  width: 150px;
  min-height: 120px;
  padding: 0.5rem;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 2px 1px #000;

  .item-product__box-img {
    text-align: center;

    img {
      margin: auto;
      height: 100px;
    }
  }

  .item-product__sticker-hotsale {
    width: 40px;
    height: 40px;
  }

  .item-product__sticker-percent {
    width: 51px;
    height: 20px;

    p {
      font-size: 9px;
    }
  }

  .item-product__box-price {
    .special-price {
      font-size: 1.1rem;
    }

    .old-price {
      font-size: 0.9rem;
    }
  }

  .item-product__box-button .btn-compare {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    padding: 0.2rem 0.4rem;
    border: 1px solid #D70018;
    border-radius: 8px;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    color: #D70018;
  }
}
</style>

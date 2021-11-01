<template>
  <div class="product-item mb-3 block-box">
    <div class="product-item__info d-flex">
      <div class="product-item__image">
        <img :src='imageUrl' alt="">
      </div>
      <div class="product-item__info-detail">
        <p class="product-name">{{ productName }}</p>
        <div class="product-item__price d-flex align-items-end">
          <p class="sale-price">{{ formatProductSalePrice }}</p>
          <p class="regular-price">{{ formatProductPrice }}</p>
          <span class="onsale">Giảm {{ percentDiscount }}%</span>
        </div>
        <div class="item-action mt-2">
          <div class="change-quantity d-flex align-items-end mt-2">
            <p>Chọn số lượng:</p>
            <div class="number d-flex">
              <span @click="minusQuantity()" class="minus d-flex justify-content-center align-items-center">-</span>
              <input type="text" :value="productQty" readonly/>
              <span @click="plusQuantity()" class="plus d-flex justify-content-center align-items-center">+</span>
            </div>
          </div>
        </div>
        <div v-if="productHeavyFee" class="product-item__heavy-fee mt-2"><i>Phí giao hàng cồng kềnh:</i> <strong>{{
            formatProductHeavyfee
          }}</strong>
        </div>
      </div>
    </div>

    <div @click="deleteItem()" class="delete-item">
      <font-awesome-icon icon='times'/>
    </div>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";
import {mapActions, mapState} from "vuex";

export default {
  name: 'ProductItem',
  data() {
    return {
      productID: this.productId,
      productQty: this.productQuantity
    }
  },
  props: {
    'productId': {
      type: Number,
      default: null
    },
    'productName': {
      type: String,
      default: null
    },
    'productPrice': {
      type: Number,
      default: null
    },
    'productSalePrice': {
      type: Number,
      default: null
    },
    'productHeavyFee': {
      type: Number,
      default: null
    },
    'productQuantity': {
      type: Number,
      default: null
    },
    'imageUrl': {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState('product', ['products']),
    formatProductPrice() {
      return Currency.format(this.productPrice)
    },
    formatProductSalePrice() {
      return Currency.format(this.productSalePrice)
    },
    formatProductHeavyfee() {
      return Currency.format(this.productHeavyFee)
    },
    percentDiscount() {
      return (100 - this.productSalePrice * (100 / this.productPrice)).toFixed(0)
    },
  },
  methods: {
    ...mapActions('product', ['updateItemQuantity', 'deleteItemInQuote']),
    async plusQuantity() {
      if (this.productQty < 3) {
        this.productQty++;
        await this.updateItemQuantity({id: this.products.ID, itemId: this.productId, itemQuantity: this.productQty});
      } else {
        alert('Số lượng sản phẩm đã đạt mức tối đa')
      }
    },
    async minusQuantity() {
      if (this.productQty > 1) {
        this.productQty--;
        await this.updateItemQuantity({id: this.products.ID, itemId: this.productId, itemQuantity: this.productQty});
      } else {
        alert('Số lượng sản phẩm đã giảm đến mức tối thiểu')
      }
    },
    async deleteItem() {
      await this.deleteItemInQuote({id: this.products.ID, itemId: this.productId})
    }
  }
}
</script>
<style scoped lang="scss">
.product-item {
  padding: 10px 20px 10px 30px;

  .delete-item {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;

    svg {
      font-size: 20px;
      color: #cacece;
    }
  }

  .product-item__info {
    .product-item__image {
      img {
        width: 60px;
      }
    }

    .product-item__info-detail {
      .product-name {
        font-size: 12px;
        font-weight: 700;
      }

      .product-item__price {
        .sale-price {
          font-size: 14px;
          color: var(--main-color);
          font-weight: 700;
        }

        .regular-price {
          margin-left: 5px;
          font-size: 12px;
          color: #777;
          text-decoration: line-through;
        }

        .onsale {
          padding: 3px 5px;
          background: var(--main-color);
          font-size: 10px;
          font-weight: 600;
          margin-left: 5px;
          border-radius: 5px;
          color: #FFF;
        }
      }

      .item-action {
        position: relative;

        .change-color {
          select {
            width: auto;
            border-radius: 25px;
          }
        }

        .change-quantity {

          span {
            cursor: pointer;
          }

          .number {
            margin-left: 5px;

            .minus {
              width: 25px;
              height: 25px;
              background: #ffffff;
              padding: 8px 5px 8px 5px;
              border: 1px solid #ddd;
              border-right: 0;
              border-radius: 4px 0 0 4px;
            }

            .plus {
              width: 25px;
              height: 25px;
              background: #ffffff;
              padding: 8px 5px 8px 5px;
              border: 1px solid #ddd;
              border-left: 0;
              border-radius: 0 4px 4px 0;
            }

            input {
              height: 25px;
              width: 30px;
              text-align: center;
              font-size: 14px;
              border: 1px solid #ddd;
              border-left: 0;
              border-right: 0;
              border-radius: 0;
            }
          }
        }
      }

      .product-item__heavy-fee {
        span {

        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .product-item {
    .product-item__info {
      .product-item__image {
        img {
          width: 150px;
        }
      }

      .product-item__info-detail {
        .product-name {
          font-size: 15px;
        }

        .product-item__price {
          .sale-price {
            font-size: 15px;
          }

          .regular-price {
            font-size: 14px;
          }

          .onsale {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

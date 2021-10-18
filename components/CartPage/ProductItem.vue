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
          <div class="change-color">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="change-quantity d-flex align-items-end mt-2">
            <p>Chọn số lượng:</p>
            <button class="btn-delete">
              <font-awesome-icon icon='trash-alt'/>
            </button>
            <div class="number d-flex">
              <span @click="minusQuantity()" class="minus d-flex justify-content-center align-items-center">-</span>
              <input type="text" :value="quantity"/>
              <span @click="plusQuantity()" class="plus d-flex justify-content-center align-items-center">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="check-item">
      <input type="checkbox" :checked="isCheck">
    </div>
    <div class="delete-item">
      <font-awesome-icon icon='times'/>
    </div>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";

export default {
  name: 'ProductItem',
  data() {
    return {
      selected: '',
      options: [],
      quantity: 1,
    }
  },
  props: {
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
    'imageUrl': {
      type: String,
      default: null
    },
    'color': {
      type: String,
      default: null
    },
    'colorSelect': [],
    'isCheck': {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.selected = this.color
    this.colorSelect.forEach(value => {
      this.options.push(value)
    })
  },
  computed: {
    formatProductPrice() {
      return Currency.format(this.productPrice)
    },
    formatProductSalePrice() {
      return Currency.format(this.productSalePrice)
    },
    percentDiscount() {
      return (100 - this.productSalePrice * (100 / this.productPrice)).toFixed(0)
    },
  },
  methods: {
    plusQuantity() {
      if (this.quantity < 3)
        this.quantity++;
    },
    minusQuantity() {
      if (this.quantity > 1)
        this.quantity--;
    }
  }
}
</script>
<style scoped lang="scss">
.product-item {
  padding: 10px 20px 10px 30px;

  .check-item {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);

    > input {
      -webkit-appearance: none;
      background-color: #fafafa;
      border: 1px solid #cacece;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 9px;
      border-radius: 3px;
      display: inline-block;
      position: relative;

      &:checked {
        background-color: #e9ecee;
        border: 1px solid #adb8c0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
        color: #99a1a7;

        &:after {
          content: '\2713';
          font-size: 14px;
          position: absolute;
          top: 0px;
          left: 3px;
          color: #99a1a7;
        }

        &:active {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .delete-item {
    position: absolute;
    top: 5px;
    right: 10px;

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
          .btn-delete {
            border-radius: 5px;
            font-size: 12px;
            border: 1px solid #cacece;
            background: #FFFFFF;
            color: #AAA;
            margin-left: 5px;
            height: 25px;
          }

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

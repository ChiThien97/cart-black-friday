<template>
  <div class="block-box mb-3">
    <div class="title">
      <p>Ưu đãi mua kèm</p>
    </div>
    <div class="cross-sell__products mt-2">
      <div class="cross-sell__products-img d-flex justify-content-around align-items-center">
        <img :src="product1.imageURL">
        <span class="plus">+</span>
        <img :src="product2.imageURL">
      </div>
      <div class="cross-sell__products-name mt-2">
        <div class="item d-flex justify-content-between">
          <p>{{ product1.name }}</p>
          <div class="price">
            <p class="sale-price">{{ formatPrice(product1.salePrice) }}</p>
            <p class="regular-price">{{ formatPrice(product1.regularPrice) }}</p>
          </div>
        </div>
        <div class="item d-flex justify-content-between">
          <p>{{ product2.name }}</p>
          <div class="price">
            <p class="sale-price">{{ formatPrice(product2.salePrice) }}</p>
            <p class="regular-price">{{ formatPrice(product2.regularPrice) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="total-box d-flex justify-content-between align-items-start mt-2 pt-2">
      <p class="title-temp">Tổng tiền:</p>
      <div class="price d-flex flex-column align-items-end">
        <span class="total">{{ formatTotal }}</span>
        <span class="sub-total">{{ formatTotal }}</span>
      </div>
    </div>
    <div class="btn-submit">
      <button class="btn btn-danger d-flex flex-column justify-content-center align-items-center w-100">
        Thêm Ngay
        <span>(Tiết kiệm {{ formatTotalSale }})</span></button>
    </div>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";

export default {
  name: 'BlockCrossSell',
  data() {
    return {
      product1: {
        imageURL: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg',
        name: 'iPhone 13 | Chính Hãng VN/A',
        regularPrice: '24000000',
        salePrice: '21500000'
      },
      product2: {
        imageURL: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/m/w/mwp22_av2.jpg',
        name: 'Tai nghe Bluetooth Apple Airpods Pro VN/A',
        regularPrice: '6000000',
        salePrice: '4500000'
      },
    }
  },
  computed: {
    formatTotal() {
      return Currency.format(this.product1.salePrice * 1 + this.product2.salePrice * 1)
    },
    formatSubTotal() {
      return Currency.format(this.product1.regularPrice * 1 + this.product2.regularPrice * 1)
    },
    formatTotalSale() {
      return Currency.format((this.product1.regularPrice * 1 + this.product2.regularPrice * 1) - (this.product1.salePrice * 1 + this.product2.salePrice * 1))
    },
  },
  methods: {
    formatPrice(price) {
      return Currency.format(price);
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  font-weight: 700;
}

.cross-sell__products {
  .cross-sell__products-img {
    .plus {
      font-size: 18px;
      font-weight: 500;
      color: #777777;
    }

    img {
      width: 100px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px 5px;
    }
  }

  .cross-sell__products-name {
    .item {
      &:not(:last-child) {
        margin-bottom: .5rem;
      }

      p {
        font-size: 12px;
        font-weight: 700;
      }

      .price {
        text-align: right;

        .sale-price {
          font-size: 12px;
          font-weight: 700;
          color: var(--main-color);
        }

        .regular-price {
          text-decoration: line-through;
          font-size: 10px;
          font-weight: 500;
          color: #777777;
        }
      }
    }
  }
}


.total-box {
  border-top: 1px solid #DDD;

  .title-temp {
    font-size: 12px;
    font-weight: 700;
  }

  .price {
    .total {
      font-size: 12px;
      font-weight: 700;
      color: var(--main-color);
    }

    .sub-total {
      text-decoration: line-through;
      font-size: 10px;
      font-weight: 500;
      color: #777777;
    }
  }
}

.btn-submit {
  .btn-danger {
    font-weight: 600;
    background-color: var(--main-color);
    text-transform: uppercase;

    span {
      font-size: 10px;
      font-weight: normal;
      text-transform: initial;
    }
  }
}

@media screen and (min-width: 1024px) {
  .cross-sell__products {
    .cross-sell__products-img {
      .plus {
        font-size: 30px;
      }

      img {
        width: 150px;
      }
    }

    .cross-sell__products-name {
      .item {
        p {
          font-size: 15px;
          font-weight: 700;
        }

        .price {

          .sale-price {
            font-size: 15px;
          }

          .regular-price {
            font-size: 12px;
          }
        }
      }
    }
  }
  .total-box {
    .title-temp {
      font-size: 15px;
    }

    .price {
      .total {
        font-size: 15px;
      }

      .sub-total {
        font-size: 12px;
      }
    }
  }
  .btn-submit {
    .btn-danger {
      span {
        font-size: 12px;
      }
    }
  }
}
</style>

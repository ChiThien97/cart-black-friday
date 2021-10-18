<template>
  <div class="block-box mt-3">
    <p class="mb-2">Thời gian nhận hàng</p>
    <p class="mb-2 time">Giao trước {{ time }} {{ date }}</p>
    <div class="product-list">
      <div class="product-item">
        <div class="product-img">
          <img
            src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
            alt="">
        </div>
        <div class="product-info">
          <p>Samsung Galaxy S21 Ultra 5G</p>
          <p><span>Màu sắc: </span>Đen</p>
          <p><span>Số lượng: </span>1</p>
          <p><span>Tổng tiền: </span>{{ formatTotal }}</p>
        </div>
      </div>
      <div class="product-item">
        <div class="product-img">
          <img
            src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
            alt="">
        </div>
        <div class="product-info">
          <p>Samsung Galaxy S21 Ultra 5G</p>
          <p><span>Màu sắc: </span>Đen</p>
          <p><span>Số lượng: </span>1</p>
          <p><span>Tổng tiền: </span>{{ formatTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Currency} from "@/_helper/number/currency";

export default {
  name: "SuccessProductBlock",
  data() {
    return {
      total: 26320000
    }
  },
  props: {
    time: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    }
  },
  computed: {
    formatTotal() {
      return Currency.format(this.total)
    }
  }
}
</script>

<style scoped lang="scss">
.block-box {
  p {
    font-weight: 600;
    margin: 5px 0;

    &.time {
      font-weight: normal;
    }
  }

  .product-list {
    .product-item {
      border: 1px solid #eee;
      border-radius: 15px;
      padding: 5px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      .product-img {
        width: calc(25% - 5px);

        img {
          width: 100%;
        }
      }

      .product-info {
        width: calc(75% - 5px);

        span {
          font-weight: normal;
        }
      }
    }
  }
}
</style>

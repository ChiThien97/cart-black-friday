<template>
  <div class="block-box">
    <p>Thông tin {{ title }}</p>
    <p v-if="orderId"><span>Mã đơn hàng: </span>{{ orderId }}</p>
    <p><span>Người nhận: </span>{{ customerName }}</p>
    <p><span>Số điện thoại: </span>{{ phone }}</p>
    <p v-if="isPickUp"><span>Nhận sản phẩm tại: </span>{{ address }}</p>
    <p v-else><span>Giao đến: </span>{{ address }}</p>
    <p v-if="smemberLevel"><span>Hạng thành viên: </span>{{ smemberLevel }}</p>
    <p v-if="smemberLevel"><span>Giảm giá Smember: </span>{{ formatSmemberDiscount }}</p>
    <p><span>Phí giao hàng: </span>{{ formatShipping }}</p>
    <p><span>Tổng tiền: </span>{{ formatTotal }}</p>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";

export default {
  name: "Infomation",
  props: {
    title: {
      type: String,
      default: null
    },
    orderId: {
      type: String,
      default: null
    },
    customerName: {
      type: String,
      default: null
    },
    phone: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: null
    },
    isPickUp: {
      type: Boolean,
      default: false
    },
    shipping: {
      type: String,
      default: null
    },
    total: {
      type: String,
      default: null
    },
    smemberLevel: {
      type: String,
      default: null
    },
    smemberDiscount: {
      type: String,
      default: null
    },
  },
  computed: {
    formatSmemberDiscount() {
      return Currency.format(this.smemberDiscount)
    },
    formatShipping() {
      return Currency.format(this.shipping)
    },
    formatTotal() {
      return Currency.format(this.total)
    },
  }
}
</script>
<style scoped lang="scss">
.block-box {
  p {
    font-weight: 600;
    margin: 15px 0;

    &:first-child {
      font-size: 18px;
    }

    span {
      font-weight: 400;
    }
  }
}
</style>

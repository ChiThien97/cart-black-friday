<template>
  <div class="mt-3">
    <p>Chọn hình thức thanh toán</p>
    <div class="payment-group d-flex flex-wrap justify-content-between">
      <input type="radio" id="cod" name="payment-method" value="cod" class="d-none">
      <label for="cod" class="payment-item block-box d-flex align-items-center justify-content-center">
        <span class="text-center">
          Thanh toán tiền mặt khi nhận hàng
        </span>
      </label>
      <input type="radio" id="cod-card" name="payment-method" value="cod-card" class="d-none">
      <label for="cod-card" class="payment-item block-box d-flex align-items-center justify-content-center">
        <span class="text-center">
          Cà thẻ khi nhận hàng
        </span>
      </label>
      <input type="radio" id="card" name="payment-method" value="card" class="d-none">
      <label for="card" class="payment-item block-box flex-column d-flex align-items-center justify-content-center">
        <span class="text-center">
          Thanh toán qua thẻ
        </span>
        <img :src="require('~/assets/img/visa.png')" alt="">
      </label>
      <input type="radio" id="zalo-pay" name="payment-method" value="zalo-pay" class="d-none">
      <label for="zalo-pay" class="payment-item block-box flex-column d-flex align-items-center justify-content-center">
        <span class="text-center">
          Thanh toán qua ví điện tử
        </span>
        <img :src="require('~/assets/img/zalopay.png')" alt="">
      </label>
      <input type="radio" id="vn-pay" name="payment-method" value="vn-pay" class="d-none">
      <label for="vn-pay" class="payment-item block-box flex-column d-flex align-items-center justify-content-center">
        <span class="text-center">
          Thanh toán qua
        </span>
        <img :src="require('~/assets/img/vnpay.png')" alt="">
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentMethod"
}
</script>
<style scoped lang="scss">
p {
  font-weight: 700;
  font-size: 18px;
}

.payment-group {

  .payment-item {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    height: 70px;

    &.block-box {
      padding: 5px;
    }

    span {
      font-size: 12px;
      font-weight: 600;
    }

    img {
      width: 100%;
    }
  }

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;

    &:checked {
      + {
        label {
          border: 1px solid var(--main-color);
          overflow: hidden;

          &:after {
            content: '\2713';
            width: 18px;
            height: 13px;
            border-radius: 0 0 0 0.5rem;
            background: var(--main-color);
            color: #ffffff;
            font-size: 10px;
            padding-left: 5px;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .payment-group {
    .payment-item {
      img {
        width: 65%;
      }
    }
  }
}
</style>

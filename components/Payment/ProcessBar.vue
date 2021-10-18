<template>
  <div class="block-process-bar d-flex justify-content-between py-3 px-5">
    <div class="process-item" :class="choose?'active':''">
      <div class="icon">
        <font-awesome-icon icon="shopping-cart"/>
      </div>
      <p>Chọn sản phẩm</p>
    </div>
    <div class="process-item" :class="info?'active':''">
      <div class="icon">
        <font-awesome-icon icon="address-card"/>
      </div>
      <p>Thông tin đặt hàng</p>
    </div>
    <div class="process-item" :class="payment?'active':''">
      <div class="icon">
        <font-awesome-icon icon="credit-card"/>
      </div>
      <p>Thanh toán</p>
    </div>
    <div class="process-item" :class="done?'active':''">
      <div class="icon">
        <font-awesome-icon icon="box-open"/>
      </div>
      <p>Hoàn tất đặt hàng</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProcessBar',
  props: {
    'choose': {
      type: Boolean,
      default: false
    },
    'info': {
      type: Boolean,
      default: false
    },
    'payment': {
      type: Boolean,
      default: false
    },
    'done': {
      type: Boolean,
      default: false
    },
  }
}
</script>
<style scoped lang="scss">
.block-process-bar {
  .process-item {
    width: 24%;
    position: relative;

    .icon {
      border-radius: 50%;
      border: 1px solid #777;
      width: 35px;
      height: 35px;
      margin: auto;
      position: relative;

      svg {
        color: #777777;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
      }
    }

    p {
      text-align: center;
      font-size: 12px;
    }

    &:not(:first-child):after {
      content: "";
      width: 30%;
      height: 1px;
      position: absolute;
      top: 25%;
      left: -17%;
      border-top: 1.5px dashed #777;
    }

    &.active {
      .icon {
        border-color: var(--main-color);

        svg {
          color: var(--main-color);
        }
      }

      p {
        color: var(--main-color);
      }

      &:not(:first-child):after {
        border-color: var(--main-color);
      }
    }
  }
}
</style>

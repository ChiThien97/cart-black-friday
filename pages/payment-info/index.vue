<template>
  <div>
    <TopBar
      back-text="Trở về"
      title="Thông tin đặt hàng"
      href="/cart"
    />
    <div class="block-info">
      <ProcessBar
        choose
        info
      />
      <div class="container block-box">
        <CustomerInfo/>
        <PaymentInfo/>
      </div>
    </div>
    <BottomBar
      action-text="Tiếp tục"
      href="/payment"
    />
  </div>
</template>

<script>
import TopBar from "~/components/CartPage/TopBar";
import ProcessBar from "~/components/Payment/ProcessBar";
import BottomBar from "~/components/CartPage/BottomBar";
import CustomerInfo from "~/components/Payment/CustomerInfo";
import PaymentInfo from "~/components/Payment/PaymentInfo";

export default {
  components: {
    TopBar,
    ProcessBar,
    BottomBar,
    CustomerInfo,
    PaymentInfo
  },
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'default-desktop'
}
</script>
<style scoped lang="scss">
.block-info {
  background: #fef2f2;
  max-width: 600px;
  margin: auto;
  border-radius: 15px;
}

.block-box {
  background: #FFF;
}
</style>

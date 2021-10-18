<template>
  <div>
    <TopBar
      back-text="Trở về"
      title="Thanh toán"
      href="/payment-info"
    />
    <div class="block-info">
      <ProcessBar
        choose
        info
        payment
      />
      <div class="container block-box">
        <Information
          title="đặt hàng"
          customer-name="Đoàn Anh Phương"
          phone="0911646437"
          address="350 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành Phố Hồ Chí Minh"
          shipping="20000"
          total="26320000"
          smember-level="SVIP"
          smember-discount="50000"
        />
        <PaymentMethod/>
      </div>
    </div>
    <BottomBar
      action-text="Tiếp tục"
      href="/success"
    />
  </div>
</template>
<script>
import TopBar from "~/components/CartPage/TopBar";
import ProcessBar from "~/components/Payment/ProcessBar";
import BottomBar from "~/components/CartPage/BottomBar";
import Information from "~/components/Payment/Information"
import PaymentMethod from "~/components/Payment/PaymentMethod";

export default {
  components: {
    TopBar,
    ProcessBar,
    BottomBar,
    Information,
    PaymentMethod
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

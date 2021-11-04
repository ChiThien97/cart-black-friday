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
          :customer-name=order.customer_name
          :phone=order.customer_phone
          :address=order.shipping_address
          :shipping=order.shipping_fee
          :total=order.grand_total
          :smember-level=order.customer_level
          :smember-discount=order.smember_discount
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
import {mapActions, mapState} from "vuex";

export default {
  components: {
    TopBar,
    ProcessBar,
    BottomBar,
    Information,
    PaymentMethod
  },
  computed: {
    ...mapState('order', ['order']),

  },
  async mounted() {
    await this.getOrderById(this.order.ID)
  },
  methods: {
    ...mapActions('order', ['getOrderById'])
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

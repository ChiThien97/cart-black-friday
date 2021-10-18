<template>
  <div>
    <TopBar
      back-text="Trở về"
      title="Giỏ hàng"
      href="/"
    />
    <div class="container mt-3">
      <BlockItemsInCart/>
      <PromotionInput/>
      <!--      <TotalTemp/>-->
      <!--      <BlockCrossSell/>-->
      <!--      <BlockAdditionalProduct/>-->
    </div>
    <BottomBar
      action-text="Tiến hành đặt hàng"
      href="/payment-info"
    />
  </div>
</template>

<script>
import TopBar from "~/components/CartPage/TopBar";
import BlockItemsInCart from "~/components/CartPage/BlockItemsInCart";
import PromotionInput from "~/components/CartPage/PromotionInput";
import TotalTemp from "~/components/CartPage/TotalTemp";
import BlockCrossSell from "~/components/CartPage/BlockCrossSell";
import BlockAdditionalProduct from "~/components/CartPage/BlockAdditionalProduct";
import BottomBar from "~/components/CartPage/BottomBar";

export default {
  components: {
    TopBar,
    BlockItemsInCart,
    PromotionInput,
    TotalTemp,
    BlockCrossSell,
    BlockAdditionalProduct,
    BottomBar
  },
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'default-desktop'
}
</script>

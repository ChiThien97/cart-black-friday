<template>
  <TopBar
    back-text="Trở về"
    title="Giỏ hàng"
    close-text="Đóng"
    href="/cart"
  />
</template>

<script>
import TopBar from "../components/CartPage/TopBar";

export default {
  components: {
    TopBar,
  },
  layout: 'default'
}
</script>

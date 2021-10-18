<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <p class="title-temp">Tổng tiền tạm tính:</p>
    <span class="total">{{ formatTotal }}</span>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";

export default {
  name: "TotalTemp",
  data() {
    return {
      totalPrice: 40000000
    }
  },
  computed: {
    formatTotal() {
      return Currency.format(this.totalPrice)
    }
  }
}
</script>
<style scoped>
.title-temp {
  font-weight: 700;
}

.total {
  font-size: 18px;
  font-weight: 700;
  color: var(--main-color);
}
</style>

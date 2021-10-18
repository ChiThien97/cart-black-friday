<template>
  <div class="block-customer">
    <p>Thông tin khách hàng</p>
    <div class="d-flex">
      <div class="radio-item d-flex align-items-center mr-2 p-0">
        <input id="anh" name="gioitinh" type="radio">
        <label class="mb-0 ml-1" for="anh">Anh</label>
      </div>
      <div class="radio-item d-flex align-items-center p-0">
        <input id="chi" name="gioitinh" type="radio">
        <label class="mb-0 ml-1" for="chi">Chị</label>
      </div>
    </div>
    <div class="mt-2">
      <input class="mb-2" type="text" placeholder="Họ và tên" name="name">
      <input class="mb-2" type="text" placeholder="Số điện thoại" name="phone">
      <input type="email" placeholder="Email" name="email">
    </div>
  </div>
</template>
<script>

export default {
  name: "CustomerInfo",
}
</script>
<style scoped lang="scss">
.block-customer {
  background: #FFF;
  border-radius: 15px 15px 0 0;

  > p {
    font-weight: 700;
  }
}
</style>

<template>
  <div class="mt-3">
    <button class="btn btn-primary mb-2 w-100">Kiểm tra đơn hàng</button>
    <button class="btn btn-danger w-100">Mua thêm sản phẩm khác
      <font-awesome-icon icon="chevron-right"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup"
}
</script>

<style scoped lang="scss">
button.btn {
  font-weight: 600;
  border-radius: 15px;

  .btn-danger {
    background-color: var(--main-color);
  }
}
</style>

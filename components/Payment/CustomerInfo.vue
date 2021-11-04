<template>
  <div class="block-customer">
    <p>Thông tin khách hàng</p>
    <div v-if="!isEdit" class="btn-edit d-flex align-items-end p-0">
      <span @click="editInfomation()" class="mb-0 badge badge-pill alert-danger">Sửa thông tin</span>
    </div>
    <!--    <div class="d-flex justify-content-between align-items-center">-->
    <!--      <div class="d-flex align-items-center">-->
    <!--                <div class="radio-item d-flex align-items-center mr-2 p-0">-->
    <!--                  <input id="anh" name="gioitinh" value="Anh" type="radio" v-model="isMale">-->
    <!--                  <label class="mb-0 ml-1" for="anh">Anh</label>-->
    <!--                </div>-->
    <!--                <div class="radio-item d-flex align-items-center mr-2 p-0">-->
    <!--                  <input id="chi" name="gioitinh" value="Chị" type="radio" v-model="isMale">-->
    <!--                  <label class="mb-0 ml-1" for="chi">Chị</label>-->
    <!--                </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="mt-2">
      <input class="mb-2" type="text" placeholder="Họ và tên" v-model="customerInfo.name"
             @focusout="updateCustomerInfo()" :disabled="!isEdit">
      <input class="mb-2" type="text" placeholder="Số điện thoại" v-model="customerInfo.phone"
             @focusout="updateCustomerInfo()" :disabled="!isEdit">
      <input type="email" placeholder="Email" name="email" v-model="customerInfo.mail"
             @focusout="updateCustomerInfo()" :disabled="!isEdit">
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "CustomerInfo",
  data() {
    return {
      customerInfo: {
        name: '',
        phone: '',
        mail: '',
      },
      isEdit: true
    }
  },
  created() {
    this.setCustomerInfo();
  },
  computed: {
    ...mapState('shippingAddress', ['shippingInfo']),
    ...mapState('quote', ['quote']),
  },
  methods: {
    ...mapActions('shippingAddress', ['updateShippingAddress']),
    ...mapActions('quote', ['updateCustomerInfoQuote']),
    updateCustomerInfo() {
      this.updateCustomerInfoQuote(this.customerInfo)
    },
    setCustomerInfo() {
      this.customerInfo.name = this.quote.customer_name
      this.customerInfo.phone = this.quote.customer_phone
      this.customerInfo.mail = this.quote.customer_mail
      this.isEdit = false
    },
    editInfomation() {
      this.isEdit = true
    }
  }
}
</script>
<style scoped lang="scss">
.block-customer {
  background: #FFF;
  border-radius: 15px 15px 0 0;

  > p {
    font-weight: 700;
  }

  .btn-edit {
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 10px;
  }
}
</style>

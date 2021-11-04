<template>
  <div class="block-payment mt-3">
    <p>Chọn cách thức giao hàng</p>
    <div class="d-flex">
      <div class="radio-item d-flex align-items-center mr-2 p-0">
        <input id="shipping" name="delivery" type="radio">
        <label class="mb-0 ml-1" for="shipping">Giao hàng tận nơi</label>
      </div>
      <div class="radio-item d-flex align-items-center p-0">
        <input id="pickup" name="delivery" type="radio">
        <label class="mb-0 ml-1" for="pickup">Nhận tại cửa hàng</label>
      </div>
    </div>
    <div class="address-box mt-3">
      <p class="mb-2">Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có)</p>
      <div class="d-flex">
        <select class="form-control mr-1" v-model="provinceId" @change="getDistrictsById(provinceId)">
          <option value="0" selected>Tỉnh / Thành phố</option>
          <option v-for="item in provinces" :key="item.id" :value="item.id">{{
              item.type + ' ' + item.name
            }}
          </option>
        </select>
        <select class="form-control mx-1" v-model="districtId" @change="getWardsById(districtId)">
          <option value="0" selected>Quận / Huyện</option>
          <option v-for="item in districts" :key="item.id" :value="item.id">{{ item.type + ' ' + item.name }}</option>
        </select>
        <select class="form-control ml-1" v-model="wardId">
          <option value="0" selected>Phường / Xã</option>
          <option v-for="item in wards" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
      </div>
      <input class="form-control mt-2" id="address" name="address" type="text" placeholder="Số nhà, tên đường">
    </div>
    <div class="mt-3">
      <input type="text" name="note" placeholder="Yêu cầu khác">
    </div>
    <div class="mt-3 d-flex flex-column">
      <div class="form-group">
        <input type="checkbox" name="VAT" id="VAT">
        <label for="VAT">Yêu cầu xuất hóa đơn công ty</label>
      </div>
      <div class="form-group">
        <input type="checkbox" name="comfirm" id="comfirm">
        <label for="comfirm">Không cần gọi điện xác nhận đơn hàng
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "PaymentInfo",
  data() {
    return {
      provinceId: "0",
      districtId: "0",
      wardId: "0",
    }
  },
  created() {
    this.getProvinces();
  },
  computed: {
    ...mapState('subdivisions', ['provinces', 'districts', 'wards']),
    ...mapState('shippingAddress', ['shippingAddress']),
  },
  methods: {
    ...mapActions('subdivisions', ['getProvinces', 'getDistricts', 'getWards']),
    ...mapActions('shippingAddress', ['updateAddressQuote']),
    async getDistrictsById(id) {
      this.districtId = "0"
      this.wardId = "0"
      await this.getDistricts(id)
    },
    async getWardsById(id) {
      this.wardId = "0"
      await this.getWards(id)
    },
  }
}
</script>
<style scoped lang="scss">
.block-payment {
  background: #FFF;
  border-radius: 15px 15px 0 0;

  > p {
    font-weight: 700;
  }

  .radio-item input[type='radio']:checked + label:after {
    left: 5.5%
  }

  .address-box {
    padding: 10px;
    background: #f3f4f6;
    border-radius: 15px;
    border: 1px solid #e5e7eb;
  }

  select {
    border-radius: 10px;
  }

  .form-group {
    display: block;
    margin-bottom: 15px;

    input {
      padding: 0;
      height: initial;
      width: initial;
      margin-bottom: 0;
      display: none;
      cursor: pointer;

      &:checked {
        + {
          label {
            &:after {
              content: '';
              display: block;
              position: absolute;
              top: 4px;
              left: 6px;
              width: 6px;
              height: 12px;
              border: solid var(--main-color);
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
            }

            &:before {
              border-color: var(--main-color)
            }
          }
        }
      }
    }

    label {
      position: relative;
      cursor: pointer;

      &:before {
        content: '';
        -webkit-appearance: none;
        background-color: transparent;
        border: 2px solid #777;
        padding: 7px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
      }

      svg {
        font-size: 18px;
      }
    }
  }

}
</style>

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
        <b-form-select v-model="city.selected" :options="city.options" class="mr-1"></b-form-select>
        <b-form-select v-model="city.selected" :options="city.options" class="mr-1"></b-form-select>
        <b-form-select v-model="district.selected" :options="district.options" class="ml-1"></b-form-select>
      </div>
      <input class="mt-2" id="address" name="address" type="text" placeholder="Số nhà, tên đường">
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
import address from "~/_helper/dbjson/db.json"

export default {
  name: "PaymentInfo",
  data() {
    return {
      address: address,
      city: {
        selected: '',
        options: [],
        quantity: 1,
      },
      district: {
        selected: '',
        options: [],
        quantity: 1,
      },
    }
  },
  created() {
    this.city.selected = "hcm"
    this.address.city.forEach(value => {
      this.city.options.push(value)
    })
    this.district.selected = ""
    this.address.district.forEach(value => {
      this.district.options.push(value)
    })
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

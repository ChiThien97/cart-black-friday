<template>
  <div v-if="ItemQuoteCounter()" class="bottom-bar container mt-2 block-box">
    <div class="total-box d-flex justify-content-between align-items-start">
      <p class="title-temp">Tổng tiền tạm tính:</p>
      <div class="price d-flex flex-column align-items-end">
        <span class="total">{{ formatTotal }}</span>
      </div>
    </div>
    <div class="btn-submit mt-2">
      <button class="btn btn-danger d-flex flex-column justify-content-center align-items-center w-100 mb-2"
              @click="goContinue">
        {{ actionText }}
      </button>
      <a href="https://cellphones.com.vn"
         class="btn btn-outline-danger d-flex flex-column justify-content-center align-items-center w-100">
        Chọn thêm sản phẩm khác
      </a>
    </div>
  </div>
</template>
<script>
import {Currency} from "~/_helper/number/currency";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "BottomBar",
  props: {
    'actionText': {
      type: String,
      default: null
    },
    'href': {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState('quote', ['quote']),
    ...mapState('order', ['order']),
    ...mapGetters('quote', ['ItemQuoteCounter']),
    formatTotal() {
      return Currency.format(this.quote.grand_total_without_smember)
    }
  },
  async mounted() {
    await this.getProductFromQuote(this.quote.ID)
  },
  methods: {
    ...mapActions('quote', ['getProductFromQuote']),
    ...mapActions('shippingAddress', ['updateAddressQuote']),
    ...mapActions('order', ['createOrderByQuoteID']),
    goContinue() {
      if (this.href === '/payment') {
        this.updateAddressQuote(this.quote.ID).then((value) => {
          if (value) {
            (this.order.ID === '') ? this.createOrderByQuoteID(this.quote.ID) : ''
          }

        })
        console.log("QUOTE_ID: " + this.quote.ID)
      }

      this.$router.push(this.href)
    }
  }
}
</script>
<style scoped lang="scss">
.bottom-bar {
  .total-box {
    .title-temp {
      font-weight: 600;
    }

    .price {
      .total {
        font-weight: 700;
        color: var(--main-color);
      }
    }
  }

  .btn-submit .btn.btn-danger {
    font-weight: 600;
    background-color: var(--main-color);
    text-transform: uppercase;
  }

  .btn-submit .btn.btn-outline-danger {
    font-weight: 600;
    text-transform: uppercase;
  }
}


@media screen and (min-width: 1024px) {
  .btn-submit .btn {
    height: 60px;
  }
}
</style>

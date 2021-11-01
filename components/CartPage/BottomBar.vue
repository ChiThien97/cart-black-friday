<template>
  <div v-if="ItemQuoteCounter()" class="bottom-bar container mt-2 block-box">
    <div class="total-box d-flex justify-content-between align-items-start">
      <p class="title-temp">Tổng tiền tạm tính:</p>
      <div class="price d-flex flex-column align-items-end">
        <span class="total">{{ formatTotal }}</span>
      </div>
    </div>
    <div class="btn-submit mt-2">
      <button class="btn btn-danger d-flex flex-column justify-content-center align-items-center w-100"
              @click="goContinue">
        {{ actionText }}
      </button>
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
    ...mapState('product', ['products']),
    ...mapGetters('product', ['ItemQuoteCounter']),
    formatTotal() {
      return Currency.format(this.products.grand_total_without_smember)
    }
  },
  async mounted() {
    await this.getProductFromQuote(6)
  },
  methods: {
    ...mapActions('product', ['getProductFromQuote']),
    goContinue() {
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

  .btn-submit .btn {
    font-weight: 600;
    background-color: var(--main-color);
    text-transform: uppercase;
  }
}


@media screen and (min-width: 1024px) {
  .btn-submit .btn {
    height: 60px;
  }
}
</style>

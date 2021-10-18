<template>
  <div class="bottom-bar container mt-2 block-box">
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

export default {
  name: "BottomBar",
  data() {
    return {
      total: 26900000
    }
  },
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
    formatTotal() {
      return Currency.format(this.total)
    }
  },
  methods: {
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

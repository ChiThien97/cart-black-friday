<template>
  <div class="cart-header d-flex align-items-center justify-content-center">
    <div class="go-back" v-if="backText">
      <a class="d-flex align-items-center" @click="goBack">
        <font-awesome-icon icon='chevron-left'/>
        <p> {{ backText }}</p>
      </a>
    </div>
    <p class="title m-auto">{{ title }}</p>
    <div class="close-cart" v-if="closeText">
      <a class="d-flex align-items-center" @click="goBack">
        <font-awesome-icon icon='times'/>
        <p>{{ closeText }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  components: {},
  props: {
    'backText': {
      type: String,
      default: null
    },
    'closeText': {
      type: String,
      default: null
    },
    'title': {
      type: String,
      default: null
    },
    'href': {
      type: String,
      default: null
    }
  },
  methods: {
    goBack() {
      this.$router.push(this.href)
    }
  }
}
</script>

<style scoped lang="scss">
.cart-header {
  min-height: 50px;
  background: var(--main-color);
  color: #ffffff;
  position: relative;

  .title {
    font-weight: 600;
    font-size: 18px;
  }

  .go-back {
    align-self: center;
    position: absolute;
    left: 10px;
  }

  .close-cart {
    align-self: center;
    position: absolute;
    right: 10px;
  }

  a {
    color: white;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    padding-left: 5px;
  }
}

@media screen and (min-width: 1024px) {
  .cart-header {
    background: #FFFFFF;
    min-height: auto;
    max-width: 600px;
    margin: auto;
    color: var(--main-color);

    .go-back {
      align-self: center;
    }

    .close-cart {
      align-self: center;
    }

    a {
      color: var(--main-color);
    }
  }

}
</style>

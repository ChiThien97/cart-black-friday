<template>
  <div class='box-search '>
    <form @submit.stop.prevent='submit()'>
      <div class='cps-group-input d-flex'>
        <div class='input-group-btn'>
          <button class='btn pr-0 border-0 shadow-none outline-none text-dark' type='submit'>
            <font-awesome-icon icon='search'/>
          </button>
        </div>
        <input id='inp$earch' v-model='key' type='text' class='cps-input' placeholder='Bạn cần tìm gì?'
               @blur='resetSearchResult()'>
      </div>
    </form>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'HeaderSearch',
  data() {
    return {
      key: ''
    }
  },
  computed: {
    ...mapState('header-search', ['searchResults'])
  },
  methods: {
    ...mapActions('header-search', ['getSearchResult', 'submitSearchForm', 'resetSearchResult']),
    submit() {
      this.submitSearchForm(this.key)
    }
  }
}
</script>
<style scoped lang="scss">
.box-search {
  width: 450px;

  .cps-group-input {
    position: relative;

    .cps-input {
      padding: 5px;
      border-radius: 0 1rem 1rem 0;
      box-shadow: none;
      width: calc(100% - 26px);
      height: 34px;
      border: 0;
      background: #FFFFFF;

      &:focus-visible {
        outline: 0;
      }
    }

    .input-group-btn {
      width: auto;
      height: 34px;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 1rem 0 0 1rem;
      font-size: 1.6rem;
      color: #707070;
    }
  }
}
</style>

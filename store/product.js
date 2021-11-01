export const state = () => ({
  products: [],
})
export const actions = {
  getProductFromQuote({dispatch, commit}, id) {
    return this.$axios.$get(`${process.env.cartServer}/quote/${id}`)
      .then(response => {
        commit('getProductFromQuote', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  updateItemQuantity({dispatch, commit}, {id, itemId, itemQuantity}) {
    const formData = new FormData()
    formData.append('item_quantity', itemQuantity)
    formData.append('item_id', itemId)
    return this.$axios.$put(`${process.env.cartServer}/quantity/${id}`, formData)
      .then(response => {
        commit('updateItemQuantity', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  deleteItemInQuote({dispatch, commit}, {id, itemId}) {
    console.log(`item ID = ${itemId}`)
    const formData = new FormData()
    formData.append('item_id', itemId)
    return this.$axios.$delete(`${process.env.cartServer}/quote/item/${id}`, {data: formData})
      .then(response => {
        commit('deleteItemInQuote', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  }
}

export const getters = {
  ItemQuoteCounter: (state) => () => {
    return (state.products && state.products.quote_item) ? state.products.quote_item.length : 0
  }
}

export const mutations = {
  getProductFromQuote(state, products) {
    state.products = products
  },
  updateItemQuantity(state, products) {
    state.products = products
  },
  deleteItemInQuote(state, products) {
    state.products = products
  },
}

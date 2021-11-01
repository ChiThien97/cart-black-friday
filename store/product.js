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
  updateItemQuantity({dispatch, commit, state}, {id, itemId, itemQuantity}) {
    const formData = new FormData()
    formData.append('item_quantity', itemQuantity)
    formData.append('item_id', itemId)
    return this.$axios.$put(`${process.env.cartServer}/quote/${id}/quantity`, formData)
      .then(response => {
        // dispatch('getProductFromQuote', id)
        quote_item.commit('updateItemQuantity')
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  deleteItemInQuote({dispatch, commit}, {id, itemId}) {
    const formData = new FormData()
    formData.append('item_id', itemId)
    return this.$axios.$delete(`${process.env.cartServer}/quote/${id}/item`, {data: formData})
      .then(response => {
        dispatch('getProductFromQuote', id)
        commit('deleteItemInQuote')
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
  updateItemQuantity() {
    console.log('Update Cart Success')
  },
  deleteItemInQuote() {
    console.log('Delete Item In Cart Success')
  },
}

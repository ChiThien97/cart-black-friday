export const state = () => ({
  quote: {
    ID: '',
    customer_name: '',
    customer_phone: '',
    customer_mail: '',
  }
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
    return this.$axios.$put(`${process.env.cartServer}/quote/${id}/quantity`, formData)
      .then(response => {
        commit('updateItemQuantity', {itemId: itemId, quantity: itemQuantity})
        commit('updateTotal')
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  deleteItemInQuote({dispatch, commit}, {id, itemId}) {
    const formData = new FormData()
    formData.append('item_id', itemId)
    return this.$axios.$delete(`${process.env.cartServer}/quote/${id}/item`, {data: formData})
      .then(response => {
        // dispatch('getProductFromQuote', id)
        commit('deleteItemInQuote')
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  setQuoteID({commit}, id) {
    return commit('setQuoteID', id)
  },
  updateCustomerInfoQuote({commit}, customerInfo) {
    return commit('updateCustomerInfoQuote', customerInfo)
  }
}

export const getters = {
  ItemQuoteCounter: (state) => () => {
    return (state.quote && state.quote.quote_item) ? state.quote.quote_item.length : 0
  }
}

export const mutations = {
  getProductFromQuote(state, quote) {
    state.quote = quote
  },
  updateTotal(state) {
    state.quote.grand_total_without_smember = 0
    const items = Array.from(state.quote.quote_item)
    items.forEach(item => {
      state.quote.grand_total_without_smember += ((item.item_discount_price + item.heavy_fee) * item.item_quantity)
    })
  },
  deleteItemInQuote() {
    console.log('Delete Item In Cart Success')
  },
  updateItemQuantity(state, {itemId, quantity}) {
    const items = Array.from(state.quote.quote_item)
    items.forEach(item => {
      if (item.item_id === itemId) {
        item.item_quantity = quantity
      }
    })
  },
  setQuoteID(state, id) {
    state.quote.ID = id
  },
  updateCustomerInfoQuote(state, customerInfo) {
    state.quote.customer_name = customerInfo.name
    state.quote.customer_phone = customerInfo.phone
    state.quote.customer_mail = customerInfo.mail
  }

}

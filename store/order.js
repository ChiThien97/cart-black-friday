export const state = () => ({
  order: {
    ID: ''
  }
})

export const actions = {
  createOrderByQuoteID({dispatch, commit}, id) {
    return this.$axios.$post(`${process.env.cartServer}/order?quote_id=${id}`)
      .then(response => {
        commit('createOrderByQuoteID', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  getOrderById({dispatch, commit}, id) {
    return this.$axios.$get(`${process.env.cartServer}/order/${id}`)
      .then(response => {
        commit('getOrderById', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  }
}

export const mutations = {
  createOrderByQuoteID(state, order) {
    state.order.ID = order.order_id
    console.log('ID_ORDER: ' + order.order_id + ' -- ' + order.message)
  },
  getOrderById(state, order) {
    state.order = order
    console.log('GET_ORDER_BY_ID: ' + order.ID)
  }
}

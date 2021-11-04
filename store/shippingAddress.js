export const state = () => ({
  shippingInfo: {
    recipient_name: '',
    recipient_phone: '',
  }
})

export const actions = {
  updateAddressQuote({dispatch, commit}, id) {
    debugger
    const formData = new FormData()
    formData.append("street", "350 Võ Văn Kiệt");
    formData.append("province_id", "79");
    formData.append("district_id", "760");
    formData.append("ward_id", "26755");
    formData.append("shipping_method", "Shipping");
    formData.append("is_buy_as_gift", "0");
    console.log('CALL_API: ' + `${process.env.cartServer}/quote/${id}/address`)
    return this.$axios.$post(`${process.env.cartServer}/quote/${id}/address`, formData)
      .then(response => {
        console.log('ID QUOTE BEFORE UPDATE: ' + response)
        commit('updateAddressQuote', response.quote_id)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
}

export const mutations = {
  updateAddressQuote(id) {
    console.log('ID QUOTE AFTER UPDATE: ' + id)
    return true
  },
}

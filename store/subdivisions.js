export const state = () => ({
  provinces: {},
  districts: {},
  wards: {},
})

export const actions = {
  getProvinces({dispatch, commit}) {
    return this.$axios.$get(`${process.env.cartServer}/provinces`)
      .then(response => {
        commit('getProvinces', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  getDistricts({dispatch, commit}, id) {
    return this.$axios.$get(`${process.env.cartServer}/province/${id}/districts`)
      .then(response => {
        commit('getDistricts', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  },
  getWards({dispatch, commit}, id) {
    return this.$axios.$get(`${process.env.cartServer}/district/${id}/wards`)
      .then(response => {
        commit('getWards', response)
      }).catch(error => {
        dispatch('alert/error', error, {root: true})
      })
  }
}

export const mutations = {
  getProvinces(state, provinces) {
    state.provinces = provinces
  },
  getDistricts(state, districts) {
    state.districts = districts
  },
  getWards(state, wards) {
    state.wards = wards
  },
}

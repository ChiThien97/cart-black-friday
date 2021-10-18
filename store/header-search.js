export const state = () => ({
  searchResults: ''
})

export const actions = {
  getSearchResult({dispatch, commit}, key) {
    return this.$axios.$get('https://cellphones.com.vn/catalogsearch/ajax/suggest/', {
      params: {'q': key},
      headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0'}
    }).then(response => {
      commit('getSearchResult', response);
    }).catch(error => {
      dispatch('alert/error', error, {root: true});
    });
  },
  submitSearchForm({dispatch, commit}, key) {
    window.location = 'https://cellphones.com.vn/catalogsearch/result/?q=' + key;
  },
  resetSearchResult({dispatch, commit}) {
    commit('resetSearchResult');
  }
}

export const mutations = {
  getSearchResult(state, response) {
    state.searchResults = response;
    console.log(state.searchResults);
  },
  resetSearchResult(state) {
    state.searchResults = '';
  }
}

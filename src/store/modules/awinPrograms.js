import axios from 'axios';

const state = {
  programs: []
};

const getters = {
  allPrograms: state => state.programs
};

const actions = {
  async fetchPrograms(/*{ commit }*/) {
    const response = await axios.get(
      'https://api.awin.com/publishers/${VUE_APP_AFFILIATE}/programmes?accessToken=${VUE_APP_ACCESS_TOKEN}'
    );

    //commit('setPrograms', response.data);
    console.log(response.data)
  }
};

const mutations = {
  setPrograms: (state, programs) => (state.programs = programs)
};

export default {
  state,
  getters,
  actions,
  mutations
};
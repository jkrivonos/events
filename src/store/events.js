import * as eventsApi from  '@/api/events.js'

export default {
  namespaced: true,
  state: {
    events: null,
    selectedEvent: null
  },
  getters: {
    all: state => state.events,
    selected: state => state.selectedEvent
  },
  mutations: {
    setEvents(state, events) {
      state.events = events
    },
    setSelectedEvent(state, event) {
      state.selectedEvent = event
    }
  },
  actions: {
    async load({ commit }){
      let response = await eventsApi.all()
      commit('setEvents', response.events)
    },
    getInfo({ getters, commit }, id) {
      let event = getters.all.find(el => el.id === id);
      commit('setSelectedEvent', event)
    }
  }
}
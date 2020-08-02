import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state: {
    traffic: {
      home: {
        index: 0,
        forensic_accounting: 0,
      },
      about: 0,
      services: {
        business_consulting: 0,
        business_solutions: 0,
        income_taxes: 0,
        millionaire_next_door: 0,
        personal_finance: 0,
      },
      quickbooks: {
        best_or_beast: 0,
        why_quickbooks: 0,
      },
      testimonials: {
        current: 0,
        previous: 0,
      },
      faqs: 0,
      contact: 0,
      client_login: 0,
    }
  },
  mutations: {
    visit_home: (state) => { state.traffic.home.index++; },
    visit_foracc: (state) => { state.traffic.home.forensic_accounting++; },
    visit_about: (state) => { state.traffic.about++; },
    visit_sbc: (state) => { state.traffic.services.business_consulting++; },
    visit_sbs: (state) => { state.traffic.services.business_solutions++; },
    visit_sit: (state) => { state.traffic.services.income_taxes++; },
    visit_smd: (state) => { state.traffic.services.millionaire_next_door++; },
    visit_spf: (state) => { state.traffic.services.personal_finance++; },
    visit_qbb: (state) => { state.traffic.quickbooks.best_or_beast++; },
    visit_qwq: (state) => { state.traffic.quickbooks.why_quickbooks++; },
    visit_tcurr: (state) => { state.traffic.testimonials.current++; },
    visit_tprev: (state) => { state.traffic.testimonials.previous++; },
    visit_faq: (state) => { state.traffic.faqs++; },
    visit_contact: (state) => { state.traffic.contact++; },
    visit_login: (state) => { state.traffic.client_login++; },
  }
})

export default store

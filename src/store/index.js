import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2,
    user: {
      user_name: '',
      img: '',
      uid: 1
    }
  },
  mutations: {
    add(state, count) {
      if (count == '+') {
        state.count++;
      } else if (count == '-' && state.count > 0) {
        state.count--;
      }
    },
    get(state,uname) {
      state.user.user_name = uname;
    },
    getid(state,uid) {
      state.user.uid = uid;
    },
    get1(state, img) {
      state.user.img = img;
    },
    del(state) {
      state.user.user_name = '';
    }
  },
  actions: {
  },
  modules: {
  }
})

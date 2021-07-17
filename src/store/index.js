import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: []
  },
  getters: {
    allUsers: state => state.users
  },
  mutations: {
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.push(user),
    removeUser: (state, id) => state.users = state.users.filter(user => user.id !== id), 
  },
  actions: {
    async fetchUsers({ commit }) {
        const response = await axios.get('http://localhost:5001/users')

        commit('setUsers', response.data);
    },

    async addUser({ commit }, object) {
        const response = await axios.post('http://localhost:5001/users', object);

        commit('newUser', response.data);
    },

    async deleteUser({ commit }, id) {
        await axios.delete(`http://localhost:5001/users/${id}`);

        commit('removeUser', id);
    }
  },
})

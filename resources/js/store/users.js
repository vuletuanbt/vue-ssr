export const users = {
    namespaced: true,
    state: () => ({
        allUsers: [],
    }),

    actions: {
        setUser({commit}, data) {
            commit('setUser', data);
        },
        setUsers({commit}, users) {
            commit('setUsers', users);
        }
    },

    mutations: {
        setUser(state, user) {
            state.allUsers.push(user)
        },
        setUsers(state, allUsers) {
            state.allUsers = allUsers
        }
    },

    getters: {
        getUsers(state) {
            return state.allUsers
        }
    }
}

import { login, logout, getInfo } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'



const state = {
    token: getToken(),
    name: '',
    avatar: '',
    user: {},
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
        setToken(token)
    },
    REMOVE_TOKEN: (state) => {
        state.token = null
        state.name = null
        state.avatar = null
        removeToken()
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_USERINFO: (state, userinfo) => {
        state.user = userinfo
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(({ data }) => {
                commit('SET_TOKEN', data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
import { getList } from '../api/api.js';

export function getListAsync({ commit }) {
    getList().then((data) => {
        commit('changeList', data.data)
    })
}

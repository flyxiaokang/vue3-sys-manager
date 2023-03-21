/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-03-22 11:28:02
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-08-11 11:25:34
 */

const state = {
    tagsList: [],
    collapse: false
}

const getters = {
    tagsList: () => state.tagsList,
    collapse: () => state.collapse
}

const mutations = {
    delTagsItem(state, data) {
        state
            .tagsList
            .splice(data.index, 1);
    },
    setTagsItem(state, data) {
        state
            .tagsList
            .push(data)
    },
    clearTags(state) {
        state.tagsList = []
    },
    closeTagsOther(state, data) {
        state.tagsList = data;
    },
    closeCurrentTag(state, data) {
        for (let i = 0, len = state.tagsList.length; i < len; i++) {
            const item = state.tagsList[i];
            if (item.path === data.$route.fullPath) {
                if (i < len - 1) {
                    data
                        .$router
                        .push(state.tagsList[i + 1].path);
                } else if (i > 0) {
                    data
                        .$router
                        .push(state.tagsList[i - 1].path);
                } else {
                    data
                        .$router
                        .push("/");
                }
                state
                    .tagsList
                    .splice(i, 1);
                break;
            }
        }
    },
    // 侧边栏折叠
    handleCollapse(state, data) {
        state.collapse = data;
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2021-11-27 20:54:07
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 11:44:44
-->
<template>
    <div class="about">
        <Header />
        <v-sidebar />
        <div
            class="content-box"
            :class="{ 'content-collapse': collapse }"
        >
            <v-tags></v-tags>
            <div class="content_custom">
                <router-view v-slot="{ Component ,route}">
                    <transition
                        name="move"
                        mode="out-in"
                    >
                        <!-- 缓存 -->
                        <!-- <keep-alive :include="tagsList"> -->
                        <keep-alive :include="tagsList">
                            <component
                                :is="Component"
                                :key="route.name"
                            />
                        </keep-alive>
                    </transition>
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>
<script>
import { computed, reactive, ref, toRefs, watch } from "vue";
import { useStore, mapGetters } from "vuex";
import vHeader from "./components/Header.vue";
import vSidebar from "./components/Sidebar.vue";
import vTags from "./components/Tags.vue";
import Header from "./components/Header.vue";
export default {
    components: {
        vHeader,
        vSidebar,
        vTags,
        Header,
    },
    setup() {
        const store = useStore();
        const tagsList = computed(() =>
            store.state.app.tagsList
                .filter((item) => item.meta.keepAlive)
                .map((item) => item.name)
        );

        // const collapse = computed(() => store.state.app.collapse);

        // const collapse = computed(
        //     mapGetters(["collapse"]).getLoading.bind({ $store: store })
        // );

        const [collapse] = Object.values(mapGetters("app", ["collapse"])).map(
            (it) => computed(it.bind({ $store: store }))
        );

        console.log('???',collapse)

        // const state = reactive({
        //     includeList: [],
        // });

        // watch(
        //     tagsList,
        //     (nv, ov) => {
        //         console.log("tagsList???????????", nv, ov);
        //     },
        //     {
        //         deep: true,
        //     }
        // );

        // watch(
        //     state,
        //     (nv, ov) => {
        //     },
        //     {
        //         deep: true,
        //     }
        // );

        // const route = useRoute()
        // watch(
        //     () => route,
        //     (newVal, oldVal) => {
        //         if (
        //             newVal.meta.keepAlive &&
        //             state.includeList.indexOf(newVal.name) === -1
        //         ) {
        //             state.includeList.push(newVal.name);
        //         }
        //     },
        //     { deep: true }
        // ); // 开启深度监听

        return {
            tagsList,
            collapse,
            // ...toRefs(store),
        };
    },
};
</script>

<style scoped>
.content {
    background-color: white;
}
</style>
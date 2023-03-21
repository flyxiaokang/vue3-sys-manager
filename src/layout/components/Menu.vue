<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-03-21 10:34:23
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 17:23:16
-->
<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        router="true"
        mode="horizontal"
        background-color="#243041"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <template
            v-for="(childMenus,index) in sysMenus"
            :key="index"
        >
            <el-menu-item
                v-if="childMenus.children === undefined"
                :index="childMenus.router"
            >{{ childMenus.label }}</el-menu-item>

            <el-sub-menu
                v-else
                :index="childMenus.router"
            >
                <template #title>{{childMenus.label}}</template>
                <template
                    v-for="(childMenus2,index2) in childMenus.children"
                    :key="index2 + '_2'"
                >
                    <el-menu-item
                        v-if="childMenus2.children === undefined"
                        :index="childMenus2.router"
                    >{{ childMenus2.label }}</el-menu-item>

                    <el-sub-menu
                        v-else
                        :index="childMenus2.router"
                    >
                        <template #title>{{childMenus2.label}}</template>
                        <el-menu-item
                            v-for="(childMenus3,index3) in childMenus2.children"
                            :key="index3 + '_2'"
                            :index="childMenus3.router"
                        >{{ childMenus3.label }}</el-menu-item>
                    </el-sub-menu>
                </template>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

import { menus } from "./menus";

const activeIndex = ref("/dashboard");

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
};

const sysMenus = reactive(menus);

onMounted(() => {
    let router = useRouter();
    console.log("router", router.currentRoute.value.fullPath);
    activeIndex.value = router.currentRoute.value.fullPath;
});
</script>

<style scoped>
.el-menu-demo {
    height: 71px;
    max-width: 600px;
}
</style>
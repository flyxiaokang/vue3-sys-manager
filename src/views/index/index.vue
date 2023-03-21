<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2023-03-03 21:58:35
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 11:33:37
-->
<template>
    <div class="dashboard_contanier">
        <el-row style="height:500px;">
            <el-col :span="8">
                <CustomCharts/>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import CustomCharts from '@/components/CustomCharts.vue'

</script>

<script>
export default {
    name: "dashboard",
};
</script>

<style scoped>
.dashboard_contanier{
    display: flex;
    width: 100%;
    height: 100%;
}
</style>

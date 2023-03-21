<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-05-09 16:18:30
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 11:36:41
-->
<template>
    <div style="width:400px;height:400px;">
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import { reactive } from "vue";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

const chartData = reactive({
    labels: ["January", "February", "March"],
    datasets: [{ data: [40, 20, 12] }],
});

const chartOptions = reactive({
    responsive: true,
});

</script>

<style scoped>
</style>
<template>
    <main class="data_statistics">
        <div class="layout-1">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-box :height="300"></chart-box>
            </el-card>
            <el-card>
                <span slot="header">用户信息</span>
                <chart-box :height="300"></chart-box>
            </el-card>
            <el-card>
                <span slot="header">用户信息</span>
                <chart-box :height="300"></chart-box>
            </el-card>
        </div>
        <div class="layout-2">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-box :height="300"></chart-box>
            </el-card>
        </div>
    </main>
</template>

<script>
import ChartBox from '@/containers/chart-box'
export default {
    name: 'DataStatistics',
    components: {
        ChartBox
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
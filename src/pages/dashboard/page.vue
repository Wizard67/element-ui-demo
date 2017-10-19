<template>
    <main class="data_statistics">
        <div class="layout-1">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bar :height="300" :data="data" :options="options"></chart-bar>
            </el-card>
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bar :height="300" :data="data" :options="options"></chart-bar>
            </el-card>
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bar :height="300" :data="data" :options="options"></chart-bar>
            </el-card>
        </div>
        <div class="layout-2">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bar :height="300" :data="data" :options="options"></chart-bar>
            </el-card>
        </div>
    </main>
</template>

<script>
import { ChartBar } from '@/components/chart-box'
export default {
    path: '/dashboard',
    name: 'dashboard',
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    computed: {
        data() {
            return this.$store.state.dashboard.data
        }
    },
    components: {
        ChartBar
    }
}
</script>

<style lang="scss">
    @import "~@/assets/css/utils";

    /*********** #layout ***********/
    @include _media(xl) {
        .layout-1 {
            @include _flex(top);
        }
        .layout-2 {
            @include _flex(top);
        }
    }

    @include _media(lg) {}

    @include _media(md) {
        .layout-1 {
            @include _flex(column)
        }
    }

    @include _media(sm) {}

    @include _media(xs) {}
</style>

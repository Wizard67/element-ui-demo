<template>
    <main class="data_statistics">
        <div class="layout-1">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bar :height="300" :data="configBar.data" :options="configBar.options"></chart-bar>
            </el-card>
            <el-card>
                <span slot="header">用户信息</span>
                <chart-bubble :height="300" :data="configBar.data" :options="configBar.options"></chart-bubble>
            </el-card>
            <el-card>
                <span slot="header">终端信息</span>
                <chart-doughnut :height="300" :data="configDoughnut.data" :options="configDoughnut.options"></chart-doughnut>
            </el-card>
        </div>
        <div class="layout-2">
            <el-card>
                <span slot="header">用户信息</span>
                <chart-line :height="300" :data="configBar.data" :options="configBar.options"></chart-line>
            </el-card>
        </div>
    </main>
</template>

<script>
import { ChartBar, ChartBubble, ChartDoughnut, ChartLine } from '@/components/chart-box'
export default {
    path: '/dashboard',
    name: 'dashboard',
    data() {
        return {
            configBar: {
                data: {
                    labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    datasets: [
                        {
                            label: '活跃用户',
                            backgroundColor: '#f87979',
                            data: [32, 20, 12, 28, 10, 25, 39]
                        },
                        {
                            label: '注册用户',
                            backgroundColor: '#8bc34a',
                            data: [10, 2, 5, 3, 12, 9, 7]
                        },
                        {
                            label: '验证用户',
                            backgroundColor: '#607d8b',
                            data: [20, 8, 18, 7, 18, 9, 14]
                        }
                    ]
                },
                options: {
                    categoryPercentage: .7,
                    barPercentage: 1.0,
                    responsive: true,
                    maintainAspectRatio: false
                }
            },
            configDoughnut: {
                data: {
                    labels: ['Chrome', 'Firefox', 'Sogou', 'IE 8.0', 'IE 9.0', 'IE 11.0', 'UC', 'Other'],
                    datasets: [
                        {
                            label: ['Chrome', 'Firefox', 'Sogou', 'IE 8.0', 'IE 9.0', 'IE 11.0', 'UC', 'Other'],
                            backgroundColor: ['#f87979', '#8bc34a', '#795548', '#673ab7', '#009688', '#cddc39', '#00bcd4', '#9e9e9e'],
                            data: [55.04, 2.31, 2.77, 2.6, 1.12, 2.44, 3.35, 13.57]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        }
    },
    computed: {
        data() {
            return this.$store.state.dashboard.data
        }
    },
    components: {
        ChartBar,
        ChartBubble,
        ChartDoughnut,
        ChartLine
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

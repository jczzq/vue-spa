<template>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>

<script>
    import apiInitConfig from 'src/services/api.initConfig.js';
    export default {
        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            initData() {
                apiInitConfig.initProvince()
                .then(function(res) {
                    console.log('res', res.data);
                })
                .catch(function(err) {
                    console.log('err', err.response.status);
                });
            },
            handleResize() {
                var w = document.documentElement.clientWidth;
                document.getElementsByTagName('html')[0].style['font-size'] = Math.min((w / 10).toFixed(1), 1080 / 10) + 'px';
            }
        }
    };
</script>

<style lang="less">
    @import '~src/style/_agile.less';
    html,body{
        margin:0;
        min-height: 100vh;
        color: @extra-light-black;
    }
</style>

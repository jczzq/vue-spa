import Vue from 'vue';
import App from './App';
import router from './router';

// 关闭开发提醒
Vue.config.productionTip = false;

// 添加全局样式
import 'src/style/_style.less';

// 过滤器
import 'src/filter/filter';

// 指令
import 'src/directives/directive.js';
import touch from 'src/directives/touch';
Vue.use(touch);

// 引入字体图标
import 'src/style/fonts/iconfont.js';
// 全局图标组件
import mIcon from 'src/components/m-icon';
Vue.component('m-icon', mIcon);

import knife from 'src/vendor/knife.js';
router.beforeEach((to, from, next) => {
    // knife.LoadingBar.start();
    knife.title(to.meta.title || '美问·品牌中心');
    next();
});

router.afterEach(() => {
    // knife.LoadingBar.finish();
    window.scrollTo(0, 0);
});

var vm = new Vue({  // eslint-disable-line
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

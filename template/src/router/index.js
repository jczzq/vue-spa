import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

var index = resolve => require(['src/view/index/index'], resolve);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        }
    ]
});

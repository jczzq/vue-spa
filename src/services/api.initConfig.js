import request from './request.js';

export default {
    // 1.初始化省
    initProvince() {
        var url = '/api/administrativeArea/topAreas';
        return request(url);
    },
    // 2.根据省 获取 市
    getCityListByProvince(code) {
        var url = `/api/administrativeArea/areas/${code}`;
        return request(url);
    },
    // 3.获取银行列表
    getBankList() {
        var url = '/api/bank/list?date=' + Date.now();
        return request(url);
    },
    // 4.获取营业范围
    getBusinessScope() {
        var url = '/api/businessScope/list';
        return request(url);
    }

};

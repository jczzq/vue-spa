import request from './request.js';

export default {
    // 上传图片
    uploadImage: function(data) {
        // 如果id存在则返回{data:id}
        var promise = new Promise(function(resolve, rejeact) {
            if (!data) {
                resolve({ data: null });
            }
            if (data.id) {
                resolve({ data: data.id });
            } else if (data.base64) {
                var tempAry = data.base64.split(',');
                var base64Str = (tempAry.length == 2) ? tempAry[1] : '';
                var url = '/api/file';
                return request(url, 'post', {
                    content: base64Str,
                    contentType: data.origin.type,
                    originalName: data.origin.name
                });
            } else {
                resolve({ data: null});
            }
        });
        return promise;
    },
    // 上传多张图片
    uploadImages: function(images) {
        var promises = [];
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            promises.push(this.uploadImage(image));
        }
        return Promise.all(promises);
    }
};

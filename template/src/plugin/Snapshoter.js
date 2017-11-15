/**
 * 本地快照 管理员
 */
export default class Snapshoter {
    constructor(LSId) {
        // 唯一标志(对应用户id)
        this.storageId = LSId;
        // 存储数据
        this.data = function() {
            Snapshoter.check();
            return JSON.parse(window.localStorage.getItem(LSId));
        };
        // 保存当前用户的本地快照
        this.save = function(data) {
            Snapshoter.check();
            if (data) {
                window.localStorage.setItem(this.storageId, JSON.stringify(data));
                Snapshoter.add(this.storageId);
            } else {
                console.warn('将被存储的快照为null');
            }
            let snapshoterList = JSON.parse(window.localStorage.getItem('Snapshoter-List')) || [];
            // 最多存储三个用户的快照
            if (snapshoterList.length > 3) {
                let snapId = snapshoterList.shift();
                Snapshoter.remove(snapId);
                window.localStorage.removeItem(snapId);
            }
        };
        // 清空当前用户的本地快照
        this.reset = function() {
            Snapshoter.check();
            window.localStorage.removeItem(this.storageId);
            Snapshoter.remove(this.storageId);
        };
    }
    static check() {
        if (!window.localStorage) {
            return;
        }
    }
    // 添加快照编号到队列
    static add(lsId) {
        Snapshoter.check();
        let snapshoterList = JSON.parse(window.localStorage.getItem('Snapshoter-List')) || [];
        if (lsId && !snapshoterList.includes(lsId) && lsId != '') {
            snapshoterList.push(lsId);
            window.localStorage.setItem('Snapshoter-List', JSON.stringify(snapshoterList));
        }
    };
    // 回收快照编号
    static remove(lsId) {
        Snapshoter.check();
        let snapshoterList = JSON.parse(window.localStorage.getItem('Snapshoter-List')) || [];
        if (lsId && snapshoterList.includes(lsId) && lsId != '') {
            snapshoterList = snapshoterList.filter(x => {return x != lsId;});
            window.localStorage.setItem('Snapshoter-List', JSON.stringify(snapshoterList));
        }
    };
    // 队列长度
    static has(lsId) {
        Snapshoter.check();
        let snapshoterList = JSON.parse(window.localStorage.getItem('Snapshoter-List')) || [];
        return snapshoterList.includes(lsId);
    };
};

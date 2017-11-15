/**
 * 验证规则对象
 * void 0 === undefined
 */
const ValidRules = {
    // 空字符串
    isNonEmpty(value, errorMsg) {
        if (value.length !== void 0) {
            return value.length === 0 ? errorMsg : void 0;
        } else {
            return void 0;
        }
    },
    // 最小长度
    minLength(value, length, errorMsg) {
        if (value.length !== void 0) {
            return value.length < length ? errorMsg : void 0;
        } else {
            return void 0;
        }
    },
    // 最大长度
    maxLength(value, length, errorMsg) {
        if (value.length) {
            return value.length > length ? errorMsg : void 0;
        } else {
            return void 0;
        }
    },
    // 手机号
    isMoblie(value, errorMsg) {
        return !/^1(3|4|5|7|8)[0-9]{9}$/.test(value) ? errorMsg : void 0;
    },
    // 座机号
    isTelephone(value, errorMsg) {
        return !/^0\d{2,3}-\d{7,8}$/.test(value) ? errorMsg : void 0;
    },
    // 邮箱
    isEmail(value, errorMsg) {
        return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) ? errorMsg : void 0;
    },
    // 校验中文(字符串仅能是中文)
    isChineseStr(value, errorMsg) {
        return !/^[\\u4e00-\\u9fa5]{0,}$/.test(value) ? errorMsg : void 0;
    },
    // 身份证
    isIDCard(value, errorMsg) {
        return !/^([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})$/.test(value) ? errorMsg : void 0;
    }
};

/**
 * 验证员 类
 */
export default class Validator {
    constructor() {
        // 工作清单（效验规则数组）
        this.validList = [];
    }
    // 添加校验规则 dom==dom.value
    add(dom, rules) {
        for (let rule of rules) {
            // ['minLength', 6]
            let strategyArr = rule.strategy.split(':');
            let errorMsg = rule.errorMsg;
            this.validList.push(() => {
                // 'minLength', [6]
                let strategy = strategyArr.shift();
                // [dom.value, 6]
                strategyArr.unshift(dom);
                // [dom.value, 6, errorMsg]
                strategyArr.push(errorMsg);
                return ValidRules[strategy].apply(dom, strategyArr);
            });
        }
    }
    // 开始验证
    work() {
        for (let validFunc of this.validList) {
            // 开始校验，并取得校验后的返回信息
            let errorMsg = validFunc();
            if (errorMsg) {
                return errorMsg;
            }
        }
    }
};

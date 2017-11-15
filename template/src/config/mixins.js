/* 图片基础路径 */
export const BASE_IMG_PATH = '/api/file/';
export const SPLIT_IMG_PATH = '/api/image/';

/* 性别 */
export const GENDERS = [
    { name: '男', value: '1' },
    { name: '女', value: '2' },
    { name: '未知', value: '3' }
];

// business-regist 商户注册申请 审核流程
export const PROMOTION_AUDIT_STATUS = [
    { name: '待审核', logo: 'icon-', value: 'normal' },
    { name: '一审通过', logo: 'icon-', value: 'checked_1' },
    { name: '一审通过', logo: 'icon-', value: 'checked' },
    { name: '被驳回', logo: 'icon-', value: 'unChecked' }
];

/* business-regist 开通服务 */
export const OPEN_SERVIVES = [
    { id: 'ULTIMATE', label: '旗舰版', value: '1' },
    { id: 'BASIC', label: '通用版', value: '2' },
    { id: 'MARKET', label: '营销版', value: '3' },
    { id: 'OTHER', label: '其他服务', value: '4' }
];

/* 账户类型 */
export const ACCOUNT_TYPE = [
    { id: '1', label: '储值', value: '1' },
    { id: '2', label: '对公', value: '2' }
];

// 活动
export const PROMOTION = [
    { id: 'GROUP', label: '团拼', value: 1 },
    { id: 'BIGWHEEL', label: '大转盘', value: 2 },
    { id: 'ONETON', label: '买赠', value: 3 },
    { id: 'REDENVELOPE', label: '红包', value: 4 },
    { id: 'FATHER', label: '父亲节', value: 5 }
];

// 审核步骤
export const STATUS = [
    { id: 'AUDIT', label: '待审核', value: '1' },
    { id: 'FIRST_INSTANCE', label: '一审通过', value: '2' },
    { id: 'SECOND_TRIAL', label: '二审通过', value: '3' },
    { id: 'FIRST_INSTANCE_DISMISSED', label: '一审驳回', value: '4' },
    { id: 'SECOND_INSTANCE_DISMISSED', label: '二审驳回', value: '5' }
];

// 所属行业
export const BUSINESS_SCOPES = [
    { id: '1', label: '美容', value: 1 },
    { id: '2', label: '美发', value: 2 },
    { id: '3', label: '美甲美睫纹绣半永久', value: 3 },
    { id: '5', label: '养生足疗按摩', value: 5 },
    { id: '7', label: '其他', value: 7 },
    { id: '8', label: '皮肤管理', value: 8 },
    { id: '9', label: '瑜伽健身', value: 9 },
    { id: '10', label: '宠物店', value: 10 }
];

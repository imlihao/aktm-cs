var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 操作员，司机，管理员
 */
var user = (function () {
    function user() {
    }
    return user;
}());
__reflect(user.prototype, "user");
/**
 *  订单
 */
var order = (function () {
    function order() {
    }
    return order;
}());
__reflect(order.prototype, "order");
/**
 * 客户
 */
var customer = (function () {
    function customer() {
    }
    return customer;
}());
__reflect(customer.prototype, "customer");
//# sourceMappingURL=valueObj.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OrderView = (function (_super) {
    __extends(OrderView, _super);
    function OrderView() {
        var _this = _super.call(this) || this;
        _this.skinName = MainUiOrderSkin;
        return _this;
        // this.init();
    }
    OrderView.prototype.userDisplay = function (status) {
        var users = new Array();
        if (MainUI.instance.Userdata.users.length != 0) {
            for (var _i = 0, _a = MainUI.instance.Userdata.users; _i < _a.length; _i++) {
                var u = _a[_i];
                if (u.status == status)
                    users.push(u);
            }
        }
        this.list.itemRenderer = userItem;
        this.list.dataProvider = new eui.ArrayCollection(users);
        this.addBtn.visible = false;
    };
    OrderView.prototype.flush = function () {
        this.list.dataProviderRefreshed();
    };
    OrderView.prototype.cusDisplay = function () {
        this.addBtn.visible = false;
        this.list.itemRenderer = cusItem;
        this.list.dataProvider = new eui.ArrayCollection(MainUI.instance.Userdata.customers);
    };
    OrderView.prototype.init = function () {
        this.list.itemRenderer = orderItem;
        if (MainUI.instance.Userdata.my.status == 2 || MainUI.instance.Userdata.my.status == 3) {
            console.error(MainUI.instance.Userdata.orders);
            var orders = new Array();
            for (var _i = 0, _a = MainUI.instance.Userdata.orders; _i < _a.length; _i++) {
                var od = _a[_i];
                if (od.order_status == MainUI.instance.Userdata.my.status - 1) {
                    orders.push(od);
                    console.log("find");
                }
            }
            console.error(orders);
            this.list.dataProvider = new eui.ArrayCollection(orders);
        }
        else {
            this.list.dataProvider = new eui.ArrayCollection(MainUI.instance.Userdata.orders);
        }
        this.list.scrollEnabled = true;
        if (MainUI.instance.Userdata.my.status == 1 || MainUI.instance.Userdata.my.status == 4) {
            this.addBtn.visible = true;
            this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addOrder, this);
        }
        else {
            this.addBtn.visible = false;
        }
    };
    OrderView.prototype.addOrder = function () {
        var op = null;
        var diver = null;
        var cus = null;
        for (var _i = 0, _a = MainUI.instance.Userdata.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.status == 2)
                op = u;
            if (u.status == 3)
                diver = u;
        }
        if (op && diver && MainUI.instance.Userdata.customers.length != 0) {
            var view = new AddOrder();
            view.init(op, diver);
            UIManager.instance.showPop(view);
        }
        else {
            notice.add("人员信息不足，请先录入司机，客户，操作员");
        }
    };
    return OrderView;
}(eui.Component));
__reflect(OrderView.prototype, "OrderView");
var userItem = (function (_super) {
    __extends(userItem, _super);
    function userItem() {
        var _this = _super.call(this) || this;
        _this.skinName = OperatorSkin;
        return _this;
    }
    userItem.prototype.dataChanged = function () {
        var dat = this.data;
        this.id.text = "工号：" + dat.UID;
        if (dat.CarID)
            this.carID.text = "车牌号：" + dat.CarID;
        this.status.text = "职位：" + RoleSt2string(dat.status);
        this.phone.text = "电话：" + "1300000001";
        this.uname.text = "姓名：" + dat.Uname;
    };
    return userItem;
}(eui.ItemRenderer));
__reflect(userItem.prototype, "userItem");
var cusItem = (function (_super) {
    __extends(cusItem, _super);
    function cusItem() {
        var _this = _super.call(this) || this;
        _this.skinName = OperatorSkin;
        return _this;
    }
    cusItem.prototype.dataChanged = function () {
        var dat = this.data;
        this.id.text = "编号：" + dat.customer_ID;
        this.uname.text = "姓名：" + dat.customer_name;
        this.status.text = "公司：" + dat.company;
        this.addr.text = "地址：" + dat.address;
        this.phone.text = "电话：" + dat.phone;
    };
    return cusItem;
}(eui.ItemRenderer));
__reflect(cusItem.prototype, "cusItem");
var orderItem = (function (_super) {
    __extends(orderItem, _super);
    function orderItem() {
        var _this = _super.call(this) || this;
        _this.skinName = OderItemRander;
        return _this;
    }
    orderItem.prototype.dataChanged = function () {
        var _this = this;
        var dat = this.data;
        this.order_id.textFlow = [
            { text: "单号：" },
            { text: dat.order_ID + "" }
        ];
        this.order_status.textFlow = [
            { text: "状态：" },
            { text: OrderSt2String(dat.order_status) }
        ];
        this.time.textFlow = [
            { text: (new Date(dat.order_time).toTimeString()) }
        ];
        this.Op.textFlow = [
            { text: "仓库操作员：" },
            { text: dat.operator.Uname + dat.operator.UID }
        ];
        this.dirver.textFlow = [
            { text: "司机：" },
            { text: dat.dirver.Uname + dat.dirver.CarID }
        ];
        this.customer.textFlow = [
            { text: "客户：" },
            { text: dat.customer.customer_name + "-" + dat.customer.company }
        ];
        this.addr.textFlow = [
            { text: "地址：" },
            { text: dat.customer.address }
        ];
        this.pos.textFlow = [
            { text: dat.pos }
        ];
        this.detail.textFlow = [
            { text: dat.detial }
        ];
        if (MainUI.instance.Userdata.my.status == 2 || MainUI.instance.Userdata.my.status == 3) {
            this.finishBtn.visible = true;
            this.finishBtn.once(egret.TouchEvent.TOUCH_TAP, function () {
                //TODO
                console.log("更改订单信息");
                var dat = _this.data;
                var cmd = new Cmd.orderSt();
                cmd.order_ID = dat.order_ID;
                cmd.status = MainUI.instance.Userdata.my.status - 1;
                NetMgr.instance.TcpSend(cmd);
            }, this);
        }
        else {
            this.finishBtn.visible = false;
        }
    };
    return orderItem;
}(eui.ItemRenderer));
__reflect(orderItem.prototype, "orderItem");
function OrderSt2String(st) {
    if (st == 1) {
        return "正在出库中";
    }
    else if (st == 2) {
        return "正在运送中";
    }
    return "已完成";
}

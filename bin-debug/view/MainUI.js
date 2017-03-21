var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 主UI界面
 */
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.data = null;
        _this.skinName = MainUISkin;
        return _this;
    }
    Object.defineProperty(MainUI, "instance", {
        get: function () {
            if (!MainUI._self)
                MainUI._self = new MainUI();
            return MainUI._self;
        },
        enumerable: true,
        configurable: true
    });
    MainUI.prototype.init = function () {
        this.switchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switch, this);
        this.st.text = "职位：" + RoleSt2string(this.data.my.status);
        this.nameLabel.text = "姓名：" + this.data.my.Uname;
        this.id.text = "工号：" + this.data.my.UID;
        if (!this.orderLayer)
            this.orderLayer = new OrderView();
        this.orderLayer.init();
        this.MainGroup.addChild(this.orderLayer);
    };
    MainUI.prototype.switch = function (e) {
        if (e.target instanceof eui.RadioButton) {
            var btn = e.target;
            if (!this.orderLayer)
                this.orderLayer = new OrderView();
            this.MainGroup.removeChildren();
            this.orderLayer.setVis();
            switch (btn.label) {
                case "订单管理":
                    this.orderLayer.init();
                    this.MainGroup.addChild(this.orderLayer);
                    break;
                case "司机信息":
                    this.orderLayer.userDisplay(3);
                    this.MainGroup.addChild(this.orderLayer);
                    break;
                case "客户信息":
                    this.orderLayer.cusDisplay();
                    this.MainGroup.addChild(this.orderLayer);
                    break;
                case "仓储管理":
                    this.orderLayer.userDisplay(2);
                    this.MainGroup.addChild(this.orderLayer);
                    break;
                case "人事管理":
                    //TODO 
                    break;
                case "我的订单":
                    //TODO 
                    break;
            }
        }
    };
    Object.defineProperty(MainUI.prototype, "Userdata", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            if (!this.data) {
                this.data = data;
                for (var _i = 0, _a = this.data.orders; _i < _a.length; _i++) {
                    var od = _a[_i];
                    if (!od.dirver)
                        od.dirver = new user();
                    if (!od.operator)
                        od.operator = new user();
                    if (!od.customer)
                        od.customer = new customer();
                }
                //TODO 初始化
                this.init();
                UIManager.instance.showUI(this, true);
            }
            else {
                this.data = data;
                for (var _b = 0, _c = this.data.orders; _b < _c.length; _b++) {
                    var od = _c[_b];
                    if (!od.dirver)
                        od.dirver = new user();
                    if (!od.operator)
                        od.operator = new user();
                    if (!od.customer)
                        od.customer = new customer();
                }
                if (this.orderLayer)
                    this.orderLayer.flush();
            }
        },
        enumerable: true,
        configurable: true
    });
    return MainUI;
}(eui.Component));
__reflect(MainUI.prototype, "MainUI");
function RoleSt2string(st) {
    if (st == 1) {
        return "普通操作员";
    }
    else if (st == 2) {
        return "仓库操作员";
    }
    else if (st == 3) {
        return "司机";
    }
    return "管理员";
}

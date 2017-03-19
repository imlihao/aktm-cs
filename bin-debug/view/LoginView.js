var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.skinName = loginSkin;
        _this.init();
        return _this;
    }
    LoginView.prototype.init = function () {
        this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        egret.Tween.get(this.bg, { loop: true }).to({ x: -400 }, 6000).to({ x: 0 }, 6000);
    };
    LoginView.prototype.onClick = function () {
        var acc = this.accInput.text;
        var psd = this.psdInput.text;
        if (acc && psd) {
            var cmd = new Cmd.login();
            cmd.UID = Number(acc);
            cmd.psd = psd;
            NetMgr.instance.TcpSend(cmd);
        }
        else {
            notice.add("请输入正确信息");
        }
    };
    LoginView.prototype.Test = function () {
        var u = new user();
        u.UID = 2013020202;
        u.status = 1;
        u.Uname = "屎蛋";
        var us = new Array();
        us.push(u);
        us.push(u);
        us.push(u);
        var u2 = new user();
        u2.UID = 2013020203;
        u2.status = 2;
        u2.Uname = "大大";
        us.push(u2);
        us.push(u2);
        us.push(u2);
        var u3 = new user();
        u3.UID = 2013020203;
        u3.status = 3;
        u3.Uname = "二二";
        us.push(u3);
        us.push(u3);
        us.push(u3);
        var cu = new customer();
        cu.address = "亚洲-日本-列岛";
        cu.company = "热天坛";
        cu.customer_ID = 1;
        cu.phone = "12321313";
        var cus = new Array();
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        cus.push(cu);
        var od = new order();
        od.order_ID = 2;
        od.customer = cu;
        od.operator = u;
        od.dirver = u;
        od.detial = "大大-肌肤的经济腹地-多岁的大三-大事记一IQ噩梦大师-大叔控啥的";
        od.order_status = 1;
        od.order_time = 1444402002;
        od.pos = "ii-pp-点睡-请求";
        var ods = new Array();
        ods.push(od);
        ods.push(od);
        ods.push(od);
        ods.push(od);
        ods.push(od);
        ods.push(od);
        var usd = new Cmd.UserData();
        usd.customers = cus;
        var uu = new user();
        uu.UID = 2013020203;
        uu.status = 1;
        uu.Uname = "二二";
        usd.my = uu;
        usd.orders = ods;
        usd.users = us;
        MainUI.instance.Userdata = usd;
    };
    return LoginView;
}(eui.Component));
__reflect(LoginView.prototype, "LoginView");
var notice = (function () {
    function notice() {
    }
    //    private static self:notice;
    //    public get instance(){
    //      if(!notice.self)notice.self=new notice();
    //      return notice.self;  
    //    }
    /**
     * @ param str  要弹出的信息
     */
    notice.add = function (str) {
        var label = new eui.Label();
        label.text = str;
        label.x = 640 - label.width / 2;
        label.y = 300;
        UIManager.instance.showPop(label);
        egret.Tween.get(label).to({ y: label.y - 20 }, 500).call(function () {
            UIManager.instance.removePop(label);
        });
    };
    return notice;
}());
__reflect(notice.prototype, "notice");

var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddCusView = (function (_super) {
    __extends(AddCusView, _super);
    function AddCusView() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        _this.skinName = AddCustomer;
        _this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.addRole, _this);
        _this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.destroy, _this);
        return _this;
    }
    AddCusView.prototype.addRole = function () {
        var us = new customer();
        us.customer_name = this.nameInput.text;
        us.address = this.addrInput.text;
        us.company = this.comInput.text;
        us.phone = this.phoneInput.text;
        if (us.customer_name && us.address && us.phone && us.company) {
            var cmd = new Cmd.rolechange();
            cmd.bool = true;
            cmd.cus = us;
            NetMgr.instance.TcpSend(cmd);
            this.destroy();
        }
        else {
            notice.add("填写完整信息");
        }
    };
    AddCusView.prototype.destroy = function () {
        UIManager.instance.removePop(this);
    };
    return AddCusView;
}(eui.Component));
__reflect(AddCusView.prototype, "AddCusView");

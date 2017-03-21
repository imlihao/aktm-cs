var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddOpView = (function (_super) {
    __extends(AddOpView, _super);
    function AddOpView(type) {
        var _this = _super.call(this) || this;
        _this.type = 1;
        _this.skinName = addRoleSkin;
        _this.type = type;
        _this.init();
        return _this;
    }
    AddOpView.prototype.init = function () {
        if (this.type == 1) {
            this.titleLabel.text = "新增操作员";
        }
        else if (this.type == 2) {
            this.titleLabel.text = "新增仓库操作员";
        }
        else if (this.type == 3) {
            this.titleLabel.text = "新增司机";
            this.CarIDInput.visible = true;
            this.carLabel.visible = true;
        }
        this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addRole, this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.destroy, this);
    };
    AddOpView.prototype.addRole = function () {
        var us = new user();
        us.Uname = this.nameInput.text;
        us.psd = this.psdInput.text;
        us.status = this.type;
        us.UID = Number(this.UIDInput.text);
        us.CarID = this.CarIDInput.text;
        if (us.Uname && us.psd && us.UID) {
            var cmd = new Cmd.rolechange();
            cmd.bool = true;
            cmd.op = us;
            NetMgr.instance.TcpSend(cmd);
            this.destroy();
        }
        else {
            notice.add("填写完整信息");
        }
    };
    AddOpView.prototype.destroy = function () {
        UIManager.instance.removePop(this);
    };
    return AddOpView;
}(eui.Component));
__reflect(AddOpView.prototype, "AddOpView");

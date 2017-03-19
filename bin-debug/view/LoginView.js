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
//# sourceMappingURL=LoginView.js.map
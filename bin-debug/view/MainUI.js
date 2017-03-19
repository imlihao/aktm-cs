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
    Object.defineProperty(MainUI.prototype, "Userdata", {
        set: function (data) {
            this.data = data;
            //TODO 初始化
            console.error("开始初始化界面" + data.my.Uname + "status:" + data.my.status);
        },
        enumerable: true,
        configurable: true
    });
    return MainUI;
}(eui.Component));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map
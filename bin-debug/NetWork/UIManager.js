var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 */
var UIManager = (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super.call(this) || this;
        _this.UILayer = new egret.DisplayObjectContainer();
        _this.PopLayer = new egret.DisplayObjectContainer();
        _this.addChild(_this.UILayer);
        _this.addChild(_this.PopLayer);
        return _this;
    }
    Object.defineProperty(UIManager, "instance", {
        get: function () {
            if (!UIManager._self) {
                UIManager._self = new UIManager();
            }
            return UIManager._self;
        },
        enumerable: true,
        configurable: true
    });
    UIManager.prototype.showPop = function (ui, removeOther) {
        if (removeOther === void 0) { removeOther = false; }
        if (removeOther)
            this.PopLayer.removeChildren();
        this.PopLayer.addChild(ui);
    };
    UIManager.prototype.removePop = function (ui) {
        this.PopLayer.removeChild(ui);
    };
    UIManager.prototype.showUI = function (ui, removeOther) {
        if (removeOther === void 0) { removeOther = false; }
        if (removeOther)
            this.UILayer.removeChildren();
        this.UILayer.addChild(ui);
    };
    UIManager.prototype.removeUI = function (ui) {
        this.UILayer.removeChild(ui);
    };
    return UIManager;
}(egret.DisplayObjectContainer));
__reflect(UIManager.prototype, "UIManager");

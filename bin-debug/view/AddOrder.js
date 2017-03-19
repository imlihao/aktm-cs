var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddOrder = (function (_super) {
    __extends(AddOrder, _super);
    function AddOrder() {
        var _this = _super.call(this) || this;
        _this.skinName = AddOrderView;
        return _this;
    }
    AddOrder.prototype.init = function (op, di) {
        this.cus = MainUI.instance.Userdata.customers[0];
        this.op = op;
        this.dirver = di;
        this.dirverLabel.text = this.dirver.Uname;
        this.opLabel.text = this.op.Uname;
        this.cusLabel.text = this.cus.customer_name;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
    };
    AddOrder.prototype.OnClick = function (e) {
        if (e.target == this.closeBtn) {
            this.destroy();
        }
        else if (e.target == this.confirmBtn) {
            var des = this.desInput.text;
            var pos = this.posInput.text;
            if (!des || !pos) {
                notice.add("信息不完全");
            }
            else {
                var cmd = new Cmd.orderAdd();
                cmd.cus_id = this.cus.customer_ID;
                cmd.op_id = this.op.UID;
                cmd.dirver_id = this.dirver.UID;
                cmd.pos = pos;
                cmd.des = des;
                NetMgr.instance.TcpSend(cmd);
                this.destroy();
            }
        }
    };
    AddOrder.prototype.destroy = function () {
        UIManager.instance.removePop(this);
    };
    return AddOrder;
}(eui.Component));
__reflect(AddOrder.prototype, "AddOrder");

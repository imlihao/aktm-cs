var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 网络管理
 */
var NetMgr = (function () {
    function NetMgr() {
        this.socket = new MySocket();
    }
    Object.defineProperty(NetMgr, "instance", {
        get: function () {
            if (!NetMgr._self) {
                NetMgr._self = new NetMgr();
            }
            return NetMgr._self;
        },
        enumerable: true,
        configurable: true
    });
    NetMgr.prototype.TcpSend = function (cmd) {
        var data = JSON.stringify(cmd);
        console.log("message send:" + cmd.itype);
        console.log(data);
        this.socket.send(data);
    };
    return NetMgr;
}());
__reflect(NetMgr.prototype, "NetMgr");
//# sourceMappingURL=NetMgr.js.map
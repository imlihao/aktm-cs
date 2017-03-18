var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Cmd;
(function (Cmd) {
    var user = (function () {
        function user() {
            this.Itype = "login";
        }
        return user;
    }());
    Cmd.user = user;
    __reflect(user.prototype, "Cmd.user");
})(Cmd || (Cmd = {}));

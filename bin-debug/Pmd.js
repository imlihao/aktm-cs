var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pmd;
(function (pmd) {
    function loginsucc(dat) {
        console.log(dat);
        console.log("接受成功");
        MainUI.instance.Userdata = dat;
    }
    pmd.loginsucc = loginsucc;
    function chatservermessage(dat) {
        if (dat.msg) {
            notice.add(dat.msg);
        }
    }
    pmd.chatservermessage = chatservermessage;
})(pmd || (pmd = {}));
var Cmd;
(function (Cmd) {
    /**
     * CS 登录请求
     */
    var login = (function () {
        function login() {
            this.Itype = messageType.loginReq;
        }
        return login;
    }());
    Cmd.login = login;
    __reflect(login.prototype, "Cmd.login");
    /**
     * SC 弹出消息
     */
    var chatmessage = (function () {
        function chatmessage() {
        }
        return chatmessage;
    }());
    Cmd.chatmessage = chatmessage;
    __reflect(chatmessage.prototype, "Cmd.chatmessage");
    /**
     * SC 登陆成功数据
     */
    var UserData = (function () {
        function UserData() {
        }
        return UserData;
    }());
    Cmd.UserData = UserData;
    __reflect(UserData.prototype, "Cmd.UserData");
    /**
    * CS 改变订单状态
    */
    var orderSt = (function () {
        function orderSt() {
            this.Itype = messageType.OrderStatusReq;
        }
        return orderSt;
    }());
    Cmd.orderSt = orderSt;
    __reflect(orderSt.prototype, "Cmd.orderSt");
    /**
  * CS 增加订单
  */
    var orderAdd = (function () {
        function orderAdd() {
            this.Itype = messageType.OrderAddReq;
        }
        return orderAdd;
    }());
    Cmd.orderAdd = orderAdd;
    __reflect(orderAdd.prototype, "Cmd.orderAdd");
})(Cmd || (Cmd = {}));

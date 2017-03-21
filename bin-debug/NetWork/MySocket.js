var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 包装的webSocket
 */
var MySocket = (function () {
    function MySocket() {
        var _this = this;
        this.socket = new WebSocket(MySocket.url);
        //连接发生错误的回调方法
        this.socket.onerror = function () {
            console.error("err");
        };
        //连接成功建立的回调方法
        this.socket.onopen = function (event) {
            console.error("success");
        };
        //接收到消息的回调方法
        this.socket.onmessage = this.receveMSG;
        //连接关闭的回调方法
        this.socket.onclose = function () {
            console.error("Socket断开");
        };
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            _this.socket.close();
        };
    }
    MySocket.prototype.receveMSG = function (event) {
        console.log("receve:");
        console.log(event);
        var data = event.data;
        phrase.receve(data);
    };
    //关闭连接 
    MySocket.prototype.closeWebSocket = function () {
        this.socket.close();
    };
    //发送消息
    MySocket.prototype.send = function (msg) {
        if (this.socket && this.socket.readyState == WebSocket.OPEN) {
            this.socket.send(msg);
        }
        else {
            console.error("socket未连接。。");
        }
    };
    return MySocket;
}());
//服务器地址
MySocket.url = "ws://localhost:8080/AKTM/websocket";
__reflect(MySocket.prototype, "MySocket");
var phrase = (function () {
    function phrase() {
    }
    phrase.receve = function (data) {
        var dat = JSON.parse(data);
        var type = dat.Itype;
        if (!type) {
            console.error("解析type失败");
            console.error(data);
        }
        else {
            phrase.judge(dat, type);
        }
    };
    phrase.judge = function (dat, type) {
        switch (type) {
            case messageType.loginSuccessRec:
                pmd.loginsucc(dat);
                break;
            case messageType.CahtServerMessgeRec:
                pmd.chatservermessage(dat);
                break;
            default:
                console.error("类型信息未找到");
                break;
        }
    };
    return phrase;
}());
__reflect(phrase.prototype, "phrase");
var messageType = (function () {
    function messageType() {
    }
    return messageType;
}());
/**
 *  SC  登陆成功
 */
messageType.loginSuccessRec = "loginsuccess";
/**
 *  CS　登陆请求
 */
messageType.loginReq = "login";
/**
*   SC 弹出消息
*/
messageType.CahtServerMessgeRec = "chatservermessage";
/**
 *   SC 弹出消息
 */
messageType.OrderStatusReq = "orderstatus";
/**
*   SC 增加订单
*/
messageType.OrderAddReq = "orderadd";
/**
*   CS 删除订单
*/
messageType.OrderDelReq = "orderdel";
/**
 *CS 增加人物
*/
messageType.roleChangeReq = "roleChange";
__reflect(messageType.prototype, "messageType");

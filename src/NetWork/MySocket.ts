/**
 * 包装的webSocket
 */
class MySocket{
   //服务器地址
   private static url="ws://localhost:8080/AKTM/websocket";
   private socket:WebSocket;
   constructor(){
      this.socket=new WebSocket(MySocket.url);
      //连接发生错误的回调方法
      this.socket.onerror = function(){
         console.error("err");
      };      
      //连接成功建立的回调方法
      this.socket.onopen = function(event){
         console.error("success");
      }
       
      //接收到消息的回调方法
      this.socket.onmessage = this.receveMSG;
       
      //连接关闭的回调方法
      this.socket.onclose = function(){
         console.error("Socket断开");
      }
      
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = ()=>{
          this.socket.close();
      }
       
   }
   private receveMSG(event){

       console.log("receve:");
       console.log(event);
         let data=event.data; 
         phrase.receve(data); 
   }
   //关闭连接 
   public  closeWebSocket(){
      this.socket.close();
   }
   //发送消息
   public send(msg:string){
      if(this.socket&&this.socket.readyState==WebSocket.OPEN){
              this.socket.send(msg);
      }else{
          console.error("socket未连接。。");
      }
   }
}

class phrase{
   public static receve(data:string){
      let dat= JSON.parse(data);
      let type=dat.Itype;
      if(!type){
          console.error("解析type失败");
          console.error(data);
      } else{
         phrase.judge(dat,type) 
      }
   } 
   public static judge(dat:any,type:string){
      switch(type){
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

   }
}
 class messageType {
	  /**
       *  SC  登陆成功
       */
      static  loginSuccessRec:string="loginsuccess";
      /**
       *  CS　登陆请求
       */
      static loginReq:string="login";
       /**
       *   SC 弹出消息
       */
      static CahtServerMessgeRec:string="chatservermessage";
      /**
       *   SC 弹出消息
       */
      static OrderStatusReq:string="orderstatus";
       /**
       *   SC 增加订单
       */
      static OrderAddReq:string="orderadd";
}

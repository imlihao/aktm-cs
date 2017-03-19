module pmd{
   export function loginsucc(dat:Cmd.UserData){     
      console.log(dat);
      console.log("接受成功");  
      MainUI.instance.Userdata=dat;  
   }
  
   export function chatservermessage(dat:Cmd.chatmessage){     
      if(dat.msg){
           notice.add(dat.msg);
      }
   }
}
module Cmd{
   /**
    * CS 登录请求
    */
   export class login{
        public UID:number;
        public psd:string;
        Itype:string=messageType.loginReq;
   }
   /**
    * SC 弹出消息
    */
   export class chatmessage{
        public msg:string;
        public pos:number;
   }
   /**
    * SC 登陆成功数据
    */
   export class UserData{
      public my:user;
      public orders:Array<order>;
      public users:Array<user>;
      public customers:Array<customer>;
   }
}
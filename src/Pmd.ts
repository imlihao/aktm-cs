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
    /**
    * CS 改变订单状态
    */
   export class orderSt{
      public order_ID:number;
      public status:number;
      Itype:string=messageType.OrderStatusReq;
   }
      /**
    * CS 增加订单
    */
   export class orderAdd{
      public cus_id:number;
      public op_id:number;
      public dirver_id:number;
      public pos:string;
      public des:string;
      Itype:string=messageType.OrderAddReq;
   }
    /**
    * CS 删除订单
    */
   export class orderDel{
       public  order_ID:number;
      Itype:string=messageType.OrderDelReq;
   }
   /**
    * CS 改变人物
    */
   export class rolechange{
       public op:user;
       public cus:customer;
       public bool:boolean;
      Itype:string=messageType.roleChangeReq;
   }
}
class LoginView extends eui.Component{
   constructor(){
     super();
     this.skinName=loginSkin;
     this.init();
   }

   private psdInput:eui.TextInput;
   private accInput:eui.TextInput;
   private confirmBtn:eui.Button;
   private bg:eui.Group;
   private init(){
       this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
       egret.Tween.get(this.bg,{loop:true}).to({x:-400},6000).to({x:0},6000);
   }
   private onClick(){
       let acc=this.accInput.text;
       let psd=this.psdInput.text;
       if(acc&&psd){
          let cmd=new Cmd.login();
          cmd.UID=Number(acc);
          cmd.psd=psd;
          NetMgr.instance.TcpSend(cmd);
          //this.Test();
       }else{
           notice.add("请输入正确信息");
       }
   }

   private Test(){
        let u=new user();
          u.UID=2013020202;
          u.status=1;
          u.Uname="屎蛋";
          let us=new Array<user>();
          us.push(u);
          us.push(u);
          us.push(u);
           let u2=new user();
          u2.UID=2013020203;
          u2.status=2;
          u2.Uname="大大";
          us.push(u2);
          us.push(u2);
          us.push(u2);
               let u3=new user();
          u3.UID=2013020203;
          u3.status=3;
          u3.Uname="二二";
          us.push(u3);
          us.push(u3);
          us.push(u3);
          let cu=new customer();
          cu.address="亚洲-日本-列岛";
          cu.company="热天坛"
          cu.customer_ID=1;
          cu.phone="12321313";
          let cus=new Array<customer>();
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          cus.push(cu);
          let od=new order();
          od.order_ID=2;
          od.customer=cu;
          od.operator=u;
          od.dirver=u;
          od.detial="大大-肌肤的经济腹地-多岁的大三-大事记一IQ噩梦大师-大叔控啥的"
          od.order_status=1;
          od.order_time=1444402002;
          od.pos="ii-pp-点睡-请求"
          let ods=new Array<order>();
          ods.push(od);
          ods.push(od);
          ods.push(od);
          ods.push(od);
          ods.push(od);
          ods.push(od);
  
          let usd=new Cmd.UserData();
          usd.customers=cus;
           let uu=new user();
          uu.UID=2013020203;
          uu.status=1;
          uu.Uname="二二";
          usd.my=uu;
          usd.orders=ods;
          usd.users=us;
          MainUI.instance.Userdata=usd;
   }
}

class notice{
//    private static self:notice;
//    public get instance(){
//      if(!notice.self)notice.self=new notice();
//      return notice.self;  
//    }
   /**
    * @ param str  要弹出的信息 
    */
   public static add(str:string){
        let label=new eui.Label();
        label.text=str;
        label.x=640-label.width/2;
        label.y=300;
        UIManager.instance.showPop(label);
        egret.Tween.get(label).to({y:label.y-20},500).call(()=>{
            UIManager.instance.removePop(label);
        })      
   }

}
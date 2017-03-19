class AddOrder extends eui.Component{
   constructor(){
       super();
       this.skinName=AddOrderView;
   }
   private confirmBtn:eui.Button;
   private closeBtn:eui.Button;
   private desInput:eui.TextInput;
   private posInput:eui.TextInput;
   private cus:customer;
   private op:user;
   private dirver:user;
   private dirverLabel:eui.Label;
   private opLabel:eui.Label;
   private cusLabel:eui.Label;
   public init(op:user,di:user){
      this.cus=MainUI.instance.Userdata.customers[0];
      this.op=op;
      this.dirver=di;
      this.dirverLabel.text=this.dirver.Uname;
      this.opLabel.text=this.op.Uname;
      this.cusLabel.text=this.cus.customer_name;
      this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick,this);
      this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick,this);
   } 
   private OnClick(e:egret.TouchEvent){
      if(e.target==this.closeBtn){
         this.destroy();
      }else if(e.target==this.confirmBtn){
         let des=this.desInput.text;
         let pos=this.posInput.text;
         if(!des||!pos){
             notice.add("信息不完全");
         }else{
             let cmd=new Cmd.orderAdd();
             cmd.cus_id=this.cus.customer_ID;
             cmd.op_id=this.op.UID;
             cmd.dirver_id=this.dirver.UID;
             cmd.pos=pos;
             cmd.des=des;
             NetMgr.instance.TcpSend(cmd);
             this.destroy();
         }
      }
   }
   private destroy(){
       UIManager.instance.removePop(this);
   }
}
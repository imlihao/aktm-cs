class AddCusView extends eui.Component{
constructor(){
  super();
  this.skinName=AddCustomer;
   this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addRole,this);
     this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.destroy,this);
}
private type=1;

private comInput:eui.TextInput;
private addrInput:eui.TextInput;
private phoneInput:eui.TextInput;
private nameInput:eui.TextInput;

private closeBtn:eui.Button;
private confirmBtn:eui.Button;
private addRole(){
   let us=new customer();
   us.customer_name=this.nameInput.text;
   us.address=this.addrInput.text;
   us.company=this.comInput.text;
   us.phone=this.phoneInput.text;
   if( us.customer_name&&us.address&& us.phone&&us.company){
      let cmd=new Cmd.rolechange();
      cmd.bool=true;
      cmd.cus=us;
      NetMgr.instance.TcpSend(cmd);
        this.destroy();
   }else{
       notice.add("填写完整信息");
   }

}
  private destroy(){
       UIManager.instance.removePop(this);
   }
}
class AddOpView extends eui.Component{
constructor(type:number){
  super();
  this.skinName=addRoleSkin;
  this.type=type;
  this.init();
}
private type=1;

private UIDInput:eui.TextInput;
private nameInput:eui.TextInput;
private psdInput:eui.TextInput;
private CarIDInput:eui.TextInput;
private titleLabel:eui.Label;
private carLabel:eui.Label;
private closeBtn:eui.Button;
private confirmBtn:eui.Button;
private init(){
  if(this.type==1){
     this.titleLabel.text="新增操作员";    
  }else if(this.type==2){
     this.titleLabel.text="新增仓库操作员";    
  }else if(this.type==3){
     this.titleLabel.text="新增司机";
     this.CarIDInput.visible=true;
     this.carLabel.visible=true;    
  }
  this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addRole,this);
       this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.destroy,this);

}

private addRole(){
   let us=new user();
   us.Uname=this.nameInput.text;
   us.psd=this.psdInput.text;
   us.status=this.type;
   us.UID=Number(this.UIDInput.text);
   us.CarID=this.CarIDInput.text;
   if( us.Uname&&us.psd&& us.UID){
      let cmd=new Cmd.rolechange();
      cmd.bool=true;
      cmd.op=us;
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
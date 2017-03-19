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
         
       }else{
           notice.add("请输入正确信息");
       }
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
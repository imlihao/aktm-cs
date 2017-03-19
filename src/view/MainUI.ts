/**
 * 主UI界面
 */
class MainUI extends eui.Component{
    private static _self:MainUI;
    public static get instance(){
      if(!MainUI._self)MainUI._self=new MainUI();
      return MainUI._self;
    }

    constructor(){
      super();
      this.skinName=MainUISkin;
    }
    private st:eui.Label;
    private nameLabel:eui.Label;
    private id:eui.Label;
    private init(){
      this.switchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switch,this);
      this.st.text="职位："+RoleSt2string(this.data.my.status);
      this.nameLabel.text="姓名："+this.data.my.Uname;
      this.id.text="工号："+this.data.my.UID;
      if(!this.orderLayer)this.orderLayer=new OrderView();
      this.orderLayer.init();
      this.MainGroup.addChild(this.orderLayer);
    }
    private orderLayer:OrderView;

    private switch(e:egret.TouchEvent){
        if(e.target instanceof eui.RadioButton){
            let btn:eui.RadioButton=e.target;
            this.MainGroup.removeChildren();
            switch(btn.label){
                 case "订单管理":
                   if(!this.orderLayer)this.orderLayer=new OrderView();
                   this.orderLayer.init();
                   this.MainGroup.addChild(this.orderLayer);
                   break;
                 case "司机信息":
                   if(!this.orderLayer)this.orderLayer=new OrderView();
                   this.orderLayer.userDisplay(3);
                   this.MainGroup.addChild(this.orderLayer); 
                   break;
                 case "客户信息":
                   this.orderLayer.cusDisplay();
                   this.MainGroup.addChild(this.orderLayer); 
                   break;
                 case "仓储管理":
                   this.orderLayer.userDisplay(2);
                   this.MainGroup.addChild(this.orderLayer); 
                   break;
                 case "人事管理":
                   //TODO 
                   break;                   
                 case "我的订单":
                   //TODO 
                   break;                   
            }
        }

    }
    
    private switchGroup:eui.Group;
    private MainGroup:eui.Group;
    private subGroup:eui.Group;


    private data:Cmd.UserData=null;
    public set Userdata(data:Cmd.UserData){
        this.data=data;
        for(let od of this.data.orders){
          if(!od.dirver)od.dirver=new user();
          if(!od.operator)od.operator=new user();
          if(!od.customer)od.customer=new customer();
        }
        //TODO 初始化
       this.init();
       UIManager.instance.showUI(this,true);
    }
    public get Userdata():Cmd.UserData{
          return this.data;
    }
}

function RoleSt2string(st:number){
     if(st==1){
        return "普通操作员";
     }else  if(st==2){
        return "仓库操作员";
     }else if(st==3){
        return "司机";
     }
     return "管理员";
     
}
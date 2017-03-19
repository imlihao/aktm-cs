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
    private data:Cmd.UserData;
    public set Userdata(data:Cmd.UserData){
        this.data=data;
        //TODO 初始化
        console.error("开始初始化界面"+data.my.Uname+"status:"+data.my.status);
    }
}
/**
 * 
 */
class UIManager extends egret.DisplayObjectContainer{
    private static _self:UIManager;
    public static get instance(){
      if(!UIManager._self){
          UIManager._self=new UIManager();
      }
      return UIManager._self;
    }
    constructor() {
       super();
       this.addChild(this.UILayer);       
       this.addChild(this.PopLayer);       
    }
    private UILayer:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
    private PopLayer:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
    
    public showPop(ui:any,removeOther:boolean=false){
         if(removeOther)this.PopLayer.removeChildren();
          this.PopLayer.addChild(ui);
    }
    public removePop(ui:any){
          this.PopLayer.removeChild(ui);        
    }

    public showUI(ui:any,removeOther:boolean=false){
         if(removeOther)this.UILayer.removeChildren();
          this.UILayer.addChild(ui);
    }
    public removeUI(ui:any){
          this.UILayer.removeChild(ui);        
    }
}
class OrderView extends eui.Component{
    constructor(){
       super();
       this.skinName=MainUiOrderSkin;
      // this.init();
    }
    private list:eui.List;
    private addBtn:eui.Button;
    private addBtn0:eui.Button;
    private addBtn1:eui.Button;
    private addBtn2:eui.Button;
    private sc:eui.Scroller;
    public setVis(){
       this.addBtn.visible=false;
       this.addBtn0.visible=false;
       this.addBtn1.visible=false;
       this.addBtn2.visible=false;
       this.sc.viewport.scrollV=0;
       
    }
    private b1:boolean=true;
    public userDisplay(status:number){
        let users=new Array<user>();
         if(MainUI.instance.Userdata.users.length!=0){
             for(let u of MainUI.instance.Userdata.users){
                 if(u.status==status)users.push(u);
             }
         }
         if(MainUI.instance.Userdata.my.status==4){
             this.addBtn0.visible=true;
            if(this.b1){ this.addBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                 UIManager.instance.showPop(new AddOpView(status));
            },this);
            this.b1=false;
        }
         }
         this.list.itemRenderer=userItem;
         this.list.dataProvider=new eui.ArrayCollection(users);
         this.addBtn.visible=false;
         
    }
    public flush(){
        this.list.itemRenderer= this.list.itemRenderer;
        this.list.dataProviderRefreshed();
    }
    private b2:boolean=true;
    public cusDisplay(){
    if(MainUI.instance.Userdata.my.status==4||MainUI.instance.Userdata.my.status==1){
         this.addBtn1.visible=true;
         if(this.b2){
         this.addBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                 UIManager.instance.showPop(new AddCusView());
           },this);
    this.b2=false;
    }
}
         this.list.itemRenderer=cusItem;
         this.list.dataProvider=new eui.ArrayCollection(MainUI.instance.Userdata.customers);
    }
    public init(){
        this.list.itemRenderer=orderItem;     
        if(MainUI.instance.Userdata.my.status==2||MainUI.instance.Userdata.my.status==3){
            console.error(MainUI.instance.Userdata.orders);       
            let orders=new Array<order>();
            for(let od of MainUI.instance.Userdata.orders ){
                if(od.order_status==MainUI.instance.Userdata.my.status-1){
                    orders.push(od);
                    console.log("find");
                }
            }
             console.error(orders); 
            this.list.dataProvider=new eui.ArrayCollection(orders);
        }else{
            this.list.dataProvider=new eui.ArrayCollection(MainUI.instance.Userdata.orders);
        }
        this.list.scrollEnabled=true;

        if(MainUI.instance.Userdata.my.status==1||MainUI.instance.Userdata.my.status==4){
            this.addBtn.visible=true;
            if(this.b3){this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addOrder,this);
                this.b3=false;
                }
        
        }else{
            this.addBtn.visible=false;
        }
    }
    private b3:boolean=true;
    private addOrder(){
        let op:user=null;
        let diver:user=null;
        let cus:customer=null;
        for(let u of MainUI.instance.Userdata.users){
            if(u.status==2)op=u;
            if(u.status==3)diver=u;
        }
        if(op&&diver&&MainUI.instance.Userdata.customers.length!=0){
              let view=new AddOrder();
              view.init(op,diver);
              UIManager.instance.showPop(view);
        }else{
            notice.add("人员信息不足，请先录入司机，客户，操作员");
        }

    }
}
class userItem extends eui.ItemRenderer{
       constructor(){
        super();
        this.skinName=OperatorSkin;
    } 
    private delBtn:eui.Button;
    private id:eui.Label;
    private carID:eui.Label;
    private status:eui.Label;
    private uname:eui.Label;
    private phone:eui.Label;
    protected dataChanged(){
       let dat=<user>this.data;
       this.id.text="工号："+dat.UID;
       if(dat.CarID)this.carID.text="车牌号："+dat.CarID;
       this.status.text="职位："+RoleSt2string(dat.status);
       this.phone.text="电话："+"1300000001";
       this.uname.text="姓名："+dat.Uname;
    if(MainUI.instance.Userdata.my.status==4){
           this.delBtn.visible=true;
           this.delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.delRole,this);
       }
    }
 private delRole(){
      let us=new user();
      us.UID=this.data.UID;
      let cmd=new Cmd.rolechange();
      cmd.bool=false;
      cmd.op=us;
      NetMgr.instance.TcpSend(cmd);
  }
}

class cusItem extends eui.ItemRenderer{
       constructor(){
        super();
        this.skinName=OperatorSkin;
    } 
    private delBtn:eui.Button;
    private id:eui.Label;
    private carID:eui.Label;
    private status:eui.Label;
    private uname:eui.Label;
    private phone:eui.Label;
    private addr:eui.Label;
    protected dataChanged(){
       let dat=<customer>this.data;
       this.id.text="编号："+dat.customer_ID;
       this.uname.text="姓名："+dat.customer_name;
       this.status.text="公司："+dat.company;
        this.addr.visible=true;
       this.addr.text="地址："+dat.address;
       this.phone.text="电话："+dat.phone;
       if(MainUI.instance.Userdata.my.status==4||MainUI.instance.Userdata.my.status==1){
           this.delBtn.visible=true;
           this.delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.delRole,this);
       }
    }
 private delRole(){
      let us=new customer();
      us.customer_ID=this.data.customer_ID;
      let cmd=new Cmd.rolechange();
      cmd.bool=false;
      cmd.cus=us;
      NetMgr.instance.TcpSend(cmd);
  }
}
class orderItem extends eui.ItemRenderer{
    constructor(){
        super();
        this.skinName=OderItemRander;
    } 
    private order_id:eui.Label; 
    private order_status:eui.Label; 
    private time:eui.Label; 
    private Op:eui.Label; 
    private dirver:eui.Label; 
    private customer:eui.Label; 
    private addr:eui.Label; 
    private detail:eui.Label; 
    private pos:eui.Label; 
    private finishBtn:eui.Button; 
    protected dataChanged(){
       let dat=<order>this.data;
       this.order_id.textFlow=[
           {text:"单号："},
           {text:dat.order_ID+""}
       ];
       this.order_status.textFlow=[
           {text:"状态："},
           {text:OrderSt2String(dat.order_status)}
       ];
       this.time.textFlow=[
           {text:(new Date(dat.order_time).toTimeString())}
       ];  
       this.Op.textFlow=[
           {text:"仓库操作员："},
           {text:dat.operator.Uname+dat.operator.UID}
       ];  
       this.dirver.textFlow=[
           {text:"司机："},
           {text:dat.dirver.Uname+dat.dirver.CarID}
       ];  
      this.customer.textFlow=[
           {text:"客户："},
           {text:dat.customer.customer_name+"-"+dat.customer.company}
       ];
      this.addr.textFlow=[
           {text:"地址："},
           {text:dat.customer.address}
       ];   
      this.pos.textFlow=[
           {text:dat.pos}
       ];  
      this.detail.textFlow=[
           {text:dat.detial}
       ];
     
     if(MainUI.instance.Userdata.my.status==2||MainUI.instance.Userdata.my.status==3){
         this.finishBtn.visible=true;
         this.finishBtn.once(egret.TouchEvent.TOUCH_TAP,()=>{
             //TODO
         console.log("更改订单信息");
         let dat=<order>this.data;
         let cmd=new Cmd.orderSt();
         cmd.order_ID=dat.order_ID;
         cmd.status=MainUI.instance.Userdata.my.status-1;
         NetMgr.instance.TcpSend(cmd);
         },this); 
     }else{
           this.finishBtn.visible=false;
     }            
    }
}
function OrderSt2String(st:number):string{
    if(st==1){
      return "正在出库中";
    }else if(st==2){
       return "正在运送中";
    }
    return "已完成";
}
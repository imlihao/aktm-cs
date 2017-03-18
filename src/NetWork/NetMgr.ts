/**
 * 网络管理
 */
class NetMgr{
    private  socket=new MySocket();
    private static _self:NetMgr;
    public static get instance(){
      if(!NetMgr._self){
          NetMgr._self=new NetMgr();
      }
      return NetMgr._self;
    }
    public TcpSend(cmd:any){
        let data=JSON.stringify(cmd);
        console.log("message send:"+cmd.itype);
        console.log(data);
        this.socket.send(data);
    }
}

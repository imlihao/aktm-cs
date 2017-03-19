/**
 * 操作员，司机，管理员
 */
class user {
   public Uname:string;
   /**
    *工号
    */
   public UID:number;
   public psd:String ;
   /**
    * @ status 1.普通操作员 2.仓库操作员 3.司机 4.管理员
    */
   public status:number;
   public CarID:string ;
}
/**
 *  订单
 */
class order {
   public  order_ID:number;
   /**
    * @ order_status 1.新订单，未出库 2.已出库，未运送 3.运送成功
    */
   public  order_status:number;
   public  order_time:number;
   public  customer:customer;
   public  dirver:user;
   public  operator:user;
   public  detial:string;
   public  pos:string;
}
/**
 * 客户
 */
class customer {
  public customer_ID:number;
  public customer_name:string;
  public address:string;
  public phone:string;
  public company:string;
}
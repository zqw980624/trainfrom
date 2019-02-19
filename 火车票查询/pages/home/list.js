// pages/home/list.js
// 8cd7ff7ffdee4bb0972c55745c2eda2c
// 80871
import utils from '../../utils/index.js'
const appid = "80871",
  sign = "8cd7ff7ffdee4bb0972c55745c2eda2c",
  appurl = "https://route.showapi.com/909-1";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    from: "",
    to: "",
    trainDate: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let o = {
      from: options.from,
      to: options.to,
      trainDate: options.time
    }
     this.setData({
       from: options.from,
       to: options.to,
       trainDate: options.time
     })
    this.requestData(o)
      .then(this.codeData.bind(this))
  },
  codeData(res){
    const data = res.data.showapi_res_body,
          trains = []
    res.data.showapi_res_body.trains.forEach(item => {
      const ticketInfo = Object.values(item.ticketInfo)
      let price = Math.min.apply(null,ticketInfo.map(item => item.price))
       let train = {
       num: item.num,
       fromTime:item.fromTime,
       toTime: item.toTime,
         usedTime: utils.minuteToHour(item.usedTime),
       fromCity: item.fromCity,
       toCity: item.toCity ,
       ticketInfo,
       price
     }
     trains.push(train);
    
    })
    this.setData({
      trains
    })
    console.log(trains)
  },
  requestData(o){
    return new Promise((resolve,reject) => {
      wx.request({
        url: appurl,
        type: "POST",
        header: {
          "content-type": "application-json"
        },
        data: Object.assign({
          "showapi_timestamp": utils.formatterDateTime,
          "showapi_appid": appid, //这里需要改成自己的appid
          "showapi_sign": sign,  //这里需要改成自己的应用的密钥secret
        }, o),
        success: resolve
      })
    }) 
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
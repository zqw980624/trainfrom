// pages/index.js

import utils from '../../utils/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainDate:""//出发日期
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initDate()
  },
  initDate(){
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://www.showapi.com',
      method:"HEAD",
      success:(res)=>{
        const date = new Date(res.header.Date);
       
        this.setData({
         trainDate: utils.toDate(date),
          
       })
      }
    })
    wx.hideNavigationBarLoading()
  },
  timeChange(e){
    this.setData({
      trainDate: e.detail.value
    })
  },
  //表单提交事件
  query(e){
    const data = e.detail.value,
      values = Object.values(data).join("&");
      
      const reg = /.+&.+&.+.+\d$/
     if(!reg.test(values)){
       wx.showToast({
         title: '请选择地点或时间',
         icon: "none"
       })
     }else{ 
       const url = Object.keys(data).map(item => item + "=" + data[item]).join("&")
       wx.navigateTo({
         url: '/pages/home/list?' + url,
       })
     }
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
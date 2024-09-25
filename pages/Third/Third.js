// pages/Third/Third.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      imagePath5: '/images/空白图.png'
    },

    chooseImage5: function() {
      wx.chooseImage({
        count: 1, // 最多可以选择的图片数量
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          // 使用箭头函数确保this指向正确
          var tempFilePaths = res.tempFilePaths;
          if (tempFilePaths.length > 0) {
            var tempFilePath = tempFilePaths[0];
            this.setData({
              imagePath5: tempFilePath,
            });
          }
        },
        fail: function(res) {
          // 如果选择失败，则输出错误信息
          console.log('chooseImage fail:', res);
        }
      });
    },


    goTo: function () {
      // wx.navigateTo({
      //     url: '../First/First',
      // })
  },


    toggleMusic: function () {
        app.toggleMusic();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      console.log("Third Page")
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
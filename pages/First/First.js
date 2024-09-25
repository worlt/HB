// pages/First/First.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showImages: false, // 初始不显示图片
    imagePath2: '/images/空白图.png'
  },
  onLoad: function () {
    // 延迟触发动画，这里以页面加载完成为例
    setTimeout(() => {
      this.setData({
        showImages: true
      });
    }, 500); // 延迟500毫秒后触发动画
  },


  goTo: function () {
    wx.navigateTo({
      url: '../Second/Second',
      success: function () {
        console.log("goTo Second");
      },
    });
  },


  toggleMusic: function () {
    app.toggleMusic();
  },


  // 创建淡入动画
  fadeIn: function () {
    var animation = wx.createAnimation({
      duration: 1000, // 动画持续时间
      timingFunction: 'ease', // 动画效果
    })

    // 设置透明度从0到1，逐渐显示
    animation.opacity(1).step()

    this.setData({
      fadeInAnimation: animation.export() // 将动画数据导出，用于页面渲染
    })
  },

  // 创建淡出动画
  fadeOut: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    // 设置透明度从1到0，逐渐隐藏
    animation.opacity(0).step()

    this.setData({
      fadeOutAnimation: animation.export()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("First Page"),
      this.fadeIn();
  },

  chooseImage2: function () {
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
            imagePath2: tempFilePath,
          });
        }
      },
      fail: function (res) {
        // 如果选择失败，则输出错误信息
        console.log('chooseImage fail:', res);
      }
    });
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
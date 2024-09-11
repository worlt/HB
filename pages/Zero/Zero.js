// pages/Zero/Zero.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    goTo: function() {
        // 创建一个动画实例
        const animation = wx.createAnimation({
            duration: 300, // 动画持续时间
            timingFunction: 'ease', // 动画效果
        });

        // 设置动画效果，例如渐变透明度、缩放、平移等
        animation.opacity(0).step();

        // 将动画数据传递给页面
        this.setData({
            animationData: animation.export()
        });

        // 开始渐进式进入下一个页面
        wx.navigateTo({
            url: '../First/First',
            animation: {
                duration: 300, // 动画持续时间
                timingFunction: 'ease', // 动画效果
                transformOrigin: '50% 50%', // 设置动画的起始位置
                // 其他动画效果参数
            }
        });
    },


    toggleMusic: function () {
        app.toggleMusic();
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
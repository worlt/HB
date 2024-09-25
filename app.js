// app.js
App({
  onLaunch: function() {
    // 创建音乐播放器实例
    this.globalData.audioContext = wx.createInnerAudioContext();
    // 设置音乐源
    this.globalData.audioContext.src = '/music/hb.mp3';
    // 设置音乐循环播放
    this.globalData.audioContext.loop = true;
    // 音乐默认是停止状态
    this.globalData.isPlaying = false;
  },
  globalData: {
    audioContext: null,
    isPlaying: false
  },
  playMusic: function() {
    if (!this.globalData.isPlaying) {
      this.globalData.audioContext.play();
      this.globalData.isPlaying = true;
      console.log("play");
    }
  },
  pauseMusic: function() {
    if (this.globalData.isPlaying) {
      this.globalData.audioContext.pause();
      this.globalData.isPlaying = false;
      console.log("pause");
    }
  },
  toggleMusic: function() {
    console.log("点击音乐");
    const app = getApp();
    if (app.globalData.isPlaying) {
      app.pauseMusic();
    } else {
      app.playMusic();
    }
  },

  
})

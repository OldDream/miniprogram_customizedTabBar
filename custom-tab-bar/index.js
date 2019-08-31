Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log('tabBar attached');
      console.log(this);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('tabBar detached');
      console.log(this);
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#FF713D",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/page1/page1",
        iconPath: "/custom-tab-bar/icon/icon_home.png",
        selectedIconPath: "/custom-tab-bar/icon/icon_home_HL.png",
        text: "left"
      },
      {
        pagePath: "/pages/index/index",
        iconPath: "/custom-tab-bar/icon/icon_home.png", 
        selectedIconPath: "/custom-tab-bar/icon/icon_home_HL.png",
        isSpecial: true, // 标记特殊图标---中间那个
        text: "middle"
      },
      {
        pagePath: "/pages/page2/page2",
        iconPath: "/custom-tab-bar/icon/icon_mine.png",
        selectedIconPath: "/custom-tab-bar/icon/icon_mine_HL.png",
        text: "right"
      }
    ]
  },
  attached() {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      console.log(e.currentTarget.dataset);
      const data = e.currentTarget.dataset
      const url = data.path
      // console.log('before');
      // console.log(this);
      wx.switchTab({ url })
      /* this.setData({
        selected: data.index
      }) */
      // console.log('after');
      // console.log(this);
    }
  }
})

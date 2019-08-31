# 自定义特殊图标的tabBar

效果图如下：





项目配置可参考官方文档：

https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html

```js
// 根目录的app.json需要配置一下
"tabBar": {
    "custom": true, // 声明自定义
    "color": "#999999",
    "selectedColor": "#FF713D",
    "backgroundColor": "#000000",
    "list": [ // 下面的数据按照官方要求配置
      {
        "pagePath": "pages/index/index",
        "text": "left",
        "iconPath": "/custom-tab-bar/icon/icon_home.png",
        "selectedIconPath": "/custom-tab-bar/icon/icon_home_HL.png"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "/custom-tab-bar/icon/icon_home.png", /* 这条随意，项目写死了gif图，有需要的可以按需配置 */
        "selectedIconPath": "/custom-tab-bar/icon/icon_home_HL.png",  /* 同上 */
        "isSpecial": true, // 标记为特殊图标
        "text": "首页"
      },
      {
        "pagePath": "pages/page2/page2",
        "text": "right",
        "iconPath": "/custom-tab-bar/icon/icon_mine.png",
        "selectedIconPath": "/custom-tab-bar/icon/icon_mine_HL.png"
      }
    ]
  }
```



其余可参考custom-tab-bar目录下的文件，备注还算详尽

想使用gif之类动态图标的，可写到wxml中。或者写到js里动态绑定，实现方法很多。本demo使用了gif图。



tab对应页面的json文件需要添加：

```
{
  "usingComponents": {}
}
```



tab对应页面的js需要添加：

```
 /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function () {
    // 设置本页中自定义tabBar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 // 设置tabBar中 设置为选中的index
      })
    }
  },
```


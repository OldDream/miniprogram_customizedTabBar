# 自定义特殊图标的tabBar

效果图如下：


![show result](https://raw.githubusercontent.com/OldDream/miniprogram_customizedTabBar/master/gitImgs/snapShot1.PNG)


项目配置可参考官方文档：

https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html



**第一步：**

```js
// 根目录 app.json
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



**第二步**

tab对应页面的json文件，调用自定义tabbar：

```
{
  "usingComponents": {}
}
```



**第三步**：

tab对应页面的js中，设定高亮选中的条目：

```
 /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function () {
    // 设置页面中的自定义tabBar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 // 设置tabBar中 设置为选中的index
      })
    }
  },
```


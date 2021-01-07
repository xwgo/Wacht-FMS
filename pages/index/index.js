import {request} from "../../request/index.js";
Page({
  data: {
    swiperList: [{
      goods_id: 1,
      image_sec: "https://s3.ax1x.com/2020/12/24/rg0PEV.jpg",
      navigator_url: "",
      open_type: "navigate"
    },
    {
      goods_id: 2,
      image_sec: "https://s3.ax1x.com/2020/12/24/rg09H0.jpg",
      navigator_url: "",
      open_type: "navigate"
    },
    {
      goods_id: 3,
      image_sec: "https://s3.ax1x.com/2020/12/24/rg0pBq.jpg",
      navigator_url: "",
      open_type: "navigate"
    }]
  },
  
  onLoad: function(options) {
    request({
      url: "https://dev.chery-intl.sdt-int.com/sales/api/v1/areas/simple?type=2"
    })
      .then(res => {
        console.log("onLoad");
        this.setDate({
          swiperList: [
            {
              goods_id: 1,
              image_sec: "https://s3.ax1x.com/2020/12/24/rg0PEV.jpg",
              navigator_url: "",
              open_type: "navigate"
            },
            {
              goods_id: 2,
              image_sec: "https://s3.ax1x.com/2020/12/24/rg09H0.jpg",
              navigator_url: "",
              open_type: "navigate"
            },
            {
              goods_id: 3,
              image_sec: "https://s3.ax1x.com/2020/12/24/rg0pBq.jpg",
              navigator_url: "",
              open_type: "navigate"
            }
          ]})
      });
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
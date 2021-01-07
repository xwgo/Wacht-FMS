import {getSetting, choodrAddress, openSetting} from "../../utils/asyncWx";
import regeneratorRuntime from "../../lib/runtime/runtime"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {}
  },
  onShow(){
    const address = wx.getStorageSync("address");
    this.setData({
      address: {...address,
        all: address.provinceName + address.cityName + address.countyName + address.detailInfo}
    });
  },
  onLoad: function (options) {

  },
  async handleChooseAddress(){
    try {
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"];
      if(scopeAddress === false) {
        const res3 = await openSetting();
      }
      const res4 = await choodrAddress();
      wx.setStorageSync("address", {
        ...res4,
        all: res4.provinceName + res4.cityName + res4.countyName + res4.detailInfo
      });
      this.setData({
        address: res4
      });
    } catch (error) {
      console.log(error);
    }
  }
})
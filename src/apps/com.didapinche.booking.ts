import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '弹窗广告',//我的首页
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.didapinche.booking.tab.activity.DiDaTabMainActivity',
          matches:
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        },
      ],
    },
      {
        key: 2,
      name: '弹窗广告',//我的--》钱包
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗广告',
      rules: [
        {
          fastQuery: true,//我的--》全部订单、接单记录
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView <3 RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
        },
      ],
    },
  ],
});

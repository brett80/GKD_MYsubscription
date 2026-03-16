import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp(
{
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didapinche.booking.tab.activity.DiDaTabMainActivity',
          matches: '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        },
      ],
    },
  ],
}
);

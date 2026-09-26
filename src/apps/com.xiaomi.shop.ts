{
  id:"com.xiaomi.shop",
  name:'小米商城',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏广告',
      rules: [
        {
        key: 0,
        fastQuery: true,
        name: '点击广告关闭按钮',
        activityIds: '.activity.MainTabActivity',
        matches: '[id="com.xiaomi.shop:id/skip"]',
        snapshotUrls: 'https://i.gkd.li/i/14310618',
      },
    ],
  }
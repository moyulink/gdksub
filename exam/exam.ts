// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
{
  id: 'cn.wps.moffice_eng', // App包名
  name: 'WPS', // App名称
  groups: [ // 应用规则组
    {
      key: 1, // 规则组ID 唯一标识
      name: '分段广告-文档列表广告', // 规则组名称
      activityIds: [ // 界面ID 限制只在这些页面触发，避免误点
        'cn.wps.moffice.main.StartPublicActivity', // 数组形式
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [ // 应用规则组下的应用规则
        {
          key: 0, // 第一步子规则0
          name: '1.点击广告关闭按钮', // 先点右上角X
          matches: '[id="cn.wps.moffice_eng:id/nativeclose"]', // 子规则0选择器,你会发现后期引入vid优先使用vid简写(清朝老快照)
          snapshotUrls: [ // 快照链接(一定要是真实的后期好维护)
            'https://i.gkd.li/i/12505350', // 获取链接的方法在上一步有说明
            'https://i.gkd.li/i/12505286',
          ],
        },
        {
          key: 1, // 第二步子规则1
          preKeys: [0], // 必须先执行规则0，防止并行误触
          name: '2.关闭当前广告', // 子规则1名称(用于解释干啥的)
          matches: '[text="关闭当前广告"]', // 子规则1选择器
          snapshotUrls: 'https://i.gkd.li/i/12505365', // 子规则1快照链接(一定要是真实的后期好维护)
          exampleUrls: 'https://e.gkd.li/0b728b5b-e23a-4e86-bf94-f706d4ccd5d1', // 示例图可在GKD查看示例图知道规则干啥的更具体些
        },
      ],
    },
  ],
}
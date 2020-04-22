import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/demo/table/auto-table',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          customTableHead: [
            { label: '视频', field: 'video' },
            { label: '标题', field: 'title' },
            { label: '类型', field: 'type' },
            { label: '结果', field: 'result' },
            { label: '时间', field: 'time' }
          ],
          tableData: [
            { time: '01:00', title: '张三', type: 1, reason: '无', example: 'ssss' },
            { time: '11:00', title: '李四', type: 2, reason: '有', example: 'ssss' },
            { time: '21:00', title: '王五', type: 3, reason: '无', example: 'ssss' },
            { time: '14:00', title: '赵六', type: 4, reason: '有', example: 'ssss' }
          ]
        }
      }
    }
  }
]

// 高级字段组件配置
const ADVANCED_PLUGINS = [
  {
    value: 0,
    name: '评分',
    id: 101,
    width: '50%',
    type: 'rate',
    plugin: 'Rate',
    max: 5
  },
  {
    value: false,
    name: '开关',
    id: 102,
    width: '25%',
    type: 'switch',
    plugin: 'Switch'
  },
  {
    value: 0,
    name: '滑块',
    id: 103,
    width: '100%',
    type: 'slider',
    plugin: 'Slider',
    min: 0,
    max: 100
  },
  {
    value: '',
    name: '时间选择',
    id: 104,
    width: '50%',
    type: 'time',
    plugin: 'TimePicker'
  },
  {
    value: [],
    name: '级联选择',
    id: 105,
    width: '50%',
    type: 'cascader',
    plugin: 'Cascader',
    options: [
      {
        value: '1',
        label: '选项1',
        children: [
          { value: '1-1', label: '选项1-1' },
          { value: '1-2', label: '选项1-2' }
        ]
      },
      {
        value: '2',
        label: '选项2',
        children: [
          { value: '2-1', label: '选项2-1' },
          { value: '2-2', label: '选项2-2' }
        ]
      }
    ]
  },
  {
    value: null,
    name: '文件上传',
    id: 106,
    width: '50%',
    type: 'upload',
    plugin: 'Upload'
  }
]

export default ADVANCED_PLUGINS

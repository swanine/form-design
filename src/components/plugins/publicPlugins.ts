const PLUGINS = [
  {
    value: '',
    name: '单行文本',
    id: 1,
    width: '50%',
    type: 'text',
    plugin: 'Input'
  },
  {
    value: '',
    name: '多行文本',
    id: 2,
    width: '100%',
    type: 'textarea',
    plugin: 'Textarea'
  },
  {
    value: 0,
    name: '计数器',
    id: 3,
    width: '25%',
    type: 'counter',
    plugin: 'Counter'
  },
  {
    value: '',
    name: '下拉选择',
    id: 4,
    width: '50%',
    type: 'dropdown',
    plugin: 'Dropdown',
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' }
    ]
  },
  {
    value: '',
    name: '日期选择',
    id: 5,
    width: '50%',
    type: 'date',
    plugin: 'DatePicker'
  },
  {
    value: '#409EFF',
    name: '颜色选择',
    id: 6,
    width: '25%',
    type: 'color',
    plugin: 'ColorPicker'
  },
  {
    value: '',
    name: '单选框',
    id: 7,
    width: '50%',
    type: 'radio',
    plugin: 'Radio',
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' }
    ]
  },
  {
    value: [],
    name: '多选框',
    id: 8,
    width: '50%',
    type: 'checkbox',
    plugin: 'Checkbox',
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' }
    ]
  }
]

export default PLUGINS

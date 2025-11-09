import { createStore } from 'vuex'
import { IRootState } from './type'
import PLUGINS from '../components/plugins/publicPlugins'

const store = createStore<IRootState>({
  state() {
    return {
      formPluginList: [
        {
          value: '',
          name: '姓名',
          id: 1001,
          width: '50%',
          type: 'text',
          plugin: 'Input'
        },
        {
          value: '',
          name: '邮箱',
          id: 1002,
          width: '50%',
          type: 'text',
          plugin: 'Input'
        },
        {
          value: '',
          name: '个人简介',
          id: 1003,
          width: '100%',
          type: 'textarea',
          plugin: 'Textarea'
        },
        {
          value: '',
          name: '性别',
          id: 1004,
          width: '50%',
          type: 'radio',
          plugin: 'Radio',
          options: [
            { label: '男', value: 'male' },
            { label: '女', value: 'female' }
          ]
        },
        {
          value: [],
          name: '兴趣爱好',
          id: 1005,
          width: '100%',
          type: 'checkbox',
          plugin: 'Checkbox',
          options: [
            { label: '阅读', value: 'reading' },
            { label: '运动', value: 'sport' },
            { label: '音乐', value: 'music' },
            { label: '旅游', value: 'travel' }
          ]
        }
      ],
      currentSelectPlugin: {
        name: ''
      },
      previewClass: false,
      formInfo: {
        name: '用户信息表',
        description: '请填写您的个人信息',
        formStyle: ''
      }
    }
  },
  mutations: {
    // 设置当前选择组件
    setCurrentSelectPlugin(state, val) {
      state.currentSelectPlugin = val
    },
    resetFormPluginList(state, val) {
      state.formPluginList = val
    },

    // 拖拽添加新组件
    setFormPluginList(state, item) {
      state.formPluginList.push(item)
    },

    // 根据id查找修改的组件
    setFormPluginItem(state, payload) {
      const { id, changeProp, changeValue } = payload
      const targetItem = state.formPluginList.find((item) => item.id === id)
      targetItem[changeProp] = changeValue
    },

    // 预览
    changePreview(state, val) {
      state.previewClass = val
    },

    setFormInfo(state, { key, value }) {
      state.formInfo[key] = value
    },

    // 设置表单名
    setFormInfoName(state, name) {
      state.formInfo.name = name
    },

    // 设置表单描述
    setFormInfoDesc(state, desc) {
      state.formInfo.description = desc
    },

    // 设置表单样式
    setFormInfoStyle(state, style) {
      state.formInfo.formStyle = style
    }
  },
  getters: {
    getFormList(state) {
      return state.formPluginList
    },
    getFormInfo: (state) => (key: any) => {
      return state.formInfo[key]
    }
  },
  actions: {}
})

export default store

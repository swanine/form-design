import { createStore } from 'vuex'
import { IRootState } from './type'
import PLUGINS from '../components/plugins/publicPlugins'

const store = createStore<IRootState>({
  state() {
    return {
      formPluginList: [...PLUGINS],
      currentSelectPlugin: {
        name: ''
      },
      previewClass: false,
      formInfo: {
        name: '',
        description: '',
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

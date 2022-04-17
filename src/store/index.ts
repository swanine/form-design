import { createStore } from 'vuex'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      formPluginList: [
        { value: '', name: '单行文本', id: 1, width: '50%' },
        { value: '', name: '多行文本', id: 2, width: '100%' },
        { value: '', name: '计数器', id: 3, width: '25%' },
        { value: '', name: '下拉选择器', id: 4, width: '50%' },
        { value: '', name: '时间选择器', id: 5, width: '50%' },
        { value: '', name: '颜色选择器', id: 6, width: '25%' },
        { value: '', name: '按钮', id: 7, width: '25%' },
        { value: '', name: '文字', id: 8, width: '25%' },
        { value: '', name: '文字链接', id: 9, width: '50%' },
        { value: '', name: '按钮', id: 10, width: '50%' }
      ],
      currentSelectPlugin: {
        name: ''
      }
    }
  },
  mutations: {
    setCurrentSelectPlugin(state, val) {
      state.currentSelectPlugin = val
    },
    setFormPluginList(state, item) {
      state.formPluginList.push(item)
    },
    // 根据id查找修改的组件
    setFormPluginItem(state, payload) {
      const { id, changeProp, changeValue } = payload
      const targetItem = state.formPluginList.find((item) => item.id === id)
      targetItem[changeProp] = changeValue
    }
  },
  getters: {
    getFormList(state) {
      return state.formPluginList
    }
  },
  actions: {}
})

export default store

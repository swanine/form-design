import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Rbutton from '../rosy-ui/button/index'

export default defineComponent({
  setup() {
    const store = useStore()

    const handlePreview = () => {
      store.commit('changePreview', true)
      // 清除选中状态
      store.commit('setCurrentSelectPlugin', { name: '' })
    }

    const handleClosePreview = () => {
      store.commit('changePreview', false)
    }

    // 监听 ESC 键关闭预览
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && store.state.previewClass) {
        handleClosePreview()
      }
    }

    // 添加键盘事件监听
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      const isPreview = store.state.previewClass

      return (
        <>
          <header class="head__container">
            <span>表单设计</span>
            <div
              class="button_group"
              data-step="4"
              data-intro="点击预览查看你设计的表单效果"
            >
              {isPreview ? (
                <Rbutton onClick={handleClosePreview}>关闭预览 (ESC)</Rbutton>
              ) : (
                <Rbutton onClick={handlePreview}>预览</Rbutton>
              )}
            </div>
          </header>
        </>
      )
    }
  }
})

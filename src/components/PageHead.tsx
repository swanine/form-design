import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Rbutton from '../rosy-ui/button/index'

export default defineComponent({
  setup() {
    const store = useStore()
    const handleClick = () => {
      store.commit('changePreview', true)
      const mask = document.querySelector('.mask .el-scrollbar__view')
      mask?.addEventListener('click', (e) => {
        mask === e.target && store.commit('changePreview', false)
      })
    }

    return () => {
      return (
        <>
          <header class="head__container">
            <span>表单设计</span>
            <div
              class="button_group"
              data-step="4"
              data-intro="最后点击预览查看你设计的表单，当然实现这个功能还早着呢😅"
            >
              <Rbutton onClick={handleClick}>预览</Rbutton>
            </div>
          </header>
        </>
      )
    }
  }
})

import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import FromHead from './FormHead'
import FromBody from './FormBody.vue'

export default defineComponent({
  setup() {
    const store = useStore()

    const handleMaskClick = (e: MouseEvent) => {
      const target = e.target as Element
      // 点击遮罩层外部区域关闭预览
      if (
        target.classList.contains('mask') ||
        target.classList.contains('el-scrollbar__view')
      ) {
        store.commit('changePreview', false)
      }
    }

    const handleCardClick = (e: MouseEvent) => {
      // 阻止卡片内部点击事件冒泡
      e.stopPropagation()
    }

    return () => {
      return (
        <>
          <el-scrollbar class="mask" onClick={handleMaskClick}>
            <div class="form_wrap" onClick={handleCardClick}>
              <div class="form_card">
                <FromHead></FromHead>
                <FromBody></FromBody>
              </div>
            </div>
          </el-scrollbar>
        </>
      )
    }
  }
})

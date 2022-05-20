import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import FromHead from './FormHead'
import FromBody from './FormBody.vue'

export default defineComponent({
  setup() {
    const store = useStore()

    onMounted(() => {
      const mask = document.querySelector('.mask .el-scrollbar__view')
      mask?.addEventListener('click', (e) => {
        mask === e.target && store.commit('changePreview', false)
      })
    })

    return () => {
      return (
        <>
          <el-scrollbar class="mask">
            <div class="form_wrap">
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

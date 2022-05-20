import { defineComponent } from 'vue'
import FromHead from './FormHead'
import FromBody from './FormBody.vue'

export default defineComponent({
  setup() {
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

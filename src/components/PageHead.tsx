import { defineComponent } from 'vue'
import Rbutton from '../rosy-ui/button/index';

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <header class="head__container">
            <span>表单设计</span>
            <div class="button_group">
              <Rbutton>预览</Rbutton>
            </div>
          </header>
        </>
      )
    }
  }
})

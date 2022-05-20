import { defineComponent } from 'vue'
import FormView from '~/components/FormView'
import './index.scss'

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div class="preview__wrap">
            <FormView></FormView>
          </div>
        </>
      )
    }
  }
})

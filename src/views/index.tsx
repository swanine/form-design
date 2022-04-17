import { defineComponent } from 'vue'
import PageHead from "../components/PageHead";
import Home from './home/index'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="page_wrapper">
          <PageHead></PageHead>
          <Home></Home>
        </div>
      )
    }
  }
})

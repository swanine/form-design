import { defineComponent, onMounted } from 'vue'
import PageHead from '../components/PageHead'
import Home from './home/index'

export default defineComponent({
  setup() {
    onMounted(() => {
      const loader = document.querySelector<HTMLDivElement>('.loader')!
      loader.remove()
    })
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

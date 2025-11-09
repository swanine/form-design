import { defineComponent, onMounted } from 'vue'
import introJs from 'intro.js'
import PluginsCard from './PluginsCard.vue'
import ADVANCED_PLUGINS from './plugins/advancedPlugins'

export default defineComponent({
  setup() {
    onMounted(() => {
      const isIntroJs = localStorage.getItem('course') ?? false

      !isIntroJs &&
        introJs()
          .setOptions({
            prevLabel: '上一步',
            nextLabel: '下一步',
            skipLabel: '跳过',
            doneLabel: '结束',
            tooltipPosition: 'right',
            positionPrecedence: ['right', 'bottom', 'left', 'top']
          })
          .oncomplete(function () {
            // 点击跳过按钮后执行的事件
          })
          .onexit(function () {
            // 点击结束按钮后， 执行的事件
            // 只有用户点击结束，才在下次取消指引
            localStorage.setItem('course', 'course')
          })
          .start()
    })
    return () => {
      return (
        <section class="plugins_wrap">
          <el-scrollbar>
            <PluginsCard
              data-step="1"
              data-intro="拖拽字段至表单设计👉"
              data-position="bottom"
            ></PluginsCard>
            <PluginsCard
              title="高级字段"
              pluginsList={ADVANCED_PLUGINS}
            ></PluginsCard>
          </el-scrollbar>
        </section>
      )
    }
  }
})

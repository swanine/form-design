import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="form_head">
          <div class="form_head_main">
            <img
              _ngcontent-qflow-fe-c774=""
              src="https://file.qingflow.com/assets/widget/theme/header0.png?x-oss-process=image/format,webp"
              class="ng-star-inserted"
            />
            <div class="form_head_title">
              <div class="title_context inseted">点击编辑表单名</div>
            </div>
          </div>
          <div class="form_head_attach">
            <div class="attach_context inseted">添加描述</div>
            <div class="attach_context inseted">编号格式</div>
            <div class="attach_context inseted">表单样式</div>
          </div>
        </div>
      )
    }
  }
})

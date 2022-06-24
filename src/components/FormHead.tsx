import { defineComponent, ref } from 'vue'
import { useStore, mapGetters } from 'vuex'

export default defineComponent({
  directives: {
    focus: {
      mounted: function (el: HTMLInputElement, bind) {
        el.focus()

        // 这里拿到Mutations调用
        el.onkeyup = function (e: KeyboardEvent) {
          if (e.key === 'Enter') {
            bind.value((this as HTMLInputElement).value)
          }
        }
      }
    }
  },
  setup() {
    /*
      TODO
      下面这里是一个优化点：
          在directives中mapMutations中的this有问题
          我不想改成render结构就这么先凑合吧
          目前是通过自定义指令将函数对象传递到指令中通过bind.value调用
    */
    const store = useStore()
    const { setFormInfoName, setFormInfoDesc } = {
      setFormInfoName: (val: string) => store.commit('setFormInfoName', val),
      setFormInfoDesc: (val: string) => store.commit('setFormInfoDesc', val)
    }

    // 当前修改的
    const currentFormInfoName = ref('')
    // 修改表单信息
    const changeInfo = (event: MouseEvent, name: string) => {
      event.stopPropagation()
      currentFormInfoName.value = name

      /**
       * TODO
       * 一个优化点：
       *    将事件处理移至指令中处理
       *    目前是会重复添加
       */
      const callback = (e: MouseEvent) => {
        e.stopPropagation()
        if ((event.target as Element).contains(e.target as Element)) return
        window.removeEventListener('click', callback)

        const value =
          currentFormInfoName.value === 'name' ? formInfoName : formInfoDesc

        store.commit('setFormInfo', {
          key: currentFormInfoName.value,
          value: value.value
        })
        currentFormInfoName.value = ''
      }
      const names = ['name', 'description']
      if (names.includes(currentFormInfoName.value)) {
        window.addEventListener('click', callback)
        return
      }

      window.removeEventListener('click', callback)
    }

    const getFormInfo = store.getters.getFormInfo
    const formInfoName = ref(getFormInfo('name'))
    const formInfoDesc = ref(getFormInfo('description'))

    return () => {
      return (
        <div
          class="form_head"
          data-step="2"
          data-intro="在这里对表单进行名称及描述设置☝，还没做"
        >
          <div class="form_head_main">
            <img
              _ngcontent-qflow-fe-c774=""
              src="https://file.qingflow.com/assets/widget/theme/header0.png?x-oss-process=image/format,webp"
              class="ng-star-inserted"
            />
            <div class="form_head_title">
              <div
                class={[
                  'title_context',
                  'inseted',
                  { is_inset: currentFormInfoName.value === 'name' }
                ]}
                onClick={(event) => changeInfo(event, 'name')}
              >
                {currentFormInfoName.value === 'name' ? (
                  <input
                    v-focus={setFormInfoName}
                    v-model={formInfoName.value}
                    type="text"
                    placeholder="输入表单名"
                  />
                ) : (
                  <span>{getFormInfo('name') || '点击编辑表单名'}</span>
                )}
              </div>
            </div>
          </div>
          <div class="form_head_attach">
            <div
              class={[
                'attach_context',
                'inseted',
                { is_inset: currentFormInfoName.value === 'description' }
              ]}
              onClick={(event) => changeInfo(event, 'description')}
            >
              {currentFormInfoName.value === 'description' ? (
                <input
                  v-focus={setFormInfoDesc}
                  v-model={formInfoDesc.value}
                  type="text"
                  placeholder="添加描述"
                />
              ) : (
                <span>{getFormInfo('description') || '添加描述'}</span>
              )}
            </div>

            <div
              class="attach_context inseted"
              onClick={(event) => console.log(event)}
            >
              <span>表单样式</span>
            </div>
          </div>
        </div>
      )
    }
  }
})

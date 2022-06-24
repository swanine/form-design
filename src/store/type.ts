export interface IPlugin {
  name: string
}

export interface IRootState {
  currentSelectPlugin: IPlugin
  formPluginList: any[]
  previewClass: boolean
  formInfo: {
    name: string
    description: string
    formStyle: string
  }
}

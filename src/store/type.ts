export interface IPlugin {
  name: string
}

export interface IRootState {
  currentSelectPlugin: IPlugin
  formPluginList: any[]
}

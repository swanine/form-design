export default interface IConfig {
  id: number | string
  readonly?: boolean
  name: string
  value: any
  type?: string
  width?: number
  placeholder?: string
  required?: boolean
}

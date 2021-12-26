/**
 * @param T Kiểu dữ liệu của action
 * */
export interface ActionDelegate<T> {
  icon: string | undefined
  title: string
  action: T
}

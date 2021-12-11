import { HTMLAttributes } from '@vue/runtime-dom'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [k: string]: any
  }

  interface ImgHTMLAttributes extends HTMLAttributes {
    loading?: 'auto' | 'eager' | 'lazy'
  }
}

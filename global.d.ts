declare module JSX {
  interface IntrinsicElements {
    text: P5Props & {
      style?: null
    }
    sketch: P5Props
  }
}

type FiberNode = {
  id: number
  stateNode: Element
}

type HostContext = {}

type P5Child = React.ReactElement<P5Props>;

type P5EventName = 'preLoad' | 'setup' | 'draw'

type P5Props = {
  key?: string | number
  ref?: (base: any) => void
  hidden?: boolean

  children?: P5Child | Array<P5Child | Array<P5Child>>

  textValue?: string
  //style?: P5Style
  onClick?: (e: any) => void
}
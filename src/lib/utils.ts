import P5Container from './components/Sketch'
import P5Root from './P5Root'
import P5Text from './components/P5Text'

let rootNodeInstance: P5Root = null

function getHostContextNode(rootNode) {
  if (typeof rootNode !== undefined) {
    return rootNodeInstance = rootNode
  } else {
    return rootNodeInstance = new P5Root(rootNode)
  }
}

function createElement(type: any, target: HTMLElement = null, props: P5Props = null, root: P5Root = null) {
  const COMPONENTS = {
    ROOT: () => new P5Root(target),
    p: () => new P5Text(root, props),
    p5Container: () => new P5Container(root, props),
    default: () => undefined
  }

  const component = COMPONENTS[type] === undefined ? COMPONENTS.default() : COMPONENTS[type]()

  if (component === null) {
    throw Error(`Component with type ${type} can not be found!`)
  }

  if (component !== null && root !== null) {
    root.appendChild(component)
  }

  return component
}

export {
  getHostContextNode,
  createElement
}
